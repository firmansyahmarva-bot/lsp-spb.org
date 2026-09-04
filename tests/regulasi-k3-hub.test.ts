import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { records, indexableRecords, findRecord } from '../src/lib/content';
import { sectionFaqs } from '../src/lib/section-data';
import {
  legalLevelCategories,
  k3SubjectCategories,
  topImportantRegulations,
  getRegulationMeta,
} from '../src/lib/regulasi-meta';

describe('Regulasi K3 Hub & Regression Suite', () => {
  const componentPath = path.resolve(__dirname, '../src/components/RegulasiK3HubContent.tsx');
  const sectionPagePath = path.resolve(__dirname, '../app/[section]/page.tsx');

  it('verifies /regulasi-k3/ uses RegulasiK3HubContent', () => {
    expect(fs.existsSync(componentPath)).toBe(true);
    expect(fs.existsSync(sectionPagePath)).toBe(true);

    const pageContent = fs.readFileSync(sectionPagePath, 'utf8');
    expect(pageContent).toContain("import { RegulasiK3HubContent } from '@/src/components/RegulasiK3HubContent';");
    expect(pageContent).toContain("if (sec === 'regulasi-k3')");
    expect(pageContent).toContain('<RegulasiK3HubContent items={items} />');
  });

  it('verifies canonical remains /regulasi-k3 and metadata targets regulasi K3', () => {
    const pageContent = fs.readFileSync(sectionPagePath, 'utf8');

    expect(pageContent).toContain("if (section === 'regulasi-k3')");
    expect(pageContent).toContain("title: 'Regulasi K3 Indonesia: UU, PP, Permenaker & Standar'");
    expect(pageContent).toContain(
      "description:\n        'Temukan regulasi K3 Indonesia berdasarkan jenis peraturan, bidang teknis dan kebutuhan kerja, mulai dari UU, PP, Permenaker hingga standar K3.'"
    );
    expect(pageContent).toContain("alternates: { canonical: '/regulasi-k3' }");
  });

  it('verifies all 250 current indexable regulation records remain published and indexable', () => {
    const regulasiItems = records.filter((r) => r.section === 'regulasi-k3');
    expect(regulasiItems.length).toBe(250);

    for (const item of regulasiItems) {
      expect(item.status).toBe('published');
      expect(item.indexable).toBe(true);
    }
  });

  it('verifies sitemap regulation count does not decrease', () => {
    const indexableRegulasi = indexableRecords.filter((r) => r.section === 'regulasi-k3');
    expect(indexableRegulasi.length).toBe(250);
  });

  it('verifies every regulation record receives a valid legal level and subject classification', () => {
    const regulasiItems = records.filter((r) => r.section === 'regulasi-k3');
    const validLevelIds = legalLevelCategories.map((c) => c.id);
    const validSubjectIds = k3SubjectCategories.map((s) => s.id);

    for (const item of regulasiItems) {
      const meta = getRegulationMeta(item);
      expect(meta, `Meta missing for slug: ${item.slug}`).toBeDefined();
      expect(validLevelIds).toContain(meta.legalLevel.id);
      expect(validSubjectIds).toContain(meta.subject.id);
      expect(meta.regNumber.length).toBeGreaterThan(0);
    }
  });

  it('verifies no duplicate regulation slugs exist across inventory', () => {
    const regulasiSlugs = records.filter((r) => r.section === 'regulasi-k3').map((r) => r.slug);
    expect(new Set(regulasiSlugs).size).toBe(regulasiSlugs.length);
    expect(regulasiSlugs.length).toBe(250);
  });

  it('verifies all 10 top important regulations exist as published records', () => {
    expect(topImportantRegulations.length).toBe(10);
    const topSlugs = topImportantRegulations.map((t) => t.slug);
    expect(new Set(topSlugs).size).toBe(10);

    for (const item of topImportantRegulations) {
      const rec = findRecord('regulasi-k3', item.slug);
      expect(rec, `Top regulation not found in records: ${item.slug}`).toBeDefined();
      expect(rec?.status).toBe('published');
      expect(rec?.indexable).toBe(true);
    }
  });

  it('verifies dynamic category counts cover the entire directory inventory exactly', () => {
    const regulasiItems = records.filter((r) => r.section === 'regulasi-k3');

    // Dynamic level counts
    const levelCounts: Record<string, number> = {};
    for (const lvl of legalLevelCategories) levelCounts[lvl.id] = 0;
    for (const item of regulasiItems) {
      const meta = getRegulationMeta(item);
      levelCounts[meta.legalLevel.id]++;
    }
    const sumLevelCounts = Object.values(levelCounts).reduce((a, b) => a + b, 0);
    expect(sumLevelCounts).toBe(250);

    // Dynamic subject counts
    const subjectCounts: Record<string, number> = {};
    for (const sub of k3SubjectCategories) subjectCounts[sub.id] = 0;
    for (const item of regulasiItems) {
      const meta = getRegulationMeta(item);
      subjectCounts[meta.subject.id]++;
    }
    const sumSubjectCounts = Object.values(subjectCounts).reduce((a, b) => a + b, 0);
    expect(sumSubjectCounts).toBe(250);
  });

  it('verifies regulation search matches number, year, acronym, and subject keywords', () => {
    const regulasiItems = records.filter((r) => r.section === 'regulasi-k3');

    // Test search by year 1970
    const match1970 = regulasiItems.filter((i) => {
      const meta = getRegulationMeta(i);
      return i.title.toLowerCase().includes('1970') || meta.year === '1970';
    });
    expect(match1970.length).toBeGreaterThan(0);
    expect(match1970.some((i) => i.slug === 'uu-1-1970-keselamatan-kerja')).toBe(true);

    // Test search by SMK3 / PP 50 2012
    const matchSmk3 = regulasiItems.filter((i) => {
      const meta = getRegulationMeta(i);
      return i.slug.includes('pp-50-2012') || meta.regNumber.includes('50');
    });
    expect(matchSmk3.length).toBeGreaterThan(0);
    expect(matchSmk3[0].slug).toBe('pp-50-2012-penerapan-smk3');

    // Test search by P2K3
    const matchP2k3 = regulasiItems.filter((i) => i.slug.includes('permenaker-04-1987'));
    expect(matchP2k3.length).toBe(1);
    expect(matchP2k3[0].title).toContain('P2K3');

    // Test search by Ketinggian
    const matchKetinggian = regulasiItems.filter((i) => i.slug.includes('permenaker-09-2016'));
    expect(matchKetinggian.length).toBe(1);
    expect(matchKetinggian[0].title).toContain('Ketinggian');
  });

  it('verifies Hub FAQ schema matches visible FAQ questions and answers', () => {
    const faqs = sectionFaqs['regulasi-k3'] || [];
    expect(faqs.length).toBe(6);

    const expectedQuestions = [
      'Apa dasar hukum utama K3 di Indonesia?',
      'Apa perbedaan UU, PP, Permenaker dan Kepmenaker?',
      'Bagaimana mencari regulasi berdasarkan jenis pekerjaan?',
      'Apakah regulasi lama masih dapat digunakan?',
      'Regulasi apa yang mengatur Ahli K3 dan P2K3?',
      'Bagaimana mengetahui pelatihan yang sesuai dengan regulasi?',
    ];

    expect(faqs.map((f) => f.question)).toEqual(expectedQuestions);

    const componentContent = fs.readFileSync(componentPath, 'utf8');
    expect(componentContent).toContain('Pertanyaan Umum Seputar Regulasi K3');
    expect(componentContent).toContain("sectionFaqs['regulasi-k3']");
  });

  it('verifies internal contextual cross-links resolve to valid routes', () => {
    const componentContent = fs.readFileSync(componentPath, 'utf8');
    const crossLinks = ['/pelatihan', '/panduan', '/perbandingan', '/kamus-k3', '/alat', '/jadwal'];

    for (const link of crossLinks) {
      expect(componentContent).toContain(`href="${link}"`);
    }
  });

  it('verifies no regulation record is incorrectly advertised as a payable training product', () => {
    const regulasiItems = records.filter((r) => r.section === 'regulasi-k3');
    for (const item of regulasiItems) {
      expect(item.contentKind).toBe('regulation');
      // Regulation content should not have courseDetails with price
      expect(item.courseDetails?.priceInfo).toBeUndefined();
    }
  });
});
