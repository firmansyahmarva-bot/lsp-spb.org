import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { records } from '../src/lib/content';

describe('Profesi K3 Pillar Hub Validation', () => {
  const componentPath = path.resolve(__dirname, '../src/components/ProfesiPillarContent.tsx');
  const sectionPagePath = path.resolve(__dirname, '../app/[section]/page.tsx');

  it('verifies ProfesiPillarContent component exists and has substantive length', () => {
    expect(fs.existsSync(componentPath)).toBe(true);
    const content = fs.readFileSync(componentPath, 'utf8');

    // Strip tags and whitespace to get visible words
    const prose = content
      .replace(/<[^>]+>/g, ' ')
      .replace(/\{[^}]+\}/g, ' ')
      .replace(/import .*/g, '')
      .replace(/export .*/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    const wordCount = prose.split(' ').filter((w) => w.length > 0).length;

    // Must exceed minimum 1,500 words
    expect(wordCount).toBeGreaterThanOrEqual(1500);
  });

  it('verifies correct semantic structure with exactly one H1 and proper headings', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // Exactly one H1
    const h1Matches = content.match(/<h1[\s>]/g) || [];
    expect(h1Matches.length).toBe(1);
    expect(content).toContain('Profesi K3 di Indonesia: Peran, Jalur Karir, Kompetensi, dan Penunjukan Regulasi');

    // Mandatory H2 headings
    expect(content).toContain('1. Apa Itu Profesi K3?');
    expect(content).toContain('2. Perbedaan Job Title, Penugasan Internal, Sertifikasi Kompetensi, dan SKP Kemnaker');
    expect(content).toContain('3. 9 Kategori Bidang Spesialisasi Profesi K3 di Indonesia');
    expect(content).toContain('4. Panduan Memilih Profesi K3 Berdasarkan Profil & Latar Belakang');
    expect(content).toContain('5. Peta Jenjang Karir K3: Dari Entry Level hingga Konsultan Independen');
    expect(content).toContain('6. Tabel Perbandingan Peran Representatif Profesi K3');
    expect(content).toContain('7. Klarifikasi Regulasi: Menyelesaikan Pelatihan Tidak Otomatis Mendapatkan Gelar');
    expect(content).toContain('8. Eksplorasi 200 Jabatan & Spesialisasi Profesi K3');
    expect(content).toContain('9. Pertanyaan Umum Seputar Profesi & Karir K3 (FAQ)');
    expect(content).toContain('Bingung Memilih Jalur Sertifikasi Profesi K3 yang Tepat?');
  });

  it('verifies working table of contents with all corresponding anchor IDs', () => {
    const content = fs.readFileSync(componentPath, 'utf8');
    const requiredAnchors = [
      'definisi-profesi-k3',
      'perbedaan-peran-sertifikasi-penunjukan',
      'kategori-bidang-spesialisasi',
      'panduan-memilih-profesi',
      'jenjang-karir-k3',
      'tabel-komparasi-profesi-k3',
      'koreksi-miskonsepsi-sertifikasi',
      'direktori-jabatan-k3',
      'faq-profesi-k3',
      'konsultasi-karir-k3',
    ];

    for (const anchor of requiredAnchors) {
      // Must have link href
      expect(content).toContain(`href="#${anchor}"`);
      // Must have section id
      expect(content).toContain(`id="${anchor}"`);
    }
  });

  it('verifies comparison table contains required columns and representative roles', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // Required Table Headers
    expect(content).toContain('Peran K3');
    expect(content).toContain('Tanggung Jawab Utama');
    expect(content).toContain('Tempat Kerja Umum');
    expect(content).toContain('Syarat Pendidikan / Pengalaman');
    expect(content).toContain('Jalur Pembinaan & Sertifikasi');

    // Representative Roles Present
    expect(content).toContain('Safety Officer / Junior HSE');
    expect(content).toContain('Ahli K3 Umum (Sekretaris P2K3)');
    expect(content).toContain('Auditor SMK3 (PP 50/2012)');
    expect(content).toContain('Ahli K3 Konstruksi');
    expect(content).toContain('Teknisi & Ahli K3 Listrik');
    expect(content).toContain('Petugas K3 Kebakaran (Kelas D/C)');
    expect(content).toContain('Dokter & Paramedis Hiperkes');
    expect(content).toContain('Teknisi Akses Ketinggian (TKPK)');
  });

  it('verifies presence of 9 specialization categories and 4 status dimensions', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // 4 Dimensions
    expect(content).toContain('Jabatan Kerja (Job Title)');
    expect(content).toContain('Peran Penugasan Internal (Company Role)');
    expect(content).toContain('Sertifikasi Kompetensi (BNSP)');
    expect(content).toContain('Penunjukan & Lisensi (Kemnaker RI)');

    // 9 Categories
    expect(content).toContain('K3 Umum & Manajemen SMK3');
    expect(content).toContain('K3 Konstruksi & Pekerjaan Sipil');
    expect(content).toContain('K3 Kelistrikan & Energi Listrik');
    expect(content).toContain('K3 Penanggulangan Kebakaran');
    expect(content).toContain('Kesehatan Kerja, Higiene Perusahaan & Medis');
    expect(content).toContain('K3 Lingkungan Kerja & Higiene Industri');
    expect(content).toContain('K3 Pesawat Angkat & Pesawat Angkut (PAA)');
    expect(content).toContain('K3 Bekerja di Ketinggian & Ruang Terbatas');
    expect(content).toContain('K3 Kimia, Bejana Tekan & Proses Manufaktur');
  });

  it('verifies all internal links in ProfesiPillarContent resolve to existing routes', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // Find all internal Link or anchor hrefs (starting with /)
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
      const isValid = staticRoutes.has(link) || recordUrls.has(link);
      expect(isValid, `Link target "${link}" must exist in routes or records`).toBe(true);
    }
  });

  it('verifies app/[section]/page.tsx correctly overrides metadata and renders pillar for profesi', () => {
    const pageContent = fs.readFileSync(sectionPagePath, 'utf8');

    // Check metadata title & description for profesi
    expect(pageContent).toContain("if (section === 'profesi')");
    expect(pageContent).toContain('Profesi K3 Indonesia: Panduan Peran, Jenjang Karir, Syarat & Sertifikasi');
    expect(pageContent).toContain("canonical: '/profesi'");

    // Check conditional render
    expect(pageContent).toContain("if (sec === 'profesi')");
    expect(pageContent).toContain('<ProfesiPillarContent items={items} />');
  });
});
