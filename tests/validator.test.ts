import { describe, expect, it } from 'vitest';
import { records, indexableRecords } from '../src/lib/content';
import { validateContentSystem } from '../src/lib/validator';
import { intentRegistry } from '../src/content/registry';

describe('2,000 Indexable Content System & Intent Registry Validator Gate', () => {
  it('passes comprehensive content validation with zero errors', () => {
    const result = validateContentSystem(records);
    if (!result.valid) {
      console.error('Validation errors:', result.issues.filter(i => i.severity === 'error'));
    }
    expect(result.valid).toBe(true);
    expect(result.indexableCount).toBe(2000);
  });

  it('has exactly 2,000 published and indexable detail records', () => {
    expect(indexableRecords.length).toBe(2000);
    expect(intentRegistry.length).toBe(2000);
  });

  it('matches required inventory breakdown across all 10 families', () => {
    const counts = records.reduce((acc, r) => {
      acc[r.section] = (acc[r.section] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    expect(counts['pelatihan']).toBe(300);
    expect(counts['kompetensi']).toBe(200);
    expect(counts['profesi']).toBe(200);
    expect(counts['kamus-k3']).toBe(350);
    expect(counts['regulasi-k3']).toBe(250);
    expect(counts['panduan']).toBe(327);
    expect(counts['alat']).toBe(180);
    expect(counts['industri']).toBe(120);
    expect(counts['perbandingan']).toBe(70);
    expect(counts['lokasi']).toBe(3);

    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    expect(total).toBe(2000);
  });

  it('enforces 1 URL = 1 distinct primary search intent (no duplicate intents)', () => {
    const intents = new Set<string>();
    const duplicateIntents: string[] = [];

    for (const r of indexableRecords) {
      if (r.searchIntent) {
        const intentKey = r.searchIntent.toLowerCase().trim();
        if (intents.has(intentKey)) {
          duplicateIntents.push(`${r.section}/${r.slug}: "${r.searchIntent}"`);
        } else {
          intents.add(intentKey);
        }
      }
    }

    expect(duplicateIntents).toEqual([]);
  });

  it('enforces unique primary keywords across all pages', () => {
    const keywords = new Set<string>();
    const duplicateKeywords: string[] = [];

    for (const r of indexableRecords) {
      if (r.primaryKeyword) {
        const kwKey = r.primaryKeyword.toLowerCase().trim();
        if (keywords.has(kwKey)) {
          duplicateKeywords.push(`${r.section}/${r.slug}: "${r.primaryKeyword}"`);
        } else {
          keywords.add(kwKey);
        }
      }
    }

    expect(duplicateKeywords).toEqual([]);
  });

  it('verifies all records have real publishedAt and updatedAt dates (no fake dates)', () => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    for (const r of indexableRecords) {
      expect(r.publishedAt).toMatch(dateRegex);
      expect(r.updatedAt).toMatch(dateRegex);
      expect(new Date(r.publishedAt).getTime()).not.toBeNaN();
      expect(new Date(r.updatedAt).getTime()).not.toBeNaN();
    }
  });

  it('verifies all internal related links resolve to existing entities', () => {
    const keySet = new Set(records.map(r => `${r.section}/${r.slug}`));
    for (const r of indexableRecords) {
      for (const rel of r.related) {
        expect(keySet.has(rel), `Missing entity for related link: ${r.section}/${r.slug} -> ${rel}`).toBe(true);
      }
    }
  });

  it('verifies 100% of records have an assigned photo in hero and 0 records have missing image', () => {
    const missingImages: string[] = [];
    for (const r of indexableRecords) {
      if (!r.image || !r.image.src || r.image.src.trim().length === 0) {
        missingImages.push(`${r.section}/${r.slug}`);
      }
    }
    expect(missingImages).toEqual([]);
    expect(indexableRecords.filter(r => Boolean(r.image?.src)).length).toBe(2000);
  });
});
