import { type ContentRecord, type Section } from './content-types';
import { pelatihanRecords } from '../content/pelatihan';
import { kompetensiRecords } from '../content/kompetensi';
import { profesiRecords } from '../content/profesi';
import { kamusK3Records } from '../content/kamus-k3';
import { regulasiK3Records } from '../content/regulasi-k3';
import { panduanRecords } from '../content/panduan';
import { alatRecords } from '../content/alat';
import { industriRecords } from '../content/industri';
import { perbandinganRecords } from '../content/perbandingan';
import { lokasiRecords } from '../content/lokasi';
import { priorityRecords } from './priority-content';

export { sectionLabels, sections, type ContentRecord, type Section } from './content-types';

const rawRecords: ContentRecord[] = [
  ...pelatihanRecords,
  ...kompetensiRecords,
  ...profesiRecords,
  ...kamusK3Records,
  ...regulasiK3Records,
  ...panduanRecords,
  ...alatRecords,
  ...industriRecords,
  ...perbandinganRecords,
  ...lokasiRecords,
  ...priorityRecords,
];

const uniqueRecordsMap = new Map<string, ContentRecord>();
for (const record of rawRecords) {
  uniqueRecordsMap.set(`${record.section}/${record.slug}`, record);
}

const uniqueRecords = Array.from(uniqueRecordsMap.values());
const recordKeys = new Set(uniqueRecords.map((r) => `${r.section}/${r.slug}`));

const fallbackBySection: Record<Section, string[]> = {
  pelatihan: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'panduan/materi-ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'perbandingan/bnsp-vs-kemnaker'],
  profesi: ['profesi/ahli-k3-umum', 'pelatihan/ahli-k3-umum', 'panduan/tugas-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
  kompetensi: ['panduan/materi-ahli-k3-umum', 'pelatihan/ahli-k3-umum', 'profesi/ahli-k3-umum', 'kamus-k3/kompetensi'],
  industri: ['pelatihan/ahli-k3-umum', 'panduan/tugas-ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'regulasi-k3/uu-1-1970'],
  'regulasi-k3': ['regulasi-k3/uu-1-1970', 'regulasi-k3/pp-50-2012', 'pelatihan/ahli-k3-umum', 'panduan/tugas-ahli-k3-umum'],
  panduan: ['panduan/syarat-ahli-k3-umum', 'panduan/materi-ahli-k3-umum', 'panduan/tugas-ahli-k3-umum', 'panduan/biaya-pelatihan-k3'],
  'kamus-k3': ['pelatihan/ahli-k3-umum', 'panduan/materi-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker', 'regulasi-k3/uu-1-1970'],
  perbandingan: ['perbandingan/bnsp-vs-kemnaker', 'pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'panduan/biaya-pelatihan-k3'],
  alat: ['alat/matriks-risiko', 'pelatihan/ahli-k3-umum', 'panduan/materi-ahli-k3-umum'],
  lokasi: ['pelatihan/ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'perbandingan/bnsp-vs-kemnaker', 'kontak'],
};

export const records: ContentRecord[] = uniqueRecords.map((record) => {
  const candidates = [...(record.related || []), ...(fallbackBySection[record.section as Section] || [])].filter(
    (path) => path !== `${record.section}/${record.slug}` && recordKeys.has(path)
  );
  return { ...record, related: [...new Set(candidates)].slice(0, 6) };
});

export const indexableRecords = records.filter((record) => record.indexable && record.status === 'published');
export const findRecord = (section: string, slug: string) => records.find((record) => record.section === section && record.slug === slug);
export const sectionRecords = (section: string) => records.filter((record) => record.section === section && record.indexable && record.status === 'published');
