# Turn On Accounts and Community Lists

The Community page is already built. Complete these steps once to connect it to
Supabase, which stores accounts, published lists, and private feedback.

## 1. Create the database

1. Go to https://supabase.com and create a project.
2. In the project, open **SQL Editor** and choose **New query**.
3. Open `supabase-schema.sql` from this website folder.
4. Paste the entire file into the query and click **Run**.

## 2. Connect the website

1. In Supabase, open **Project Settings**, then **API**.
2. Copy the **Project URL**.
3. Copy the **Publishable key**. An older project may call this the public
   `anon` key. Never use the `service_role` or secret key in the website.
4. Open `supabase-config.js` and replace the two placeholder values:

```js
window.FOOTBALL50_CONFIG = {
  supabaseUrl: "YOUR_PROJECT_URL",
  supabasePublishableKey: "YOUR_PUBLISHABLE_KEY"
};
```

## 3. Set the login addresses

1. In Supabase, open **Authentication**, then **URL Configuration**.
2. Set **Site URL** to your Netlify address, such as
   `https://YOUR-SITE.netlify.app`.
3. Add `https://YOUR-SITE.netlify.app/community.html` under
   **Redirect URLs**.
4. For local testing, also add
   `http://127.0.0.1:5500/community.html`.

## 4. Publish the update

Upload the whole website folder to the same Netlify project again. Make sure the
new Community files are included:

- `community.html`
- `community.css`
- `community.js`
- `supabase-config.js`
- the updated `index.html`, `profile.js`, and `profile.css`

Do not upload `supabase-schema.sql` if you do not want it publicly downloadable.
It is only needed in the Supabase SQL Editor.

## 5. Test it

1. Open `/community.html` on the Netlify website.
2. Create an account and confirm its email.
3. Build and publish a public list.
4. Open the page in a private browser window to confirm other people can see it.
5. Send feedback. You can read feedback in Supabase under **Table Editor**,
   then **feedback**.

Keep email confirmation enabled for a public website. The database rules allow
people to edit or delete only their own lists and to read only their own private
feedback submissions.
