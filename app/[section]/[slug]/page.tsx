import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/src/components/SiteChrome';
import { JsonLd } from '@/src/components/JsonLd';
import { FaqAccordion } from '@/src/components/FaqAccordion';
import { InHouseCtaBox, ConsultationBanner, ScheduleInquiryBox } from '@/src/components/ConversionCta';
import { findRecord, records, sectionLabels } from '@/src/lib/content';
import { site, waIntentUrl } from '@/src/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return records.map(({ section, slug }) => ({ section, slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}): Promise<Metadata> {
  const { section, slug } = await params;
  const r = findRecord(section, slug);
  if (!r) return {};

  const pageTitle = r.metaTitle || `${r.title} | ${site.name}`;
  const canonicalUrl = `${site.url}/${section}/${slug}`;

  return {
    title: pageTitle,
    description: r.description,
    alternates: {
      canonical: `/${section}/${slug}`,
    },
    robots: r.indexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title: pageTitle,
      description: r.description,
      url: canonicalUrl,
      siteName: site.name,
      locale: 'id_ID',
      type: r.section === 'pelatihan' ? 'website' : 'article',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: r.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: r.description,
      images: ['/og.png'],
    },
  };
}

export default async function DetailPage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { section, slug } = await params;
  const r = findRecord(section, slug);
  if (!r) notFound();

  const related = r.related
    .map((path) => {
      const [s, l] = path.split('/');
      return findRecord(s, l);
    })
    .filter((x): x is typeof r => Boolean(x));

  const sectionLabel = sectionLabels[r.section] || r.section;
  const canonicalUrl = `${site.url}/${r.section}/${r.slug}`;

  // Structured Data Schemas
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: site.url },
      { '@type': 'ListItem', position: 2, name: sectionLabel, item: `${site.url}/${r.section}` },
      { '@type': 'ListItem', position: 3, name: r.title, item: canonicalUrl },
    ],
  };

  const mainSchema =
    r.section === 'pelatihan'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: r.title,
          description: r.description,
          url: canonicalUrl,
          provider: {
            '@type': 'Organization',
            name: site.name,
            sameAs: site.url,
          },
          inLanguage: 'id-ID',
          educationalCredentialAwarded: r.courseDetails?.level || 'Sertifikat Pembinaan K3',
        }
      : r.section === 'regulasi-k3'
        ? {
            '@context': 'https://schema.org',
            '@type': 'Legislation',
            name: r.title,
            url: canonicalUrl,
            legislationLegalStatus: r.status,
            legislationDate: r.verifiedAt,
          }
        : r.section === 'kamus-k3'
          ? {
              '@context': 'https://schema.org',
              '@type': 'DefinedTerm',
              name: r.title,
              description: r.answer,
              url: canonicalUrl,
            }
          : {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: r.title,
              description: r.description,
              url: canonicalUrl,
              inLanguage: 'id-ID',
              author: {
                '@type': 'Organization',
                name: site.name,
              },
              publisher: {
                '@type': 'Organization',
                name: site.name,
                url: site.url,
              },
              datePublished: r.verifiedAt || '2026-09-01',
              dateModified: r.verifiedAt || '2026-09-01',
            };

  const faqSchema =
    r.faqs && r.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: r.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  const schemasToRender = [breadcrumbSchema, mainSchema, faqSchema].filter(Boolean);

  const ctaIntent = r.primaryCtaIntent || 'jadwal';
  const ctaText = r.primaryCtaText || `Tanya Jadwal ${r.title}`;
  const ctaUrl = waIntentUrl(ctaIntent, r.title);

  return (
    <main className="content-main">
      <JsonLd data={schemasToRender} />

      <Breadcrumbs
        items={[
          { label: 'Beranda', href: '/' },
          { label: sectionLabel, href: `/${r.section}` },
          { label: r.title },
        ]}
      />

      <article className="article-layout">
        <div className="article-body">
          <header className="article-hero">
            <span className="eyebrow">{sectionLabel.toUpperCase()}</span>
            <h1>{r.title}</h1>
            <p className="article-lead">{r.description}</p>
            {r.status && <span className="status-pill">Status Regulasi: {r.status}</span>}
          </header>

          {/* Quick Summary Answer Box */}
          <section className="answer-box">
            <small>RINGKASAN UTAMA</small>
            <p>{r.answer}</p>
          </section>

          {/* Course Details Block (for Training Pages) */}
          {r.courseDetails && (
            <section className="course-specs-section">
              <h2>Informasi Program Pelatihan</h2>
              <div className="course-specs-grid">
                {r.courseDetails.level && (
                  <div className="course-spec-item">
                    <span className="course-spec-label">Jenjang Sertifikasi</span>
                    <span className="course-spec-value">{r.courseDetails.level}</span>
                  </div>
                )}
                {r.courseDetails.duration && (
                  <div className="course-spec-item">
                    <span className="course-spec-label">Durasi Pembinaan</span>
                    <span className="course-spec-value">{r.courseDetails.duration}</span>
                  </div>
                )}
                {r.courseDetails.legalBasis && (
                  <div className="course-spec-item">
                    <span className="course-spec-label">Dasar Hukum</span>
                    <span className="course-spec-value">{r.courseDetails.legalBasis}</span>
                  </div>
                )}
                {r.courseDetails.method && (
                  <div className="course-spec-item">
                    <span className="course-spec-label">Metode Pembelajaran</span>
                    <span className="course-spec-value">{r.courseDetails.method}</span>
                  </div>
                )}
              </div>

              {r.courseDetails.targetAudience && (
                <div style={{ marginTop: '20px' }}>
                  <h3>Sasaran Peserta</h3>
                  <ul>
                    {r.courseDetails.targetAudience.map((aud) => (
                      <li key={aud}>{aud}</li>
                    ))}
                  </ul>
                </div>
              )}

              {r.courseDetails.prerequisites && (
                <div style={{ marginTop: '20px' }}>
                  <h3>Persyaratan Calon Peserta</h3>
                  <ul>
                    {r.courseDetails.prerequisites.map((pre) => (
                      <li key={pre}>{pre}</li>
                    ))}
                  </ul>
                </div>
              )}

              {r.courseDetails.certificationOutput && (
                <div style={{ marginTop: '20px' }}>
                  <h3>Keluaran Sertifikat & Legalitas</h3>
                  <ul>
                    {r.courseDetails.certificationOutput.map((cert) => (
                      <li key={cert}>{cert}</li>
                    ))}
                  </ul>
                </div>
              )}

              {r.courseDetails.syllabusModules && (
                <div style={{ marginTop: '28px' }}>
                  <h3>Silabus Kurikulum Pembinaan</h3>
                  <div className="syllabus-list">
                    {r.courseDetails.syllabusModules.map((mod) => (
                      <div key={mod.module} className="syllabus-module-card">
                        <div className="syllabus-module-head">
                          <h4>{mod.module}</h4>
                          {mod.hours && <span className="syllabus-hours-badge">{mod.hours}</span>}
                        </div>
                        <ul className="syllabus-topics">
                          {mod.topics.map((top) => (
                            <li key={top}>{top}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Document Checklist Block (if present) */}
          {r.documentChecklist && (
            <section>
              <h2>Daftar Kelengkapan Dokumen</h2>
              <div className="checklist-card-group">
                {r.documentChecklist.map((group) => (
                  <div key={group.category} className="checklist-card">
                    <h4>{group.category}</h4>
                    <ul className="checklist-items">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Comparison Table Block (if present) */}
          {r.comparisonTable && (
            <section>
              <h2>Tabel Matriks Perbandingan</h2>
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th style={{ width: '22%' }}>Aspek Perbandingan</th>
                      <th style={{ width: '39%' }}>{r.comparisonTable.leftTitle}</th>
                      <th style={{ width: '39%' }}>{r.comparisonTable.rightTitle}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {r.comparisonTable.rows.map((row) => (
                      <tr key={row.aspect}>
                        <td><strong>{row.aspect}</strong></td>
                        <td>{row.left}</td>
                        <td>{row.right}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Bespoke Content Blocks */}
          {r.blocks.map((block) => (
            <section key={block.heading}>
              <h2>{block.heading}</h2>
              {block.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {block.bullets && block.bullets.length > 0 && (
                <ul>
                  {block.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Schedule Inquiry Banner on Training Pages */}
          {r.section === 'pelatihan' && (
            <ScheduleInquiryBox programTitle={r.title} />
          )}

          {/* Mid-content Consultation Callout */}
          <ConsultationBanner
            title={`Konsultasikan Kebutuhan ${r.title}`}
            text="Dapatkan panduan pemilihan jadwal batch, rincian biaya, atau pengajuan proposal in-house dari tim konsultan kami."
            ctaText={ctaText}
            intent={ctaIntent}
            context={r.title}
          />

          {/* In-House CTA for Companies */}
          {r.section === 'pelatihan' && (
            <InHouseCtaBox programName={r.title} />
          )}

          {/* Interactive FAQ Accordion */}
          {r.faqs && r.faqs.length > 0 && (
            <FaqAccordion items={r.faqs} title={`FAQ ${r.title}`} />
          )}

          {/* Source & Verification Box */}
          {r.sources && r.sources.length > 0 && (
            <section className="source-box" style={{ marginTop: '40px', padding: '24px', background: 'var(--surface-alt)', borderRadius: '8px', border: '1px solid var(--line)' }}>
              <h3 style={{ margin: '0 0 8px', fontSize: '15px' }}>Rujukan Regulasi & Verifikasi Resmi</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '0 0 12px' }}>
                Informasi diverifikasi per {r.verifiedAt || 'September 2026'}. Untuk keperluan audit dan legalitas hukum, periksa naskah resmi pada instansi berwenang:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {r.sources.map((src) => (
                  <a
                    key={src.url}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '12px', color: 'var(--green)', fontWeight: 750, textDecoration: 'underline' }}
                  >
                    {src.label} ({src.publisher}) ↗
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Desktop Sticky Consultation Sidebar */}
        <aside className="article-side">
          <div className="consult-card">
            <small>LAYANAN KONSULTASI</small>
            <h2>{r.section === 'pelatihan' ? 'Daftar / Tanya Jadwal' : 'Konsultasi Program'}</h2>
            <p>
              Hubungi konsultan {site.name} untuk konfirmasi syarat pendaftaran, sisa kuota batch, atau penawaran resmi.
            </p>
            <a
              className="button button-accent button-full"
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaText} →
            </a>

            <ul className="consult-side-links">
              <li><Link href="/pelatihan/ahli-k3-umum">→ Pelatihan Ahli K3 Umum</Link></li>
              <li><Link href="/panduan/syarat-ahli-k3-umum">→ Syarat Pendaftaran D3/S1</Link></li>
              <li><Link href="/panduan/biaya-pelatihan-k3">→ Estimasi Biaya Pelatihan</Link></li>
              <li><Link href="/perbandingan/bnsp-vs-kemnaker">→ BNSP vs Kemnaker RI</Link></li>
              <li><Link href="/jadwal">→ Informasi Jadwal Batch</Link></li>
            </ul>
          </div>

          {related.length > 0 && (
            <div className="related-box">
              <h2>Topik & Panduan Terkait</h2>
              {related.map((rel) => (
                <Link key={`${rel.section}-${rel.slug}`} href={`/${rel.section}/${rel.slug}`}>
                  <span>{rel.title}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          )}
        </aside>
      </article>
    </main>
  );
}
