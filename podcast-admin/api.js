/*
 * ============================================================
 *  api.js — talks to Supabase (the free backend)
 *  Loads supabase-js from CDN, then exposes helper functions.
 * ============================================================
 */

let _client = null;

function getClient() {
  if (_client) return _client;
  if (typeof supabase === "undefined") {
    throw new Error("Supabase library not loaded. Check that config.js and the supabase-js script are loaded before api.js.");
  }
  _client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return _client;
}

// Fetch all episodes, newest first (by created_at desc)
async function apiListEpisodes() {
  const client = getClient();
  const { data, error } = await client
    .from(TABLE_NAME)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}

// Create a new episode. Returns the created row.
async function apiCreateEpisode(episode) {
  const client = getClient();
  const { data, error } = await client
    .from(TABLE_NAME)
    .insert([episode])
    .select();
  if (error) throw error;
  return data && data[0];
}

// Update an existing episode by id. Returns the updated row.
async function apiUpdateEpisode(id, changes) {
  const client = getClient();
  const { data, error } = await client
    .from(TABLE_NAME)
    .update(changes)
    .eq("id", id)
    .select();
  if (error) throw error;
  return data && data[0];
}

// Delete an episode by id.
async function apiDeleteEpisode(id) {
  const client = getClient();
  const { error } = await client.from(TABLE_NAME).delete().eq("id", id);
  if (error) throw error;
  return true;
}

// ===== Tiny URL helpers (for YouTube/Vimeo links) =====

// Convert a YouTube URL (any common form) to an embeddable URL.
function youtubeEmbedUrl(url) {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/
  );
  return m ? "https://www.youtube.com/embed/" + m[1] : null;
}

// Convert a Vimeo URL to an embeddable URL.
function vimeoEmbedUrl(url) {
  const m = url.match(/vimeo\.com\/(\d+)/);
  return m ? "https://player.vimeo.com/video/" + m[1] : null;
}

// Given any pasted link, return { src, type } or null if unrecognized.
function videoEmbed(url) {
  if (!url) return null;
  const yt = youtubeEmbedUrl(url);
  if (yt) return { src: yt, type: "youtube" };
  const vm = vimeoEmbedUrl(url);
  if (vm) return { src: vm, type: "vimeo" };
  // If it already looks like an embed/iframe src, use as-is
  if (/embed|player\./i.test(url)) return { src: url, type: "embed" };
  return null;
}