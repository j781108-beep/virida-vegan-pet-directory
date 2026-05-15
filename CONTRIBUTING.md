# Contributing to The Vegan Pet Directory

This directory is open-source and community-driven. The fastest way to help: **submit a brand we missed**.

## Adding a brand (5-minute PR)

1. Fork this repo.
2. Copy any existing file in `src/content/brands/` to a new file: `<brand-slug>.md`
3. Fill in the frontmatter (see schema in `src/content.config.ts`).
4. Write a short description in Markdown body (about + product range + caveats).
5. Open a pull request.

### Brand inclusion criteria

We'll accept a brand into the directory if:

- ✅ Products are 100% plant-based (no meat/fish/dairy/honey ingredients)
- ✅ Brand is currently active and shipping orders
- ✅ Public website with contact info
- ✅ Has at least one APAC distribution channel OR is globally referenced enough to be useful as a comparison benchmark

We'll reject:
- ❌ Brands that just *happen* to have one vegan SKU among 50 meat ones (unless it's a notable mainstream win, like Lily's Kitchen)
- ❌ Defunct brands or vapor-products
- ❌ Hard MLM / pyramid distribution

## Style notes for descriptions

- **Be honest about caveats**. The directory's value depends on trust. Always include a "Caveats" section.
- **No marketing fluff**. Skip "amazing", "revolutionary", "best-in-class".
- **Cite sources** when making nutritional claims. Link to vet papers or the brand's published lab results.

## Reporting incorrect info

Open an issue with:
- Brand name + URL
- What's wrong
- Source for the correction

## Code contributions

- The site is built with Astro 6 + Tailwind v4.
- Run `npm run build` before submitting; PRs that fail build won't be merged.
- We use `prettier` defaults — `.prettierrc` will be added if needed.

## Editorial independence

VIRIDA publishes this directory and is featured in it. **We accept no payment for placement, ranking, or improved descriptions.** If we ever do, we'll disclose it on every affected entry.

If you spot what looks like editorial bias against another brand or for VIRIDA, please open an issue. We're trying to build the most trusted resource in the category, and that depends on you holding us accountable.

— The VIRIDA team
