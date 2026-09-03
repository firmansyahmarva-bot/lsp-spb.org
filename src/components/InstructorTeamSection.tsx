import React from 'react';
import { site, waIntentUrl } from '@/src/lib/site';

export interface Instructor {
  name: string;
  role: string;
  credentials: string[];
  specialty: string;
  experience: string;
}

const instructors: Instructor[] = [
  {
    name: 'Ir. Bambang Trihatmojo, S.T., M.T., IPU',
    role: 'Lead Auditor SMK3 Kemnaker RI & Praktisi HSE Senior',
    credentials: ['Lead Auditor PP 50/2012', 'Ahli K3 Umum Kemnaker RI', 'Asesor Kompetensi BNSP'],
    specialty: 'Sistem Manajemen K3, Audit 166 Kriteria, Investigasi Insiden & HIRADC Manufaktur',
    experience: '15+ Tahun Praktisi Industri & BUMN',
  },
  {
    name: 'dr. Hendra Setiawan, Sp.Ok',
    role: 'Dokter Spesialis Kedokteran Okupasi & Instruktur Hiperkes',
    credentials: ['Spesialis Okupasi (Sp.Ok)', 'Instruktur Resmi Hiperkes', 'Sertifikasi Dokter Perusahaan'],
    specialty: 'Higiene Industri, Pengelolaan Klinik Kerja, Penilaian Fit-for-Duty & Petugas P3K',
    experience: '12+ Tahun Surveilans Kesehatan Kerja',
  },
  {
    name: 'Agus Kurniawan, S.T., M.Eng.',
    role: 'Ahli K3 Spesialis Listrik & Proteksi Kebakaran',
    credentials: ['Ahli K3 Listrik Kemnaker RI', 'Instruktur K3 Kebakaran', 'Auditor PUIL 2020'],
    specialty: 'Inspeksi PUIL 2020, Sistem Isolasi LOTO, Proteksi Petir & Bahaya Busur Api (Arc Flash)',
    experience: '10+ Tahun Engineer Power Plant & EPC',
  },
  {
    name: 'Siti Rahmawati, S.Si., M.Sc.',
    role: 'Ahli K3 Kimia & Tenaga Higiene Industri Utama',
    credentials: ['Ahli K3 Kimia Kemnaker RI', 'HIU Terlisensi BNSP', 'Auditor Ruang Terbatas'],
    specialty: 'Pengendalian B3 (Kepmenaker 187/1999), SDS GHS, Pengukuran Lingkungan Kerja & Confined Space',
    experience: '11+ Tahun Konsultan Industri Kimia & Petrokimia',
  },
];

export function InstructorTeamSection() {
  return (
    <section className="instructor-team-section my-12" aria-labelledby="instructors-heading">
      <div className="section-heading text-center mb-8">
        <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider">
          TIM PEMBINA & PRAKTISI
        </span>
        <h2 id="instructors-heading" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
          Instruktur & Asesor Berlisensi Resmi
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-2">
          Seluruh program pembinaan dan bimbingan sertifikasi diampu oleh praktisi senior, Lead Auditor SMK3, dokter spesialis okupasi, dan asesor berlisensi resmi Kemnaker RI / BNSP.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {instructors.map((inst, idx) => (
          <div
            key={idx}
            className="instructor-card bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Initials Avatar / Badge */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white font-black text-lg flex items-center justify-center mb-4 shadow-sm">
                {inst.name.split(' ')[0].charAt(0)}
                {inst.name.split(' ')[1] ? inst.name.split(' ')[1].charAt(0) : 'K'}
              </div>

              <strong className="text-sm font-bold text-slate-900 dark:text-white block leading-snug">
                {inst.name}
              </strong>
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 block mt-1 leading-tight">
                {inst.role}
              </span>

              <div className="my-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Sertifikasi & Lisensi:
                </span>
                <ul className="space-y-1">
                  {inst.credentials.map((cred, cIdx) => (
                    <li key={cIdx} className="text-[11px] text-slate-600 dark:text-slate-300 flex items-start gap-1">
                      <span className="text-emerald-500 font-black">✓</span>
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                  Fokus Pembinaan:
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {inst.specialty}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
              <span>{inst.experience}</span>
              <span className="font-bold text-emerald-600">● Terverifikasi</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-900 dark:text-white">Legalitas Penyelenggaraan:</span>
          <span className="text-slate-600 dark:text-slate-300">
            {site.legalNotice}
          </span>
        </div>
        <a
          href={waIntentUrl('perusahaan', 'Konsultasi Instruktur K3')}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
        >
          <span>Undang Instruktur ke Perusahaan</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
