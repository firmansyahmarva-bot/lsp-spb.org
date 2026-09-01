import type { Metadata } from 'next';
import { Manrope, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/src/components/SiteChrome';
import { StickyCta } from '@/src/components/StickyCta';
import { JsonLd } from '@/src/components/JsonLd';
import { site } from '@/src/lib/site';

const manrope = Manrope({ variable: '--font-sans', subsets: ['latin'] });
const serif = Source_Serif_4({ variable: '--font-serif', subsets: ['latin'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Pelatihan Ahli K3 Umum & Sertifikasi K3 Indonesia | PT Kreasi Ultimate Berjaya',
    template: '%s | ahli-k3.co.id',
  },
  description: site.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pelatihan Ahli K3 Umum & Sertifikasi K3 Indonesia | PT Kreasi Ultimate Berjaya',
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'id_ID',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Pelatihan Ahli K3 Umum — PT Kreasi Ultimate Berjaya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pelatihan Ahli K3 Umum & Sertifikasi K3 Indonesia',
    description: site.description,
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    alternateName: [site.brandName, 'Ahli K3 Indonesia'],
    url: site.url,
    email: site.email,
    telephone: site.phone,
    sameAs: [site.instagram],
    address: site.locations.map((loc) => ({
      '@type': 'PostalAddress',
      streetAddress: loc.address,
      addressLocality: loc.city,
      addressCountry: 'ID',
    })),
  };

  return (
    <html lang="id">
      <body className={`${manrope.variable} ${serif.variable}`}>
        <JsonLd data={orgSchema} />
        <Header />
        {children}
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
