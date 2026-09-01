import { indexableRecords, sections } from '@/src/lib/content';
import { site } from '@/src/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return ['core', ...sections].map((section) => ({ section: `${section}.xml` }));
}

export async function GET(_: Request, { params }: { params: Promise<{ section: string }> }) {
  const raw = (await params).section;
  const section = raw.replace(/\.xml$/, '');
  const currentDate = new Date().toISOString().split('T')[0];

  const core = ['', 'tentang', 'kontak', 'jadwal', ...sections];
  const urls =
    section === 'core'
      ? core.map((path) => (path ? `${site.url}/${path}` : site.url))
      : indexableRecords
          .filter((r) => r.section === section)
          .map((r) => `${site.url}/${r.section}/${r.slug}`);

  const body = urls
    .map((url) => `<url><loc>${url}</loc><lastmod>${currentDate}</lastmod></url>`)
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`,
    {
      headers: {
        'content-type': 'application/xml; charset=utf-8',
        'cache-control': 'public, max-age=3600',
      },
    }
  );
}
