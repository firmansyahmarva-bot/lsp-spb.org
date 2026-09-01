import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/src/components/SiteChrome';
import { InHouseCtaBox, ConsultationBanner } from '@/src/components/ConversionCta';
import { JsonLd } from '@/src/components/JsonLd';
import { sectionLabels, sectionRecords, sections, type Section } from '@/src/lib/content';
import { site, waIntentUrl } from '@/src/lib/site';

export function generateStaticParams() {
  return sections.map((section) => ({ section }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  if (!sections.includes(section as Section)) return {};
  const label = sectionLabels[section as Section];

  return {
    title: `${label} K3 Indonesia | PT Kreasi Ultimate Berjaya`,
    description: `Daftar lengkap ${label.toLowerCase()} K3 Indonesia: panduan, regulasi, silabus materi, dan konsultasi pendaftaran resmi.`,
    alternates: { canonical: `/${section}` },
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  if (!sections.includes(section as Section)) notFound();

  const sec = section as Section;
  const label = sectionLabels[sec];
  const items = sectionRecords(sec);
  const canonicalUrl = `${site.url}/${sec}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: site.url },
      { '@type': 'ListItem', position: 2, name: label, item: canonicalUrl },
    ],
  };

  return (
    <main className="content-main">
      <JsonLd data={breadcrumbSchema} />

      <Breadcrumbs items={[{ label: 'Beranda', href: '/' }, { label }]} />

      <header className="hub-hero">
        <span className="eyebrow">DIREKTORI RESMI K3</span>
        <h1>{label}</h1>
        <p>
          Temukan informasi mendalam dan terverifikasi seputar {label.toLowerCase()} di Indonesia. Kami memisahkan pembinaan regulasi Kemnaker RI, skema kompetensi BNSP, dan panduan praktis agar Anda mendapatkan referensi yang tepat dan legal.
        </p>
      </header>

      {/* Prominent Banner for Pelatihan Hub */}
      {sec === 'pelatihan' && (
        <div style={{ marginBottom: '36px' }}>
          <div className="program-card-prominent" style={{ background: 'var(--cream)', borderColor: 'var(--green)', padding: '32px' }}>
            <span className="program-tag" style={{ background: 'var(--green)', color: '#ffffff' }}>PROGRAM UTAMA</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', margin: '8px 0 12px' }}>
              Pelatihan Ahli K3 Umum (Kemnaker RI 120 JP)
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '20px' }}>
              Program sertifikasi paling dicari di Indonesia untuk memenuhi persyaratan legalitas pengurus P2K3 perusahaan dan standar kualifikasi HSE industri nasional.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link className="button button-primary" href="/pelatihan/ahli-k3-umum">
                Lihat Detail Ahli K3 Umum →
              </Link>
              <a
                className="button button-secondary"
                href={waIntentUrl('jadwal', 'Ahli K3 Umum')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tanya Jadwal Batch Terdekat
              </a>
            </div>
          </div>
        </div>
      )}

      <section className="record-grid" aria-label={label}>
        {items.map((item) => (
          <Link key={item.slug} href={`/${item.section}/${item.slug}`} className="record-card">
            <small>{sectionLabels[item.section]}</small>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <span>Pelajari Selengkapnya →</span>
          </Link>
        ))}
      </section>

      {sec === 'pelatihan' && (
        <section style={{ marginTop: '48px' }}>
          <InHouseCtaBox programName="Pelatihan K3 Perusahaan" />
        </section>
      )}

      <ConsultationBanner
        title={`Konsultasi Kebutuhan ${label}`}
        text="Tim ahli PT Kreasi Ultimate Berjaya siap mendampingi pemilihan program, screening berkas, dan estimasi biaya tanpa komitmen."
        ctaText="Konsultasi WhatsApp Sekarang"
        intent="jadwal"
        context={label}
      />
    </main>
  );
}
