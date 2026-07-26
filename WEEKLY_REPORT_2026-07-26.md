# Weekly Ritual Report — 2026-07-26 (Week 11)

> This report covers the ritual run for 2026-07-26. Weeks 2–10 show no committed weekly reports; the Week 1 report flagged a PAT push failure. This run confirms the PAT issue is now resolved — push and PR creation are working.

---

## 🩺 Health check

| Metric | Value |
|---|---|
| Build result | ✅ Completed in 2.84s |
| Pages built | **36** (was 35 last committed week) |
| Brand count | **18** (was 17 at Week 1) |
| Git branch | `weekly/2026-07-26` ✅ |
| Schema errors | None |
| Last commit on main | `docs(weekly): week 1 ritual report - V-Planet added` (2026-05-17) |

⚠️ **No weekly pushes for ~10 weeks.** The Week 1 report flagged PAT expiry as an open issue. The PAT provided in today's scheduled prompt is working correctly. If this report reaches `main` via PR, the agent is now healthy.

---

## 📊 Data review

**No analytics MCP available.** Founder should manually pull:

### Plausible (https://plausible.io/directory.virida.pet)
- [ ] Unique visitors this week vs prior week
- [ ] Top 5 pages by sessions
- [ ] Top referrers (any SEO traction from Google?)
- [ ] Outbound clicks to virida.pet (conversion proxy — the key KPI)

### Google Search Console (https://search.google.com/search-console)
- [ ] 7-day impressions + clicks
- [ ] Queries ranking 11–20 (low-hanging fruit for optimisation)
- [ ] Any "Coverage" errors flagged since sitemap submission?

**Context for founder:** Site launched ~10 weeks ago. By now you should be seeing first organic impressions from long-tail queries. If impressions are still zero, check that the sitemap was confirmed as submitted in Search Console.

---

## 🆕 Brand added this week: Open Farm

**Strategic rationale:**

Open Farm fills the most important gap in the current directory: **a B Corp-certified, AAFCO-complete vegan dog food with confirmed retail presence in Hong Kong and Singapore** — not via forwarders, but through established regional retailers (Vetopia HK, Whiskers N Paws HK, Pet Lovers Centre SG, Amazon.sg).

- Canadian brand founded 2014, highest-scoring B Corp pet food company in North America (102.8 score)
- Kind Earth Plant Recipe: fava beans, peas, sweet potato, ancient grains — AAFCO-complete for adult dogs
- Also available in Australia via official openfarmpet.com.au + Pet Circle
- Priority brand listed in FOUNDER_NOTES.md — now checked off

**File:** `src/content/brands/open-farm.md`
**Live URL (post-deploy):** https://directory.virida.pet/brands/open-farm/

---

## 🔮 Updated APAC coverage map

| Market | Brand count | Δ vs Week 1 |
|---|---|---|
| 🇹🇼 Taiwan | 1 | unchanged |
| 🇸🇬 Singapore | **7** | **+1** (Open Farm added) |
| 🇲🇾 Malaysia | 1 | unchanged |
| 🇭🇰 Hong Kong | **7** | **+1** (Open Farm added) |
| 🇯🇵 Japan | 3 | unchanged |
| 🇰🇷 South Korea | 1 | unchanged |
| 🇹🇭 Thailand | 1 | unchanged |
| 🇦🇺 Australia | 3+ | (Bonza + V-Planet + Open Farm confirmed) |

**Target from FOUNDER_NOTES:** ≥ 35 brands by Day 30. Current count is 18 — well below target if we're at Week 11. Content velocity needs to increase (see next week focus).

---

## ⚠️ Open issues

1. **10-week reporting gap.** The PAT issue from Week 1 blocked all subsequent weekly pushes. Today's run works — please confirm the PR is accessible and merge if the brand looks good.

2. **Taiwan brand drought.** VIRIDA is still the only Taiwan-distributed brand. FOUNDER_NOTES flagged this at Week 1. Suggested angle: iHerb-accessible brands (Halo, Yarrah) could be noted as "ships to TW via iHerb" to expand TW count without adding redundant brands.

3. **Malaysia under-served.** Only Beethoven & Co. No progress since Week 1. Worth a dedicated brand search next week.

4. **Brand velocity below target.** At Day ~70 (Week 11), target was 35 brands. Actual: 18. Gap: 17 brands. To close by Day 90: need ~2 brands/week minimum.

5. **Unverified FOUNDER_NOTES brands.** Three brands mentioned as priorities cannot be confirmed:
   - Pawlosophy (HK) — no evidence this is a vegan pet food brand
   - Ottimo (UK) — not found in any search
   - Wagamamma — not found in any search
   These may be brand name typos or aspirational targets. Suggest founder clarifies or removes from the list.

---

## 🎯 Suggested focus for next 2 weeks

1. **Data check first:** Pull Plausible + Search Console. If impressions > 0, note which queries are surfacing — they'll guide which brands to add next.

2. **Malaysia brand:** Prioritise finding a local MY or SEA brand for Beethoven & Co to not be the only MY entry. If no suitable brand exists, add a UK brand that ships to MY via international freight (Benevo ships internationally; confirm MY access).

3. **Vegan cat food angle:** Wild Earth launched "Unicorn Pate" (vegan cat wet food) in August 2024 and has APAC expansion plans. Update the existing Wild Earth entry to mention this cat line, or add a separate entry if the cat food line warrants it (distinct product line, different species audience).

4. **Buying guides:** FOUNDER_NOTES flagged 3 guides to write. At Week 11 with only 2 guides live, this is overdue. Suggest: "Is vegan pet food safe? The science" — high volume, low competition.

---

## Status signal

🟡 **NEEDS ATTENTION**

**Reasoning:** Site is technically healthy and build passes cleanly. But brand count (18 vs 35-brand target) and the 10-week push gap both need founder attention. The weekly ritual is now unblocked — merge this PR to restore momentum.
