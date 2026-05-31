# Weekly Ritual Report — 2026-05-31 (Week 2)

## 🩺 Health check

| Check | Result |
|---|---|
| `npm run build` | ✅ PASS — 36 pages built in ~3.6s |
| Build errors | None |
| Brand count | 18 brands (was 17 last week) |
| Last commit | `feat(brand): add V-Planet` (Week 1, 2026-05-17) |
| Sitemap | Auto-generated ✅ |

One build bug caught and fixed this session: unquoted YAML value in `metaDescription` contained a colon-space sequence (`Kind Earth: AAFCO-...`), which js-yaml parsed as a nested key. Quoted the value to resolve. No data loss.

---

## 📊 Data review — founder action needed

You need to manually copy these numbers from your dashboards and paste them into next week's report or share them with the agent:

**Plausible** → https://plausible.io/directory.virida.pet

- [ ] Unique visitors (last 7 days)
- [ ] Top 3 pages by visits
- [ ] Top referrer sources
- [ ] Outbound click count to virida.pet (conversion proxy)

**Google Search Console** → https://search.google.com/search-console  
Performance tab → Last 7 days:

- [ ] Total impressions
- [ ] Total clicks
- [ ] Queries ranked 11–20 (long-tail opportunities)
- [ ] Any queries with impressions but 0 clicks (CTA optimisation candidates)

Without this data, the agent cannot assess SEO trajectory. Even 2–3 numbers goes a long way.

---

## 🆕 Brand added this week: Open Farm (Kind Earth)

**File**: `src/content/brands/open-farm-kind-earth.md`

**Why this brand:**
- Explicitly on the FOUNDER_NOTES priority list
- B Corp-certified, Toronto-founded (2014), Canada's EY Entrepreneur of the Year 2025 — credible anchor brand
- APAC distribution is the widest of any plant-based dog food currently in the directory: **SG, HK, TW, MY, KR, PH, VN**
- Available at **Pet Lovers Centre** Singapore (major retail chain) — readers can buy it today

**Editorial note:** Open Farm's main catalog is not vegan. The Kind Earth plant-based line is a dedicated multi-SKU sub-range (kibble + pâté). This follows the same pattern as existing entries Halo Holistic (Vegan Garden) and Lily's Kitchen (Vegan Range). The Caveats section explicitly discloses that only Kind Earth is plant-based.

---

## 🔮 Updated APAC coverage map

| Market | Brands (after this week) | Change |
|---|---|---|
| 🇸🇬 Singapore | VIRIDA, Beethoven & Co, Ami Cat, Beco Pets, Halo, V-Planet, **Open Farm** | +1 |
| 🇭🇰 Hong Kong | Ami Cat, Beco Pets, Halo, Lily's Kitchen, Yarrah, V-Planet, **Open Farm** | +1 |
| 🇹🇼 Taiwan | VIRIDA, **Open Farm** | +1 |
| 🇲🇾 Malaysia | Beethoven & Co, **Open Farm** | +1 |
| 🇯🇵 Japan | Dr. Harvey's, Halo, V-Planet | — |
| 🇰🇷 Korea | V-Planet, **Open Farm** | +1 |
| 🇵🇭 Philippines | **Open Farm** | +1 (first brand!) |
| 🇻🇳 Vietnam | **Open Farm** | +1 (first brand!) |
| 🇦🇺 Australia | Benevo, Beco Pets, Bonza, V-Planet | — |

**Cat food coverage**: Ami Cat (SG/HK), Benevo (dog+cat, AU focus) — still thin. No APAC-stocked vegan cat brand specifically.

**Biggest gaps remaining**: Japan (no SG/MY/TW-adjacent brand), cat food, TW-only brands.

---

## ⚠️ Open issues

### 🔴 Brand velocity — behind target

- 90-day goal (by 2026-06-14): **35 brands**
- Current: **18 brands**
- Gap: **17 brands in 14 days**
- Agent adds ~1/week; founder needs to either add manually or accept a revised target

**Recommendation**: revise target to 25 brands by day 30, 35 by day 60. One high-quality brand per week is more defensible than bulk-adding thin entries.

### 🟡 Cat food gap

- Only 2 cat food entries (Ami Cat, Benevo) out of 18 total
- Vegan cat food is high-intent, low-competition in APAC search
- Searched for Pawlosophy (HK) and Ottos (TW) this week — neither returned verifiable results
- Wild Earth launched vegan cat food in August 2024 — **updating the existing Wild Earth entry** to include cat is a quick win for next week

### 🟡 Country pages not yet added

- FOUNDER_NOTES called for Japan, Australia, Thailand country pages by day 30
- These are still not created
- Japan + Australia are the highest-traffic APAC markets for English-language vegan pet queries

### ⚠️ Yarrah species field

- Current entry has `species: ['dog']` but Yarrah sells cat food too
- Minor factual correction — can be fixed in 2 minutes

---

## 🎯 Suggested focus for next week

1. **Update Wild Earth entry** to add `'cat'` to species and document the August 2024 cat food launch — quick win for cat food SEO without adding a new brand
2. **Search for Omni (UK)** as the next new brand — vet-founded, Dragon's Den-featured, strong brand story. Confirm whether they ship to APAC before committing; if yes, add it
3. **Fix Yarrah species field** (`'dog'` → `['dog', 'cat']`) — 2-minute factual correction

---

## Status signal

🟡 **NEEDS ATTENTION** — Brand velocity is behind the 35-by-day-30 target. SEO fundamentals are solid but the content pipeline needs acceleration. Recommend founder review brand target timeline and decide: push pace or extend deadline.
