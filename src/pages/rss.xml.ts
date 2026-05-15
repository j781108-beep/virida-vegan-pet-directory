import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const brands = await getCollection('brands', ({ data }) => !data.draft);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: brands.map((b) => ({
      title: b.data.name,
      pubDate: b.data.pubDate,
      description: b.data.tagline,
      link: `/brands/${b.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
