# 🚀 Deployment guide — go live in 30 minutes

This is your **one-time setup checklist**. After this, every `git push` auto-deploys in ~60 seconds.

> **Total time**: 30–40 minutes
> **Cost**: $0 (Cloudflare Pages + Plausible free tier)
> **Your steps marked 👤. My steps marked 🤖.**

---

## 1. GitHub setup (10 min)

### 👤 Step 1.1 — Authenticate gh CLI (one-time, opens browser)

Open PowerShell and run:
```powershell
gh auth login
```
Pick: **GitHub.com → HTTPS → Login with a web browser → Y**.
A browser tab opens. Approve. Done.

### 🤖 Step 1.2 — Tell me when done; I'll run:
```powershell
cd C:\Users\j7811\Projects\virida-vegan-pet-directory
gh repo create virida-vegan-pet-directory --public --source=. --push --description "APAC vegan pet brand directory · curated by VIRIDA"
```
This creates the GitHub repo and pushes the code.

---

## 2. Cloudflare Pages setup (10 min)

### 👤 Step 2.1 — Create Cloudflare account (skip if you have one)
Go to https://dash.cloudflare.com/sign-up → use your email → verify.

### 👤 Step 2.2 — Connect GitHub to Cloudflare Pages
1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Click **Connect GitHub**, authorize Cloudflare to access your repos.
3. Select `virida-vegan-pet-directory`.
4. **Build settings** (Cloudflare auto-detects most of this):
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (default)
5. Click **Save and Deploy**. Wait 60–90 seconds for first build.
6. You get a URL like `virida-vegan-pet-directory.pages.dev` — site is live ✅

### 👤 Step 2.3 — Get Cloudflare credentials for GitHub Actions (optional but recommended)
This enables auto-deploy via GitHub Actions (faster than the default git connector for some workflows).

1. https://dash.cloudflare.com/profile/api-tokens → **Create Token**
2. Use template **"Edit Cloudflare Workers"** → **Continue to summary** → **Create Token**
3. Copy the token (you'll only see it once).
4. Get your Account ID: https://dash.cloudflare.com → right sidebar → **Account ID**.
5. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**:
   - **New repository secret** → Name: `CLOUDFLARE_API_TOKEN`, Value: (paste token)
   - **New repository secret** → Name: `CLOUDFLARE_ACCOUNT_ID`, Value: (paste account ID)

---

## 3. Custom domain `directory.virida.pet` (5 min)

### 👤 Step 3.1 — Add custom domain in Cloudflare Pages
1. Pages dashboard → your project → **Custom domains** → **Set up a custom domain**.
2. Enter: `directory.virida.pet` → **Continue**.
3. Cloudflare shows you the DNS record to create.

### 👤 Step 3.2 — Add the DNS record
**If virida.pet is on Cloudflare DNS already**: Cloudflare adds it automatically. Skip to 3.3.

**If virida.pet is on another DNS provider** (GoDaddy, Namecheap, etc.):
- **Type**: CNAME
- **Name**: `directory`
- **Target**: `virida-vegan-pet-directory.pages.dev`
- **TTL**: Auto (or 3600)

Save the record. DNS propagation: 5 minutes to 1 hour.

### 👤 Step 3.3 — Verify
Visit https://directory.virida.pet — should load the site with HTTPS (Cloudflare auto-issues SSL cert).

---

## 4. Plausible Analytics (5 min, optional but recommended)

### 👤 Step 4.1 — Sign up
Go to https://plausible.io → Start trial (30 days free, then $9/mo for 10K pageviews).

> **Free alternative**: self-host Plausible on a $5/mo VPS, or use [Umami](https://umami.is) (free, self-hosted).

### 👤 Step 4.2 — Add domain
1. Plausible dashboard → **Add a website**
2. Domain: `directory.virida.pet`
3. Reporting timezone: Asia/Taipei

### 👤 Step 4.3 — Add to Cloudflare Pages env vars
1. Cloudflare Pages → your project → **Settings** → **Environment variables**
2. Add: `PUBLIC_PLAUSIBLE_DOMAIN` = `directory.virida.pet`
3. Save → trigger redeploy (Pages → Deployments → Retry).

Analytics start working immediately on next visit.

---

## 5. Google Search Console (5 min)

### 👤 Step 5.1 — Add property
1. Go to https://search.google.com/search-console (use any Google account)
2. **Add property** → **URL prefix** → `https://directory.virida.pet/`
3. **Verify** → choose **HTML tag** method → copy the `<meta>` tag.

### 👤 Step 5.2 — Add verification meta tag
Tell me the tag content and I'll add it to `BaseHead.astro`. Or add it yourself:

```astro
<!-- In src/components/BaseHead.astro, after <title> -->
<meta name="google-site-verification" content="YOUR_TOKEN_HERE" />
```

Then `git push` → auto-deploys → click **Verify** in Search Console.

### 👤 Step 5.3 — Submit sitemap
1. Search Console → **Sitemaps** (left sidebar)
2. Enter: `sitemap-index.xml`
3. **Submit**.

Google starts indexing within 24–48 hours.

---

## 6. Bing Webmaster Tools (3 min, easy SEO win)

Same as Google but for Bing (Yahoo APAC traffic comes through Bing too).

1. https://www.bing.com/webmasters → sign in with Microsoft account.
2. **Import from Google Search Console** (one-click) — they share the verification.
3. Add property: `https://directory.virida.pet`
4. Submit sitemap: `https://directory.virida.pet/sitemap-index.xml`

---

## ✅ Done — what to expect

| When | What |
|---|---|
| **Today** | Site live at directory.virida.pet ✅ |
| **24h** | Google starts crawling (Search Console shows first hits) |
| **3–7 days** | First pages indexed, appearing in Google results for branded terms ("VIRIDA vegan dog chew") |
| **2–4 weeks** | Long-tail terms start ranking ("vegan dog food Singapore", "Ami Cat Hong Kong") |
| **2–3 months** | First measurable organic traffic (~100–500 visits/mo) if you keep adding brands weekly |
| **6 months** | If on growth track per FOUNDER_NOTES.md → 1K–3K visits/mo |

---

## 🆘 Troubleshooting

**"gh repo create" fails with auth error**
→ Re-run `gh auth login`. Choose HTTPS, browser auth.

**Cloudflare Pages build fails on first deploy**
→ Check Node version. In Pages → Settings → Environment variables, set `NODE_VERSION=20`.

**DNS not resolving after 1 hour**
→ Run `nslookup directory.virida.pet 8.8.8.8`. If still fails, recheck CNAME target. Some registrars need DNS to be set on the apex `virida.pet` first via NS records pointing to Cloudflare.

**Plausible script blocked by adblockers**
→ Normal — affects ~30% of traffic measurement. Either accept (Plausible counts what it can) or self-host Plausible at `analytics.virida.pet` (set `PUBLIC_PLAUSIBLE_HOST` env var).

---

## 📞 Where to ask for help

- **Astro**: https://astro.build/chat (Discord)
- **Cloudflare Pages**: https://discord.cloudflare.com
- **Plausible**: hello@plausible.io (responds in <24h)
- **This repo**: open an issue at github.com/your-user/virida-vegan-pet-directory
