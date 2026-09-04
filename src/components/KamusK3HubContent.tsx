'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { type ContentRecord } from '@/src/lib/content';
import { FaqAccordion } from './FaqAccordion';
import { sectionFaqs } from '@/src/lib/section-data';
import { waUrl } from '@/src/lib/site';
import {
  topicCategories,
  popularTerms,
  getTermMeta,
} from '@/src/lib/kamus-meta';

interface KamusK3HubContentProps {
  items: ContentRecord[];
}

type TypeFilter = 'all' | 'abbr' | 'id' | 'en';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export function KamusK3HubContent({ items }: KamusK3HubContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<TypeFilter>('all');
  const faqs = sectionFaqs['kamus-k3'] || [];

  // Pre-calculate metadata map for performance & dynamic counts
  const itemsMeta = useMemo(() => {
    return items.map((item) => ({
      item,
      meta: getTermMeta(item),
    }));
  }, [items]);

  // Dynamic counts for Topics
  const topicCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const top of topicCategories) {
      counts[top.id] = 0;
    }
    for (const entry of itemsMeta) {
      if (counts[entry.meta.topic.id] !== undefined) {
        counts[entry.meta.topic.id]++;
      }
    }
    return counts;
  }, [itemsMeta]);

  // Dynamic counts for Letters
  const letterCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const letter of ALPHABET) {
      counts[letter] = 0;
    }
    for (const entry of itemsMeta) {
      const char = entry.meta.firstLetter;
      if (counts[char] !== undefined) {
        counts[char]++;
      }
    }
    return counts;
  }, [itemsMeta]);

  // Dynamic counts for Filter Types
  const typeCounts = useMemo(() => {
    let abbrCount = 0;
    let idCount = 0;
    let enCount = 0;

    for (const entry of itemsMeta) {
      if (entry.meta.isAbbr) abbrCount++;
      if (entry.meta.isIndonesian) idCount++;
      if (entry.meta.isEnglish) enCount++;
    }

    return {
      all: items.length,
      abbr: abbrCount,
      id: idCount,
      en: enCount,
    };
  }, [itemsMeta, items.length]);

  // Scroll to directory helper
  const scrollToDirectory = () => {
    const el = document.getElementById('direktori-istilah');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTopic = (topicId: string) => {
    setSelectedTopic(topicId === selectedTopic ? 'all' : topicId);
    scrollToDirectory();
  };

  const handleSelectLetter = (letter: string) => {
    setSelectedLetter(letter === selectedLetter ? 'all' : letter);
    scrollToDirectory();
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedTopic('all');
    setSelectedLetter('all');
    setSelectedType('all');
  };

  // Filter items based on active search, topic, letter, and type
  const filteredItems = useMemo(() => {
    return itemsMeta.filter(({ item, meta }) => {
      // Topic filter
      if (selectedTopic !== 'all' && meta.topic.id !== selectedTopic) {
        return false;
      }

      // Letter filter
      if (selectedLetter !== 'all' && meta.firstLetter !== selectedLetter) {
        return false;
      }

      // Type filter
      if (selectedType === 'abbr' && !meta.isAbbr) return false;
      if (selectedType === 'id' && !meta.isIndonesian) return false;
      if (selectedType === 'en' && !meta.isEnglish) return false;

      // Query search
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();

      const inTitle = item.title.toLowerCase().includes(q);
      const inSlug = item.slug.toLowerCase().includes(q);
      const inAbbr = meta.abbr.toLowerCase().includes(q);
      const inEnglish = meta.englishEquivalent.toLowerCase().includes(q);
      const inIndonesian = meta.indonesianTerm.toLowerCase().includes(q);
      const inKeyword = (item.primaryKeyword || '').toLowerCase().includes(q);
      const inTopic = meta.topic.name.toLowerCase().includes(q) || meta.topic.shortLabel.toLowerCase().includes(q);
      const inDescription = (item.description || '').toLowerCase().includes(q);

      return inTitle || inSlug || inAbbr || inEnglish || inIndonesian || inKeyword || inTopic || inDescription;
    });
  }, [itemsMeta, selectedTopic, selectedLetter, selectedType, searchQuery]);

  // WhatsApp consultation link
  const tanyaIstilahWaUrl = waUrl(
    'Halo Admin PT Kreasi Ultimate Berjaya, saya ingin berkonsultasi mengenai istilah/singkatan K3 dan relevansi program pelatihannya untuk pekerjaan/perusahaan saya.\n\n- Istilah/singkatan yang ingin ditanyakan:\n- Bidang industri / jenis pekerjaan:\n- Kebutuhan sertifikasi (Kemnaker/BNSP):'
  );

  const leadGenWaUrl = waUrl(
    'Halo Konsultan K3 PT Kreasi Ultimate Berjaya, kami ingin memahami penerapan standar K3 dan verifikasi pelatihan yang relevan untuk kebutuhan operasional perusahaan kami.\n\n- Sektor industri:\n- Aktivitas kerja berisiko tinggi:\n- Mesin/alat/bahan berbahaya yang digunakan:\n- Jumlah tenaga kerja:'
  );

  return (
    <div className="space-y-12">
      {/* 1. Compact Hero with Integrated Search & Dual CTAs */}
      <header className="hub-hero relative overflow-hidden text-center py-10 px-4 sm:px-6 rounded-3xl bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/80 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>GLOSARIUM RESMI &amp; PANDUAN ISTILAH K3</span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Kamus K3: Istilah, Singkatan dan Definisi Keselamatan Kerja
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Temukan arti istilah teknis, akronim, metodologi rekayasa keselamatan, dan standar operasional HSE di Indonesia maupun internasional—mulai dari HIRADC, JSA, SMK3, LOTO, APD, hingga manajemen keselamatan proses.
        </p>

        {/* Search Field Directly in Hero */}
        <div className="mt-6 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ketik istilah atau singkatan (misal: HIRADC, JSA, LOTO, APAR, SMK3)..."
              aria-label="Cari istilah atau singkatan K3"
              className="w-full pl-11 pr-24 py-3.5 text-sm sm:text-base rounded-2xl bg-white dark:bg-slate-800 border-2 border-emerald-500/60 dark:border-emerald-500/60 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 text-slate-900 dark:text-white placeholder-slate-400 shadow-sm transition-all"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-lg">
              🔍
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs font-bold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-700 rounded-lg transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Dual Hero CTA Buttons */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
          <button
            type="button"
            onClick={scrollToDirectory}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-colors min-h-[44px]"
          >
            <span>Cari Istilah K3 ({items.length})</span>
            <span aria-hidden="true" className="ml-2">↓</span>
          </button>
          <a
            href={tanyaIstilahWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 shadow-sm transition-colors min-h-[44px]"
          >
            <span>Tanya Istilah atau Pelatihan</span>
            <span aria-hidden="true" className="ml-2">💬</span>
          </a>
        </div>
      </header>

      {/* 2. Popular Terms Definition Cards */}
      <section aria-labelledby="popular-terms-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs uppercase block mb-1">
              ISTILAH PALING DICARI
            </span>
            <h2 id="popular-terms-heading" className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              12 Istilah &amp; Singkatan K3 Utama di Tempat Kerja
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Konsep fundamental yang paling sering digunakan dalam dokumen izin kerja, audit SMK3, dan pembinaan keselamatan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {popularTerms.map((term) => (
            <div
              key={term.slug}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    {term.term}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 truncate max-w-[120px]">
                    {term.topicLabel}
                  </span>
                </div>

                <h3 className="text-sm font-black text-slate-900 dark:text-white leading-snug mb-2">
                  {term.fullForm}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {term.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-auto">
                <Link
                  href={`/kamus-k3/${term.slug}`}
                  className="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors min-h-[44px]"
                >
                  <span>Lihat Pengertian</span>
                  <span aria-hidden="true" className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Browse by Topic Groups */}
      <section aria-labelledby="topic-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs uppercase block mb-1">
              KLASIFIKASI BIDANG
            </span>
            <h2 id="topic-heading" className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Eksplorasi Glosarium Berdasarkan Topik K3
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Pilih domain teknis untuk menyaring {items.length} istilah sesuai ruang lingkup pekerjaan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {topicCategories.map((top) => {
            const count = topicCounts[top.id] || 0;
            const isSelected = selectedTopic === top.id;

            return (
              <button
                key={top.id}
                type="button"
                onClick={() => handleSelectTopic(top.id)}
                className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between min-h-[110px] ${
                  isSelected
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm ring-2 ring-emerald-500/20'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-black text-slate-900 dark:text-white line-clamp-1">
                      {top.shortLabel}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {top.description}
                  </p>
                </div>

                <div className="mt-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span>{isSelected ? 'Filter Aktif' : 'Lihat Istilah'}</span>
                  <span>{isSelected ? '✓' : '→'}</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. A–Z, Abbreviation & Language Navigation */}
      <section aria-label="Navigasi Alfabet dan Jenis Istilah" className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
              Navigasi Alfabetis &amp; Kategori Istilah
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Filter cepat berdasarkan huruf awal atau format istilah (singkatan / padanan bahasa).
            </p>
          </div>

          {/* Type Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedType('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors min-h-[36px] ${
                selectedType === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Semua ({typeCounts.all})
            </button>
            <button
              type="button"
              onClick={() => setSelectedType('abbr')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors min-h-[36px] ${
                selectedType === 'abbr'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Singkatan ({typeCounts.abbr})
            </button>
            <button
              type="button"
              onClick={() => setSelectedType('id')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors min-h-[36px] ${
                selectedType === 'id'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Istilah Indonesia ({typeCounts.id})
            </button>
            <button
              type="button"
              onClick={() => setSelectedType('en')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors min-h-[36px] ${
                selectedType === 'en'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Istilah Inggris ({typeCounts.en})
            </button>
            {(selectedTopic !== 'all' || selectedLetter !== 'all' || selectedType !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-3 py-1.5 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 hover:bg-rose-100 transition-colors min-h-[36px]"
              >
                Reset Semua Filter
              </button>
            )}
          </div>
        </div>

        {/* A–Z Letter Strip */}
        <div className="pt-4">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Pilih Huruf Awal:
          </span>
          <div className="flex flex-wrap gap-1">
            <button
              type="button"
              onClick={() => setSelectedLetter('all')}
              className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-colors min-h-[32px] ${
                selectedLetter === 'all'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              All
            </button>
            {ALPHABET.map((char) => {
              const count = letterCounts[char] || 0;
              const isSelected = selectedLetter === char;
              const hasItems = count > 0;

              return (
                <button
                  key={char}
                  type="button"
                  disabled={!hasItems}
                  onClick={() => handleSelectLetter(char)}
                  title={`${char} (${count} istilah)`}
                  className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-colors min-h-[32px] ${
                    isSelected
                      ? 'bg-emerald-600 text-white'
                      : hasItems
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-emerald-100 dark:hover:bg-emerald-950/60 hover:text-emerald-700'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-300 dark:text-slate-700 cursor-not-allowed'
                  }`}
                >
                  {char}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Complete Glossary Directory */}
      <section id="direktori-istilah" aria-labelledby="directory-heading">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs uppercase block mb-1">
              DIREKTORI LENGKAP
            </span>
            <h2 id="directory-heading" className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Daftar Istilah &amp; Glosarium K3
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span>
              Menampilkan <strong className="text-slate-900 dark:text-white">{filteredItems.length}</strong> dari{' '}
              <strong className="text-slate-900 dark:text-white">{items.length}</strong> istilah
            </span>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="p-10 text-center rounded-2xl bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700">
            <span className="text-3xl mb-2 block">🔍</span>
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
              Tidak Ada Istilah yang Cocok
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-4">
              Pencarian &quot;{searchQuery}&quot; tidak menemukan hasil pada filter yang aktif. Coba gunakan istilah umum atau reset filter.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map(({ item, meta }) => (
              <article
                key={item.slug}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 truncate max-w-[170px]">
                      {meta.topic.shortLabel}
                    </span>
                    {meta.abbr && (
                      <span className="text-xs font-black px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        {meta.abbr}
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug mb-1.5">
                    <Link
                      href={`/kamus-k3/${item.slug}`}
                      className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </h3>

                  {meta.englishEquivalent && meta.englishEquivalent !== item.title && (
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mb-2">
                      Padanan: {meta.englishEquivalent}
                    </p>
                  )}

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {meta.shortDefinition}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-auto flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 dark:text-slate-500">
                    Glosarium K3
                  </span>
                  <Link
                    href={`/kamus-k3/${item.slug}`}
                    className="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors min-h-[44px]"
                  >
                    <span>Baca Definisi</span>
                    <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* 6. Lead Path & Contextual Next Steps */}
      <section aria-labelledby="lead-heading">
        <div className="p-6 sm:p-10 rounded-2xl bg-slate-900 text-white relative overflow-hidden shadow-lg border border-slate-800">
          <div className="relative z-10 max-w-3xl">
            <span className="eyebrow text-emerald-400 font-extrabold tracking-wider text-xs uppercase block mb-2">
              PENERAPAN LAPANGAN
            </span>
            <h2 id="lead-heading" className="text-2xl sm:text-3xl font-black text-white mb-3">
              Ingin Memahami Penerapannya di Tempat Kerja?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Mengetahui arti istilah atau singkatan hanyalah langkah awal. Penerapan nyatanya di lapangan sangat bergantung pada jenis pekerjaan, potensi bahaya spesifik, peralatan yang dioperasikan, serta standar regulasi yang berlaku. Tim konsultan PT Kreasi Ultimate Berjaya siap mendampingi perusahaan Anda memetakan prosedur kerja aman dan memilih pembinaan kompetensi personel yang tepat.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={leadGenWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors min-h-[44px]"
              >
                <span>Tanya Penerapan atau Pelatihan</span>
                <span aria-hidden="true" className="ml-2">💬</span>
              </a>
              <Link
                href="/pelatihan"
                className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-bold rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors min-h-[44px]"
              >
                <span>Katalog Pelatihan K3</span>
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Cross-Links */}
      <section aria-label="Eksplorasi Referensi K3 Terkait">
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
            Eksplorasi Referensi K3 Terkait:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link
              href="/pelatihan"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Pelatihan K3</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-1">
                Katalog Program &amp; Sertifikasi
              </span>
            </Link>
            <Link
              href="/panduan"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Panduan K3</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-1">
                Syarat, Biaya &amp; Prosedur
              </span>
            </Link>
            <Link
              href="/regulasi-k3"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Regulasi K3</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-1">
                UU, PP &amp; Permenaker RI
              </span>
            </Link>
            <Link
              href="/alat"
              className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Alat K3</span>
              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-1">
                Kalkulator Risiko &amp; APD
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Hub FAQ Section */}
      {faqs.length > 0 && (
        <section aria-labelledby="kamus-faq-heading" className="pt-2">
          <FaqAccordion items={faqs} title="Pertanyaan Umum Seputar Kamus K3" />
        </section>
      )}
    </div>
  );
}
