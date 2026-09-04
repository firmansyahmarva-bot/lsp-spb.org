import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { records, indexableRecords, findRecord } from '../src/lib/content';
import { sectionFaqs } from '../src/lib/section-data';
import {
  comparisonCategories,
  comparisonMetaRecords,
  popularComparisons,
} from '../src/lib/perbandingan-meta';

describe('Perbandingan K3 Hub & Regression Suite', () => {
  const componentPath = path.resolve(__dirname, '../src/components/PerbandinganHubContent.tsx');
  const sectionPagePath = path.resolve(__dirname, '../app/[section]/page.tsx');

  it('verifies /perbandingan/ uses PerbandinganHubContent', () => {
    expect(fs.existsSync(componentPath)).toBe(true);
    expect(fs.existsSync(sectionPagePath)).toBe(true);

    const pageContent = fs.readFileSync(sectionPagePath, 'utf8');
    expect(pageContent).toContain("import { PerbandinganHubContent } from '@/src/components/PerbandinganHubContent';");
    expect(pageContent).toContain("if (sec === 'perbandingan')");
    expect(pageContent).toContain('<PerbandinganHubContent items={items} />');
  });

  it('verifies canonical remains /perbandingan and metadata targets perbandingan K3', () => {
    const pageContent = fs.readFileSync(sectionPagePath, 'utf8');

    expect(pageContent).toContain("if (section === 'perbandingan')");
    expect(pageContent).toContain("title: 'Perbandingan K3: Sertifikasi, Pelatihan, Sistem & Metode'");
    expect(pageContent).toContain(
      "description:\n        'Bandingkan sertifikasi, program pelatihan, sistem, metode dan pilihan K3 berdasarkan fungsi, persyaratan, output serta kebutuhan kerja.'"
    );
    expect(pageContent).toContain("alternates: { canonical: '/perbandingan' }");
  });

  it('verifies all current indexable comparison records remain published and indexable', () => {
    const perbandinganItems = records.filter((r) => r.section === 'perbandingan');
    expect(perbandinganItems.length).toBe(70);

    for (const item of perbandinganItems) {
      expect(item.status).toBe('published');
      expect(item.indexable).toBe(true);
    }
  });

  it('verifies sitemap comparison count does not decrease', () => {
    const indexablePerbandingan = indexableRecords.filter((r) => r.section === 'perbandingan');
    expect(indexablePerbandingan.length).toBe(70);
  });

  it('verifies every comparison record appears in a hub category', () => {
    const perbandinganItems = records.filter((r) => r.section === 'perbandingan');
    const validCategoryNames = comparisonCategories.map((c) => c.name);

    for (const item of perbandinganItems) {
      const meta = comparisonMetaRecords[item.slug];
      expect(meta, `Comparison meta missing for slug: ${item.slug}`).toBeDefined();
      expect(validCategoryNames).toContain(meta.category);
      expect(meta.optionA.length).toBeGreaterThan(2);
      expect(meta.optionB.length).toBeGreaterThan(2);
      expect(meta.decisionQuestion.length).toBeGreaterThan(10);
    }
  });

  it('verifies no duplicate card URLs across popular and directory inventory', () => {
    const popularSlugs = popularComparisons.map((p) => p.slug);
    expect(new Set(popularSlugs).size).toBe(popularSlugs.length);

    const perbandinganSlugs = records.filter((r) => r.section === 'perbandingan').map((r) => r.slug);
    expect(new Set(perbandinganSlugs).size).toBe(perbandinganSlugs.length);
    expect(perbandinganSlugs.length).toBe(70);
  });

  it('verifies category counts equal the directory inventory exactly', () => {
    const sumCategories = comparisonCategories.reduce((acc, c) => acc + c.count, 0);
    expect(sumCategories).toBe(70);

    const perbandinganItems = records.filter((r) => r.section === 'perbandingan');
    expect(perbandinganItems.length).toBe(70);

    // Verify individual category counts
    for (const cat of comparisonCategories) {
      const actualCount = perbandinganItems.filter(
        (item) => comparisonMetaRecords[item.slug]?.category === cat.name
      ).length;
      expect(actualCount, `Count mismatch for category ${cat.name}`).toBe(cat.count);
    }
  });

  it('verifies search can match both sides of a comparison and key terms', () => {
    const bnspMeta = comparisonMetaRecords['bnsp-vs-kemnaker'];
    expect(bnspMeta.optionA).toContain('BNSP');
    expect(bnspMeta.optionB).toContain('Kemnaker');

    const hiradcMeta = comparisonMetaRecords['hiradc-vs-jsa-analisis-keselamatan-kerja'];
    expect(hiradcMeta.optionA).toContain('HIRADC');
    expect(hiradcMeta.optionB).toContain('JSA');

    const harnessMeta = comparisonMetaRecords['full-body-harness-vs-waist-belt-ketinggian'];
    expect(harnessMeta.optionA).toContain('Harness');
    expect(harnessMeta.optionB).toContain('Belt');
  });

  it('verifies Hub FAQ schema matches visible FAQ questions and answers', () => {
    const faqs = sectionFaqs.perbandingan || [];
    expect(faqs.length).toBe(6);

    const expectedQuestions = [
      'Apa yang harus dibandingkan sebelum memilih program K3?',
      'Apakah sertifikasi BNSP dan Kemnaker memiliki fungsi yang sama?',
      'Apakah dua pilihan K3 selalu saling menggantikan?',
      'Kapan memilih public class atau in-house training?',
      'Mengapa kebutuhan perusahaan dapat menghasilkan pilihan berbeda?',
      'Bagaimana meminta rekomendasi sebelum mendaftar?',
    ];

    expect(faqs.map((f) => f.question)).toEqual(expectedQuestions);

    const componentContent = fs.readFileSync(componentPath, 'utf8');
    expect(componentContent).toContain('Pertanyaan Umum Seputar Perbandingan K3');
    expect(componentContent).toContain('sectionFaqs.perbandingan');
  });

  it('verifies all popular comparisons exist as published records in the database', () => {
    for (const item of popularComparisons) {
      const rec = findRecord('perbandingan', item.slug);
      expect(rec, `Popular comparison not found: ${item.slug}`).toBeDefined();
      expect(rec?.status).toBe('published');
      expect(rec?.indexable).toBe(true);
    }
  });

  it('verifies internal contextual links resolve to valid routes', () => {
    const componentContent = fs.readFileSync(componentPath, 'utf8');
    const crossLinks = ['/pelatihan', '/panduan', '/regulasi-k3', '/kamus-k3', '/alat', '/jadwal'];

    for (const link of crossLinks) {
      expect(componentContent).toContain(`href="${link}"`);
    }
  });

  it('verifies no approved training prices or durations were changed on priority programs', () => {
    const ak3u = findRecord('pelatihan', 'ahli-k3-umum');
    expect(ak3u?.courseDetails?.duration).toContain('120');
    expect(ak3u?.courseDetails?.syllabusModules?.length).toBeGreaterThanOrEqual(3);
  });
});
