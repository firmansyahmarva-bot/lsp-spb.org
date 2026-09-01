import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroCta, TrustStrip, InHouseCtaBox, ConsultationBanner } from '@/src/components/ConversionCta';
import { FaqAccordion } from '@/src/components/FaqAccordion';
import { JsonLd } from '@/src/components/JsonLd';
import { site, waIntentUrl } from '@/src/lib/site';

export const metadata: Metadata = {
  title: 'Pelatihan Ahli K3 Umum Kemnaker RI & Sertifikasi K3 Indonesia',
  description: 'Pusat informasi, bimbingan, dan pendaftaran resmi Pelatihan Ahli K3 Umum (Kemnaker RI 120 JP), skema BNSP, dan in-house training K3 di Indonesia bersama PT Kreasi Ultimate Berjaya.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Pelatihan Ahli K3 Umum & Sertifikasi K3 Indonesia | PT Kreasi Ultimate Berjaya',
    description: 'Pusat informasi resmi dan konsultasi pendaftaran Pelatihan Ahli K3 Umum Kemnaker RI (120 JP), skema sertifikasi BNSP, dan in-house training K3 di Indonesia.',
    url: '/',
    siteName: site.name,
    locale: 'id_ID',
    type: 'website',
  },
};

const popularPrograms = [
  {
    tag: 'PRIORITAS UTAMA',
    title: 'Pelatihan Ahli K3 Umum (Kemnaker RI)',
    desc: 'Pembinaan calon Ahli K3 Umum 120 JP resmi Kemnaker RI untuk memenuhi kewajiban hukum P2K3 dan pengawasan norma K3 perusahaan.',
    href: '/pelatihan/ahli-k3-umum',
    points: ['Sertifikasi Resmi Kemnaker RI', 'Durasi 120 JP (±12 Hari)', 'Syarat Min. D3/S1 Semua Jurusan'],
  },
  {
    tag: 'SERTIFIKASI KEMNAKER',
    title: 'Pelatihan Auditor SMK3 (PP 50/2012)',
    desc: 'Program pembinaan untuk mengaudit pemenuhan 166 kriteria Sistem Manajemen K3 di lingkungan perusahaan sesuai PP 50/2012.',
    href: '/pelatihan/auditor-smk3',
    points: ['Sertifikasi Auditor Kemnaker', 'Khusus Pemegang Sertifikat Ahli K3', 'Kesiapan Audit Eksternal'],
  },
  {
    tag: 'KEMNAKER & BNSP',
    title: 'Petugas P3K di Tempat Kerja',
    desc: 'Pelatihan pertolongan pertama kecelakaan kerja untuk memenuhi rasio wajib petugas P3K perusahaan sesuai Permenaker 15/2008.',
    href: '/pelatihan/petugas-p3k-tempat-kerja',
    points: ['Sertifikasi Lisensi P3K', 'Praktik Resusitasi & Evakuasi', 'Terbuka untuk Semua Jenjang'],
  },
  {
    tag: 'TEKNIS KESELAMATAN',
    title: 'K3 Penanggulangan Kebakaran (Kelas D/C/B/A)',
    desc: 'Pembinaan unit tanggap darurat dan pengurus penanggulangan bahaya kebakaran di gedung, pabrik, dan fasilitas industri.',
    href: '/pelatihan/k3-kebakaran',
    points: ['Kepmenaker 186/1999', 'Teori Api & Praktik APAR/Hydrant', 'Sertifikasi Regu & Ahli Kebakaran'],
  },
  {
    tag: 'KEAHLIAN TEKNIS',
    title: 'Pelatihan K3 Listrik & Teknisi K3 Listrik',
    desc: 'Keahlian keselamatan instalasi, pemeliharaan, inspeksi, dan mitigasi bahaya sengatan listrik serta busur api (arc flash).',
    href: '/pelatihan/k3-listrik',
    points: ['Permenaker 12/2015 & 33/2015', 'Teknisi & Ahli K3 Listrik', 'Inspeksi & Lockout Tagout (LOTO)'],
  },
  {
    tag: 'RISIKO TINGGI',
    title: 'K3 Bekerja di Ketinggian (TKPK / TKBT)',
    desc: 'Pelatihan teknis pencegahan jatuh, sistem akses perancah, tangga, dan tali (rope access) sesuai Permenaker 09/2016.',
    href: '/pelatihan/bekerja-di-ketinggian',
    points: ['Sistem Proteksi Jatuh & Anchor', 'TKBT & TKPK Kemnaker/BNSP', 'Simulasi Penyelamatan (Rescue)'],
  },
];

const homeFaqs = [
  {
    question: 'Apa itu Pelatihan Ahli K3 Umum dan siapa yang wajib mengikutinya?',
    answer: 'Pelatihan Ahli K3 Umum adalah program pembinaan intensif 120 Jam Pelajaran (±12 hari) berlandaskan Permenaker No. 02/MEN/1992. Program ini wajib diikuti oleh personel yang ditunjuk perusahaan untuk menjabat sebagai Sekretaris P2K3, serta sangat direkomendasikan bagi praktisi HSE, supervisor, dan lulusan minimal D3/S1 yang ingin berkarir di bidang K3 industri.',
  },
  {
    question: 'Apa perbedaan antara sertifikat Ahli K3 Umum Kemnaker RI dengan BNSP?',
    answer: 'Sertifikasi Kemnaker RI berfokus pada kepatuhan hukum perusahaan (compliance) dan menghasilkan Sertifikat Pembinaan, SKP, serta Lisensi K3 resmi dari Kementerian. Sedangkan sertifikasi BNSP berfokus pada pengakuan uji kompetensi profesi per unit SKKNI melalui LSP berlisensi.',
  },
  {
    question: 'Berapa biaya pelatihan Ahli K3 Umum di PT Kreasi Ultimate Berjaya?',
    answer: 'Biaya pelatihan berkisar antara Rp 4.500.000 hingga Rp 8.500.000 tergantung format kelas (Blended Online atau Offline Tatap Muka) dan status peserta (mandiri / utusan perusahaan). Biaya sudah termasuk pembinaan 120 JP, modul regulasi, fasilitas PKL, evaluasi Kemnaker, dan pengurusan SKP & Lisensi K3.',
  },
  {
    question: 'Apakah fresh graduate lulusan baru bisa mendaftar Ahli K3 Umum?',
    answer: 'Bisa. Lulusan D3/S1 semua jurusan dapat mendaftar sebagai peserta mandiri dan mendapatkan Sertifikat Pembinaan resmi Kemnaker RI yang berlaku seumur hidup. Saat nantinya diterima bekerja di suatu perusahaan, sertifikat tersebut tinggal diajukan untuk penerbitan SKP & Lisensi K3 atas nama perusahaan baru.',
  },
  {
    question: 'Bagaimana cara mengajukan In-House Training K3 untuk perusahaan kami?',
    answer: 'Anda dapat menghubungi tim konsultan PT Kreasi Ultimate Berjaya melalui WhatsApp atau email dengan menyampaikan topik pelatihan, jumlah peserta, dan target jadwal. Kami akan menerbitkan Surat Penawaran Harga (SPH) resmi dan silabus dalam 1x24 jam kerja.',
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

      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">PUSAT PELATIHAN AHLI K3 UMUM & K3 INDONESIA</p>
          <h1>
            Pelatihan <em>Ahli K3 Umum</em> & Sertifikasi K3 Terverifikasi
          </h1>
          <p className="hero-lead">
            Dampingi langkah karir dan kepatuhan hukum perusahaan Anda melalui pembinaan resmi 120 JP Kemnaker RI, skema kompetensi BNSP, serta In-House Training K3 terpercaya bersama PT Kreasi Ultimate Berjaya.
          </p>

          <HeroCta
            primaryText="Tanya Jadwal & Kuota Ahli K3 Umum"
            primaryIntent="jadwal"
            secondaryText="Minta Estimasi Biaya"
            secondaryIntent="biaya"
            context="Ahli K3 Umum"
          />

          <TrustStrip />
        </div>

        <aside className="finder-card" aria-label="Navigasi Kebutuhan K3">
          <div className="finder-top">
            <span>KONSULTASI CEPAT</span>
            <div className="finder-badge-icon">K3</div>
          </div>
          <h2>Pilih Berdasarkan Kebutuhan Anda</h2>
          <div className="finder-options">
            <Link href="/pelatihan/ahli-k3-umum">
              <span>Jalur Ahli K3 Umum (120 JP)</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/panduan/syarat-ahli-k3-umum">
              <span>Syarat Pendaftaran D3/S1</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/panduan/biaya-pelatihan-k3">
              <span>Rincian Biaya & Fasilitas</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/perbandingan/bnsp-vs-kemnaker">
              <span>Perbandingan Kemnaker vs BNSP</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/jadwal">
              <span>Konfirmasi Jadwal Batch Terdekat</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="finder-footer-note">
            Pre-screening berkas ijazah & konsultasi kebutuhan perusahaan 100% gratis tanpa komitmen.
          </p>
          <a
            className="button button-accent button-full"
            href={waIntentUrl('perusahaan', 'Pelatihan K3')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasi In-House Perusahaan →
          </a>
        </aside>
      </section>

      {/* 2. AHLI K3 UMUM OVERVIEW */}
      <section className="section-container">
        <div className="section-heading">
          <span className="eyebrow">TENTANG AHLI K3 UMUM</span>
          <h2>Fondasi Keselamatan Kerja & Legalitas Wajib Perusahaan</h2>
          <p>
            Ahli K3 Umum adalah tenaga teknis berkeahlian khusus dari luar instansi pemerintah yang ditunjuk oleh Menteri Ketenagakerjaan RI untuk mengawasi ditaatinya norma K3 di tempat kerja.
          </p>
        </div>

        <div className="program-grid-3">
          <div className="program-card-prominent">
            <span className="program-tag">KEWAJIBAN HUKUM</span>
            <h3>Kepatuhan Regulasi P2K3</h3>
            <p>
              Berdasarkan UU No. 1/1970 & Permenaker 02/1992, setiap tempat kerja dengan 100+ tenaga kerja atau risiko tinggi wajib membentuk P2K3 dan menunjuk minimal 1 orang Ahli K3 Umum.
            </p>
            <Link className="card-link" href="/panduan/tugas-ahli-k3-umum">
              Pelajari Tugas & Wewenang →
            </Link>
          </div>

          <div className="program-card-prominent">
            <span className="program-tag">PROSPEK KARIR</span>
            <h3>Nilai Tambah Profesional</h3>
            <p>
              Sertifikat pembinaan Kemnaker RI 120 JP merupakan kualifikasi standar emas yang paling dicari divisi HSE di sektor manufaktur, konstruksi, pertambangan, dan migas.
            </p>
            <Link className="card-link" href="/profesi/ahli-k3-umum">
              Lihat Prospek Karir & Gaji →
            </Link>
          </div>

          <div className="program-card-prominent">
            <span className="program-tag">SYARAT & ALUR</span>
            <h3>Mudah Diverifikasi</h3>
            <p>
              Terbuka untuk lulusan Diploma 3 (D3) dan Sarjana (S1) semua jurusan dengan proses verifikasi data akademik dan surat tugas yang transparan.
            </p>
            <Link className="card-link" href="/panduan/syarat-ahli-k3-umum">
              Cek Syarat Dokumen Pendaftaran →
            </Link>
          </div>
        </div>

        <ConsultationBanner
          title="Ingin Memastikan Syarat Ijazah Anda Memenuhi Kriteria Kemnaker?"
          text="Kirimkan scan berkas Anda ke tim admisi kami untuk pre-screening gratis sebelum melakukan pendaftaran."
          ctaText="Pre-Screening Berkas via WA"
          intent="syarat"
          context="Syarat Ahli K3 Umum"
        />
      </section>

      {/* 3. POPULAR TRAINING PROGRAMS */}
      <section className="section-container section-container-alt">
        <div className="section-heading">
          <span className="eyebrow">KATALOG PROGRAM</span>
          <h2>Program Pelatihan K3 Terpopuler</h2>
          <p>
            Tersedia berbagai pilihan pembinaan teknis dan sertifikasi kompetensi K3 yang dirancang untuk kebutuhan individu maupun in-house training perusahaan.
          </p>
        </div>

        <div className="program-grid-3">
          {popularPrograms.map((item) => (
            <div key={item.title} className="program-card-prominent">
              <span className="program-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul className="program-meta-list">
                {item.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <Link className="card-link" href={item.href}>
                Lihat Silabus & Jadwal →
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Link className="button button-primary button-large" href="/pelatihan">
            Jelajahi Seluruh Program Pelatihan K3 ({popularPrograms.length}+ Kategori) →
          </Link>
        </div>
      </section>

      {/* 4. BNSP VS KEMNAKER EXPLANATION */}
      <section className="section-container">
        <div className="section-heading">
          <span className="eyebrow">PANDUAN MEMILIH JALUR</span>
          <h2>Sertifikasi Kemnaker RI vs BNSP: Pilih Sesuai Kebutuhan</h2>
          <p>
            Kedua jalur sertifikasi ini memiliki fungsi kelembagaan yang berbeda namun saling melengkapi. Pastikan Anda memilih program yang tepat agar investasi pelatihan memberikan hasil maksimal.
          </p>
        </div>

        <div className="program-grid-3">
          <div className="program-card-prominent">
            <span className="program-tag">KEMNAKER RI</span>
            <h3>Jalur Kepatuhan Hukum Perusahaan</h3>
            <p>
              Wajib bagi perusahaan yang membutuhkan pemenuhan audit SMK3, pembentukan P2K3, atau tender proyek yang mensyaratkan SKP dan Kartu Lisensi Ahli K3 resmi pemerintah.
            </p>
            <ul className="program-meta-list">
              <li>Penerbit: Kementerian Ketenagakerjaan RI</li>
              <li>Output: Sertifikat Pembinaan, SKP & Lisensi K3</li>
              <li>Durasi: 120 JP Pembinaan Intensif & PKL</li>
            </ul>
            <Link className="card-link" href="/pelatihan/ahli-k3-umum">
              Detail Ahli K3 Umum Kemnaker →
            </Link>
          </div>

          <div className="program-card-prominent">
            <span className="program-tag">BNSP (LSP)</span>
            <h3>Jalur Pengakuan Kompetensi Profesi</h3>
            <p>
              Cocok bagi profesional yang ingin membuktikan portofolio keahlian kerja berbasis unit Standar Kompetensi Kerja Nasional Indonesia (SKKNI).
            </p>
            <ul className="program-meta-list">
              <li>Penerbit: Badan Nasional Sertifikasi Profesi</li>
              <li>Output: Sertifikat Kompetensi Kerja Garuda BNSP</li>
              <li>Proses: Uji Asesmen & Verifikasi Portofolio</li>
            </ul>
            <Link className="card-link" href="/perbandingan/bnsp-vs-kemnaker">
              Baca Matriks Perbandingan Lengkap →
            </Link>
          </div>

          <div className="program-card-prominent" style={{ background: 'var(--cream)', borderColor: 'var(--green)' }}>
            <span className="program-tag" style={{ background: 'var(--green)', color: '#ffffff' }}>KONSULTASI GRATIS</span>
            <h3>Masih Ragu Memilih Jalur?</h3>
            <p>
              Sampaikan posisi kerja dan tujuan sertifikasi Anda. Tim konsultan kami akan memberikan rekomendasi jalur yang paling relevan.
            </p>
            <a
              className="button button-primary button-full"
              href={waIntentUrl('kemnaker_bnsp', 'Pemilihan Jalur K3')}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 'auto' }}
            >
              Konsultasi Jalur K3 via WA →
            </a>
          </div>
        </div>
      </section>

      {/* 5. IN-HOUSE TRAINING CTA FOR ENTERPRISE */}
      <section className="section-container" style={{ paddingTop: 0 }}>
        <InHouseCtaBox
          title="Penyelenggaraan In-House Training K3 Perusahaan"
          subtitle="Tingkatkan budaya keselamatan kerja seluruh tim Anda dengan kurikulum yang dikustomisasi langsung sesuai karakteristik bahaya industri Anda."
          programName="In-House Training Perusahaan"
        />
      </section>

      {/* 6. 4-STEP REGISTRATION PROCESS */}
      <section className="section-container section-container-alt">
        <div className="section-heading">
          <span className="eyebrow">ALUR LAYANAN</span>
          <h2>4 Langkah Mudah Konsultasi & Pendaftaran Pelatihan</h2>
          <p>
            Kami menjaga seluruh proses pendaftaran berjalan transparan, aman, dan terverifikasi dari awal hingga terbitnya sertifikat.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-step-card">
            <div className="step-number">01</div>
            <h3>Konsultasi Kebutuhan</h3>
            <p>Diskusikan tujuan sertifikasi individu atau sasaran kepatuhan regulasi perusahaan Anda bersama tim kami.</p>
          </div>
          <div className="process-step-card">
            <div className="step-number">02</div>
            <h3>Screening Berkas</h3>
            <p>Verifikasi kelayakan ijazah, KTP, dan surat tugas secara gratis untuk memastikan kepatuhan regulasi Kemnaker.</p>
          </div>
          <div className="process-step-card">
            <div className="step-number">03</div>
            <h3>Konfirmasi Batch</h3>
            <p>Pilih jadwal batch publik yang sesuai atau jadwalkan tanggal khusus untuk in-house training perusahaan.</p>
          </div>
          <div className="process-step-card">
            <div className="step-number">04</div>
            <h3>Pelatihan & Sertifikat</h3>
            <p>Ikuti pembinaan terstandar, bimbingan PKL, evaluasi ujian, hingga pengawalan penerbitan SKP & Lisensi K3.</p>
          </div>
        </div>
      </section>

      {/* 7. LOCATION & COVERAGE */}
      <section className="section-container">
        <div className="section-heading">
          <span className="eyebrow">JANGKAUAN LAYANAN</span>
          <h2>Kantor Operasional & Cakupan Wilayah Pelatihan</h2>
          <p>
            PT Kreasi Ultimate Berjaya melayani pendaftaran kelas publik serta pelaksanaan In-House Training K3 di seluruh Indonesia.
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
            <span className="program-tag">NASIONAL</span>
            <h3>In-House Se-Indonesia</h3>
            <p>
              Kami siap mengirimkan tim instruktur senior ke lokasi pabrik, proyek, atau kantor perusahaan Anda di seluruh provinsi Indonesia.
            </p>
            <a
              className="card-link"
              href={waIntentUrl('perusahaan', 'Layanan Nasional')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ajukan Training di Kota Anda →
            </a>
          </div>
        </div>
      </section>

      {/* 8. COMPREHENSIVE FAQ */}
      <section className="section-container section-container-alt">
        <FaqAccordion items={homeFaqs} title="Pertanyaan Populer Seputar Pelatihan K3" />
      </section>

      {/* 9. STRONG CLOSING CTA */}
      <section className="section-container" style={{ textAlign: 'center', background: 'radial-gradient(circle at center, rgba(217, 240, 107, 0.2), transparent 50%), var(--cream)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <span className="eyebrow">MULAI KONSULTASI HARI INI</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 48px)', margin: '12px 0 16px', lineHeight: 1.15 }}>
            Siap Menjadi Ahli K3 Umum Bersertifikat Resmi?
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '17px', lineHeight: 1.7, marginBottom: '32px' }}>
            Hubungi PT Kreasi Ultimate Berjaya untuk menanyakan jadwal batch terdekat, informasi ketersediaan kuota, estimasi biaya, atau proposal In-House Training K3 perusahaan Anda.
          </p>
          <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
            <a
              className="button button-primary button-large"
              href={waIntentUrl('jadwal', 'Ahli K3 Umum')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tanya Jadwal & Kuota Batch Ahli K3 Umum →
            </a>
            <a
              className="button button-secondary button-large"
              href={waIntentUrl('biaya', 'Pelatihan K3')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Minta Rincian Biaya Pelatihan
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
