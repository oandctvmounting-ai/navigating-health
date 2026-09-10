/*
 * ============================================================
 *  api.js — talks to Supabase (the free backend)
 *  Loads supabase-js from CDN, then exposes helper functions
 *  for the editor (and the public site embed) to use.
 * ============================================================
 */

let _client = null;
function sbClient() {
  if (!_client) {
    _client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return _client;
}

// --- Create ---
async function apiCreateEpisode(payload) {
  const { data, error } = await sbClient()
    .from(TABLE_NAME)
    .insert([payload]);
  if (error) throw error;
  return data;
}

// --- Read (newest first) ---
async function apiListEpisodes() {
  const { data, error } = await sbClient()
    .from(TABLE_NAME)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}

// --- Update ---
async function apiUpdateEpisode(id, payload) {
  const { data, error } = await sbClient()
    .from(TABLE_NAME)
    .update(payload)
    .eq("id", id);
  if (error) throw error;
  return data;
}

// --- Delete ---
async function apiDeleteEpisode(id) {
  const { data, error } = await sbClient()
    .from(TABLE_NAME)
    .delete()
    .eq("id", id);
  if (error) throw error;
  return data;
}

// --- URL helpers: turn a YouTube/Vimeo link into an embed src ---
function youtubeEmbedUrl(url) {
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);
  return m ? "https://www.youtube.com/embed/" + m[1] : null;
}
function vimeoEmbedUrl(url) {
  const m = url.match(/vimeo\.com\/(\d+)/);
  return m ? "https://player.vimeo.com/video/" + m[1] : null;
}
function videoEmbed(url) {
  if (!url) return null;
  const yt = youtubeEmbedUrl(url);
  if (yt) return { src: yt, type: "youtube" };
  const vm = vimeoEmbedUrl(url);
  if (vm) return { src: vm, type: "vimeo" };
  if (/embed|player\./i.test(url)) return { src: url, type: "embed" };
  return null;
}

// --- Derive auto-thumbnail for YouTube ---
function autoThumbnail(embed) {
  if (embed && embed.type === "youtube") {
    const id = (embed.src.match(/embed\/([\w-]{6,})/) || [])[1];
    if (id) return "https://img.youtube.com/vi/" + id + "/hqdefault.jpg";
  }
  return null;
}