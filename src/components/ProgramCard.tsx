import Link from 'next/link';

export interface ProgramCardProps {
  title: string;
  tag: string;
  desc: string;
  href: string;
  points?: string[];
  highlight?: boolean;
  meta?: {
    duration?: string;
    level?: string;
    method?: string;
  };
}

export function ProgramCard({
  title,
  tag,
  desc,
  href,
  points = [],
  highlight = false,
  meta,
}: ProgramCardProps) {
  return (
    <div className={`program-card ${highlight ? 'program-card-highlight' : ''}`}>
      <div className="program-card-header">
        <span className={`program-tag ${highlight ? 'program-tag-highlight' : ''}`}>{tag}</span>
        {meta?.duration && (
          <span className="program-meta-pill">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {meta.duration}
          </span>
        )}
      </div>

      <h3 className="program-card-title">
        <Link href={href}>{title}</Link>
      </h3>
      <p className="program-card-desc">{desc}</p>

      {points.length > 0 && (
        <ul className="program-card-points">
          {points.map((pt, i) => (
            <li key={i}>
              <svg className="point-check-icon" viewBox="0 0 20 20" fill="currentColor" width="15" height="15" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="program-card-footer">
        <Link className="program-card-action" href={href}>
          <span>Lihat Silabus & Detail</span>
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
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
    <Link href={href} className="category-card">
      <div className="category-card-top">
        <span className="category-icon-badge">{icon}</span>
        {count && <span className="category-count">{count}</span>}
      </div>
      <h3 className="category-card-title">{title}</h3>
      <p className="category-card-desc">{desc}</p>
      <span className="category-card-link">
        <span>Jelajahi Program</span>
        <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </span>
    </Link>
  );
}
