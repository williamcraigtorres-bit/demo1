(() => {
  const featuredPlayers = {
    messi: { image: "Messi.webp", country: "Argentina", position: "Forward" },
    ronaldo: { image: "Ronaldo.png", country: "Portugal", position: "Forward" },
    maradona: { image: "Maradona.jpg", country: "Argentina", position: "Attacking Midfielder" },
    "ronaldo-nazario": { image: "R9.png", country: "Brazil", position: "Forward" },
    pele: { image: "Pele.jpg", country: "Brazil", position: "Forward" },
    zidane: { image: "Zidane.jpg", country: "France", position: "Midfielder" }
  };

  const profiles = window.PLAYER_PROFILES || {};
  const order = window.PLAYER_ORDER || [];
  const allPlayers = order.map(item => {
    const details = profiles[item.slug] || featuredPlayers[item.slug] || {};
    return {
      slug: item.slug,
      rank: item.rank,
      name: item.name,
      image: details.image || "Messi.webp",
      country: details.country || "",
      position: details.position || "",
      profile: `players/${item.path || `${item.slug}.html`}`
    };
  });
  const playerBySlug = new Map(allPlayers.map(player => [player.slug, player]));
  const customPlayerPrefix = "custom:";
  const maximumListSize = 50;

  const setupNotice = document.getElementById("setup-notice");
  const signedOutView = document.getElementById("signed-out-view");
  const signedInView = document.getElementById("signed-in-view");
  const accountName = document.getElementById("account-name");
  const accountEmail = document.getElementById("account-email");
  const authStatus = document.getElementById("auth-status");
  const signinForm = document.getElementById("signin-form");
  const signupForm = document.getElementById("signup-form");
  const signoutButton = document.getElementById("signout-button");
  const authFormTitle = document.getElementById("auth-form-title");
  const authFormCopy = document.getElementById("auth-form-copy");
  const authSwitchPrompt = document.getElementById("auth-switch-prompt");
  const authSwitchButton = document.getElementById("auth-switch-button");
  const resendConfirmationButton = document.getElementById("resend-confirmation");

  const playerPool = document.getElementById("player-pool");
  const rankingBlocks = document.getElementById("ranking-blocks");
  const builderEmpty = document.getElementById("builder-empty");
  const builderCount = document.getElementById("builder-count");
  const builderSearch = document.getElementById("builder-search");
  const addAllButton = document.getElementById("add-all-button");
  const clearListButton = document.getElementById("clear-list-button");
  const customPlayerToggle = document.getElementById("custom-player-toggle");
  const customPlayerForm = document.getElementById("custom-player-form");
  const customPlayerName = document.getElementById("custom-player-name");
  const customPlayerCancel = document.getElementById("custom-player-cancel");
  const customPlayerStatus = document.getElementById("custom-player-status");
  const listTitle = document.getElementById("list-title");
  const listDescription = document.getElementById("list-description");
  const publicList = document.getElementById("public-list");
  const publishButton = document.getElementById("publish-button");
  const publishStatus = document.getElementById("publish-status");

  const communityLists = document.getElementById("community-lists");
  const feedEmpty = document.getElementById("feed-empty");
  const feedStatus = document.getElementById("feed-status");
  const refreshListsButton = document.getElementById("refresh-lists-button");

  const feedbackForm = document.getElementById("feedback-form");
  const feedbackCategory = document.getElementById("feedback-category");
  const feedbackMessage = document.getElementById("feedback-message");
  const feedbackStatus = document.getElementById("feedback-status");

  const config = window.FOOTBALL50_CONFIG || {};
  const isConfigured =
    /^https:\/\/.+\.supabase\.co$/.test(config.supabaseUrl || "") &&
    config.supabasePublishableKey &&
    !config.supabasePublishableKey.startsWith("PASTE_");
  const supabaseClient = isConfigured && window.supabase?.createClient
    ? window.supabase.createClient(
        config.supabaseUrl,
        config.supabasePublishableKey
      )
    : null;
  const authRedirectUrl = new URL(
    "community.html",
    config.siteUrl || window.location.href
  ).href;

  let currentUser = null;
  let currentProfile = null;
  let draggedIndex = null;
  let builderSlugs = readDraft().playerSlugs;
  let confirmationEmail = "";

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalizeText(value) {
    return String(value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function customPlayerFromSlug(slug) {
    if (typeof slug !== "string" || !slug.startsWith(customPlayerPrefix)) return null;
    try {
      const name = decodeURIComponent(slug.slice(customPlayerPrefix.length)).trim();
      if (name.length < 2 || name.length > 60) return null;
      return {
        slug,
        name,
        rank: null,
        image: "",
        country: "",
        position: "",
        profile: "",
        isCustom: true
      };
    } catch {
      return null;
    }
  }

  function getPlayer(slug) {
    return playerBySlug.get(slug) || customPlayerFromSlug(slug);
  }

  function playerInitials(name) {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0])
      .join("")
      .toUpperCase();
  }

  function playerImageMarkup(player) {
    if (player.isCustom) {
      return `<span class="custom-player-avatar" aria-hidden="true">${escapeHtml(playerInitials(player.name))}</span>`;
    }
    return `<img src="${encodeURI(player.image)}" alt="" loading="lazy">`;
  }

  function setStatus(element, message = "", type = "") {
    element.textContent = message;
    element.classList.toggle("error", type === "error");
    element.classList.toggle("success", type === "success");
  }

  function readableError(error) {
    const message = error?.message || "Something went wrong. Please try again.";
    if (/invalid login credentials/i.test(message)) {
      return "The email or password is incorrect.";
    }
    if (/user already registered/i.test(message)) {
      return "An account already exists with that email.";
    }
    if (/email not confirmed/i.test(message)) {
      return "Please confirm your email before signing in.";
    }
    return message;
  }

  function setBusy(button, busy, busyLabel, normalLabel) {
    button.disabled = busy;
    button.textContent = busy ? busyLabel : normalLabel;
  }

  function getAuthReturn() {
    const query = new URLSearchParams(window.location.search);
    const hash = new URLSearchParams(window.location.hash.slice(1));
    const error = query.get("error_description") || hash.get("error_description");
    const completed =
      query.has("code") ||
      hash.has("access_token") ||
      hash.get("type") === "signup";

    return {
      completed,
      error: error || ""
    };
  }

  function clearAuthReturn() {
    if (!window.location.search && !window.location.hash) return;
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  function offerConfirmationResend(email) {
    confirmationEmail = email;
    resendConfirmationButton.hidden = !email;
  }

  function readDraft() {
    const emptyDraft = { title: "", description: "", playerSlugs: [] };
    try {
      const saved = JSON.parse(localStorage.getItem("football50-list-draft"));
      if (!saved) return emptyDraft;
      const validSlugs = Array.isArray(saved.playerSlugs)
        ? [...new Set(saved.playerSlugs)].filter(slug => Boolean(getPlayer(slug)))
        : [];
      return {
        title: typeof saved.title === "string" ? saved.title : "",
        description: typeof saved.description === "string" ? saved.description : "",
        playerSlugs: validSlugs.slice(0, maximumListSize)
      };
    } catch {
      return emptyDraft;
    }
  }

  function saveDraft() {
    localStorage.setItem(
      "football50-list-draft",
      JSON.stringify({
        title: listTitle.value,
        description: listDescription.value,
        playerSlugs: builderSlugs
      })
    );
  }

  function switchAuthView(view) {
    const showSignIn = view === "signin";
    signinForm.hidden = !showSignIn;
    signupForm.hidden = showSignIn;
    authFormTitle.textContent = showSignIn ? "Welcome back" : "Join the community";
    authFormCopy.textContent = showSignIn
      ? "Continue building your all-time ranking."
      : "Create an account to publish your own lists.";
    authSwitchPrompt.textContent = showSignIn
      ? "New to The Football 50?"
      : "Already have an account?";
    authSwitchButton.textContent = showSignIn ? "Create account" : "Sign in";
    authSwitchButton.dataset.authView = showSignIn ? "signup" : "signin";
    setStatus(authStatus);
  }

  async function loadCurrentProfile() {
    if (!supabaseClient || !currentUser) {
      currentProfile = null;
      return;
    }

    const { data } = await supabaseClient
      .from("profiles")
      .select("id, username")
      .eq("id", currentUser.id)
      .maybeSingle();

    currentProfile = data || {
      id: currentUser.id,
      username: currentUser.user_metadata?.username || "Football fan"
    };
  }

  async function updateAccount(session) {
    currentUser = session?.user || null;
    await loadCurrentProfile();

    signedOutView.hidden = Boolean(currentUser);
    signedInView.hidden = !currentUser;
    if (currentUser) {
      accountName.textContent = currentProfile?.username || "Football fan";
      accountEmail.textContent = currentUser.email || "";
    }

    await loadCommunityLists();
  }

  function renderPlayerPool() {
    const search = normalizeText(builderSearch.value);
    const selected = new Set(builderSlugs);
    const matches = allPlayers.filter(player =>
      normalizeText(`${player.name} ${player.country} ${player.position}`).includes(search)
    );

    playerPool.innerHTML = matches.map(player => {
      const isSelected = selected.has(player.slug);
      return `
        <article class="pool-player${isSelected ? " selected" : ""}">
          <div class="pool-player-image">
            <img src="${encodeURI(player.image)}" alt="" loading="lazy">
          </div>
          <div class="pool-player-copy">
            <strong>${escapeHtml(player.name)}</strong>
            <span>#${player.rank} on the original list</span>
          </div>
          <button
            class="pool-add"
            type="button"
            data-add-player="${escapeHtml(player.slug)}"
            aria-label="${isSelected ? "Already added" : `Add ${escapeHtml(player.name)}`}"
            title="${isSelected ? "Already added" : "Add player"}"
            ${isSelected ? "disabled" : ""}
          >${isSelected ? "&#10003;" : "+"}</button>
        </article>
      `;
    }).join("");
  }

  function renderRanking() {
    builderEmpty.hidden = builderSlugs.length > 0;
    rankingBlocks.hidden = builderSlugs.length === 0;
    builderCount.textContent = builderSlugs.length;
    clearListButton.disabled = builderSlugs.length === 0;
    const allOriginalPlayersSelected = allPlayers.every(player => builderSlugs.includes(player.slug));
    addAllButton.disabled = allOriginalPlayersSelected || builderSlugs.length >= maximumListSize;

    rankingBlocks.innerHTML = builderSlugs.map((slug, index) => {
      const player = getPlayer(slug);
      if (!player) return "";
      return `
        <li class="ranking-block" draggable="true" data-index="${index}">
          <span class="ranking-number">${index + 1}</span>
          <div class="ranking-player-image">
            ${playerImageMarkup(player)}
          </div>
          <div class="ranking-player-copy">
            <strong>${escapeHtml(player.name)}</strong>
            <span>${player.isCustom ? "Added by you" : `Original rank #${player.rank}`}</span>
          </div>
          <div class="block-actions">
            <button class="block-action" type="button" data-action="up" data-index="${index}" aria-label="Move ${escapeHtml(player.name)} up" title="Move up" ${index === 0 ? "disabled" : ""}>&uarr;</button>
            <button class="block-action" type="button" data-action="down" data-index="${index}" aria-label="Move ${escapeHtml(player.name)} down" title="Move down" ${index === builderSlugs.length - 1 ? "disabled" : ""}>&darr;</button>
            <button class="block-action remove" type="button" data-action="remove" data-index="${index}" aria-label="Remove ${escapeHtml(player.name)}" title="Remove">&times;</button>
          </div>
        </li>
      `;
    }).join("");

    renderPlayerPool();
    saveDraft();
  }

  function movePlayer(fromIndex, toIndex) {
    if (
      fromIndex < 0 ||
      toIndex < 0 ||
      fromIndex >= builderSlugs.length ||
      toIndex >= builderSlugs.length ||
      fromIndex === toIndex
    ) return;

    const [slug] = builderSlugs.splice(fromIndex, 1);
    builderSlugs.splice(toIndex, 0, slug);
    renderRanking();
  }

  function publicPlayersMarkup(slugs, startAt = 0) {
    return slugs.map((slug, offset) => {
      const player = getPlayer(slug);
      if (!player) return "";
      return `
        <li class="public-player">
          <span>${startAt + offset + 1}</span>
          <span class="public-player-image">${playerImageMarkup(player)}</span>
          <strong>${escapeHtml(player.name)}</strong>
        </li>
      `;
    }).join("");
  }

  function formatDate(value) {
    const date = new Date(value);
    return new Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(date);
  }

  async function loadCommunityLists() {
    if (!supabaseClient) {
      communityLists.innerHTML = "";
      feedEmpty.hidden = false;
      setStatus(feedStatus, "Connect Supabase to load community submissions.");
      return;
    }

    refreshListsButton.disabled = true;
    setStatus(feedStatus, "Loading lists...");

    const { data: lists, error } = await supabaseClient
      .from("community_lists")
      .select("id, user_id, title, description, player_slugs, is_public, created_at")
      .order("created_at", { ascending: false })
      .limit(40);

    if (error) {
      refreshListsButton.disabled = false;
      setStatus(feedStatus, readableError(error), "error");
      return;
    }

    const userIds = [...new Set((lists || []).map(list => list.user_id))];
    let profileMap = new Map();
    if (userIds.length) {
      const { data: authors } = await supabaseClient
        .from("profiles")
        .select("id, username")
        .in("id", userIds);
      profileMap = new Map((authors || []).map(author => [author.id, author.username]));
    }

    communityLists.innerHTML = (lists || []).map(list => {
      const slugs = [...new Set(list.player_slugs || [])].filter(slug => Boolean(getPlayer(slug)));
      const preview = slugs.slice(0, 5);
      const remaining = slugs.slice(5);
      const isOwner = currentUser?.id === list.user_id;
      const privacy = list.is_public ? "" : " &middot; Private";
      return `
        <article class="community-list-card">
          <header class="public-list-header">
            <div>
              <h3>${escapeHtml(list.title)}</h3>
              <div class="public-list-meta">By ${escapeHtml(profileMap.get(list.user_id) || "Football fan")} &middot; ${formatDate(list.created_at)}${privacy}</div>
            </div>
            ${isOwner ? `<button class="delete-list-button" type="button" data-delete-list="${list.id}">Delete</button>` : ""}
          </header>
          ${list.description ? `<p class="public-list-description">${escapeHtml(list.description)}</p>` : ""}
          <ol class="public-ranking">
            ${publicPlayersMarkup(preview)}
          </ol>
          ${remaining.length ? `
            <details class="complete-ranking">
              <summary>View all ${slugs.length} players</summary>
              <ol class="public-ranking">
                ${publicPlayersMarkup(remaining, 5)}
              </ol>
            </details>
          ` : ""}
        </article>
      `;
    }).join("");

    feedEmpty.hidden = Boolean(lists?.length);
    refreshListsButton.disabled = false;
    setStatus(feedStatus);
  }

  authSwitchButton.addEventListener("click", () => {
    switchAuthView(authSwitchButton.dataset.authView);
  });

  signinForm.addEventListener("submit", async event => {
    event.preventDefault();
    if (!supabaseClient) return;
    const button = signinForm.querySelector("button[type='submit']");
    setBusy(button, true, "Signing in...", "Sign in");
    setStatus(authStatus);

    const email = document.getElementById("signin-email").value.trim();
    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password: document.getElementById("signin-password").value
    });

    setBusy(button, false, "Signing in...", "Sign in");
    if (error) {
      setStatus(authStatus, readableError(error), "error");
      if (/email not confirmed/i.test(error.message || "")) {
        offerConfirmationResend(email);
      }
    }
  });

  signupForm.addEventListener("submit", async event => {
    event.preventDefault();
    if (!supabaseClient) return;
    const button = signupForm.querySelector("button[type='submit']");
    setBusy(button, true, "Creating account...", "Create account");
    setStatus(authStatus);

    const username = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password: document.getElementById("signup-password").value,
      options: {
        data: { username },
        emailRedirectTo: authRedirectUrl
      }
    });

    setBusy(button, false, "Creating account...", "Create account");
    if (error) {
      setStatus(authStatus, readableError(error), "error");
      return;
    }

    signupForm.reset();
    if (data.session) {
      offerConfirmationResend("");
      setStatus(authStatus, "Your account is ready.", "success");
    } else {
      offerConfirmationResend(email);
      setStatus(authStatus, "Check your email and use the confirmation link to finish signing up.", "success");
    }
  });

  resendConfirmationButton.addEventListener("click", async () => {
    if (!supabaseClient || !confirmationEmail) return;
    setBusy(
      resendConfirmationButton,
      true,
      "Sending...",
      "Resend confirmation email"
    );
    setStatus(authStatus);

    const { error } = await supabaseClient.auth.resend({
      type: "signup",
      email: confirmationEmail,
      options: { emailRedirectTo: authRedirectUrl }
    });

    setBusy(
      resendConfirmationButton,
      false,
      "Sending...",
      "Resend confirmation email"
    );
    setStatus(
      authStatus,
      error ? readableError(error) : "A new confirmation email was sent. Use the newest link.",
      error ? "error" : "success"
    );
  });

  signoutButton.addEventListener("click", async () => {
    if (!supabaseClient) return;
    signoutButton.disabled = true;
    const { error } = await supabaseClient.auth.signOut();
    signoutButton.disabled = false;
    if (error) setStatus(authStatus, readableError(error), "error");
  });

  playerPool.addEventListener("click", event => {
    const button = event.target.closest("[data-add-player]");
    if (!button) return;
    const slug = button.dataset.addPlayer;
    if (!playerBySlug.has(slug) || builderSlugs.includes(slug)) return;
    if (builderSlugs.length >= maximumListSize) {
      setStatus(publishStatus, "A ranking can contain up to 50 players.", "error");
      return;
    }
    builderSlugs.push(slug);
    renderRanking();
  });

  function setCustomPlayerForm(open) {
    customPlayerForm.hidden = !open;
    customPlayerToggle.hidden = open;
    customPlayerToggle.setAttribute("aria-expanded", String(open));
    if (open) {
      setStatus(customPlayerStatus);
      customPlayerName.focus();
    } else {
      customPlayerForm.reset();
      setStatus(customPlayerStatus);
    }
  }

  customPlayerToggle.addEventListener("click", () => setCustomPlayerForm(true));
  customPlayerCancel.addEventListener("click", () => setCustomPlayerForm(false));

  customPlayerForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = customPlayerName.value.trim().replace(/\s+/g, " ");
    if (name.length < 2) {
      setStatus(customPlayerStatus, "Enter the player's full name.", "error");
      return;
    }
    if (builderSlugs.length >= maximumListSize) {
      setStatus(customPlayerStatus, "Remove a player first. A ranking can contain up to 50 players.", "error");
      return;
    }

    const normalizedName = normalizeText(name);
    const matchingOriginal = allPlayers.find(player => normalizeText(player.name) === normalizedName);
    const matchingSelected = builderSlugs.find(slug => normalizeText(getPlayer(slug)?.name || "") === normalizedName);
    if (matchingSelected) {
      setStatus(customPlayerStatus, "That player is already in your ranking.", "error");
      return;
    }

    const slug = matchingOriginal
      ? matchingOriginal.slug
      : `${customPlayerPrefix}${encodeURIComponent(name)}`;
    builderSlugs.push(slug);
    renderRanking();
    setCustomPlayerForm(false);
  });

  rankingBlocks.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const index = Number(button.dataset.index);
    if (button.dataset.action === "up") movePlayer(index, index - 1);
    if (button.dataset.action === "down") movePlayer(index, index + 1);
    if (button.dataset.action === "remove") {
      builderSlugs.splice(index, 1);
      renderRanking();
    }
  });

  rankingBlocks.addEventListener("dragstart", event => {
    const block = event.target.closest(".ranking-block");
    if (!block) return;
    draggedIndex = Number(block.dataset.index);
    block.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
  });

  rankingBlocks.addEventListener("dragover", event => {
    if (event.target.closest(".ranking-block")) event.preventDefault();
  });

  rankingBlocks.addEventListener("drop", event => {
    event.preventDefault();
    const block = event.target.closest(".ranking-block");
    if (!block || draggedIndex === null) return;
    movePlayer(draggedIndex, Number(block.dataset.index));
  });

  rankingBlocks.addEventListener("dragend", () => {
    draggedIndex = null;
    rankingBlocks.querySelectorAll(".dragging").forEach(block => block.classList.remove("dragging"));
  });

  builderSearch.addEventListener("input", renderPlayerPool);
  listTitle.addEventListener("input", saveDraft);
  listDescription.addEventListener("input", saveDraft);

  addAllButton.addEventListener("click", () => {
    const missingOriginals = allPlayers
      .map(player => player.slug)
      .filter(slug => !builderSlugs.includes(slug));
    builderSlugs = [...builderSlugs, ...missingOriginals].slice(0, maximumListSize);
    renderRanking();
  });

  clearListButton.addEventListener("click", () => {
    builderSlugs = [];
    renderRanking();
  });

  publishButton.addEventListener("click", async () => {
    if (!supabaseClient) {
      setStatus(publishStatus, "Connect Supabase before publishing.", "error");
      return;
    }
    if (!currentUser) {
      setStatus(publishStatus, "Sign in or create an account before publishing.", "error");
      document.getElementById("account-title").scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (listTitle.value.trim().length < 3) {
      setStatus(publishStatus, "Give your list a title with at least 3 characters.", "error");
      listTitle.focus();
      return;
    }
    if (!builderSlugs.length) {
      setStatus(publishStatus, "Add at least one player to your ranking.", "error");
      return;
    }

    setBusy(publishButton, true, "Publishing...", "Publish list");
    setStatus(publishStatus);
    const { error } = await supabaseClient.from("community_lists").insert({
      user_id: currentUser.id,
      title: listTitle.value.trim(),
      description: listDescription.value.trim(),
      player_slugs: builderSlugs,
      is_public: publicList.checked
    });
    setBusy(publishButton, false, "Publishing...", "Publish list");

    if (error) {
      setStatus(publishStatus, readableError(error), "error");
      return;
    }

    const wasPublic = publicList.checked;
    listTitle.value = "";
    listDescription.value = "";
    builderSlugs = [];
    renderRanking();
    setStatus(
      publishStatus,
      wasPublic ? "Your list is live in the community feed." : "Your private list was saved.",
      "success"
    );
    await loadCommunityLists();
  });

  communityLists.addEventListener("click", async event => {
    const button = event.target.closest("[data-delete-list]");
    if (!button || !supabaseClient || !currentUser) return;
    if (!window.confirm("Delete this list permanently?")) return;
    button.disabled = true;
    const { error } = await supabaseClient
      .from("community_lists")
      .delete()
      .eq("id", button.dataset.deleteList);
    if (error) {
      button.disabled = false;
      setStatus(feedStatus, readableError(error), "error");
      return;
    }
    await loadCommunityLists();
  });

  refreshListsButton.addEventListener("click", loadCommunityLists);

  feedbackForm.addEventListener("submit", async event => {
    event.preventDefault();
    if (!supabaseClient) {
      setStatus(feedbackStatus, "Connect Supabase before sending feedback.", "error");
      return;
    }
    if (!currentUser) {
      setStatus(feedbackStatus, "Please sign in before sending feedback.", "error");
      return;
    }

    const button = feedbackForm.querySelector("button[type='submit']");
    setBusy(button, true, "Sending...", "Send feedback");
    const { error } = await supabaseClient.from("feedback").insert({
      user_id: currentUser.id,
      category: feedbackCategory.value,
      message: feedbackMessage.value.trim()
    });
    setBusy(button, false, "Sending...", "Send feedback");

    if (error) {
      setStatus(feedbackStatus, readableError(error), "error");
      return;
    }
    feedbackForm.reset();
    setStatus(feedbackStatus, "Thank you. Your feedback was sent.", "success");
  });

  async function initialize() {
    const authReturn = getAuthReturn();
    const draft = readDraft();
    listTitle.value = draft.title;
    listDescription.value = draft.description;
    builderSlugs = draft.playerSlugs;
    renderRanking();

    if (!supabaseClient) {
      setupNotice.hidden = false;
      signinForm.querySelector("button[type='submit']").disabled = true;
      signupForm.querySelector("button[type='submit']").disabled = true;
      feedbackForm.querySelector("button[type='submit']").disabled = true;
      setStatus(authStatus, "Accounts will turn on after the Supabase connection is added.");
      await loadCommunityLists();
      return;
    }

    const { data } = await supabaseClient.auth.getSession();
    await updateAccount(data.session);
    if (authReturn.error) {
      setStatus(authStatus, authReturn.error, "error");
    } else if (authReturn.completed && data.session) {
      setStatus(authStatus, "Email confirmed. You are now signed in.", "success");
    }
    if (authReturn.error || authReturn.completed) clearAuthReturn();
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      window.setTimeout(() => updateAccount(session), 0);
    });
  }

  switchAuthView("signin");
  initialize();
})();
