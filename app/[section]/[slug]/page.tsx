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
          {/* Article Header & Editorial Meta */}
          <header className="article-hero">
            <div className="article-hero-meta">
              <span className="eyebrow">{sectionLabel.toUpperCase()}</span>
              <span className="article-meta-dot">•</span>
              <span className="article-meta-date">Diverifikasi: {r.verifiedAt || 'September 2026'}</span>
              {r.status && (
                <>
                  <span className="article-meta-dot">•</span>
                  <span className="status-pill">{r.status}</span>
                </>
              )}
            </div>
            <h1>{r.title}</h1>
            <p className="article-lead">{r.description}</p>
          </header>

          {/* Quick Summary Answer Box */}
          <section className="answer-box" aria-label="Ringkasan Utama">
            <div className="answer-box-header">
              <svg className="answer-box-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <small>RINGKASAN UTAMA</small>
            </div>
            <p className="answer-box-text">{r.answer}</p>
          </section>

          {/* In-page Outline / Quick Jump Nav */}
          <nav className="inpage-toc" aria-label="Navigasi Halaman">
            <span className="inpage-toc-label">Daftar Isi Pembahasan:</span>
            <div className="inpage-toc-links">
              {r.courseDetails && <a href="#info-program">Informasi Program</a>}
              {r.courseDetails?.syllabusModules && <a href="#silabus-materi">Silabus 120 JP</a>}
              {r.documentChecklist && <a href="#syarat-dokumen">Syarat Berkas</a>}
              {r.comparisonTable && <a href="#tabel-perbandingan">Matriks Perbandingan</a>}
              {r.blocks.map((b, i) => (
                <a key={i} href={`#section-${i}`}>{b.heading}</a>
              ))}
              {r.faqs && r.faqs.length > 0 && <a href="#faq">FAQ</a>}
            </div>
          </nav>

          {/* Course Details Block (for Training Pages) */}
          {r.courseDetails && (
            <section id="info-program" className="course-specs-section">
              <div className="section-subheading">
                <span className="eyebrow">SPESIFIKASI PELATIHAN</span>
                <h2>Informasi & Parameter Program</h2>
              </div>

              <div className="course-specs-grid">
                {r.courseDetails.level && (
                  <div className="course-spec-item">
                    <div className="course-spec-icon-wrap">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
                        <path d="M12 2l8 4.5v7c0 5-3.5 9.5-8 10.5-4.5-1-8-5.5-8-10.5v-7L12 2z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <span className="course-spec-label">Jenjang Sertifikasi</span>
                      <span className="course-spec-value">{r.courseDetails.level}</span>
                    </div>
                  </div>
                )}
                {r.courseDetails.duration && (
                  <div className="course-spec-item">
                    <div className="course-spec-icon-wrap">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <span className="course-spec-label">Durasi Pembinaan</span>
                      <span className="course-spec-value">{r.courseDetails.duration}</span>
                    </div>
                  </div>
                )}
                {r.courseDetails.legalBasis && (
                  <div className="course-spec-item">
                    <div className="course-spec-icon-wrap">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                        <path d="M6 6h10" />
                        <path d="M6 10h10" />
                      </svg>
                    </div>
                    <div>
                      <span className="course-spec-label">Dasar Hukum Acuan</span>
                      <span className="course-spec-value">{r.courseDetails.legalBasis}</span>
                    </div>
                  </div>
                )}
                {r.courseDetails.method && (
                  <div className="course-spec-item">
                    <div className="course-spec-icon-wrap">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                    <div>
                      <span className="course-spec-label">Metode Pembelajaran</span>
                      <span className="course-spec-value">{r.courseDetails.method}</span>
                    </div>
                  </div>
                )}
              </div>

              {r.courseDetails.targetAudience && (
                <div className="spec-detail-box">
                  <h3>Sasaran Peserta Pelatihan</h3>
                  <ul className="spec-check-list">
                    {r.courseDetails.targetAudience.map((aud) => (
                      <li key={aud}>
                        <span className="spec-check-bullet">✓</span>
                        <span>{aud}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {r.courseDetails.prerequisites && (
                <div className="spec-detail-box">
                  <h3>Persyaratan Calon Peserta</h3>
                  <ul className="spec-check-list">
                    {r.courseDetails.prerequisites.map((pre) => (
                      <li key={pre}>
                        <span className="spec-check-bullet">✓</span>
                        <span>{pre}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {r.courseDetails.certificationOutput && (
                <div className="spec-detail-box">
                  <h3>Keluaran Dokumen & Sertifikat</h3>
                  <ul className="spec-check-list">
                    {r.courseDetails.certificationOutput.map((cert) => (
                      <li key={cert}>
                        <span className="spec-check-bullet">✓</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {r.courseDetails.syllabusModules && (
                <div id="silabus-materi" className="syllabus-container">
                  <div className="section-subheading">
                    <span className="eyebrow">KURIKULUM PEMBINAAN</span>
                    <h3>Struktur Silabus & Jam Pelajaran (120 JP)</h3>
                  </div>
                  <div className="syllabus-list">
                    {r.courseDetails.syllabusModules.map((mod, idx) => (
                      <div key={mod.module} className="syllabus-module-card">
                        <div className="syllabus-module-head">
                          <div className="syllabus-mod-title-group">
                            <span className="syllabus-mod-number">0{idx + 1}</span>
                            <h4>{mod.module}</h4>
                          </div>
                          {mod.hours && <span className="syllabus-hours-badge">{mod.hours}</span>}
                        </div>
                        <ul className="syllabus-topics">
                          {mod.topics.map((top) => (
                            <li key={top}>
                              <span className="topic-bullet">•</span>
                              <span>{top}</span>
                            </li>
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
            <section id="syarat-dokumen" className="checklist-section">
              <div className="section-subheading">
                <span className="eyebrow">DOKUMEN PERSYARATAN</span>
                <h2>Kelengkapan Berkas Pendaftaran</h2>
              </div>
              <div className="checklist-card-group">
                {r.documentChecklist.map((group) => (
                  <div key={group.category} className="checklist-card">
                    <h4>{group.category}</h4>
                    <ul className="checklist-items">
                      {group.items.map((item) => (
                        <li key={item}>
                          <span className="check-icon-pill">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Comparison Table Block (if present) */}
          {r.comparisonTable && (
            <section id="tabel-perbandingan" className="comparison-section">
              <div className="section-subheading">
                <span className="eyebrow">MATRIKS PERBANDINGAN</span>
                <h2>Perbandingan Fitur & Regulasi</h2>
              </div>
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th style={{ width: '24%' }}>Aspek Perbandingan</th>
                      <th style={{ width: '38%' }}>{r.comparisonTable.leftTitle}</th>
                      <th style={{ width: '38%' }}>{r.comparisonTable.rightTitle}</th>
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
          {r.blocks.map((block, idx) => (
            <section key={block.heading} id={`section-${idx}`} className="content-block-section">
              <h2>{block.heading}</h2>
              {block.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {block.bullets && block.bullets.length > 0 && (
                <ul className="content-bullet-list">
                  {block.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
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
            <div id="faq">
              <FaqAccordion items={r.faqs} title={`FAQ Seputar ${r.title}`} />
            </div>
          )}

          {/* Official Regulatory Source Box */}
          {r.sources && r.sources.length > 0 && (
            <section className="source-verification-box" aria-label="Rujukan Regulasi">
              <div className="source-box-head">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h3>Rujukan Regulasi & Verifikasi Resmi</h3>
              </div>
              <p>
                Seluruh materi informasi diverifikasi per {r.verifiedAt || 'September 2026'}. Untuk keperluan audit dan kepatuhan hukum, Anda dapat memverifikasi naskah resmi pada instansi pemerintah terkait:
              </p>
              <div className="source-links-grid">
                {r.sources.map((src) => (
                  <a
                    key={src.url}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="source-link-pill"
                  >
                    <span>{src.label} ({src.publisher})</span>
                    <span className="source-ext-icon" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Desktop Sticky Consultation Sidebar */}
        <aside className="article-side">
          <div className="consult-card">
            <div className="consult-card-top">
              <span className="consult-tag">KONSULTASI RESMI</span>
              <span className="consult-badge-dot">● Aktif</span>
            </div>
            <h2>{r.section === 'pelatihan' ? 'Pendaftaran & Jadwal' : 'Konsultasi Program'}</h2>
            <p>
              Hubungi tim admisi {site.name} untuk konfirmasi syarat pendaftaran, tanggal batch terdekat, atau penawaran resmi.
            </p>

            <ul className="consult-perks-list">
              <li>✓ Pre-screening kelayakan ijazah gratis</li>
              <li>✓ SPH & invoice corporate resmi</li>
              <li>✓ Kelas Blended Online & In-House</li>
            </ul>

            <a
              className="button button-primary button-full"
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{ctaText}</span>
              <span aria-hidden="true">→</span>
            </a>

            <div className="consult-side-divider" />

            <span className="side-links-header">Akses Cepat Panduan:</span>
            <ul className="consult-side-links">
              <li><Link href="/pelatihan/ahli-k3-umum">→ Pelatihan Ahli K3 Umum (Flagship)</Link></li>
              <li><Link href="/panduan/syarat-ahli-k3-umum">→ Syarat Pendaftaran D3/S1</Link></li>
              <li><Link href="/panduan/biaya-pelatihan-k3">→ Estimasi Biaya Pelatihan</Link></li>
              <li><Link href="/perbandingan/bnsp-vs-kemnaker">→ BNSP vs Kemnaker RI</Link></li>
              <li><Link href="/jadwal">→ Informasi Jadwal Batch</Link></li>
            </ul>
          </div>

          {related.length > 0 && (
            <div className="related-box">
              <h3>Topik & Panduan Terkait</h3>
              <div className="related-links-list">
                {related.map((rel) => (
                  <Link key={`${rel.section}-${rel.slug}`} href={`/${rel.section}/${rel.slug}`} className="related-item">
                    <span className="related-item-title">{rel.title}</span>
                    <span className="related-item-arrow" aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </article>
    </main>
  );
}
