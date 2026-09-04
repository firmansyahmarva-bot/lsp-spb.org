'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { type ContentRecord } from '@/src/lib/content';
import { FaqAccordion } from './FaqAccordion';
import { sectionFaqs } from '@/src/lib/section-data';
import { waUrl } from '@/src/lib/site';
import {
  comparisonCategories,
  comparisonMetaRecords,
  popularComparisons,
} from '@/src/lib/perbandingan-meta';

interface PerbandinganHubContentProps {
  items: ContentRecord[];
}

export function PerbandinganHubContent({ items }: PerbandinganHubContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const faqs = sectionFaqs.perbandingan || [];

  const handleSelectCategory = (catName: string) => {
    setSelectedCategory(catName);
    const el = document.getElementById('direktori-perbandingan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToDirectory = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('direktori-perbandingan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter items based on active search query and category
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const meta = comparisonMetaRecords[item.slug];
      const category = meta?.category || 'Sertifikasi & Jenjang Personel';
      const optA = meta?.optionA || '';
      const optB = meta?.optionB || '';
      const decisionQ = meta?.decisionQuestion || '';

      // Category filter
      if (selectedCategory !== 'all' && category !== selectedCategory) {
        return false;
      }

      // Query filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();

      const inTitle = item.title.toLowerCase().includes(q);
      const inSlug = item.slug.toLowerCase().includes(q);
      const inOptionA = optA.toLowerCase().includes(q);
      const inOptionB = optB.toLowerCase().includes(q);
      const inCategory = category.toLowerCase().includes(q);
      const inKeyword = (item.primaryKeyword || '').toLowerCase().includes(q);
      const inDecisionQ = decisionQ.toLowerCase().includes(q);

      return inTitle || inSlug || inOptionA || inOptionB || inCategory || inKeyword || inDecisionQ;
    });
  }, [items, searchQuery, selectedCategory]);

  const consultationWaUrl = waUrl(
    'Halo PT Kreasi Ultimate Berjaya, saya sedang membandingkan opsi K3 dan ingin berkonsultasi mengenai pilihan yang paling tepat untuk kebutuhan saya.'
  );

  const leadGenWaUrl = waUrl(
    'Halo PT Kreasi Ultimate Berjaya, saya ingin berkonsultasi rekomendasi pilihan K3:\n\n- Peran / Perusahaan:\n- Sektor Industri:\n- Opsi yang Dibandingkan:\n- Target Hasil yang Diharapkan:\n\nMohon bantuannya untuk rekomendasi program yang tepat.'
  );

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. Compact Comparison Hero */}
      <header className="hub-hero">
        <div className="eyebrow-pill">
          <span className="eyebrow-dot" />
          <span>PUSAT KEPUTUSAN &amp; PERBANDINGAN K3</span>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Perbandingan K3: Pilih Sertifikasi, Pelatihan, Sistem, dan Metode yang Tepat
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Pusat referensi objektif untuk membantu individu dan perusahaan membedah perbedaan nyata sebelum memilih jalur sertifikasi, format pelatihan, standar sistem manajemen, metode analisis bahaya, maupun spesifikasi peralatan keselamatan kerja di Indonesia.
        </p>

        <div className="hero-cta-group mt-6 flex flex-wrap gap-3">
          <a
            className="button button-accent button-large btn-glow inline-flex items-center justify-center min-h-[44px] px-5 text-sm sm:text-base font-bold rounded-xl"
            href="#direktori-perbandingan"
            onClick={handleScrollToDirectory}
          >
            <span>Cari Perbandingan</span>
            <span aria-hidden="true" className="ml-2">↓</span>
          </a>
          <a
            className="button button-outline-light button-large inline-flex items-center justify-center min-h-[44px] px-5 text-sm sm:text-base font-bold rounded-xl"
            href={consultationWaUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Bantu Saya Memilih</span>
            <span aria-hidden="true" className="ml-2">💬</span>
          </a>
        </div>
      </header>

      {/* 2. Popular Decision Cards */}
      <section aria-labelledby="popular-decisions-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs uppercase block mb-1">
              PERBANDINGAN POPULER
            </span>
            <h2 id="popular-decisions-heading" className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Keputusan yang Paling Sering Dibandingkan
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            8 topik komparasi strategis yang paling sering dihadapi profesional dan manajemen HSE
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularComparisons.map((item) => (
            <div
              key={item.slug}
              className="flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all group"
            >
              <div>
                <span className="inline-block px-2.5 py-1 text-[11px] font-bold rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 mb-3 border border-emerald-200/50 dark:border-emerald-800/50">
                  {item.category}
                </span>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                  {item.decisionQuestion}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={`/perbandingan/${item.slug}`}
                  className="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 min-h-[44px] w-full"
                >
                  <span>Lihat Perbedaannya</span>
                  <span aria-hidden="true" className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. "Apa yang sedang Anda bandingkan?" */}
      <section aria-labelledby="category-paths-heading">
        <div className="mb-6">
          <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs uppercase block mb-1">
            NAVIGASI KATEGORI
          </span>
          <h2 id="category-paths-heading" className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            Apa yang Sedang Anda Bandingkan?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Pilih domain keputusan untuk menyaring perbandingan spesifik yang relevan dengan kebutuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {comparisonCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat.name)}
              className="text-left p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cat.name}
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {cat.count}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span>Filter Kategori Ini</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 4. Searchable Directory */}
      <section id="direktori-perbandingan" aria-labelledby="directory-heading" className="scroll-mt-20">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs uppercase block mb-1">
                DIREKTORI LENGKAP
              </span>
              <h2 id="directory-heading" className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Direktori Perbandingan K3
              </h2>
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
              Menampilkan <span className="font-bold text-emerald-600 dark:text-emerald-400">{filteredItems.length}</span> dari {items.length} perbandingan
            </div>
          </div>

          {/* Search Box */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari perbandingan (contoh: BNSP, Kemnaker, HIRADC, ISO 45001, Forklift, APAR)..."
              className="w-full pl-10 pr-10 py-3 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white placeholder-slate-400"
              aria-label="Cari perbandingan K3"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                aria-label="Hapus kata kunci pencarian"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter kategori perbandingan">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all min-h-[44px] cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Semua ({items.length})
            </button>
            {comparisonCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all min-h-[44px] cursor-pointer ${
                  selectedCategory === cat.name
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Results Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-dashed border-slate-200 dark:border-slate-700">
              <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Tidak ditemukan perbandingan yang cocok dengan &quot;{searchQuery}&quot;
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Coba gunakan istilah yang lebih umum atau atur ulang filter kategori.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors min-h-[44px]"
              >
                Reset Semua Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => {
                const meta = comparisonMetaRecords[item.slug];
                const category = meta?.category || 'Sertifikasi & Jenjang Personel';
                const optA = meta?.optionA || item.title.split(' vs ')[0] || 'Opsi A';
                const optB = meta?.optionB || item.title.split(' vs ')[1] || 'Opsi B';
                const decisionQ = meta?.decisionQuestion || 'Bandingkan perbedaan fungsi, syarat, dan implementasi antara kedua opsi ini.';

                return (
                  <div
                    key={item.slug}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex flex-col justify-between hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {category}
                        </span>
                      </div>

                      {/* Option A vs Option B Display */}
                      <div className="my-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700/70 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                        <div className="flex-1 w-full text-xs font-bold text-slate-800 dark:text-slate-200 px-1 truncate">
                          {optA}
                        </div>
                        <div className="shrink-0 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-[11px] font-extrabold tracking-wider border border-emerald-200 dark:border-emerald-800">
                          VS
                        </div>
                        <div className="flex-1 w-full text-xs font-bold text-slate-800 dark:text-slate-200 px-1 text-center sm:text-right truncate">
                          {optB}
                        </div>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                        {decisionQ}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
                      <Link
                        href={`/perbandingan/${item.slug}`}
                        className="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 min-h-[44px]"
                      >
                        <span>Baca Perbandingan</span>
                        <span aria-hidden="true" className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 5. Decision Framework: "Cara Menggunakan Perbandingan Ini" */}
      <section aria-labelledby="framework-heading">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs uppercase block mb-1">
            PANDUAN KEPUTUSAN
          </span>
          <h2 id="framework-heading" className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-3">
            Cara Menggunakan Perbandingan Ini
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-6">
            Gunakan lima langkah terstruktur berikut agar keputusan pemilihan program, metode, atau peralatan K3 di organisasi Anda tepat sasaran dan efisien:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
              <div className="text-xs font-black text-emerald-600 dark:text-emerald-400 mb-1">
                LANGKAH 1
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                Tentukan Hasil Akhir
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Tetapkan apakah tujuan utama Anda adalah pemenuhan izin regulasi, bukti kompetensi tender, perbaikan SOP, atau proteksi bahaya fisik.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
              <div className="text-xs font-black text-emerald-600 dark:text-emerald-400 mb-1">
                LANGKAH 2
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                Identifikasi Domain
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Petakan apakah isu berada pada domain hukum perundangan, kompetensi individu, format kelas, audit sistem, atau spesifikasi APD.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
              <div className="text-xs font-black text-emerald-600 dark:text-emerald-400 mb-1">
                LANGKAH 3
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                Bandingkan Ruang Lingkup
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Periksa persyaratan peserta, dokumen output yang diterbitkan, batasan masa berlaku, serta kompleksitas implementasinya.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
              <div className="text-xs font-black text-emerald-600 dark:text-emerald-400 mb-1">
                LANGKAH 4
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                Tentukan Relasi Opsi
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Evaluasi apakah dua pilihan bersifat saling menggantikan (substitutif) atau justru saling melengkapi dalam sistem K3 terpadu.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
              <div className="text-xs font-black text-emerald-600 dark:text-emerald-400 mb-1">
                LANGKAH 5
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                Konsultasikan Kebutuhan
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Diskusikan dengan konsultan K3 jika keputusan dipengaruhi sektor industri, jumlah pekerja, atau kewajiban perundangan spesifik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Lead-Generation Conversion Block */}
      <section aria-labelledby="conversion-heading">
        <div className="p-6 sm:p-10 rounded-2xl bg-slate-900 text-white relative overflow-hidden shadow-lg border border-slate-800">
          <div className="relative z-10 max-w-3xl">
            <span className="eyebrow text-emerald-400 font-extrabold tracking-wider text-xs uppercase block mb-2">
              KONSULTASI KEPUTUSAN K3
            </span>
            <h2 id="conversion-heading" className="text-2xl sm:text-3xl font-black text-white mb-3">
              Belum Yakin Pilihan yang Tepat?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Sampaikan kepada tim konsultan PT Kreasi Ultimate Berjaya informasi ringkas mengenai peran atau posisi Anda, sektor industri perusahaan, opsi yang sedang dibandingkan, serta target hasil yang diharapkan. Kami siap membantu memetakan pilihan yang paling sesuai tanpa komitmen.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={leadGenWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors min-h-[44px]"
              >
                <span>Bantu Pilih Program yang Tepat</span>
                <span aria-hidden="true" className="ml-2">💬</span>
              </a>
              <Link
                href="/pelatihan"
                className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-bold rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors min-h-[44px]"
              >
                <span>Lihat Semua Pelatihan K3</span>
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Hub Cross-Links */}
      <section aria-label="Eksplorasi Hub K3 Terkait">
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
            Eksplorasi Referensi K3 Terkait:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            <Link
              href="/pelatihan"
              className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Pelatihan K3</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-1">Katalog Program</span>
            </Link>
            <Link
              href="/panduan"
              className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Panduan K3</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-1">Syarat &amp; Prosedur</span>
            </Link>
            <Link
              href="/regulasi-k3"
              className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Regulasi K3</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-1">Landasan Hukum</span>
            </Link>
            <Link
              href="/kamus-k3"
              className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Kamus K3</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-1">Glosarium Istilah</span>
            </Link>
            <Link
              href="/alat"
              className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Alat K3</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-1">Kalkulator &amp; APD</span>
            </Link>
            <Link
              href="/jadwal"
              className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Jadwal Pelatihan</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-1">Batch Terdekat</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Hub-Level FAQ Section */}
      {faqs.length > 0 && (
        <section aria-labelledby="perbandingan-faq-heading" className="pt-2">
          <FaqAccordion items={faqs} title="Pertanyaan Umum Seputar Perbandingan K3" />
        </section>
      )}
    </div>
  );
}
