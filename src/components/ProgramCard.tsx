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
    <article className={`program-card ${highlight ? 'program-card-highlight' : ''}`}>
      {/* 16:9 Image Container with Badges */}
      <div className="program-card-media">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={225}
          className="program-card-img"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="program-card-gradient" />

        {/* Top-Left Badge */}
        <div className="program-card-badge-container">
          {isKemnaker ? (
            <span className="program-badge-overlay program-badge-kemnaker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Kemnaker RI
            </span>
          ) : isBnsp ? (
            <span className="program-badge-overlay program-badge-bnsp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              BNSP RI
            </span>
          ) : (
            <span className="program-badge-overlay program-badge-general">
              {tag}
            </span>
          )}
        </div>

        {/* Bottom-Right Duration */}
        {meta?.duration && (
          <div className="program-duration-overlay">
            <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12" className="text-amber-400" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{meta.duration}</span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="program-card-body">
        <div>
          <h3 className="program-card-title">
            <Link href={href}>{title}</Link>
          </h3>
          <p className="program-card-desc">{desc}</p>
          {points && points.length > 0 && (
            <ul className="program-card-points">
              {points.slice(0, 3).map((pt, i) => (
                <li key={i}>
                  <span className="point-check-badge">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer: Price & CTA Button */}
        <div className="program-card-footer-row">
          <div className="program-card-price-block">
            <span className="program-card-price-label">{priceDisplay?.label || 'Investasi'}</span>
            <span
              className={`program-card-price-val ${
                !priceDisplay?.startingFrom ? 'text-slate-500 dark:text-slate-400 font-semibold text-xs sm:text-sm' : ''
              }`}
            >
              {priceDisplay?.startingFrom || 'Tanya Biaya'}
            </span>
          </div>

          <Link href={href} aria-label={`Detail Program Pelatihan ${title}`} className="program-card-btn">
            <span>Detail</span>
            <span aria-hidden="true">→</span>
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
