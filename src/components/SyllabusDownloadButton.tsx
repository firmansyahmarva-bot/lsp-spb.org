'use client';

import React from 'react';
import { waUrl } from '@/src/lib/site';

export function SyllabusDownloadButton({ programTitle }: { programTitle: string }) {
  const downloadUrl = waUrl(
    `Halo PT Kreasi Ultimate Berjaya, saya ingin meminta dokumen PDF Silabus Lengkap, Rundown Materi, dan Formulir Pendaftaran resmi untuk program ${programTitle}. Mohon dikirimkan filenya.`
  );

  return (
    <div className="syllabus-download-card my-6 p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-md border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>
        <div>
          <strong className="text-sm sm:text-base font-bold text-white block">
            Unduh Silabus & Proposal Resmi (PDF)
          </strong>
          <span className="text-xs text-slate-300 block mt-0.5">
            Dapatkan rincian 120 JP, dokumen persyaratan, dan format SPH untuk pengajuan corporate.
          </span>
        </div>
      </div>

      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span>Minta PDF Silabus</span>
      </a>
    </div>
  );
}
