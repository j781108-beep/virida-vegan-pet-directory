// Single source of truth for site-wide branding & SEO.
export const SITE = {
  title: 'The Vegan Pet Directory',
  tagline: 'Asia-Pacific edition',
  description:
    'The leading directory of vegan and plant-based pet brands available in Asia-Pacific. Compare 15+ vetted brands shipping to Taiwan, Singapore, Malaysia, Hong Kong, and beyond. Curated by VIRIDA.',
  url: 'https://directory.virida.pet',
  defaultLocale: 'en',
  twitter: '@viridapet',
  ogImage: '/og-default.svg',
  publisher: 'VIRIDA',
} as const;

// Priority APAC markets — used for country landing pages and ranking
export const PRIORITY_MARKETS = [
  { code: 'TW', name: 'Taiwan',     emoji: '🇹🇼', currency: 'NTD', shopee: true,  primary: true },
  { code: 'SG', name: 'Singapore',  emoji: '🇸🇬', currency: 'SGD', shopee: true,  primary: true },
  { code: 'MY', name: 'Malaysia',   emoji: '🇲🇾', currency: 'MYR', shopee: true,  primary: false },
  { code: 'HK', name: 'Hong Kong',  emoji: '🇭🇰', currency: 'HKD', shopee: false, primary: false },
] as const;

export const CATEGORIES = [
  { slug: 'food',        label: 'Complete Food',  emoji: '🥗' },
  { slug: 'treats',      label: 'Treats & Chews', emoji: '🦴' },
  { slug: 'supplements', label: 'Supplements',    emoji: '💊' },
  { slug: 'dental',      label: 'Dental Care',    emoji: '🦷' },
  { slug: 'toys',        label: 'Toys',           emoji: '🧸' },
  { slug: 'grooming',    label: 'Grooming',       emoji: '🧴' },
] as const;

export const COUNTRIES: Record<string, string> = {
  US: 'United States',
  UK: 'United Kingdom',
  CA: 'Canada',
  AU: 'Australia',
  DE: 'Germany',
  NL: 'Netherlands',
  TW: 'Taiwan',
  SG: 'Singapore',
  MY: 'Malaysia',
  HK: 'Hong Kong',
  TH: 'Thailand',
  PH: 'Philippines',
  JP: 'Japan',
  CN: 'China',
};
