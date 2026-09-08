(() => {
  const slug = document.body.dataset.player;
  const profiles = window.PLAYER_PROFILES || {};
  const order = window.PLAYER_ORDER || [];
  const player = profiles[slug];

  if (!player) {
    document.title = "Profile not found | The Football 50";
    document.body.innerHTML = `
      <main class="profile-error">
        <p class="section-label">The Football 50</p>
        <h1>Profile not found</h1>
        <p>This player profile could not be loaded.</p>
        <a href="../index.html">Return to the full ranking</a>
      </main>
    `;
    return;
  }

  const escapeHtml = value => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const listMarkup = (items, renderItem) => items.map(renderItem).join("");
  const encodedImage = encodeURI(player.image);
  const gallery = player.gallery?.length ? player.gallery : [player.image];
  const stats = [
    { label: "Official senior goals", value: player.officialGoals },
    ...player.stats.filter(stat => !/goal/i.test(stat.label)).slice(0, 3)
  ];
  const currentIndex = order.findIndex(item => item.slug === slug);
  const previous = currentIndex > 0 ? order[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < order.length - 1
    ? order[currentIndex + 1]
    : null;

  const profilePath = item => item.rank <= 6
    ? item.path
    : `${item.slug}.html`;

  document.title = `${player.name} Profile | The Football 50`;
  document.body.classList.add("profile-page", "generated-profile");

  document.body.innerHTML = `
    <header
      class="profile-hero"
      style="background-image: linear-gradient(90deg, rgba(3, 24, 18, 0.92), rgba(3, 24, 18, 0.48)), url('../${encodedImage}');"
    >
      <div>
        <a class="back-link" href="../index.html#ranking">&larr; Back to Top 50</a>
        <div class="profile-rank">#${player.rank}</div>
        <p class="profile-era">${escapeHtml(player.era)}</p>
        <h1>${escapeHtml(player.name)}</h1>
        <p class="profile-summary">${escapeHtml(player.summary)}</p>
      </div>

      <div class="hero-details">
        <p><strong>Country:</strong> ${escapeHtml(player.country)}</p>
        <p><strong>Position:</strong> ${escapeHtml(player.position)}</p>
        <p><strong>Main clubs:</strong> ${escapeHtml(player.mainClubs)}</p>
        <p><strong>Famous number:</strong> ${escapeHtml(player.number)}</p>
        <p><strong>Known for:</strong> ${escapeHtml(player.knownFor)}</p>
      </div>
    </header>

    <main class="profile-content">
      <div class="profile-overview">
        <div class="profile-overview-main">
          <section class="section">
            <h2>Quick Facts</h2>
            <div class="facts-grid">
              ${listMarkup([
                ["Full name", player.fullName],
                ["Born", player.born],
                ["Birthplace", player.birthplace],
                ["Height", player.height],
                ["Preferred foot", player.foot],
                ["Famous number", player.number],
                ["National team", player.country],
                ["Senior era", player.era]
              ], ([label, value]) => `
                <div class="fact">
                  <span>${escapeHtml(label)}</span>
                  <strong>${escapeHtml(value)}</strong>
                </div>
              `)}
            </div>
          </section>

          <section class="section">
            <h2>Career Story</h2>
            ${listMarkup(player.story, paragraph => `<p>${escapeHtml(paragraph)}</p>`)}
          </section>
        </div>

        <aside class="profile-side-rail" aria-label="${escapeHtml(player.name)} career photos">
          <div class="profile-side-photos">
            ${listMarkup(gallery, (image, index) => `
              <figure class="profile-side-photo generated-side-photo">
                <img
                  src="../${encodeURI(image)}"
                  alt="${escapeHtml(player.name)} career photo ${index + 1}"
                  loading="${index === 0 ? "eager" : "lazy"}"
                >
              </figure>
            `)}
          </div>
          <div class="profile-defining-trait">
            <span>Defining trait</span>
            <strong>${escapeHtml(player.definingTrait)}</strong>
          </div>
        </aside>
      </div>

      <section class="section">
        <h2>Club History</h2>
        <div class="timeline">
          ${listMarkup(player.clubs, club => `
            <div class="club-row">
              <strong>${escapeHtml(club.name)}</strong>
              <span>${escapeHtml(club.note)}</span>
              <span>${escapeHtml(club.years)}</span>
            </div>
          `)}
        </div>
      </section>

      <section class="section">
        <h2>Stats Snapshot</h2>
        <div class="stats-grid">
          ${listMarkup(stats, stat => `
            <div class="stat">
              <span>${escapeHtml(stat.label)}</span>
              <strong>${escapeHtml(stat.value)}</strong>
            </div>
          `)}
        </div>
        <p class="stats-note">Official senior club and senior international goals. Youth, exhibition, and unofficial matches are excluded. Active-player totals were checked on August 1, 2026.</p>
      </section>

      <section class="section">
        <h2>Trophy Cabinet</h2>
        <p class="section-intro">Major senior team honours from a defining career.</p>
        <div class="trophy-grid">
          ${listMarkup(player.honours, honour => `
            <div class="trophy-card${honour.important ? " important" : ""}${honour.international ? " international" : ""}">
              <span class="trophy-count">${escapeHtml(honour.count)}</span>
              <strong>${escapeHtml(honour.name)}</strong>
            </div>
          `)}
        </div>
      </section>

      <section class="section">
        <h2>Signature Skills</h2>
        <div class="skills-grid">
          ${listMarkup(player.skills, skill => `
            <div class="skill">
              <strong>${escapeHtml(skill.name)}</strong>
              <p>${escapeHtml(skill.description)}</p>
            </div>
          `)}
        </div>
      </section>

      <section class="section">
        <h2>Iconic Moments</h2>
        <div class="moments">
          ${listMarkup(player.moments, moment => `
            <article class="moment">
              <strong>${escapeHtml(moment.title)}</strong>
              <p>${escapeHtml(moment.description)}</p>
            </article>
          `)}
        </div>
      </section>

      <section class="section">
        <h2>YouTube Highlights</h2>
        <div class="videos-grid">
          ${listMarkup(player.highlights, highlight => `
            <a
              class="highlight-search"
              href="https://www.youtube.com/results?search_query=${encodeURIComponent(`${player.name} ${highlight.query}`)}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>${escapeHtml(highlight.eyebrow)}</span>
              <strong>${escapeHtml(highlight.title)}</strong>
              <small>Watch on YouTube &nearr;</small>
            </a>
          `)}
        </div>
      </section>

      <section class="section">
        <h2>Why He Ranks #${player.rank} All Time</h2>
        ${listMarkup(player.why, paragraph => `<p>${escapeHtml(paragraph)}</p>`)}
      </section>

      <nav class="profile-nav" aria-label="Player profiles">
        ${previous
          ? `<a href="${profilePath(previous)}">&larr; #${previous.rank} ${escapeHtml(previous.name)}</a>`
          : `<a href="../index.html#ranking">&larr; Full ranking</a>`}
        <a href="../index.html#ranking">Top 50</a>
        ${next
          ? `<a href="${profilePath(next)}">#${next.rank} ${escapeHtml(next.name)} &rarr;</a>`
          : `<a href="../index.html#ranking">Full ranking &rarr;</a>`}
      </nav>
    </main>
  `;
})();
