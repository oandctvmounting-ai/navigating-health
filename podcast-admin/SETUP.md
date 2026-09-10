# Navigating Health — Podcast Editor Setup

This is Cindy's private podcast editor. It lets her:

- Add a new episode (title + caption + YouTube/Vimeo link + optional thumbnail)
- Edit or delete existing episodes
- Stay signed in (her browser remembers her)

Once she publishes, episodes appear on the public podcast page automatically.

---

## One-time setup (about 5 minutes)

### Step 1 — Create a free Supabase project

1. Go to **https://supabase.com** and click **Sign in**.
2. Sign in with a Google account (or make a free account).
3. Click **New project**.
4. Fill in:
   - **Name**: `navigating-health`
   - **Database password**: make one up and save it somewhere (you won't need it after setup)
   - **Region**: pick the one closest to you, e.g. *US East*
5. Click **Create new project**. Wait ~1 minute for it to spin up.

### Step 2 — Create the episodes table

1. In your project dashboard, open the **SQL Editor** (left sidebar).
2. Paste the SQL below and click **Run**:

```sql
create table if not exists episodes (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  caption text,
  video text,
  embed_src text,
  thumbnail text,
  created_at timestamptz not null default now()
);

alter table episodes enable row level security;

create policy "public read episodes"
  on episodes for select
  using (true);

create policy "public insert episodes"
  on episodes for insert
  with check (true);

create policy "public update episodes"
  on episodes for update
  using (true);

create policy "public delete episodes"
  on episodes for delete
  using (true);
```

### Step 3 — Get your two keys

1. In the dashboard, go to **Project Settings → API** (left sidebar).
2. Copy the **Project URL** (looks like `https://abcdefghijklm.supabase.co`).
3. Copy the **anon / public** key (under "Project API keys").

### Step 4 — Put the keys in `config.js`

Open `config.js` in this folder and set:

```js
const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR-ANON-KEY";
```

Also set Cindy's password here:

```js
const ADMIN_PASSWORD = "pick-a-private-password";
```

> **Important:** after changing the password, tell Cindy what it is. This is the
> only thing she needs to log in.

### Step 5 — Upload the files

Drop this whole `podcast-admin` folder onto whatever hosting Cindy's site
lives on (Netlify, Vercel, cPanel, etc.). The editor is at:

```
https://your-domain.com/podcast-admin/editor.html
```

Bookmark that link for Cindy.

---

## How Cindy uses it (day to day)

1. Open the editor link (bookmark it).
2. Enter her password once → she stays signed in on that device.
3. Fill in:
   - **Episode title**
   - **Caption** (a sentence or two describing it)
   - **Video link** (paste the full YouTube or Vimeo URL)
   - **Thumbnail** (optional — leave blank to auto-use the video's thumbnail)
4. Click **Save Episode**. Done — it's live.

---

## Wiring the public site to show episodes

On her public `podcast.html`, replace the hardcoded episode cards with a
mount point plus three script tags:

```html
<div id="podcast-episodes"></div>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="/podcast-admin/config.js"></script>
<script src="/podcast-admin/embed.js"></script>
```

The `embed.js` will render Cindy's episodes using the site's existing
`.card` styles, so they look identical to the rest of the site.
(Her first episode is shown as the large "featured" card; the rest go in a grid.)

---

## Cost

Supabase's free tier is more than enough for a personal podcast site:
- 500 MB database, 50k monthly active users, unlimited API calls at this scale.

Nothing here has a recurring cost. 🎉