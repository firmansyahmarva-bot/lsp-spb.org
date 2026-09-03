import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ProgramCardProps {
  title: string;
  tag: string;
  desc: string;
  href: string;
  points?: string[];
  highlight?: boolean;
  image?: {
    src: string;
    alt?: string;
  };
  price?: {
    startingFrom?: string;
    label?: string;
    note?: string;
  } | string;
  issuer?: string;
  meta?: {
    duration?: string;
    level?: string;
    method?: string;
    batch?: string;
  };
}

export function ProgramCard({
  title,
  tag,
  desc,
  href,
  points = [],
  highlight = false,
  image,
  price,
  issuer,
  meta,
}: ProgramCardProps) {
  const priceDisplay = typeof price === 'string' ? { startingFrom: price, label: 'Investasi:' } : price;
  const isKemnaker = (issuer || tag || '').toLowerCase().includes('kemnaker');
  const isBnsp = (issuer || tag || '').toLowerCase().includes('bnsp');
  const imageSrc = image?.src || '/images/content/instruktur-memandu-sesi-kelas-1.webp';
  const imageAlt = image?.alt || `Dokumentasi Pelatihan ${title}`;

  return (
    <article className={`bg-white dark:bg-slate-900 rounded-2xl border ${highlight ? 'border-emerald-500 shadow-md ring-1 ring-emerald-500/30' : 'border-slate-200 dark:border-slate-800'} hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group`}>
      {/* Program Photo Container (Fixed aspect 16/9) */}
      <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={225}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Badges on Top of Photo */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          {isKemnaker ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-emerald-700 text-white px-2.5 py-1 rounded-md shadow-md">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Kemnaker RI
            </span>
          ) : isBnsp ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-blue-700 text-white px-2.5 py-1 rounded-md shadow-md">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              BNSP RI
            </span>
          ) : (
            <span className="inline-flex items-center text-[10px] font-black uppercase tracking-wider bg-slate-900/90 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-md shadow-md">
              {tag}
            </span>
          )}
        </div>

        {meta?.duration && (
          <div className="absolute bottom-3 right-3 text-[11px] font-semibold text-white bg-slate-950/90 backdrop-blur-md px-2.5 py-0.5 rounded-md flex items-center gap-1 z-10">
            <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12" className="text-amber-400" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {meta.duration}
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2 leading-snug">
            <Link href={href} className="hover:underline">
              {title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-3 leading-relaxed">
            {desc}
          </p>

          {points.length > 0 && (
            <ul className="space-y-1.5 mb-4 text-xs text-slate-600 dark:text-slate-300">
              {points.slice(0, 3).map((pt, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-black">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Price & CTA Button Footer */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
          <div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-bold uppercase tracking-wider">
              {priceDisplay?.label || 'Investasi:'}
            </span>
            <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
              {priceDisplay?.startingFrom || 'Mulai Rp 4.500.000'}
            </span>
          </div>

          <Link
            href={href}
            aria-label={`Detail Program Pelatihan ${title}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/60 group-hover:bg-emerald-700 group-hover:text-white px-3.5 py-2 rounded-xl transition-all"
          >
            <span>Detail</span>
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

export function CategoryCard({
  icon,
  title,
  desc,
  href,
  count,
}: {
  icon: string;
  title: string;
  desc: string;
  href: string;
  count: string;
}) {
  return (
    <Link href={href} className="category-card group">
      <div className="category-card-top">
        <span className="category-icon" aria-hidden="true">{icon}</span>
        <span className="category-count">{count}</span>
      </div>
      <h3 className="category-title group-hover:text-emerald-600 transition-colors">{title}</h3>
      <p className="category-desc">{desc}</p>
      <span className="category-arrow" aria-hidden="true">→</span>
    </Link>
  );
}
