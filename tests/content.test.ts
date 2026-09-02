import { describe, expect, it } from 'vitest';
import { records, indexableRecords, sections, findRecord } from '../src/lib/content';
import { site } from '../src/lib/site';

describe('SEO content inventory & priority pages', () => {
  it('has production domain configured to https://pelatihan-k3.co.id', () => {
    expect(site.url).toBe('https://pelatihan-k3.co.id');
    expect(site.domain).toBe('pelatihan-k3.co.id');
  });

  it('has essential priority commercial and guide pages', () => {
    const priorityPaths = [
      ['pelatihan', 'ahli-k3-umum'],
      ['panduan', 'syarat-ahli-k3-umum'],
      ['panduan', 'materi-ahli-k3-umum'],
      ['panduan', 'tugas-ahli-k3-umum'],
      ['panduan', 'biaya-pelatihan-k3'],
      ['perbandingan', 'bnsp-vs-kemnaker'],
      ['profesi', 'ahli-k3-umum'],
    ];

    for (const [section, slug] of priorityPaths) {
      const rec = findRecord(section, slug);
      expect(rec, `Missing priority record: ${section}/${slug}`).toBeDefined();
      expect(rec?.indexable, `Priority record must be indexable: ${section}/${slug}`).toBe(true);
      expect(rec?.description.length).toBeGreaterThan(50);
      expect(rec?.answer.length).toBeGreaterThan(80);
      expect(rec?.highlights.length).toBeGreaterThanOrEqual(4);
    }
  });

  it('has course details for pelatihan/ahli-k3-umum', () => {
    const ak3u = findRecord('pelatihan', 'ahli-k3-umum');
    expect(ak3u?.courseDetails).toBeDefined();
    expect(ak3u?.courseDetails?.duration).toContain('120');
    expect(ak3u?.courseDetails?.syllabusModules?.length).toBeGreaterThanOrEqual(3);
    expect(ak3u?.courseDetails?.prerequisites?.length).toBeGreaterThanOrEqual(3);
  });

  it('has comparison matrix for perbandingan/bnsp-vs-kemnaker', () => {
    const comp = findRecord('perbandingan', 'bnsp-vs-kemnaker');
    expect(comp?.comparisonTable).toBeDefined();
    expect(comp?.comparisonTable?.rows.length).toBeGreaterThanOrEqual(5);
  });

  it('has document checklist for panduan/syarat-ahli-k3-umum', () => {
    const syarat = findRecord('panduan', 'syarat-ahli-k3-umum');
    expect(syarat?.documentChecklist).toBeDefined();
    expect(syarat?.documentChecklist?.length).toBeGreaterThanOrEqual(2);
  });

  it('has unique canonical entity keys and titles', () => {
    const keys = records.map((r) => `${r.section}/${r.slug}`);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('uses safe slugs and valid sections', () => {
    for (const r of records) {
      expect(sections).toContain(r.section);
      expect(r.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(r.title).not.toMatch(/undefined|null|placeholder/i);
    }
  });

  it('resolves contextual relationships', () => {
    for (const r of indexableRecords) {
      for (const path of r.related) {
        const [section, slug] = path.split('/');
        expect(findRecord(section, slug), `${r.section}/${r.slug} -> ${path}`).toBeTruthy();
      }
    }
  });
});
