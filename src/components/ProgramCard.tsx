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
  const priceDisplay = typeof price === 'string' ? { startingFrom: price, label: 'Investasi Mulai' } : price;

  return (
    <div className={`program-card group ${highlight ? 'program-card-highlight' : ''}`}>
      {highlight && <div className="card-top-accent-bar" />}
      
      {/* Optional Card Header Image Thumbnail */}
      {image && (
        <div className="program-card-media relative w-full h-44 overflow-hidden rounded-t-xl bg-slate-900">
          <Image
            src={image.src}
            alt={image.alt || title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className={`program-tag ${highlight ? 'program-tag-highlight' : ''}`}>{tag}</span>
            {issuer && (
              <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-slate-900/90 text-amber-400 border border-amber-500/30 backdrop-blur-md">
                {issuer}
              </span>
            )}
          </div>
          {meta?.duration && (
            <div className="absolute bottom-2.5 left-3">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm">
                <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {meta.duration}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="program-card-body p-6 flex flex-col flex-grow">
        {!image && (
          <div className="program-card-header">
            <span className={`program-tag ${highlight ? 'program-tag-highlight' : ''}`}>{tag}</span>
            {meta?.duration && (
              <span className="program-meta-pill">
                <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {meta.duration}
              </span>
            )}
          </div>
        )}

        <h3 className="program-card-title mt-1">
          <Link href={href}>{title}</Link>
        </h3>
        <p className="program-card-desc">{desc}</p>

        {points.length > 0 && (
          <ul className="program-card-points my-3">
            {points.map((pt, i) => (
              <li key={i}>
                <span className="point-check-badge">✓</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Price & Investment Starting Point */}
        {priceDisplay?.startingFrom && (
          <div className="program-card-price-row mt-auto pt-3 pb-2 border-t border-slate-100 dark:border-slate-800 flex items-baseline justify-between">
            <span className="text-[12px] font-semibold text-slate-500">{priceDisplay.label || 'Estimasi Biaya'}:</span>
            <span className="text-[15px] font-extrabold text-emerald-600 dark:text-emerald-400">
              {priceDisplay.startingFrom}
            </span>
          </div>
        )}

        <div className="program-card-footer mt-3">
          <Link className={`button button-small ${highlight ? 'button-accent btn-glow' : 'button-secondary'} button-full`} href={href}>
            <span>Lihat Silabus & Detail</span>
            <svg className="btn-arrow-icon" viewBox="0 0 20 20" fill="currentColor" width="15" height="15" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
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
  count?: string;
}) {
  return (
    <Link href={href} className="category-card group">
      <div className="category-card-top">
        <div className="category-icon-badge">{icon}</div>
        {count && <span className="category-count">{count}</span>}
      </div>
      <h3 className="category-card-title">{title}</h3>
      <p className="category-card-desc">{desc}</p>
      <div className="category-card-link">
        <span>Jelajahi Program</span>
        <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15" aria-hidden="true">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </Link>
  );
}
