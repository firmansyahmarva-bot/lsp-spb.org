import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/src/components/SiteChrome';
import { TrainingPhotoStrip } from '@/src/components/TrainingPhotoStrip';
import { StickyCta } from '@/src/components/StickyCta';
import { JsonLd } from '@/src/components/JsonLd';
import { site } from '@/src/lib/site';

const fontSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Pelatihan K3 Indonesia & Sertifikasi Ahli K3 | PT Kreasi Ultimate Berjaya',
    template: '%s | pelatihan-k3.co.id',
  },
  description: site.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pelatihan K3 Indonesia & Sertifikasi Ahli K3 | PT Kreasi Ultimate Berjaya',
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'id_ID',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Pelatihan K3 Indonesia — PT Kreasi Ultimate Berjaya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pelatihan K3 Indonesia & Sertifikasi Ahli K3',
    description: site.description,
    images: ['/og.png'],
  },
  verification: {
    google: 'ono1JSVb1RJdV9FbS81V71QAe7DpPujV0xw9PfKWsGo',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
    alternateName: [site.brandName, 'Pelatihan K3 Indonesia', 'Pusat Pelatihan K3'],
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
    <html lang="id" className="scroll-smooth">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-emerald-700 focus:font-semibold">
          Lewati ke konten utama
        </a>
        <JsonLd data={orgSchema} />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <TrainingPhotoStrip />
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
