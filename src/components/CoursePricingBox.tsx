import React from 'react';
import { waIntentUrl } from '@/src/lib/site';

export interface PricingPlan {
  name: string;
  tag?: string;
  popular?: boolean;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaText: string;
  intent: 'jadwal' | 'biaya' | 'syarat' | 'perusahaan' | 'daftar' | 'kemnaker_bnsp';
}

export function CoursePricingBox({
  programTitle,
  customPlans,
}: {
  programTitle: string;
  customPlans?: PricingPlan[];
}) {
  const defaultPlans: PricingPlan[] = [
    {
      name: 'Paket Fresh Graduate / Umum',
      tag: 'BEST VALUE PERSONAL',
      popular: false,
      price: 'Rp 4.500.000',
      period: 'per peserta',
      description: 'Ideal untuk lulusan baru D3/S1 & profesional perorangan yang ingin memulai karir HSE.',
      features: [
        'Sertifikat Pembinaan Calon Ahli K3 Kemnaker RI / BNSP',
        'Surat Keterangan Lulus (SKL) Resmi',
        'E-Modul & Himpunan Perundangan K3 Terupdate',
        'Bimbingan Laporan PKL & Presentasi Seminar',
        'Simulasi Ujian Evaluasi / Post-Test',
        'Akses Komunitas Alumni HSE se-Indonesia',
      ],
      ctaText: 'Daftar Paket Fresh Grad',
      intent: 'biaya',
    },
    {
      name: 'Paket Utusan Perusahaan (Corporate)',
      tag: 'PALING BANYAK DIPILIH PERUSAHAAN',
      popular: true,
      price: 'Rp 7.500.000',
      period: 'per peserta',
      description: 'Lengkap dengan SKP Penunjukan & Lisensi Resmi untuk audit kepatuhan SMK3 perusahaan.',
      features: [
        'Sertifikat Pembinaan Resmi Kemnaker RI / BNSP',
        'Surat Keputusan Penunjukan (SKP) Kemnaker RI',
        'Kartu Lisensi Kewenangan Ahli K3 (Badge)',
        'Hardcopy Modul & Himpunan Peraturan Perundangan K3',
        'Training Kit Eksklusif (Kemeja/Polo K3 + Pin)',
        'Faktur Pajak, Invoice TOP & Kwitansi Resmi Perusahaan',
        'Pendampingan Administrasi Berkas & Legalisir',
      ],
      ctaText: 'Daftar Paket Perusahaan',
      intent: 'perusahaan',
    },
    {
      name: 'Paket Bundling Dual Sertifikasi',
      tag: 'KEMNAKER RI + BNSP',
      popular: false,
      price: 'Rp 9.500.000',
      period: 'per peserta',
      description: 'Maksimal kompetensi: Mendapatkan 2 sertifikat legalitas negara sekaligus dalam 1 program.',
      features: [
        'Sertifikat Resmi Kemnaker RI + SKP + Lisensi',
        'Sertifikat Kompetensi Profesi BNSP (Garuda Emas)',
        'Portofolio Asesmen Uji Kompetensi Asesor BNSP',
        'Hardcopy & Softcopy Materi Lengkap 2 Lembaga',
        'Bimbingan Intensif sampai Lulus Uji Kompetensi',
        'Prioritas Konsultasi Pasca-Pelatihan',
      ],
      ctaText: 'Konsultasi Paket Dual',
      intent: 'jadwal',
    },
  ];

  const plans = customPlans || defaultPlans;

  return (
    <section id="biaya-paket" className="course-pricing-section my-8" aria-labelledby="pricing-heading">
      <div className="section-subheading mb-4">
        <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold">TRANSPARANSI BIAYA & PILIHAN PAKET</span>
        <h2 id="pricing-heading" className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mt-1">
          Pilihan Paket Investasi {programTitle}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Investasi resmi dan transparan tanpa biaya tersembunyi. Didukung skema pembayaran perorangan maupun purchase order (PO) korporasi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`pricing-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between border transition-all duration-300 ${
              plan.popular
                ? 'bg-gradient-to-b from-slate-900 to-slate-950 text-white border-emerald-500 shadow-xl ring-2 ring-emerald-500/40'
                : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 shadow-sm'
            }`}
          >
            <div>
              {plan.tag && (
                <span
                  className={`inline-block text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md mb-3 ${
                    plan.popular
                      ? 'bg-emerald-500 text-slate-950 font-black'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {plan.tag}
                </span>
              )}

              <h3 className="text-base sm:text-lg font-bold mb-1">{plan.name}</h3>
              <p className={`text-xs mb-4 ${plan.popular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                {plan.description}
              </p>

              <div className="mb-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <span className="text-2xl sm:text-3xl font-black">{plan.price}</span>
                {plan.period && (
                  <span className={`text-xs ml-1 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    / {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-2 mb-6 text-xs">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span className={plan.popular ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={waIntentUrl(plan.intent, `${programTitle} - ${plan.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full text-center text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-all block ${
                plan.popular
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25 font-black'
                  : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700'
              }`}
            >
              {plan.ctaText} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
