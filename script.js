(() => {
  const WORDS = [
    { word: "RUINS", category: "Lebanon" },
    { word: "CREED", category: "Christianity" },
    { word: "ENCORE", category: "Theater" },
    { word: "WATAN", category: "Lebanon" },
    { word: "LINES", category: "Theater" },
    { word: "VILLAGE", category: "Lebanon" },
    { word: "COMIC", category: "Theater" },
    { word: "CHORDS", category: "Christianity" },
    { word: "MIMIC", category: "Theater" },
    { word: "OTTOMAN", category: "Lebanon" },
    { word: "JESUS", category: "Christianity" },
    { word: "DREAM", category: "General" },
    { word: "EXTRA", category: "Theater" },
    { word: "SCARF", category: "General" },
    { word: "BALAD", category: "Lebanon" },
    { word: "PARODY", category: "Theater" },
    { word: "REVIEW", category: "Theater" },
    { word: "CASTED", category: "Theater" },
    { word: "ROSARY", category: "Christianity" },
    { word: "INSECT", category: "General" },
    { word: "PROPHET", category: "Christianity" },
    { word: "PANTS", category: "General" },
    { word: "DANCER", category: "Theater" },
    { word: "SEASIDE", category: "Lebanon" },
    { word: "CHAIR", category: "General" },
    { word: "CEDARS", category: "Lebanon" },
    { word: "BATATA", category: "Lebanon" },
    { word: "DANCE", category: "General" },
    { word: "COMEDY", category: "Theater" },
    { word: "GLORY", category: "Christianity" },
    { word: "THYME", category: "Lebanon" },
    { word: "SWEET", category: "General" },
    { word: "SLEEP", category: "General" },
    { word: "CLIMAX", category: "Theater" },
    { word: "CHURCH", category: "Christianity" },
    { word: "RIGGER", category: "Theater" },
    { word: "TAYEB", category: "Lebanon" },
    { word: "EPISTLE", category: "Christianity" },
    { word: "SCRIPT", category: "Theater" },
    { word: "ARABIC", category: "Lebanon" },
    { word: "CLOCK", category: "General" },
    { word: "FARCE", category: "Theater" },
    { word: "PARISH", category: "Christianity" },
    { word: "TRACK", category: "General" },
    { word: "LABAN", category: "Lebanon" },
    { word: "CUES", category: "Theater" },
    { word: "VIRTUE", category: "Christianity" },
    { word: "HALAWA", category: "Lebanon" },
    { word: "STAGES", category: "Theater" },
    { word: "WATCH", category: "General" },
    { word: "BIBLE", category: "Christianity" },
    { word: "PSALM", category: "Christianity" },
    { word: "LITURGY", category: "Christianity" },
    { word: "SESAME", category: "Lebanon" },
    { word: "PENCIL", category: "General" },
    { word: "SACRED", category: "Christianity" },
    { word: "TIMING", category: "Theater" },
    { word: "MIMES", category: "Theater" },
    { word: "CHOIR", category: "Christianity" },
    { word: "SALTY", category: "General" },
    { word: "CASTING", category: "Theater" },
    { word: "IMPROV", category: "Theater" },
    { word: "LEMON", category: "Lebanon" },
    { word: "PLANE", category: "General" },
    { word: "THEME", category: "Theater" },
    { word: "FREEKEH", category: "Lebanon" },
    { word: "STRIKE", category: "Theater" },
    { word: "WINTER", category: "Lebanon" },
    { word: "KNIFE", category: "General" },
    { word: "SPOON", category: "General" },
    { word: "HAPPY", category: "General" },
    { word: "SHEET", category: "General" },
    { word: "SOUKS", category: "Lebanon" },
    { word: "ROCKS", category: "Lebanon" },
    { word: "KEBAB", category: "Lebanon" },
    { word: "BALLET", category: "Theater" },
    { word: "USHER", category: "Theater" },
    { word: "GREEN", category: "General" },
    { word: "PIANO", category: "General" },
    { word: "BALCONY", category: "Theater" },
    { word: "BLACK", category: "General" },
    { word: "VOICE", category: "General" },
    { word: "STORY", category: "Theater" },
    { word: "ISLAND", category: "General" },
    { word: "MORNING", category: "General" },
    { word: "MANKISH", category: "Lebanon" },
    { word: "KAFTA", category: "Lebanon" },
    { word: "WHITE", category: "General" },
    { word: "AYYAM", category: "Lebanon" },
    { word: "DIVINE", category: "Christianity" },
    { word: "OPERA", category: "Theater" },
    { word: "FINJAAN", category: "Lebanon" },
    { word: "TAOUK", category: "Lebanon" },
    { word: "MUSIC", category: "General" },
    { word: "SINGER", category: "Theater" },
    { word: "PAINT", category: "General" },
    { word: "CABARET", category: "Theater" },
    { word: "PAPER", category: "General" },
    { word: "CURTAIN", category: "Theater" },
    { word: "GARLIC", category: "Lebanon" },
    { word: "CHALICE", category: "Christianity" },
    { word: "STREET", category: "General" },
    { word: "SFIHA", category: "Lebanon" },
    { word: "GHOST", category: "General" },
    { word: "JABAL", category: "Lebanon" },
    { word: "ADVENT", category: "Christianity" },
    { word: "MASKS", category: "Theater" },
    { word: "SOUND", category: "Theater" },
    { word: "ZAHR", category: "Lebanon" },
    { word: "METAL", category: "General" },
    { word: "CLOUD", category: "General" },
    { word: "VESPERS", category: "Christianity" },
    { word: "SCENE", category: "Theater" },
    { word: "LABNEH", category: "Lebanon" },
    { word: "LEVANT", category: "Lebanon" },
    { word: "STAGED", category: "Theater" },
    { word: "TABLE", category: "General" },
    { word: "MATINS", category: "Christianity" },
    { word: "VALLEY", category: "Lebanon" },
    { word: "MYSTIC", category: "Christianity" },
    { word: "HUMMUS", category: "Lebanon" },
    { word: "CHANTS", category: "Christianity" },
    { word: "DESERT", category: "General" },
    { word: "KABIS", category: "Lebanon" },
    { word: "DRAMA", category: "Theater" },
    { word: "ANGEL", category: "Christianity" },
    { word: "PIGEON", category: "Lebanon" },
    { word: "MERCY", category: "Christianity" },
    { word: "ACTRESS", category: "Theater" },
    { word: "PLANET", category: "General" },
    { word: "BICYCLE", category: "General" },
    { word: "REVIVAL", category: "Theater" },
    { word: "SATIRE", category: "Theater" },
    { word: "EARTH", category: "General" },
    { word: "PENANCE", category: "Christianity" },
    { word: "SMILE", category: "General" },
    { word: "CLIFF", category: "Lebanon" },
    { word: "PRIEST", category: "Christianity" },
    { word: "BAPTIST", category: "Christianity" },
    { word: "FRIAR", category: "Christianity" },
    { word: "PASTRY", category: "Lebanon" },
    { word: "SHRINE", category: "Christianity" },
    { word: "NAMMURA", category: "Lebanon" },
    { word: "TICKET", category: "Theater" },
    { word: "NOUGAT", category: "Lebanon" },
    { word: "OCEAN", category: "General" },
    { word: "WINDOW", category: "General" },
    { word: "CHEESE", category: "General" },
    { word: "CLERIC", category: "Christianity" },
    { word: "MAGIC", category: "General" },
    { word: "COLUMN", category: "Lebanon" },
    { word: "BOWS", category: "Theater" },
    { word: "FAMILY", category: "Lebanon" },
    { word: "SUNDAY", category: "Christianity" },
    { word: "ROMAN", category: "Lebanon" },
    { word: "SPACE", category: "General" },
    { word: "TEMPLE", category: "Christianity" },
    { word: "ALTAR", category: "Christianity" },
    { word: "MARTYR", category: "Christianity" },
    { word: "SAINT", category: "Christianity" },
    { word: "BELIEF", category: "Christianity" },
    { word: "MEZZE", category: "Lebanon" },
    { word: "SPICY", category: "General" },
    { word: "TRAIN", category: "General" },
    { word: "HOUSE", category: "General" },
    { word: "EXODUS", category: "Christianity" },
    { word: "COFFEE", category: "Lebanon" },
    { word: "BAKLAVA", category: "Lebanon" },
    { word: "PSALMS", category: "Christianity" },
    { word: "SHWARMA", category: "Lebanon" },
    { word: "BISHOP", category: "Christianity" },
    { word: "DEVOUT", category: "Christianity" },
    { word: "LAUGH", category: "General" },
    { word: "CHORUS", category: "Theater" },
    { word: "WATER", category: "General" },
    { word: "WINGS", category: "Theater" },
    { word: "COAST", category: "Lebanon" },
    { word: "ANIMAL", category: "General" },
    { word: "ASHES", category: "Christianity" },
    { word: "SUNNY", category: "General" },
    { word: "PROPS", category: "Theater" },
    { word: "OLIVE", category: "Lebanon" },
    { word: "STALLS", category: "Theater" },
    { word: "TRUCK", category: "Theater" },
    { word: "PARABLE", category: "Christianity" },
    { word: "STAGE", category: "Theater" },
    { word: "SAVIOR", category: "Christianity" },
    { word: "GENESIS", category: "Christianity" },
    { word: "BITTER", category: "General" },
    { word: "FRUIT", category: "General" },
    { word: "RECTOR", category: "Christianity" },
    { word: "GOSPEL", category: "Christianity" },
    { word: "TRAGIC", category: "Theater" },
    { word: "SPIRIT", category: "Christianity" },
    { word: "SERMON", category: "Christianity" },
    { word: "AISLE", category: "Theater" },
    { word: "SINNER", category: "Christianity" },
    { word: "MARQUEE", category: "Theater" },
    { word: "BAALBEK", category: "Lebanon" },
    { word: "PHONE", category: "General" },
    { word: "NOVICE", category: "Christianity" },
    { word: "MESHWEH", category: "Lebanon" },
    { word: "FAITH", category: "Christianity" },
    { word: "FLOOR", category: "General" },
    { word: "MAKEUP", category: "Theater" },
    { word: "FATAYER", category: "Lebanon" },
    { word: "BAPTISM", category: "Christianity" },
    { word: "YOGHURT", category: "Lebanon" },
    { word: "PRAYER", category: "Christianity" },
    { word: "HOMILY", category: "Christianity" },
    { word: "RELICS", category: "Christianity" },
    { word: "SHISH", category: "Lebanon" },
    { word: "BREAD", category: "General" },
    { word: "COLOR", category: "General" },
    { word: "FLYMAN", category: "Theater" },
    { word: "HEAVEN", category: "Christianity" },
    { word: "TRAIL", category: "General" },
    { word: "SUMMER", category: "Lebanon" },
    { word: "GLASS", category: "General" },
    { word: "TROUPE", category: "Theater" },
    { word: "DABKE", category: "Lebanon" },
    { word: "SAMAK", category: "Lebanon" },
    { word: "PLAYED", category: "Theater" },
    { word: "POSTER", category: "Theater" },
    { word: "VATICAN", category: "Christianity" },
    { word: "BRUSH", category: "General" },
    { word: "SCENERY", category: "Theater" },
    { word: "BOOTH", category: "Theater" },
    { word: "EASTER", category: "Christianity" },
    { word: "ROOTS", category: "Lebanon" },
    { word: "SPICES", category: "Lebanon" },
    { word: "BEACH", category: "Lebanon" },
    { word: "ROOF", category: "General" },
    { word: "PIOUS", category: "Christianity" },
    { word: "LYRICS", category: "Theater" },
    { word: "CLERGY", category: "Christianity" },
    { word: "MUSICAL", category: "Theater" },
    { word: "FALAFEL", category: "Lebanon" },
    { word: "PLANT", category: "General" },
    { word: "TRAGEDY", category: "Theater" },
    { word: "JOUNIEH", category: "Lebanon" },
    { word: "APOSTLE", category: "Christianity" },
    { word: "FOYER", category: "Theater" },
    { word: "SHIRT", category: "General" },
    { word: "DEACON", category: "Christianity" },
    { word: "NIGHT", category: "General" },
    { word: "PASTOR", category: "Christianity" },
    { word: "VOCAL", category: "Theater" },
    { word: "PALACE", category: "Christianity" },
    { word: "KNAFEH", category: "Lebanon" },
    { word: "CRITIC", category: "Theater" },
    { word: "GLOVE", category: "General" },
    { word: "LIGHT", category: "General" },
    { word: "BRANCH", category: "Lebanon" },
    { word: "ZAATAR", category: "Lebanon" },
    { word: "PLOT", category: "Theater" },
    { word: "ACTING", category: "Theater" },
    { word: "TRINITY", category: "Christianity" },
    { word: "CEDAR", category: "Lebanon" },
    { word: "FLOWER", category: "General" },
    { word: "RAINY", category: "General" },
    { word: "KIBBEH", category: "Lebanon" },
    { word: "SETS", category: "Theater" },
  ];

  const DAILY_WORDS = WORDS.filter(obj => obj.word && /^[a-zA-Z]+$/.test(obj.word));
  const launchDate = Date.UTC(2026, 2, 31);
  const boardEl = document.getElementById("board");
  const keyboardEl = document.getElementById("keyboard");
  const messageEl = document.getElementById("message");
  const metaLineEl = document.getElementById("meta-line");
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const hintButton = document.getElementById("hint-button");
  const hintBadge = document.getElementById("hint-badge");
  const modal = document.getElementById("end-modal");
  const endTitle = document.getElementById("end-title");
  const countdownEl = document.getElementById("countdown");
  const closeModal = document.getElementById("close-modal");


  const wordCache = {};

  if (!DAILY_WORDS.length) {
    throw new Error("No words available.");
  }

  const today = new Date();
  const localDateAsUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const daysPassed = Math.max(0, Math.floor((localDateAsUTC - launchDate) / 86400000));
  
  if (daysPassed >= DAILY_WORDS.length) {
    document.body.innerHTML = "<h1 style='text-align:center; padding: 2rem; color: var(--text); font-family: sans-serif;'>We are out of words! Check back later.</h1>";
    throw new Error("Word list exhausted.");
  }

  const solutionIndex = daysPassed;
  const activeSolutionObj = DAILY_WORDS[solutionIndex];
  const solution = activeSolutionObj.word.toUpperCase();
  const wordCategory = activeSolutionObj.category;
  const wordLength = solution.length;
  const maxRows = wordLength <= 5 ? 6 : wordLength + 1;
  
  const storageKey = `wordle-mobile-${solutionIndex}`;
  const themeKey = "wordle-mobile-theme";

  let currentRow = 0;
  let currentGuess = "";
  let boardState = Array.from({ length: maxRows }, () => null);
  let gameOver = false;
  let isSubmitting = false;
  let countdownTimer = null;
  let messageTimer = null;
  let hintsUsed = 0;

  const savedState = loadState();
  if (savedState && savedState.solutionIndex === solutionIndex) {
    currentRow = Math.min(savedState.currentRow ?? 0, maxRows - 1);
    currentGuess = typeof savedState.currentGuess === "string" ? savedState.currentGuess : "";
    gameOver = Boolean(savedState.gameOver);
    boardState = Array.from({ length: maxRows }, (_, i) => savedState.boardState?.[i] ?? null);
    hintsUsed = savedState.hintsUsed || 0;
  }

  setupTheme();
  setMetaText();
  buildBoard();
  buildKeyboard();
  restoreBoard();
  updateBoard();
  updateKeyboardColorsFromBoard();
  updateHintBadge();
  bindEvents();

  if (gameOver) {
    showEndModal(Boolean(savedState?.won));
  }

  function setMetaText() {
    metaLineEl.textContent = `${wordLength} letters · ${maxRows} tries`;
    boardEl.style.setProperty("--word-length", wordLength);
  }

  function setupTheme() {
    const savedTheme = localStorage.getItem(themeKey);
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);

    themeToggle.addEventListener("click", () => {
      const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      localStorage.setItem(themeKey, nextTheme);
    });
  }

  function setTheme(theme) {
    document.body.dataset.theme = theme;
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    themeIcon.innerHTML = theme === "dark" ? sunIcon() : moonIcon();
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#121213" : "#ffffff");
  }

  function moonIcon() {
    return `
      <path d="M20 13.2A7.8 7.8 0 0 1 10.8 4a8.8 8.8 0 1 0 9.2 9.2Z"></path>
    `;
  }

  function sunIcon() {
    return `
      <circle cx="12" cy="12" r="4.2"></circle>
      <path d="M12 2.8v2.3"></path>
      <path d="M12 18.9v2.3"></path>
      <path d="M2.8 12h2.3"></path>
      <path d="M18.9 12h2.3"></path>
      <path d="M4.6 4.6l1.6 1.6"></path>
      <path d="M17.8 17.8l1.6 1.6"></path>
      <path d="M19.4 4.6l-1.6 1.6"></path>
      <path d="M6.2 17.8l-1.6 1.6"></path>
    `;
  }

  function buildBoard() {
    boardEl.innerHTML = "";
    boardEl.style.setProperty("--tile-size", computeTileSize() + "px");

    for (let r = 0; r < maxRows; r += 1) {
      const row = document.createElement("div");
      row.className = "row";
      for (let c = 0; c < wordLength; c += 1) {
        const tile = document.createElement("div");
        tile.className = "tile";
        tile.id = `tile-${r}-${c}`;
        tile.setAttribute("aria-label", `Row ${r + 1} column ${c + 1}`);
        row.appendChild(tile);
      }
      boardEl.appendChild(row);
    }
  }

  function computeTileSize() {
    const vw = window.innerWidth || 375;
    const vh = window.innerHeight || 700;
    const boardPadding = 28;
    const gap = 5;
    const widthFit = (vw - boardPadding - gap * (wordLength - 1)) / wordLength;
    const heightFit = (vh * 0.42 - gap * (maxRows - 1)) / maxRows;
    return Math.max(25, Math.min(58, Math.floor(Math.min(widthFit, heightFit))));
  }

  function buildKeyboard() {
    keyboardEl.innerHTML = "";
    const rows = [
      ["Q","W","E","R","T","Y","U","I","O","P"],
      ["A","S","D","F","G","H","J","K","L"],
      ["ENTER","Z","X","C","V","B","N","M","⌫"]
    ];

    rows.forEach((letters) => {
      const row = document.createElement("div");
      row.className = "keyboard-row";
      letters.forEach(letter => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "key";
        button.id = `key-${letter}`;
        button.textContent = letter;
        if (letter === "ENTER" || letter === "⌫") button.classList.add("wide");
        button.addEventListener("click", () => handleKey(letter));
        row.appendChild(button);
      });
      keyboardEl.appendChild(row);
    });
  }

  function bindEvents() {
    hintButton.addEventListener("click", showHint);

    window.addEventListener("resize", () => {
      boardEl.style.setProperty("--tile-size", computeTileSize() + "px");
    });

    document.addEventListener("keydown", (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === "Enter") {
        event.preventDefault();
        handleKey("ENTER");
        return;
      }
      if (event.key === "Backspace") {
        event.preventDefault();
        handleKey("⌫");
        return;
      }
      if (/^[a-zA-Z]$/.test(event.key)) {
        event.preventDefault();
        handleKey(event.key.toUpperCase());
      }
    });

    closeModal.addEventListener("click", hideEndModal);
  }

  function updateHintBadge() {
    const hintsLeft = 2 - hintsUsed;
    hintBadge.textContent = Math.max(0, hintsLeft);
    if (hintsLeft <= 0) {
      hintBadge.classList.add("empty");
    }
  }

  function showHintPopup(title, body) {
    let overlay = document.getElementById("hint-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "hint-overlay";
      overlay.style.cssText = [
        "position:fixed", "inset:0", "z-index:999",
        "display:flex", "align-items:center", "justify-content:center",
        "background:rgba(0,0,0,0.45)", "animation:fadeIn 0.15s ease"
      ].join(";");

      if (!document.getElementById("hint-overlay-style")) {
        const s = document.createElement("style");
        s.id = "hint-overlay-style";
        s.textContent = [
          "@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
          "@keyframes popIn{from{transform:scale(0.88);opacity:0}to{transform:scale(1);opacity:1}}",
          "#hint-card{animation:popIn 0.18s ease;background:var(--bg);border:1.5px solid var(--border);",
          "border-radius:16px;padding:28px 32px;min-width:260px;max-width:88vw;text-align:center;",
          "box-shadow:0 8px 32px rgba(0,0,0,0.22);}",
          "#hint-card .hint-label{font-size:11px;letter-spacing:0.1em;text-transform:uppercase;",
          "color:var(--subtext);margin-bottom:10px;font-weight:600;}",
          "#hint-card .hint-title{font-size:15px;font-weight:700;color:var(--text);margin-bottom:6px;}",
          "#hint-card .hint-body{font-size:22px;font-weight:700;color:var(--text);margin-bottom:22px;line-height:1.3;}",
          "#hint-card .hint-close{display:inline-block;padding:9px 28px;border-radius:8px;",
          "background:var(--text);color:var(--bg);font-size:14px;font-weight:600;",
          "border:none;cursor:pointer;letter-spacing:0.02em;}"
        ].join("");
        document.head.appendChild(s);
      }

      document.body.appendChild(overlay);
    }

    overlay.innerHTML = `
      <div id="hint-card">
        <div class="hint-label">Hint</div>
        <div class="hint-title">${title}</div>
        <div class="hint-body">${body}</div>
        <button class="hint-close" id="hint-close-btn">Got it</button>
      </div>
    `;

    overlay.style.display = "flex";

    const close = () => { overlay.style.display = "none"; };
    document.getElementById("hint-close-btn").addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  }

  function showHint() {
    if (gameOver || isSubmitting) return;

    if (hintsUsed === 0) {
      showHintPopup("Category", wordCategory);
      hintsUsed++;
      updateHintBadge();
      saveState();
      return;
    }

    if (hintsUsed === 1) {
      const correctLetters = new Set();
      for (const row of boardState) {
        if (!row) continue;
        for (let i = 0; i < wordLength; i++) {
          if (row.colors[i] === "correct" || row.colors[i] === "present") {
            correctLetters.add(row.guess[i]);
          }
        }
      }

      const unrevealed = solution.split("").filter(l => !correctLetters.has(l));

      if (unrevealed.length > 0) {
        const randomHintLetter = unrevealed[Math.floor(Math.random() * unrevealed.length)];
        showHintPopup("Letter hint", `The word contains the letter<br><span style="font-size:36px">${randomHintLetter}</span>`);
        hintsUsed++;
        updateHintBadge();
        saveState();
      } else {
        showHintPopup("You're close!", "You've found all the letters —<br>now find their spots!");
      }
      return;
    }
  }

  function handleKey(key) {
    if (gameOver || isSubmitting) return;

    if (key === "ENTER") {
      submitGuess();
      return;
    }

    if (key === "⌫") {
      if (!currentGuess.length) return;
      currentGuess = currentGuess.slice(0, -1);
      updateBoard();
      saveState();
      return;
    }

    if (/^[A-Z]$/.test(key) && currentGuess.length < wordLength) {
      currentGuess += key;
      animateTilePop();
      updateBoard();
      saveState();
    }
  }

  function animateTilePop() {
    const tile = document.getElementById(`tile-${currentRow}-${Math.max(0, currentGuess.length - 1)}`);
    if (!tile) return;
    tile.classList.remove("pop");
    void tile.offsetWidth;
    tile.classList.add("pop");
  }

  function updateBoard() {
    for (let c = 0; c < wordLength; c += 1) {
      const tile = document.getElementById(`tile-${currentRow}-${c}`);
      if (!tile) continue;
      const letter = currentGuess[c] || "";
      tile.textContent = letter;
      tile.classList.toggle("filled", Boolean(letter));
    }
  }

  function restoreBoard() {
    for (let r = 0; r < maxRows; r += 1) {
      const rowData = boardState[r];
      if (!rowData) continue;

      const guess = rowData.guess || "";
      const colors = rowData.colors || [];
      for (let c = 0; c < wordLength; c += 1) {
        const tile = document.getElementById(`tile-${r}-${c}`);
        if (!tile) continue;
        tile.textContent = guess[c] || "";
        tile.classList.toggle("filled", Boolean(guess[c]));
        if (colors[c]) {
          tile.classList.add(colors[c]);
          tile.style.color = "#fff";
          tile.style.borderColor = "transparent";
        }
      }
    }
  }

  async function submitGuess() {
    if (!currentGuess || currentGuess.length !== wordLength) {
      showMessage(`Need ${wordLength} letters.`);
      shakeCurrentRow();
      return;
    }

    const guess = currentGuess.toUpperCase();
    isSubmitting = true;

    messageEl.textContent = "Loading...";
    messageEl.classList.add("show");

    const valid = await isValidWord(guess.toLowerCase());

    messageEl.classList.remove("show");

    if (!valid) {
      showMessage("That word is not accepted.");
      shakeCurrentRow();
      isSubmitting = false;
      return;
    }

    const colors = getTileColors(guess, solution);
    boardState[currentRow] = { guess, colors };
    saveState();

    animateFlip(currentRow, guess, colors);

    window.setTimeout(() => {
      if (guess === solution) {
        gameOver = true;
        saveState(true);
        showMessage("Solved.");
        showEndModal(true);
        isSubmitting = false;
        return;
      }

      currentRow += 1;
      currentGuess = "";

      if (currentRow >= maxRows) {
        gameOver = true;
        saveState(false);
        showMessage(`The word was ${solution}.`);
        showEndModal(false);
      } else {
        updateBoard();
        saveState();
      }

      isSubmitting = false;
    }, wordLength * 280 + 420);
  }

  function getTileColors(guess, answer) {
    const answerLetters = answer.split("");
    const guessLetters = guess.split("");
    const colors = Array(wordLength).fill("absent");

    for (let i = 0; i < wordLength; i += 1) {
      if (guessLetters[i] === answerLetters[i]) {
        colors[i] = "correct";
        answerLetters[i] = null;
        guessLetters[i] = null;
      }
    }

    for (let i = 0; i < wordLength; i += 1) {
      const letter = guessLetters[i];
      if (letter && answerLetters.includes(letter)) {
        colors[i] = "present";
        answerLetters[answerLetters.indexOf(letter)] = null;
      }
    }

    return colors;
  }

  function animateFlip(rowIndex, guess, colors) {
    for (let i = 0; i < wordLength; i += 1) {
      const tile = document.getElementById(`tile-${rowIndex}-${i}`);
      if (!tile) continue;

      window.setTimeout(() => {
        tile.classList.add("flip");
        window.setTimeout(() => {
          tile.classList.remove("flip");
          tile.classList.add(colors[i]);
          tile.style.color = "#fff";
          tile.style.borderColor = "transparent";
          updateKeyboardColor(guess[i], colors[i]);
        }, 220);
      }, i * 250);
    }
  }

  function shakeCurrentRow() {
    const row = boardEl.children[currentRow];
    if (!row) return;
    row.classList.remove("shake");
    void row.offsetWidth;
    row.classList.add("shake");
    window.setTimeout(() => row.classList.remove("shake"), 360);
  }

  function updateKeyboardColor(letter, color) {
    const key = document.getElementById(`key-${letter}`);
    if (!key) return;

    const priority = { absent: 0, present: 1, correct: 2 };
    const existing = key.classList.contains("correct") ? "correct"
      : key.classList.contains("present") ? "present"
      : key.classList.contains("absent") ? "absent"
      : null;

    if (existing && priority[existing] >= priority[color]) return;

    key.classList.remove("correct", "present", "absent");
    key.classList.add(color);
  }

  function updateKeyboardColorsFromBoard() {
    for (const rowData of boardState) {
      if (!rowData) continue;
      const guess = rowData.guess || "";
      const colors = rowData.colors || [];
      for (let i = 0; i < guess.length; i += 1) {
        updateKeyboardColor(guess[i], colors[i]);
      }
    }
  }

  function showMessage(text) {
    messageEl.textContent = text;
    messageEl.classList.add("show");
    clearTimeout(messageTimer);
    messageTimer = window.setTimeout(() => {
      if (!gameOver) messageEl.classList.remove("show");
    }, 1800);
  }

  async function isValidWord(word) {
    if (word.length !== wordLength) return false;

    // Always allow words from our list
    if (DAILY_WORDS.some(w => w.word.toLowerCase() === word)) return true;

    if (!/^[a-z]+$/.test(word)) return false;

    // Cache check
    if (wordCache[word] !== undefined) {
      return wordCache[word];
    }

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`
      );
      const result = response.ok;
      wordCache[word] = result;
      return result;
    } catch {
      wordCache[word] = false;
      return false;
    }
  }

  function showEndModal(won) {
    endTitle.textContent = won ? "You got it." : `The word was ${solution}`;
    modal.classList.remove("hidden");
    startCountdown();
  }

  function hideEndModal() {
    modal.classList.add("hidden");
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
  }

  function startCountdown() {
    if (countdownTimer) clearInterval(countdownTimer);

    const update = () => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setHours(24, 0, 0, 0);
      const diff = tomorrow.getTime() - now.getTime();

      if (diff <= 0) {
        countdownEl.textContent = "00:00:00";
        return;
      }

      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      countdownEl.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    update();
    countdownTimer = setInterval(update, 1000);
  }

  function saveState(won = null) {
    const state = {
      solutionIndex,
      currentRow,
      currentGuess,
      gameOver,
      won,
      boardState,
      hintsUsed
    };
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
})();