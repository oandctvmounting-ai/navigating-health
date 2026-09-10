/*
 * ============================================================
 *  embed.js — renders Cindy's episodes onto the public site.
 *
 *  Drop this on podcast.html (or any page) and give it a mount
 *  point. It fetches episodes from Supabase and builds episode
 *  cards styled to match the Navigating Health site.
 *
 *  Usage on the public page:
 *
 *    <div id="podcast-episodes" data-mount></div>
 *    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 *    <script src="/podcast-admin/config.js"></script>
 *    <script src="/podcast-admin/embed.js"></script>
 *
 *  (If Cindy's site has a "featured" card, the first episode is
 *   always featured at the top.)
 * ============================================================
 */

(function () {
  function mount() {
    return document.getElementById("podcast-episodes");
  }

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function playSvg() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.innerHTML =
      '<circle cx="12" cy="12" r="10"/>' +
      '<polyline points="10 8 14 12 10 16"/>';
    return svg;
  }

  // Build one episode card (matches the site's .card structure)
  function buildCard(ep) {
    const card = el("div", "card");

    // image area
    const imgWrap = el("div", "card-image");
    const img = el("img");
    img.src = ep.thumbnail || "";
    img.alt = ep.title || "Podcast episode";
    img.onerror = function () { img.style.opacity = "0.4"; };
    const overlay = el("div", "play-overlay");
    const playBtn = el("div", "play-button");
    playBtn.appendChild(playSvg());
    overlay.appendChild(playBtn);
    imgWrap.appendChild(img);
    imgWrap.appendChild(overlay);

    // content area
    const content = el("div", "card-content");
    content.appendChild(el("h3", null, ep.title || ""));
    content.appendChild(el("p", null, ep.caption || ""));

    // If there's an embed, make the whole card clickable to play
    if (ep.embed_src) {
      const link = el("a", "btn btn-primary", "Listen to the Podcast");
      link.href = ep.video || "#";
      link.target = "_blank";
      link.rel = "noopener";
      content.appendChild(link);

      // Make image open the video too
      card.style.cursor = "pointer";
      card.addEventListener("click", function () {
        window.open(ep.video || ep.embed_src, "_blank", "noopener");
      });
    } else {
      content.appendChild(el("a", "btn btn-primary", "Coming Soon"));
    }

    card.appendChild(imgWrap);
    card.appendChild(content);
    return card;
  }

  async function render() {
    const root = mount();
    if (!root) return;

    root.innerHTML =
      '<p style="text-align:center;color:var(--fg);">Loading episodes…</p>';

    let episodes;
    try {
      // Reuse the api.js helper if present; otherwise hit Supabase directly.
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
      root.innerHTML =
        '<p style="text-align:center;color:var(--fg);">Podcast episodes are on their way. Check back soon.</p>';
      return;
    }

    if (!episodes.length) {
      root.innerHTML =
        '<p style="text-align:center;color:var(--fg);">No episodes yet — stay tuned! 🎙️</p>';
      return;
    }

    root.innerHTML = "";

    // Featured = first episode (newest first), then the rest in a grid.
    const featured = episodes[0];
    const rest = episodes.slice(1);

    // Featured card (full width)
    const featuredCard = buildCard(featured);
    root.appendChild(featuredCard);

    // Remaining episodes in a 2-col grid
    if (rest.length) {
      const grid = el("div", "grid grid-2");
      grid.style.marginTop = "2rem";
      rest.forEach(function (ep) {
        grid.appendChild(buildCard(ep));
      });
      root.appendChild(grid);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();