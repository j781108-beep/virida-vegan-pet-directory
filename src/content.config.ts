import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Vegan pet brand entries.
 * Each brand lives as a single Markdown file in src/content/brands/{slug}.md
 *
 * To add a new brand: copy any existing file in src/content/brands/, change the
 * frontmatter, drop in a description (in Markdown), and the page is generated
 * automatically.
 */
const brands = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/brands' }),
  schema: ({ image }) =>
    z.object({
      // Identity
      name: z.string(),
      tagline: z.string().max(120),
      website: z.string().url(),

      // Logo / hero image — drop file in src/content/brands/_images/
      logo: image().optional(),
      heroImage: image().optional(),

      // Categorization for filters
      category: z.enum([
        'food',          // complete diet — kibble, wet, fresh
        'treats',        // chews, biscuits, training treats
        'supplements',   // multivitamins, joint, skin
        'dental',        // dental chews, sticks
        'toys',          // toys, accessories
        'grooming',      // shampoo, conditioner
      ]),
      species: z.array(z.enum(['dog', 'cat', 'small-pets'])).default(['dog']),
      countries: z.array(z.string().length(2)).describe('ISO 3166-1 alpha-2, e.g. ["US","UK","TW"]'),
      certifications: z.array(z.string()).default([]),    // ["PETA", "Vegan Society", "ISO22000"]
      priceRange: z.enum(['$', '$$', '$$$', '$$$$']).default('$$'),

      // Editorial
      featured: z.boolean().default(false),
      foundedYear: z.number().int().optional(),
      headquarter: z.string().optional(),

      // SEO
      metaTitle: z.string().max(70).optional(),
      metaDescription: z.string().max(160).optional(),

      // Lifecycle
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { brands };
