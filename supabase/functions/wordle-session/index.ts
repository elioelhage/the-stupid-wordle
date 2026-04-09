// @ts-nocheck
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

function getMaxGuesses(wordLength: number) {
  return wordLength <= 5 ? 6 : Math.min(16, wordLength + 1);
}

type SessionRow = {
  id: number;
  day_index: number;
  principal_key: string;
  session_token: string;
  guess_count: number;
  request_count: number;
  guesses: Array<{ guess: string; colors: string[] }>;
  game_over: boolean;
  won: boolean;
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json"
    }
  });
}

function isUuidLike(value: unknown) {
  return typeof value === "string" && /^[0-9a-fA-F-]{30,80}$/.test(value);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ ok: false, code: "METHOD_NOT_ALLOWED" }, 405);
  }

  try {
    const body = await req.json().catch(() => ({}));
    const dayIndex = Number(body?.dayIndex);
    const userUuid = isUuidLike(body?.userUuid) ? String(body.userUuid) : null;
    const sessionSeed = isUuidLike(body?.sessionSeed) ? String(body.sessionSeed) : null;

    if (!Number.isFinite(dayIndex) || dayIndex < 0) {
      return json({ ok: false, code: "BAD_DAY_INDEX" }, 400);
    }

    if (!userUuid && !sessionSeed) {
      return json({ ok: false, code: "MISSING_SESSION_IDENTITY", message: "sessionSeed or userUuid is required." }, 400);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRole = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceRole) {
      return json({ ok: false, code: "SERVER_CONFIG_ERROR" }, 500);
    }

    const admin = createClient(supabaseUrl, serviceRole, {
      auth: { persistSession: false }
    });

    const principalKey = userUuid ? `user:${userUuid}` : `seed:${sessionSeed}`;

    const { data: wordRow, error: wordErr } = await admin
      .from("words")
      .select("word")
      .eq("day_index", dayIndex)
      .single();

    if (wordErr || !wordRow?.word) {
      return json({ ok: false, code: "WORD_NOT_FOUND" }, 404);
    }

  const wordLength = String(wordRow.word).trim().length;
  const maxGuesses = getMaxGuesses(wordLength);

    const { data: existing, error: existingErr } = await admin
      .from("wordle_daily_sessions")
      .select("id, day_index, principal_key, session_token, guess_count, request_count, guesses, game_over, won")
      .eq("day_index", dayIndex)
      .eq("principal_key", principalKey)
      .maybeSingle<SessionRow>();

    if (existingErr) {
      return json({ ok: false, code: "SESSION_LOOKUP_FAILED", message: existingErr.message }, 500);
    }

    if (existing) {
      return json({
        ok: true,
        sessionToken: existing.session_token,
        wordLength,
  maxGuesses,
        guessesUsed: Number(existing.guess_count) || 0,
        requestCount: Number(existing.request_count) || 0,
        gameOver: Boolean(existing.game_over),
        won: Boolean(existing.won),
        boardState: Array.isArray(existing.guesses) ? existing.guesses : []
      });
    }

    const sessionToken = crypto.randomUUID();

    const { data: created, error: insertErr } = await admin
      .from("wordle_daily_sessions")
      .insert({
        day_index: dayIndex,
        principal_key: principalKey,
        session_token: sessionToken,
        guess_count: 0,
        request_count: 0,
        guesses: [],
        game_over: false,
        won: false
      })
      .select("session_token")
      .single();

    if (insertErr || !created) {
      return json({ ok: false, code: "SESSION_CREATE_FAILED", message: insertErr?.message }, 500);
    }

    return json({
      ok: true,
      sessionToken: created.session_token,
      wordLength,
  maxGuesses,
      guessesUsed: 0,
      requestCount: 0,
      gameOver: false,
      won: false,
      boardState: []
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return json({ ok: false, code: "INTERNAL_ERROR", message }, 500);
  }
});
