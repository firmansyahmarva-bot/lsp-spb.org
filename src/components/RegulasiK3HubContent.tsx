'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, MessageCircle, ArrowRight, X } from 'lucide-react';
import { type ContentRecord } from '@/src/lib/content';
import { FaqAccordion } from './FaqAccordion';
import { LandingPageHero } from './LandingPageHero';
import { sectionFaqs } from '@/src/lib/section-data';
import { waUrl } from '@/src/lib/site';
import {
  legalLevelCategories,
  k3SubjectCategories,
  topImportantRegulations,
  getRegulationMeta,
} from '@/src/lib/regulasi-meta';

interface RegulasiK3HubContentProps {
  items: ContentRecord[];
}

export function RegulasiK3HubContent({ items }: RegulasiK3HubContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const faqs = sectionFaqs['regulasi-k3'] || [];

  // Pre-calculate metadata map for performance & dynamic counts
  const itemsMeta = useMemo(() => {
    return items.map((item) => ({
      item,
      meta: getRegulationMeta(item),
    }));
  }, [items]);

  // Dynamic counts for Legal Levels
  const levelCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const cat of legalLevelCategories) {
      counts[cat.id] = 0;
    }
    for (const entry of itemsMeta) {
      if (counts[entry.meta.legalLevel.id] !== undefined) {
        counts[entry.meta.legalLevel.id]++;
      }
    }
    return counts;
  }, [itemsMeta]);

  // Dynamic counts for K3 Subjects
  const subjectCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const sub of k3SubjectCategories) {
      counts[sub.id] = 0;
    }
    for (const entry of itemsMeta) {
      if (counts[entry.meta.subject.id] !== undefined) {
        counts[entry.meta.subject.id]++;
      }
    }
    return counts;
  }, [itemsMeta]);

  // Scroll to directory helper
  const scrollToDirectory = () => {
    const el = document.getElementById('direktori-regulasi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectLevel = (levelId: string) => {
    setSelectedLevel(levelId);
    scrollToDirectory();
  };

  const handleSelectSubject = (subjectId: string) => {
    setSelectedSubject(subjectId === selectedSubject ? 'all' : subjectId);
    scrollToDirectory();
  };

  // Filter items based on active search, legal level, and subject
  const filteredItems = useMemo(() => {
    return itemsMeta.filter(({ item, meta }) => {
      // Level filter
      if (selectedLevel !== 'all' && meta.legalLevel.id !== selectedLevel) {
        return false;
      }

      // Subject filter
      if (selectedSubject !== 'all' && meta.subject.id !== selectedSubject) {
        return false;
      }

      // Query search
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();

      const inTitle = item.title.toLowerCase().includes(q);
      const inSlug = item.slug.toLowerCase().includes(q);
      const inRegNumber = meta.regNumber.toLowerCase().includes(q);
      const inYear = meta.year.includes(q);
      const inPublisher = meta.publisher.toLowerCase().includes(q);
      const inScope = meta.scope.toLowerCase().includes(q);
      const inSubject = meta.subject.name.toLowerCase().includes(q);
      const inLevel = meta.legalLevel.name.toLowerCase().includes(q);
      const inKeyword = (item.primaryKeyword || '').toLowerCase().includes(q);

      return (
        inTitle ||
        inSlug ||
        inRegNumber ||
        inYear ||
        inPublisher ||
        inScope ||
        inSubject ||
        inLevel ||
        inKeyword
      );
    });
  }, [itemsMeta, searchQuery, selectedLevel, selectedSubject]);

  const consultationWaUrl = waUrl(
    'Halo PT Kreasi Ultimate Berjaya, saya ingin menanyakan regulasi K3 yang relevan untuk operasional perusahaan kami:\n\n- Sektor Industri:\n- Aktivitas Kerja:\n- Bahaya Utama:\n- Regulasi yang Dicari:\n\nMohon bantuannya untuk identifikasi regulasi dan kepatuhan yang sesuai.'
  );

  const leadGenWaUrl = waUrl(
    'Halo PT Kreasi Ultimate Berjaya, perusahaan kami membutuhkan konsultasi penentuan regulasi dan kepatuhan K3:\n\n- Sektor Industri:\n- Aktivitas Kerja Utama:\n- Bahaya / Risiko Utama:\n- Peralatan yang Digunakan:\n- Jumlah & Peran Pekerja:\n- Kebutuhan Pelatihan / Lisensi:\n\nMohon informasi rekomendasi regulasi dan program pembinaan K3 yang tepat.'
  );

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. Compact Hero */}
      <LandingPageHero
        breadcrumbs={[{ label: 'Beranda', href: '/' }, { label: 'Regulasi K3' }]}
        category="Direktori Regulasi K3 Indonesia"
        title="Regulasi K3 Indonesia: Undang-Undang, PP, Permenaker dan Standar Teknis"
        description="Pusat pencarian dan navigasi resmi regulasi Keselamatan dan Kesehatan Kerja (K3) di Indonesia. Temukan dasar hukum perundangan, peraturan pemerintah, norma teknis kementerian, dan standar konsensus berdasarkan hierarki hukum, bidang operasional, maupun kebutuhan tempat kerja Anda."
        badges={[`${items.length} Regulasi K3`, 'UU, PP & Permenaker', 'Hierarki Hukum Lengkap']}
        ctas={[
          {
            label: 'Cari Regulasi K3',
            href: '#direktori-regulasi',
            variant: 'primary',
            icon: <Search className="w-4 h-4" />,
            onClick: scrollToDirectory,
          },
          {
            label: 'Tanya Regulasi yang Relevan',
            href: consultationWaUrl,
            variant: 'secondary',
            isExternal: true,
            icon: <MessageCircle className="w-4 h-4" />,
          },
        ]}
        subtext="Konsultasikan interpretasi pasal dan kewajiban audit pemenuhan hukum (legal compliance) fasilitas kerja Anda."
      />

      {/* 2. Important Regulations (Top 10) */}
      <section aria-labelledby="important-regulations-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <span className="eyebrow text-emerald-600 font-extrabold tracking-wider text-xs uppercase block mb-1">
              REGULASI UTAMA
            </span>
            <h2 id="important-regulations-heading" className="text-xl sm:text-2xl font-black text-slate-900">
              10 Regulasi Pokok Paling Sering Dibutuhkan
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Ketetapan undang-undang, PP, dan permenaker pilar kepatuhan K3 nasional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {topImportantRegulations.map((reg) => (
            <div
              key={reg.slug}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="px-2.5 py-0.5 text-[11px] font-extrabold rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    {reg.regNumber} ({reg.year})
                  </span>
                  <span className="text-[11px] font-bold text-slate-400">
                    Pilar Kepatuhan
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-emerald-600 transition-colors">
                  {reg.shortSubject}
                </h3>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {reg.whenNeeded}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <Link
                  href={`/regulasi-k3/${reg.slug}`}
                  className="inline-flex items-center text-xs font-bold text-emerald-600 hover:text-emerald-700 min-h-[44px] w-full group/link"
                >
                  <span>Baca Ringkasan Regulasi</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Browse by Legal Level */}
      <section aria-labelledby="legal-level-heading">
        <div className="mb-6">
          <span className="eyebrow text-emerald-600 font-extrabold tracking-wider text-xs uppercase block mb-1">
            HIERARKI PERUNDANG-UNDANGAN
          </span>
          <h2 id="legal-level-heading" className="text-xl sm:text-2xl font-black text-slate-900">
            Jelajahi Berdasarkan Bentuk &amp; Tingkat Hukum
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Pilih klasifikasi hukum untuk menyaring regulasi berdasarkan status tata urutan peraturan perundang-undangan di Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {legalLevelCategories.map((cat) => {
            const count = levelCounts[cat.id] || 0;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelectLevel(cat.id)}
                className="text-left p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {cat.shortLabel}
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-slate-100 text-slate-700">
                      {count}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                  <span>Lihat {count} Regulasi</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. Browse by K3 Subject */}
      <section aria-labelledby="k3-subjects-heading">
        <div className="mb-5">
          <span className="eyebrow text-emerald-600 font-extrabold tracking-wider text-xs uppercase block mb-1">
            NAVIGASI TEKNIS
          </span>
          <h2 id="k3-subjects-heading" className="text-xl sm:text-2xl font-black text-slate-900">
            Jelajahi Berdasarkan Bidang &amp; Subjek K3
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Pintasan praktis menuju regulasi yang mengatur objek bahaya, peralatan khusus, atau kewajiban operasional spesifik.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {k3SubjectCategories.map((sub) => {
            const count = subjectCounts[sub.id] || 0;
            const isActive = selectedSubject === sub.id;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => handleSelectSubject(sub.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] inline-flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-500'
                }`}
              >
                <span>{sub.name}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-md ${
                    isActive ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 5. Searchable Directory */}
      <section id="direktori-regulasi" aria-labelledby="directory-heading" className="scroll-mt-20">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="eyebrow text-emerald-600 font-extrabold tracking-wider text-xs uppercase block mb-1">
                DIREKTORI LENGKAP
              </span>
              <h2 id="directory-heading" className="text-xl sm:text-2xl font-black text-slate-900">
                Direktori Regulasi K3 Indonesia
              </h2>
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500">
              Menampilkan <span className="font-bold text-emerald-600">{filteredItems.length}</span> dari {items.length} regulasi
            </div>
          </div>

          {/* Search Box */}
          <div className="relative mb-5">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari regulasi (nomor, tahun, jenis UU/PP/Permenaker, topik: forklift, listrik, p3k, smk3)..."
              className="w-full pl-10 pr-10 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 placeholder-slate-400"
              aria-label="Cari regulasi K3"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                aria-label="Hapus kata kunci pencarian"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Legal Level Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Filter bentuk regulasi">
            <button
              type="button"
              onClick={() => setSelectedLevel('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all min-h-[44px] cursor-pointer ${
                selectedLevel === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Semua ({items.length})
            </button>
            {legalLevelCategories.map((cat) => {
              const count = levelCounts[cat.id] || 0;
              const isActive = selectedLevel === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedLevel(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all min-h-[44px] cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.shortLabel} ({count})
                </button>
              );
            })}
          </div>

          {/* Active Filter Badges */}
          {(selectedLevel !== 'all' || selectedSubject !== 'all' || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 mb-6 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <span className="font-bold text-slate-500">Filter Aktif:</span>
              {selectedLevel !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold">
                  Bentuk: {legalLevelCategories.find((c) => c.id === selectedLevel)?.shortLabel}
                  <button type="button" onClick={() => setSelectedLevel('all')} className="hover:text-emerald-950 cursor-pointer inline-flex items-center">
                    <X className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </span>
              )}
              {selectedSubject !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold">
                  Bidang: {k3SubjectCategories.find((s) => s.id === selectedSubject)?.name}
                  <button type="button" onClick={() => setSelectedSubject('all')} className="hover:text-emerald-950 cursor-pointer inline-flex items-center">
                    <X className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-200 text-slate-800 font-bold">
                  Kata Kunci: &quot;{searchQuery}&quot;
                  <button type="button" onClick={() => setSearchQuery('')} className="hover:text-black cursor-pointer inline-flex items-center">
                    <X className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </span>
              )}
              <button
                type="button"
                onClick={() => {
                  setSelectedLevel('all');
                  setSelectedSubject('all');
                  setSearchQuery('');
                }}
                className="ml-auto text-xs font-bold text-slate-500 hover:text-emerald-600 underline cursor-pointer"
              >
                Reset Semua
              </button>
            </div>
          )}

          {/* Directory Cards Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-xl bg-slate-50 border border-dashed border-slate-200">
              <p className="text-base font-semibold text-slate-700 mb-2">
                Tidak ditemukan regulasi yang cocok dengan kriteria pencarian Anda.
              </p>
              <p className="text-xs text-slate-500 mb-4">
                Coba gunakan nomor peraturan atau istilah bahaya yang lebih umum.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLevel('all');
                  setSelectedSubject('all');
                }}
                className="px-4 py-2 text-xs font-bold text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors min-h-[44px] cursor-pointer"
              >
                Tampilkan Semua Regulasi
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map(({ item, meta }) => {
                let badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
                if (meta.statusBadge === 'historical') {
                  badgeColor = 'bg-amber-50 text-amber-800 border-amber-200';
                } else if (meta.statusBadge === 'standard') {
                  badgeColor = 'bg-blue-50 text-blue-800 border-blue-200';
                } else if (meta.statusBadge === 'sectoral') {
                  badgeColor = 'bg-purple-50 text-purple-800 border-purple-200';
                }

                return (
                  <div
                    key={item.slug}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-emerald-500/60 transition-all group"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                        <span className={`inline-block px-2 py-0.5 text-[11px] font-extrabold rounded-md border ${badgeColor}`}>
                          {meta.statusText}
                        </span>
                        <span className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-white text-slate-700 border border-slate-200">
                          {meta.subject.name}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-emerald-600 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {meta.shortRelevance}
                      </p>

                      <div className="mt-3 text-[11px] text-slate-500 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span>Penerbit: <strong className="text-slate-700">{meta.publisher}</strong></span>
                        <span>Tahun: <strong className="text-slate-700">{meta.year}</strong></span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                      <Link
                        href={`/regulasi-k3/${item.slug}`}
                        className="inline-flex items-center text-xs font-bold text-emerald-600 hover:text-emerald-700 min-h-[44px] group/item"
                      >
                        <span>Baca Ringkasan Regulasi</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/item:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 6. Simple Hierarchy Guide */}
      <section aria-labelledby="hierarchy-heading">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <span className="eyebrow text-emerald-600 font-extrabold tracking-wider text-xs uppercase block mb-1">
            TATA KELOLA HUKUM
          </span>
          <h2 id="hierarchy-heading" className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
            Hierarki Praktis Regulasi K3 di Tempat Kerja
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed mb-6">
            Penerapan keselamatan kerja di Indonesia mengikuti tata urutan peraturan perundang-undangan formal yang saling melengkapi dan mengikat:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-black text-emerald-600 mb-1">TINGKAT 1</div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                Undang-Undang (UU)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Menetapkan kewajiban pokok keselamatan kerja, hak dasar perlindungan pekerja, dan sanksi pidana/denda hukum (UU No. 1/1970).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-black text-emerald-600 mb-1">TINGKAT 2</div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                Peraturan Pemerintah (PP)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mengatur mekanisme implementasi sistem manajemen secara terintegrasi lintas kementerian (PP No. 50/2012 untuk SMK3).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-black text-emerald-600 mb-1">TINGKAT 3</div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                Peraturan Menteri (Permenaker)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Memuat standar teknis operasional spesifik: batas keselamatan alat, instalasi listrik, ketinggian, dan syarat personel.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-black text-emerald-600 mb-1">TINGKAT 4</div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                Kepmenaker &amp; Surat Edaran
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Menetapkan petunjuk teknis pelaksanaan, pedoman riksa uji, batasan teknis, serta Standar Kompetensi Kerja Nasional (SKKNI).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-black text-emerald-600 mb-1">TINGKAT 5</div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                Standar Teknis Sektoral &amp; Global
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Berlaku berdasarkan spesifikasi industri, kontrak proyek, atau acuan konsensus (SNI, ISO 45001, NFPA, ASME, OSHA).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Lead-Generation Conversion Section */}
      <section aria-labelledby="conversion-heading">
        <div className="p-6 sm:p-10 rounded-2xl bg-slate-900 text-white relative overflow-hidden shadow-lg border border-slate-800">
          <div className="relative z-10 max-w-3xl">
            <span className="eyebrow text-emerald-400 font-extrabold tracking-wider text-xs uppercase block mb-2">
              KONSULTASI KEPATUHAN HUKUM
            </span>
            <h2 id="conversion-heading" className="text-2xl sm:text-3xl font-black text-white mb-3">
              Butuh Menentukan Regulasi untuk Kegiatan Perusahaan?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Sampaikan kepada tim konsultan PT Kreasi Ultimate Berjaya informasi operasional Anda: sektor industri, aktivitas kerja, potensi bahaya dominan, mesin/peralatan yang digunakan, serta jumlah pekerja. Kami siap membantu memetakan register regulasi wajib dan merekomendasikan program pelatihan sertifikasi yang sesuai.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={leadGenWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors min-h-[44px] gap-2"
              >
                <span>Konsultasikan Kebutuhan K3</span>
                <MessageCircle className="w-4 h-4" />
              </a>
              <Link
                href="/pelatihan"
                className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-bold rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors min-h-[44px] gap-2"
              >
                <span>Lihat Semua Pelatihan K3</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Hub Cross-Links */}
      <section aria-label="Eksplorasi Hub K3 Terkait">
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
            Eksplorasi Referensi K3 Terkait:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            <Link
              href="/pelatihan"
              className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-emerald-600 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Pelatihan K3</span>
              <span className="text-[11px] font-normal text-slate-500 mt-1">Katalog Program</span>
            </Link>
            <Link
              href="/panduan"
              className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-emerald-600 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Panduan K3</span>
              <span className="text-[11px] font-normal text-slate-500 mt-1">Syarat &amp; Prosedur</span>
            </Link>
            <Link
              href="/perbandingan"
              className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-emerald-600 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Perbandingan K3</span>
              <span className="text-[11px] font-normal text-slate-500 mt-1">Pusat Keputusan</span>
            </Link>
            <Link
              href="/kamus-k3"
              className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-emerald-600 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Kamus K3</span>
              <span className="text-[11px] font-normal text-slate-500 mt-1">Glosarium Istilah</span>
            </Link>
            <Link
              href="/alat"
              className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-emerald-600 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Alat K3</span>
              <span className="text-[11px] font-normal text-slate-500 mt-1">Kalkulator &amp; APD</span>
            </Link>
            <Link
              href="/jadwal"
              className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-emerald-600 hover:border-emerald-500 transition-colors flex flex-col justify-between min-h-[44px]"
            >
              <span>Jadwal Pelatihan</span>
              <span className="text-[11px] font-normal text-slate-500 mt-1">Batch Terdekat</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Hub-Level FAQ Section */}
      {faqs.length > 0 && (
        <section aria-labelledby="regulasi-faq-heading" className="pt-2">
          <FaqAccordion items={faqs} title="Pertanyaan Umum Seputar Regulasi K3" />
        </section>
      )}
    </div>
  );
}
