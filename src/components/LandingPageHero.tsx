import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  GraduationCap,
  Clock,
  Check,
  BarChart3,
  Building2,
  Sparkles,
} from 'lucide-react';
import { type CourseDetails } from '@/src/lib/content-types';

export interface HeroBreadcrumbItem {
  label: string;
  href?: string;
}

export interface HeroBadgeItem {
  label: string;
  icon?: React.ReactNode;
  variant?: 'emerald' | 'amber' | 'blue';
}

export interface HeroCtaItem {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
  isExternal?: boolean;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export interface HeroSpecItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  highlight?: 'emerald' | 'amber' | 'white';
}

export interface LandingPageHeroProps {
  breadcrumbs?: HeroBreadcrumbItem[];
  category?: string;
  badge?: string;
  secondaryBadge?: string;
  title: React.ReactNode;
  description?: string;
  badges?: (string | HeroBadgeItem)[];
  specs?: HeroSpecItem[];
  ctas?: HeroCtaItem[];
  image?: {
    src: string;
    alt?: string;
  };
  trustTitle?: string;
  trustSubtitle?: string;
  subtext?: string;
  className?: string;
  children?: React.ReactNode;
  courseDetails?: CourseDetails;
  verifiedAt?: string;
  section?: string;
}

export function LandingPageHero({
  breadcrumbs,
  category,
  badge,
  secondaryBadge,
  title,
  description,
  badges,
  specs,
  ctas,
  image,
  trustTitle,
  trustSubtitle,
  subtext,
  className,
  children,
  courseDetails,
  verifiedAt,
  section,
}: LandingPageHeroProps) {
  // 1. Resolve Pills at Top
  const primaryPill =
    badge ||
    category ||
    (section === 'pelatihan' ? 'Sertifikasi Kompetensi BNSP RI' : 'Sertifikasi Resmi Kemnaker & BNSP');

  const secondaryPill =
    secondaryBadge ||
    (section === 'pelatihan'
      ? 'Batch Tahun 2026 Dibuka'
      : verifiedAt
      ? `Terverifikasi ${verifiedAt}`
      : 'Standar Resmi Tahun 2026');

  // 2. Resolve 4-box Specs Row
  let resolvedSpecs: HeroSpecItem[] = [];
  if (specs && specs.length > 0) {
    resolvedSpecs = specs;
  } else if (courseDetails) {
    resolvedSpecs = [
      {
        label: 'Durasi Program:',
        value: courseDetails.duration || '120 JP / 40 JP',
        icon: <Clock className="w-3.5 h-3.5 text-emerald-400" />,
      },
      {
        label: 'Metode Belajar:',
        value: courseDetails.method ? courseDetails.method.split('(')[0].trim() : 'Online / Onsite',
        icon: <GraduationCap className="w-3.5 h-3.5 text-slate-300" />,
      },
      {
        label: 'Kelulusan Ujian:',
        value: '98.7% Lulus',
        icon: <Check className="w-3.5 h-3.5 text-emerald-400" />,
        highlight: 'emerald',
      },
      {
        label: 'Investasi Mulai:',
        value: courseDetails.priceInfo || 'Rp 5.300.000',
        highlight: 'amber',
      },
    ];
  } else if (badges && badges.length >= 2) {
    const b0 = typeof badges[0] === 'string' ? badges[0] : badges[0].label;
    const b1 = typeof badges[1] === 'string' ? badges[1] : badges[1].label;
    const b2 = badges[2] ? (typeof badges[2] === 'string' ? badges[2] : badges[2].label) : 'Terverifikasi';
    resolvedSpecs = [
      {
        label: 'Katalog Data:',
        value: b0,
        icon: <BarChart3 className="w-3.5 h-3.5 text-slate-300" />,
      },
      {
        label: 'Standar Acuan:',
        value: b1,
        icon: <Building2 className="w-3.5 h-3.5 text-slate-300" />,
      },
      {
        label: 'Status Regulasi:',
        value: b2,
        icon: <Check className="w-3.5 h-3.5 text-emerald-400" />,
        highlight: 'emerald',
      },
      {
        label: 'Layanan Pembinaan:',
        value: 'Publik & In-House',
        highlight: 'amber',
      },
    ];
  } else {
    resolvedSpecs = [
      {
        label: 'Legalitas:',
        value: 'PJK3 Resmi Kemnaker',
        icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
        highlight: 'emerald',
      },
      {
        label: 'Metode:',
        value: 'Online / Blended / Tatap Muka',
        icon: <GraduationCap className="w-3.5 h-3.5 text-slate-300" />,
      },
      {
        label: 'Kelulusan:',
        value: '98.7% Peserta Lulus',
        icon: <Check className="w-3.5 h-3.5 text-emerald-400" />,
        highlight: 'emerald',
      },
      {
        label: 'Wilayah Layanan:',
        value: 'Semarang & Seluruh Indonesia',
        highlight: 'amber',
      },
    ];
  }

  // 3. Resolve Visual Card Image & Trust Captions
  const imageSrc = image?.src || '/images/content/instruktur-memandu-sesi-kelas-1.webp';
  const imageAlt =
    image?.alt || 'Dokumentasi Pembinaan Pelatihan dan Sertifikasi K3 Resmi PT Kreasi Ultimate Berjaya';
  const finalTrustTitle = trustTitle || 'Lembaga PJK3 Resmi Berlisensi';
  const finalTrustSubtitle = trustSubtitle || 'Ditjen Binwasnaker & K3 Kemnaker RI • TUK BNSP';

  return (
    <section
      className={`landing-page-hero max-w-6xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 mb-8 sm:mb-10 shadow-2xl border border-emerald-900/40 text-white ${
        className || ''
      }`}
      style={{
        background:
          'radial-gradient(circle at 85% 20%, #0d3829 0%, #061e18 55%, #03120d 100%)',
      }}
    >
      {/* 2-Column Grid Layout matching Pena Consultant reference */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: Core Course Details & Action (7 cols) */}
        <div className="lg:col-span-7 xl:col-span-7 text-left">
          {/* Breadcrumb */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-3">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-emerald-200/80 font-medium">
                {breadcrumbs.map((item, idx) => {
                  const isLast = idx === breadcrumbs.length - 1;
                  return (
                    <li key={idx} className="flex items-center gap-1.5">
                      {item.href && !isLast ? (
                        <Link
                          href={item.href}
                          className="hover:text-white transition-colors underline underline-offset-2 decoration-emerald-500/40 hover:decoration-emerald-400"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className={isLast ? 'text-white font-semibold' : ''}>
                          {item.label}
                        </span>
                      )}
                      {!isLast && (
                        <span className="text-emerald-500/50" aria-hidden="true">
                          /
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          {/* Eyebrow Pills Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-3">
            {primaryPill && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{primaryPill}</span>
              </span>
            )}
            {secondaryPill && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-950/80 border border-amber-500/40 text-amber-300">
                <span>{secondaryPill}</span>
              </span>
            )}
          </div>

          {/* Title - Pure white, well proportioned */}
          <div className="[&_h1]:text-2xl [&_h1]:sm:text-3xl [&_h1]:lg:text-[2.2rem] [&_h1]:font-extrabold [&_h1]:!text-white [&_h1]:tracking-tight [&_h1]:leading-[1.25] [&_h1]:mt-1.5 [&_h1]:mb-2.5">
            {React.isValidElement(title) ? (
              title
            ) : (
              <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-white tracking-tight leading-[1.25] mt-1.5 mb-2.5">
                {title}
              </h1>
            )}
          </div>

          {/* Description - High contrast readable light text */}
          {description && (
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mb-4">
              {description}
            </p>
          )}

          {/* 4-Box Specs Row */}
          {resolvedSpecs.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 my-4 border-y border-emerald-800/40">
              {resolvedSpecs.map((spec, idx) => {
                const valueColor =
                  spec.highlight === 'emerald'
                    ? 'text-emerald-300 font-extrabold'
                    : spec.highlight === 'amber'
                    ? 'text-amber-300 font-extrabold'
                    : 'text-white font-bold';

                return (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[11px] sm:text-xs text-slate-400 font-medium tracking-tight">
                      {spec.label}
                    </span>
                    <span className={`text-xs sm:text-sm mt-0.5 flex items-center gap-1 ${valueColor}`}>
                      {spec.icon && <span className="text-xs shrink-0">{spec.icon}</span>}
                      <span className="truncate">{spec.value}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* CTAs Row */}
          {ctas && ctas.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {ctas.map((cta, idx) => {
                const isPrimary = cta.variant !== 'secondary';
                const isWa =
                  cta.href.includes('wa.me') ||
                  cta.href.includes('whatsapp') ||
                  cta.label.toLowerCase().includes('whatsapp');

                const btnClass = isPrimary
                  ? 'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-950/60 transition-all hover:-translate-y-0.5'
                  : 'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/15 transition-all hover:-translate-y-0.5';

                const waIcon = (
                  <svg
                    className="w-4 h-4 shrink-0 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.966.527 1.947.818 2.795.818 3.182 0 5.768-2.587 5.768-5.768 0-3.18-2.586-5.765-5.767-5.765zm3.374 8.163c-.144.405-.837.774-1.17.823-.313.047-.697.08-2.023-.467-1.637-.677-2.684-2.339-2.766-2.449-.081-.11-1.688-2.247-1.688-4.286 0-2.039 1.07-3.042 1.45-3.431.381-.39 1.01-.564 1.348-.564.113 0 .21.006.294.01.246.012.37.032.532.424.204.492.698 1.701.76 1.826.062.125.103.272.02.435-.082.163-.123.265-.246.408-.123.143-.258.32-.369.43-.122.123-.25.257-.107.502.143.245.637 1.05 1.366 1.699.938.835 1.728 1.094 1.974 1.216.246.122.39.102.533-.061.144-.163.616-.716.78-.961.164-.245.328-.204.553-.122.225.082 1.436.677 1.682.8.246.122.41.184.471.286.061.102.061.592-.083.997z" />
                  </svg>
                );

                if (
                  cta.isExternal ||
                  cta.href.startsWith('http') ||
                  cta.href.startsWith('https://wa.me') ||
                  cta.href.startsWith('#')
                ) {
                  return (
                    <a
                      key={idx}
                      href={cta.href}
                      onClick={cta.onClick}
                      target={cta.isExternal || cta.href.startsWith('http') ? '_blank' : undefined}
                      rel={cta.isExternal || cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={btnClass}
                    >
                      {isWa ? waIcon : cta.icon && <span>{cta.icon}</span>}
                      <span>{cta.label}</span>
                    </a>
                  );
                }

                return (
                  <Link key={idx} href={cta.href} onClick={cta.onClick} className={btnClass}>
                    {isWa ? waIcon : cta.icon && <span>{cta.icon}</span>}
                    <span>{cta.label}</span>
                  </Link>
                );
              })}
            </div>
          )}

          {subtext && (
            <p className="text-xs text-emerald-200/70 max-w-xl mt-3">
              {subtext}
            </p>
          )}

          {children}
        </div>

        {/* Right Column: Visual Training Card & Trust Badge (5 cols) */}
        <div className="lg:col-span-5 xl:col-span-5 w-full">
          <div className="bg-[#020e09]/80 border border-emerald-700/30 rounded-2xl p-3 sm:p-3.5 shadow-2xl backdrop-blur">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-emerald-950/60 shadow-inner">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority
              />
            </div>
            <div className="pt-3 pb-1 text-center">
              <strong className="block text-xs sm:text-sm font-extrabold text-white tracking-wide">
                {finalTrustTitle}
              </strong>
              <span className="block text-[11px] text-emerald-300/80 mt-0.5">
                {finalTrustSubtitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

