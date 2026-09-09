const players = [
    {
      rank: 1,
      name: "Lionel Messi",
      country: "Argentina",
      position: "Forward",
      image: "Messi.webp",
      profile: "players/messi.html"
    },
    {
      rank: 2,
      name: "Cristiano Ronaldo",
      country: "Portugal",
      position: "Forward",
      image: "Ronaldo.png",
      profile: "players/ronaldo.html"
    },
    {
        rank: 3,
        name: "Diego Maradona",
        country: "Argentina",
        position: "Attacking Midfielder",
        image: "Maradona.jpg",
        profile: "players/maradona.html"
      },
    {
        rank: 4,
        name: "Ronaldo Nazário",
        country: "Brazil",
        position: "Forward",
        image: "R9.png",
        profile: "players/ronaldo-nazario.html"
      },
    {
        rank: 5,
        name: "Pelé",
        country: "Brazil",
        position: "Forward",
        image: "Pele.jpg",
        profile: "players/pele.html"
    },
    {
        rank: 6,
        name: "Zinedine Zidane",
        country: "France",
        position: "Midfielder",
        image: "Zidane.jpg",
        profile: "players/zidane.html"
      },
      {
        rank: 7,
        name: "Johan Cruyff",
        country: "Netherlands",
        position: "Forward / Attacking Midfielder",
        image: "Cruyff.webp",
        profile: "players/cruyff.html"
      },
      {
        rank: 8,
        name: "Ronaldinho",
        country: "Brazil",
        position: "Attacking Midfielder / Winger / Forward",
        image: "Ronaldinho.avif",
        profile: "players/ronaldinho.html"
      },
      {
        rank: 9,
        name: "Paolo Maldini",
        country: "Italy",
        position: "Defender",
        image: "Maldini.jpg",
        profile: "players/maldini.html"
      },
      {
        rank: 10,
        name: "Franz Beckenbauer",
        country: "Germany",
        position: "Defender",
        image: "Beckenbauer.webp",
        profile: "players/beckenbauer.html"
      },
      {
        rank: 11,
        name: "Xavi",
        country: "Spain",
        position: "Midfielder",
        image: "Xavi.jpg",
        profile: "players/xavi.html"
      },
      {
        rank: 12,
        name: "Andrés Iniesta",
        country: "Spain",
        position: "Midfielder",
        image: "Iniesta.jpg",
        profile: "players/iniesta.html"
      },
      {
        rank: 13,
        name: "Gerd Müller",
        country: "Germany",
        position: "Forward",
        image: "muller.png",
        profile: "players/muller.html"
      },
      {
        rank: 14,
        name: "Ferenc Puskás",
        country: "Hungary",
        position: "Forward",
        image: "Puskas.png",
        profile: "players/puskas.html"
      },
      {
        rank: 15,
        name: "Thierry Henry",
        country: "France",
        position: "Forward",
        image: "Henry.png",
        profile: "players/henry.html"
      },
      {
        rank: 16,
        name: "Michel Platini",
        country: "France",
        position: "Midfielder",
        image: "platini.png",
        profile: "players/platini.html"
      },
      {
        rank: 17,
        name: "Romário",
        country: "Brazil",
        position: "Forward",
        image: "romario.png",
        profile: "players/romario.html"
      },
      {
        rank: 18,
        name: "Eusébio",
        country: "Portugal",
        position: "Forward",
        image: "eusebio.png",
        profile: "players/eusebio.html"
      },
      {
        rank: 19,
        name: "Roberto Carlos",
        country: "Brazil",
        position: "Left Back",
        image: "robertocarlos.png",
        profile: "players/roberto-carlos.html"
      },
      {
        rank: 20,
        name: "Alfredo Di Stéfano",
        country: "Argentina / Spain",
        position: "Forward / Attacking Midfielder",
        image: "stefano.png",
        profile: "players/alfredo-di-stefano.html"
      },
      {
        rank: 21,
        name: "Cafu",
        country: "Brazil",
        position: "Right Back",
        image: "cafu.png",
        profile: "players/cafu.html"
      },
      {
        rank: 22,
        name: "Lothar Matthäus",
        country: "Germany",
        position: "Midfielder",
        image: "Matthaus.png",
        profile: "players/matthaus.html"
      },
      {
        rank: 23,
        name: "Franco Baresi",
        country: "Italy",
        position: "Defender / Sweeper",
        image: "baresi.png",
        profile: "players/baresi.html"
      },
      {
        rank: 24,
        name: "Neymar Jr",
        country: "Brazil",
        position: "Forward / Winger",
        image: "neymar.png",
        profile: "players/neymar.html"
      },
      {
        rank: 25,
        name: "Kaká",
        country: "Brazil",
        position: "Attacking Midfielder",
        image: "Kaka.png",
        profile: "players/kaka.html"
      },
      {
        rank: 26,
        name: "Rivaldo",
        country: "Brazil",
        position: "Attacking Midfielder / Forward",
        image: "rivaldo.png",
        profile: "players/rivaldo.html"
      },
      {
        rank: 27,
        name: "Luis Suárez",
        country: "Uruguay",
        position: "Forward",
        image: "suarez.png",
        profile: "players/luis-suarez.html"
      },
      {
        rank: 28,
        name: "Sergio Ramos",
        country: "Spain",
        position: "Defender",
        image: "ramos.png",
        profile: "players/ramos.html"
      },
      {
        rank: 29,
        name: "Manuel Neuer",
        country: "Germany",
        position: "Goalkeeper",
        image: "neuer.png",
        profile: "players/neuer.html"
      },
      {
        rank: 30,
        name: "Roberto Baggio",
        country: "Italy",
        position: "Forward / Attacking Midfielder",
        image: "baggio.png",
        profile: "players/baggio.html"
      },
      {
        rank: 31,
        name: "Ruud Gullit",
        country: "Netherlands",
        position: "Midfielder / Forward",
        image: "gullit.png",
        profile: "players/gullit.html"
      },
      {
        rank: 32,
        name: "Kevin De Bruyne",
        country: "Belgium",
        position: "Midfielder",
        image: "kevin.png",
        profile: "players/kevin-de-bruyne.html"
      },
      {
        rank: 33,
        name: "Zico",
        country: "Brazil",
        position: "Attacking Midfielder",
        image: "zico.png",
        profile: "players/zico.html"
      },
      {
        rank: 34,
        name: "Bobby Charlton",
        country: "England",
        position: "Midfielder / Forward",
        image: "bobby.png",
        profile: "players/bobby-charlton.html"
      },
      {
        rank: 35,
        name: "Zlatan Ibrahimović",
        country: "Sweden",
        position: "Forward",
        image: "zlatan.png",
        profile: "players/zlatan.html"
      },
      {
        rank: 36,
        name: "Luka Modrić",
        country: "Croatia",
        position: "Midfielder",
        image: "modric.png",
        profile: "players/modric.html"
      },
      {
        rank: 37,
        name: "Toni Kroos",
        country: "Germany",
        position: "Midfielder",
        image: "Toni.png",
        profile: "players/toni-kroos.html"
      },
      {
        rank: 38,
        name: "Carles Puyol",
        country: "Spain",
        position: "Defender",
        image: "puyol.png",
        profile: "players/puyol.html"
      },
      {
        rank: 39,
        name: "Luís Figo",
        country: "Portugal",
        position: "Winger / Midfielder",
        image: "figo.png",
        profile: "players/figo.html"
      },
      {
        rank: 40,
        name: "Garrincha",
        country: "Brazil",
        position: "Winger",
        image: "garrincha.png",
        profile: "players/garrincha.html"
      },
      {
        rank: 41,
        name: "Marco van Basten",
        country: "Netherlands",
        position: "Forward",
        image: "Van.png",
        profile: "players/marco-van-basten.html"
      },
      {
        rank: 42,
        name: "Andrea Pirlo",
        country: "Italy",
        position: "Midfielder",
        image: "pirlo.png",
        profile: "players/pirlo.html"
      },
      {
        rank: 43,
        name: "David Beckham",
        country: "England",
        position: "Midfielder",
        image: "beckham.png",
        profile: "players/beckham.html"
      },
      {
        rank: 44,
        name: "George Best",
        country: "Northern Ireland",
        position: "Winger / Forward",
        image: "best.png",
        profile: "players/george-best.html"
      },
      {
        rank: 45,
        name: "Gianluigi Buffon",
        country: "Italy",
        position: "Goalkeeper",
        image: "buffon.png",
        profile: "players/buffon.html"
      },
      {
        rank: 46,
        name: "Bobby Moore",
        country: "England",
        position: "Defender",
        image: "moore.png",
        profile: "players/bobby-moore.html"
      },
      {
        rank: 47,
        name: "Arjen Robben",
        country: "Netherlands",
        position: "Winger",
        image: "robben.png",
        profile: "players/robben.html"
      },
      {
        rank: 48,
        name: "Robert Lewandowski",
        country: "Poland",
        position: "Forward",
        image: "lewa.png",
        profile: "players/lewandowski.html"
      },
      {
        rank: 49,
        name: "Iker Casillas",
        country: "Spain",
        position: "Goalkeeper",
        image: "iker.png",
        profile: "players/iker-casillas.html"
      },
      {
        rank: 50,
        name: "Kylian Mbappé",
        country: "France",
        position: "Forward",
        image: "mbappe.png",
        profile: "players/mbappe.html"
      },
    ];
  
const playersContainer = document.getElementById("players");
const searchInput = document.getElementById("search");
const clearSearchButton = document.getElementById("clear-search");
const filterButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sort");
const playerCount = document.getElementById("player-count");
const resultCopy = document.getElementById("result-copy");
const noResults = document.getElementById("no-results");
const resetFiltersButton = document.getElementById("reset-filters");
const emptyResetButton = document.getElementById("empty-reset");
const backToTopButton = document.getElementById("back-to-top");

const allowedFilters = new Set(["all", "Forward", "Midfielder", "Defender", "Goalkeeper"]);
const allowedSorts = new Set(["rank", "name", "country"]);
const initialParams = new URLSearchParams(window.location.search);

let activeFilter = allowedFilters.has(initialParams.get("position"))
  ? initialParams.get("position")
  : "all";

searchInput.value = initialParams.get("search") || "";
sortSelect.value = allowedSorts.has(initialParams.get("sort"))
  ? initialParams.get("sort")
  : "rank";

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getPositionGroups(position) {
  const value = position.toLowerCase();
  const groups = [];

  if (value.includes("goalkeeper")) groups.push("Goalkeeper");
  if (/defender|back|sweeper/.test(value)) groups.push("Defender");
  if (value.includes("midfielder")) groups.push("Midfielder");
  if (/forward|winger|striker/.test(value)) groups.push("Forward");

  return groups;
}

function sortPlayers(list) {
  const sorted = [...list];

  if (sortSelect.value === "name") {
    return sorted.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortSelect.value === "country") {
    return sorted.sort((a, b) =>
      a.country.localeCompare(b.country) || a.rank - b.rank
    );
  }

  return sorted.sort((a, b) => a.rank - b.rank);
}

function getRankTier(rank) {
  if (rank <= 3) return "spectral";
  if (rank <= 10) return "blue";
  if (rank <= 20) return "magenta";
  if (rank <= 35) return "teal";
  return "coral";
}

function displayPlayers(list, showPodium) {
  const fragment = document.createDocumentFragment();
  playersContainer.innerHTML = "";

  list.forEach(player => {
    const card = document.createElement("a");
    const cardClasses = ["player-card", `player-card--tier-${getRankTier(player.rank)}`];
    if (showPodium && player.rank <= 3) cardClasses.push("player-card--podium");
    card.className = cardClasses.join(" ");
    card.href = player.profile;
    card.setAttribute(
      "aria-label",
      `Rank ${player.rank}: ${player.name}, ${player.country}, ${player.position}`
    );

    const loading = player.rank <= 6 ? "eager" : "lazy";

    card.innerHTML = `
      <div class="player-image">
        <img src="${player.image}" alt="${player.name}" loading="${loading}">
        <span class="rank">#${player.rank}</span>
      </div>
      <div class="player-info">
        <h2>${player.name}</h2>
        <p class="player-meta">
          ${player.country}<span aria-hidden="true">&bull;</span>${player.position}
        </p>
        <span class="card-arrow" aria-hidden="true">&nearr;</span>
      </div>
    `;

    fragment.appendChild(card);
  });

  playersContainer.appendChild(fragment);
}

function updateUrl() {
  const params = new URLSearchParams();
  const searchValue = searchInput.value.trim();

  if (searchValue) params.set("search", searchValue);
  if (activeFilter !== "all") params.set("position", activeFilter);
  if (sortSelect.value !== "rank") params.set("sort", sortSelect.value);

  const query = params.toString();
  window.history.replaceState(
    {},
    "",
    `${window.location.pathname}${query ? `?${query}` : ""}`
  );
}

function updatePlayers() {
  const searchText = normalizeText(searchInput.value);

  const filteredPlayers = players.filter(player => {
    const searchableText = normalizeText(
      `${player.name} ${player.country} ${player.position}`
    );
    const matchesSearch = searchableText.includes(searchText);
    const matchesFilter =
      activeFilter === "all" ||
      getPositionGroups(player.position).includes(activeFilter);

    return matchesSearch && matchesFilter;
  });

  const sortedPlayers = sortPlayers(filteredPlayers);
  const showPodium =
    searchText === "" &&
    activeFilter === "all" &&
    sortSelect.value === "rank";

  displayPlayers(sortedPlayers, showPodium);

  playerCount.textContent = filteredPlayers.length;
  resultCopy.textContent = ` of ${players.length} players`;
  noResults.hidden = filteredPlayers.length !== 0;
  playersContainer.hidden = filteredPlayers.length === 0;

  const hasActiveControls =
    searchInput.value.trim() !== "" ||
    activeFilter !== "all" ||
    sortSelect.value !== "rank";

  clearSearchButton.hidden = searchInput.value === "";
  resetFiltersButton.hidden = !hasActiveControls;

  updateUrl();
}

function setActiveFilter(nextFilter) {
  activeFilter = nextFilter;

  filterButtons.forEach(button => {
    const isActive = button.dataset.filter === activeFilter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function resetControls() {
  searchInput.value = "";
  sortSelect.value = "rank";
  setActiveFilter("all");
  updatePlayers();
}

searchInput.addEventListener("input", updatePlayers);

clearSearchButton.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  updatePlayers();
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    setActiveFilter(button.dataset.filter);
    updatePlayers();
  });
});

sortSelect.addEventListener("change", updatePlayers);
resetFiltersButton.addEventListener("click", resetControls);
emptyResetButton.addEventListener("click", resetControls);

window.addEventListener(
  "scroll",
  () => {
    backToTopButton.classList.toggle("visible", window.scrollY > 700);
  },
  { passive: true }
);

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

setActiveFilter(activeFilter);
updatePlayers();
  
