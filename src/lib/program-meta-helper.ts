import type { ContentRecord } from './content-types';

export interface ProgramDisplayMeta {
  issuer: string;
  duration?: string;
  price?: string;
  image: {
    src: string;
    alt: string;
  };
}

const DEFAULT_FALLBACK_IMAGE = '/images/content/instruktur-memandu-sesi-kelas-1.webp';

/**
 * Derives authentic display metadata for a program record without inventing
 * commercial prices, durations, or unverified accreditation/licences.
 */
export function getProgramDisplayMeta(r: ContentRecord): ProgramDisplayMeta {
  // 1. Determine Issuer from trusted record data only
  // Do NOT infer issuer from broad terms like 'higiene', 'p3k', 'listrik', 'kebakaran', or 'kompetensi'
  const certOutputs = (r.courseDetails?.certificationOutput || []).join(' ').toLowerCase();
  const legalBasis = (r.courseDetails?.legalBasis || '').toLowerCase();
  const title = (r.title || '').toLowerCase();

  const isExplicitKemnaker =
    certOutputs.includes('kemnaker') ||
    certOutputs.includes('kementerian ketenagakerjaan') ||
    legalBasis.includes('kemnaker') ||
    legalBasis.includes('permenaker') ||
    legalBasis.includes('kepmenaker') ||
    title.includes('kemnaker');

  const isExplicitBnsp =
    certOutputs.includes('bnsp') ||
    certOutputs.includes('badan nasional sertifikasi profesi') ||
    certOutputs.includes('skkni') ||
    legalBasis.includes('bnsp') ||
    legalBasis.includes('skkni') ||
    title.includes('bnsp');

  let issuer = 'Pelatihan K3';
  if (isExplicitKemnaker && !isExplicitBnsp) {
    issuer = 'Kemnaker RI';
  } else if (isExplicitBnsp && !isExplicitKemnaker) {
    issuer = 'BNSP RI';
  }

  // 2. Duration: use only explicitly stored record duration.
  // Do not infer from title keywords or apply arbitrary fallback durations.
  const duration = r.courseDetails?.duration ? r.courseDetails.duration.trim() : undefined;

  // 3. Price: use dedicated verified numeric price field only if one exists.
  // courseDetails.priceInfo is descriptive text and must not be parsed into an invented numeric price.
  // If no verified numeric price exists, return undefined (no invented price).
  let price: string | undefined = undefined;
  const rawRecord = r as Record<string, unknown>;
  if (typeof rawRecord.price === 'string' && rawRecord.price.trim().length > 0) {
    price = rawRecord.price.trim();
  }

  // 4. Determine verified image path.
  // Prefer record's existing image.src when present.
  let imageSrc = r.image?.src || DEFAULT_FALLBACK_IMAGE;
  // Guard against any legacy broken references
  if (
    imageSrc.includes('peserta-mengikuti-pelatihan-crane-1.webp') ||
    imageSrc.includes('peserta-mengikuti-pelatihan-forklift-1.webp')
  ) {
    imageSrc = DEFAULT_FALLBACK_IMAGE;
  }

  return {
    issuer,
    duration,
    price,
    image: {
      src: imageSrc,
      alt: r.image?.alt || `Dokumentasi Pelatihan ${r.title}`,
    },
  };
}
