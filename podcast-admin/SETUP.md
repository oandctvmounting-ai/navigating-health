# Navigating Health — Podcast Editor Setup

Cindy's private podcast editor. She can add/edit/delete episodes (title +
caption + YouTube/Vimeo link). Episodes go live on the public site
automatically. She signs in once and stays signed in.

---

## One-time setup (about 5 minutes)

### Step 1 — Create a free Supabase project

1. Go to **https://supabase.com** and sign in (use *your* dev account).
2. Click **New project**.
3. Fill in:
   - **Name**: `navigating-health`
   - **Database password**: make one up and save it (not needed after setup)
   - **Region**: pick the one closest to you (e.g. *US East*)
4. Click **Create new project**. Wait ~1 minute.

### Step 2 — Create the episodes table

1. Open the **SQL Editor** (left sidebar).
2. Paste this and click **Run**:

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
  on episodes for select using (true);

create policy "public insert episodes"
  on episodes for insert with check (true);

create policy "public update episodes"
  on episodes for update using (true);

create policy "public delete episodes"
  on episodes for delete using (true);
```

### Step 3 — Get your two keys

1. Go to **Project Settings → API**.
2. Copy the **Project URL** (looks like `https://xxxx.supabase.co`).
3. Copy the **anon / public** key.

### Step 4 — Put them in `config.js`

Open `config.js` and set:

```js
const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR-ANON-KEY";
```

Also set Cindy's password:

```js
const ADMIN_PASSWORD = "pick-a-private-password";
```

> After changing the password, tell Cindy what it is. That's all she needs to log in.

### Step 5 — Deploy

Commit and push to GitHub Pages (or upload the folder to her hosting).
The editor is at:

```
https://your-domain.com/podcast-admin/editor.html
```

Bookmark that link for Cindy.

---

## How Cindy uses it (day to day)

1. Open the editor link (bookmark it).
2. Enter her password once → she stays signed in on that device.
3. Fill in **title**, **caption**, and paste the **YouTube/Vimeo link**.
4. Click **Save Episode**. Done — it's live on the site as a playable video.

---

## Wiring the public site

The public `podcast.html` already includes:

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="podcast-admin/config.js"></script>
<script src="podcast-admin/api.js"></script>
<script src="podcast-admin/embed.js"></script>
```

`embed.js` renders Cindy's episodes as inline playable video players.

---

## Cost

Supabase's free tier is plenty for a personal podcast (500 MB database,
50k monthly users). No recurring cost.