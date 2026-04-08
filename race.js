(() => {
  const supabaseUrl = "https://hcehsxnudbwjydvenlfz.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjZWhzeG51ZGJ3anlkdmVubGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNzY4NzAsImV4cCI6MjA5MDY1Mjg3MH0.dPawhX90yZrme7nftMTq6A1j-KGqfHZJ8QnbBeFurl8";
  const supabase = window.supabase?.createClient(supabaseUrl, supabaseKey);

  const createRoomBtn = document.getElementById("create-room-btn");
  const joinRoomBtn = document.getElementById("join-room-btn");
  const roomInput = document.getElementById("room-input");
  const roomCard = document.getElementById("room-card");
  const roomRoleEl = document.getElementById("room-role");
  const roomHintEl = document.getElementById("room-hint");
  const roomCodeEl = document.getElementById("room-code");
  const roomLinkEl = document.getElementById("room-link");
  const copyCodeBtn = document.getElementById("copy-code-btn");
  const copyLinkBtn = document.getElementById("copy-link-btn");
  const shareLinkBtn = document.getElementById("share-link-btn");
  const statusEl = document.getElementById("race-status");

  const roomKey = "wordle-race-room";
  const clientKey = "wordle-race-client-id";
  const ROOM_TABLE = "battle_words";
  const PLAYER_TABLE = "battle_players";

  const ROOM_CODE_FIELDS = ["room_code", "code", "room", "battle_code"];
  const ROOM_HOST_FIELDS = ["host_client_id", "host_id", "created_by", "owner_id"];
  const ROOM_STATUS_FIELDS = ["status", "state"];

  const PLAYER_ROOM_FIELDS = ["room_code", "code", "room", "battle_code"];
  const PLAYER_ID_FIELDS = ["client_id", "player_id", "uuid", "user_id"];
  const PLAYER_ROLE_FIELDS = ["role", "player_role", "side"];

  let currentRoom = null;
  let currentRole = null;
  let roomPoller = null;

  function getClientId() {
    let id = localStorage.getItem(clientKey);
    if (!id) {
      id = window.crypto?.randomUUID ? window.crypto.randomUUID() : `client-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      localStorage.setItem(clientKey, id);
    }
    return id;
  }

  function uniquePayloads(payloads) {
    const seen = new Set();
    const out = [];
    for (const payload of payloads) {
      const key = JSON.stringify(payload);
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(payload);
    }
    return out;
  }

  async function tryInsert(table, payloads) {
    const attempts = uniquePayloads(payloads);
    let lastError = null;
    for (const payload of attempts) {
      const { error } = await supabase.from(table).insert([payload]);
      if (!error) return { ok: true, payload };
      lastError = error;
    }
    return { ok: false, error: lastError };
  }

  async function findRoomByCode(code) {
    for (const field of ROOM_CODE_FIELDS) {
      const { data, error } = await supabase
        .from(ROOM_TABLE)
        .select("*")
        .eq(field, code)
        .limit(1)
        .maybeSingle();

      if (!error) return { room: data, roomCodeField: field };
    }
    return { room: null, roomCodeField: ROOM_CODE_FIELDS[0] };
  }

  async function countPlayersInRoom(code) {
    for (const field of PLAYER_ROOM_FIELDS) {
      const { count, error } = await supabase
        .from(PLAYER_TABLE)
        .select("*", { count: "exact", head: true })
        .eq(field, code);

      if (!error) return count ?? 0;
    }
    return -1;
  }

  async function ensureRoomRecord(code) {
    if (!supabase) return false;

    const found = await findRoomByCode(code);
    if (found.room) return true;

    const clientId = getClientId();
    const payloads = [];
    for (const roomCodeField of ROOM_CODE_FIELDS) {
      payloads.push({ [roomCodeField]: code });
      for (const hostField of ROOM_HOST_FIELDS) {
        payloads.push({ [roomCodeField]: code, [hostField]: clientId });
        for (const statusField of ROOM_STATUS_FIELDS) {
          payloads.push({ [roomCodeField]: code, [hostField]: clientId, [statusField]: "waiting" });
        }
      }
      for (const statusField of ROOM_STATUS_FIELDS) {
        payloads.push({ [roomCodeField]: code, [statusField]: "waiting" });
      }
    }

    const result = await tryInsert(ROOM_TABLE, payloads);
    return result.ok;
  }

  async function upsertPlayerRecord(code, role) {
    if (!supabase) return false;

    const clientId = getClientId();

    for (const roomField of PLAYER_ROOM_FIELDS) {
      for (const idField of PLAYER_ID_FIELDS) {
        const check = await supabase
          .from(PLAYER_TABLE)
          .select("*")
          .eq(roomField, code)
          .eq(idField, clientId)
          .limit(1)
          .maybeSingle();
        if (!check.error && check.data) return true;
      }
    }

    const payloads = [];
    for (const roomField of PLAYER_ROOM_FIELDS) {
      for (const idField of PLAYER_ID_FIELDS) {
        payloads.push({ [roomField]: code, [idField]: clientId });
        for (const roleField of PLAYER_ROLE_FIELDS) {
          payloads.push({ [roomField]: code, [idField]: clientId, [roleField]: role });
        }
      }
    }

    const result = await tryInsert(PLAYER_TABLE, payloads);
    return result.ok;
  }

  async function refreshRoomStatus() {
    if (!currentRoom) return;

    const count = await countPlayersInRoom(currentRoom);
    if (count < 0) {
      setStatus("Connected, but table columns didn’t match expected room fields.");
      return;
    }

    if (count >= 2) {
      setStatus("Opponent joined ✅ Room is ready for 1v1.");
    } else if (currentRole === "host") {
      setStatus("Room is online. Waiting for opponent to join...");
    } else {
      setStatus("You joined. Waiting for host/opponent sync...");
    }
  }

  function startRoomPolling() {
    if (roomPoller) clearInterval(roomPoller);
    roomPoller = window.setInterval(refreshRoomStatus, 2500);
    refreshRoomStatus();
  }

  function sanitizeRoomCode(value) {
    return (value || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
  }

  function randomRoomCode() {
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const bytes = new Uint8Array(6);
    if (window.crypto?.getRandomValues) window.crypto.getRandomValues(bytes);
    else for (let i = 0; i < bytes.length; i += 1) bytes[i] = Math.floor(Math.random() * 256);

    let out = "";
    for (let i = 0; i < 6; i += 1) out += alphabet[bytes[i] % alphabet.length];
    return out;
  }

  function roomInviteLink(code) {
    const url = new URL(window.location.href);
    url.searchParams.set("room", code);
    return url.toString();
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {}

    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      return ok;
    } catch {
      return false;
    }
  }

  function setStatus(text) {
    statusEl.textContent = text;
  }

  function setRoom(code, role) {
    const cleanCode = sanitizeRoomCode(code);
    if (!cleanCode) return;

    const link = roomInviteLink(cleanCode);
    roomCard.classList.remove("hidden");
    roomCodeEl.textContent = cleanCode;
    roomLinkEl.value = link;

    if (role === "host") {
      roomRoleEl.textContent = "You are Host";
      roomHintEl.textContent = "Invite 1 friend using the code or link below.";
      setStatus("Creating online room...");
    } else {
      roomRoleEl.textContent = "You are Challenger";
      roomHintEl.textContent = "You joined this 1v1 room.";
      setStatus("Joining online room...");
    }

    currentRoom = cleanCode;
    currentRole = role;

    localStorage.setItem(roomKey, JSON.stringify({ code: cleanCode, role, updatedAt: Date.now() }));
    const url = new URL(window.location.href);
    url.searchParams.set("room", cleanCode);
    window.history.replaceState({}, "", url);

    connectRoomOnline(cleanCode, role);
  }

  async function connectRoomOnline(code, role) {
    if (!supabase) {
      setStatus("Supabase client not loaded on this page.");
      return;
    }

    const roomOk = role === "host" ? await ensureRoomRecord(code) : Boolean((await findRoomByCode(code)).room);
    if (!roomOk) {
      setStatus(role === "host" ? "Could not create room in DB." : "Room not found online. Check code.");
      return;
    }

    const playerOk = await upsertPlayerRecord(code, role);
    if (!playerOk) {
      setStatus("Connected to room, but could not register player row.");
      return;
    }

    startRoomPolling();
  }

  async function createRoom() {
    const code = randomRoomCode();
    setRoom(code, "host");
  }

  async function joinRoom() {
    const cleanCode = sanitizeRoomCode(roomInput.value);
    roomInput.value = cleanCode;
    if (cleanCode.length !== 6) {
      setStatus("Room code must be 6 letters/numbers.");
      return;
    }
    setRoom(cleanCode, "guest");
  }

  function restoreLastRoom() {
    const roomFromUrl = sanitizeRoomCode(new URLSearchParams(window.location.search).get("room"));
    if (roomFromUrl) {
      roomInput.value = roomFromUrl;
      setRoom(roomFromUrl, "guest");
      return;
    }

    try {
      const saved = JSON.parse(localStorage.getItem(roomKey) || "null");
      if (saved?.code) {
        setRoom(saved.code, saved.role === "guest" ? "guest" : "host");
      }
    } catch {}
  }

  createRoomBtn?.addEventListener("click", createRoom);
  joinRoomBtn?.addEventListener("click", joinRoom);

  roomInput?.addEventListener("input", () => {
    roomInput.value = sanitizeRoomCode(roomInput.value);
  });

  roomInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") joinRoom();
  });

  copyCodeBtn?.addEventListener("click", async () => {
    const ok = await copyText(roomCodeEl.textContent.trim());
    setStatus(ok ? "Room code copied." : "Could not copy code on this device.");
  });

  copyLinkBtn?.addEventListener("click", async () => {
    const ok = await copyText(roomLinkEl.value);
    setStatus(ok ? "Invite link copied." : "Could not copy link on this device.");
  });

  shareLinkBtn?.addEventListener("click", async () => {
    const link = roomLinkEl.value;
    if (!link) {
      setStatus("Create or join a room first.");
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Wordle Unbound Race",
          text: "Join my 1v1 race room!",
          url: link
        });
        setStatus("Share sheet opened.");
        return;
      } catch {}
    }

    const ok = await copyText(link);
    setStatus(ok ? "Share not available here, so link was copied instead." : "Could not share or copy the link.");
  });

  window.addEventListener("beforeunload", () => {
    if (roomPoller) clearInterval(roomPoller);
  });

  restoreLastRoom();
})();
