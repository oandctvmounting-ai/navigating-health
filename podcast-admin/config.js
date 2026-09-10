/*
 * ============================================================
 *  CONFIG — fill in these two values from your Supabase project
 *  (see SETUP.md for the exact 5-minute instructions)
 * ============================================================
 */

// 1. Supabase Project URL (Project Settings → API → "Project URL")
//    Looks like: https://abcdefghijklm.supabase.co
const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";

// 2. Supabase "anon" public key (Project Settings → API → "Project API keys" → anon/public)
//    Looks like: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
const SUPABASE_ANON_KEY = "YOUR-SUPABASE-ANON-KEY";

// 3. The table name in Supabase (default "episodes" — leave unless you change it)
const TABLE_NAME = "episodes";

// 4. Cindy's secret password (change this to whatever she wants)
//    This is a simple shared-password gate — not bank-grade, but enough for
//    a personal content site. Anyone with this password can edit episodes.
const ADMIN_PASSWORD = "changeme123";

// 5. LocalStorage key used to remember she's logged in
const SESSION_KEY = "nh_podcast_admin_session";