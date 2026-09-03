import React from 'react';
import { ProgramCard } from './ProgramCard';
import { getProgramDisplayMeta } from '@/src/lib/program-meta-helper';
import { records, type ContentRecord } from '@/src/lib/content';

export function RelatedProgramsSection({ currentSlug }: { currentSlug?: string }) {
  const trainingRecords: ContentRecord[] = records.filter(
    (r: ContentRecord) => r.section === 'pelatihan' && r.slug !== currentSlug
  );

  // Pick 3 high-priority diverse training programs
  const prioritySlugs = [
    'ahli-k3-umum',
    'auditor-smk3',
    'pelatihan-petugas-p3k-di-tempat-kerja-lisensi-resmi-kemnaker-ri-30-jp',
    'k3-kebakaran',
    'pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri',
    'pelatihan-tenaga-kerja-pada-ketinggian-tingkat-1-tkpk-1-rope-access-kemnaker',
  ];

  const selected: ContentRecord[] = [];
  for (const slug of prioritySlugs) {
    if (slug !== currentSlug) {
      const found = trainingRecords.find((r) => r.slug === slug);
      if (found) selected.push(found);
      if (selected.length === 3) break;
    }
  }

  // Fallback if needed
  if (selected.length < 3) {
    for (const r of trainingRecords) {
      if (!selected.includes(r)) {
        selected.push(r);
        if (selected.length === 3) break;
      }
    }
  }

  return (
    <section className="related-programs-container my-12" aria-labelledby="related-programs-title">
      <div className="section-heading mb-6">
        <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold">
          REKOMENDASI PROGRAM K3
        </span>
        <h2 id="related-programs-title" className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mt-1">
          Program Pelatihan Terkait & Paling Diminati
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Tingkatkan kompetensi dan legalitas keselamatan kerja Anda melalui skema pembinaan resmi Kemnaker RI dan sertifikasi BNSP terpopuler.
        </p>
      </div>

      <div className="program-grid-3">
        {selected.map((item) => {
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
      </div>
    </section>
  );
}
