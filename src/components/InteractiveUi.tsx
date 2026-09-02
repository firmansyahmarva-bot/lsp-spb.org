'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Reading Progress Bar for Article / Detail Pages
 */
export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentScroll = window.scrollY;
      const scrollPercent = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="reading-progress-track" aria-hidden="true">
      <div className="reading-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

/**
 * Lightweight Scroll Reveal Wrapper (Zero-dependency IntersectionObserver)
 */
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-wrapper ${isVisible ? 'is-revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/**
 * Animated Stat Counter for Proof & Impact Metrics
 */
export function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  sublabel,
  icon,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  icon?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const timer = setTimeout(() => {
        setCount(value);
        setHasAnimated(true);
      }, 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1200;
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = value / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="stat-counter-card">
      {icon && <div className="stat-counter-icon">{icon}</div>}
      <div className="stat-counter-number">
        <span className="stat-counter-prefix">{prefix}</span>
        <span>{count.toLocaleString('id-ID')}</span>
        <span className="stat-counter-suffix">{suffix}</span>
      </div>
      <div className="stat-counter-label">{label}</div>
      {sublabel && <div className="stat-counter-sublabel">{sublabel}</div>}
    </div>
  );
}

/**
 * Interactive K3 Program Navigator with Live Tab Previews
 */
export function InteractiveProgramNavigator({
  categories,
}: {
  categories: Array<{
    id: string;
    title: string;
    tag: string;
    icon: string;
    badgeColor?: string;
    description: string;
    programs: Array<{ name: string; href: string; duration: string; level: string; desc?: string }>;
  }>;
}) {
  const [activeTab, setActiveTab] = useState(categories[0]?.id || '');
  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <div className="program-navigator-box">
      {/* Category Tabs */}
      <div className="navigator-tabs-scroller" role="tablist" aria-label="Kategori Pelatihan K3">
        {categories.map((cat) => {
          const isActive = cat.id === activeTab;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${cat.id}`}
              id={`tab-${cat.id}`}
              type="button"
              className={`navigator-tab-btn ${isActive ? 'is-active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span className="navigator-tab-icon">{cat.icon}</span>
              <span className="navigator-tab-title">{cat.title}</span>
              {isActive && <span className="navigator-tab-dot" />}
            </button>
          );
        })}
      </div>

      {/* Active Category Display Panel */}
      {activeCategory && (
        <div
          id={`panel-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.id}`}
          className="navigator-content-panel"
        >
          <div className="navigator-panel-header">
            <div className="navigator-panel-info">
              <span className="navigator-badge">
                {activeCategory.tag}
              </span>
              <h3>{activeCategory.title}</h3>
              <p>{activeCategory.description}</p>
            </div>
          </div>

          <div className="navigator-programs-grid">
            {activeCategory.programs.map((prog, idx) => (
              <a key={idx} href={prog.href} className="navigator-program-card">
                <div className="prog-card-top">
                  <span className="prog-level-pill">{prog.level}</span>
                  <span className="prog-dur-pill">⏱️ {prog.duration}</span>
                </div>
                <h4 className="prog-card-title">{prog.name}</h4>
                {prog.desc && <p className="prog-card-summary">{prog.desc}</p>}
                <span className="prog-card-cta">
                  <span>Lihat Silabus & Detail</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Visual Photo / Diagram Slot with Modern AI & Industrial Styling
 */
export function VisualPhotoSlot({
  title,
  tag,
  caption,
  aspectRatio = '16/9',
  theme = 'industrial',
  metrics,
}: {
  title: string;
  tag: string;
  caption: string;
  aspectRatio?: string;
  theme?: 'industrial' | 'academy' | 'audit' | 'fire';
  metrics?: Array<{ label: string; value: string }>;
}) {
  return (
    <div className={`visual-photo-slot theme-${theme}`} style={{ aspectRatio }}>
      <div className="visual-photo-overlay" />
      <div className="visual-photo-grid-pattern" />
      <div className="visual-photo-content">
        <div className="visual-photo-badge">
          <span className="visual-badge-dot" />
          <span>{tag}</span>
        </div>
        <h3 className="visual-photo-title">{title}</h3>
        <p className="visual-photo-caption">{caption}</p>
        {metrics && metrics.length > 0 && (
          <div className="visual-photo-metrics">
            {metrics.map((m, i) => (
              <div key={i} className="visual-metric-chip">
                <span className="metric-chip-val">{m.value}</span>
                <span className="metric-chip-lbl">{m.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
