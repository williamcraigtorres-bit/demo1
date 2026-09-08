(() => {
  const page = document.querySelector(".profile-page");
  const hero = document.querySelector(".profile-hero");
  const content = document.querySelector(".profile-content");

  if (!page || !hero || !content) return;

  const siteBar = document.createElement("div");
  siteBar.className = "profile-site-bar";
  siteBar.innerHTML = `
    <div class="profile-site-bar-inner">
      <a class="profile-brand" href="../index.html" aria-label="The Football 50 home">
        <span class="profile-brand-mark">50</span>
        <span class="profile-brand-copy">
          <strong>The Football</strong>
          <small>All-time ranking</small>
        </span>
      </a>
      <div class="profile-site-links">
        <a class="profile-ranking-link" href="../community.html">Community</a>
        <a class="profile-ranking-link" href="../index.html#ranking">Full ranking</a>
      </div>
    </div>
  `;
  hero.before(siteBar);

  const labelMap = {
    "Quick Facts": "Facts",
    "Career Story": "Story",
    "Club History": "Clubs",
    "Stats Snapshot": "Stats",
    "Stats and Records": "Stats",
    "Trophy Cabinet": "Trophies",
    "Signature Skills": "Skills",
    "Iconic Moments": "Moments",
    "YouTube Highlights": "Highlights",
    "Legacy Scorecard": "Scorecard"
  };

  const sections = [...content.querySelectorAll(".section")];
  const usedIds = new Set();
  const sectionLinks = [];

  sections.forEach((section, index) => {
    const heading = section.querySelector("h2");
    if (!heading) return;

    let id = heading.textContent
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    if (!id) id = `section-${index + 1}`;
    while (usedIds.has(id)) id = `${id}-${index + 1}`;
    usedIds.add(id);
    section.id = id;

    let label = labelMap[heading.textContent.trim()] || heading.textContent.trim();
    if (label.startsWith("Why He Ranks")) {
      label = "All-time rank";
    }

    sectionLinks.push({ id, label, section });
  });

  if (sectionLinks.length) {
    const sectionNav = document.createElement("nav");
    sectionNav.className = "profile-section-nav";
    sectionNav.setAttribute("aria-label", "Player profile sections");
    sectionNav.innerHTML = `
      <div class="profile-section-nav-inner">
        ${sectionLinks
          .map(({ id, label }) => `<a href="#${id}">${label}</a>`)
          .join("")}
      </div>
    `;
    hero.after(sectionNav);

    const navLinks = [...sectionNav.querySelectorAll("a")];
    const setCurrent = id => {
      navLinks.forEach(link => {
        if (link.getAttribute("href") === `#${id}`) {
          link.setAttribute("aria-current", "true");
          const centeredPosition =
            link.offsetLeft - sectionNav.clientWidth / 2 + link.clientWidth / 2;
          sectionNav.scrollTo({
            left: Math.max(0, centeredPosition),
            behavior: "smooth"
          });
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    setCurrent(sectionLinks[0].id);

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setCurrent(visible.target.id);
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: [0.05, 0.25, 0.5] }
    );

    sectionLinks.forEach(({ section }) => observer.observe(section));
  }

  const backToTop = document.createElement("button");
  backToTop.className = "back-to-top";
  backToTop.type = "button";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.textContent = "↑";
  document.body.append(backToTop);

  const updateBackToTop = () => {
    backToTop.classList.toggle("visible", window.scrollY > 700);
  };

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();
})();
