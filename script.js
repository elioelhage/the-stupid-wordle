(() => {
  const WORDS = [
    { word: "ACTOR", category: "Theater" }, { word: "GRACE", category: "Christianity" }, { word: "TRACK", category: "General" }, { word: "LABAN", category: "Lebanon" },
    { word: "COFFEE", category: "Lebanon" }, { word: "SHEET", category: "General" }, { word: "CHURCH", category: "Christianity" }, { word: "CASTING", category: "Theater" },
    { word: "BREAD", category: "General" }, { word: "KABIS", category: "Lebanon" }, { word: "STRIKE", category: "Theater" }, { word: "BISHOP", category: "Christianity" },
    { word: "DABKE", category: "Lebanon" }, { word: "PIANO", category: "General" }, { word: "HEAVEN", category: "Christianity" }, { word: "TICKET", category: "Theater" },
    { word: "SCARF", category: "General" }, { word: "ROOF", category: "General" }, { word: "THYME", category: "Lebanon" }, { word: "SINGER", category: "Theater" },
    { word: "ROSARY", category: "Christianity" }, { word: "LEMON", category: "Lebanon" }, { word: "PRAYER", category: "Christianity" }, { word: "EARTH", category: "General" },
    { word: "CUES", category: "Theater" }, { word: "CLIFF", category: "Lebanon" }, { word: "SAINT", category: "Christianity" }, { word: "COMEDY", category: "Theater" },
    { word: "GLASS", category: "General" }, { word: "KAFTA", category: "Lebanon" }, { word: "MERCY", category: "Christianity" }, { word: "CHORUS", category: "Theater" },
    { word: "BATATA", category: "Lebanon" }, { word: "GLOVE", category: "General" }, { word: "BIBLE", category: "Christianity" }, { word: "ACTRESS", category: "Theater" },
    { word: "SWEET", category: "General" }, { word: "BEACH", category: "Lebanon" }, { word: "FAITH", category: "Christianity" }, { word: "PROPS", category: "Theater" },
    { word: "HUMMUS", category: "Lebanon" }, { word: "COLOR", category: "General" }, { word: "SERMON", category: "Christianity" }, { word: "SCENE", category: "Theater" },
    { word: "SPOON", category: "General" }, { word: "ZAATAR", category: "Lebanon" }, { word: "PARISH", category: "Christianity" }, { word: "TRAGIC", category: "Theater" },
    { word: "GOSPEL", category: "Christianity" }, { word: "FAMILY", category: "Lebanon" }, { word: "DANCE", category: "General" }, { word: "SCRIPT", category: "Theater" },
    { word: "KNAFEH", category: "Lebanon" }, { word: "PLANT", category: "General" }, { word: "PRIEST", category: "Christianity" }, { word: "STALLS", category: "Theater" },
    { word: "HOUSE", category: "General" }, { word: "BALAD", category: "Lebanon" }, { word: "JESUS", category: "Christianity" }, { word: "BOWS", category: "Theater" },
    { word: "FALAFEL", category: "Lebanon" }, { word: "KNIFE", category: "General" }, { word: "CHOIR", category: "Christianity" }, { word: "STAGE", category: "Theater" },
    { word: "TRAIN", category: "General" }, { word: "SFIHA", category: "Lebanon" }, { word: "CREED", category: "Christianity" }, { word: "OPERA", category: "Theater" },
    { word: "CEDAR", category: "Lebanon" }, { word: "NIGHT", category: "General" }, { word: "CHALICE", category: "Christianity" }, { word: "WINGS", category: "Theater" },
    { word: "WATER", category: "General" }, { word: "AYYAM", category: "Lebanon" }, { word: "PSALM", category: "Christianity" }, { word: "EXTRA", category: "Theater" },
    { word: "LABNEH", category: "Lebanon" }, { word: "BRUSH", category: "General" }, { word: "ALTAR", category: "Christianity" }, { word: "MASKS", category: "Theater" },
    { word: "CLOCK", category: "General" }, { word: "HALAWA", category: "Lebanon" }, { word: "ANGEL", category: "Christianity" }, { word: "COMIC", category: "Theater" },
    { word: "ZAHR", category: "Lebanon" }, { word: "PAPER", category: "General" }, { word: "DEACON", category: "Christianity" }, { word: "LINES", category: "Theater" },
    { word: "SHIRT", category: "General" }, { word: "WATAN", category: "Lebanon" }, { word: "PENANCE", category: "Christianity" }, { word: "BALLET", category: "Theater" },
    { word: "KIBBEH", category: "Lebanon" }, { word: "TABLE", category: "General" }, { word: "TRINITY", category: "Christianity" }, { word: "REVIEW", category: "Theater" },
    { word: "PHONE", category: "General" }, { word: "JABAL", category: "Lebanon" }, { word: "SAVIOR", category: "Christianity" }, { word: "CRITIC", category: "Theater" },
    { word: "BAKLAVA", category: "Lebanon" }, { word: "PAINT", category: "General" }, { word: "GENESIS", category: "Christianity" }, { word: "MAKEUP", category: "Theater" },
    { word: "WATCH", category: "General" }, { word: "KEBAB", category: "Lebanon" }, { word: "EXODUS", category: "Christianity" }, { word: "CASTED", category: "Theater" },
    { word: "CEDARS", category: "Lebanon" }, { word: "SMILE", category: "General" }, { word: "PARABLE", category: "Christianity" }, { word: "STAGED", category: "Theater" },
    { word: "PANTS", category: "General" }, { word: "SAMAK", category: "Lebanon" }, { word: "EASTER", category: "Christianity" }, { word: "FARCE", category: "Theater" },
    { word: "TAYEB", category: "Lebanon" }, { word: "LAUGH", category: "General" }, { word: "ADVENT", category: "Christianity" }, { word: "SATIRE", category: "Theater" },
    { word: "GREEN", category: "General" }, { word: "YOGHURT", category: "Lebanon" }, { word: "VESPERS", category: "Christianity" }, { word: "PARODY", category: "Theater" },
    { word: "SESAME", category: "Lebanon" }, { word: "BLACK", category: "General" }, { word: "MATINS", category: "Christianity" }, { word: "TIMING", category: "Theater" },
    { word: "WHITE", category: "General" }, { word: "PASTRY", category: "Lebanon" }, { word: "LITURGY", category: "Christianity" }, { word: "THEME", category: "Theater" },
    { word: "FATAYER", category: "Lebanon" }, { word: "HAPPY", category: "General" }, { word: "CLERGY", category: "Christianity" }, { word: "PLOT", category: "Theater" },
    { word: "RAINY", category: "General" }, { word: "SHISH", category: "Lebanon" }, { word: "DIVINE", category: "Christianity" }, { word: "STORY", category: "Theater" },
    { word: "TAOUK", category: "Lebanon" }, { word: "SUNNY", category: "General" }, { word: "PASTOR", category: "Christianity" }, { word: "CLIMAX", category: "Theater" },
    { word: "MORNING", category: "General" }, { word: "ARABIC", category: "Lebanon" }, { word: "BELIEF", category: "Christianity" }, { word: "LYRICS", category: "Theater" },
    { word: "SPICES", category: "Lebanon" }, { word: "SLEEP", category: "General" }, { word: "DEVOUT", category: "Christianity" }, { word: "DANCER", category: "Theater" },
    { word: "DREAM", category: "General" }, { word: "NOUGAT", category: "Lebanon" }, { word: "SPIRIT", category: "Christianity" }, { word: "STAGES", category: "Theater" },
    { word: "COAST", category: "Lebanon" }, { word: "GHOST", category: "General" }, { word: "CHANTS", category: "Christianity" }, { word: "PLAYED", category: "Theater" },
    { word: "MAGIC", category: "General" }, { word: "GARLIC", category: "Lebanon" }, { word: "SHRINE", category: "Christianity" }, { word: "POSTER", category: "Theater" },
    { word: "WINTER", category: "Lebanon" }, { word: "SPICY", category: "General" }, { word: "RELICS", category: "Christianity" }, { word: "FLYMAN", category: "Theater" },
    { word: "SALTY", category: "General" }, { word: "LEVANT", category: "Lebanon" }, { word: "MARTYR", category: "Christianity" }, { word: "RIGGER", category: "Theater" },
    { word: "ROOTS", category: "Lebanon" }, { word: "BITTER", category: "General" }, { word: "VIRTUE", category: "Christianity" }, { word: "ACTING", category: "Theater" },
    { word: "METAL", category: "General" }, { word: "VILLAGE", category: "Lebanon" }, { word: "NOVICE", category: "Christianity" }, { word: "MIMIC", category: "Theater" },
    { word: "ROMAN", category: "Lebanon" }, { word: "TRAIL", category: "General" }, { word: "SUNDAY", category: "Christianity" }, { word: "VOCAL", category: "Theater" },
    { word: "CLOUD", category: "General" }, { word: "VALLEY", category: "Lebanon" }, { word: "ASHES", category: "Christianity" }, { word: "MIMES", category: "Theater" },
    { word: "OTTOMAN", category: "Lebanon" }, { word: "FLOOR", category: "General" }, { word: "MYSTIC", category: "Christianity" }, { word: "BOOTH", category: "Theater" },
    { word: "MUSIC", category: "General" }, { word: "SHWARMA", category: "Lebanon" }, { word: "SACRED", category: "Christianity" }, { word: "AISLE", category: "Theater" },
    { word: "RUINS", category: "Lebanon" }, { word: "VOICE", category: "General" }, { word: "GLORY", category: "Christianity" }, { word: "FOYER", category: "Theater" },
    { word: "WINDOW", category: "General" }, { word: "OLIVE", category: "Lebanon" }, { word: "RECTOR", category: "Christianity" }, { word: "CURTAIN", category: "Theater" },
    { word: "PIGEON", category: "Lebanon" }, { word: "PLANET", category: "General" }, { word: "HOMILY", category: "Christianity" }, { word: "SOUND", category: "Theater" },
    { word: "DESERT", category: "General" }, { word: "SUMMER", category: "Lebanon" }, { word: "PSALMS", category: "Christianity" }, { word: "IMPROV", category: "Theater" },
    { word: "BRANCH", category: "Lebanon" }, { word: "STREET", category: "General" }, { word: "FRIAR", category: "Christianity" }, { word: "TROUPE", category: "Theater" },
    { word: "CHEESE", category: "General" }, { word: "ROCKS", category: "Lebanon" }, { word: "CLERIC", category: "Christianity" }, { word: "REVIVAL", category: "Theater" },
    { word: "FINJAAN", category: "Lebanon" }, { word: "FLOWER", category: "General" }, { word: "PIOUS", category: "Christianity" }, { word: "MUSICAL", category: "Theater" },
    { word: "BICYCLE", category: "General" }, { word: "MEZZE", category: "Lebanon" }, { word: "SINNER", category: "Christianity" }, { word: "SCENERY", category: "Theater" },
    { word: "COLUMN", category: "Lebanon" }, { word: "INSECT", category: "General" }, { word: "PROPHET", category: "Christianity" }, { word: "CABARET", category: "Theater" },
    { word: "SPACE", category: "General" }, { word: "SOUKS", category: "Lebanon" }, { word: "BAPTISM", category: "Christianity" }, { word: "BALCONY", category: "Theater" },
    { word: "LIGHT", category: "General" }, { word: "KAFTA", category: "Lebanon" }, { word: "EPISTLE", category: "Christianity" }, { word: "TRAGEDY", category: "Theater" },
    { word: "ANIMAL", category: "General" }, { word: "FATTOUSH", category: "Lebanon" }, { word: "APOSTLE", category: "Christianity" }, { word: "ENCORE", category: "Theater" },
    { word: "PENCIL", category: "General" }, { word: "MOUNTAIN", category: "Lebanon" }, { word: "VATICAN", category: "Christianity" }, { word: "MARQUEE", category: "Theater" },
    { word: "OCEAN", category: "General" }, { word: "DIASPORA", category: "Lebanon" }, { word: "BAPTIST", category: "Christianity" }, { word: "USHER", category: "Theater" },
    { word: "FRUIT", category: "General" }, { word: "CORNICHE", category: "Lebanon" }, { word: "CHORDS", category: "Christianity" }, { word: "DRAMA", category: "Theater" },
    { word: "ISLAND", category: "General" }, { word: "TABBOULEH", category: "Lebanon" }, { word: "PALACE", category: "Christianity" }, { word: "TRUCK", category: "Theater" },
    { word: "PLANE", category: "General" }, { word: "MANAWEESH", category: "Lebanon" }, { word: "TEMPLE", category: "Christianity" }, { word: "SETS", category: "Theater" },
    { word: "CHAIR", category: "General" }, { word: "HALLOUMI", category: "Lebanon" }, { word: "SHRINE", category: "Christianity" }, { word: "ACTOR", category: "Theater" }
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

  function showHint() {
    if (gameOver || isSubmitting) return;

    if (hintsUsed === 0) {
      showMessage(`Category: ${wordCategory}`);
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

      const unrevealed = solution.split('').filter(l => !correctLetters.has(l));

      if (unrevealed.length > 0) {
        const randomHintLetter = unrevealed[Math.floor(Math.random() * unrevealed.length)];
        showMessage(`Hint: Try finding a spot for '${randomHintLetter}'`);
        hintsUsed++;
        updateHintBadge();
        saveState();
      } else {
        showMessage("You've found all letters, now find their spots!");
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

  // Always allow words from your list
  if (DAILY_WORDS.some(w => w.word.toLowerCase() === word)) return true;

  if (!/^[a-z]+$/.test(word)) return false;

  // ✅ Cache check
  if (wordCache[word] !== undefined) {
    return wordCache[word];
  }

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`
    );

    const result = response.ok;
    wordCache[word] = result; // store result
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