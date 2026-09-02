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
const curatedKeys = new Set(priorityRecords.map((record) => `${record.section}/${record.slug}`));

/**
 * Generated inventory is retained for editorial rewriting, but only individually
 * curated priority records may be indexed. Adding a route to a generator never
 * makes it eligible for search automatically.
 */
export const records: ContentRecord[] = uniqueRecords.map((record) => {
  const key = `${record.section}/${record.slug}`;
  const isCurated = curatedKeys.has(key);
  const related = (record.related || []).filter(
    (path) => path !== key && curatedKeys.has(path) && uniqueRecordsMap.has(path)
  );

  return {
    ...record,
    indexable: isCurated && record.indexable && record.status === 'published',
    related: [...new Set(related)].slice(0, 6),
  };
});

export const indexableRecords = records.filter(
  (record) => record.indexable && record.status === 'published'
);
export const findRecord = (section: string, slug: string) =>
  records.find((record) => record.section === section && record.slug === slug);
export const sectionRecords = (section: string) =>
  indexableRecords.filter((record) => record.section === section);
