import { sections } from '@/src/lib/content';
import { site } from '@/src/lib/site';

export async function GET() {
  const currentDate = new Date().toISOString().split('T')[0];
  const maps = ['core', ...sections]
    .map(
      (s) =>
        `<sitemap><loc>${site.url}/sitemaps/${s}.xml</loc><lastmod>${currentDate}</lastmod></sitemap>`
    )
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${maps}</sitemapindex>`,
    {
      headers: {
        'content-type': 'application/xml; charset=utf-8',
        'cache-control': 'public, max-age=3600',
      },
    }
  );
}
