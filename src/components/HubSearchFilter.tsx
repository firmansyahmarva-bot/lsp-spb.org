'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ProgramCard } from './ProgramCard';
import { getProgramDisplayMeta } from '@/src/lib/program-meta-helper';
import { type ContentRecord, sectionLabels } from '@/src/lib/content';

export function HubSearchFilter({
  items,
  isCourseSection,
  sectionLabel,
  placeholder,
}: {
  items: ContentRecord[];
  isCourseSection: boolean;
  sectionLabel: string;
  placeholder?: string;
}) {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Filter logic
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.primaryKeyword && item.primaryKeyword.toLowerCase().includes(q));

      if (!matchesQuery) return false;

      if (selectedTag === 'all') return true;
      const text = `${item.title} ${item.description}`.toLowerCase();
      if (selectedTag === 'kemnaker') return text.includes('kemnaker') || text.includes('ahli k3') || text.includes('smk3');
      if (selectedTag === 'bnsp') return text.includes('bnsp') || text.includes('skkni') || text.includes('kompetensi');
      if (selectedTag === 'teknis') return text.includes('listrik') || text.includes('kebakaran') || text.includes('ketinggian') || text.includes('crane') || text.includes('forklift');
      return true;
    });
  }, [items, query, selectedTag]);

  return (
    <div className="hub-filter-wrapper my-6">
      {/* Search Input Bar */}
      <div className="hub-search-box">
        <div className="hub-search-input-wrapper">
          <svg className="hub-search-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder || `Cari dalam ${sectionLabel} (contoh: kebakaran, crane, smk3, listrik, p3k)...`}
            className="hub-search-input"
            aria-label={`Pencarian ${sectionLabel}`}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="hub-search-clear"
              aria-label="Hapus pencarian"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Badges */}
        {isCourseSection && (
          <div className="hub-filter-pills" role="tablist" aria-label="Filter kategori">
            <button
              type="button"
              className={`hub-filter-pill ${selectedTag === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedTag('all')}
            >
              Semua Program ({items.length})
            </button>
            <button
              type="button"
              className={`hub-filter-pill ${selectedTag === 'kemnaker' ? 'active' : ''}`}
              onClick={() => setSelectedTag('kemnaker')}
            >
              Kemnaker RI
            </button>
            <button
              type="button"
              className={`hub-filter-pill ${selectedTag === 'bnsp' ? 'active' : ''}`}
              onClick={() => setSelectedTag('bnsp')}
            >
              BNSP RI
            </button>
            <button
              type="button"
              className={`hub-filter-pill ${selectedTag === 'teknis' ? 'active' : ''}`}
              onClick={() => setSelectedTag('teknis')}
            >
              Spesialisasi Teknis
            </button>
          </div>
        )}
      </div>

      {/* Result Counter */}
      <div className="hub-results-meta">
        <span>
          Menampilkan <strong>{filteredItems.length}</strong> dari <strong>{items.length}</strong> {sectionLabel.toLowerCase()}
        </span>
      </div>

      {/* Results Grid */}
      {filteredItems.length > 0 ? (
        isCourseSection ? (
          <div className="program-grid-3" aria-label={sectionLabel}>
            {filteredItems.map((item) => {
              const meta = getProgramDisplayMeta(item);
              return (
                <ProgramCard
                  key={item.slug}
                  title={item.title}
                  tag={meta.issuer}
                  desc={item.description}
                  href={`/${item.section}/${item.slug}`}
                  image={meta.image}
                  issuer={meta.issuer}
                  price={{ startingFrom: meta.price, label: 'Investasi:' }}
                  meta={{ duration: meta.duration }}
                />
              );
            })}
          </div>
        ) : (
          <div className="record-grid" aria-label={sectionLabel}>
            {filteredItems.map((item) => (
              <Link key={item.slug} href={`/${item.section}/${item.slug}`} className="record-card">
                <div className="record-card-header">
                  <span className="record-card-tag">{sectionLabels[item.section]}</span>
                  {item.status && <span className="record-status-pill">{item.status}</span>}
                </div>
                <h2 className="record-card-title">{item.title}</h2>
                <p className="record-card-desc">{item.description}</p>
                <span className="record-card-link">
                  <span>Pelajari Selengkapnya</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        )
      ) : (
        <div className="hub-empty-state">
          <div className="empty-icon">🔍</div>
          <h3>Tidak Ada Hasil yang Cocok</h3>
          <p>Tidak ditemukan hasil untuk kata kunci &ldquo;{query}&rdquo;. Coba gunakan istilah lain atau reset pencarian.</p>
          <button
            type="button"
            onClick={() => { setQuery(''); setSelectedTag('all'); }}
            className="button button-secondary"
          >
            Reset Pencarian
          </button>
        </div>
      )}
    </div>
  );
}