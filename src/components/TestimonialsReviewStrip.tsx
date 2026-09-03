import React from 'react';

export function TestimonialsReviewStrip() {
  const reviews = [
    {
      name: 'Rian Hidayat, S.T.',
      role: 'HSE Officer — Manufaktur Komponen Otomotif',
      program: 'Alumni Ahli K3 Umum Kemnaker RI (120 JP)',
      rating: 5,
      review:
        'Bimbingan materi 120 JP Ahli K3 Umum sangat aplikatif dan tidak kaku. Instruktur praktisi mengupas tuntas penyusunan laporan PKL dan identifikasi bahaya tempat kerja nyata. Pengurusan SKP dan lisensi resmi dibantu tuntas sampai terbit.',
      date: 'Batch 2026',
    },
    {
      name: 'Dra. Maya Sartika',
      role: 'HR & GA Manager — Industri Pengolahan Makanan',
      program: 'In-House Training Petugas P3K & K3 Kebakaran (35 Peserta)',
      rating: 5,
      review:
        'Pelaksanaan in-house training di fasilitas pabrik kami sangat disiplin dan terstruktur. Tim instruktur membawa peralatan simulasi drill pemadaman dan resusitasi lengkap. Kelengkapan administrasi SPH, invoice, dan faktur pajak sangat rapi untuk laporan keuangan.',
      date: 'In-House Korporasi',
    },
    {
      name: 'Budi Santoso, S.T.',
      role: 'Lead Safety Engineer — Kontraktor EPC & Konstruksi',
      program: 'Alumni Auditor SMK3 (PP 50/2012) & K3 Listrik',
      rating: 5,
      review:
        'Pendalaman 166 kriteria audit SMK3 sangat membantu kesiapan tim kami menghadapi audit sertifikasi eksternal dari klien BUMN. Penjelasan pasal dan interpretasi perundangan K3 disampaikan sangat lugas dan berbasis studi kasus aktual.',
      date: 'Batch 2026',
    },
  ];

  return (
    <section className="section-container my-12" aria-labelledby="reviews-heading">
      <div className="section-heading text-center mb-8">
        <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold">
          ULASAN & PENGALAMAN ALUMNI
        </span>
        <h2 id="reviews-heading" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
          Pengalaman Nyata Peserta & Perusahaan Mitra
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-1">
          Testimoni otentik dari praktisi HSE, manajemen HR perusahaan, dan engineer keselamatan kerja yang telah menyelesaikan pembinaan bersama PT Kreasi Ultimate Berjaya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="review-card bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-3 text-amber-400 text-sm" aria-label={`Rating ${rev.rating} dari 5 bintang`}>
                {'★'.repeat(rev.rating)}
                <span className="text-xs font-bold text-slate-400 ml-1.5">{rev.date}</span>
              </div>

              {/* Review Quote */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4 italic">
                &ldquo;{rev.review}&rdquo;
              </p>
            </div>

            {/* Author Info */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 text-white font-black flex items-center justify-center text-sm shadow-sm shrink-0">
                {rev.name.charAt(0)}
              </div>
              <div>
                <strong className="text-xs sm:text-sm text-slate-900 dark:text-white block font-bold">
                  {rev.name}
                </strong>
                <small className="text-[11px] text-slate-500 dark:text-slate-400 block leading-tight">
                  {rev.role}
                </small>
                <span className="inline-block text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {rev.program}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}