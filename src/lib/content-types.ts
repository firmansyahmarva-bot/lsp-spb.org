export const sections = ['pelatihan', 'profesi', 'kompetensi', 'industri', 'regulasi-k3', 'panduan', 'kamus-k3', 'perbandingan', 'alat', 'lokasi'] as const;
export type Section = typeof sections[number];

export type SourceRef = {
  label: string;
  url: string;
  publisher: string;
};

export type ContentBlock = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CourseDetails = {
  level?: string;
  duration?: string;
  method?: string;
  targetAudience?: string[];
  prerequisites?: string[];
  legalBasis?: string;
  certificationOutput?: string[];
  syllabusModules?: { module: string; topics: string[]; hours?: string }[];
  documentChecklist?: string[];
  priceInfo?: string;
};

export type ComparisonTable = {
  leftTitle: string;
  rightTitle: string;
  rows: { aspect: string; left: string; right: string }[];
};

export type ContentRecord = {
  section: Section;
  slug: string;
  title: string;
  metaTitle?: string;
  description: string;
  answer: string;
  highlights: string[];
  blocks: ContentBlock[];
  faqs: FaqItem[];
  related: string[];
  sources: SourceRef[];
  sourceUrl?: string;
  sourceLabel?: string;
  status: 'published' | 'draft' | 'review' | 'archived';
  verifiedAt?: string;
  publishedAt: string; // YYYY-MM-DD
  updatedAt: string;   // YYYY-MM-DD
  indexable: boolean;
  intent: string;
  primaryKeyword?: string;
  searchIntent?: string;
  intentType?: 'informational' | 'commercial' | 'transactional' | 'navigational';
  parentTopic?: string;
  cannibalizationGroup?: string;
  contentKind: 'program' | 'profession' | 'competency' | 'industry' | 'regulation' | 'guide' | 'term' | 'comparison' | 'tool' | 'location';
  courseDetails?: CourseDetails;
  comparisonTable?: ComparisonTable;
  documentChecklist?: { category: string; items: string[] }[];
  primaryCtaText?: string;
  primaryCtaIntent?: 'jadwal' | 'biaya' | 'syarat' | 'perusahaan' | 'daftar' | 'kemnaker_bnsp';
  secondaryCtaText?: string;
  secondaryCtaIntent?: 'jadwal' | 'biaya' | 'syarat' | 'perusahaan' | 'daftar' | 'kemnaker_bnsp';
};

export interface IntentRegistryEntry {
  section: Section;
  slug: string;
  primaryKeyword: string;
  searchIntent: string;
  intentType: 'informational' | 'commercial' | 'transactional' | 'navigational';
  title: string;
  metaTitle: string;
  metaDescription: string;
  parentTopic: string;
  relatedEntities: string[];
  cannibalizationGroup: string;
  status: 'published' | 'draft' | 'review' | 'archived';
  indexable: boolean;
  publishedAt: string;
  updatedAt: string;
}

export type ProgramSeed = {
  slug: string;
  title: string;
  scope: string;
  audience: string[];
  outcomes: string[];
  syllabus: string[];
  pathway: 'kemnaker' | 'bnsp' | 'mixed' | 'practical';
  sourceKeys: string[];
  duration?: string;
  legalBasis?: string;
};

export type ProfessionSeed = {
  slug: string;
  title: string;
  role: string;
  contexts: string[];
  skills: string[];
  nature: 'regulated' | 'scheme' | 'organizational';
};

export type CompetencySeed = {
  slug: string;
  title: string;
  purpose: string;
  inputs: string[];
  outputs: string[];
  errors: string[];
};

export type IndustrySeed = {
  slug: string;
  title: string;
  activities: string[];
  hazards: string[];
  controls: string[];
  roles: string[];
};

export type GuideSeed = {
  slug: string;
  title: string;
  purpose: string;
  inputs: string[];
  steps: string[];
  output: string;
  intentCategory?: 'commercial' | 'technical' | 'procedure';
};

export type TermSeed = {
  slug: string;
  term: string;
  definition: string;
  category: string;
  example: string;
};

export type ComparisonSeed = {
  slug: string;
  title: string;
  left: string;
  right: string;
  distinction: string;
};

export type RegulationSeed = {
  slug: string;
  title: string;
  scope: string;
  status: string;
  source: SourceRef;
};

export type LocationSeed = {
  slug: string;
  name: string;
  province: string;
  sectors: string[];
  ownerLocation?: boolean;
};

export const sectionLabels: Record<Section, string> = {
  pelatihan: 'Program Pelatihan',
  profesi: 'Profesi K3',
  kompetensi: 'Kompetensi K3',
  industri: 'K3 Menurut Industri',
  'regulasi-k3': 'Regulasi K3',
  panduan: 'Panduan Praktis',
  'kamus-k3': 'Kamus K3',
  perbandingan: 'Perbandingan',
  alat: 'Alat & Checklist',
  lokasi: 'Lokasi',
};
