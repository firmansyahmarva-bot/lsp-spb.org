import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { records } from '../src/lib/content';
import { sectionFaqs } from '../src/lib/section-data';

describe('Panduan K3 Hub & Content Validation', () => {
  const componentPath = path.resolve(__dirname, '../src/components/PanduanHubContent.tsx');
  const sectionPagePath = path.resolve(__dirname, '../app/[section]/page.tsx');

  it('verifies component and page files exist', () => {
    expect(fs.existsSync(componentPath)).toBe(true);
    expect(fs.existsSync(sectionPagePath)).toBe(true);
  });

  it('verifies dedicated metadata and self-referencing canonical for /panduan', () => {
    const pageContent = fs.readFileSync(sectionPagePath, 'utf8');

    // Canonical & route
    expect(pageContent).toContain("if (section === 'panduan')");
    expect(pageContent).toContain("alternates: { canonical: '/panduan' }");

    // Title & description targeting Panduan K3 and Apa itu K3 without hype words
    expect(pageContent).toContain("title: 'Panduan K3: Apa Itu K3 dan Cara Menerapkannya'");
    expect(pageContent).toContain(
      "description:\n        'Pelajari apa itu K3, tujuan dan penerapannya di tempat kerja. Temukan panduan pelatihan, syarat, biaya, dokumen dan prosedur K3.'"
    );
    expect(pageContent).not.toMatch(/title:.*(lengkap|resmi|terbaik)/i);
  });

  it('verifies semantic structure with exactly one H1 and key headings', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // Exactly one H1
    const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/g);
    expect(h1Matches).not.toBeNull();
    expect(h1Matches?.length).toBe(1);
    expect(h1Matches?.[0]).toContain('Panduan K3: Pengertian, Tujuan, dan Penerapan di Tempat Kerja');

    // Prominent H2 headings
    expect(content).toContain('Apa Itu K3?');
    expect(content).toContain('Mulai dari Kebutuhan Anda');
    expect(content).toContain('Cara Menerapkan K3 di Tempat Kerja');
    expect(content).toContain('Jelajahi Panduan Berdasarkan Topik');
    expect(content).toContain('Cari Panduan K3');
    expect(content).toContain('Belum Menemukan Panduan yang Sesuai?');
  });

  it('verifies visible direct Apa Itu K3 answer without false guarantees', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // Direct answer in the first 40-60 words
    expect(content).toContain(
      'Keselamatan dan Kesehatan Kerja (K3) adalah upaya terencana dan sistematis untuk mencegah kecelakaan kerja dan penyakit akibat kerja (PAK) serta menciptakan kondisi lingkungan kerja yang aman, sehat, dan produktif bagi seluruh tenaga kerja.'
    );

    // Explains core aspects
    expect(content).toContain('Apa yang Dilindungi K3?');
    expect(content).toContain('Mengapa Tempat Kerja Menerapkan K3?');
    expect(content).toContain('Siapa yang Terlibat dalam K3?');
    expect(content).toContain('Bahaya, Risiko, dan Pengendalian');

    // No claim that training alone guarantees safety
    expect(content).not.toContain('pelatihan saja memastikan keselamatan 100%');
    expect(content).not.toContain('memastikan zero incident');
  });

  it('verifies hero CTAs and directory anchor', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    expect(content).toContain('Konsultasikan Kebutuhan K3');
    expect(content).toContain("waIntentUrl('jadwal', 'Konsultasi dari Hub Panduan K3')");
    expect(content).toContain('Cari Panduan K3');
    expect(content).toContain('href="#direktori-panduan"');
    expect(content).toContain(
      'Untuk pertanyaan pelatihan, sampaikan program, pekerjaan, pendidikan atau kebutuhan perusahaan melalui WhatsApp.'
    );
  });

  it('verifies six Mulai dari Kebutuhan Anda visitor paths', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // 1. New learner
    expect(content).toContain('Saya Baru Mengenal K3');
    expect(content).toContain('Mulai dari pengertian dasar, bahaya, risiko, pengendalian dan tanggung jawab di tempat kerja.');
    expect(content).toContain('href="/kamus-k3"');

    // 2. Training candidate
    expect(content).toContain('Saya Mencari Pelatihan K3');
    expect(content).toContain('Bandingkan program berdasarkan pekerjaan, persyaratan dan tujuan peserta.');
    expect(content).toContain('href="/pelatihan"');

    // 3. Person checking requirements
    expect(content).toContain('Saya Mencari Syarat Pendaftaran');
    expect(content).toContain('Periksa pendidikan, pengalaman dan dokumen untuk program yang dituju.');
    expect(content).toContain('href="/panduan/syarat-ahli-k3-umum"');

    // 4. Person checking costs
    expect(content).toContain('Saya Mencari Biaya Pelatihan');
    expect(content).toContain('Lihat faktor biaya dan konfirmasi penawaran terbaru sebelum mendaftar.');
    expect(content).toContain('href="/panduan/biaya-pelatihan-k3"');

    // 5. Company implementing K3
    expect(content).toContain('Perusahaan Membutuhkan Panduan');
    expect(content).toContain('Temukan panduan dokumen, audit, risiko, emergency response dan pengembangan personel.');
    expect(content).toContain('Konsultasi Kebutuhan Perusahaan');
    expect(content).toContain("waIntentUrl('perusahaan', 'Kebutuhan Panduan K3 Perusahaan')");

    // 6. User searching for a procedure
    expect(content).toContain('Saya Mencari SOP atau Cara Kerja');
    expect(content).toContain('Cari berdasarkan pekerjaan, alat, risiko atau dokumen yang ingin dibuat.');
    expect(content).toContain('href="#direktori-panduan"');
  });

  it('verifies practical seven-step K3 implementation cycle and pre-directory CTA', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // Seven practical steps in sequence
    expect(content).toContain('Identifikasi Aktivitas Kerja dan Sumber Bahaya');
    expect(content).toContain('Penilaian Tingkat Risiko');
    expect(content).toContain('Penetapan Langkah Pengendalian');
    expect(content).toContain('Penyusunan Prosedur Kerja dan Pembagian Tanggung Jawab');
    expect(content).toContain('Pelatihan dan Pembinaan Personel');
    expect(content).toContain('Inspeksi, Pelaporan, dan Rencana Tanggap Darurat');
    expect(content).toContain('Evaluasi dan Peningkatan Berkelanjutan');

    // Interlinked tools and guides
    expect(content).toContain('/panduan/cara-menyusun-hiradc-lengkap');
    expect(content).toContain('/panduan/cara-menyusun-job-safety-analysis-jsa');
    expect(content).toContain('/alat/matriks-risiko');
    expect(content).toContain('/panduan/cara-menyusun-emergency-response-plan-erp');
    expect(content).toContain('/panduan/dokumen-wajib-audit-smk3-pp-50');

    // Pre-directory CTA appears before the directory anchor
    const preDirectoryCtaIndex = content.indexOf('Butuh Bantuan Menentukan Langkah Awal?');
    const directoryAnchorIndex = content.indexOf('id="direktori-panduan"');
    expect(preDirectoryCtaIndex).toBeGreaterThan(0);
    expect(directoryAnchorIndex).toBeGreaterThan(preDirectoryCtaIndex);
    expect(content).toContain("waIntentUrl('perusahaan', 'Langkah Awal Penerapan K3 Perusahaan')");
  });

  it('verifies eight editorial guide groups with editorial classification note', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    expect(content).toContain('Dasar-dasar K3');
    expect(content).toContain('Pelatihan &amp; Syarat Pendaftaran');
    expect(content).toContain('Biaya &amp; Pilihan Program');
    expect(content).toContain('Manajemen &amp; Penilaian Risiko');
    expect(content).toContain('Dokumen &amp; Audit SMK3');
    expect(content).toContain('Tanggap Darurat &amp; Kebakaran');
    expect(content).toContain('Inspeksi &amp; Kelaikan Alat');
    expect(content).toContain('SOP &amp; Prosedur Teknis');

    // Editorial disclaimer
    expect(content).toContain('klasifikasi editorial untuk mempermudah eksplorasi, bukan taksonomi resmi pemerintah');
  });

  it('verifies searchable directory is rendered exactly once without course badges or prices', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // Render HubSearchFilter exactly once
    const filterMatches = content.match(/<HubSearchFilter/g);
    expect(filterMatches).not.toBeNull();
    expect(filterMatches?.length).toBe(1);

    // HubSearchFilter props
    expect(content).toContain('isCourseSection={false}');
    expect(content).toContain('sectionLabel="Panduan K3"');
    expect(content).toContain('placeholder="Cari panduan—contoh: HIRADC, JSA, biaya, APAR, audit..."');
  });

  it('verifies post-directory lead conversion section and CTAs', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    const directoryIndex = content.indexOf('id="direktori-panduan"');
    const postCtaIndex = content.indexOf('Belum Menemukan Panduan yang Sesuai?');
    expect(postCtaIndex).toBeGreaterThan(directoryIndex);

    expect(content).toContain('Tanya Kebutuhan K3 via WhatsApp');
    expect(content).toContain("waIntentUrl('jadwal', 'Pertanyaan dari Direktori Panduan K3')");
    expect(content).toContain('Lihat Program Pelatihan K3');
    expect(content).toContain('href="/pelatihan"');
    expect(content).toContain('Ajukan Konsultasi Perusahaan');
    expect(content).toContain("waIntentUrl('perusahaan', 'Konsultasi Panduan K3 Perusahaan')");
  });

  it('verifies visible FAQs match sectionFaqs.panduan exactly', () => {
    const content = fs.readFileSync(componentPath, 'utf8');
    const faqs = sectionFaqs.panduan;

    expect(faqs).toBeDefined();
    expect(faqs.length).toBe(5);

    expect(faqs[0].question).toBe('Apa itu K3 dan apa tujuannya?');
    expect(faqs[1].question).toBe('Apa langkah awal menerapkan K3 di tempat kerja?');
    expect(faqs[2].question).toBe('Apa perbedaan panduan K3, SOP K3 dan regulasi K3?');
    expect(faqs[3].question).toBe('Bagaimana memilih Pelatihan K3 yang sesuai?');
    expect(faqs[4].question).toBe('Apakah perusahaan dapat berkonsultasi tentang kebutuhan program K3?');

    // Rendered via FaqAccordion
    expect(content).toContain('<FaqAccordion items={faqs} title="Pertanyaan Umum Seputar Panduan K3" />');
  });

  it('verifies every manually added internal link in PanduanHubContent resolves to a valid route', () => {
    const content = fs.readFileSync(componentPath, 'utf8');
    const linkMatches = content.match(/href="(\/[^"#]*)/g) || [];
    const internalLinks = Array.from(new Set(linkMatches.map((m) => m.replace('href="', ''))));

    const recordUrls = new Set(records.map((r) => `/${r.section}/${r.slug}`));

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

    for (const link of internalLinks) {
      const exists = staticRoutes.has(link) || recordUrls.has(link);
      expect(exists, `Internal link target "${link}" must resolve to a valid published route`).toBe(true);
    }
  });

  it('verifies other dedicated section hubs and fallback logic remain intact in app/[section]/page.tsx', () => {
    const pageContent = fs.readFileSync(sectionPagePath, 'utf8');

    expect(pageContent).toContain("if (sec === 'pelatihan')");
    expect(pageContent).toContain('<PelatihanHubContent items={items} />');

    expect(pageContent).toContain("if (sec === 'profesi')");
    expect(pageContent).toContain('<ProfesiPillarContent items={items} />');

    expect(pageContent).toContain("if (sec === 'kompetensi')");
    expect(pageContent).toContain('<KompetensiHubContent items={items} />');

    expect(pageContent).toContain("if (sec === 'industri')");
    expect(pageContent).toContain('<IndustriHubContent items={items} />');

    expect(pageContent).toContain("if (sec === 'panduan')");
    expect(pageContent).toContain('<PanduanHubContent items={items} />');

    expect(pageContent).toContain('<header className="hub-hero">');
  });

  it('verifies no new /panduan/apa-itu-k3 route was created', () => {
    const apaItuK3Record = records.find((r) => r.section === 'panduan' && r.slug === 'apa-itu-k3');
    expect(apaItuK3Record).toBeUndefined();

    const apaItuK3File = path.resolve(__dirname, '../src/content/panduan/apa-itu-k3.ts');
    expect(fs.existsSync(apaItuK3File)).toBe(false);
  });

  it('verifies child guide records were not mass rewritten', () => {
    const panduanRecords = records.filter((r) => r.section === 'panduan');
    expect(panduanRecords.length).toBeGreaterThan(70);

    // Verify key representative records exist untouched
    const hiradcRecord = panduanRecords.find((r) => r.slug === 'cara-menyusun-hiradc-lengkap');
    expect(hiradcRecord).toBeDefined();
    expect(hiradcRecord?.title).toContain('HIRADC');

    const syaratRecord = panduanRecords.find((r) => r.slug === 'syarat-ahli-k3-umum');
    expect(syaratRecord).toBeDefined();
    expect(syaratRecord?.title).toContain('Syarat');

    const biayaRecord = panduanRecords.find((r) => r.slug === 'biaya-pelatihan-k3');
    expect(biayaRecord).toBeDefined();
    expect(biayaRecord?.title).toContain('Biaya');
  });
});
