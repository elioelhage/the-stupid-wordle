-- Secure server-authoritative WordShift daily guesses
-- Run in Supabase SQL Editor.

create table if not exists public.wordle_daily_sessions (
  id bigint generated always as identity primary key,
  day_index integer not null,
  principal_key text not null,
  session_token text not null unique,
  guess_count integer not null default 0,
  request_count integer not null default 0,
  guesses jsonb not null default '[]'::jsonb,
  game_over boolean not null default false,
  won boolean not null default false,
  last_guess_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint wordle_daily_sessions_guess_count_chk check (guess_count >= 0 and guess_count <= 16),
  constraint wordle_daily_sessions_request_count_chk check (request_count >= 0 and request_count <= 16)
);

create unique index if not exists wordle_daily_sessions_day_principal_idx
  on public.wordle_daily_sessions (day_index, principal_key);

create index if not exists wordle_daily_sessions_day_token_idx
  on public.wordle_daily_sessions (day_index, session_token);

-- Optional dictionary table for strict word allow-list
create table if not exists public.word_dictionary (
  word text primary key,
  added_at timestamptz not null default now(),
  constraint word_dictionary_word_chk check (word ~ '^[a-z]+$')
);

alter table public.wordle_daily_sessions enable row level security;
alter table public.word_dictionary enable row level security;

-- No direct client reads/writes; only Edge Functions (service role) should access these.
drop policy if exists "deny_all_wordle_daily_sessions" on public.wordle_daily_sessions;
create policy "deny_all_wordle_daily_sessions"
  on public.wordle_daily_sessions
  for all
  to anon, authenticated
  using (false)
  with check (false);

drop policy if exists "deny_all_word_dictionary" on public.word_dictionary;
create policy "deny_all_word_dictionary"
  on public.word_dictionary
  for all
  to anon, authenticated
  using (false)
  with check (false);
