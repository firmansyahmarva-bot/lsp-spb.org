'use client';

import React, { useState } from 'react';
import { waUrl } from '@/src/lib/site';
import { batchScheduleData, type BatchItem } from '@/src/lib/schedule-data';

export function BatchScheduleTable() {
  const [activeTab, setActiveTab] = useState<'all' | 'ak3u' | 'smk3' | 'darurat' | 'teknis'>('all');

  const filteredBatches =
    activeTab === 'all'
      ? batchScheduleData
      : batchScheduleData.filter((item) => item.category === activeTab);

  const handleBooking = (batch: BatchItem) => {
    const message = `Halo PT Kreasi Ultimate Berjaya, saya berminat mendaftar & booking kuota untuk ${batch.programName} - ${batch.batchCode} (${batch.dateRange}). Mohon info ketersediaan kursi & rincian administrasinya.`;
    return waUrl(message);
  };

  return (
    <div className="batch-schedule-section my-8" id="tabel-jadwal">
      <div className="batch-filter-bar flex flex-wrap gap-2 mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'all'
              ? 'bg-slate-900 text-white dark:bg-emerald-600 shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          Semua Program ({batchScheduleData.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('ak3u')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'ak3u'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          Ahli K3 Umum (120 JP)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('smk3')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'smk3'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          Auditor SMK3
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('darurat')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'darurat'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          P3K & Kebakaran
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('teknis')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'teknis'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          Teknis Spesialis
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-[12px] uppercase font-extrabold text-slate-600 dark:text-slate-400">
              <th className="py-3.5 px-4">Program & Batch</th>
              <th className="py-3.5 px-4">Tanggal Pelaksanaan</th>
              <th className="py-3.5 px-4 hidden md:table-cell">Metode & Format</th>
              <th className="py-3.5 px-4 hidden lg:table-cell">Lokasi</th>
              <th className="py-3.5 px-4 text-center">Status Kuota</th>
              <th className="py-3.5 px-4 text-right">Aksi Booking</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
            {filteredBatches.map((batch) => {
              const bookingLink = handleBooking(batch);
              return (
                <tr key={batch.id} className="hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 transition-colors">
                  <td className="py-4 px-4 align-top">
                    <div className="font-bold text-slate-900 dark:text-white leading-snug">
                      {batch.programName}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-extrabold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                        {batch.batchCode}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {batch.level}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 align-top whitespace-nowrap">
                    <strong className="text-slate-900 dark:text-white block font-bold">
                      {batch.dateRange}
                    </strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {batch.duration}
                    </span>
                  </td>
                  <td className="py-4 px-4 align-top hidden md:table-cell text-xs text-slate-600 dark:text-slate-300">
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      {batch.method}
                    </div>
                  </td>
                  <td className="py-4 px-4 align-top hidden lg:table-cell text-xs text-slate-500 dark:text-slate-400">
                    {batch.location}
                  </td>
                  <td className="py-4 px-4 align-top text-center whitespace-nowrap">
                    {batch.quotaStatus === 'urgent' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700 animate-pulse">
                        ● {batch.quotaLabel}
                      </span>
                    )}
                    {batch.quotaStatus === 'open' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                        ✓ {batch.quotaLabel}
                      </span>
                    )}
                    {batch.quotaStatus === 'early_bird' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-300 dark:border-blue-700">
                        ★ {batch.quotaLabel}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 align-top text-right whitespace-nowrap">
                    <a
                      href={bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-extrabold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-sm hover:shadow"
                      aria-label={`Booking ${batch.programName} ${batch.batchCode}`}
                    >
                      <span>Booking Kursi</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2 px-1">
        <p>
          * Kuota per batch dibatasi maksimal 30 peserta sesuai regulasi Kemnaker RI untuk menjaga efektivitas evaluasi PKL.
        </p>
        <p className="font-semibold text-emerald-700 dark:text-emerald-400">
          Pre-screening kelayakan berkas ijazah D3/S1 100% bebas biaya.
        </p>
      </div>
    </div>
  );
}
