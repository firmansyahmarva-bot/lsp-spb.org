import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { records } from '../src/lib/content';
import { sectionFaqs } from '../src/lib/section-data';

describe('Kompetensi K3 Hub Validation', () => {
  const componentPath = path.resolve(__dirname, '../src/components/KompetensiHubContent.tsx');
  const sectionPagePath = path.resolve(__dirname, '../app/[section]/page.tsx');

  it('verifies dedicated metadata and self-referencing canonical in app/[section]/page.tsx', () => {
    expect(fs.existsSync(sectionPagePath)).toBe(true);
    const pageContent = fs.readFileSync(sectionPagePath, 'utf8');

    expect(pageContent).toContain("if (section === 'kompetensi')");
    expect(pageContent).toContain("title: 'Kompetensi K3: Jenis Keahlian dan Keterampilan HSE'");
    expect(pageContent).toContain(
      "description:\n        'Panduan kompetensi K3 untuk memahami keahlian teknis, operasional dan manajerial HSE serta memilih kemampuan yang relevan dengan pekerjaan.'"
    );
    expect(pageContent).toContain("alternates: { canonical: '/kompetensi' }");

    // Must not contain forbidden promotional phrases
    expect(pageContent).not.toContain('daftar lengkap kompetensi');
    expect(pageContent).not.toContain('panduan resmi kompetensi');
  });

  it('verifies semantic structure with exactly one H1 and proper headings', () => {
    expect(fs.existsSync(componentPath)).toBe(true);
    const content = fs.readFileSync(componentPath, 'utf8');

    // Exactly one H1
    const h1Matches = content.match(/<h1[\s>]/g) || [];
    expect(h1Matches.length).toBe(1);
    expect(content).toContain('Kompetensi K3: Keahlian yang Dibutuhkan Praktisi Keselamatan Kerja');

    // Key section headings
    expect(content).toContain('Perbedaan Antara Kompetensi, Pelatihan, Sertifikasi, dan Profesi');
    expect(content).toContain('Kelompok Keahlian Berdasarkan Kebutuhan Kerja');
    expect(content).toContain('Panduan Memilih Kompetensi K3 yang Sesuai Kebutuhan');
    expect(content).toContain('Tahapan Pengembangan Keahlian (Progresi Belajar)');
    expect(content).toContain('Jelajahi Direktori Kompetensi K3');
    expect(content).toContain('Pertanyaan Umum Seputar Kompetensi K3 (FAQ)');
    expect(content).toContain('Membutuhkan Bimbingan Pemilihan Jalur Kompetensi K3?');
  });

  it('verifies the four conceptual distinctions are clearly explained', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // Concept table headers
    expect(content).toContain('Konsep');
    expect(content).toContain('Makna & Karakteristik');
    expect(content).toContain('Contoh Nyata di Tempat Kerja');

    // The 4 Concepts
    expect(content).toContain('Kompetensi K3');
    expect(content).toContain('Pelatihan K3');
    expect(content).toContain('Sertifikasi Kompetensi');
    expect(content).toContain('Profesi atau Jabatan K3');

    // Natural links to related hubs
    expect(content).toContain('href="/pelatihan"');
    expect(content).toContain('href="/profesi"');
    expect(content).toContain('href="/perbandingan/bnsp-vs-kemnaker"');
  });

  it('verifies the 8 browsing themes are present without claiming universal government taxonomy', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    expect(content).toContain('Identifikasi Bahaya dan Penilaian Risiko');
    expect(content).toContain('Investigasi Insiden dan Root-Cause Analysis');
    expect(content).toContain('Audit, Inspeksi dan Kepatuhan Regulasi');
    expect(content).toContain('Tanggap Darurat dan Proteksi Kebakaran');
    expect(content).toContain('Kesehatan Kerja, Higiene Industri dan Ergonomi');
    expect(content).toContain('Keselamatan Operasional, Alat Berat dan Pabrikasi');
    expect(content).toContain('Manajemen K3, Komunikasi dan Pelatihan');
    expect(content).toContain('Analisis Risiko Spesialis dan Rekayasa Teknis');

    // Must disclose that these are editorial groupings, not rigid government taxonomy
    expect(content).toContain('panduan eksplorasi, bukan sebagai taksonomi regulasi pemerintah yang kaku');
  });

  it('verifies the searchable directory is rendered exactly once and preserves all cards', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // HubSearchFilter must be rendered exactly once
    const filterMatches = content.match(/<HubSearchFilter\s/g) || [];
    expect(filterMatches.length).toBe(1);
    expect(content).toContain('items={items}');
    expect(content).toContain('sectionLabel="Kompetensi K3"');
  });

  it('verifies every manually added internal link resolves to an existing published route or record', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    const linkRegex = /href="(\/[^"#?]+)"/g;
    const internalLinks = new Set<string>();
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      internalLinks.add(match[1]);
    }

    expect(internalLinks.size).toBeGreaterThan(0);

    const staticRoutes = new Set([
      '/',
      '/pelatihan',
      '/profesi',
      '/kompetensi',
      '/industri',
      '/regulasi-k3',
      '/panduan',
      '/kamus-k3',
      '/perbandingan',
      '/alat',
      '/lokasi',
      '/jadwal',
      '/kontak',
      '/tentang',
      '/alat/matriks-risiko',
    ]);

    const recordUrls = new Set(records.map((r) => `/${r.section}/${r.slug}`));

    for (const link of internalLinks) {
      const exists = staticRoutes.has(link) || recordUrls.has(link);
      expect(exists, `Link target "${link}" must resolve to a valid route`).toBe(true);
    }
  });

  it('verifies visible FAQs match sectionFaqs and no blanket BNSP certification scheme claim exists', () => {
    const content = fs.readFileSync(componentPath, 'utf8');
    const faqs = sectionFaqs.kompetensi;

    expect(faqs.length).toBe(4);
    expect(faqs[0].question).toBe('Apa yang dimaksud dengan kompetensi K3?');
    expect(faqs[1].question).toBe('Apa perbedaan kompetensi K3 dan pelatihan K3?');
    expect(faqs[2].question).toBe('Apakah setiap kompetensi K3 harus disertifikasi?');
    expect(faqs[3].question).toBe('Bagaimana memilih kompetensi K3 yang sesuai dengan pekerjaan?');

    // Must not claim every competency is a BNSP scheme
    expect(content).not.toContain('semua kompetensi merupakan skema sertifikasi BNSP');
    expect(content).not.toContain('seluruh kompetensi di bawah ini adalah skema resmi BNSP');

    // Must not claim all certificates always have 3-year validity without qualification
    for (const faq of faqs) {
      expect(faq.answer).not.toContain('selalu berlaku 3 tahun');
    }
  });

  it('verifies app/[section]/page.tsx preserves existing rendering for other section hubs', () => {
    const pageContent = fs.readFileSync(sectionPagePath, 'utf8');

    // Profesi branch remains untouched
    expect(pageContent).toContain("if (sec === 'profesi')");
    expect(pageContent).toContain('<ProfesiPillarContent items={items} />');

    // Kompetensi branch exists
    expect(pageContent).toContain("if (sec === 'kompetensi')");
    expect(pageContent).toContain('<KompetensiHubContent items={items} />');

    // Generic fallback remains for other sections
    expect(pageContent).toContain('<header className="hub-hero">');
    expect(pageContent).toContain('{sec === \'pelatihan\' && (');
  });
});
