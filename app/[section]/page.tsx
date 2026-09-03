import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/src/components/SiteChrome';
import { InHouseCtaBox, ConsultationBanner } from '@/src/components/ConversionCta';
import { ProgramCard } from '@/src/components/ProgramCard';
import { TrainingPhotoStrip } from '@/src/components/TrainingPhotoStrip';
import { JsonLd } from '@/src/components/JsonLd';
import { sectionLabels, sectionRecords, sections, type Section } from '@/src/lib/content';
import { getProgramDisplayMeta } from '@/src/lib/program-meta-helper';
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
  const isCourseSection = sec === 'pelatihan' || sec === 'profesi' || sec === 'kompetensi';

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
        <div className="eyebrow-pill">
          <span className="eyebrow-dot" />
          <span>DIREKTORI RESMI K3</span>
        </div>
        <h1>{label}</h1>
        <p>
          Temukan informasi mendalam dan terverifikasi seputar {label.toLowerCase()} di Indonesia. Kami memisahkan pembinaan regulasi Kemnaker RI, skema kompetensi BNSP, dan panduan praktis agar Anda mendapatkan referensi yang tepat dan legal.
        </p>
      </header>

      {/* Prominent Flagship Banner for Pelatihan Hub */}
      {sec === 'pelatihan' && (
        <section className="section-container" style={{ padding: 0, marginBottom: '40px' }}>
          <div className="flagship-banner-box">
            <div className="flagship-banner-copy">
              <span className="program-tag program-tag-highlight">PROGRAM UNGGULAN NASIONAL</span>
              <h2 className="flagship-title">
                Pelatihan Ahli K3 Umum (Kemnaker RI 120 JP)
              </h2>
              <p className="flagship-lead">
                Program sertifikasi paling dicari di Indonesia untuk memenuhi persyaratan legalitas pengurus P2K3 perusahaan dan standar kualifikasi HSE industri nasional.
              </p>
              <div className="flagship-actions">
                <Link className="button button-accent button-large btn-glow" href="/pelatihan/ahli-k3-umum">
                  <span>Lihat Detail Ahli K3 Umum</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  className="button button-outline-light button-large"
                  href={waIntentUrl('jadwal', 'Ahli K3 Umum')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tanya Jadwal Batch Terdekat
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Catalog Grid (Rich ProgramCard for Courses, Clean RecordCard for References) */}
      {isCourseSection ? (
        <section className="program-grid-3" aria-label={label}>
          {items.map((item) => {
            const meta = getProgramDisplayMeta(item);
            return (
              <ProgramCard
                key={item.slug}
                title={item.title}
                tag={meta.issuer}
                desc={item.description}
                href={`/${item.section}/${item.slug}`}
                image={meta.image}
                issuer={meta.issuer}
                price={{ startingFrom: meta.price, label: 'Investasi:' }}
                meta={{ duration: meta.duration }}
              />
            );
          })}
        </section>
      ) : (
        <section className="record-grid" aria-label={label}>
          {items.map((item) => (
            <Link key={item.slug} href={`/${item.section}/${item.slug}`} className="record-card">
              <div className="record-card-header">
                <span className="record-card-tag">{sectionLabels[item.section]}</span>
                {item.status && <span className="record-status-pill">{item.status}</span>}
              </div>
              <h2 className="record-card-title">{item.title}</h2>
              <p className="record-card-desc">{item.description}</p>
              <span className="record-card-link">
                <span>Pelajari Selengkapnya</span>
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          ))}
        </section>
      )}

      {sec === 'pelatihan' && (
        <section style={{ marginTop: '48px' }}>
          <TrainingPhotoStrip
            title="Dokumentasi Pembinaan & Fasilitas Pelatihan K3"
            subtitle="Suasana otentik pembinaan kelas, praktik crane & forklift, evaluasi ujian tertulis, dan asesmen kelulusan peserta PT Kreasi Ultimate Berjaya."
          />
        </section>
      )}

      {sec === 'pelatihan' && (
        <section style={{ marginTop: '56px' }}>
          <InHouseCtaBox programName="Pelatihan K3 Perusahaan" />
        </section>
      )}

      <div style={{ marginTop: '48px' }}>
        <ConsultationBanner
          title={`Konsultasi Kebutuhan ${label}`}
          text="Tim ahli PT Kreasi Ultimate Berjaya siap mendampingi pemilihan program, screening berkas, dan estimasi biaya tanpa komitmen."
          ctaText="Konsultasi WhatsApp Sekarang"
          intent="jadwal"
          context={label}
        />
      </div>
    </main>
  );
}
