import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroCta, TrustStrip, InHouseCtaBox, PathwaySelector } from '@/src/components/ConversionCta';
import { ProgramCard, CategoryCard } from '@/src/components/ProgramCard';
import { FaqAccordion } from '@/src/components/FaqAccordion';
import { JsonLd } from '@/src/components/JsonLd';
import { site, waIntentUrl } from '@/src/lib/site';

export const metadata: Metadata = {
  title: 'Pelatihan K3 Indonesia & Sertifikasi Ahli K3 | PT Kreasi Ultimate Berjaya',
  description: 'Pusat informasi, bimbingan, dan pendaftaran resmi Pelatihan K3 di Indonesia: Ahli K3 Umum Kemnaker RI (120 JP), Auditor SMK3, Petugas P3K, K3 Kebakaran, K3 Listrik, skema BNSP, dan In-House Training perusahaan bersama PT Kreasi Ultimate Berjaya.',
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
    href: '/pelatihan/k3-listrik',
    count: 'Permenaker 12/2015',
  },
  {
    icon: '🧗',
    title: 'Ketinggian & Konstruksi',
    desc: 'Bekerja di ketinggian TKPK/TKBT, akses tali (rope access), dan perancah scaffolding.',
    href: '/pelatihan/bekerja-di-ketinggian',
    count: 'Permenaker 09/2016',
  },
  {
    icon: '🧪',
    title: 'Higiene & Kimia',
    desc: 'Pengendalian bahan kimia berbahaya, Ahli K3 Kimia, dan pemantauan lingkungan kerja.',
    href: '/pelatihan/k3-ruang-terbatas',
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
    href: '/pelatihan/petugas-p3k-tempat-kerja',
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
    href: '/pelatihan/k3-listrik',
    points: ['Permenaker 12/2015 & 33/2015', 'Teknisi & Ahli K3 Spesialis Listrik', 'Inspeksi & Prosedur Lockout Tagout (LOTO)'],
    highlight: false,
    meta: { duration: '6 s.d. 12 Hari' },
  },
  {
    tag: 'BEKERJA DI KETINGGIAN',
    title: 'K3 Bekerja di Ketinggian (TKPK / TKBT)',
    desc: 'Pelatihan teknis pencegahan jatuh, sistem akses perancah, tangga, dan tali (rope access) berlandaskan Permenaker 09/2016.',
    href: '/pelatihan/bekerja-di-ketinggian',
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

      {/* 1. HERO SECTION - REFINED 2026 CORPORATE PORTAL */}
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow-pill">
            <span className="eyebrow-dot" />
            <span>PUSAT INFORMASI & PELATIHAN K3 INDONESIA</span>
          </div>
          <h1>
            Pusat <em>Pelatihan K3</em> & Sertifikasi Resmi Indonesia
          </h1>
          <p className="hero-lead">
            Portal informasi, konsultasi pendaftaran, dan pendampingan resmi program keselamatan kerja: sertifikasi Ahli K3 Umum (Kemnaker RI 120 JP), spesialisasi teknis K3, skema kompetensi BNSP, dan In-House Training korporasi bersama PT Kreasi Ultimate Berjaya.
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

        <aside className="finder-card" aria-label="Navigasi Cepat Program K3">
          <div className="finder-top">
            <span className="finder-top-label">PANDUAN PROGRAM</span>
            <span className="finder-badge-icon">K3</span>
          </div>
          <h2>Pilih Berdasarkan Kebutuhan Anda</h2>
          <div className="finder-options">
            <Link href="/pelatihan/ahli-k3-umum" className="finder-opt-highlight">
              <div className="finder-opt-text">
                <strong>Ahli K3 Umum (120 JP)</strong>
                <small>Flagship Pembinaan Kemnaker RI</small>
              </div>
              <span className="finder-opt-arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/pelatihan">
              <div className="finder-opt-text">
                <strong>Katalog Lengkap Program K3</strong>
                <small>Auditor SMK3, P3K, Kebakaran, Listrik</small>
              </div>
              <span className="finder-opt-arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/panduan/syarat-ahli-k3-umum">
              <div className="finder-opt-text">
                <strong>Syarat Pendaftaran D3/S1</strong>
                <small>Kelengkapan berkas & pre-screening</small>
              </div>
              <span className="finder-opt-arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/panduan/biaya-pelatihan-k3">
              <div className="finder-opt-text">
                <strong>Estimasi Biaya & Fasilitas</strong>
                <small>Rincian investasi pembinaan resmi</small>
              </div>
              <span className="finder-opt-arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/perbandingan/bnsp-vs-kemnaker">
              <div className="finder-opt-text">
                <strong>Perbandingan Kemnaker vs BNSP</strong>
                <small>Kepatuhan hukum vs uji kompetensi</small>
              </div>
              <span className="finder-opt-arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/jadwal">
              <div className="finder-opt-text">
                <strong>Informasi Jadwal Batch</strong>
                <small>Jadwal bulanan & in-house B2B</small>
              </div>
              <span className="finder-opt-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="finder-footer-note">
            Pre-screening berkas ijazah & konsultasi kebutuhan pelatihan perusahaan tanpa komitmen.
          </p>
          <a
            className="button button-accent button-full"
            href={waIntentUrl('perusahaan', 'In-House Training')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Konsultasi In-House Perusahaan</span>
            <span aria-hidden="true">→</span>
          </a>
        </aside>
      </section>

      {/* 2. FLAGSHIP SPOTLIGHT: AHLI K3 UMUM (120 JP) */}
      <section className="section-container" aria-labelledby="flagship-heading">
        <div className="flagship-banner-box">
          <div className="flagship-banner-copy">
            <span className="program-tag program-tag-highlight">PROGRAM UNGGULAN NASIONAL</span>
            <h2 id="flagship-heading" className="flagship-title">
              Pelatihan Ahli K3 Umum (Kemnaker RI 120 JP)
            </h2>
            <p className="flagship-lead">
              Kualifikasi fundamental paling dicari di dunia industri. Berlandaskan Permenaker No. 02/MEN/1992 untuk mempersiapkan tenaga ahli pengawas norma K3 dan pengurus Sekretaris P2K3 di perusahaan.
            </p>

            <div className="flagship-specs-grid">
              <div className="flagship-spec-item">
                <span className="flagship-spec-icon">📜</span>
                <div>
                  <strong>Sertifikasi Kemnaker RI</strong>
                  <small>Sertifikat Pembinaan, SKP & Lisensi</small>
                </div>
              </div>
              <div className="flagship-spec-item">
                <span className="flagship-spec-icon">⏱️</span>
                <div>
                  <strong>Durasi 120 JP (±12 Hari)</strong>
                  <small>Teori interaktif, PKL & evaluasi</small>
                </div>
              </div>
              <div className="flagship-spec-item">
                <span className="flagship-spec-icon">🎓</span>
                <div>
                  <strong>Min. D3/S1 Semua Jurusan</strong>
                  <small>Fresh graduate & utusan perusahaan</small>
                </div>
              </div>
            </div>

            <div className="flagship-actions">
              <Link className="button button-primary button-large" href="/pelatihan/ahli-k3-umum">
                <span>Buka Detail Lengkap Ahli K3 Umum</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                className="button button-secondary button-large"
                href={waIntentUrl('jadwal', 'Ahli K3 Umum')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tanya Jadwal Batch Terdekat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. K3 DISCIPLINE / CATEGORY CLUSTERS */}
      <section className="section-container section-container-alt" aria-labelledby="categories-heading">
        <div className="section-heading">
          <span className="eyebrow">BIDANG KESELAMATAN KERJA</span>
          <h2 id="categories-heading">Kategori & Bidang Keahlian K3</h2>
          <p>
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
      </section>

      {/* 4. POPULAR TRAINING PROGRAMS GRID */}
      <section className="section-container" aria-labelledby="programs-heading">
        <div className="section-heading">
          <span className="eyebrow">KATALOG PROGRAM POPULER</span>
          <h2 id="programs-heading">Program Pelatihan K3 Terpopuler</h2>
          <p>
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

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link className="button button-primary button-large" href="/pelatihan">
            <span>Jelajahi Seluruh Katalog Program Pelatihan K3</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* 5. AUDIENCE PATHWAY SELECTOR (INDIVIDUAL VS CORPORATE) */}
      <section className="section-container section-container-alt">
        <PathwaySelector />
      </section>

      {/* 6. BNSP VS KEMNAKER COMPARISON OVERVIEW */}
      <section className="section-container" aria-labelledby="comparison-heading">
        <div className="section-heading">
          <span className="eyebrow">PANDUAN MEMILIH JALUR</span>
          <h2 id="comparison-heading">Perbedaan Pelatihan K3 Kemnaker RI vs Sertifikasi BNSP</h2>
          <p>
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
              className="button button-primary button-full"
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
      </section>

      {/* 7. IN-HOUSE TRAINING CTA FOR ENTERPRISE */}
      <section className="section-container" style={{ paddingTop: 0 }}>
        <InHouseCtaBox
          title="Layanan In-House Training K3 Perusahaan"
          subtitle="Penyelenggaraan pelatihan internal di fasilitas kantor atau pabrik Anda dengan jadwal fleksibel, efisiensi biaya rombongan, dan kurikulum yang disesuaikan dengan profil risiko industri."
          programName="In-House Training K3"
        />
      </section>

      {/* 8. 4-STEP CONSULTATION & REGISTRATION TIMELINE */}
      <section className="section-container section-container-alt" aria-labelledby="timeline-heading">
        <div className="section-heading">
          <span className="eyebrow">ALUR LAYANAN</span>
          <h2 id="timeline-heading">4 Tahap Mudah Konsultasi & Pendaftaran Pelatihan K3</h2>
          <p>
            Kami mendampingi proses dari tahap pemetaan kebutuhan, verifikasi berkas awal, hingga terbitnya sertifikat secara transparan dan terstandar.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-step-card">
            <div className="step-number">01</div>
            <h3>Konsultasi Kebutuhan</h3>
            <p>Pilih program pelatihan K3 yang sesuai dengan tujuan karir personal atau kebutuhan audit kepatuhan perusahaan.</p>
          </div>
          <div className="process-step-card">
            <div className="step-number">02</div>
            <h3>Pre-Screening Berkas</h3>
            <p>Verifikasi kelayakan ijazah, KTP, dan surat tugas kerja secara gratis guna memastikan kesiapan administrasi regulasi.</p>
          </div>
          <div className="process-step-card">
            <div className="step-number">03</div>
            <h3>Konfirmasi Batch</h3>
            <p>Pilih jadwal batch kelas publik terdekat atau jadwalkan tanggal khusus pelaksanaan in-house training perusahaan.</p>
          </div>
          <div className="process-step-card">
            <div className="step-number">04</div>
            <h3>Pembinaan & Sertifikasi</h3>
            <p>Ikuti rangkaian pembinaan, evaluasi, hingga proses administrasi penerbitan sertifikat/lisensi resmi.</p>
          </div>
        </div>
      </section>

      {/* 9. LOCATION & SERVICE COVERAGE */}
      <section className="section-container" aria-labelledby="coverage-heading">
        <div className="section-heading">
          <span className="eyebrow">JANGKAUAN LAYANAN</span>
          <h2 id="coverage-heading">Kantor Operasional & Layanan Pelatihan Nasional</h2>
          <p>
            PT Kreasi Ultimate Berjaya melayani pendaftaran kelas publik online serta penyelenggaraan In-House Training K3 langsung di lokasi perusahaan di seluruh Indonesia.
          </p>
        </div>

        <div className="program-grid-3">
          <div className="program-card-prominent">
            <span className="program-tag">KANTOR PUSAT</span>
            <h3>Yogyakarta & Sleman</h3>
            <p>
              Jl. Wonosari Km 8.5, Gandu, Sendangtirto, Kec. Berbah, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55573.
            </p>
            <Link className="card-link" href="/lokasi/yogyakarta">
              Info Pelatihan K3 Yogyakarta →
            </Link>
          </div>

          <div className="program-card-prominent">
            <span className="program-tag">LAYANAN REGIONAL</span>
            <h3>Semarang & Jawa Tengah</h3>
            <p>
              Jl. Jaten III, Pedurungan Tengah, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50192.
            </p>
            <Link className="card-link" href="/lokasi/semarang">
              Info Pelatihan K3 Semarang →
            </Link>
          </div>

          <div className="program-card-prominent">
            <span className="program-tag">SE-INDONESIA</span>
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
      </section>

      {/* 10. COMPREHENSIVE FAQ */}
      <section className="section-container section-container-alt">
        <FaqAccordion items={homeFaqs} title="Pertanyaan Umum Seputar Pelatihan K3" />
      </section>

      {/* 11. CLOSING HIGH-TRUST CTA */}
      <section className="closing-cta-section" aria-labelledby="closing-cta-heading">
        <div className="closing-cta-inner">
          <span className="eyebrow-accent">KONSULTASI RESMI</span>
          <h2 id="closing-cta-heading" className="closing-cta-title">
            Tingkatkan Standar Keselamatan Kerja & Kompetensi K3 Anda
          </h2>
          <p className="closing-cta-lead">
            Hubungi PT Kreasi Ultimate Berjaya untuk menanyakan informasi jadwal batch terdekat, bimbingan verifikasi berkas, atau pengajuan proposal In-House Training K3 perusahaan Anda.
          </p>
          <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
            <a
              className="button button-accent button-large"
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
      </section>
    </main>
  );
}
