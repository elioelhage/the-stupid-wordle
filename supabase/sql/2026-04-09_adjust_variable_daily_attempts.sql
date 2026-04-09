-- Run this if you already applied 2026-04-09_secure_wordle.sql with <= 6 checks.
-- It updates constraints to allow variable daily attempt limits up to 16.

alter table public.wordle_daily_sessions
  drop constraint if exists wordle_daily_sessions_guess_count_chk,
  drop constraint if exists wordle_daily_sessions_request_count_chk;

alter table public.wordle_daily_sessions
  add constraint wordle_daily_sessions_guess_count_chk
    check (guess_count >= 0 and guess_count <= 16),
  add constraint wordle_daily_sessions_request_count_chk
    check (request_count >= 0 and request_count <= 16);
