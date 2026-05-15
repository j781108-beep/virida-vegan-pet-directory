# Founder Notes — Vegan Pet Directory (APAC)

*Written 2026-05-15 by the founder. This file is the strategy doc behind the directory.*

---

## TL;DR positioning

**The Vegan Pet Directory is the only English-language vegan pet brand authority focused on Asia-Pacific.**

US/UK directories already exist. APAC pet parents are still googling Reddit threads. We own the gap.

---

## The strategic hypothesis

1. **Vegan pet ownership is rising fastest in SEA + HK + JP** (2024-2026 trend lines from Google Trends).
2. **Supply is fragmented**: brands are mostly US/UK, distribution is unclear, prices are opaque.
3. **No central English resource** maps "which vegan pet brands actually ship to my country in APAC".
4. → **A directory that fills this gap will rank fast** because there is no incumbent.
5. → **VIRIDA, the publisher, is the only Taiwan-founded vegan pet brand**, so the directory naturally features us prominently without seeming biased.

If hypothesis 4 holds, organic search becomes our cheapest acquisition channel — by far cheaper than Shopee ads or KOL spend.

---

## What's built (v1.0, 2026-05-15)

| Asset | Count | URL pattern |
|---|---|---|
| Brand profiles | 15 | `/brands/<slug>/` |
| Country landing pages | 4 | `/where-to-buy/<country>/` |
| Category pages | 6 | `/categories/<slug>/` |
| Buying guides | 2 | `/guides/<slug>/` |
| Static support pages | 4 | `/`, `/about`, `/brands`, `/categories`, `/guides`, `/where-to-buy` |
| **Total pages** | **34** | (verified from `npm run build` output) |
| Sitemap auto-generated | ✅ | `/sitemap-index.xml` |
| RSS feed | ✅ | `/rss.xml` |
| OG share image | ✅ SVG | `/og-default.svg` |
| Schema.org JSON-LD | ✅ | `Brand`, `CollectionPage`, `Article`, `ItemList` |

**Build size**: ~190 KB total. Pages average 6-12 KB. Zero JS by default → Core Web Vitals will hit green on launch.

**Tech stack** (all GitHub open-source, MIT-licensed):
- Astro 6 — static site generator
- Tailwind CSS v4 — styling
- @astrojs/sitemap, @astrojs/rss, @astrojs/mdx — SEO essentials
- Plausible analytics — privacy-friendly, GDPR/PDPA safe (config-ready)

---

## 90-day growth roadmap

### Days 1-7 — Launch
- [ ] Push repo to GitHub (private or public — public helps SEO via cross-linking)
- [ ] Connect to Cloudflare Pages → directory.virida.pet
- [ ] Set DNS CNAME (DNS provider: wherever virida.pet is)
- [ ] Submit sitemap to **Google Search Console** + **Bing Webmaster Tools**
- [ ] Sign up for Plausible (or self-host on a $5 droplet) → set `PUBLIC_PLAUSIBLE_DOMAIN`
- [ ] Cross-link from virida.pet main site footer ("📚 Resource: Vegan Pet Directory")

### Days 8-30 — Content velocity
- [ ] Add **5 brands per week** (target: 35+ brands by day 30)
- [ ] Priority brands to add next:
  - Vegcat (US, vegan cat treats)
  - Ottimo (UK, organic vegan)
  - Just Food For Dogs vegan recipe
  - Ottos (TW local — research)
  - Pawlosophy (HK local — research)
  - Open Farm vegan
  - Wagamamma
  - Vivopets
- [ ] Add **3 more buying guides**:
  - "Is vegan pet food safe? The science" (high search volume, low competition)
  - "Pet supplement myths debunked" (commercial intent)
  - "Vegan cat food: a vet's perspective" (controversial = link bait)
- [ ] Add **3 country pages**: Japan, Australia, Thailand

### Days 31-60 — Backlinks
- [ ] Submit to **awesome-vegan** GitHub repo (PR)
- [ ] Submit to **awesome-pet-care** if exists, create one if not (own a category)
- [ ] Reach out to 20 vegan pet bloggers/YouTubers — offer free brand inclusion review
- [ ] Get listed on **r/VeganPets** sidebar (reach out to mod)
- [ ] Get listed on Veganuary partners
- [ ] Create comparison pages targeting bottom-funnel queries:
  - "Wild Earth vs V-dog"
  - "VIRIDA vs Wild Earth chews"
  - "Best vegan dog food UK"
  - "Best vegan dog food Singapore"

### Days 61-90 — Conversion optimization
- [ ] Install **conversion tracking** for clicks to virida.pet (Plausible custom events)
- [ ] A/B test the in-content CTA blocks (which copy converts better?)
- [ ] Add **email capture** ("Get the monthly vegan pet brand update") → Mailchimp/Buttondown
- [ ] Add **price comparison data** to country pages (manually for top 5 brands per market)
- [ ] Begin **localization**: Chinese (zh-TW) version of top 10 pages — huge SEO unlock for TW market

---

## SEO target keywords (3-month focus)

Primary head terms (high volume, hard):
- "vegan dog food"
- "plant-based pet food"
- "vegan dog treats"

Secondary (medium volume, medium competition):
- "vegan dog food Singapore"
- "vegan pet food Hong Kong"
- "is vegan dog food safe"
- "best vegan dog chew"

Long-tail (low volume, easy wins, high intent):
- "Wild Earth vs V-dog"
- "where to buy Benevo Singapore"
- "vegan dog food Taiwan"
- "Ami Cat Hong Kong"
- "10-in-1 vegan dog supplement"  ← VIRIDA branded query

---

## Editorial integrity rules (non-negotiable)

1. **No paid placements**, ever. If we ever do, every affected entry shows a "✱ Sponsored placement" badge.
2. **VIRIDA gets featured status, but every brand gets fair coverage.** The directory's SEO value depends on user trust. If users sense bias, traffic dies.
3. **Cite sources for nutritional claims.** Vet papers > brand marketing.
4. **Honest caveats on every brand** (including VIRIDA). Trust compounds.
5. **Public corrections.** If we get something wrong, we fix it visibly with an "Updated YYYY-MM-DD" note.

---

## Distribution playbook

The directory only matters if people find it. Top channels by ROI:

1. **SEO** (cheapest long-term, slowest to ramp) — months 3-12
2. **Reddit/Facebook vegan pet groups** (free, fast, but limited reach) — week 1
3. **Cross-link from virida.pet** (frees, instant) — day 1
4. **Email outreach to plant-based parenting blogs** for backlinks — month 2
5. **Reddit r/VeganPets sidebar listing** — month 2
6. **YouTube/TikTok mentions from vegan pet creators** — month 3+ (relationship-driven)

---

## What I will NOT do

- ❌ Run paid ads to the directory itself (low LTV per visitor — paid acquisition kills unit economics)
- ❌ Add a forum, comments, or UGC features (spam vector, no SEO benefit at this stage)
- ❌ Add user accounts (no use case justifies the engineering)
- ❌ Build on a CMS like WordPress (slow, plugin debt, security debt — the markdown approach is much better)

---

## Success metrics (90-day targets)

| Metric | Target |
|---|---|
| Indexed pages in Google | ≥ 30 |
| Organic visits / month | ≥ 1,000 |
| Brands listed | ≥ 35 |
| Backlinks (Ahrefs) | ≥ 10 referring domains |
| Click-throughs to virida.pet | ≥ 50/month |
| Email subscribers | ≥ 100 |

If we hit these, we have proof of concept. From there, we scale content velocity 2-3× and aim for 10K visits/month by month 12.

---

*Updated: 2026-05-15. Next review: 2026-08-15 (90-day mark).*
