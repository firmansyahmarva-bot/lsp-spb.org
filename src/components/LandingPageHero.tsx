import React from 'react';
import Link from 'next/link';

export interface HeroBreadcrumbItem {
  label: string;
  href?: string;
}

export interface HeroBadgeItem {
  label: string;
  icon?: string;
}

export interface HeroCtaItem {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
  isExternal?: boolean;
  icon?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export interface LandingPageHeroProps {
  breadcrumbs?: HeroBreadcrumbItem[];
  category?: string;
  title: React.ReactNode;
  description?: string;
  badges?: (string | HeroBadgeItem)[];
  ctas?: HeroCtaItem[];
  subtext?: string;
  className?: string;
  children?: React.ReactNode;
}

export function LandingPageHero({
  breadcrumbs,
  category,
  title,
  description,
  badges,
  ctas,
  subtext,
  className,
  children,
}: LandingPageHeroProps) {
  return (
    <section
      className={`landing-page-hero bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 mb-8 sm:mb-10 shadow-xl border border-slate-800 ${
        className || ''
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* 1. Breadcrumb (light gray) */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-400">
              {breadcrumbs.map((item, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <li key={idx} className="flex items-center gap-1.5">
                    {item.href && !isLast ? (
                      <Link href={item.href} className="hover:text-slate-200 transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <span className={isLast ? 'text-slate-300 font-medium' : ''}>
                        {item.label}
                      </span>
                    )}
                    {!isLast && (
                      <span className="text-slate-600" aria-hidden="true">
                        /
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {/* 2. Category Eyebrow Pill */}
        {category && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{category}</span>
          </div>
        )}

        {/* 3. Title (white, bold) */}
        {title &&
          (React.isValidElement(title) ? (
            title
          ) : (
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4 sm:mb-5">
              {title}
            </h1>
          ))}

        {/* 4. Description (light gray) */}
        {description && (
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
            {description}
          </p>
        )}

        {/* 5. Stat Badge Row (same style as existing nav badge: rgba(245,158,11,0.2) bg, rgba(245,158,11,0.4) border, #fbbf24 text) */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6">
            {badges.map((b, idx) => {
              const label = typeof b === 'string' ? b : b.label;
              const icon = typeof b === 'object' ? b.icon : null;
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold tracking-wide"
                  style={{
                    background: 'rgba(245, 158, 11, 0.2)',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                    color: '#fbbf24',
                  }}
                >
                  {icon && <span>{icon}</span>}
                  <span>{label}</span>
                </span>
              );
            })}
          </div>
        )}

        {/* 6. CTA Row (primary + secondary buttons) */}
        {ctas && ctas.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-4">
            {ctas.map((cta, idx) => {
              const isPrimary = cta.variant !== 'secondary';
              const btnClass = isPrimary
                ? 'w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/30 transition-all hover:-translate-y-0.5'
                : 'w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/15 transition-all hover:-translate-y-0.5';

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
                    {cta.icon && <span>{cta.icon}</span>}
                    <span>{cta.label}</span>
                  </a>
                );
              }

              return (
                <Link key={idx} href={cta.href} onClick={cta.onClick} className={btnClass}>
                  {cta.icon && <span>{cta.icon}</span>}
                  <span>{cta.label}</span>
                </Link>
              );
            })}
          </div>
        )}

        {subtext && (
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mt-3">
            {subtext}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
