import { indexableRecords, sections } from '@/src/lib/content';
import { site } from '@/src/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return ['core', ...sections].map((section) => ({ section: `${section}.xml` }));
}

export async function GET(_: Request, { params }: { params: Promise<{ section: string }> }) {
  const raw = (await params).section;
  const section = raw.replace(/\.xml$/, '');

  const core = ['', 'tentang', 'kontak', 'jadwal', ...sections];
  
  let xmlEntries = '';
  if (section === 'core') {
    xmlEntries = core
      .map((path) => {
        const url = path ? `${site.url}/${path}` : site.url;
        return `<url><loc>${url}</loc><lastmod>2026-09-01</lastmod></url>`;
      })
      .join('');
  } else {
    xmlEntries = indexableRecords
      .filter((r) => r.section === section && r.status === 'published')
      .map((r) => {
        const url = `${site.url}/${r.section}/${r.slug}`;
        const lastmod = r.updatedAt || r.publishedAt || '2026-09-01';
        return `<url><loc>${url}</loc><lastmod>${lastmod}</lastmod></url>`;
      })
      .join('');
  }

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlEntries}</urlset>`,
    {
      headers: {
        'content-type': 'application/xml; charset=utf-8',
        'cache-control': 'public, max-age=3600',
      },
    }
  );
}
