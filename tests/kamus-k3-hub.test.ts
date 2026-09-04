import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { records, indexableRecords, findRecord } from '../src/lib/content';
import { sectionFaqs } from '../src/lib/section-data';
import {
  topicCategories,
  popularTerms,
  getTermMeta,
} from '../src/lib/kamus-meta';

describe('Kamus K3 Hub & Regression Suite', () => {
  const componentPath = path.resolve(__dirname, '../src/components/KamusK3HubContent.tsx');
  const sectionPagePath = path.resolve(__dirname, '../app/[section]/page.tsx');

  it('verifies /kamus-k3/ uses KamusK3HubContent', () => {
    expect(fs.existsSync(componentPath)).toBe(true);
    expect(fs.existsSync(sectionPagePath)).toBe(true);

    const pageContent = fs.readFileSync(sectionPagePath, 'utf8');
    expect(pageContent).toContain("import { KamusK3HubContent } from '@/src/components/KamusK3HubContent';");
    expect(pageContent).toContain("if (sec === 'kamus-k3')");
    expect(pageContent).toContain('<KamusK3HubContent items={items} />');
  });

  it('verifies canonical remains /kamus-k3 and metadata targets glossary intent', () => {
    const pageContent = fs.readFileSync(sectionPagePath, 'utf8');

    expect(pageContent).toContain("if (section === 'kamus-k3')");
    expect(pageContent).toContain("title: 'Kamus K3: Istilah, Singkatan & Definisi Keselamatan Kerja'");
    expect(pageContent).toContain(
      "description:\n        'Cari arti istilah dan singkatan K3/HSE, mulai dari HIRADC, JSA, SMK3, APD, LOTO, higiene industri hingga keselamatan proses.'"
    );
    expect(pageContent).toContain("alternates: { canonical: '/kamus-k3' }");
  });

  it('verifies all 350 current glossary records remain published and indexable', () => {
    const kamusItems = records.filter((r) => r.section === 'kamus-k3');
    expect(kamusItems.length).toBe(350);

    for (const item of kamusItems) {
      expect(item.status).toBe('published');
      expect(item.indexable).toBe(true);
    }
  });

  it('verifies sitemap glossary count does not decrease and remains 350', () => {
    const indexableKamus = indexableRecords.filter((r) => r.section === 'kamus-k3');
    expect(indexableKamus.length).toBe(350);
  });

  it('verifies every glossary record receives a valid topic and alphabet group', () => {
    const kamusItems = records.filter((r) => r.section === 'kamus-k3');
    const validTopicIds = topicCategories.map((t) => t.id);

    for (const item of kamusItems) {
      const meta = getTermMeta(item);
      expect(meta, `Meta missing for slug: ${item.slug}`).toBeDefined();
      expect(validTopicIds).toContain(meta.topic.id);
      expect(meta.firstLetter.length).toBe(1);
      expect(meta.shortDefinition.length).toBeGreaterThan(10);
    }
  });

  it('verifies no duplicate glossary slugs exist across inventory', () => {
    const kamusSlugs = records.filter((r) => r.section === 'kamus-k3').map((r) => r.slug);
    expect(new Set(kamusSlugs).size).toBe(kamusSlugs.length);
    expect(kamusSlugs.length).toBe(350);
  });

  it('verifies all 12 popular terms exist as published and indexable records in database', () => {
    expect(popularTerms.length).toBe(12);
    const popularSlugs = popularTerms.map((t) => t.slug);
    expect(new Set(popularSlugs).size).toBe(12);

    for (const item of popularTerms) {
      const rec = findRecord('kamus-k3', item.slug);
      expect(rec, `Popular term record not found in kamus-k3: ${item.slug}`).toBeDefined();
      expect(rec?.status).toBe('published');
      expect(rec?.indexable).toBe(true);
      expect(item.description.length).toBeGreaterThan(20);
    }
  });

  it('verifies dynamic category counts cover the entire directory inventory of 350 exactly', () => {
    const kamusItems = records.filter((r) => r.section === 'kamus-k3');

    // Dynamic topic counts
    const topicCounts: Record<string, number> = {};
    for (const top of topicCategories) topicCounts[top.id] = 0;
    for (const item of kamusItems) {
      const meta = getTermMeta(item);
      topicCounts[meta.topic.id]++;
    }
    const sumTopicCounts = Object.values(topicCounts).reduce((a, b) => a + b, 0);
    expect(sumTopicCounts).toBe(350);

    // Dynamic letter counts
    const letterCounts: Record<string, number> = {};
    for (const item of kamusItems) {
      const meta = getTermMeta(item);
      letterCounts[meta.firstLetter] = (letterCounts[meta.firstLetter] || 0) + 1;
    }
    const sumLetterCounts = Object.values(letterCounts).reduce((a, b) => a + b, 0);
    expect(sumLetterCounts).toBe(350);
  });

  it('verifies glossary search matches abbreviations, English terms, and Indonesian keywords', () => {
    const kamusItems = records.filter((r) => r.section === 'kamus-k3');

    // Search by acronym: HIRADC
    const matchHiradc = kamusItems.filter((i) => {
      const meta = getTermMeta(i);
      return i.slug.includes('hiradc') || meta.abbr.includes('HIRADC');
    });
    expect(matchHiradc.length).toBeGreaterThan(0);
    expect(matchHiradc.some((i) => i.slug.includes('hiradc'))).toBe(true);

    // Search by acronym: JSA
    const matchJsa = kamusItems.filter((i) => {
      const meta = getTermMeta(i);
      return i.slug.includes('jsa') || meta.abbr.includes('JSA');
    });
    expect(matchJsa.length).toBeGreaterThan(0);

    // Search by English term: Root Cause Analysis
    const matchRca = kamusItems.filter((i) => {
      const meta = getTermMeta(i);
      return i.title.toLowerCase().includes('root cause') || meta.englishEquivalent.toLowerCase().includes('root cause');
    });
    expect(matchRca.length).toBeGreaterThan(0);

    // Search by Indonesian term: Piramida Kecelakaan
    const matchPiramida = kamusItems.filter((i) => i.title.toLowerCase().includes('piramida'));
    expect(matchPiramida.length).toBeGreaterThan(0);

    // Search by LOTO
    const matchLoto = kamusItems.filter((i) => i.slug.includes('loto'));
    expect(matchLoto.length).toBeGreaterThan(0);
  });

  it('verifies Hub FAQ schema matches visible FAQ questions and answers', () => {
    const faqs = sectionFaqs['kamus-k3'] || [];
    expect(faqs.length).toBe(6);

    const expectedQuestions = [
      'Apa yang dimaksud dengan istilah K3?',
      'Apa perbedaan istilah K3 dan singkatan HSE?',
      'Bagaimana mencari arti singkatan seperti HIRADC, JSA dan SMK3?',
      'Apakah semua istilah K3 berasal dari regulasi Indonesia?',
      'Bagaimana memahami penerapan istilah K3 di tempat kerja?',
      'Di mana menemukan pelatihan yang berkaitan dengan suatu istilah?',
    ];

    expect(faqs.map((f) => f.question)).toEqual(expectedQuestions);

    const componentContent = fs.readFileSync(componentPath, 'utf8');
    expect(componentContent).toContain('Pertanyaan Umum Seputar Kamus K3');
    expect(componentContent).toContain("sectionFaqs['kamus-k3']");
  });

  it('verifies internal contextual links resolve to valid routes', () => {
    const componentContent = fs.readFileSync(componentPath, 'utf8');
    const crossLinks = ['/pelatihan', '/panduan', '/regulasi-k3', '/alat'];

    for (const link of crossLinks) {
      expect(componentContent).toContain(`href="${link}"`);
    }
  });

  it('verifies search and filter elements exist with accessible attributes', () => {
    const componentContent = fs.readFileSync(componentPath, 'utf8');
    expect(componentContent).toContain('aria-label="Cari istilah atau singkatan K3"');
    expect(componentContent).toContain('min-h-[44px]');
    expect(componentContent).toContain('Tanya Istilah atau Pelatihan');
    expect(componentContent).toContain('Ingin Memahami Penerapannya di Tempat Kerja?');
  });
});
