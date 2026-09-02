import { describe, expect, it } from 'vitest';
import { records, indexableRecords } from '../src/lib/content';
import { validateContentSystem } from '../src/lib/validator';

describe('indexable content quality gate', () => {
  it('passes validation for the curated indexable inventory', () => {
    const result = validateContentSystem(records);
    if (!result.valid) {
      console.error('Validation errors:', result.issues.filter((issue) => issue.severity === 'error'));
    }
    expect(result.valid).toBe(true);
    expect(result.indexableCount).toBe(indexableRecords.length);
  });

  it('does not index the generated 2,000-record inventory by default', () => {
    expect(records.length).toBe(2000);
    expect(indexableRecords.length).toBeGreaterThan(0);
    expect(indexableRecords.length).toBeLessThan(records.length);
  });

  it('keeps one URL per title, keyword and search intent', () => {
    const titles = indexableRecords.map((record) => record.title.toLowerCase().trim());
    const keywords = indexableRecords
      .map((record) => record.primaryKeyword?.toLowerCase().trim())
      .filter(Boolean);
    const intents = indexableRecords
      .map((record) => (record.searchIntent || record.intent).toLowerCase().trim())
      .filter(Boolean);

    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(keywords).size).toBe(keywords.length);
    expect(new Set(intents).size).toBe(intents.length);
  });

  it('only links indexable pages to other indexable records', () => {
    const indexableKeys = new Set(indexableRecords.map((record) => `${record.section}/${record.slug}`));
    for (const record of indexableRecords) {
      for (const related of record.related) {
        expect(indexableKeys.has(related), `${record.section}/${record.slug} -> ${related}`).toBe(true);
      }
    }
  });
});
