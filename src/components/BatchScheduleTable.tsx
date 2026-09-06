'use client';

import React, { useState } from 'react';
import { waUrl } from '@/src/lib/site';
import { batchScheduleData, type BatchItem } from '@/src/lib/schedule-data';
import { Check, Star } from 'lucide-react';

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
      <div className="batch-filter-bar flex flex-wrap gap-2 mb-6 pb-2 border-b border-slate-200">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'all'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Teknis Spesialis
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[12px] uppercase font-extrabold text-slate-600">
              <th className="py-3.5 px-4">Program & Batch</th>
              <th className="py-3.5 px-4">Tanggal Pelaksanaan</th>
              <th className="py-3.5 px-4 hidden md:table-cell">Metode & Format</th>
              <th className="py-3.5 px-4 hidden lg:table-cell">Lokasi</th>
              <th className="py-3.5 px-4 text-center">Status Kuota</th>
              <th className="py-3.5 px-4 text-right">Aksi Booking</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filteredBatches.map((batch) => {
              const bookingLink = handleBooking(batch);
              return (
                <tr key={batch.id} className="hover:bg-emerald-50/40 transition-colors">
                  <td className="py-4 px-4 align-top">
                    <div className="font-bold text-slate-900 leading-snug">
                      {batch.programName}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-extrabold bg-emerald-100 text-emerald-800">
                        {batch.batchCode}
                      </span>
                      <span className="text-xs text-slate-500">
                        {batch.level}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 align-top whitespace-nowrap">
                    <strong className="text-slate-900 block font-bold">
                      {batch.dateRange}
                    </strong>
                    <span className="text-xs text-slate-500">
                      {batch.duration}
                    </span>
                  </td>
                  <td className="py-4 px-4 align-top hidden md:table-cell text-xs text-slate-600">
                    <div className="font-semibold text-slate-800">
                      {batch.method}
                    </div>
                  </td>
                  <td className="py-4 px-4 align-top hidden lg:table-cell text-xs text-slate-500">
                    {batch.location}
                  </td>
                  <td className="py-4 px-4 align-top text-center whitespace-nowrap">
                    {batch.quotaStatus === 'urgent' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 border border-amber-300 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                        <span>{batch.quotaLabel}</span>
                      </span>
                    )}
                    {batch.quotaStatus === 'open' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        <Check className="w-3 h-3 text-emerald-700" aria-hidden="true" />
                        <span>{batch.quotaLabel}</span>
                      </span>
                    )}
                    {batch.quotaStatus === 'early_bird' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-300">
                        <Star className="w-3 h-3 fill-current text-blue-700" aria-hidden="true" />
                        <span>{batch.quotaLabel}</span>
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

      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 px-1">
        <p>
          * Kuota per batch dibatasi maksimal 30 peserta sesuai regulasi Kemnaker RI untuk menjaga efektivitas evaluasi PKL.
        </p>
        <p className="font-semibold text-emerald-700">
          Pre-screening kelayakan berkas ijazah D3/S1 100% bebas biaya.
        </p>
      </div>
    </div>
  );
}
