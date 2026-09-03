'use client';

import React from 'react';
import Link from 'next/link';
import { type ContentRecord } from '@/src/lib/content';
import { HubSearchFilter } from './HubSearchFilter';
import { FaqAccordion } from './FaqAccordion';
import { InHouseCtaBox } from './ConversionCta';
import { TrainingPhotoStrip } from './TrainingPhotoStrip';
import { sectionFaqs, sectionLegalInfo } from '@/src/lib/section-data';
import { waIntentUrl } from '@/src/lib/site';

export function PelatihanHubContent({ items }: { items: ContentRecord[] }) {
  const faqs = sectionFaqs.pelatihan || [];
  const legal = sectionLegalInfo.pelatihan;

  return (
    <div className="hub-pelatihan-content">
      {/* 1. Commercial Hero Section */}
      <section className="hub-hero-commercial bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-10 md:p-12 mb-10 shadow-xl border border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Katalog Program Pelatihan K3 Indonesia</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Pelatihan K3 untuk Individu dan Perusahaan
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Program pelatihan keselamatan dan kesehatan kerja (K3) yang tepat ditentukan oleh peran personil di tempat kerja, jenis aktivitas dan potensi bahaya operasional, kewajiban regulasi perusahaan, target capaian sertifikasi, serta metode pelaksanaan yang dibutuhkan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-5">
            <a
              href={waIntentUrl('jadwal', 'Pelatihan K3 dari Hub Program')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/30 transition-all hover:-translate-y-0.5"
            >
              <span>💬</span>
              <span>Tanya Jadwal dan Biaya</span>
            </a>
            <a
              href={waIntentUrl('perusahaan', 'Rekomendasi Program Pelatihan K3')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/15 transition-all hover:-translate-y-0.5"
            >
              <span>📋</span>
              <span>Minta Rekomendasi Program</span>
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            Belum tahu program yang tepat? Sampaikan pekerjaan, industri, pendidikan, pengalaman dan kebutuhan perusahaan melalui WhatsApp.
          </p>
        </div>
      </section>

      {/* 2. Quick Visitor-Path Selector (Pilih Berdasarkan Kebutuhan Anda) */}
      <section className="mb-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs">
            PANDUAN PENDAFTARAN CEPAT
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
            Pilih Berdasarkan Kebutuhan Anda
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Mulai dari jalur yang paling relevan dengan situasi Anda hari ini untuk mendapatkan pendampingan yang tepat sasaran.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Peserta Individu */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg mb-4">
                👤
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Saya Ingin Mendaftar Pelatihan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Temukan program berdasarkan pekerjaan, latar belakang dan target kompetensi.
              </p>
            </div>
            <a
              href={waIntentUrl('syarat', 'Konsultasi Pendaftaran Pelatihan K3 Individu')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
            >
              <span>Konsultasi Program Individu</span>
              <span>→</span>
            </a>
          </div>

          {/* Card 2: Pembeli Korporasi */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg mb-4">
                🏢
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Perusahaan Membutuhkan Pelatihan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Diskusikan kebutuhan peserta, lokasi, risiko kerja dan target pelaksanaan.
              </p>
            </div>
            <a
              href={waIntentUrl('perusahaan', 'Permohonan In-House Training K3 Perusahaan')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
            >
              <span>Ajukan In-House Training</span>
              <span>→</span>
            </a>
          </div>

          {/* Card 3: Perbandingan Jalur */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-amber-500/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg mb-4">
                ⚖️
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Saya Membandingkan Jalur Sertifikasi
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Pahami perbedaan fungsi pembinaan, sertifikasi kompetensi dan penunjukan sesuai kebutuhan.
              </p>
            </div>
            <Link
              href="/perbandingan/bnsp-vs-kemnaker"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
            >
              <span>Bandingkan Kemnaker vs BNSP</span>
              <span>→</span>
            </Link>
          </div>

          {/* Card 4: Pengunjung yang Belum Tahu Programnya */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-violet-500/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold text-lg mb-4">
                🧭
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Saya Belum Tahu Programnya
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Sampaikan pekerjaan atau risiko yang dihadapi untuk mendapatkan pilihan awal.
              </p>
            </div>
            <a
              href={waIntentUrl('jadwal', 'Belum Menentukan Program Pelatihan K3')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
            >
              <span>Minta Rekomendasi</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Featured Flagship: Pelatihan Ahli K3 Umum */}
      <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border border-emerald-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <span className="eyebrow text-emerald-700 dark:text-emerald-400 font-extrabold tracking-wider text-xs block mb-1">
                FLAGSHIP & SYARAT PENUNJUKAN PERUSAHAAN
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
                Program Unggulan: Pelatihan Ahli K3 Umum
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Pembinaan norma keselamatan kerja komprehensif berdurasi 120 Jam Pelajaran (JP) sesuai Permenaker No. Per.02/MEN/1992. Membekali calon Ahli K3 dalam mengawasi pemenuhan norma teknis kerja, menyusun kertas kerja PKL, dan memenuhi kriteria penunjukan personil K3 perusahaan.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-5">
                <span className="px-2.5 py-1 rounded-md bg-emerald-100/60 dark:bg-emerald-950/60 border border-emerald-300/50 dark:border-emerald-800/50">
                  ⏱️ Durasi: 120 JP (± 12 Hari)
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-100/60 dark:bg-emerald-950/60 border border-emerald-300/50 dark:border-emerald-800/50">
                  🎓 Syarat: Min. D3/S1 Semua Jurusan
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-100/60 dark:bg-emerald-950/60 border border-emerald-300/50 dark:border-emerald-800/50">
                  🌐 Metode: Blended / Tatap Muka
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={waIntentUrl('jadwal', 'Jadwal Pelatihan Ahli K3 Umum')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow transition-all"
                >
                  <span>💬</span>
                  <span>Tanya Jadwal Ahli K3 Umum</span>
                </a>
                <Link
                  href="/pelatihan/ahli-k3-umum"
                  className="inline-flex items-center gap-1 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold border border-slate-300 dark:border-slate-700 transition-colors"
                >
                  <span>Lihat Silabus Lengkap</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 pt-4 md:pt-0 md:pl-6 text-xs text-slate-500 dark:text-slate-400 space-y-2 min-w-[200px]">
              <span className="font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider text-[11px]">
                Panduan Pendukung:
              </span>
              <ul className="space-y-1.5">
                <li>
                  <Link href="/panduan/syarat-ahli-k3-umum" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                    📄 Syarat Berkas & Ijazah Ahli K3 Umum
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/biaya-pelatihan-k3" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                    💳 Struktur Biaya & Komponen Investasi K3
                  </Link>
                </li>
                <li>
                  <Link href="/perbandingan/bnsp-vs-kemnaker" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                    ⚖️ Perbedaan Lisensi Kemnaker vs BNSP
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Program-Pathway Explanation (Kenali Jenis Program Sebelum Memilih) */}
      <section className="mb-12">
        <div className="max-w-3xl mb-6">
          <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs">
            KLASIFIKASI JALUR K3
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-1">
            Kenali Jenis Program Sebelum Memilih
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Tidak semua pelatihan K3 menghasilkan lisensi atau sertifikasi yang sama. Memahami perbedaan fungsional antara pembinaan regulasi, sertifikasi kompetensi, pelatihan teknis operasional, dan in-house training membantu Anda mengalokasikan waktu dan anggaran secara tepat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
              Jalur 1
            </span>
            <h3 className="text-base font-black text-slate-900 dark:text-white mb-2">
              Pembinaan & Penunjukan K3
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Program kepatuhan wajib berbasis regulasi ketenagakerjaan Kemnaker RI. Ditujukan bagi personil yang didelegasikan perusahaan untuk menjalankan tugas berwenang seperti Ahli K3, Petugas K3, atau Auditor SMK3.
            </p>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block pt-2 border-t border-slate-100 dark:border-slate-800">
              Output: Sertifikat Pembinaan, SKP & Lisensi Kemnaker (khusus utusan perusahaan).
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
              Jalur 2
            </span>
            <h3 className="text-base font-black text-slate-900 dark:text-white mb-2">
              Sertifikasi Kompetensi
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Asesmen standar keterampilan profesi berbasis Standar Kompetensi Kerja Nasional Indonesia (SKKNI) melalui LSP berlisensi BNSP. Mengakui kemampuan nyata individu dalam unjuk kerja bidang K3 independen.
            </p>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block pt-2 border-t border-slate-100 dark:border-slate-800">
              Output: Sertifikat Kompetensi K3 BNSP berlogo Garuda (masa berlaku 3 tahun).
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1">
              Jalur 3
            </span>
            <h3 className="text-base font-black text-slate-900 dark:text-white mb-2">
              Pelatihan Teknis & Operasional
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Pelatihan keterampilan praktis di tempat kerja untuk meminimalkan risiko langsung seperti bekerja di ketinggian, isolasi energi (LOTO), penanganan bahan kimia B3, keselamatan ruang terbatas, atau safety induction.
            </p>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block pt-2 border-t border-slate-100 dark:border-slate-800">
              Output: Sertifikat Pelatihan Penyelenggara & bukti pemenuhan prosedur kerja aman.
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider block mb-1">
              Jalur 4
            </span>
            <h3 className="text-base font-black text-slate-900 dark:text-white mb-2">
              In-House Training Perusahaan
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Penyelenggaraan kelas khusus karyawan satu perusahaan secara massal di lokasi kerja (on-site) atau fasilitas khusus. Kurikulum, jadwal, dan studi kasus disesuaikan langsung dengan bahaya operasional spesifik pabrik atau proyek.
            </p>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block pt-2 border-t border-slate-100 dark:border-slate-800">
              Output: Sertifikasi resmi (Kemnaker/BNSP/Internal) sesuai paket yang disepakati.
            </span>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex flex-wrap items-center justify-between gap-3">
          <span>
            Jelajahi referensi terkait: pelajari peta keahlian di{' '}
            <Link href="/kompetensi" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
              Direktori Kompetensi K3
            </Link>
            , jenjang karir di{' '}
            <Link href="/profesi" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
              Profil Profesi K3
            </Link>
            , atau kebutuhan sektor kerja di{' '}
            <Link href="/industri" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
              K3 Berdasarkan Industri
            </Link>
            .
          </span>
        </div>
      </section>

      {/* 5. Photo Strip Marquee Showcase */}
      <section className="mb-12">
        <TrainingPhotoStrip
          title="Dokumentasi Pelatihan K3 Indonesia"
          subtitle="Sesi kelas teori, bimbingan instruktur profesional, studi kasus regulasi, dan simulasi keselamatan lapangan."
        />
      </section>

      {/* 6. Program Selection Guide (Cara Memilih Pelatihan K3 yang Tepat) */}
      <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-3xl mb-6">
          <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs">
            PANDUAN LANGKAH DEMI LANGKAH
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-1">
            Cara Memilih Pelatihan K3 yang Tepat
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Ikuti 6 langkah sistematis berikut untuk memastikan Anda memilih pelatihan yang sesuai dengan kualifikasi personal, tanggung jawab kerja, dan kepatuhan hukum perusahaan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div className="text-emerald-600 dark:text-emerald-400 font-black text-sm mb-1">01</div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
              Identifikasi Peran & Posisi Kerja
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Tentukan apakah Anda berperan sebagai operator lapangan, teknisi pemeliharaan, safety officer, supervisor, manager departemen, atau calon personil penunjukan P2K3.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div className="text-emerald-600 dark:text-emerald-400 font-black text-sm mb-1">02</div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
              Petakan Aktivitas & Potensi Bahaya
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Kenali risiko dominan di tempat kerja seperti kelistrikan tegangan tinggi, bahan kimia reaktif, pesawat angkat/angkut, pekerjaan di ketinggian, atau bahaya kebakaran.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div className="text-emerald-600 dark:text-emerald-400 font-black text-sm mb-1">03</div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
              Tentukan Target Capaian Pelatihan
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Pastikan apakah tujuan utama adalah peningkatan wawasan teknis internal, pengakuan uji kompetensi profesi BNSP, atau penunjukan kewenangan resmi berlisensi Kemnaker RI.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div className="text-emerald-600 dark:text-emerald-400 font-black text-sm mb-1">04</div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
              Periksa Persyaratan Pendidikan & Berkas
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Setiap skema memiliki kriteria berbeda (misal Ahli K3 Umum mensyaratkan min. D3/S1, teknisi min. SLTA/SMK). Siapkan scan ijazah, KTP, dan surat penugasan perusahaan.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div className="text-emerald-600 dark:text-emerald-400 font-black text-sm mb-1">05</div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
              Pilih Metode Pelaksanaan yang Tersedia
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Sesuaikan dengan jadwal kerja: pilih kelas publik online/blended learning interaktif atau in-house training langsung di fasilitas pabrik untuk efisiensi tim rombongan.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div className="text-emerald-600 dark:text-emerald-400 font-black text-sm mb-1">06</div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
              Konfirmasi Jadwal, Biaya, & Output Resmi
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Sebelum melakukan pembayaran pendaftaran, konfirmasikan tanggal batch, kelengkapan fasilitas modul, sertifikat kelulusan, dan status legalitas penyelenggara.
            </p>
          </div>
        </div>

        {/* Pre-Directory Consultation Banner */}
        <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
              Masih Ragu Memilih Program yang Tepat?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Tim kami siap membantu menganalisis latar belakang pendidikan dan kebutuhan operasional tempat kerja Anda.
            </p>
          </div>
          <a
            href={waIntentUrl('syarat', 'Pemilihan Program Pelatihan K3')}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow transition-all hover:-translate-y-0.5"
          >
            <span>Bantu Saya Pilih Program</span>
          </a>
        </div>
      </section>

      {/* 7. Searchable Program Directory (Cari Program Pelatihan K3) */}
      <section className="mb-14" id="direktori-program">
        <div className="max-w-3xl mb-4">
          <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs">
            DIREKTORI LENGKAP
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
            Cari Program Pelatihan K3
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Cari berdasarkan nama program, pekerjaan, risiko, bidang teknis atau jalur yang dibutuhkan.
          </p>
        </div>

        {/* Render HubSearchFilter exactly once */}
        <HubSearchFilter
          items={items}
          sectionLabel="Pelatihan K3"
          isCourseSection={true}
          placeholder="Cari program—contoh: Ahli K3 Umum, P3K, kebakaran, listrik, forklift..."
        />
      </section>

      {/* 8. Conversion After Directory: In-House Training Box */}
      <section className="mb-12">
        <InHouseCtaBox
          title="Butuh Pelatihan K3 untuk Tim Perusahaan?"
          subtitle="Sampaikan bidang usaha, aktivitas kerja, risiko utama, jumlah peserta, lokasi dan target jadwal untuk mendapatkan pilihan program serta kebutuhan proposal."
          programName="In-House Training K3 Perusahaan"
          buttonText="Ajukan Proposal In-House"
          scheduleHref="/jadwal"
          scheduleText="Lihat Jadwal Pelatihan"
        />
      </section>

      {/* 9. Statutory & Legal Information Box */}
      {legal && (
        <section className="mb-12">
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs">
              {legal.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1 mb-2">
              {legal.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {legal.summary}
            </p>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Rujukan Regulasi & Standar Resmi:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {legal.references.map((ref, rIdx) => (
                  <li key={rIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{ref}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* 10. FAQ Accordion Section */}
      {faqs.length > 0 && (
        <section className="mb-12">
          <div className="max-w-2xl mb-6">
            <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs">
              KONSULTASI & INFORMASI RESMI
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Pertanyaan Umum Seputar Pelatihan K3 (FAQ)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              Jawaban ringkas seputar perbedaan sertifikasi, mekanisme pendaftaran, dan opsi pelatihan perusahaan.
            </p>
          </div>

          <FaqAccordion items={faqs} />
        </section>
      )}
    </div>
  );
}
