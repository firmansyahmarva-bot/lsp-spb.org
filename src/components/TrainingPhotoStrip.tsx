import Image from 'next/image';

export interface PhotoStripItem {
  src: string;
  alt: string;
  caption: string;
  category?: string;
}

const defaultPhotos: PhotoStripItem[] = [
  {
    src: '/images/content/instruktur-memandu-sesi-kelas-1.webp',
    alt: 'Instruktur memandu pemaparan regulasi K3 di ruang kelas',
    caption: 'Sesi Pembinaan Teori & Regulasi Kelas',
    category: 'Ruang Kelas',
  },
  {
    src: '/images/content/peserta-mengikuti-pelatihan-crane-1.webp',
    alt: 'Praktik inspeksi dan pengoperasian pesawat angkat crane',
    caption: 'Praktik Lapangan Alat Angkat & Crane',
    category: 'Praktik Lapangan',
  },
  {
    src: '/images/content/peserta-mengikuti-pelatihan-forklift-1.webp',
    alt: 'Simulasi manuver dan keselamatan operasional forklift',
    caption: 'Pelatihan Manuver Forklift Industri',
    category: 'Alat Berat',
  },
  {
    src: '/images/content/asesmen-individu-dengan-pengisian-dokumen-1.webp',
    alt: 'Asesmen portofolio dan wawancara kompetensi individu',
    caption: 'Asesmen Uji Kompetensi Personel',
    category: 'Uji BNSP/Kemnaker',
  },
  {
    src: '/images/content/peserta-mengerjakan-ujian-tertulis-di-kelas-1.webp',
    alt: 'Peserta mengerjakan evaluasi dan ujian tertulis',
    caption: 'Pelaksanaan Ujian Evaluasi Pembinaan',
    category: 'Evaluasi Resmi',
  },
  {
    src: '/images/content/foto-bersama-peserta-dan-instruktur-di-kelas-1.webp',
    alt: 'Foto bersama peserta dan instruktur saat penutupan batch',
    caption: 'Kelulusan Batch & Penyerahan Sertifikat',
    category: 'Dokumentasi Alumni',
  },
];

export function TrainingPhotoStrip({
  title = 'Dokumentasi Pembinaan & Fasilitas Pelatihan K3',
  subtitle = 'Bukti otentik kegiatan kelas teori, simulasi praktik lapangan, dan asesmen evaluasi resmi bersama PT Kreasi Ultimate Berjaya.',
  photos = defaultPhotos,
}: {
  title?: string;
  subtitle?: string;
  photos?: PhotoStripItem[];
}) {
  return (
    <section className="training-photo-strip-section my-10" aria-label="Dokumentasi Kegiatan Pelatihan">
      <div className="photo-strip-header mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold uppercase tracking-wider mb-2">
          <span>📸 DOKUMENTASI KEGIATAN NYATA</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-1.5 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {photos.map((item, idx) => (
          <div
            key={idx}
            className="photo-strip-card group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              
              {item.category && (
                <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                  {item.category}
                </span>
              )}

              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-sm font-bold text-white leading-snug drop-shadow-sm">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
