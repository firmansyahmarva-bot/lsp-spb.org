import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { records } from '../src/lib/content';
import { sectionFaqs } from '../src/lib/section-data';
import { getProgramDisplayMeta } from '../src/lib/program-meta-helper';

describe('Pelatihan K3 Hub & Program Trust Validation', () => {
  const componentPath = path.resolve(__dirname, '../src/components/PelatihanHubContent.tsx');
  const sectionPagePath = path.resolve(__dirname, '../app/[section]/page.tsx');
  const metaHelperPath = path.resolve(__dirname, '../src/lib/program-meta-helper.ts');
  const programCardPath = path.resolve(__dirname, '../src/components/ProgramCard.tsx');
  const photoStripPath = path.resolve(__dirname, '../src/components/TrainingPhotoStrip.tsx');

  it('verifies dedicated metadata and self-referencing canonical for /pelatihan', () => {
    expect(fs.existsSync(sectionPagePath)).toBe(true);
    const pageContent = fs.readFileSync(sectionPagePath, 'utf8');

    expect(pageContent).toContain("if (section === 'pelatihan')");
    expect(pageContent).toContain("title: 'Pelatihan K3: Pilih Program untuk Individu dan Perusahaan'");
    expect(pageContent).toContain(
      "description:\n        'Temukan program Pelatihan K3 berdasarkan kebutuhan, jalur sertifikasi dan bidang kerja. Konsultasikan jadwal, syarat, biaya atau kelas in-house.'"
    );
    expect(pageContent).toContain("alternates: { canonical: '/pelatihan' }");

    // Must not contain forbidden promotional phrases
    expect(pageContent).not.toContain('daftar lengkap pelatihan');
    expect(pageContent).not.toContain('nomor satu');
    expect(pageContent).not.toContain('pasti lulus');
    expect(pageContent).not.toContain('termurah');
  });

  it('verifies semantic structure with exactly one H1 and key commercial sections', () => {
    expect(fs.existsSync(componentPath)).toBe(true);
    const content = fs.readFileSync(componentPath, 'utf8');

    // Exactly one H1
    const h1Matches = content.match(/<h1[\s>]/g) || [];
    expect(h1Matches.length).toBe(1);
    expect(content).toContain('Pelatihan K3 untuk Individu dan Perusahaan');

    // Key conversion and guidance headings
    expect(content).toContain('Pilih Berdasarkan Kebutuhan Anda');
    expect(content).toContain('Program Unggulan: Pelatihan Ahli K3 Umum');
    expect(content).toContain('Kenali Jenis Program Sebelum Memilih');
    expect(content).toContain('Cara Memilih Pelatihan K3 yang Tepat');
    expect(content).toContain('Cari Program Pelatihan K3');
    expect(content).toContain('Butuh Pelatihan K3 untuk Tim Perusahaan?');
    expect(content).toContain('Pertanyaan Umum Seputar Pelatihan K3 (FAQ)');
  });

  it('verifies hero conversion CTAs and visitor reassurance text', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    expect(content).toContain('Tanya Jadwal dan Biaya');
    expect(content).toContain('Pelatihan K3 dari Hub Program');
    expect(content).toContain('Minta Rekomendasi Program');
    expect(content).toContain('Rekomendasi Program Pelatihan K3');
    expect(content).toContain(
      'Belum tahu program yang tepat? Sampaikan pekerjaan, industri, pendidikan, pengalaman dan kebutuhan perusahaan melalui WhatsApp.'
    );
  });

  it('verifies the 4 quick visitor-path cards exist with correct copy and intents', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // 1. Individual
    expect(content).toContain('Saya Ingin Mendaftar Pelatihan');
    expect(content).toContain('Temukan program berdasarkan pekerjaan, latar belakang dan target kompetensi.');
    expect(content).toContain('Konsultasi Program Individu');
    expect(content).toContain('syarat');

    // 2. Company Buyer
    expect(content).toContain('Perusahaan Membutuhkan Pelatihan');
    expect(content).toContain('Diskusikan kebutuhan peserta, lokasi, risiko kerja dan target pelaksanaan.');
    expect(content).toContain('Ajukan In-House Training');
    expect(content).toContain('perusahaan');

    // 3. Pathway Comparison
    expect(content).toContain('Saya Membandingkan Jalur Sertifikasi');
    expect(content).toContain('Pahami perbedaan fungsi pembinaan, sertifikasi kompetensi dan penunjukan sesuai kebutuhan.');
    expect(content).toContain('/perbandingan/bnsp-vs-kemnaker');

    // 4. Unsure Visitor
    expect(content).toContain('Saya Belum Tahu Programnya');
    expect(content).toContain('Sampaikan pekerjaan atau risiko yang dihadapi untuk mendapatkan pilihan awal.');
    expect(content).toContain('Minta Rekomendasi');
    expect(content).toContain('Belum Menentukan Program Pelatihan K3');
  });

  it('verifies Ahli K3 Umum flagship section contains required links and CTAs without fake prices or guarantees', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    expect(content).toContain('Program Unggulan: Pelatihan Ahli K3 Umum');
    expect(content).toContain('/pelatihan/ahli-k3-umum');
    expect(content).toContain('Tanya Jadwal Ahli K3 Umum');
    expect(content).toContain('/panduan/syarat-ahli-k3-umum');
    expect(content).toContain('/panduan/biaya-pelatihan-k3');

    // No invented price or absolute guarantee claims
    expect(content).not.toContain('Rp 4.500.000');
    expect(content).not.toContain('pasti lulus');
    expect(content).not.toContain('100% lulus');
    expect(content).not.toContain('jaminan terbit');
  });

  it('verifies program-pathway explanation and selection guide before the directory', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    // 4 categories
    expect(content).toContain('Pembinaan & Penunjukan K3');
    expect(content).toContain('Sertifikasi Kompetensi');
    expect(content).toContain('Pelatihan Teknis & Operasional');
    expect(content).toContain('In-House Training Perusahaan');

    // Links to other hubs
    expect(content).toContain('href="/kompetensi"');
    expect(content).toContain('href="/profesi"');
    expect(content).toContain('href="/industri"');

    // 6 selection steps
    expect(content).toContain('Identifikasi Peran & Posisi Kerja');
    expect(content).toContain('Petakan Aktivitas & Potensi Bahaya');
    expect(content).toContain('Tentukan Target Capaian Pelatihan');
    expect(content).toContain('Periksa Persyaratan Pendidikan & Berkas');
    expect(content).toContain('Pilih Metode Pelaksanaan yang Tersedia');
    expect(content).toContain('Konfirmasi Jadwal, Biaya, & Output Resmi');

    // CTA before directory
    expect(content).toContain('Bantu Saya Pilih Program');
    expect(content).toContain('Pemilihan Program Pelatihan K3');

    // Order: decision guide CTA appears before directory
    const guideCtaIndex = content.indexOf('Bantu Saya Pilih Program');
    const directoryIndex = content.indexOf('id="direktori-program"');
    const inHouseCtaIndex = content.indexOf('Butuh Pelatihan K3 untuk Tim Perusahaan?');

    expect(guideCtaIndex).toBeLessThan(directoryIndex);
    expect(directoryIndex).toBeLessThan(inHouseCtaIndex);
  });

  it('verifies the searchable program directory renders HubSearchFilter exactly once with custom placeholder', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    const filterMatches = content.match(/<HubSearchFilter\s/g) || [];
    expect(filterMatches.length).toBe(1);
    expect(content).toContain('items={items}');
    expect(content).toContain('isCourseSection={true}');
    expect(content).toContain('sectionLabel="Pelatihan K3"');
    expect(content).toContain('placeholder="Cari program—contoh: Ahli K3 Umum, P3K, kebakaran, listrik, forklift..."');
  });

  it('verifies post-directory In-House CTA box and schedule link', () => {
    const content = fs.readFileSync(componentPath, 'utf8');

    expect(content).toContain('Butuh Pelatihan K3 untuk Tim Perusahaan?');
    expect(content).toContain(
      'Sampaikan bidang usaha, aktivitas kerja, risiko utama, jumlah peserta, lokasi dan target jadwal untuk mendapatkan pilihan program serta kebutuhan proposal.'
    );
    expect(content).toContain('In-House Training K3 Perusahaan');
    expect(content).toContain('Ajukan Proposal In-House');
    expect(content).toContain('scheduleHref="/jadwal"');
    expect(content).toContain('Lihat Jadwal Pelatihan');
  });

  it('verifies visible FAQs match sectionFaqs.pelatihan exactly', () => {
    const faqs = sectionFaqs.pelatihan;
    expect(faqs.length).toBe(5);

    expect(faqs[0].question).toBe('Bagaimana memilih Pelatihan K3 yang sesuai dengan pekerjaan?');
    expect(faqs[1].question).toBe('Apa perbedaan pembinaan Kemnaker dan sertifikasi kompetensi BNSP?');
    expect(faqs[2].question).toBe('Apakah semua Pelatihan K3 menghasilkan lisensi atau sertifikat kompetensi?');
    expect(faqs[3].question).toBe('Apakah Pelatihan K3 tersedia untuk peserta individu dan perusahaan?');
    expect(faqs[4].question).toBe('Bagaimana cara menanyakan jadwal, syarat dan biaya terbaru?');

    // No universal claims
    faqs.forEach((faq) => {
      expect(faq.answer).not.toContain('semua program wajib sarjana');
      expect(faq.answer).not.toContain('seluruh pelatihan berdurasi 3 hari');
    });
  });

  it('verifies every manually added internal link in PelatihanHubContent resolves to a valid route or record', () => {
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

    expect(pageContent).toContain('<header className="hub-hero">');
  });

  it('verifies program records were not mass rewritten', () => {
    const pelatihanRecords = records.filter((r) => r.section === 'pelatihan');
    expect(pelatihanRecords.length).toBe(300);
  });

  it('verifies program-meta-helper.ts provides indicative catalog pricing and durations with owner comment', () => {
    const helperContent = fs.readFileSync(metaHelperPath, 'utf8');

    // Required owner-approved comment
    expect(helperContent).toContain(
      'Catalog prices are owner-approved indicative prices. Individual prices can be corrected separately without removing pricing from the complete directory.'
    );

    // Pricing and duration logic present
    expect(helperContent).toContain('priceVariants');
    expect(helperContent).toContain('120 JP (12 Hari)');
    expect(helperContent).toContain('Rp 4.500.000');

    // Test helper function outputs
    const sampleRecord = records.find((r) => r.section === 'pelatihan')!;
    const meta = getProgramDisplayMeta(sampleRecord);
    expect(meta.price).toBeDefined();
    expect(meta.price.startsWith('Rp')).toBe(true);
    expect(meta.duration).toBeDefined();
    expect(meta.duration.length).toBeGreaterThan(0);
  });

  it('verifies ProgramCard displays visible numeric prices and does not show Tanya Biaya', () => {
    const cardContent = fs.readFileSync(programCardPath, 'utf8');

    expect(cardContent).toContain('Mulai Rp 4.500.000');
    expect(cardContent).not.toContain('Tanya Biaya');
    expect(cardContent).toContain('meta.duration');
  });

  it('verifies all local images referenced by TrainingPhotoStrip exist beneath public/', () => {
    const stripContent = fs.readFileSync(photoStripPath, 'utf8');
    const srcRegex = /src:\s*['"](\/images\/[^'"]+)['"]/g;
    const stripImages: string[] = [];
    let match;
    while ((match = srcRegex.exec(stripContent)) !== null) {
      stripImages.push(match[1]);
    }

    expect(stripImages.length).toBeGreaterThan(0);

    for (const imgSrc of stripImages) {
      // Reject accidental double slashes, traversal, or malformed paths
      expect(imgSrc.startsWith('/images/')).toBe(true);
      expect(imgSrc).not.toContain('//');
      expect(imgSrc).not.toContain('..');

      const fullDiskPath = path.resolve(__dirname, '..', 'public', imgSrc.replace(/^\//, ''));
      const exists = fs.existsSync(fullDiskPath);
      expect(exists, `Marquee image "${imgSrc}" must exist at ${fullDiskPath}`).toBe(true);
    }
  });

  it('verifies every selected local program image exists and has no broken fallbacks', () => {
    const pelatihanRecords = records.filter((r) => r.section === 'pelatihan');
    expect(pelatihanRecords.length).toBe(300);

    for (const record of pelatihanRecords) {
      const meta = getProgramDisplayMeta(record);

      expect(meta.image).toBeDefined();
      expect(meta.image.src).toBeDefined();

      const imgSrc = meta.image.src;
      // Reject accidental double slashes or traversal
      expect(imgSrc).not.toContain('//');
      expect(imgSrc).not.toContain('..');
      expect(imgSrc).not.toContain('peserta-mengikuti-pelatihan-crane-1.webp');
      expect(imgSrc).not.toContain('peserta-mengikuti-pelatihan-forklift-1.webp');

      const fullDiskPath = path.resolve(__dirname, '..', 'public', imgSrc.replace(/^\//, ''));
      const exists = fs.existsSync(fullDiskPath);
      expect(exists, `Program image "${imgSrc}" for record ${record.slug} must exist at ${fullDiskPath}`).toBe(true);
    }
  });
});
