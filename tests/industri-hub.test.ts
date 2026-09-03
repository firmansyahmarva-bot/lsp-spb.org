import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { records } from '../src/lib/content';
import { sectionFaqs } from '../src/lib/section-data';

describe('Industri K3 Hub Validation', () => {
  const componentPath = path.resolve(__dirname, '../src/components/IndustriHubContent.tsx');
  const sectionPagePath = path.resolve(__dirname, '../app/[section]/page.tsx');

  it('verifies dedicated metadata and self-referencing canonical in app/[section]/page.tsx', () => {
    expect(fs.existsSync(sectionPagePath)).toBe(true);
    const pageContent = fs.readFileSync(sectionPagePath, 'utf8');

    expect(pageContent).toContain("if (section === 'industri')");
    expect(pageContent).toContain("title: 'K3 Berdasarkan Industri: Risiko dan Program Pelatihan'");
    expect(pageContent).toContain(
      "description:\n        'Temukan kebutuhan K3 berdasarkan sektor industri, risiko utama, dan program pelatihan yang relevan untuk perusahaan atau tim operasional.'"
    );
    expect(pageContent).toContain("alternates: { canonical: '/industri' }");

    // Must not contain forbidden promotional phrases
    expect(pageContent).not.toContain('daftar lengkap industri');
    expect(pageContent).not.toContain('panduan resmi industri');
  });

  it('verifies semantic structure with exactly one H1 and key conversion sections', () => {
    expect(fs.existsSync(componentPath)).toBe(true);
    const content = fs.readFileSync(componentPath, 'utf8');

    // Exactly one H1
    const h1Matches = content.match(/<h1[\s>]/g) || [];
    expect(h1Matches.length).toBe(1);
    expect(content).toContain('K3 Berdasarkan Industri: Temukan Program yang Sesuai Risiko Perusahaan');

    // Key conversion and guidance headings
    expect(content).toContain('Apa Kebutuhan Perusahaan Anda?');
    expect(content).toContain('Pilih Sektor Industri');
    expect(content).toContain('Dari Risiko Operasional ke Kebutuhan Pelatihan');
    expect(content).toContain('Cara Memilih Program K3 untuk Perusahaan');
    expect(content).toContain('Jelajahi Profil K3 Berdasarkan Industri');
    expect(content).toContain('Butuh Program K3 yang Disesuaikan dengan Risiko Perusahaan?');
    expect(content).toContain('Pertanyaan Umum K3 Berdasarkan Industri (FAQ)');
  });

  it('verifies the 3 conversion CTAs exist in their required positions', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // 1. Hero CTA (Above Directory)
    expect(content).toContain('Minta Rekomendasi Program K3');
    expect(content).toContain('Rekomendasi Program K3 Berdasarkan Industri');
    expect(content).toContain('Lihat Program Pelatihan K3');

    // 2. Mid-page CTA (Before Directory)
    expect(content).toContain('Diskusikan Kebutuhan Perusahaan');
    expect(content).toContain('Pemetaan Kebutuhan Pelatihan K3 Perusahaan');

    // 3. Strong Company/In-House CTA (After Directory)
    expect(content).toContain('Ajukan Proposal In-House');
    expect(content).toContain('Lihat Jadwal Program');
    expect(content).toContain('href="/jadwal"');

    // Directory is placed between Mid-page CTA and After-Directory CTA
    const midCtaIndex = content.indexOf('Diskusikan Kebutuhan Perusahaan');
    const directoryIndex = content.indexOf('id="direktori-industri"');
    const postCtaIndex = content.indexOf('Ajukan Proposal In-House');

    expect(midCtaIndex).toBeLessThan(directoryIndex);
    expect(directoryIndex).toBeLessThan(postCtaIndex);
  });

  it('verifies the 4 quick company-needs options and the 5-step decision flow', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // 4 quick company-needs cards
    expect(content).toContain('Memenuhi Persyaratan K3');
    expect(content).toContain('Meningkatkan Kompetensi Tim');
    expect(content).toContain('Menyiapkan In-House Training');
    expect(content).toContain('Belum Tahu Program yang Tepat');

    // 5-step decision flow
    expect(content).toContain('Identifikasi Aktivitas Kerja Nyata');
    expect(content).toContain('Petakan Bahaya Dominan & Tugas Berisiko Tinggi');
    expect(content).toContain('Tentukan Kelompok Personel Calon Peserta');
    expect(content).toContain('Pisahkan Kebutuhan Pelatihan, Sertifikasi, & Penunjukan Regulasi');
    expect(content).toContain('Konfirmasi Metode Pelaksanaan, Peserta, & Target Jadwal');
  });

  it('verifies the 8 editorial industry groups and risk-to-program table', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // 8 editorial groups
    expect(content).toContain('Konstruksi & Infrastruktur');
    expect(content).toContain('Manufaktur & Pabrikasi');
    expect(content).toContain('Pertambangan & Mineral');
    expect(content).toContain('Minyak, Gas & Petrokimia');
    expect(content).toContain('Kelistrikan & Energi');
    expect(content).toContain('Logistik & Transportasi');
    expect(content).toContain('Kesehatan & Laboratorium');
    expect(content).toContain('Gedung & Fasilitas Publik');

    // Disclaimer on editorial grouping
    expect(content).toContain('panduan navigasi editorial untuk mempermudah eksplorasi kebutuhan K3 di lapangan, bukan klasifikasi resmi pemerintah');

    // Risk-to-program table columns
    expect(content).toContain('Situasi Operasional');
    expect(content).toContain('Risiko Utama');
    expect(content).toContain('Kebutuhan K3 Relevan');
    expect(content).toContain('Langkah Selanjutnya');

    // Key representative risk situations
    expect(content).toContain('Pekerjaan di Ketinggian');
    expect(content).toContain('Pesawat Angkat & Angkut');
    expect(content).toContain('Instalasi Kelistrikan');
    expect(content).toContain('Bahan Kimia Berbahaya (B3)');
    expect(content).toContain('Kebakaran & Kedaruratan');
    expect(content).toContain('Ruang Terbatas (Confined Space)');
    expect(content).toContain('Kesehatan & Ergonomi Kerja');
    expect(content).toContain('Pekerjaan Proyek & Kontraktor');
  });

  it('verifies the searchable directory is rendered exactly once without course badges or fake prices', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // Search filter rendered once
    const filterMatches = content.match(/<HubSearchFilter\s/g) || [];
    expect(filterMatches.length).toBe(1);
    expect(content).toContain('items={items}');
    expect(content).toContain('isCourseSection={false}');
    expect(content).toContain('sectionLabel="Industri K3"');
    expect(content).toContain('placeholder="Cari industri, aktivitas, atau risiko');

    // No fake price or guaranteed claims
    expect(content).not.toContain('Rp ');
    expect(content).not.toContain('100% lulus');
    expect(content).not.toContain('pasti bersertifikat');
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

  it('verifies visible FAQs match sectionFaqs and no claim of identical industry obligations exists', () => {
    const content = fs.readFileSync(componentPath, 'utf8');
    const faqs = sectionFaqs.industri;

    expect(faqs.length).toBe(4);
    expect(faqs[0].question).toBe('Mengapa kebutuhan K3 setiap industri berbeda?');
    expect(faqs[1].question).toBe('Bagaimana menentukan pelatihan K3 yang dibutuhkan perusahaan?');
    expect(faqs[2].question).toBe('Apakah perusahaan bisa meminta program in-house sesuai risiko tempat kerja?');
    expect(faqs[3].question).toBe('Informasi apa yang perlu disiapkan sebelum meminta rekomendasi program?');

    // Must not claim all companies in a sector have identical obligations
    expect(content).not.toContain('seluruh perusahaan memiliki kewajiban K3 yang sama');
    expect(content).not.toContain('semua industri memiliki standar K3 yang identik');
  });

  it('verifies app/[section]/page.tsx preserves existing rendering for other section hubs', () => {
    const pageContent = fs.readFileSync(sectionPagePath, 'utf8');

    // Profesi branch remains untouched
    expect(pageContent).toContain("if (sec === 'profesi')");
    expect(pageContent).toContain('<ProfesiPillarContent items={items} />');

    // Kompetensi branch remains untouched
    expect(pageContent).toContain("if (sec === 'kompetensi')");
    expect(pageContent).toContain('<KompetensiHubContent items={items} />');

    // Industri branch exists
    expect(pageContent).toContain("if (sec === 'industri')");
    expect(pageContent).toContain('<IndustriHubContent items={items} />');

    // Generic fallback remains for other sections
    expect(pageContent).toContain('<header className="hub-hero">');
    expect(pageContent).toContain('{sec === \'pelatihan\' && (');
  });
});
