/*
 * ============================================================
 *  embed.js — renders Cindy's episodes onto the public site as
 *  INLINE PLAYABLE video players (title + caption + video).
 * ============================================================
 */

(function () {
  function mount() {
    return document.getElementById("podcast-episodes");
  }

  function youtubeId(url) {
    const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);
    return m ? m[1] : null;
  }

  function buildCard(ep, featured) {
    const card = document.createElement("div");
    card.className = "episode-card" + (featured ? " featured" : "");

    // Video player (inline embed)
    const videoWrap = document.createElement("div");
    videoWrap.className = "episode-video";
    const id = youtubeId(ep.video) || (ep.embed_src ? (ep.embed_src.match(/embed\/([\w-]{6,})/) || [])[1] : null);
    if (id) {
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/" + id;
      iframe.title = ep.title || "Podcast episode";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      videoWrap.appendChild(iframe);
    }

    // Info (title + caption)
    const info = document.createElement("div");
    info.className = "episode-info";
    const h3 = document.createElement("h3");
    h3.textContent = ep.title || "";
    const p = document.createElement("p");
    p.textContent = ep.caption || "";
    info.appendChild(h3);
    info.appendChild(p);

    card.appendChild(videoWrap);
    card.appendChild(info);
    return card;
  }

  async function render() {
    const root = mount();
    if (!root) return;

    root.innerHTML = '<p style="text-align:center;color:var(--fg);">Loading episodes…</p>';

    let episodes;
    try {
      if (typeof apiListEpisodes === "function") {
        episodes = await apiListEpisodes();
      } else {
        const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        const { data, error } = await client
          .from(TABLE_NAME)
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        episodes = data || [];
      }
    } catch (err) {
      console.error("Podcast embed failed to load:", err);
      root.innerHTML = '<p style="text-align:center;color:var(--fg);">Podcast episodes are on their way. Check back soon.</p>';
      return;
    }

    if (!episodes.length) {
      root.innerHTML = '<p style="text-align:center;color:var(--fg);">No episodes yet — stay tuned! 🎙️</p>';
      return;
    }

    root.innerHTML = "";
    const grid = document.createElement("div");
    grid.className = "episode-grid";

    episodes.forEach(function (ep, i) {
      grid.appendChild(buildCard(ep, i === 0));
    });

    root.appendChild(grid);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();