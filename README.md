# 🌿 The Vegan Pet Directory

> An open-source SEO-optimized directory of vegan & plant-based pet brands worldwide. Built with Astro + Tailwind. Curated by [VIRIDA](https://virida.pet).

**Strategy: classic SEO arbitrage** — rank for "vegan dog food", "plant-based pet treats", etc. → drive organic traffic → convert via featured VIRIDA placement.

---

## 🚀 Quick start

```powershell
# Install (already done)
npm install

# Dev server → http://localhost:4321
npm run dev

# Production build → ./dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🧱 Tech stack

| Layer       | Choice                                        | Why                                                   |
| ----------- | --------------------------------------------- | ----------------------------------------------------- |
| Framework   | **[Astro 6](https://astro.build)** (MIT)      | Zero JS by default → perfect Core Web Vitals          |
| Styling     | **Tailwind CSS v4** (Vite plugin)             | Fast, no config drift                                 |
| Content     | **Astro Content Collections** (Markdown/MDX)  | Each brand = 1 `.md` file, version-controlled in git  |
| SEO         | `@astrojs/sitemap` + custom OG/JSON-LD        | Auto sitemap, Schema.org `Brand` + `CollectionPage`   |
| RSS         | `@astrojs/rss`                                | Discovery & syndication                               |
| Hosting     | **Cloudflare Pages** (recommended) — free     | Static site, zero cost                                |

---

## 📁 Project structure

```
src/
├── content/
│   └── brands/                  ← 1 markdown file per brand
│       ├── virida.md            ← featured (you)
│       ├── wild-earth.md
│       ├── v-dog.md
│       └── ...
├── content.config.ts            ← schema for brand frontmatter
├── consts.ts                    ← site title, categories, countries
├── components/                  ← BaseHead, Header, Footer, BrandCard
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro              ← home (hero + featured + categories)
│   ├── about.astro
│   ├── brands/
│   │   ├── index.astro          ← all brands
│   │   └── [...id].astro        ← brand detail page
│   ├── categories/
│   │   ├── index.astro          ← all categories
│   │   └── [slug].astro         ← brands in one category
│   └── rss.xml.ts               ← RSS feed
└── styles/
    └── global.css               ← Tailwind + brand theme tokens

public/
├── favicon.svg                  ← VIRIDA leaf mark
└── robots.txt                   ← points to sitemap
```

---

## ➕ Adding a new brand

1. Create `src/content/brands/<slug>.md` (slug = URL of the brand page).
2. Copy the frontmatter shape from any existing brand. All fields with `?` are optional.
3. Write the body in Markdown — it becomes the brand description on the detail page.
4. Run `npm run dev` — the new page is auto-generated at `/brands/<slug>/` and added to the home, brand list, category, sitemap, and RSS feed.

**Schema fields** (see `src/content.config.ts` for the truth):

| Field             | Type                                                  | Required |
| ----------------- | ----------------------------------------------------- | -------- |
| `name`            | string                                                | ✓        |
| `tagline`         | string ≤120 chars                                     | ✓        |
| `website`         | URL                                                   | ✓        |
| `category`        | `food` \| `treats` \| `supplements` \| `dental` \| `toys` \| `grooming` | ✓ |
| `species`         | array of `dog` \| `cat` \| `small-pets`               | ✓        |
| `countries`       | ISO-3166 alpha-2 array, e.g. `['US','UK','TW']`       | ✓        |
| `certifications`  | string array                                          |          |
| `priceRange`      | `$` \| `$$` \| `$$$` \| `$$$$`                        |          |
| `featured`        | boolean — shown in featured grid                      |          |
| `foundedYear`     | number                                                |          |
| `headquarter`     | string                                                |          |
| `metaTitle`       | string ≤70 chars (overrides default `<title>`)        |          |
| `metaDescription` | string ≤160 chars (overrides default meta desc)       |          |
| `pubDate`         | date — when first added                               | ✓        |
| `updatedDate`     | date                                                  |          |
| `draft`           | boolean — set true to hide                            |          |

---

## 🚢 Deployment — Cloudflare Pages (recommended, free)

1. Push this repo to GitHub.
2. Go to [Cloudflare Pages](https://pages.cloudflare.com) → **Create project** → Connect GitHub.
3. Build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output dir**: `dist`
4. Add custom domain `directory.virida.pet` (DNS CNAME → `<project>.pages.dev`).
5. Update `site:` in `astro.config.mjs` to match your final domain.

**Alternatives**: Vercel, Netlify (both free for static), GitHub Pages.

---

## 🔍 SEO checklist (already wired up)

- ✅ Auto-generated `sitemap-index.xml`
- ✅ `robots.txt` pointing to sitemap
- ✅ Canonical URLs on every page
- ✅ Open Graph + Twitter Card tags
- ✅ Schema.org JSON-LD (`CollectionPage` on home, `Brand` on detail)
- ✅ Semantic HTML headings, breadcrumbs
- ✅ Prefetch on viewport for instant navigation
- ✅ Zero JS by default → Core Web Vitals win
- ✅ RSS feed at `/rss.xml`

**Add after launch**:
- Submit `https://directory.virida.pet/sitemap-index.xml` to Google Search Console + Bing Webmaster
- Verify domain ownership in both
- Build internal-link strategy: each brand page should link to 2-3 related brands (next iteration)

---

## 🎯 SEO arbitrage playbook for this directory

1. **Keyword harvest**: rank for long-tail searches like "vegan dog food UK", "plant-based dog chew Singapore", "is V-dog AAFCO certified".
2. **Comparison pages** (next milestone): "Wild Earth vs V-dog", "VIRIDA vs Bonza" — these convert highest.
3. **Country pages**: `/brands?country=SG` etc. — SEA traffic is your TAM.
4. **Backlinks**: list this directory on `awesome-vegan` GitHub repos, vegan subreddits, plant-based parenting Facebook groups. Each backlink = a vote.
5. **Featured placement**: VIRIDA stays `featured: true` — appears prominently on home and within its category. Other brands get fair listings (this is what makes the directory trustworthy → which is what makes it rank → which is what drives traffic → which converts on VIRIDA).

---

## 📜 License

Code: MIT (yours to do as you please).
Brand data: All trademarks & copyrights belong to their respective brand owners. Information collected from public sources.

Built by VIRIDA · Powered by [Astro](https://astro.build) ⭐
