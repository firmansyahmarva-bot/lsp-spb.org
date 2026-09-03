import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/src/components/SiteChrome';
import { ConsultationBanner } from '@/src/components/ConversionCta';
import { HubSearchFilter } from '@/src/components/HubSearchFilter';
import { RelatedProgramsSection } from '@/src/components/RelatedProgramsSection';
import { FaqAccordion } from '@/src/components/FaqAccordion';
import { ProfesiPillarContent } from '@/src/components/ProfesiPillarContent';
import { KompetensiHubContent } from '@/src/components/KompetensiHubContent';
import { IndustriHubContent } from '@/src/components/IndustriHubContent';
import { PelatihanHubContent } from '@/src/components/PelatihanHubContent';
import { PanduanHubContent } from '@/src/components/PanduanHubContent';
import { JsonLd } from '@/src/components/JsonLd';
import { sectionLabels, sectionRecords, sections, type Section } from '@/src/lib/content';
import { sectionLegalInfo, sectionFaqs } from '@/src/lib/section-data';
import { site } from '@/src/lib/site';

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

  if (section === 'pelatihan') {
    return {
      title: 'Pelatihan K3: Pilih Program untuk Individu dan Perusahaan',
      description:
        'Temukan program Pelatihan K3 berdasarkan kebutuhan, jalur sertifikasi dan bidang kerja. Konsultasikan jadwal, syarat, biaya atau kelas in-house.',
      alternates: { canonical: '/pelatihan' },
    };
  }

  if (section === 'profesi') {
    return {
      title: 'Profesi K3 Indonesia: Panduan Peran, Jenjang Karir, Syarat & Sertifikasi',
      description: 'Panduan komprehensif profesi K3 di Indonesia: perbedaan jabatan vs penunjukan Kemnaker, 9 bidang spesialisasi, jenjang karir, dan jalur sertifikasi resmi.',
      alternates: { canonical: '/profesi' },
    };
  }

  if (section === 'kompetensi') {
    return {
      title: 'Kompetensi K3: Jenis Keahlian dan Keterampilan HSE',
      description:
        'Panduan kompetensi K3 untuk memahami keahlian teknis, operasional dan manajerial HSE serta memilih kemampuan yang relevan dengan pekerjaan.',
      alternates: { canonical: '/kompetensi' },
    };
  }

  if (section === 'industri') {
    return {
      title: 'K3 Berdasarkan Industri: Risiko dan Program Pelatihan',
      description:
        'Temukan kebutuhan K3 berdasarkan sektor industri, risiko utama, dan program pelatihan yang relevan untuk perusahaan atau tim operasional.',
      alternates: { canonical: '/industri' },
    };
  }

  if (section === 'panduan') {
    return {
      title: 'Panduan K3: Apa Itu K3 dan Cara Menerapkannya',
      description:
        'Pelajari apa itu K3, tujuan dan penerapannya di tempat kerja. Temukan panduan pelatihan, syarat, biaya, dokumen dan prosedur K3.',
      alternates: { canonical: '/panduan' },
    };
  }

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
  const legal = sectionLegalInfo[sec];
  const faqs = sectionFaqs[sec] || [];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: site.url },
      { '@type': 'ListItem', position: 2, name: label, item: canonicalUrl },
    ],
  };

  const faqSchema =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        }
      : null;

  if (sec === 'pelatihan') {
    const collectionSchema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Pelatihan K3',
      url: canonicalUrl,
      description:
        'Temukan program Pelatihan K3 berdasarkan kebutuhan, jalur sertifikasi dan bidang kerja. Konsultasikan jadwal, syarat, biaya atau kelas in-house.',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: items.slice(0, 30).map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.title,
          url: `${site.url}/pelatihan/${item.slug}`,
        })),
      },
    };

    return (
      <main className="content-main">
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={collectionSchema} />
        {faqSchema && <JsonLd data={faqSchema} />}

        <Breadcrumbs items={[{ label: 'Beranda', href: '/' }, { label: 'Pelatihan K3' }]} />

        <PelatihanHubContent items={items} />
      </main>
    );
  }

  if (sec === 'profesi') {
    const collectionSchema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Profesi K3 Indonesia',
      url: canonicalUrl,
      description:
        'Panduan lengkap dan direktori 200 jabatan profesi K3 di Indonesia: peran, jenjang karir, persyaratan regulasi, dan sertifikasi resmi.',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: items.slice(0, 30).map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.title,
          url: `${site.url}/profesi/${item.slug}`,
        })),
      },
    };

    return (
      <main className="content-main">
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={collectionSchema} />
        {faqSchema && <JsonLd data={faqSchema} />}

        <Breadcrumbs items={[{ label: 'Beranda', href: '/' }, { label: 'Profesi K3' }]} />

        <ProfesiPillarContent items={items} />
      </main>
    );
  }

  if (sec === 'kompetensi') {
    const collectionSchema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Kompetensi K3',
      url: canonicalUrl,
      description:
        'Panduan kompetensi K3 untuk memahami keahlian teknis, operasional dan manajerial HSE serta memilih kemampuan yang relevan dengan pekerjaan.',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: items.slice(0, 30).map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.title,
          url: `${site.url}/kompetensi/${item.slug}`,
        })),
      },
    };

    return (
      <main className="content-main">
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={collectionSchema} />
        {faqSchema && <JsonLd data={faqSchema} />}

        <Breadcrumbs items={[{ label: 'Beranda', href: '/' }, { label: 'Kompetensi K3' }]} />

        <KompetensiHubContent items={items} />
      </main>
    );
  }

  if (sec === 'industri') {
    const collectionSchema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'K3 Berdasarkan Industri',
      url: canonicalUrl,
      description:
        'Temukan kebutuhan K3 berdasarkan sektor industri, risiko utama, dan program pelatihan yang relevan untuk perusahaan atau tim operasional.',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: items.slice(0, 30).map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.title,
          url: `${site.url}/industri/${item.slug}`,
        })),
      },
    };

    return (
      <main className="content-main">
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={collectionSchema} />
        {faqSchema && <JsonLd data={faqSchema} />}

        <Breadcrumbs items={[{ label: 'Beranda', href: '/' }, { label: 'Industri K3' }]} />

        <IndustriHubContent items={items} />
      </main>
    );
  }

  if (sec === 'panduan') {
    const collectionSchema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Panduan K3',
      url: canonicalUrl,
      description:
        'Pelajari apa itu K3, tujuan dan penerapannya di tempat kerja. Temukan panduan pelatihan, syarat, biaya, dokumen dan prosedur K3.',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: items.slice(0, 30).map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.title,
          url: `${site.url}/panduan/${item.slug}`,
        })),
      },
    };

    return (
      <main className="content-main">
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={collectionSchema} />
        {faqSchema && <JsonLd data={faqSchema} />}

        <Breadcrumbs items={[{ label: 'Beranda', href: '/' }, { label: 'Panduan K3' }]} />

        <PanduanHubContent items={items} />
      </main>
    );
  }

  return (
    <main className="content-main">
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

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

      {/* Statutory & Legal Compliance Box */}
      {legal && (
        <section className="section-container" style={{ padding: 0, marginBottom: '32px' }}>
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs">
              {legal.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1 mb-2">
              {legal.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {legal.summary}
            </p>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Rujukan Regulasi & Standar Resmi:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {legal.references.map((ref, rIdx) => (
                  <li key={rIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">●</span>
                    <span>{ref}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Real-time Search & Filter Grid */}
      <HubSearchFilter items={items} isCourseSection={isCourseSection} sectionLabel={label} />

      {!isCourseSection && <RelatedProgramsSection />}

      {/* Section-Specific Comprehensive FAQ Accordion */}
      {faqs.length > 0 && (
        <section className="section-container" style={{ padding: 0, marginTop: '48px' }}>
          <FaqAccordion items={faqs} title={`Pertanyaan Umum Seputar ${label}`} />
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