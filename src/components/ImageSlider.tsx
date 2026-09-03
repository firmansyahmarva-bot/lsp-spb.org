'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

export interface SlideImage {
  src: string;
  alt: string;
}

export interface ImageSliderProps {
  images: SlideImage[];
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  autoAdvanceInterval?: number;
}

export function ImageSlider({
  images,
  className = '',
  aspectRatio = 'aspect-[16/9]',
  priority = false,
  autoAdvanceInterval = 4000,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const total = images?.length || 0;

  const goToNext = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance timer
  useEffect(() => {
    if (total <= 1 || isPaused) return;

    const timer = setInterval(() => {
      goToNext();
    }, autoAdvanceInterval);

    return () => clearInterval(timer);
  }, [total, isPaused, autoAdvanceInterval, goToNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNext();
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartXRef.current = null;
  };

  if (!images || images.length === 0) {
    return null;
  }

  // Single image view
  if (total === 1) {
    const single = images[0];
    return (
      <div
        className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg ${className}`}
      >
        <Image
          src={single.src}
          alt={single.alt || 'Dokumentasi Pelatihan K3'}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
        {single.alt && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-3 pt-6 text-xs text-slate-200">
            <p className="line-clamp-1 font-medium">{single.alt}</p>
          </div>
        )}
      </div>
    );
  }

  // Multi-image interactive slider
  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Galeri Dokumentasi Foto Pelatihan K3"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`group relative w-full ${aspectRatio} select-none overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 ${className}`}
    >
      {/* Slides */}
      {images.map((img, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={img.src + idx}
            role="group"
            aria-roledescription="slide"
            aria-label={`Foto ${idx + 1} dari ${total}`}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt || `Dokumentasi Foto ${idx + 1}`}
              fill
              priority={priority && idx === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
              className="object-cover"
            />
            {/* Gradient & Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-4 pt-10 text-xs text-slate-100 sm:text-sm">
              <p className="line-clamp-1 font-medium drop-shadow-sm">{img.alt}</p>
            </div>
          </div>
        );
      })}

      {/* Slide Index Badge */}
      <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-full bg-slate-900/75 px-3 py-1 text-[11px] font-semibold text-slate-200 backdrop-blur-md border border-white/10 shadow">
        <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>
          {currentIndex + 1} / {total}
        </span>
      </div>

      {/* Prev / Next Arrows */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goToPrev();
        }}
        aria-label="Foto sebelumnya"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-md border border-white/15 opacity-80 hover:opacity-100 hover:bg-slate-900/90 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:h-10 sm:w-10"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        aria-label="Foto berikutnya"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-md border border-white/15 opacity-80 hover:opacity-100 hover:bg-slate-900/90 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:h-10 sm:w-10"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full bg-slate-900/50 px-2.5 py-1 backdrop-blur-md border border-white/10">
        {images.map((_, dotIdx) => {
          const isActive = dotIdx === currentIndex;
          return (
            <button
              key={dotIdx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToIndex(dotIdx);
              }}
              aria-label={`Lihat foto ${dotIdx + 1}`}
              aria-current={isActive ? 'true' : undefined}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                isActive ? 'w-6 bg-emerald-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
