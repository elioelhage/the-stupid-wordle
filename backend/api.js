/**
 * WORDSHIFT BACKEND API
 * Purpose: Serve Supabase credentials securely to frontend
 * The frontend uses these keys to access Supabase directly
 * Keys are protected in Render environment variables (not in code)
 */

const express = require('express');
const cors = require('cors');

// ============================================================
// ENVIRONMENT VARIABLES (set in Render dashboard)
// ============================================================
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const port = process.env.PORT || 3000;

// Validate env vars are set
if (!supabaseUrl || !supabaseKey) {
  console.error('❌ ERROR: Missing Supabase credentials!');
  console.error('Set SUPABASE_URL and SUPABASE_KEY in Render Environment variables');
  process.exit(1);
}

const app = express();
const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

// ============================================================
// MIDDLEWARE
// ============================================================
// Enable CORS for all origins (frontend needs to fetch the keys)
app.use(cors());
app.use(express.json());

// ============================================================
// API ENDPOINTS
// ============================================================

// Root route (useful for Render URL checks)
app.get('/', (req, res) => {
  res.json({
    service: 'WordShift backend',
    status: 'online',
    endpoints: ['/health', '/api/keys']
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve Supabase credentials to frontend (safe to expose from backend)
// Frontend will use these keys to connect to Supabase directly
app.get('/api/keys', (req, res) => {
  res.json({
    supabaseUrl: supabaseUrl,
    supabaseKey: supabaseKey
  });
});

app.get('/api/weekly-stats', async (req, res) => {
  const weekFrom = Number(req.query.weekFrom);
  if (!Number.isFinite(weekFrom) || weekFrom < 0) {
    return res.status(400).json({ error: 'Bad weekFrom value' });
  }

  if (!supabaseUrl || !supabaseServiceRole) {
    return res.status(500).json({ error: 'Missing SUPABASE_SERVICE_ROLE_KEY' });
  }

  try {
    const queryUrl = new URL(`${supabaseUrl}/rest/v1/wordle_daily_sessions`);
    queryUrl.searchParams.set('select', 'principal_key,guess_count,day_index');
    queryUrl.searchParams.set('day_index', `gte.${weekFrom}`);
    queryUrl.searchParams.set('game_over', 'eq.true');

    const response = await fetch(queryUrl.toString(), {
      headers: {
        apikey: supabaseServiceRole,
        Authorization: `Bearer ${supabaseServiceRole}`,
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: 'Failed to fetch weekly stats', details: text });
    }

    const rows = await response.json();
    const map = new Map();

    (Array.isArray(rows) ? rows : []).forEach((row) => {
      const principalKey = String(row.principal_key || '');
      if (!principalKey.startsWith('user:')) return;
      const uuid = principalKey.slice(5);
      const entry = map.get(uuid) || { uuid, gamesPlayed: 0, totalGuesses: 0, lastPlayedVal: -1 };
      entry.gamesPlayed += 1;
      entry.totalGuesses += Number(row.guess_count) || 0;
      entry.lastPlayedVal = Math.max(entry.lastPlayedVal, Number(row.day_index) || -1);
      map.set(uuid, entry);
    });

    return res.json({ ok: true, stats: Array.from(map.values()) });
  } catch (error) {
    console.error('weekly-stats error:', error);
    return res.status(500).json({ error: 'Unable to compute weekly stats' });
  }
});

app.get('/api/weekly-stats', async (req, res) => {
  const weekFrom = Number(req.query.weekFrom);
  if (!Number.isFinite(weekFrom) || weekFrom < 0) {
    return res.status(400).json({ error: 'Bad weekFrom value' });
  }

  if (!supabaseUrl || !supabaseServiceRole) {
    return res.status(500).json({ error: 'Missing SUPABASE_SERVICE_ROLE_KEY' });
  }

  try {
    const queryUrl = new URL(`${supabaseUrl}/rest/v1/wordle_daily_sessions`);
    queryUrl.searchParams.set('select', 'principal_key,guess_count,day_index');
    queryUrl.searchParams.set('day_index', `gte.${weekFrom}`);
    queryUrl.searchParams.set('game_over', 'eq.true');

    const response = await fetch(queryUrl.toString(), {
      headers: {
        apikey: supabaseServiceRole,
        Authorization: `Bearer ${supabaseServiceRole}`,
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: 'Failed to fetch weekly stats', details: text });
    }

    const rows = await response.json();
    const map = new Map();

    (Array.isArray(rows) ? rows : []).forEach((row) => {
      const principalKey = String(row.principal_key || '');
      if (!principalKey.startsWith('user:')) return;
      const uuid = principalKey.slice(5);
      const entry = map.get(uuid) || { uuid, gamesPlayed: 0, totalGuesses: 0, lastPlayedVal: -1 };
      entry.gamesPlayed += 1;
      entry.totalGuesses += Number(row.guess_count) || 0;
      entry.lastPlayedVal = Math.max(entry.lastPlayedVal, Number(row.day_index) || -1);
      map.set(uuid, entry);
    });

    return res.json({
      ok: true,
      stats: Array.from(map.values())
    });
  } catch (error) {
    console.error('weekly-stats error:', error);
    return res.status(500).json({ error: 'Unable to compute weekly stats' });
  }
});

// Fallback for unknown routes
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'Use /health or /api/keys'
  });
});

// ============================================================
// START SERVER
// ============================================================
app.listen(port, () => {
  console.log(`✅ WordShift API running on port ${port}`);
  console.log(`   Health check: http://localhost:${port}/health`);
  console.log(`   Get keys: http://localhost:${port}/api/keys`);
});
