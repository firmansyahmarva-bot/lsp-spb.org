import type { Metadata } from 'next';
import { Manrope, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/src/components/SiteChrome';
import { JsonLd } from '@/src/components/JsonLd';
import { site } from '@/src/lib/site';

const manrope = Manrope({ variable: '--font-sans', subsets: ['latin'] });
const serif = Source_Serif_4({ variable: '--font-serif', subsets: ['latin'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://kreasiultimateberjaya.id'),
  title: { default: 'Pelatihan K3 Indonesia | Kreasi Ultimate Berjaya', template: '%s | Kreasi Ultimate Berjaya' },
  description: 'Informasi pelatihan K3, jalur kompetensi, profesi, dan regulasi keselamatan kerja untuk individu dan perusahaan.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Pelatihan K3 Indonesia | Kreasi Ultimate Berjaya', description: 'Pusat informasi pelatihan K3, kompetensi, profesi, dan regulasi keselamatan kerja Indonesia.', url: '/', siteName: 'Kreasi Ultimate Berjaya', locale: 'id_ID', type: 'website', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Pelatihan K3 Indonesia — Kreasi Ultimate Berjaya' }] },
  twitter: { card: 'summary_large_image', title: 'Pelatihan K3 Indonesia', description: 'Kreasi Ultimate Berjaya', images: ['/og.png'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${manrope.variable} ${serif.variable}`}><JsonLd data={{'@context':'https://schema.org','@type':'Organization',name:site.name,url:site.url,email:site.email,telephone:site.phone,sameAs:[site.instagram],address:site.locations.map(l=>({'@type':'PostalAddress',streetAddress:l.address,addressCountry:'ID'}))}}/><Header/>{children}<Footer/></body>
    </html>
  );
}
