import Link from 'next/link';
import { type ContentRecord } from '@/src/lib/content';
import { HubSearchFilter } from './HubSearchFilter';
import { FaqAccordion } from './FaqAccordion';
import { sectionFaqs, sectionLegalInfo } from '@/src/lib/section-data';
import { waIntentUrl } from '@/src/lib/site';

interface PanduanHubContentProps {
  items: ContentRecord[];
}

export function PanduanHubContent({ items }: PanduanHubContentProps) {
  const legal = sectionLegalInfo.panduan;
  const faqs = sectionFaqs.panduan || [];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. Hero Section */}
      <header className="hub-hero">
        <div className="eyebrow-pill">
          <span className="eyebrow-dot" />
          <span>PANDUAN &amp; PRAKTIK K3</span>
        </div>
        <h1>Panduan K3: Pengertian, Tujuan, dan Penerapan di Tempat Kerja</h1>
        <p>
          Halaman ini menyajikan pemahaman mendasar mengenai keselamatan dan kesehatan kerja (K3) serta membantu Anda menavigasi panduan teknis, persyaratan program, dokumen kepatuhan, dan prosedur operasional sesuai kebutuhan spesifik Anda.
        </p>

        <div className="hero-cta-group mt-6 flex flex-wrap gap-3">
          <a
            className="button button-accent button-large btn-glow"
            href={waIntentUrl('jadwal', 'Konsultasi dari Hub Panduan K3')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Konsultasikan Kebutuhan K3</span>
            <span aria-hidden="true">→</span>
          </a>
          <a className="button button-outline-light button-large" href="#direktori-panduan">
            <span>Cari Panduan K3</span>
          </a>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 italic">
          Untuk pertanyaan pelatihan, sampaikan program, pekerjaan, pendidikan atau kebutuhan perusahaan melalui WhatsApp.
        </p>
      </header>

      {/* 2. Featured "Apa Itu K3?" Section */}
      <section className="section-container" aria-labelledby="apa-itu-k3-heading">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs uppercase mb-2">
            PONDASI KESELAMATAN KERJA
          </div>
          <h2 id="apa-itu-k3-heading" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-4">
            Apa Itu K3?
          </h2>

          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
            <p className="font-medium text-slate-900 dark:text-slate-100 text-base sm:text-lg border-l-4 border-emerald-600 pl-4 py-1">
              Keselamatan dan Kesehatan Kerja (K3) adalah upaya terencana dan sistematis untuk mencegah kecelakaan kerja dan penyakit akibat kerja (PAK) serta menciptakan kondisi lingkungan kerja yang aman, sehat, dan produktif bagi seluruh tenaga kerja.
            </p>

            <p>
              Secara praktis, K3 berfokus pada pencegahan cedera, gangguan kesehatan okupasi, dan fatalitas di tempat kerja. Penerapan K3 melindungi tidak hanya tenaga kerja tetap, namun juga kontraktor, tamu fasilitas, aset fisik peralatan, dan kelestarian lingkungan kerja di sekitarnya.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                  <span className="text-emerald-600">🛡️</span> Apa yang Dilindungi K3?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Perlindungan menyeluruh atas keselamatan fisik dan mental pekerja, orang lain di lokasi kerja, keutuhan mesin serta sumber produksi, serta kelangsungan operasional perusahaan.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                  <span className="text-emerald-600">⚖️</span> Mengapa Tempat Kerja Menerapkan K3?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Didasari tanggung jawab moral kemanusiaan, pemenuhan kewajiban perundangan nasional (UU No. 1/1970 dan PP No. 50/2012), serta menjaga efisiensi bisnis dengan menekan risiko downtime dan kerugian finansial.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                  <span className="text-emerald-600">👥</span> Siapa yang Terlibat dalam K3?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Seluruh elemen organisasi: manajemen puncak yang berkomitmen menyediakan sumber daya, pengurus P2K3 dan Ahli K3 sebagai motor teknis, supervisor lapangan, hingga kedisiplinan pekerja garis depan.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                  <span className="text-emerald-600">🔄</span> Bahaya, Risiko, dan Pengendalian
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <strong>Bahaya</strong> adalah sumber atau situasi berpotensi mencelakai. <strong>Risiko</strong> adalah kombinasi peluang dan keparahan dampak. <strong>Pengendalian</strong> adalah tindakan terencana untuk menurunkan risiko ke batas yang aman.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              Penerapan K3 di lapangan bersifat dinamis dan disesuaikan dengan aktivitas nyata, kondisi fasilitas kerja, serta regulasi sektoral terkait. Sertifikasi atau pelatihan personel merupakan pilar penting peningkatan kapasitas, namun keselamatan tempat kerja tetap bergantung pada konsistensi pengawasan dan kepatuhan prosedur operasional.
            </p>
          </div>
        </div>
      </section>

      {/* 3. "Start Here" Decision Section */}
      <section className="section-container" aria-labelledby="mulai-kebutuhan-heading">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
            NAVIGASI PRAKTIS
          </span>
          <h2 id="mulai-kebutuhan-heading" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1 mb-2">
            Mulai dari Kebutuhan Anda
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Pilih jalur penelusuran yang paling relevan dengan peran kerja, kebutuhan kepatuhan hukum, atau tujuan pembinaan Anda:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: New learner */}
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center text-lg mb-3">
                📖
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                Saya Baru Mengenal K3
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Mulai dari pengertian dasar, bahaya, risiko, pengendalian dan tanggung jawab di tempat kerja.
              </p>
            </div>
            <Link
              href="/kamus-k3"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Buka Glosarium K3</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Card 2: Training candidate */}
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center text-lg mb-3">
                🎓
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                Saya Mencari Pelatihan K3
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Bandingkan program berdasarkan pekerjaan, persyaratan dan tujuan peserta.
              </p>
            </div>
            <Link
              href="/pelatihan"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Lihat Katalog Pelatihan</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Card 3: Requirements check */}
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center text-lg mb-3">
                📋
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                Saya Mencari Syarat Pendaftaran
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Periksa pendidikan, pengalaman dan dokumen untuk program yang dituju.
              </p>
            </div>
            <Link
              href="/panduan/syarat-ahli-k3-umum"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Cek Syarat Ahli K3 Umum</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Card 4: Cost check */}
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center text-lg mb-3">
                💰
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                Saya Mencari Biaya Pelatihan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Lihat faktor biaya dan konfirmasi penawaran terbaru sebelum mendaftar.
              </p>
            </div>
            <Link
              href="/panduan/biaya-pelatihan-k3"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Cek Panduan Biaya</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Card 5: Company guide */}
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center text-lg mb-3">
                🏢
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                Perusahaan Membutuhkan Panduan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Temukan panduan dokumen, audit, risiko, emergency response dan pengembangan personel.
              </p>
            </div>
            <a
              href={waIntentUrl('perusahaan', 'Kebutuhan Panduan K3 Perusahaan')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Konsultasi Kebutuhan Perusahaan</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Card 6: SOP search */}
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 flex items-center justify-center text-lg mb-3">
                📑
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                Saya Mencari SOP atau Cara Kerja
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Cari berdasarkan pekerjaan, alat, risiko atau dokumen yang ingin dibuat.
              </p>
            </div>
            <a
              href="#direktori-panduan"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Cari di Direktori Panduan</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Practical K3 Implementation Cycle */}
      <section className="section-container" aria-labelledby="cara-menerapkan-k3-heading">
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs uppercase mb-2">
            METODOLOGI SISTEMATIS
          </div>
          <h2 id="cara-menerapkan-k3-heading" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
            Cara Menerapkan K3 di Tempat Kerja
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
            Penerapan keselamatan kerja yang efektif di tempat kerja mengikuti tahapan perbaikan terstruktur yang menghubungkan identifikasi bahaya dengan tindakan nyata di lapangan:
          </p>

          <ol className="relative border-l border-slate-200 dark:border-slate-700 ml-3 sm:ml-4 space-y-6 sm:space-y-8">
            {/* Step 1 */}
            <li className="ml-6 sm:ml-8">
              <span className="absolute -left-3 sm:-left-4 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-black ring-4 ring-white dark:ring-slate-900">
                1
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Identifikasi Aktivitas Kerja dan Sumber Bahaya
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Petakan seluruh proses kerja, mesin, bahan kimia, dan lingkungan fasilitas untuk mendata potensi bahaya fisik, kimia, biologi, ergonomi, dan psikososial. Pelajari panduan praktis{' '}
                <Link href="/panduan/cara-menyusun-hiradc-lengkap" className="text-emerald-600 font-semibold hover:underline">
                  Cara Menyusun HIRADC Lengkap
                </Link>{' '}
                dan penyusunan{' '}
                <Link href="/panduan/cara-menyusun-job-safety-analysis-jsa" className="text-emerald-600 font-semibold hover:underline">
                  Job Safety Analysis (JSA)
                </Link>.
              </p>
            </li>

            {/* Step 2 */}
            <li className="ml-6 sm:ml-8">
              <span className="absolute -left-3 sm:-left-4 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-black ring-4 ring-white dark:ring-slate-900">
                2
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Penilaian Tingkat Risiko
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Evaluasi kemungkinan terjadinya insiden serta keparahan dampaknya terhadap pekerja dan fasilitas. Gunakan instrumen kalkulator{' '}
                <Link href="/alat/matriks-risiko" className="text-emerald-600 font-semibold hover:underline">
                  Matriks Risiko 5x5
                </Link>{' '}
                untuk menetapkan kategori risiko rendah, sedang, atau tinggi.
              </p>
            </li>

            {/* Step 3 */}
            <li className="ml-6 sm:ml-8">
              <span className="absolute -left-3 sm:-left-4 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-black ring-4 ring-white dark:ring-slate-900">
                3
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Penetapan Langkah Pengendalian (Hierarki Pengendalian)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Pilih metode pengendalian risiko dengan memprioritaskan Eliminasi bahaya, Substitusi dengan alternatif lebih aman, Rekayasa Teknik (engineering controls), Pengendalian Administratif (rotasi shift, rambu peringatan), hingga Alat Pelindung Diri (APD) sebagai benteng pertahanan terakhir.
              </p>
            </li>

            {/* Step 4 */}
            <li className="ml-6 sm:ml-8">
              <span className="absolute -left-3 sm:-left-4 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-black ring-4 ring-white dark:ring-slate-900">
                4
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Penyusunan Prosedur Kerja dan Pembagian Tanggung Jawab
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Dokumentasikan langkah kerja aman ke dalam Standar Operasional Prosedur (SOP), bentuk panitia P2K3, dan tunjuk personel yang kompeten sebagai penanggung jawab implementasi di masing-masing unit kerja.
              </p>
            </li>

            {/* Step 5 */}
            <li className="ml-6 sm:ml-8">
              <span className="absolute -left-3 sm:-left-4 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-black ring-4 ring-white dark:ring-slate-900">
                5
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Pelatihan dan Pembinaan Personel
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Tingkatkan kompetensi dan kesadaran keselamatan tim melalui program pelatihan yang sesuai dengan kualifikasi jabatan operasional, baik pembinaan lisensi Kemnaker RI maupun sertifikasi kompetensi BNSP.
              </p>
            </li>

            {/* Step 6 */}
            <li className="ml-6 sm:ml-8">
              <span className="absolute -left-3 sm:-left-4 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-black ring-4 ring-white dark:ring-slate-900">
                6
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Inspeksi, Pelaporan, dan Rencana Tanggap Darurat
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Lakukan inspeksi rutin fasilitas, siapkan kesiapan darurat mengikuti{' '}
                <Link href="/panduan/cara-menyusun-emergency-response-plan-erp" className="text-emerald-600 font-semibold hover:underline">
                  Emergency Response Plan (ERP)
                </Link>
                , serta lengkapi dokumen evaluasi berkala sesuai{' '}
                <Link href="/panduan/dokumen-wajib-audit-smk3-pp-50" className="text-emerald-600 font-semibold hover:underline">
                  Kriteria Audit SMK3 PP 50/2012
                </Link>.
              </p>
            </li>

            {/* Step 7 */}
            <li className="ml-6 sm:ml-8">
              <span className="absolute -left-3 sm:-left-4 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-black ring-4 ring-white dark:ring-slate-900">
                7
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Evaluasi dan Peningkatan Berkelanjutan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Kaji efektivitas langkah kendali secara periodik, lakukan investigasi jika terjadi kejadian nyaris celaka (near-miss), dan perbarui prosedur keselamatan saat ada perubahan mesin, tata letak, atau proses kerja.
              </p>
            </li>
          </ol>

          {/* Pre-Directory CTA Box */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Butuh Bantuan Menentukan Langkah Awal?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                Konsultasikan pemetaan risiko tempat kerja dan perumusan langkah awal penerapan K3 bersama tim kami.
              </p>
            </div>
            <a
              className="button button-accent button-medium whitespace-nowrap btn-glow"
              href={waIntentUrl('perusahaan', 'Langkah Awal Penerapan K3 Perusahaan')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Konsultasi Langkah Awal</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Editorial Guide Topics Inventory */}
      <section className="section-container" aria-labelledby="topik-panduan-heading">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
            KLASIFIKASI EDITORIAL
          </span>
          <h2 id="topik-panduan-heading" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1 mb-2">
            Jelajahi Panduan Berdasarkan Topik
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Berikut pengelompokan panduan praktis berdasarkan topik kebutuhan untuk mempermudah penelusuran (klasifikasi editorial untuk mempermudah eksplorasi, bukan taksonomi resmi pemerintah):
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Group 1: Dasar-dasar K3 */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-1.5">
                <span>📘</span> Dasar-dasar K3
              </h3>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/panduan/perbedaan-ahli-k3-kemnaker-vs-bnsp" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Perbedaan Kemnaker vs BNSP
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/tugas-ahli-k3-umum" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Tugas &amp; Fungsi Ahli K3 Umum
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/materi-ahli-k3-umum" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Materi Pembinaan AK3U 120 JP
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Group 2: Pelatihan, Syarat & Registrasi */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-1.5">
                <span>🎓</span> Pelatihan &amp; Syarat Pendaftaran
              </h3>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/panduan/syarat-ahli-k3-umum" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Syarat Ahli K3 Umum Kemnaker
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/cara-daftar-pelatihan-k3-online" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Cara Daftar Pelatihan Online
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/syarat-sertifikasi-bnsp-k3" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Syarat Sertifikasi BNSP K3
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Group 3: Biaya & Pemilihan Program */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-1.5">
                <span>💰</span> Biaya &amp; Pilihan Program
              </h3>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/panduan/biaya-pelatihan-k3" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Biaya Pelatihan K3 Nasional
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/biaya-pelatihan-auditor-smk3" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Biaya Pelatihan Auditor SMK3
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/biaya-sertifikasi-bnsp-safety-officer" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Biaya BNSP Safety Officer
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Group 4: Penilaian Risiko & Perencanaan Kerja */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-1.5">
                <span>📊</span> Manajemen &amp; Penilaian Risiko
              </h3>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/panduan/cara-menyusun-hiradc-lengkap" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Panduan Lengkap HIRADC
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/cara-menyusun-job-safety-analysis-jsa" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Cara Menyusun JSA Praktis
                  </Link>
                </li>
                <li>
                  <Link href="/alat/matriks-risiko" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Alat Matriks Risiko 5x5
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Group 5: Dokumen, Laporan & Audit SMK3 */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-1.5">
                <span>📁</span> Dokumen &amp; Audit SMK3
              </h3>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/panduan/dokumen-wajib-audit-smk3-pp-50" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Dokumen Wajib Audit SMK3 PP 50
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/cara-membuat-laporan-triwulan-p2k3" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Cara Buat Laporan Triwulan P2K3
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/tata-cara-audit-internal-smk3-tahunan" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Audit Internal SMK3 Tahunan
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Group 6: Tanggap Darurat & Kebakaran */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-1.5">
                <span>🚨</span> Tanggap Darurat &amp; Kebakaran
              </h3>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/panduan/cara-menyusun-emergency-response-plan-erp" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Penyusunan ERP Tanggap Darurat
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/cara-menghitung-kebutuhan-apar-gedung" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Hitung Kebutuhan APAR Gedung
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/cara-menyelenggarakan-fire-drill-gedung" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Penyelenggaraan Fire Drill
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Group 7: Inspeksi & Keselamatan Alat */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-1.5">
                <span>🔍</span> Inspeksi &amp; Kelaikan Alat
              </h3>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/panduan/cara-melakukan-inspeksi-visual-scaffolding" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Inspeksi Visual Scaffolding
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/cara-mengisi-buku-catatan-inspeksi-k3" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Buku Catatan Inspeksi K3
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/syarat-penerbitan-surat-keterangan-laik-k3-riksa-uji" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Suket Laik K3 (Riksa Uji)
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Group 8: SOP & Prosedur Teknis */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2 flex items-center gap-1.5">
                <span>⚙️</span> SOP &amp; Prosedur Teknis
              </h3>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/panduan/sop-lockout-tagout-loto-penguncian-penandaan-sakelar-utama-panel-distribusi-listrik" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    SOP Lockout Tagout (LOTO)
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/cara-mengelola-limbah-b3-sesuai-aturan" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Pengelolaan Limbah B3 Legal
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/cara-menyusun-prosedur-tanggap-darurat-tumpahan-kimia" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">
                    Prosedur Tumpahan Kimia
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Searchable Guide Directory */}
      <section id="direktori-panduan" className="section-container scroll-mt-20" aria-labelledby="direktori-heading">
        <div className="mb-6">
          <div className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs uppercase mb-1">
            KATALOG PANDUAN PRAKTIS
          </div>
          <h2 id="direktori-heading" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Cari Panduan K3
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            Cari berdasarkan pertanyaan, pekerjaan, dokumen, alat atau risiko—misalnya HIRADC, JSA, biaya, APAR, audit atau tanggap darurat.
          </p>
        </div>

        <HubSearchFilter
          items={items}
          isCourseSection={false}
          sectionLabel="Panduan K3"
          placeholder="Cari panduan—contoh: HIRADC, JSA, biaya, APAR, audit..."
        />
      </section>

      {/* 7. Post-Directory Lead Conversion */}
      <section className="section-container" aria-labelledby="bantuan-panduan-heading">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LAYANAN KONSULTASI AHLI</span>
            </div>
            <h2 id="bantuan-panduan-heading" className="text-2xl sm:text-3xl font-black text-white mb-2">
              Belum Menemukan Panduan yang Sesuai?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Sampaikan pertanyaan, jenis pekerjaan, industri, risiko atau program yang sedang dipertimbangkan. Tim kami akan membantu mengarahkan Anda ke informasi atau pilihan pelatihan yang paling relevan.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <a
                className="button button-accent button-large btn-glow"
                href={waIntentUrl('jadwal', 'Pertanyaan dari Direktori Panduan K3')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Tanya Kebutuhan K3 via WhatsApp</span>
                <span aria-hidden="true">→</span>
              </a>

              <Link
                href="/pelatihan"
                className="button button-outline-light button-large"
              >
                Lihat Program Pelatihan K3
              </Link>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span className="text-xs text-slate-400">
                Memerlukan evaluasi dokumen K3 atau pembinaan in-house untuk perusahaan?
              </span>
              <a
                href={waIntentUrl('perusahaan', 'Konsultasi Panduan K3 Perusahaan')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-400 hover:underline whitespace-nowrap"
              >
                Ajukan Konsultasi Perusahaan →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Statutory Compliance Box */}
      {legal && (
        <section className="section-container" style={{ padding: 0 }} aria-labelledby="legal-heading">
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="eyebrow text-emerald-600 dark:text-emerald-400 font-extrabold tracking-wider text-xs">
              {legal.badge}
            </span>
            <h2 id="legal-heading" className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1 mb-2">
              {legal.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {legal.summary}
            </p>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Rujukan Standar &amp; Regulasi Terkait:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {legal.references.map((ref, rIdx) => (
                  <li key={rIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">●</span>
                    <span>{ref}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* 9. Curated FAQ Section */}
      {faqs.length > 0 && (
        <section className="section-container" style={{ padding: 0 }}>
          <FaqAccordion items={faqs} title="Pertanyaan Umum Seputar Panduan K3" />
        </section>
      )}
    </div>
  );
}
