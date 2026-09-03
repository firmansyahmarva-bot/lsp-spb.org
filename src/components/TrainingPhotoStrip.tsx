import React from 'react';
import Image from 'next/image';

const marqueePhotos = [
  { src: '/images/content/instruktur-memandu-sesi-kelas-1.webp', alt: 'Pembinaan Kelas Teori Regulasi K3', label: 'Kelas Teori K3' },
  { src: '/images/content/praktik-pengangkatan-beban-dengan-crane-2.webp', alt: 'Praktik Keselamatan Crane & Lifting', label: 'Praktik Crane' },
  { src: '/images/content/praktik-pengoperasian-forklift-di-lapangan-2.webp', alt: 'Simulasi Safety Operasional Forklift', label: 'Safety Forklift' },
  { src: '/images/content/asesmen-individu-dengan-pengisian-dokumen-1.webp', alt: 'Asesmen Uji Kompetensi BNSP/Kemnaker', label: 'Asesmen Uji' },
  { src: '/images/content/peserta-mengerjakan-ujian-tertulis-di-kelas-1.webp', alt: 'Ujian Evaluasi Pembinaan Kemnaker RI', label: 'Ujian Resmi' },
  { src: '/images/content/foto-bersama-peserta-dan-instruktur-di-kelas-1.webp', alt: 'Dokumentasi Kelulusan & Penyerahan Lisensi', label: 'Kelulusan Batch' },
  { src: '/images/content/praktik-pengangkatan-beban-dengan-crane-1.webp', alt: 'Uji Angkat Beban dan SIO Operator', label: 'Uji Angkat' },
  { src: '/images/content/praktik-rigging-dan-pengangkatan-beban-1.webp', alt: 'Teknis Rigging & Sling Pengikat', label: 'Praktik Rigging' },
  { src: '/images/content/peserta-mengikuti-sesi-di-ruang-kelas-1.webp', alt: 'Diskusi Studi Kasus Norma K3', label: 'Diskusi Kasus' },
  { src: '/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp', alt: 'Observasi K3 Fasilitas Industri', label: 'Kunjungan Industri' },
  { src: '/images/content/instruktur-menjelaskan-materi-di-kelas-kecil-1.webp', alt: 'Pembekalan Modul Ahli K3 Umum', label: 'Modul Ahli K3' },
  { src: '/images/content/praktik-pengoperasian-forklift-di-lapangan-1.webp', alt: 'Praktik Lapangan Alat Berat', label: 'Alat Berat' },
  { src: '/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-1.webp', alt: 'Seminar Kertas Kerja Laporan PKL', label: 'Seminar PKL' },
  { src: '/images/content/instruktur-memandu-sesi-kelas-2.webp', alt: 'Sesi Pembinaan Ahli K3 Kimia & Listrik', label: 'Pembinaan Teknis' },
  { src: '/images/content/peserta-mengikuti-pelatihan-di-kelas-1.webp', alt: 'Peserta Pembinaan Sertifikasi Nasional', label: 'Batch Pelatihan' },
  { src: '/images/content/foto-bersama-peserta-pelatihan-di-kelas-2.webp', alt: 'Dokumentasi Alumni Ahli K3 Indonesia', label: 'Alumni K3' },
];

export function TrainingPhotoStrip({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  // Duplicate array for seamless infinite marquee loop
  const duplicatedPhotos = [...marqueePhotos, ...marqueePhotos];

  return (
    <div className="photo-marquee-wrapper my-6" aria-label="Dokumentasi Foto Kegiatan Pelatihan K3">
      {title && (
        <div className="photo-marquee-header text-center mb-3">
          <span className="text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            📸 DOKUMENTASI KEGIATAN NYATA
          </span>
          <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="photo-marquee-container">
        <div className="photo-marquee-track">
          {duplicatedPhotos.map((item, idx) => (
            <div key={idx} className="photo-marquee-item group">
              <Image
                src={item.src}
                alt={item.alt}
                width={200}
                height={120}
                className="w-full h-full object-cover"
              />
              <div className="photo-marquee-badge">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
