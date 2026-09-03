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
  intent: 'jadwal' | 'biaya' | 'perusahaan' | 'daftar';
}

export function CoursePricingBox({
  programTitle = 'Pelatihan K3',
}: {
  programTitle?: string;
}) {
  const plans: PricingPlan[] = [
    {
      name: 'Kelas Publik (Blended Online)',
      tag: 'FAVORIT PESERTA',
      popular: true,
      price: 'Mulai Rp 4.500.000',
      period: 'per peserta',
      description: 'Metode daring interaktif via Zoom untuk sesi teori regulasi + observasi PKL & evaluasi ujian.',
      features: [
        'Sertifikat Pembinaan Resmi Kemnaker RI / BNSP',
        'SKP & Lisensi Kewenangan K3 (bagi utusan perusahaan)',
        'Buku Himpunan Undang-Undang & Modul Lengkap',
        'Bimbingan Observasi PKL & Kertas Kerja',
        'Seminar Kit Eksklusif & E-Certificate',
      ],
      ctaText: 'Daftar Batch Publik',
      intent: 'jadwal',
    },
    {
      name: 'In-House Training Perusahaan',
      tag: 'HEMAT 30-40%',
      popular: false,
      price: 'Paket Khusus Korporasi',
      period: 'min. 10-20 peserta',
      description: 'Pelatihan eksklusif di lokasi pabrik/kantor perusahaan Anda atau hotel pilihan dengan jadwal fleksibel.',
      features: [
        'Kurikulum & Studi Kasus 100% Sesuai Bahaya Industri Anda',
        'Jadwal & Shift Pelatihan Fleksibel Mengikuti Operasional',
        'Pengurusan Berkas Penunjukan P2K3 Perusahaan Lengkap',
        'Laporan Hasil Evaluasi & Rekomendasi Audit K3',
        'Surat Penawaran Harga (SPH), PO & Faktur Pajak Resmi',
      ],
      ctaText: 'Minta Proposal In-House',
      intent: 'perusahaan',
    },
  ];

  return (
    <section className="course-pricing-section my-10" id="biaya-paket" aria-label="Rincian Biaya dan Paket Pelatihan">
      <div className="section-header mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-extrabold uppercase tracking-wider mb-2">
          <span>💼 TRANSPARANSI INVESTASI PELATIHAN</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Pilihan Paket & Estimasi Biaya {programTitle}
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-1.5 max-w-3xl">
          Seluruh biaya investasi bersifat transparan tanpa pungutan tersembunyi (No Hidden Fee). Termasuk verifikasi berkas dan pengurusan legalitas sertifikat resmi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`pricing-card relative flex flex-col p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border ${
              plan.popular
                ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-lg'
                : 'border-slate-200 dark:border-slate-800 shadow-sm'
            }`}
          >
            {plan.tag && (
              <span
                className={`absolute -top-3 right-6 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                  plan.popular
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-800 text-amber-400 border border-amber-500/30'
                }`}
              >
                {plan.tag}
              </span>
            )}

            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
              {plan.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px]">
              {plan.description}
            </p>

            <div className="pricing-number-box py-3 px-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 mb-6">
              <span className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                  /{plan.period}
                </span>
              )}
            </div>

            <div className="pricing-features-box mb-8 flex-grow">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-3">
                Fasilitas Termasuk:
              </span>
              <ul className="space-y-2.5">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={waIntentUrl(plan.intent, programTitle)}
              target="_blank"
              rel="noopener noreferrer"
              className={`button button-full ${
                plan.popular ? 'button-accent btn-glow' : 'button-primary'
              }`}
            >
              <span>{plan.ctaText}</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
