'use client';

import React from 'react';
import Link from 'next/link';
import { type ContentRecord } from '@/src/lib/content';
import { HubSearchFilter } from './HubSearchFilter';
import { waIntentUrl } from '@/src/lib/site';

export function ProfesiPillarContent({ items }: { items: ContentRecord[] }) {
  return (
    <article className="profesi-pillar-article max-w-5xl mx-auto">
      {/* 1. HERO HEADER WITH SINGLE H1 */}
      <header className="hub-hero mb-8">
        <div className="eyebrow-pill">
          <span className="eyebrow-dot" />
          <span>PANDUAN LENGKAP PROFESI K3 INDONESIA</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mt-3 mb-4">
          Profesi K3 di Indonesia: Peran, Jalur Karir, Kompetensi, dan Penunjukan Regulasi
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          Eksplorasi komprehensif mengenai profesi Keselamatan dan Kesehatan Kerja (K3) di Indonesia: memahami hakikat tugas praktisi HSE, perbedaan status jabatan di perusahaan dengan penunjukan resmi Kemnaker RI, klasifikasi 9 spesialisasi teknis, peta jenjang karir terstruktur, hingga panduan menentukan jalur sertifikasi yang tepat.
        </p>
      </header>

      {/* TABLE OF CONTENTS (WORKING ANCHOR LINKS) */}
      <nav className="p-6 my-8 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm" aria-label="Daftar Isi Panduan Profesi K3">
        <strong className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-3">
          Daftar Isi Panduan Profesi K3
        </strong>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <li>
            <a href="#definisi-profesi-k3" className="hover:text-emerald-600 hover:underline">
              1. Apa Itu Profesi K3? Peran Strategis di Dunia Industri
            </a>
          </li>
          <li>
            <a href="#perbedaan-peran-sertifikasi-penunjukan" className="hover:text-emerald-600 hover:underline">
              2. Perbedaan Job Title, Penugasan, Sertifikasi, dan SKP Kemnaker
            </a>
          </li>
          <li>
            <a href="#kategori-bidang-spesialisasi" className="hover:text-emerald-600 hover:underline">
              3. 9 Kategori Bidang Spesialisasi Profesi K3
            </a>
          </li>
          <li>
            <a href="#panduan-memilih-profesi" className="hover:text-emerald-600 hover:underline">
              4. Panduan Memilih Profesi K3 Berdasarkan Profil & Latar Belakang
            </a>
          </li>
          <li>
            <a href="#jenjang-karir-k3" className="hover:text-emerald-600 hover:underline">
              5. Peta Jenjang Karir K3: Dari Entry Level hingga Konsultan
            </a>
          </li>
          <li>
            <a href="#tabel-komparasi-profesi-k3" className="hover:text-emerald-600 hover:underline">
              6. Tabel Perbandingan Peran Representatif K3
            </a>
          </li>
          <li>
            <a href="#koreksi-miskonsepsi-sertifikasi" className="hover:text-emerald-600 hover:underline">
              7. Klarifikasi Regulasi: Pelatihan vs Penunjukan Resmi Menteri
            </a>
          </li>
          <li>
            <a href="#direktori-jabatan-k3" className="hover:text-emerald-600 hover:underline">
              8. Direktori Terbuka 200 Jabatan & Spesialisasi Profesi K3
            </a>
          </li>
          <li>
            <a href="#faq-profesi-k3" className="hover:text-emerald-600 hover:underline">
              9. Pertanyaan Umum Seputar Profesi & Karir K3 (FAQ)
            </a>
          </li>
          <li>
            <a href="#konsultasi-karir-k3" className="hover:text-emerald-600 hover:underline">
              10. Konsultasi Pemilihan Jalur Pembinaan Profesi
            </a>
          </li>
        </ol>
      </nav>

      {/* SECTION 1: DEFINISI PROFESI K3 */}
      <section id="definisi-profesi-k3" className="my-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
          1. Apa Itu Profesi K3? Peran Strategis di Dunia Industri
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Profesi Keselamatan dan Kesehatan Kerja (K3) adalah bidang keahlian profesional multidisiplin yang berdedikasi untuk mengidentifikasi potensi bahaya, menganalisis risiko operasional, merancang sistem pengendalian teknis dan administratif, serta memelihara derajat kesehatan fisik, mental, dan sosial tertinggi bagi seluruh tenaga kerja di semua lapangan pekerjaan. Dalam lanskap korporasi global, bidang ini dikenal secara universal sebagai divisi HSE (<em>Health, Safety, and Environment</em>) atau EHS.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Secara yuridis di Indonesia, keberadaan praktisi K3 bukan sekadar inisiatif sukarela manajemen, melainkan mandat legal yang ditegaskan secara tegas dalam <Link href="/regulasi-k3/uu-1-1970-keselamatan-kerja" className="text-emerald-600 font-bold hover:underline">Undang-Undang No. 1 Tahun 1970 tentang Keselamatan Kerja</Link> serta <Link href="/regulasi-k3/uu-13-2003-ketenagakerjaan-k3" className="text-emerald-600 font-bold hover:underline">UU No. 13 Tahun 2003 tentang Ketenagakerjaan</Link>. Negara secara eksplisit mewajibkan setiap tempat kerja yang mempekerjakan personil dan memiliki potensi sumber bahaya untuk menerapkan standar keselamatan kerja serta mempekerjakan tenaga ahli yang memiliki sertifikasi kompetensi dan penunjukan resmi dari pemerintah.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Dalam ekosistem industri modern, peran profesi K3 telah bertransformasi secara fundamental. Praktisi K3 tidak lagi dipandang semata-mata sebagai pengawas lapangan yang memeriksa kelengkapan Alat Pelindung Diri (APD), melainkan sebagai mitra strategis bisnis (<em>strategic business partner</em>). Tanggung jawab intinya mencakup pemodelan skenario bahaya dengan <Link href="/alat/matriks-risiko" className="text-emerald-600 font-bold hover:underline">Matriks Risiko K3</Link>, penyusunan prosedur operasi standar (SOP), minimalisasi downtime akibat kerusakan fasilitas, perlindungan reputasi korporasi dari sanksi pidana ketenagakerjaan, serta mendukung upaya pencegahan insiden dan pengendalian risiko operasional.
        </p>
      </section>

      {/* SECTION 2: PERBEDAAN JOB TITLE VS PENUGASAN VS SERTIFIKASI VS SKP */}
      <section id="perbedaan-peran-sertifikasi-penunjukan" className="my-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
          2. Perbedaan Job Title, Penugasan Internal, Sertifikasi Kompetensi, dan SKP Kemnaker
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Salah satu kendala terbesar bagi pencari karir maupun staf manajemen adalah ketidakmampuan membedakan secara jernih antara nama jabatan kerja di perusahaan, penugasan internal organisasi, sertifikat kompetensi individu, dan penunjukan formal oleh kementerian. Keempat dimensi ini memiliki kedudukan hukum, masa berlaku, serta mekanisme penerbitan yang sangat berbeda:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
              Dimensi 1: Struktur Korporasi
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Jabatan Kerja (Job Title)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Nama posisi hierarkis dalam bagan organisasi perusahaan, seperti <em>Safety Officer</em>, <em>HSE Coordinator</em>, <em>Safety Inspector</em>, atau <em>EHS Manager</em>. Jabatan ini ditentukan sepenuhnya oleh kebijakan internal divisi Human Resources (HRD) dan manajemen perusahaan. Seseorang bisa saja menduduki jabatan Safety Officer tanpa memiliki SKP Kemnaker, sepanjang lingkup kerjanya adalah pendampingan operasional dan bukan bertindak sebagai penanggung jawab hukum norma K3 resmi perusahaan.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
              Dimensi 2: Mandat Organisasi Internal
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Peran Penugasan Internal (Company Role)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Tugas fungsional yang didelegasikan melalui Surat Keputusan (SK) Direksi atau pimpinan unit operasional. Contohnya adalah penunjukan sebagai Sekretaris Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3), Ketua Tim Tanggap Darurat (Emergency Response Team / ERT), Koordinator Evakuasi Gedung (Fire Warden), atau Petugas Pertolongan Pertama (P3K) pada shift kerja tertentu. Peran penugasan ini mengikat tanggung jawab operasional di lingkup internal entitas bisnis terkait.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
              Dimensi 3: Standar Kompetensi Profesi
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Sertifikasi Kompetensi (BNSP)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Pengakuan resmi atas keterampilan, pengetahuan teknis, dan sikap kerja individu yang diuji oleh Lembaga Sertifikasi Profesi (LSP) terlisensi Badan Nasional Sertifikasi Profesi (BNSP) berpedoman pada Standar Kompetensi Kerja Nasional Indonesia (SKKNI). Sertifikat BNSP melekat seutuhnya pada individu personil (personal credential), berlaku selama 3 tahun, dan diakui secara nasional lintas industri tanpa terikat pada status hubungan kerja di satu perusahaan tertentu.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
              Dimensi 4: Kewenangan Regulasi Negara
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Penunjukan & Lisensi (Kemnaker RI)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Surat Keputusan Penunjukan (SKP) dan Lisensi Kewenangan yang diterbitkan langsung oleh Menteri Ketenagakerjaan RI melalui Direktorat Jenderal Pembinaan Pengawasan Ketenagakerjaan dan K3. SKP memberikan wewenang hukum formal kepada personil di perusahaan pemohon untuk mengawasi langsung ketaatan terhadap norma UU K3 dan menandatangani dokumen resmi kepatuhan ke Dinas Tenaga Kerja. SKP terikat secara hukum pada badan usaha pengusul dan gugur jika personil berhenti bekerja.
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic">
          Pelajari komparasi mendalam antara kedua sistem sertifikasi pada panduan <Link href="/perbandingan/bnsp-vs-kemnaker" className="text-emerald-600 font-bold hover:underline">Perbandingan Sertifikasi BNSP vs Kemnaker RI</Link>.
        </p>
      </section>

      {/* SECTION 3: 9 KATEGORI BIDANG SPESIALISASI */}
      <section id="kategori-bidang-spesialisasi" className="my-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
          3. 9 Kategori Bidang Spesialisasi Profesi K3 di Indonesia
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Setiap sektor industri menghadapi karakter bahaya yang unik. Di Indonesia, kerangka regulasi membagi profesi K3 ke dalam 9 bidang spesialisasi utama yang masing-masing memiliki standar kurikulum pembinaan, persyaratan kompetensi teknis, serta dasar hukum perundangan tersendiri:
        </p>

        <div className="space-y-4">
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">1</span>
              K3 Umum & Manajemen SMK3 (General Health & Safety)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Merupakan fondasi utama sistem keselamatan kerja korporasi, mencakup peran <Link href="/pelatihan/ahli-k3-umum" className="text-emerald-600 font-semibold hover:underline">Ahli K3 Umum</Link>, <Link href="/pelatihan/auditor-smk3" className="text-emerald-600 font-semibold hover:underline">Auditor SMK3</Link>, dan <Link href="/pelatihan/lead-auditor-smk3" className="text-emerald-600 font-semibold hover:underline">Lead Auditor SMK3</Link>. Bertanggung jawab langsung atas perumusan kebijakan K3 perusahaan, pemenuhan 166 kriteria audit SMK3 berdasarkan Peraturan Pemerintah No. 50 Tahun 2012, pengelolaan komite P2K3, serta pengawasan kepatuhan lintas departemen.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">2</span>
              K3 Konstruksi & Pekerjaan Sipil
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Mencakup Ahli K3 Konstruksi (jenjang Muda, Madya, Utama) dan Petugas K3 Konstruksi mengacu pada Permenaker No. 01/Men/1980 dan Permen PUPR No. 10 Tahun 2021. Bertanggung jawab mengendalikan risiko pekerjaan galian dalam, struktur perancah (scaffolding), pengangkatan balok girder jembatan, penataan lalu lintas alat berat di site proyek, serta koordinasi keselamatan mitra subkontraktor.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">3</span>
              K3 Kelistrikan & Energi Listrik
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Mencakup Teknisi K3 Listrik dan Ahli K3 Spesialis Listrik yang diatur dalam Permenaker No. 12 Tahun 2015. Bertanggung jawab mengawasi perencanaan, pemasangan, pemeliharaan, serta pengujian berkala instalasi listrik, sistem isolasi energi Lockout-Tagout (LOTO), proteksi terhadap bahaya lonjakan petir, dan mitigasi bahaya busur api listrik (arc flash) sesuai ketentuan Pedoman Umum Instalasi Listrik (PUIL 2020).
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">4</span>
              K3 Penanggulangan Kebakaran
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Tersusun dalam empat strata kualifikasi berdasarkan Kepmenaker No. Kep.186/MEN/1999: Petugas Peran Kebakaran (Kelas D), Regu Penanggulangan Kebakaran (Kelas C), Koordinator Unit Kebakaran (Kelas B), dan Ahli K3 Spesialis Kebakaran (Kelas A). Mengelola kesiapan sistem deteksi otomatis, jaringan hidran, sprinkler, APAR, serta penyusunan skenario simulasi evakuasi darurat gedung bertingkat.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">5</span>
              Kesehatan Kerja, Higiene Perusahaan & Medis
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Mencakup Dokter Perusahaan bersertifikasi Hiperkes, Paramedis / Perawat Perusahaan bersertifikasi Hiperkes (Permenaker No. 01/1976 & 01/1979), serta Petugas Pertolongan Pertama Pada Kecelakaan (P3K) di Tempat Kerja (Permenaker No. 15/2008). Menjalankan fungsi diagnosis penyakit akibat kerja (PAK), surveilans biologis, pemantauan ergonomi postur kerja, dan operasional klinik kesehatan kerja perusahaan.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">6</span>
              K3 Lingkungan Kerja & Higiene Industri
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Mencakup Ahli K3 Lingkungan Kerja (Permenaker No. 5 Tahun 2018) dan Tenaga Higiene Industri berstandar BNSP (HIMU, HIMA, HIU). Melakukan pengukuran instrumentasi laboratorium terhadap faktor fisika (kebisingan, getaran mekanis, pencahayaan, gelombang elektromagnetik), faktor kimia (debu terhirup, uap gas toksik), faktor biologi, dan pengujian beban kerja psikososial.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">7</span>
              K3 Pesawat Angkat & Pesawat Angkut (PAA)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Mencakup Ahli K3 Pesawat Angkat dan Angkut, Operator Forklift, Operator Mobile Crane, Overhead Crane, Tower Crane, serta Rigger / Juru Ikat Beban berdasarkan Permenaker No. 8 Tahun 2020. Fokus utama adalah pengujian kapasitas angkut (load testing), stabilitas alat berat, integritas sling baja, dan pencegahan risiko tertimpa muatan berat saat operasional logistik atau pabrikasi.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">8</span>
              K3 Bekerja di Ketinggian & Ruang Terbatas
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Mencakup Tenaga Kerja Bangunan Tinggi (TKBT Tingkat 1 & 2), Tenaga Kerja Pada Ketinggian (TKPK Tingkat 1, 2, 3) mengacu pada Permenaker No. 9 Tahun 2016, serta Petugas Madya & Pengawas Ruang Terbatas (Confined Space) berdasarkan Permenaker No. 11 Tahun 2023. Menguasai teknik pemasangan angkur, tali akses (rope access), prosedur evakuasi vertical rescue, serta pengukuran konsentrasi oksigen dan gas mudah meledak di tangki tertutup.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">9</span>
              K3 Kimia, Bejana Tekan & Proses Manufaktur
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
              Mencakup Ahli K3 Kimia dan Petugas K3 Kimia (Kepmenaker No. Kep.187/MEN/1999), Operator Boiler / Bejana Uap, dan Teknisi Bejana Tekan & Tangki Timbun (Permenaker No. 37 Tahun 2016). Bertanggung jawab atas pengelolaan dokumen Lembar Data Keselamatan (LDK/SDS), klasifikasi potensi bahaya besar (Major Hazard Installation), dan integritas pipa bertekanan tinggi di industri kimia, petrokimia, dan farmasi.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: PANDUAN MEMILIH PROFESI */}
      <section id="panduan-memilih-profesi" className="my-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
          4. Panduan Memilih Profesi K3 Berdasarkan Profil & Latar Belakang
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Menentukan jalur profesi K3 yang tepat membutuhkan keselarasan antara latar belakang pendidikan formal, portofolio pengalaman lapangan yang dimiliki, sektor industri sasaran, serta target karir jangka panjang:
        </p>

        <div className="space-y-4 my-6">
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              A. Pemilihan Berdasarkan Jenjang Pendidikan Formal
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li>
                <strong>Lulusan SMA/SMK Sederajat:</strong> Jalur paling efektif adalah memulai karir dari posisi teknisi operasional bersertifikasi, seperti Operator Forklift, Teknisi Scaffolding, Petugas Peran Kebakaran Kelas D, Tenaga Kerja Bangunan Tinggi (TKBT 2), atau Petugas P3K. Sertifikasi ini membuktikan keterampilan teknis langsung dan menjadi batu loncatan pengalaman sebelum melanjutkan studi ke jenjang diploma atau sarjana.
              </li>
              <li>
                <strong>Lulusan Diploma Tiga (D3) Teknik atau Sains:</strong> Memiliki landasan teknis yang kuat untuk mengambil jalur pembinaan penunjukan Ahli K3 Umum Kemnaker RI (dengan syarat pengalaman kerja relevan di perusahaan), Ahli K3 Konstruksi Muda, Teknisi K3 Listrik, atau sertifikasi Pengawas K3 Migas berstandar BNSP.
              </li>
              <li>
                <strong>Lulusan Sarjana (S1) Semua Jurusan:</strong> Memiliki fleksibilitas regulasi tertinggi di Indonesia. Berdasarkan Permenaker No. Per.02/MEN/1992, sarjana dari disiplin ilmu teknik maupun non-teknik memenuhi syarat legalitas untuk ditunjuk sebagai <Link href="/panduan/syarat-ahli-k3-umum" className="text-emerald-600 font-bold hover:underline">Ahli K3 Umum Kemnaker RI</Link>, Auditor SMK3 PP 50/2012, serta terbuka luas menduduki posisi manajerial HSE korporasi.
              </li>
              <li>
                <strong>Lulusan Tenaga Medis (dr. dan Perawat/Ners):</strong> Jalur wajib dan spesifik adalah mengikuti sertifikasi Hiperkes Kemnaker RI untuk dapat berpraktik sebagai Dokter Perusahaan atau Paramedis Perusahaan yang mengelola pelayanan kesehatan kerja institusional.
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              B. Pemilihan Berdasarkan Tahap Pengalaman Kerja
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li>
                <strong>Fresh Graduate / Pemula:</strong> Fokuslah pada pembinaan dasar yang memiliki daya tawar tertinggi di bursa kerja, yaitu sertifikasi Ahli K3 Umum 120 JP atau sertifikasi BNSP level staf. Target posisi awal yang realistis adalah Junior HSE Officer, Safety Administrator, atau Field Safety Inspector.
              </li>
              <li>
                <strong>Mid-Level (2–5 Tahun Pengalaman):</strong> Kembangkan kompetensi dengan mengambil sertifikasi spesialisasi teknis sesuai bidang industri yang ditekuni (misalnya Ahli K3 Listrik, Ahli K3 Kimia, atau K3 Kebakaran) dan ambil sertifikasi Auditor SMK3 untuk menguasai tata kelola audit sistem manajemen.
              </li>
              <li>
                <strong>Senior Professional (5+ Tahun Pengalaman):</strong> Tingkatkan kapabilitas ke ranah kepemimpinan strategis melalui sertifikasi Lead Auditor SMK3 / ISO 45001, kualifikasi Asesor Kompetensi BNSP, atau mempersiapkan diri sebagai konsultan dan auditor independen pihak ketiga.
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              C. Pemilihan Berdasarkan Sektor Industri Target
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li>
                <strong>Sektor Manufaktur & FMCG:</strong> Memprioritaskan Ahli K3 Umum untuk sekretaris P2K3, Teknisi K3 Listrik untuk instalasi mesin produksi, Petugas Kebakaran Kelas D/C, dan Petugas P3K shift kerja pabrik.
              </li>
              <li>
                <strong>Sektor Jasa Konstruksi & EPC:</strong> Sangat mewajibkan Ahli K3 Konstruksi, Pengawas Scaffolding, Rigger pengikatan beban, serta Tenaga Kerja Pada Ketinggian (TKPK).
              </li>
              <li>
                <strong>Sektor Minyak, Gas Bumi, Petrokimia & Tambang:</strong> Menuntut sertifikasi ketat seperti Pengawas K3 Migas, Ahli K3 Kimia, Petugas Ruang Terbatas (Confined Space), dan Penguji Gas Atmosfer (Authorized Gas Tester).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5: PETA JENJANG KARIR */}
      <section id="jenjang-karir-k3" className="my-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
          5. Peta Jenjang Karir K3: Dari Entry Level hingga Konsultan Independen
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          Bidang keselamatan dan kesehatan kerja menawarkan jenjang karir yang sangat dinamis dengan tangga kenaikan tanggung jawab manajerial dan remunerasi finansial yang jelas:
        </p>

        <div className="relative border-l-2 border-emerald-500 ml-4 pl-6 space-y-6">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Tahap 1</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Entry Level: Field Safety Inspector / Safety Officer
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Tanggung jawab utama berpusat pada kepatuhan operasional harian: memberikan Safety Induction bagi tamu dan pekerja baru, memimpin Toolbox Meeting (TBM) sebelum shift dimulai, memeriksa izin kerja berisiko tinggi (Working Permit), dan menginspeksi kelaikan APD di area kerja. Pahami rincian tugas harian ini pada artikel <Link href="/panduan/tugas-ahli-k3-umum" className="text-emerald-600 font-semibold hover:underline">Tugas dan Tanggung Jawab Ahli K3 Umum</Link>.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Tahap 2</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Mid-Level: HSE Coordinator / Safety Specialist
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Bertanggung jawab mengoordinasikan implementasi program K3 di tingkat departemen atau divisi, menganalisis statistik indikator kinerja keselamatan (Lagging & Leading Indicators), mengkaji dokumen HIRADC dan JSA bersama divisi teknik, serta memimpin program mitigasi bahaya spesifik (kebakaran, kelistrikan, atau bahan kimia berbahaya).
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Tahap 3</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Supervisory & Management: HSE Supervisor / EHS Manager
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Memimpin divisi K3 di tingkat pabrik atau operasional proyek berskala besar. Bertanggung jawab atas alokasi anggaran K3, memfasilitasi rapat bulanan P2K3 bersama jajaran direksi, mengoordinasikan pelaksanaan audit internal SMK3 PP 50/2012 atau ISO 45001, serta menjadi representasi utama perusahaan saat berinteraksi dengan Pengawas Ketenagakerjaan pemerintah.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Tahap 4</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Executive Level: Corporate HSE Director / VP of Health & Safety
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Merumuskan kebijakan keselamatan jangka panjang tingkat holding korporasi lintas anak perusahaan. Menyelaraskan program K3 dengan target keberlanjutan Environmental, Social, and Governance (ESG), memimpin investigasi independen insiden fatal tingkat tinggi, serta memastikan kesinambungan lisensi operasional bisnis di tingkat nasional maupun internasional.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Tahap 5</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Independent Practice: Senior HSE Consultant, Auditor Eksternal & Asesor BNSP
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Praktisi berkaliber tinggi yang beroperasi secara mandiri atau bermitra dengan Perusahaan Jasa K3 (PJK3) dan Lembaga Audit SMK3 independen. Menyediakan jasa audit pihak ketiga, pendampingan sertifikasi SMK3 dan ISO 45001, analisis keselamatan proses (HAZOP/SIL), serta menjadi asesor penguji kompetensi personil K3 nasional.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: TABEL PERBANDINGAN PERAN REPRESENTATIF */}
      <section id="tabel-komparasi-profesi-k3" className="my-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
          6. Tabel Perbandingan Peran Representatif Profesi K3
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          Tabel berikut menyajikan komparasi delapan peran representatif profesi K3 di Indonesia berdasarkan deskripsi tanggung jawab utama, karakteristik lingkungan kerja, syarat kualifikasi minimum, serta jalur pembinaan dan sertifikasi yang relevan:
        </p>

        <div className="overflow-x-auto my-6 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3.5 font-bold min-w-[150px]">Peran K3</th>
                <th className="p-3.5 font-bold min-w-[220px]">Tanggung Jawab Utama</th>
                <th className="p-3.5 font-bold min-w-[150px]">Tempat Kerja Umum</th>
                <th className="p-3.5 font-bold min-w-[160px]">Syarat Pendidikan / Pengalaman</th>
                <th className="p-3.5 font-bold min-w-[200px]">Jalur Pembinaan & Sertifikasi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                  Safety Officer / Junior HSE
                </td>
                <td className="p-3.5">
                  Inspeksi lapangan harian, pemantauan APD, safety induction pekerja baru, dan administrasi surat izin kerja aman (working permit).
                </td>
                <td className="p-3.5">Proyek konstruksi, pabrik manufaktur, fasilitas logistik.</td>
                <td className="p-3.5">D3/S1 semua jurusan (fresh graduate) atau SMK berpengalaman lapangan.</td>
                <td className="p-3.5">
                  <Link href="/pelatihan/ahli-k3-umum" className="text-emerald-600 font-semibold hover:underline">Ahli K3 Umum 120 JP</Link> atau BNSP Safety Officer.
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                  Ahli K3 Umum (Sekretaris P2K3)
                </td>
                <td className="p-3.5">
                  Mengawasi kepatuhan norma UU K3 perusahaan, memimpin program kerja tahunan P2K3, dan menyusun laporan triwulan resmi ke Disnaker.
                </td>
                <td className="p-3.5">Perusahaan wajib K3 (&gt;100 pekerja atau potensi bahaya tinggi).</td>
                <td className="p-3.5">Minimal D3/S1 + berstatus karyawan aktif di perusahaan pengusul SKP.</td>
                <td className="p-3.5">
                  Pembinaan Ahli K3 Umum Sertifikasi Kemnaker RI (Permenaker 02/1992).
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                  Auditor SMK3 (PP 50/2012)
                </td>
                <td className="p-3.5">
                  Melakukan audit internal berkala terhadap 64, 122, atau 166 kriteria pemenuhan Sistem Manajemen K3 PP 50/2012.
                </td>
                <td className="p-3.5">Departemen internal korporasi atau Lembaga Audit SMK3 resmi.</td>
                <td className="p-3.5">Pendidikan D3/S1 dengan portofolio implementasi K3 &gt;1 tahun.</td>
                <td className="p-3.5">
                  <Link href="/pelatihan/auditor-smk3" className="text-emerald-600 font-semibold hover:underline">Pelatihan Auditor SMK3</Link> / <Link href="/pelatihan/lead-auditor-smk3" className="text-emerald-600 font-semibold hover:underline">Lead Auditor</Link> Kemnaker RI.
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                  Ahli K3 Konstruksi
                </td>
                <td className="p-3.5">
                  Pengendalian bahaya struktural sipil, inspeksi scaffolding, galian tanah, pengangkatan balok girder, dan keselamatan subkon.
                </td>
                <td className="p-3.5">Proyek konstruksi gedung, infrastruktur jembatan, jalan tol.</td>
                <td className="p-3.5">D3/S1 Teknik Sipil/Arsitektur + pengalaman proyek konstruksi.</td>
                <td className="p-3.5">
                  Sertifikasi Ahli K3 Konstruksi Kemnaker / BNSP. Bandingkan pada <Link href="/perbandingan/ahli-k3-umum-vs-ahli-k3-konstruksi" className="text-emerald-600 font-semibold hover:underline">K3 Umum vs K3 Konstruksi</Link>.
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                  Teknisi & Ahli K3 Listrik
                </td>
                <td className="p-3.5">
                  Pengujian tahanan isolasi & pembumian (grounding), inspeksi instalasi gardu listrik, dan pengawasan prosedur isolasi LOTO.
                </td>
                <td className="p-3.5">Pembangkit tenaga listrik, pabrik industri manufaktur, gardu induk.</td>
                <td className="p-3.5">SMK Listrik (Teknisi) / D3-S1 Teknik Elektro (Ahli K3 Listrik).</td>
                <td className="p-3.5">
                  Pembinaan Teknisi K3 Listrik / Ahli K3 Listrik (Permenaker 12/2015).
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                  Petugas K3 Kebakaran (Kelas D/C)
                </td>
                <td className="p-3.5">
                  Inspeksi kesiapan tabung APAR dan hydrant, pemadaman awal kebakaran, dan pemanduan jalur evakuasi saat keadaan darurat.
                </td>
                <td className="p-3.5">Gedung perkantoran bertingkat, mall, fasilitas rumah sakit, pabrik.</td>
                <td className="p-3.5">Minimal lulusan SMA/SMK atau personil satuan pengamanan / teknisi gedung.</td>
                <td className="p-3.5">
                  Pelatihan Penanggulangan Kebakaran Kelas D/C Kemnaker RI (Kep.186/1999).
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                  Dokter & Paramedis Hiperkes
                </td>
                <td className="p-3.5">
                  Pemeriksaan kesehatan tenaga kerja (awal, berkala, khusus), penegakan diagnosis penyakit akibat kerja (PAK), dan surveilans medis.
                </td>
                <td className="p-3.5">Klinik kesehatan kerja perusahaan, rumah sakit okupasi, site pertambangan.</td>
                <td className="p-3.5">Dokter Umum berijazah kedokteran / Perawat berijazah keperawatan.</td>
                <td className="p-3.5">
                  Sertifikasi Resmi Hiperkes Dokter / Paramedis Kemnaker RI.
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                  Teknisi Akses Ketinggian (TKPK)
                </td>
                <td className="p-3.5">
                  Pemasangan sistem angkur keselamatan, manuver tali akses (rope access), inspeksi full body harness, dan vertical rescue.
                </td>
                <td className="p-3.5">Menara telekomunikasi, flare stack kilang minyak, pembersih fasad gedung.</td>
                <td className="p-3.5">Kondisi fisik prima, lulus uji medis acrophobia, minimal SMA/SMK.</td>
                <td className="p-3.5">
                  Sertifikasi Tenaga Kerja Pada Ketinggian TKPK 1/2/3 Kemnaker (Permenaker 09/2016).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 7: KLARIFIKASI REGULASI */}
      <section id="koreksi-miskonsepsi-sertifikasi" className="my-10 scroll-mt-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
          7. Klarifikasi Regulasi: Menyelesaikan Pelatihan Tidak Otomatis Mendapatkan Gelar atau Penunjukan Menteri
        </h2>
        <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 leading-relaxed text-xs sm:text-sm">
          <strong className="block text-sm sm:text-base font-black mb-2 text-amber-950 dark:text-amber-100 flex items-center gap-1.5">
            <span>⚠️</span> Penegasan Yuridis Terkait SKP & Lisensi Kemnaker RI
          </strong>
          <p className="mb-3">
            Terdapat kesalahpahaman umum bahwa setelah menyelesaikan pembinaan 120 JP dan dinyatakan lulus evaluasi, seseorang secara mandiri langsung berstatus hukum penuh sebagai &ldquo;Ahli K3 Umum Pemerintah&rdquo; kemanapun ia melangkah. Regulasi perundangan ketenagakerjaan menetapkan ketentuan yang tegas:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-3">
            <li>
              <strong>Sertifikat Pembinaan / Kelulusan:</strong> Diterbitkan atas nama pribadi peserta sebagai bukti otentik telah mengikuti seluruh jam pelajaran pembinaan norma K3 dan lulus ujian evaluasi. Dokumen ini berlaku seumur hidup sebagai rekaman kompetensi pendidikan formal.
            </li>
            <li>
              <strong>Surat Keputusan Penunjukan (SKP) & Lisensi Kewenangan:</strong> Hanya dapat diterbitkan oleh Direktur Jenderal Binwasnaker & K3 atas nama Menteri Ketenagakerjaan RI apabila peserta <em>berstatus karyawan aktif di suatu perusahaan</em> dan diajukan secara resmi oleh direksi perusahaan tempat ia bekerja melalui surat permohonan penunjukan.
            </li>
            <li>
              <strong>Konsekuensi Hukum Berpindah Kerja:</strong> Apabila seorang Ahli K3 mengundurkan diri (resign) atau berpindah tempat kerja ke entitas bisnis lain, maka SKP di perusahaan lama otomatis gugur demi hukum. Perusahaan baru tempat ia bergabung wajib mengajukan proses mutasi SKP ke instansi ketenagakerjaan untuk menerbitkan SKP baru atas nama badan usaha baru tersebut.
            </li>
            <li>
              <strong>Bagi Peserta Lulusan Baru (Fresh Graduate):</strong> Lulusan baru yang belum bekerja tetap sangat diuntungkan mengikuti pembinaan Ahli K3 Umum untuk meraih Sertifikat Kelulusan resmi Kemnaker RI. Sertifikat ini menjadi bukti kompetensi kuat di mata rekruter, dan penerbitan SKP perusahaannya akan diproses segera setelah resmi menandatangani kontrak kerja.
            </li>
          </ol>
          <p className="font-semibold">
            Aturan ini memastikan bahwa wewenang penunjukan K3 oleh negara selalu bersandar pada tanggung jawab nyata di lapangan kerja, bukan sekadar kepemilikan sertifikat di atas kertas.
          </p>
        </div>
      </section>

      {/* SECTION 8: DIREKTORI PROFESI & SEARCHABLE GRID */}
      <section id="direktori-jabatan-k3" className="my-12 scroll-mt-20">
        <div className="section-heading mb-6">
          <span className="eyebrow text-emerald-600 font-extrabold tracking-wider">
            KATALOG LENGKAP JABATAN & PROFESI
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
            8. Eksplorasi 200 Jabatan & Spesialisasi Profesi K3
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Gunakan fitur pencarian interaktif dan filter kategori di bawah untuk menelusuri rincian tugas, kualifikasi, silabus kompetensi, serta regulasi rujukan dari setiap jabatan profesi K3:
          </p>
        </div>

        {/* PRESERVE SEARCHABLE FILTER GRID (ALL 200 CARDS INCLUDED) */}
        <HubSearchFilter items={items} isCourseSection={true} sectionLabel="Profesi K3" />
      </section>

      {/* SECTION 9: FAQ PROFESI K3 */}
      <section id="faq-profesi-k3" className="my-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-6">
          9. Pertanyaan Umum Seputar Profesi & Karir K3 (FAQ)
        </h2>

        <div className="space-y-4">
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
              Apakah lulusan non-teknik bisa berkarir di bidang K3?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Bisa. Berdasarkan Permenaker No. Per.02/MEN/1992, persyaratan formal untuk mengikuti pembinaan calon Ahli K3 Umum Kemnaker RI adalah berpendidikan minimal Sarjana (S1) atau Diploma Tiga (D3) dari <em>semua jurusan</em>, termasuk lulusan ilmu sosial, hukum, manajemen, kesehatan masyarakat, dan ilmu kependidikan. Lulusan non-teknik memiliki keunggulan kompetitif pada aspek tata kelola administrasi regulasi, audit SMK3, investigasi kepatuhan hukum ketenagakerjaan, serta program sosialisasi budaya keselamatan kerja.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
              Berapa estimasi rentang gaji profesi K3 di Indonesia?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Rentang remunerasi profesi K3 bervariasi bergantung pada sektor industri, lokasi penempatan kerja, dan sertifikasi keahlian yang dimiliki. Untuk tingkat entry-level (Safety Officer fresh graduate), gaji umumnya berkisar antara Rp 4.500.000 hingga Rp 7.500.000 per bulan. Pada level koordinator dan spesialis dengan masa kerja 3–5 tahun berkisar antara Rp 8.000.000 hingga Rp 15.000.000. Sementara pada level manajerial (EHS Manager) di sektor berisiko tinggi seperti minyak, gas bumi, dan pertambangan dapat mencapai Rp 20.000.000 hingga lebih dari Rp 45.000.000 per bulan.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
              Berapa lama masa berlaku Lisensi Kewenangan K3 Kemnaker RI?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Lisensi K3 dan Surat Keputusan Penunjukan (SKP) Ahli K3 Umum yang diterbitkan oleh Kementerian Ketenagakerjaan RI memiliki masa berlaku selama 3 (tiga) tahun. Sebelum masa berlaku habis, perusahaan wajib mengajukan permohonan perpanjangan lisensi dengan melampirkan salinan laporan kegiatan P2K3 berkala, evaluasi program K3 tahunan, serta dokumen administrasi ketenagakerjaan yang dipersyaratkan.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
              Apa perbedaan mendasar antara Safety Officer dan Ahli K3 Umum?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Safety Officer merupakan sebutan jabatan kerja operasional lapangan yang bertugas mengawasi aktivitas kerja sehari-hari dan menegakkan kepatuhan SOP di area kerja. Sedangkan Ahli K3 Umum adalah kualifikasi personel K3 yang dapat terkait dengan mekanisme penunjukan dan persyaratan sesuai regulasi yang berlaku dari Menteri Ketenagakerjaan RI melalui SKP untuk mengawasi ditaatinya UU No. 1/1970 serta bertindak sebagai Sekretaris P2K3 di perusahaan. Seseorang yang menjabat Safety Officer idealnya memiliki penunjukan Ahli K3 Umum agar memiliki legalitas hukum formal saat menandatangani dokumen ketenagakerjaan.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
              Apakah sertifikat BNSP bidang K3 diakui di luar negeri?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Sertifikat kompetensi BNSP diterbitkan mengacu pada Standar Kompetensi Kerja Nasional Indonesia (SKKNI). Pengakuan sertifikat di luar Indonesia bergantung pada perusahaan, negara tujuan, skema sertifikasi, dan persyaratan pekerjaan.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
              Bagaimana jika perusahaan belum memiliki Panitia Pembina K3 (P2K3)?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Berdasarkan Permenaker No. Per.04/MEN/1987, perusahaan yang mempekerjakan 100 orang tenaga kerja atau memiliki potensi bahaya tinggi wajib membentuk P2K3, dengan sekretaris wajib dijabat oleh Ahli K3 Umum resmi. Perusahaan dapat mengutus calon personil untuk mengikuti pembinaan Ahli K3 Umum, kemudian mengajukan pengesahan susunan pengurus P2K3 ke Dinas Tenaga Kerja setempat. Rincian anggaran pembinaan dapat dipelajari pada <Link href="/panduan/biaya-pelatihan-k3" className="text-emerald-600 font-semibold hover:underline">Rincian Biaya Pelatihan K3 Resmi</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: FACTUAL CALL TO ACTION */}
      <section id="konsultasi-karir-k3" className="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md border border-slate-700">
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold tracking-wider uppercase text-emerald-400 block mb-2">
            KONSULTASI JALUR PEMBINAAN K3
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug mb-3">
            Bingung Memilih Jalur Sertifikasi Profesi K3 yang Tepat?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            Diskusikan latar belakang pendidikan Anda, kebutuhan kepatuhan hukum perusahaan, dan jadwal batch pembinaan terdekat bersama tim konsultan PT Kreasi Ultimate Berjaya. Kami menyediakan asistensi penelaahan berkas pendaftaran dan pemetaan skema pembinaan yang sesuai dengan tujuan karir Anda.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={waIntentUrl('syarat', 'Konsultasi Profesi K3')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-extrabold text-xs sm:text-sm text-white transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Konsultasi Pemilihan Jalur Profesi via WhatsApp</span>
              <span aria-hidden="true">→</span>
            </a>
            <Link
              href="/jadwal"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 font-bold text-xs sm:text-sm text-white transition-all inline-flex items-center gap-2"
            >
              <span>Lihat Jadwal Batch 2026</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
