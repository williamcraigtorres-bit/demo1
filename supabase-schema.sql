-- The Football 50 community database
-- Run this entire file once in Supabase: SQL Editor -> New query -> Run.

create extension if not exists pgcrypto;
create schema if not exists private;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null check (char_length(username) between 2 and 30),
  created_at timestamptz not null default now()
);

create table if not exists public.community_lists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  title text not null check (char_length(title) between 3 and 80),
  description text not null default '' check (char_length(description) <= 400),
  player_slugs text[] not null check (cardinality(player_slugs) between 1 and 50),
  is_public boolean not null default true,
  created_at timestamptz not null default now(),
  constraint community_lists_user_id_fkey
    foreign key (user_id) references public.profiles(id) on delete cascade
);

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  category text not null check (category in ('Idea', 'Bug', 'Player information', 'Other')),
  message text not null check (char_length(message) between 10 and 1000),
  created_at timestamptz not null default now(),
  constraint feedback_user_id_fkey
    foreign key (user_id) references public.profiles(id) on delete cascade
);

create index if not exists community_lists_created_at_idx
  on public.community_lists (created_at desc);
create index if not exists community_lists_user_id_idx
  on public.community_lists (user_id);
create index if not exists feedback_user_id_idx
  on public.feedback (user_id);

create or replace function private.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, username)
  values (
    new.id,
    coalesce(
      nullif(left(trim(new.raw_user_meta_data ->> 'username'), 30), ''),
      'Football fan'
    )
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function private.handle_new_user();

-- This also creates profiles if the SQL is run after test accounts already exist.
insert into public.profiles (id, username)
select
  id,
  coalesce(
    nullif(left(trim(raw_user_meta_data ->> 'username'), 30), ''),
    'Football fan'
  )
from auth.users
on conflict (id) do nothing;

alter table public.profiles enable row level security;
alter table public.community_lists enable row level security;
alter table public.feedback enable row level security;

revoke all on table public.profiles from anon, authenticated;
revoke all on table public.community_lists from anon, authenticated;
revoke all on table public.feedback from anon, authenticated;

grant select on table public.profiles to anon, authenticated;
grant update on table public.profiles to authenticated;

grant select on table public.community_lists to anon, authenticated;
grant insert, update, delete on table public.community_lists to authenticated;

grant insert, select on table public.feedback to authenticated;

drop policy if exists "Profiles are public" on public.profiles;
create policy "Profiles are public"
  on public.profiles for select
  to anon, authenticated
  using (true);

drop policy if exists "Users update their profile" on public.profiles;
create policy "Users update their profile"
  on public.profiles for update
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

drop policy if exists "Public lists are visible" on public.community_lists;
create policy "Public lists are visible"
  on public.community_lists for select
  to anon, authenticated
  using (is_public = true);

drop policy if exists "Owners can view every own list" on public.community_lists;
create policy "Owners can view every own list"
  on public.community_lists for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users create their own lists" on public.community_lists;
create policy "Users create their own lists"
  on public.community_lists for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users update their own lists" on public.community_lists;
create policy "Users update their own lists"
  on public.community_lists for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users delete their own lists" on public.community_lists;
create policy "Users delete their own lists"
  on public.community_lists for delete
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users send their own feedback" on public.feedback;
create policy "Users send their own feedback"
  on public.feedback for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users view their own feedback" on public.feedback;
create policy "Users view their own feedback"
  on public.feedback for select
  to authenticated
  using ((select auth.uid()) = user_id);
