import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroCta, TrustStrip, LiveBatchHeroCard, InHouseCtaBox, PathwaySelector } from '@/src/components/ConversionCta';
import { ProgramCard, CategoryCard } from '@/src/components/ProgramCard';
import { FaqAccordion } from '@/src/components/FaqAccordion';
import { JsonLd } from '@/src/components/JsonLd';
import { ScrollReveal, StatCounter, InteractiveProgramNavigator, VisualPhotoSlot } from '@/src/components/InteractiveUi';
import { ImageSlider } from '@/src/components/ImageSlider';
import { site, waIntentUrl } from '@/src/lib/site';

export const metadata: Metadata = {
  title: 'Pelatihan K3 Indonesia & Sertifikasi Ahli K3 | PT Kreasi Ultimate Berjaya',
  description: 'Pusat informasi resmi dan konsultasi pendaftaran Pelatihan K3 Indonesia: Ahli K3 Umum (Kemnaker RI 120 JP), Auditor SMK3, Petugas P3K, K3 Kebakaran, K3 Listrik, skema BNSP, dan In-House Training perusahaan bersama PT Kreasi Ultimate Berjaya.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Pelatihan K3 Indonesia & Sertifikasi Ahli K3 | PT Kreasi Ultimate Berjaya',
    description: 'Pusat informasi resmi dan konsultasi pendaftaran Pelatihan K3 Indonesia: Ahli K3 Umum (Kemnaker RI 120 JP), sertifikasi BNSP, dan In-House Training K3 perusahaan.',
    url: site.url,
    siteName: site.name,
    locale: 'id_ID',
    type: 'website',
  },
};

const navigatorCategories = [
  {
    id: 'kelembagaan',
    title: 'Kelembagaan & SMK3',
    tag: 'REGULASI WAJIB KEMNAKER',
    icon: '🏛️',
    description: 'Program pembinaan wajib pemenuhan regulasi kelembagaan K3, sekretaris P2K3, dan implementasi audit SMK3 PP 50/2012.',
    programs: [
      {
        name: 'Pelatihan Ahli K3 Umum (Kemnaker RI)',
        href: '/pelatihan/ahli-k3-umum',
        duration: '120 JP (12 Hari)',
        level: 'Kemnaker RI',
        desc: 'Pembinaan 120 JP resmi calon Sekretaris P2K3 dan pengawas norma keselamatan kerja perusahaan.',
      },
      {
        name: 'Pelatihan Auditor SMK3 (PP 50/2012)',
        href: '/pelatihan/auditor-smk3',
        duration: '40 JP (4 Hari)',
        level: 'Kemnaker RI',
        desc: 'Sertifikasi audit pemenuhan 166 kriteria Sistem Manajemen Keselamatan dan Kesehatan Kerja.',
      },
      {
        name: 'Pembinaan Panitia Pembina K3 (P2K3)',
        href: '/pelatihan',
        duration: '24 JP (3 Hari)',
        level: 'Teknis Terapan',
        desc: 'Penguatan fungsi tata kelola dan pelaporan triwulan P2K3 ke Dinas Tenaga Kerja setempat.',
      },
    ],
  },
  {
    id: 'darurat',
    title: 'Kebakaran & Tanggap Darurat',
    tag: 'PROTEKSI & MEDIS DARURAT',
    icon: '🔥',
    description: 'Sertifikasi regu penanggulangan kebakaran kelas D/C/B/A serta petugas pertolongan pertama pada kecelakaan kerja (P3K).',
    programs: [
      {
        name: 'Petugas P3K di Tempat Kerja',
        href: '/pelatihan/pelatihan-petugas-p3k-di-tempat-kerja-lisensi-resmi-kemnaker-ri-30-jp',
        duration: '30 JP (3 Hari)',
        level: 'Kemnaker RI',
        desc: 'Pemenuhan rasio wajib petugas P3K, penanganan trauma darurat medis, dan praktik resusitasi RJP.',
      },
      {
        name: 'K3 Penanggulangan Kebakaran Kelas D/C/B/A',
        href: '/pelatihan/k3-kebakaran',
        duration: '3 s.d. 6 Hari',
        level: 'Kemnaker RI',
        desc: 'Pembinaan unit tanggap darurat api, pengoperasian sistem hidran, APAR, dan manajemen evakuasi gedung.',
      },
      {
        name: 'Tim Tanggap Darurat & Drill Evakuasi',
        href: '/pelatihan',
        duration: '2 Hari',
        level: 'In-House Custom',
        desc: 'Simulasi tanggap darurat dan uji kesiapan skenario insiden di fasilitas industri perusahaan.',
      },
    ],
  },
  {
    id: 'teknis',
    title: 'Listrik, Ketinggian & Ruang Terbatas',
    tag: 'SPESIALISASI TEKNIS TINGGI',
    icon: '⚡',
    description: 'Pelatihan mitigasi risiko tinggi teknis kelistrikan, pencegahan jatuh di ketinggian (TKPK/TKBT), dan ruang terbatas (confined space).',
    programs: [
      {
        name: 'Pelatihan K3 Listrik & Teknisi Listrik',
        href: '/pelatihan/pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri',
        duration: '6 s.d. 12 Hari',
        level: 'Permenaker 12/2015',
        desc: 'Inspeksi keselamatan instalasi listrik industri, proteksi petir, dan prosedur Lockout-Tagout (LOTO).',
      },
      {
        name: 'K3 Bekerja di Ketinggian (TKPK / TKBT)',
        href: '/pelatihan/pelatihan-tenaga-kerja-pada-ketinggian-tingkat-1-tkpk-1-rope-access-kemnaker',
        duration: '3 s.d. 5 Hari',
        level: 'Permenaker 09/2016',
        desc: 'Sistem penahan jatuh personal, instalasi angkur, tangga kerja, perancah, dan prosedur evakuasi vertical rescue.',
      },
      {
        name: 'K3 Ruang Terbatas (Confined Space)',
        href: '/pelatihan/pelatihan-petugas-k3-madya-ruang-terbatas-confined-space-kemnaker',
        duration: '3 s.d. 4 Hari',
        level: 'SK Dirjen Binwasnaker',
        desc: 'Pengujian atmosfer gas beracun, sistem ventilasi kerja, izin masuk (entry permit), dan petugas madya/utama.',
      },
    ],
  },
];

const k3Categories = [
  {
    icon: '🏛️',
    title: 'Kelembagaan & SMK3',
    desc: 'Pembinaan kepatuhan regulasi wajib, Sekretaris P2K3, dan audit SMK3 PP 50/2012.',
    href: '/pelatihan/ahli-k3-umum',
    count: 'Flagship 120 JP',
  },
  {
    icon: '🔥',
    title: 'Kebakaran & Darurat',
    desc: 'Unit penanggulangan kebakaran Kelas D/C/B/A, Petugas P3K, dan tim tanggap darurat.',
    href: '/pelatihan/k3-kebakaran',
    count: 'Regulasi Kemnaker',
  },
  {
    icon: '⚡',
    title: 'Listrik & Energi',
    desc: 'Teknisi dan Ahli K3 Listrik, inspeksi instalasi, proteksi petir, dan prosedur LOTO.',
    href: '/pelatihan/pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri',
    count: 'Permenaker 12/2015',
  },
  {
    icon: '🧗',
    title: 'Ketinggian & Konstruksi',
    desc: 'Bekerja di ketinggian TKPK/TKBT, akses tali (rope access), dan perancah scaffolding.',
    href: '/pelatihan/pelatihan-tenaga-kerja-pada-ketinggian-tingkat-1-tkpk-1-rope-access-kemnaker',
    count: 'Permenaker 09/2016',
  },
  {
    icon: '🧪',
    title: 'Higiene & Kimia',
    desc: 'Pengendalian bahan kimia berbahaya, Ahli K3 Kimia, dan pemantauan lingkungan kerja.',
    href: '/pelatihan/pelatihan-petugas-k3-madya-ruang-terbatas-confined-space-kemnaker',
    count: 'Lingkungan Industri',
  },
  {
    icon: '🏗️',
    title: 'Pesawat Angkat & Angkut',
    desc: 'Operator Forklift, Mobile/Tower Crane, Rigger, dan inspeksi alat berat operasional.',
    href: '/pelatihan',
    count: 'SIA & SIO Lisensi',
  },
];

const popularPrograms = [
  {
    tag: 'FLAGSHIP UTAMA',
    title: 'Pelatihan Ahli K3 Umum (Kemnaker RI)',
    desc: 'Pembinaan calon Ahli K3 Umum 120 JP resmi Kemnaker RI untuk memenuhi kewajiban hukum pengurus P2K3 dan pengawasan norma K3 perusahaan.',
    href: '/pelatihan/ahli-k3-umum',
    points: ['Sertifikasi Resmi Kemnaker RI (Sertifikat + SKP + Lisensi)', 'Durasi 120 Jam Pelajaran (±12 Hari Kerja)', 'Syarat Minimal D3/S1 Semua Jurusan'],
    highlight: true,
    meta: { duration: '120 JP / 12 Hari' },
  },
  {
    tag: 'SISTEM MANAJEMEN',
    title: 'Pelatihan Auditor SMK3 (PP 50/2012)',
    desc: 'Program pembinaan untuk mengaudit pemenuhan 166 kriteria Sistem Manajemen K3 di lingkungan perusahaan sesuai ketentuan PP 50/2012.',
    href: '/pelatihan/auditor-smk3',
    points: ['Sertifikasi Auditor Kemnaker RI', 'Khusus Pemegang Sertifikat Ahli K3', 'Kesiapan Menghadapi Audit Eksternal SMK3'],
    highlight: false,
    meta: { duration: '40 JP / 4 Hari' },
  },
  {
    tag: 'TANGGAP DARURAT MEDIS',
    title: 'Petugas P3K di Tempat Kerja',
    desc: 'Pelatihan pertolongan pertama pada kecelakaan kerja untuk memenuhi rasio wajib petugas P3K perusahaan sesuai Permenaker 15/2008.',
    href: '/pelatihan/pelatihan-petugas-p3k-di-tempat-kerja-lisensi-resmi-kemnaker-ri-30-jp',
    points: ['Sertifikasi Lisensi Petugas P3K Kemnaker RI', 'Praktik Resusitasi Jantung Paru (RJP) & Balut Bidai', 'Terbuka untuk Karyawan Lintas Departemen'],
    highlight: false,
    meta: { duration: '30 JP / 3 Hari' },
  },
  {
    tag: 'PROTEKSI KEBAKARAN',
    title: 'K3 Penanggulangan Kebakaran (Kelas D/C/B/A)',
    desc: 'Pembinaan unit tanggap darurat dan pengurus penanggulangan bahaya kebakaran di gedung bertingkat, pabrik, dan fasilitas industri.',
    href: '/pelatihan/k3-kebakaran',
    points: ['Kepmenaker No. 186/MEN/1999', 'Teori Segitiga Api & Praktik APAR/Hydrant', 'Sertifikasi Regu & Penanggung Jawab Kebakaran'],
    highlight: false,
    meta: { duration: '3 s.d. 6 Hari' },
  },
  {
    tag: 'INSTALASI & KELISTRIKAN',
    title: 'Pelatihan K3 Listrik & Teknisi K3 Listrik',
    desc: 'Keahlian keselamatan instalasi, pemeliharaan, inspeksi, dan mitigasi bahaya sengatan listrik serta busur api (arc flash).',
    href: '/pelatihan/pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri',
    points: ['Permenaker 12/2015 & 33/2015', 'Teknisi & Ahli K3 Spesialis Listrik', 'Inspeksi & Prosedur Lockout Tagout (LOTO)'],
    highlight: false,
    meta: { duration: '6 s.d. 12 Hari' },
  },
  {
    tag: 'BEKERJA DI KETINGGIAN',
    title: 'K3 Bekerja di Ketinggian (TKPK / TKBT)',
    desc: 'Pelatihan teknis pencegahan jatuh, sistem akses perancah, tangga, dan tali (rope access) berlandaskan Permenaker 09/2016.',
    href: '/pelatihan/pelatihan-tenaga-kerja-pada-ketinggian-tingkat-1-tkpk-1-rope-access-kemnaker',
    points: ['Sistem Proteksi Jatuh & Angkur Standar', 'TKBT & TKPK Kemnaker RI / BNSP', 'Prosedur Evakuasi & Penyelamatan (Rescue)'],
    highlight: false,
    meta: { duration: '3 s.d. 5 Hari' },
  },
];

const homeFaqs = [
  {
    question: 'Apa saja jenis pelatihan K3 yang diselenggarakan di Indonesia?',
    answer: 'Pelatihan K3 di Indonesia terbagi menjadi pembinaan regulasi wajib Kemnaker RI (seperti Ahli K3 Umum, Auditor SMK3, K3 Kebakaran, K3 Listrik, K3 Ketinggian, Petugas P3K), skema sertifikasi uji kompetensi BNSP melalui LSP berlisensi, serta pelatihan teknis terapan in-house sesuai kebutuhan operasional industri perusahaan.',
  },
  {
    question: 'Mengapa Pelatihan Ahli K3 Umum menjadi program yang paling banyak diminati?',
    answer: 'Pelatihan Ahli K3 Umum (120 JP) berlandaskan Permenaker No. 02/MEN/1992 merupakan program fundamental yang mempersiapkan tenaga ahli K3 untuk menduduki posisi Sekretaris P2K3 di perusahaan. Sertifikasi ini menjadi kualifikasi dasar yang dipersyaratkan oleh industri manufaktur, konstruksi, pertambangan, minyak & gas, dan fasilitas pelayanan kesehatan.',
  },
  {
    question: 'Apa perbedaan mendasar antara sertifikat K3 Kemnaker RI dengan BNSP?',
    answer: 'Sertifikasi Kemnaker RI berfokus pada pemenuhan kepatuhan hukum perusahaan (legal compliance) dengan keluaran Sertifikat Pembinaan, SKP, dan Lisensi Kewenangan. Sementara sertifikasi BNSP berfokus pada pembuktian standar kompetensi kerja individu (SKKNI) melalui uji asesmen portofolio dan wawancara asesor.',
  },
  {
    question: 'Berapa perkiraan biaya mengikuti pelatihan K3?',
    answer: 'Biaya pelatihan K3 bervariasi bergantung pada jenis program, durasi jam pelajaran (JP), metode pelaksanaan (Blended Online atau Tatap Muka), serta kelengkapan fasilitas sertifikasi. Untuk mendapatkan rincian biaya transparan dan penawaran resmi, Anda dapat menghubungi tim konsultan PT Kreasi Ultimate Berjaya.',
  },
  {
    question: 'Bagaimana prosedur penyelenggaraan In-House Training K3 untuk perusahaan?',
    answer: 'Perusahaan dapat menyampaikan kebutuhan topik pelatihan, perkiraan jumlah peserta, dan target tanggal pelaksanaan kepada tim konsultan kami. Kami akan menyusun rancangan silabus yang diselaraskan dengan potensi bahaya tempat kerja Anda serta menerbitkan Surat Penawaran Harga (SPH) resmi.',
  },
];

const homeGalleryImages = [
  { src: '/images/content/instruktur-memandu-sesi-kelas-1.webp', alt: 'Instruktur K3 memandu sesi pembelajaran materi keselamatan kerja di ruang kelas' },
  { src: '/images/content/praktik-pengangkatan-beban-dengan-crane-1.webp', alt: 'Praktik pengangkatan beban dan keselamatan operasional crane di lapangan' },
  { src: '/images/content/peserta-mengikuti-pelatihan-di-kelas-1.webp', alt: 'Peserta mengikuti pembinaan sertifikasi K3 di ruang pelatihan' },
  { src: '/images/content/praktik-pengoperasian-forklift-di-lapangan-1.webp', alt: 'Praktik pengoperasian forklift dan manuver aman di area kerja' },
  { src: '/images/content/praktik-rigging-dan-pengangkatan-beban-1.webp', alt: 'Simulasi teknis rigging, pengikatan, dan inspeksi sling pengangkat' },
  { src: '/images/content/asesmen-individu-dengan-pengisian-dokumen-1.webp', alt: 'Sesi asesmen kompetensi dan verifikasi berkas portofolio keselamatan kerja' },
  { src: '/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp', alt: 'Dokumentasi kebersamaan peserta pelatihan di fasilitas industri' },
  { src: '/images/content/peserta-mengerjakan-ujian-tertulis-di-kelas-1.webp', alt: 'Evaluasi ujian tertulis pembinaan regulasi keselamatan kerja Kemnaker RI' },
];

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Pelatihan Ahli K3 Umum Kemnaker RI 120 JP',
    description: 'Program pembinaan calon Ahli K3 Umum resmi Kementerian Ketenagakerjaan RI (120 Jam Pelajaran).',
    provider: {
      '@type': 'Organization',
      name: site.name,
      sameAs: site.url,
    },
    educationalCredentialAwarded: 'Sertifikat Pembinaan Calon Ahli K3 Umum Kemnaker RI & SKP Lisensi K3',
  };

  return (
    <main>
      <JsonLd data={[faqSchema, courseSchema]} />

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="hero-academy-wrapper">
        <div className="hero-academy-grid">
          <div className="hero-copy">
            <div className="hero-live-pill">
              <span className="live-dot" />
              <span>PUSAT SERTIFIKASI & PELATIHAN K3 RESMI</span>
            </div>
            
            <h1 className="hero-main-title">
              Pusat <span>Pelatihan K3</span> & Sertifikasi Resmi Indonesia
            </h1>
            
            <p className="hero-lead">
              Layanan edukasi, konsultasi pendaftaran, dan pendampingan resmi program keselamatan kerja nasional: sertifikasi <strong>Ahli K3 Umum (Kemnaker RI 120 JP)</strong>, spesialisasi teknis industri, skema kompetensi BNSP, dan In-House Training perusahaan.
            </p>

            <HeroCta
              primaryText="Konsultasi Jadwal & Pendaftaran"
              primaryIntent="jadwal"
              secondaryText="Minta Estimasi Biaya"
              secondaryIntent="biaya"
              context="Pelatihan K3"
            />

            <TrustStrip />
          </div>

          <aside className="hero-interactive-col" aria-label="Program Unggulan Terdekat">
            <LiveBatchHeroCard />
          </aside>
        </div>
      </section>

      {/* 1.5 DOKUMENTASI RESMI GALLERY SLIDER */}
      <section className="section-container pt-2 pb-6" aria-label="Galeri Dokumentasi Pelatihan K3">
        <div className="rounded-3xl bg-slate-900/95 border border-slate-800 p-4 sm:p-6 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-4">
            <div>
              <span className="eyebrow text-emerald-400">DOKUMENTASI FOTO KEGIATAN RESMI</span>
              <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight">Suasana Pembinaan Kelas & Praktik Lapangan K3</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              Dokumentasi nyata kegiatan pembinaan kelas terstandar, evaluasi uji kompetensi, dan simulasi keselamatan kerja industri.
            </p>
          </div>
          <ImageSlider
            images={homeGalleryImages}
            aspectRatio="aspect-[16/9] md:aspect-[21/9]"
            priority
            className="max-h-[460px]"
          />
        </div>
      </section>

      {/* 2. STAT COUNTERS & PROOF METRICS */}
      <ScrollReveal>
        <section className="stats-proof-grid" aria-label="Ringkasan Standar & Dampak Layanan">
          <StatCounter
            icon="📜"
            value={120}
            suffix=" JP"
            label="Kurikulum Ahli K3 Umum"
            sublabel="Standar Resmi Kemnaker RI"
          />
          <StatCounter
            icon="🛡️"
            value={100}
            suffix="%"
            label="Pre-Screening Ijazah Bebas Biaya"
            sublabel="Verifikasi Syarat Sebelum Bayar"
          />
          <StatCounter
            icon="🏢"
            value={3}
            suffix="+"
            label="Kantor & Layanan Regional"
            sublabel="Yogya, Semarang & In-House Nasional"
          />
          <StatCounter
            icon="⚖️"
            value={100}
            suffix="+"
            label="Modul & Referensi Regulasi"
            sublabel="Terverifikasi Standar Perundang-Undangan"
          />
        </section>
      </ScrollReveal>

      {/* 3. INTERACTIVE PROGRAM NAVIGATOR (TABS + LIVE PANELS) */}
      <section className="section-container" aria-labelledby="navigator-heading">
        <ScrollReveal>
          <div className="section-heading text-center">
            <span className="eyebrow">EXPLORER PROGRAM K3</span>
            <h2 id="navigator-heading">Jelajahi Katalog Pelatihan K3 Berdasarkan Kategori</h2>
            <p className="mx-auto">
              Pilih bidang keselamatan kerja untuk melihat rincian silabus, durasi jam pelajaran (JP), dan sertifikasi kementerian yang sesuai.
            </p>
          </div>
          <InteractiveProgramNavigator categories={navigatorCategories} />
        </ScrollReveal>
      </section>

      {/* 4. FLAGSHIP SPOTLIGHT: AHLI K3 UMUM (120 JP) */}
      <section className="section-container" style={{ paddingTop: 0 }} aria-labelledby="flagship-heading">
        <ScrollReveal>
          <div className="flagship-showcase-card">
            <div className="flagship-showcase-copy">
              <div className="flagship-badge-row">
                <span className="program-tag program-tag-highlight">⭐ PROGRAM UNGGULAN NASIONAL</span>
                <span className="flagship-jp-pill">120 JAM PELAJARAN</span>
              </div>
              <h2 id="flagship-heading" className="flagship-showcase-title">
                Pelatihan Ahli K3 Umum (Kemnaker RI)
              </h2>
              <p className="flagship-showcase-desc">
                Sertifikasi fundamental paling dicari di industri nasional. Berlandaskan <strong>Permenaker No. 02/MEN/1992</strong> untuk mempersiapkan tenaga ahli K3 yang berwenang mengawasi kepatuhan norma K3 dan menjabat sebagai Sekretaris P2K3 di tempat kerja.
              </p>

              <div className="flagship-pillars-grid">
                <div className="pillar-item">
                  <span className="pillar-icon">📜</span>
                  <div>
                    <strong>Legalitas Kemnaker RI</strong>
                    <small>Sertifikat Pembinaan, SKP & Kartu Lisensi K3</small>
                  </div>
                </div>
                <div className="pillar-item">
                  <span className="pillar-icon">⏱️</span>
                  <div>
                    <strong>Durasi 120 JP (±12 Hari)</strong>
                    <small>Teori interaktif, PKL daring/luring & evaluasi</small>
                  </div>
                </div>
                <div className="pillar-item">
                  <span className="pillar-icon">🎓</span>
                  <div>
                    <strong>Syarat Min. D3/S1</strong>
                    <small>Terbuka bagi fresh graduate & utusan perusahaan</small>
                  </div>
                </div>
                <div className="pillar-item">
                  <span className="pillar-icon">🛡️</span>
                  <div>
                    <strong>Pre-Screening Bebas Biaya</strong>
                    <small>Verifikasi ijazah sebelum pembayaran</small>
                  </div>
                </div>
              </div>

              <div className="flagship-actions">
                <Link className="button button-accent button-large btn-glow" href="/pelatihan/ahli-k3-umum">
                  <span>Buka Detail & Silabus Ahli K3 Umum</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  className="button button-outline-light button-large"
                  href={waIntentUrl('jadwal', 'Ahli K3 Umum')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tanya Jadwal Batch Terdekat
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. K3 DISCIPLINE / CATEGORY CLUSTERS */}
      <section className="section-container section-container-alt" aria-labelledby="categories-heading">
        <ScrollReveal>
          <div className="section-heading text-center">
            <span className="eyebrow">BIDANG KESELAMATAN KERJA</span>
            <h2 id="categories-heading">Kategori & Bidang Keahlian K3</h2>
            <p className="mx-auto">
              Eksplorasi ragam program pelatihan keselamatan kerja berdasarkan bidang risiko industri dan standar regulasi kementerian.
            </p>
          </div>

          <div className="category-grid">
            {k3Categories.map((cat) => (
              <CategoryCard
                key={cat.title}
                icon={cat.icon}
                title={cat.title}
                desc={cat.desc}
                href={cat.href}
                count={cat.count}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 6. IMAGE-LED INDUSTRIAL SAFETY & TRAINING PRACTICES */}
      <section className="section-container" aria-labelledby="visual-practices-heading">
        <ScrollReveal>
          <div className="section-heading text-center">
            <span className="eyebrow">STANDAR PELAKSANAAN</span>
            <h2 id="visual-practices-heading">Metode Pembinaan & Praktik Lapangan Terstandar</h2>
            <p className="mx-auto">
              Rangkaian pembelajaran mengombinasikan pendalaman regulasi hukum, studi kasus kecelakaan kerja aktual, serta observasi lapangan (PKL) terpandu.
            </p>
          </div>

          <div className="program-grid-3">
            <VisualPhotoSlot
              theme="academy"
              tag="BLENDED & ONLINE CLASS"
              title="Kelas Pembinaan Interaktif"
              caption="Sesi pemaparan teori regulasi norma K3 dipandu instruktur bersertifikasi dengan studi kasus nyata lintas sektor industri."
              metrics={[
                { label: 'Metode', value: 'Blended Zoom' },
                { label: 'Interaksi', value: 'Dua Arah' },
              ]}
            />
            <VisualPhotoSlot
              theme="industrial"
              tag="PRAKTIK KERJA LAPANGAN"
              title="Observasi Bahaya Fasilitas Kerja"
              caption="Peserta melakukan simulasi inspeksi potensi bahaya mekanik, listrik, kimia, dan ergonomi serta menyusun laporan audit K3."
              metrics={[
                { label: 'Output', value: 'Laporan PKL' },
                { label: 'Evaluator', value: 'Pengawas K3' },
              ]}
            />
            <VisualPhotoSlot
              theme="fire"
              tag="TANGGAP DARURAT"
              title="Simulasi Mitigasi Kebakaran & P3K"
              caption="Pelatihan taktis pemadaman api awal dengan APAR/Hydrant serta teknik resusitasi medis penyelamatan korban kecelakaan."
              metrics={[
                { label: 'Praktik', value: 'APAR & RJP' },
                { label: 'Sertifikasi', value: 'Kemnaker RI' },
              ]}
            />
          </div>
        </ScrollReveal>
      </section>

      {/* 7. POPULAR TRAINING PROGRAMS GRID */}
      <section className="section-container section-container-alt" aria-labelledby="programs-heading">
        <ScrollReveal>
          <div className="section-heading text-center">
            <span className="eyebrow">KATALOG PROGRAM POPULER</span>
            <h2 id="programs-heading">Program Pelatihan K3 Terpopuler</h2>
            <p className="mx-auto">
              Pilihan pembinaan teknis dan sertifikasi kompetensi K3 yang paling banyak diikuti oleh praktisi HSE dan perusahaan di Indonesia.
            </p>
          </div>

          <div className="program-grid-3">
            {popularPrograms.map((item) => (
              <ProgramCard
                key={item.title}
                title={item.title}
                tag={item.tag}
                desc={item.desc}
                href={item.href}
                points={item.points}
                highlight={item.highlight}
                meta={item.meta}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link className="button button-primary button-large btn-glow" href="/pelatihan">
              <span>Jelajahi Seluruh Katalog Program Pelatihan K3</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* 8. AUDIENCE PATHWAY SELECTOR (INDIVIDUAL VS CORPORATE) */}
      <section className="section-container">
        <ScrollReveal>
          <PathwaySelector />
        </ScrollReveal>
      </section>

      {/* 9. BNSP VS KEMNAKER COMPARISON OVERVIEW */}
      <section className="section-container section-container-alt" aria-labelledby="comparison-heading">
        <ScrollReveal>
          <div className="section-heading text-center">
            <span className="eyebrow">PANDUAN MEMILIH JALUR</span>
            <h2 id="comparison-heading">Perbedaan Pelatihan K3 Kemnaker RI vs Sertifikasi BNSP</h2>
            <p className="mx-auto">
              Pahami perbedaan fungsi kelembagaan agar Anda dapat menentukan jalur sertifikasi yang paling sesuai dengan kebutuhan hukum perusahaan atau portofolio karir personal Anda.
            </p>
          </div>

          <div className="comparison-preview-grid">
            <div className="comparison-preview-card">
              <div className="comparison-preview-head">
                <span className="program-tag">KEMNAKER RI</span>
                <h3>Jalur Kepatuhan Hukum (Compliance)</h3>
              </div>
              <p>
                Dipersyaratkan untuk pemenuhan audit SMK3 (PP 50/2012), penunjukan sekretaris P2K3, dan tender proyek pemerintah yang mewajibkan Surat Keputusan Penunjukan (SKP) dan Kartu Lisensi K3.
              </p>
              <ul className="comparison-preview-list">
                <li><strong>Penerbit:</strong> Kementerian Ketenagakerjaan RI</li>
                <li><strong>Output:</strong> Sertifikat Pembinaan, SKP & Lisensi K3</li>
                <li><strong>Fokus:</strong> Pengawasan kepatuhan norma di tempat kerja</li>
              </ul>
              <Link className="card-link" href="/pelatihan/ahli-k3-umum">
                Lihat Program Ahli K3 Kemnaker →
              </Link>
            </div>

            <div className="comparison-preview-card">
              <div className="comparison-preview-head">
                <span className="program-tag">BNSP (LSP)</span>
                <h3>Jalur Standar Kompetensi Profesi (SKKNI)</h3>
              </div>
              <p>
                Dipersyaratkan untuk pengakuan portofolio keahlian individu berdasarkan unit Standar Kompetensi Kerja Nasional Indonesia (SKKNI) yang diakui secara nasional dan regional.
              </p>
              <ul className="comparison-preview-list">
                <li><strong>Penerbit:</strong> Badan Nasional Sertifikasi Profesi</li>
                <li><strong>Output:</strong> Sertifikat Kompetensi Kerja Garuda BNSP</li>
                <li><strong>Fokus:</strong> Pengujian & pembuktian kompetensi profesi</li>
              </ul>
              <Link className="card-link" href="/perbandingan/bnsp-vs-kemnaker">
                Baca Matriks Perbandingan Lengkap →
              </Link>
            </div>

            <div className="comparison-preview-card comparison-preview-card-cta">
              <span className="program-tag program-tag-highlight">KONSULTASI GRATIS</span>
              <h3>Butuh Rekomendasi Jalur yang Tepat?</h3>
              <p>
                Sampaikan posisi pekerjaan, kualifikasi pendidikan, dan tujuan proyek Anda. Tim konsultan kami siap membantu memetakan jalur sertifikasi terbaik.
              </p>
              <a
                className="button button-accent button-full btn-glow"
                href={waIntentUrl('kemnaker_bnsp', 'Konsultasi Jalur K3')}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 'auto' }}
              >
                <span>Konsultasi Jalur K3 via WA</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 10. IN-HOUSE TRAINING CTA FOR ENTERPRISE */}
      <section className="section-container" style={{ paddingTop: 0 }}>
        <ScrollReveal>
          <InHouseCtaBox
            title="Layanan In-House Training K3 Perusahaan"
            subtitle="Penyelenggaraan pelatihan internal di fasilitas kantor atau pabrik Anda dengan jadwal fleksibel, efisiensi biaya rombongan, dan kurikulum yang disesuaikan dengan profil risiko industri."
            programName="In-House Training K3"
          />
        </ScrollReveal>
      </section>

      {/* 11. 4-STEP CONSULTATION & REGISTRATION TIMELINE */}
      <section className="section-container section-container-alt" aria-labelledby="timeline-heading">
        <ScrollReveal>
          <div className="section-heading text-center">
            <span className="eyebrow">ALUR LAYANAN</span>
            <h2 id="timeline-heading">4 Tahap Mudah Konsultasi & Pendaftaran Pelatihan K3</h2>
            <p className="mx-auto">
              Kami mendampingi proses dari tahap pemetaan kebutuhan, verifikasi berkas awal, hingga terbitnya sertifikat secara transparan dan terstandar.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step-card">
              <div className="step-number-glow">01</div>
              <h3>Konsultasi Kebutuhan</h3>
              <p>Pilih program pelatihan K3 yang sesuai dengan tujuan karir personal atau kebutuhan audit kepatuhan perusahaan.</p>
            </div>
            <div className="process-step-card">
              <div className="step-number-glow">02</div>
              <h3>Pre-Screening Berkas</h3>
              <p>Verifikasi kelayakan ijazah, KTP, dan surat tugas kerja secara gratis guna memastikan kesiapan administrasi regulasi.</p>
            </div>
            <div className="process-step-card">
              <div className="step-number-glow">03</div>
              <h3>Konfirmasi Batch</h3>
              <p>Pilih jadwal batch kelas publik terdekat atau jadwalkan tanggal khusus pelaksanaan in-house training perusahaan.</p>
            </div>
            <div className="process-step-card">
              <div className="step-number-glow">04</div>
              <h3>Pembinaan & Sertifikasi</h3>
              <p>Ikuti rangkaian pembinaan, evaluasi, hingga proses administrasi penerbitan sertifikat/lisensi resmi.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 12. LOCATION & SERVICE COVERAGE */}
      <section className="section-container" aria-labelledby="coverage-heading">
        <ScrollReveal>
          <div className="section-heading text-center">
            <span className="eyebrow">JANGKAUAN LAYANAN</span>
            <h2 id="coverage-heading">Kantor Operasional & Layanan Pelatihan Nasional</h2>
            <p className="mx-auto">
              PT Kreasi Ultimate Berjaya melayani pendaftaran kelas publik online serta penyelenggaraan In-House Training K3 langsung di lokasi perusahaan di seluruh Indonesia.
            </p>
          </div>

          <div className="program-grid-3">
            <div className="location-card">
              <div className="location-head">
                <span className="location-icon">🏢</span>
                <span className="program-tag">KANTOR PUSAT</span>
              </div>
              <h3>Yogyakarta & Sleman</h3>
              <p>
                Jl. Wonosari Km 8.5, Gandu, Sendangtirto, Kec. Berbah, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55573.
              </p>
              <Link className="card-link" href="/lokasi/yogyakarta">
                Info Pelatihan K3 Yogyakarta →
              </Link>
            </div>

            <div className="location-card">
              <div className="location-head">
                <span className="location-icon">🏛️</span>
                <span className="program-tag">LAYANAN REGIONAL</span>
              </div>
              <h3>Semarang & Jawa Tengah</h3>
              <p>
                Jl. Jaten III, Pedurungan Tengah, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50192.
              </p>
              <Link className="card-link" href="/lokasi/semarang">
                Info Pelatihan K3 Semarang →
              </Link>
            </div>

            <div className="location-card">
              <div className="location-head">
                <span className="location-icon">🇮🇩</span>
                <span className="program-tag program-tag-highlight">SE-INDONESIA</span>
              </div>
              <h3>In-House Training Nasional</h3>
              <p>
                Tim instruktur kami siap hadir langsung ke fasilitas industri, tambang, konstruksi, atau kantor perusahaan Anda di seluruh provinsi Indonesia.
              </p>
              <a
                className="card-link"
                href={waIntentUrl('perusahaan', 'Pelatihan In-House Nasional')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ajukan Pelatihan In-House Perusahaan →
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 13. COMPREHENSIVE FAQ */}
      <section className="section-container section-container-alt">
        <ScrollReveal>
          <FaqAccordion items={homeFaqs} title="Pertanyaan Umum Seputar Pelatihan K3" />
        </ScrollReveal>
      </section>

      {/* 14. CLOSING HIGH-TRUST CTA */}
      <section className="closing-cta-section" aria-labelledby="closing-cta-heading">
        <ScrollReveal>
          <div className="closing-cta-inner">
            <div className="closing-badge-pill">
              <span className="closing-badge-dot" />
              <span>KONSULTASI RESMI PELATIHAN K3</span>
            </div>
            <h2 id="closing-cta-heading" className="closing-cta-title">
              Tingkatkan Standar Keselamatan Kerja & Karir K3 Anda Sekarang
            </h2>
            <p className="closing-cta-lead">
              Hubungi konsultan PT Kreasi Ultimate Berjaya untuk menanyakan tanggal batch terdekat, pre-screening kelayakan berkas ijazah, atau pengajuan proposal In-House Training K3 perusahaan.
            </p>
            <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
              <a
                className="button button-accent button-large btn-glow"
                href={waIntentUrl('jadwal', 'Pelatihan K3')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Tanya Jadwal & Pendaftaran Pelatihan</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                className="button button-outline-light button-large"
                href={waIntentUrl('biaya', 'Pelatihan K3')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Minta Estimasi Biaya & Proposal</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
