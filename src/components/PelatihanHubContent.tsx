'use client';

import React from 'react';
import Link from 'next/link';
import {
  MessageCircle,
  ClipboardList,
  User,
  Building2,
  Scale,
  Compass,
  Clock,
  GraduationCap,
  Globe,
  FileText,
  CreditCard,
  ArrowRight,
} from 'lucide-react';
import { type ContentRecord } from '@/src/lib/content';
import { HubSearchFilter } from './HubSearchFilter';
import { FaqAccordion } from './FaqAccordion';
import { InHouseCtaBox } from './ConversionCta';
import { TrainingPhotoStrip } from './TrainingPhotoStrip';
import { LandingPageHero } from './LandingPageHero';
import { sectionFaqs, sectionLegalInfo } from '@/src/lib/section-data';
import { waIntentUrl } from '@/src/lib/site';

export function PelatihanHubContent({ items }: { items: ContentRecord[] }) {
  const faqs = sectionFaqs.pelatihan || [];
  const legal = sectionLegalInfo.pelatihan;

  return (
    <div className="hub-pelatihan-content">
      {/* 1. Commercial Hero Section */}
      <LandingPageHero
        breadcrumbs={[{ label: 'Beranda', href: '/' }, { label: 'Pelatihan K3' }]}
        category="Katalog Program Pelatihan K3 Indonesia"
        title={
          <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-white tracking-tight leading-[1.25] mt-1.5 mb-2.5">
            Pelatihan K3 untuk Individu dan Perusahaan
          </h1>
        }
        description="Program pelatihan keselamatan dan kesehatan kerja (K3) yang tepat ditentukan oleh peran personil di tempat kerja, jenis aktivitas dan potensi bahaya operasional, kewajiban regulasi perusahaan, target capaian sertifikasi, serta metode pelaksanaan yang dibutuhkan."
        badges={['120 JP / 40 JP', 'Kemnaker RI & BNSP', 'Mulai Rp 4,5 Juta']}
        ctas={[
          {
            label: 'Tanya Jadwal dan Biaya',
            href: waIntentUrl('jadwal', 'Pelatihan K3 dari Hub Program'),
            variant: 'primary',
            isExternal: true,
            icon: <MessageCircle className="w-4 h-4" />,
          },
          {
            label: 'Minta Rekomendasi Program',
            href: waIntentUrl('perusahaan', 'Rekomendasi Program Pelatihan K3'),
            variant: 'secondary',
            isExternal: true,
            icon: <ClipboardList className="w-4 h-4" />,
          },
        ]}
        subtext="Belum tahu program yang tepat? Sampaikan pekerjaan, industri, pendidikan, pengalaman dan kebutuhan perusahaan melalui WhatsApp."
      />

      {/* 2. Quick Visitor-Path Selector (Pilih Berdasarkan Kebutuhan Anda) */}
      <section className="mb-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="eyebrow text-emerald-600 font-extrabold tracking-wider text-xs">
            PANDUAN PENDAFTARAN CEPAT
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Pilih Berdasarkan Kebutuhan Anda
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Mulai dari jalur yang paling relevan dengan situasi Anda hari ini untuk mendapatkan pendampingan yang tepat sasaran.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {/* Card 1: Peserta Individu */}
          <div className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
            <div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base sm:text-lg mb-2.5 sm:mb-4">
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-base font-bold text-slate-900 mb-1 sm:mb-2">
                Saya Ingin Mendaftar Pelatihan
              </h3>
              <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4">
                Temukan program berdasarkan pekerjaan, latar belakang dan target kompetensi.
              </p>
            </div>
            <a
              href={waIntentUrl('syarat', 'Konsultasi Pendaftaran Pelatihan K3 Individu')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-bold text-emerald-600 hover:underline pt-2 border-t border-slate-100"
            >
              <span>Konsultasi Program Individu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Pembeli Korporasi */}
          <div className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
            <div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base sm:text-lg mb-2.5 sm:mb-4">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-base font-bold text-slate-900 mb-1 sm:mb-2">
                Perusahaan Membutuhkan Pelatihan
              </h3>
              <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4">
                Diskusikan kebutuhan peserta, lokasi, risiko kerja dan target pelaksanaan.
              </p>
            </div>
            <a
              href={waIntentUrl('perusahaan', 'Permohonan In-House Training K3 Perusahaan')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-bold text-blue-600 hover:underline pt-2 border-t border-slate-100"
            >
              <span>Ajukan In-House Training</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Perbandingan Jalur */}
          <div className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-amber-500/50 transition-colors">
            <div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-base sm:text-lg mb-2.5 sm:mb-4">
                <Scale className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-base font-bold text-slate-900 mb-1 sm:mb-2">
                Saya Membandingkan Jalur Sertifikasi
              </h3>
              <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4">
                Pahami perbedaan fungsi pembinaan, sertifikasi kompetensi dan penunjukan sesuai kebutuhan.
              </p>
            </div>
            <Link
              href="/perbandingan/bnsp-vs-kemnaker"
              className="inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-bold text-amber-600 hover:underline pt-2 border-t border-slate-100"
            >
              <span>Bandingkan Kemnaker vs BNSP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 4: Pengunjung yang Belum Tahu Programnya */}
          <div className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-violet-500/50 transition-colors">
            <div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold text-base sm:text-lg mb-2.5 sm:mb-4">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-base font-bold text-slate-900 mb-1 sm:mb-2">
                Saya Belum Tahu Programnya
              </h3>
              <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4">
                Sampaikan pekerjaan atau risiko yang dihadapi untuk mendapatkan pilihan awal.
              </p>
            </div>
            <a
              href={waIntentUrl('jadwal', 'Belum Menentukan Program Pelatihan K3')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-bold text-violet-600 hover:underline pt-2 border-t border-slate-100"
            >
              <span>Minta Rekomendasi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. Featured Flagship: Pelatihan Ahli K3 Umum (Immediately after selector) */}
      <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-slate-50 border border-emerald-200 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <span className="eyebrow text-emerald-700 font-extrabold tracking-wider text-xs block mb-1">
                FLAGSHIP & SYARAT PENUNJUKAN PERUSAHAAN
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3">
                Program Unggulan: Pelatihan Ahli K3 Umum
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Pembinaan norma keselamatan kerja komprehensif berdurasi 120 Jam Pelajaran (JP) sesuai Permenaker No. Per.02/MEN/1992. Membekali calon Ahli K3 dalam mengawasi pemenuhan norma teknis kerja, menyusun kertas kerja PKL, dan memenuhi kriteria penunjukan personil K3 perusahaan.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 mb-5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-100/60 border border-emerald-300/50">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Durasi: 120 JP (± 12 Hari)</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-100/60 border border-emerald-300/50">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Syarat: Min. D3/S1 Semua Jurusan</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-100/60 border border-emerald-300/50">
                  <Globe className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Metode: Blended / Tatap Muka</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={waIntentUrl('jadwal', 'Jadwal Pelatihan Ahli K3 Umum')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Tanya Jadwal Ahli K3 Umum</span>
                </a>
                <Link
                  href="/pelatihan/ahli-k3-umum"
                  className="inline-flex items-center gap-1 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 transition-colors"
                >
                  <span>Lihat Silabus Lengkap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6 text-xs text-slate-500 space-y-2 min-w-[200px]">
              <span className="font-bold text-slate-700 block uppercase tracking-wider text-[11px]">
                Panduan Pendukung:
              </span>
              <ul className="space-y-1.5">
                <li>
                  <Link href="/panduan/syarat-ahli-k3-umum" className="text-emerald-600 hover:underline inline-flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Syarat Berkas & Ijazah Ahli K3 Umum</span>
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/biaya-pelatihan-k3" className="text-emerald-600 hover:underline inline-flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Struktur Biaya & Komponen Investasi K3</span>
                  </Link>
                </li>
                <li>
                  <Link href="/perbandingan/bnsp-vs-kemnaker" className="text-emerald-600 hover:underline inline-flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Perbedaan Lisensi Kemnaker vs BNSP</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 Curated Top Commercial Programs (Pilihan Utama Industri) */}
      <section className="mb-14" aria-labelledby="program-komersial-unggulan">
        <div className="max-w-3xl mb-6">
          <span className="eyebrow text-emerald-600 font-extrabold tracking-wider text-xs">
            PROGRAM PRIORITAS INDUSTRI
          </span>
          <h2 id="program-komersial-unggulan" className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Program Pelatihan K3 Terpopuler & Lisensi Resmi
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Pilihan sertifikasi keselamatan kerja yang paling banyak diikuti oleh praktisi HSE, teknisi operasional, dan perusahaan di seluruh Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Group 1: Kelembagaan & SMK3 */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Kelembagaan & SMK3
                </h3>
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/pelatihan/auditor-smk3" className="font-semibold text-slate-800 hover:text-emerald-600 hover:underline flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Pelatihan & Sertifikasi Auditor SMK3 40 JP</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/lead-auditor-smk3" className="font-semibold text-slate-800 hover:text-emerald-600 hover:underline flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Program Lead Auditor SMK3 Kemnaker (50 JP)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pembinaan-p2k3" className="font-semibold text-slate-800 hover:text-emerald-600 hover:underline flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Pelatihan Tata Kelola & Sekretariat P2K3 Perusahaan</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Dasar: PP 50/2012</span>
              <span className="text-emerald-600 font-medium">Sertifikat Kemnaker</span>
            </div>
          </div>

          {/* Group 2: Penanggulangan Kebakaran */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <h3 className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                  Penanggulangan Kebakaran
                </h3>
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/pelatihan/k3-kebakaran-kelas-d" className="font-semibold text-slate-800 hover:text-amber-600 hover:underline flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>Petugas Peran Kebakaran Kelas D (25 JP)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/k3-kebakaran-kelas-c" className="font-semibold text-slate-800 hover:text-amber-600 hover:underline flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>Regu Penanggulangan Kebakaran Kelas C (60 JP)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/k3-kebakaran-kelas-b" className="font-semibold text-slate-800 hover:text-amber-600 hover:underline flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>Koordinator Unit Kebakaran Kelas B Kemnaker</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/k3-kebakaran-kelas-a" className="font-semibold text-slate-800 hover:text-amber-600 hover:underline flex items-start gap-1.5">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>Ahli K3 Spesialis Penanggulangan Kebakaran Kelas A</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Kepmenaker 186/1999</span>
              <span className="text-amber-600 font-medium">Lisensi SIO Kemnaker</span>
            </div>
          </div>

          {/* Group 3: Kelistrikan & Pesawat Uap */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                <h3 className="text-xs font-bold text-yellow-800 uppercase tracking-wider">
                  Listrik & Pesawat Uap (PUBT)
                </h3>
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/pelatihan/pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri" className="font-semibold text-slate-800 hover:text-yellow-600 hover:underline flex items-start gap-1.5">
                    <span className="text-yellow-500 font-bold">•</span>
                    <span>Pelatihan Teknisi K3 Listrik Kemnaker (30 JP)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pelatihan-ahli-k3-spesialis-listrik-kemnaker-ri" className="font-semibold text-slate-800 hover:text-yellow-600 hover:underline flex items-start gap-1.5">
                    <span className="text-yellow-500 font-bold">•</span>
                    <span>Ahli K3 Spesialis Listrik Sertifikasi Kemnaker RI</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pelatihan-operator-boiler-ketel-uap-kelas-i-ii-lisensi-kemnaker" className="font-semibold text-slate-800 hover:text-yellow-600 hover:underline flex items-start gap-1.5">
                    <span className="text-yellow-500 font-bold">•</span>
                    <span>Operator Boiler Ketel Uap Kelas I & II (SIO Kemnaker)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pelatihan-ahli-k3-spesialis-pesawat-uap-bejana-tekanan-kemnaker" className="font-semibold text-slate-800 hover:text-yellow-600 hover:underline flex items-start gap-1.5">
                    <span className="text-yellow-500 font-bold">•</span>
                    <span>Ahli K3 Spesialis Pesawat Uap & Bejana Tekan (PUBT)</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Permenaker 12/2015 & 37/2016</span>
              <span className="text-yellow-600 font-medium">Lisensi Resmi</span>
            </div>
          </div>

          {/* Group 4: Pesawat Angkat & Angkut */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <h3 className="text-xs font-bold text-orange-800 uppercase tracking-wider">
                  Pesawat Angkat & Angkut (PAA)
                </h3>
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/pelatihan/pelatihan-operator-forklift-kelas-i-kelas-ii-sertifikasi-kemnaker" className="font-semibold text-slate-800 hover:text-orange-600 hover:underline flex items-start gap-1.5">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Operator Forklift Kelas I & Kelas II (SIO Kemnaker)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pelatihan-operator-overhead-crane-gantry-crane-kelas-i-ii-kemnaker" className="font-semibold text-slate-800 hover:text-orange-600 hover:underline flex items-start gap-1.5">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Operator Overhead Crane & Gantry Crane Kemnaker</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pelatihan-operator-mobile-crane-crawler-crane-sertifikasi-kemnaker" className="font-semibold text-slate-800 hover:text-orange-600 hover:underline flex items-start gap-1.5">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Operator Mobile Crane & Crawler Crane (SIO Kemnaker)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pelatihan-juru-ikat-beban-rigger-slinger-bersertifikat-kemnaker" className="font-semibold text-slate-800 hover:text-orange-600 hover:underline flex items-start gap-1.5">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Pelatihan Juru Ikat Beban (Rigger / Slinger) Kemnaker</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Permenaker 08/2020</span>
              <span className="text-orange-600 font-medium">SIO Operator Kemnaker</span>
            </div>
          </div>

          {/* Group 5: Ketinggian & Ruang Terbatas */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <h3 className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                  Ketinggian & Ruang Terbatas
                </h3>
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/pelatihan/pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-1-tkbt-1-kemnaker-ri" className="font-semibold text-slate-800 hover:text-blue-600 hover:underline flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Tenaga Kerja Bangunan Tinggi Tingkat 1 (TKBT 1 Kemnaker)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-2-tkbt-2-kemnaker-ri" className="font-semibold text-slate-800 hover:text-blue-600 hover:underline flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Tenaga Kerja Bangunan Tinggi Tingkat 2 (TKBT 2 Kemnaker)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pelatihan-tenaga-kerja-pada-ketinggian-tingkat-1-tkpk-1-rope-access-kemnaker" className="font-semibold text-slate-800 hover:text-blue-600 hover:underline flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Tenaga Kerja Pada Ketinggian TKPK 1 (Rope Access)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pelatihan-petugas-k3-madya-ruang-terbatas-confined-space-kemnaker" className="font-semibold text-slate-800 hover:text-blue-600 hover:underline flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Petugas K3 Madya Ruang Terbatas (Standby Attendant)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pelatihan-petugas-k3-utama-ruang-terbatas-confined-space-kemnaker" className="font-semibold text-slate-800 hover:text-blue-600 hover:underline flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Petugas K3 Utama Ruang Terbatas (Confined Space Entrant)</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Permenaker 09/2016</span>
              <span className="text-blue-600 font-medium">Lisensi SIO Ketinggian</span>
            </div>
          </div>

          {/* Group 6: Kimia, Konstruksi & Hiperkes */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <h3 className="text-xs font-bold text-purple-800 uppercase tracking-wider">
                  Kimia, Konstruksi & Medis Kerja
                </h3>
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/pelatihan/pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri" className="font-semibold text-slate-800 hover:text-purple-600 hover:underline flex items-start gap-1.5">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>Ahli K3 Kimia Sertifikasi Resmi Kemnaker RI (120 JP)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pelatihan-ahli-k3-konstruksi-muda-madya-utama-sertifikasi-kemnaker-bnsp" className="font-semibold text-slate-800 hover:text-purple-600 hover:underline flex items-start gap-1.5">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>Ahli K3 Konstruksi (Muda, Madya, Utama) BNSP & Kemnaker</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pelatihan-petugas-p3k-di-tempat-kerja-lisensi-resmi-kemnaker-ri-30-jp" className="font-semibold text-slate-800 hover:text-purple-600 hover:underline flex items-start gap-1.5">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>Petugas P3K di Tempat Kerja Lisensi Kemnaker (30 JP)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pelatihan-dokter-perusahaan-sertifikasi-hiperkes-kemnaker-ri" className="font-semibold text-slate-800 hover:text-purple-600 hover:underline flex items-start gap-1.5">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>Dokter Perusahaan Sertifikasi Hiperkes Kemnaker RI</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pelatihan/pelatihan-paramedis-perusahaan-sertifikasi-hiperkes-kemnaker-ri" className="font-semibold text-slate-800 hover:text-purple-600 hover:underline flex items-start gap-1.5">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>Paramedis Perusahaan Sertifikasi Hiperkes Kemnaker RI</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Kemnaker & BNSP</span>
              <span className="text-purple-600 font-medium">Sertifikasi Legalitas</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Searchable Program Directory (Cari Program Pelatihan K3) */}
      <section className="mb-14" id="direktori-program">
        <div className="max-w-3xl mb-4">
          <span className="eyebrow text-emerald-600 font-extrabold tracking-wider text-xs">
            DIREKTORI LENGKAP
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Cari Program Pelatihan K3
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
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

      {/* 5. Program Selection Guide (Cara Memilih Pelatihan K3 yang Tepat) */}
      <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="max-w-3xl mb-6">
          <span className="eyebrow text-emerald-600 font-extrabold tracking-wider text-xs">
            PANDUAN LANGKAH DEMI LANGKAH
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-1">
            Cara Memilih Pelatihan K3 yang Tepat
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Ikuti 6 langkah sistematis berikut untuk memastikan Anda memilih pelatihan yang sesuai dengan kualifikasi personal, tanggung jawab kerja, dan kepatuhan hukum perusahaan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-emerald-600 font-black text-sm mb-1">01</div>
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
              Identifikasi Peran & Posisi Kerja
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tentukan apakah Anda berperan sebagai operator lapangan, teknisi pemeliharaan, safety officer, supervisor, manager departemen, atau calon personil penunjukan P2K3.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-emerald-600 font-black text-sm mb-1">02</div>
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
              Petakan Aktivitas & Potensi Bahaya
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Kenali risiko dominan di tempat kerja seperti kelistrikan tegangan tinggi, bahan kimia reaktif, pesawat angkat/angkut, pekerjaan di ketinggian, atau bahaya kebakaran.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-emerald-600 font-black text-sm mb-1">03</div>
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
              Tentukan Target Capaian Pelatihan
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pastikan apakah tujuan utama adalah peningkatan wawasan teknis internal, pengakuan uji kompetensi profesi BNSP, atau penunjukan kewenangan resmi berlisensi Kemnaker RI.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-emerald-600 font-black text-sm mb-1">04</div>
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
              Periksa Persyaratan Pendidikan & Berkas
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Setiap skema memiliki kriteria berbeda (misal Ahli K3 Umum mensyaratkan min. D3/S1, teknisi min. SLTA/SMK). Siapkan scan ijazah, KTP, dan surat penugasan perusahaan.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-emerald-600 font-black text-sm mb-1">05</div>
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
              Pilih Metode Pelaksanaan yang Tersedia
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sesuaikan dengan jadwal kerja: pilih kelas publik online/blended learning interaktif atau in-house training langsung di fasilitas pabrik untuk efisiensi tim rombongan.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-emerald-600 font-black text-sm mb-1">06</div>
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">
              Konfirmasi Jadwal, Biaya, & Output Resmi
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sebelum melakukan pembayaran pendaftaran, konfirmasikan tanggal batch, kelengkapan fasilitas modul, sertifikat kelulusan, dan status legalitas penyelenggara.
            </p>
          </div>
        </div>

        {/* Pre-Guidance Consultation Banner */}
        <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              Masih Ragu Memilih Program yang Tepat?
            </h3>
            <p className="text-xs text-slate-600">
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

      {/* 6. Program-Pathway Explanation (Kenali Jenis Program Sebelum Memilih) */}
      <section className="mb-12">
        <div className="max-w-3xl mb-6">
          <span className="eyebrow text-emerald-600 font-extrabold tracking-wider text-xs">
            KLASIFIKASI JALUR K3
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-1">
            Kenali Jenis Program Sebelum Memilih
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Tidak semua pelatihan K3 menghasilkan lisensi atau sertifikasi yang sama. Memahami perbedaan fungsional antara pembinaan regulasi, sertifikasi kompetensi, pelatihan teknis operasional, dan in-house training membantu Anda mengalokasikan waktu dan anggaran secara tepat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-white border border-slate-200">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
              Jalur 1
            </span>
            <h3 className="text-base font-black text-slate-900 mb-2">
              Pembinaan & Penunjukan K3
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Program kepatuhan wajib berbasis regulasi ketenagakerjaan Kemnaker RI. Ditujukan bagi personil yang didelegasikan perusahaan untuk menjalankan tugas berwenang seperti Ahli K3, Petugas K3, atau Auditor SMK3.
            </p>
            <span className="text-[11px] text-slate-500 block pt-2 border-t border-slate-100">
              Output: Sertifikat Pembinaan, SKP & Lisensi Kemnaker (khusus utusan perusahaan).
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Jalur 2
            </span>
            <h3 className="text-base font-black text-slate-900 mb-2">
              Sertifikasi Kompetensi
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Asesmen standar keterampilan profesi berbasis Standar Kompetensi Kerja Nasional Indonesia (SKKNI) melalui LSP berlisensi BNSP. Mengakui kemampuan nyata individu dalam unjuk kerja bidang K3 independen.
            </p>
            <span className="text-[11px] text-slate-500 block pt-2 border-t border-slate-100">
              Output: Sertifikat Kompetensi K3 BNSP berlogo Garuda (masa berlaku 3 tahun).
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
              Jalur 3
            </span>
            <h3 className="text-base font-black text-slate-900 mb-2">
              Pelatihan Teknis & Operasional
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Pelatihan keterampilan praktis di tempat kerja untuk meminimalkan risiko langsung seperti bekerja di ketinggian, isolasi energi (LOTO), penanganan bahan kimia B3, keselamatan ruang terbatas, atau safety induction.
            </p>
            <span className="text-[11px] text-slate-500 block pt-2 border-t border-slate-100">
              Output: Sertifikat Pelatihan Penyelenggara & bukti pemenuhan prosedur kerja aman.
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block mb-1">
              Jalur 4
            </span>
            <h3 className="text-base font-black text-slate-900 mb-2">
              In-House Training Perusahaan
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Penyelenggaraan kelas khusus karyawan satu perusahaan secara massal di lokasi kerja (on-site) atau fasilitas khusus. Kurikulum, jadwal, dan studi kasus disesuaikan langsung dengan bahaya operasional spesifik pabrik atau proyek.
            </p>
            <span className="text-[11px] text-slate-500 block pt-2 border-t border-slate-100">
              Output: Sertifikasi resmi (Kemnaker/BNSP/Internal) sesuai paket yang disepakati.
            </span>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-3">
          <span>
            Jelajahi referensi terkait: pelajari peta keahlian di{' '}
            <Link href="/kompetensi" className="text-emerald-600 font-bold hover:underline">
              Direktori Kompetensi K3
            </Link>
            , jenjang karir di{' '}
            <Link href="/profesi" className="text-emerald-600 font-bold hover:underline">
              Profil Profesi K3
            </Link>
            , atau kebutuhan sektor kerja di{' '}
            <Link href="/industri" className="text-emerald-600 font-bold hover:underline">
              K3 Berdasarkan Industri
            </Link>
            .
          </span>
        </div>
      </section>

      {/* 7. Photo Strip Marquee Showcase */}
      <section className="mb-12">
        <TrainingPhotoStrip
          title="Dokumentasi Pelatihan K3 Indonesia"
          subtitle="Sesi kelas teori, bimbingan instruktur profesional, studi kasus regulasi, dan simulasi keselamatan lapangan."
        />
      </section>

      {/* 8. Conversion After Directory & Photos: In-House Training Box */}
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
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="eyebrow text-emerald-600 font-extrabold tracking-wider text-xs">
              {legal.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1 mb-2">
              {legal.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {legal.summary}
            </p>
            <div className="pt-3 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Rujukan Regulasi & Standar Resmi:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {legal.references.map((ref, rIdx) => (
                  <li key={rIdx} className="text-xs text-slate-700 flex items-start gap-1.5">
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
            <span className="eyebrow text-emerald-600 font-extrabold tracking-wider text-xs">
              KONSULTASI & INFORMASI RESMI
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-1">
              Pertanyaan Umum Seputar Pelatihan K3 (FAQ)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Jawaban ringkas seputar perbedaan sertifikasi, mekanisme pendaftaran, dan opsi pelatihan perusahaan.
            </p>
          </div>

          <FaqAccordion items={faqs} />
        </section>
      )}
    </div>
  );
}
