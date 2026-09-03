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
      ctaText: 'Daftar Paket Fresh Grad →',
      intent: 'biaya',
    },
    {
      name: 'Paket Utusan Perusahaan (Corporate)',
      tag: '⭐ PALING BANYAK DIPILIH PERUSAHAAN',
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
      ctaText: 'Daftar Paket Perusahaan →',
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
      ctaText: 'Konsultasi Paket Dual →',
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

      <div className="pricing-grid-3">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}
          >
            <div>
              {plan.tag && (
                <span className={`pricing-tag-pill ${plan.popular ? 'pricing-tag-popular' : ''}`}
                >
                  {plan.tag}
                </span>
              )}
              <h3 className="pricing-title">{plan.name}</h3>
              <p className="pricing-desc">{plan.description}</p>

              <div className="pricing-amount-row">
                <span className="pricing-amount">{plan.price}</span>
                {plan.period && <span className="pricing-period">/ {plan.period}</span>}
              </div>

              <ul className="pricing-features-list">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="pricing-feature-item">
                    <span className="pricing-check-icon">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              className={`pricing-cta-btn ${
                plan.popular
                  ? 'button button-accent button-full btn-glow'
                  : 'button button-secondary button-full'
              }`}
              href={waIntentUrl(plan.intent, `${plan.name} - ${programTitle}`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{plan.ctaText}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}