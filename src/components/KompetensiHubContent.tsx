'use client';

import React from 'react';
import Link from 'next/link';
import { type ContentRecord } from '@/src/lib/content';
import { HubSearchFilter } from './HubSearchFilter';
import { FaqAccordion } from './FaqAccordion';
import { sectionFaqs, sectionLegalInfo } from '@/src/lib/section-data';
import { waIntentUrl } from '@/src/lib/site';

export function KompetensiHubContent({ items }: { items: ContentRecord[] }) {
  const faqs = sectionFaqs.kompetensi || [];
  const legal = sectionLegalInfo.kompetensi;

  return (
    <article className="kompetensi-hub-article max-w-5xl mx-auto">
      {/* 1. HERO HEADER WITH SINGLE H1 */}
      <header className="hub-hero mb-8">
        <div className="eyebrow-pill">
          <span className="eyebrow-dot" />
          <span>STANDAR KEAHLIAN & KETERAMPILAN HSE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mt-3 mb-4">
          Kompetensi K3: Keahlian yang Dibutuhkan Praktisi Keselamatan Kerja
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          Kompetensi Keselamatan dan Kesehatan Kerja (K3) merupakan integrasi kemampuan nyata yang menggabungkan pemahaman regulasi dan ilmu keselamatan kerja (pengetahuan), kecakapan dalam mengoperasikan alat atau metode kerja aman (keterampilan teknis), serta konsistensi sikap kerja yang disiplin dalam mengidentifikasi bahaya, mengendalikan risiko, dan mencegah insiden di tempat kerja.
        </p>
      </header>

      {/* CLARIFICATION ON SCOPE AND DIVERSITY OF COMPETENCIES */}
      <div className="p-5 sm:p-6 my-6 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed shadow-sm">
        <strong className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
          Memahami Ruang Lingkup dan Keberagaman Kompetensi K3
        </strong>
        <p className="mb-3">
          Keahlian keselamatan kerja di dunia industri mencakup spektrum yang luas dan beragam, mulai dari keterampilan observasi lapangan harian hingga perumusan strategi manajemen risiko korporasi. Perlu dipahami secara jernih dan objektif bahwa setiap kompetensi yang terdaftar pada direktori ini memiliki karakteristik implementasi yang berbeda-beda:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-400">
          <li>
            <strong>Bukan seluruhnya skema sertifikasi terpisah:</strong> Banyak kompetensi merupakan keterampilan teknis terapan yang dipraktikkan langsung di lokasi kerja, dan bukan merupakan paket skema sertifikasi mandiri yang berdiri sendiri.
          </li>
          <li>
            <strong>Keterkaitan dengan standar kompetensi:</strong> Sebagian kemampuan dapat diselaraskan dengan unit Standar Kompetensi Kerja Nasional Indonesia (SKKNI), sementara keahlian lainnya berupa kepatuhan prosedur operasional spesifik pabrik atau proyek.
          </li>
          <li>
            <strong>Kebutuhan sertifikasi bervariasi:</strong> Tidak setiap kompetensi mewajibkan sertifikasi pihak ketiga atau menghasilkan lisensi kewenangan kementerian. Pengujian formal bergantung pada regulasi wajib maupun tuntutan operasional organisasi.
          </li>
          <li>
            <strong>Persyaratan dan evaluasi yang berbeda:</strong> Setiap keterampilan menuntut latar belakang pendidikan, jam pengalaman praktik, serta metode verifikasi yang berlainan sesuai tingkat kerumitan pekerjaan.
          </li>
        </ul>
      </div>

      {/* 2. FOUR DISTINCT CONCEPTS */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
          Perbedaan Antara Kompetensi, Pelatihan, Sertifikasi, dan Profesi
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
          Dalam perencanaan pengembangan SDM dan pengelolaan kepatuhan industri, seringkali terjadi kesalahpahaman dalam membedakan antara kemampuan kerja itu sendiri, program pelatihannya, proses asesmen sertifikasinya, dan jabatan resminya di perusahaan. Keempat istilah ini memiliki batasan praktis yang jelas:
        </p>

        <div className="overflow-x-auto my-6 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3.5 font-bold min-w-[150px]">Konsep</th>
                <th className="p-3.5 font-bold min-w-[240px]">Makna & Karakteristik</th>
                <th className="p-3.5 font-bold min-w-[220px]">Contoh Nyata di Tempat Kerja</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                  Kompetensi K3
                </td>
                <td className="p-3.5">
                  Kemampuan nyata dan teruji dalam melaksanakan tugas atau fungsi keselamatan tertentu secara konsisten sesuai standar kriteria kerja yang aman.
                </td>
                <td className="p-3.5">
                  Mampu mengukur konsentrasi gas mudah menyala dengan gas detector atau menyusun tabel pemeringkatan risiko kerja.
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                  Pelatihan K3
                </td>
                <td className="p-3.5">
                  Proses pembelajaran terstruktur untuk mentransfer wawasan regulasi, membedah teori, serta melatih keterampilan praktis peserta.
                </td>
                <td className="p-3.5">
                  Mengikuti pembinaan melalui <Link href="/pelatihan" className="text-emerald-600 font-semibold hover:underline">jalur pelatihan K3</Link> regulasi Kemnaker RI atau bimbingan teknis internal perusahaan.
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                  Sertifikasi Kompetensi
                </td>
                <td className="p-3.5">
                  Proses asesmen formal oleh lembaga pihak ketiga berwenang untuk memvalidasi bukti unjuk kerja dan menerbitkan pengakuan resmi atas kompetensi individu.
                </td>
                <td className="p-3.5">
                  Menjalani uji kompetensi portofolio dan wawancara; pelajari mekanismenya pada <Link href="/perbandingan/bnsp-vs-kemnaker" className="text-emerald-600 font-semibold hover:underline">perbandingan sertifikasi BNSP vs Kemnaker</Link>.
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                  Profesi atau Jabatan K3
                </td>
                <td className="p-3.5">
                  Peran atau posisi hierarkis dalam struktur organisasi perusahaan yang mengemban serangkaian tanggung jawab luas dan menuntut gabungan berbagai kompetensi kerja.
                </td>
                <td className="p-3.5">
                  Menjabat sebagai Safety Officer, Koordinator HSE, atau Auditor SMK3; telusuri pilihannya pada direktori <Link href="/profesi" className="text-emerald-600 font-semibold hover:underline">profesi atau jabatan K3</Link>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. EDITORIAL BROWSING THEMES (8 CATEGORIES) */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-3">
          Kelompok Keahlian Berdasarkan Kebutuhan Kerja
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
          Untuk membantu Anda menelusuri ratusan keahlian praktisi K3 secara sistematis, kami menyusun delapan tema navigasi editorial berikut. Pengelompokan ini dirancang berdasarkan fungsi kerja nyata di lapangan dan disajikan sebagai panduan eksplorasi, bukan sebagai taksonomi regulasi pemerintah yang kaku:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">1</span>
              Identifikasi Bahaya dan Penilaian Risiko
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Keahlian inti dalam mendeteksi sumber bahaya di lingkungan operasional, mengkalkulasi probabilitas insiden menggunakan <Link href="/alat/matriks-risiko" className="text-emerald-600 font-semibold hover:underline">Matriks Risiko K3</Link>, serta menyusun dokumen analisis keselamatan seperti <Link href="/kompetensi/identifikasi-bahaya-penilaian-risiko-hiradc" className="text-emerald-600 font-semibold hover:underline">penyusunan HIRADC</Link> dan Job Safety Analysis (JSA) sebelum pekerjaan dimulai.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">2</span>
              Investigasi Insiden dan Root-Cause Analysis
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Kecakapan merespons kejadian nearmiss dan kecelakaan kerja, mengamankan tempat kejadian perkara, mengumpulkan bukti fisik, mewawancarai saksi tanpa menyalahkan, serta membedah faktor penyebab dasar melalui teknik <Link href="/kompetensi/analisis-akar-masalah-kecelakaan-kerja-root-cause-analysis" className="text-emerald-600 font-semibold hover:underline">Root Cause Analysis (RCA)</Link> guna mencegah keterulangan insiden.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">3</span>
              Audit, Inspeksi dan Kepatuhan Regulasi
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Keterampilan melakukan inspeksi visual berkala di tempat kerja, menyusun daftar periksa kepatuhan, menilai kesesuaian terhadap peraturan perundangan ketenagakerjaan, serta melaksanakan audit internal sistem manajemen keselamatan mengacu pada 166 kriteria SMK3 PP 50/2012 maupun ISO 45001.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">4</span>
              Tanggap Darurat dan Proteksi Kebakaran
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Kesiapsiagaan menyusun rencana kontinjensi darurat fasilitas (ERP), melakukan pemeriksaan dan uji fungsi sarana proteksi kebakaran aktif seperti APAR dan jaringan hidran, memandu simulasi evakuasi darurat penghuni gedung, serta menangani situasi tumpahan bahan berbahaya secara terkendali.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">5</span>
              Kesehatan Kerja, Higiene Industri dan Ergonomi
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Pengukuran faktor fisika (kebisingan, getaran mekanis, iklim kerja) dan faktor kimia di lingkungan kerja, evaluasi faktor ergonomi postur kerja guna mencegah gangguan muskuloskeletal, surveilans kesehatan tenaga kerja, serta pengelolaan sarana dan kotak pertolongan pertama (P3K) di tempat kerja.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">6</span>
              Keselamatan Operasional, Alat Berat dan Pabrikasi
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Pengendalian bahaya mekanis melalui prosedur isolasi energi Lockout-Tagout (LOTO), teknik pengikatan muatan berat (rigging) yang aman, inspeksi kelaikan struktur perancah (scaffolding), serta pengawasan pengoperasian pesawat angkat dan angkut seperti crane dan forklift di area produksi.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">7</span>
              Manajemen K3, Komunikasi dan Pelatihan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Keahlian mengomunikasikan budaya keselamatan melalui Safety Induction bagi tamu dan pekerja baru, memandu Toolbox Meeting (TBM) sebelum shift kerja dimulai, mendukung administrasi komite P2K3, serta melakukan analisis kebutuhan pelatihan keselamatan kerja (Training Needs Analysis / TNA).
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-center font-bold">8</span>
              Analisis Risiko Spesialis dan Rekayasa Teknis
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Pengendalian bahaya spesifik berkategori kritis seperti pengujian atmosfer dan izin masuk ruang terbatas (confined space), pemeliharaan integritas bejana bertekanan dan ketel uap, pengelolaan risiko industri proses kimia, serta pemilihan sistem penahan jatuh pada pekerjaan di ketinggian.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PRACTICAL SELECTION GUIDE */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
          Panduan Memilih Kompetensi K3 yang Sesuai Kebutuhan
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
          Menentukan keahlian K3 yang tepat sebaiknya selalu berakar pada kebutuhan tugas nyata di lapangan, karakteristik bahaya industri, dan kewajiban dokumen yang harus dihasilkan, bukan semata-mata mengumpulkan dokumen sertifikat. Gunakan alur pertimbangan berikut dalam merencanakan pembelajaran Anda:
        </p>

        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 mb-6 space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            Alur Penentuan Kebutuhan Keahlian (Decision Path)
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-emerald-600 min-w-[24px]">1.</span>
              <div>
                <strong>Perlu mengenali dan memetakan potensi risiko pekerjaan:</strong> Mulailah dari kompetensi identifikasi bahaya, penilaian matriks risiko, dan penyusunan dokumen keselamatan kerja dasar (HIRADC dan JSA) untuk memastikan seluruh aktivitas kerja memiliki batas kendali yang jelas.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-emerald-600 min-w-[24px]">2.</span>
              <div>
                <strong>Ditugaskan menyelidiki insiden atau kondisi berbahaya:</strong> Pelajari teknik pengumpulan fakta lapangan, dokumentasi bukti fisik, wawancara saksi tanpa tendensi menyalahkan, serta metodologi analisis akar masalah (RCA) untuk menghasilkan rekomendasi tindakan korektif yang tepat.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-emerald-600 min-w-[24px]">3.</span>
              <div>
                <strong>Mempersiapkan evaluasi kepatuhan fasilitas atau vendor:</strong> Prioritaskan keahlian inspeksi terencana, audit kepatuhan regulasi terhadap peraturan perundangan ketenagakerjaan, serta verifikasi kriteria keselamatan sistem manajemen kontraktor (CSMS).
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-emerald-600 min-w-[24px]">4.</span>
              <div>
                <strong>Menyiapkan mitigasi keadaan darurat fasilitas:</strong> Fokuskan pembelajaran pada penyusunan rencana kontinjensi darurat, tata kelola tim peran kebakaran, inspeksi kesiapan APAR dan hidran, serta pemanduan rute evakuasi yang aman bagi seluruh pekerja.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-emerald-600 min-w-[24px]">5.</span>
              <div>
                <strong>Memerlukan pengakuan formal untuk kualifikasi tender atau regulasi:</strong> Pastikan terlebih dahulu skema sertifikasi yang berlaku, badan sertifikasi yang berwenang, dan portofolio bukti kerja yang dipersyaratkan sebelum mendaftarkan diri pada proses asesmen formal.
              </div>
            </li>
          </ul>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed">
          Penting diperhatikan: Mengikuti satu sesi pelatihan atau menguasai satu keterampilan spesifik tidak serta-merta melayakkan seseorang untuk mengemban seluruh tanggung jawab manajerial K3. Kompetensi profesional yang matang dibangun melalui akumulasi keahlian, jam terbang penanganan bahaya nyata di lapangan, serta pemenuhan legalitas penunjukan sesuai ketentuan regulasi.
        </p>
      </section>

      {/* 5. EDITORIAL LEARNING PROGRESSION */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-3">
          Tahapan Pengembangan Keahlian (Progresi Belajar)
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
          Penguasaan keahlian keselamatan kerja berkembang secara berkelanjutan seiring dengan bertambahnya pengalaman lapangan dan kompleksitas risiko industri. Berikut adalah gambaran progresi belajar yang umum dialami oleh praktisi K3:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 my-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Tahap 1</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">Pemahaman Dasar</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Memahami terminologi bahaya vs risiko, hierarki pengendalian dasar, kepatuhan pemakaian APD, dan tata tertib keselamatan kerja umum di area operasional.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Tahap 2</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">Penerapan Lapangan</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Menerapkan prosedur inspeksi rutin, memeriksa izin kerja berisiko tinggi (permit to work), memandu safety induction pekerja baru, dan mencatat temuan bahaya harian.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Tahap 3</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">Analisis & Evaluasi</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Menyusun dokumen HIRADC dan JSA komprehensif, membedah faktor penyebab dasar insiden melalui teknik RCA, serta mengevaluasi efektivitas tindakan mitigasi bahaya.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Tahap 4</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">Koordinasi & Supervisi</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Mengoordinasikan tim keselamatan kerja, memfasilitasi program komite P2K3, memimpin audit internal Sistem Manajemen K3, serta mengawasi kinerja kontraktor di site.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Tahap 5</span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">Keahlian Spesialis</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Menguasai keahlian rekayasa teknis tingkat tinggi (proses industri kimia, proteksi listrik kompleks, ruang terbatas) dan merumuskan kebijakan strategis K3 korporasi.
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
          Uraian tahapan ini merupakan panduan editorial untuk membantu Anda memetakan prioritas belajar mandiri, dan bukan merupakan kerangka kualifikasi formal, jenjang sertifikasi baku, atau penjenjangan gaji resmi pemerintah.
        </p>
      </section>

      {/* 5. LEGAL / REFERENCE FRAMEWORK BOX */}
      {legal && (
        <section className="my-10 p-5 sm:p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block mb-1">
            {legal.badge}
          </span>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            {legal.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
            {legal.summary}
          </p>
          <div className="text-xs text-slate-600 dark:text-slate-400">
            <strong className="text-slate-900 dark:text-white block mb-1">Rujukan Dokumen:</strong>
            <ul className="list-disc list-inside space-y-1">
              {legal.references.map((ref, idx) => (
                <li key={idx}>{ref}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 6. SEARCHABLE DIRECTORY */}
      <section id="direktori-kompetensi" className="my-12 scroll-mt-20">
        <div className="section-heading mb-6">
          <span className="eyebrow text-emerald-600 font-extrabold tracking-wider">
            KATALOG KEAHLIAN & KETERAMPILAN HSE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
            Jelajahi Direktori Kompetensi K3
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Gunakan kolom pencarian interaktif di bawah untuk menemukan topik keahlian berdasarkan nama tugas kerja, potensi bahaya, metode analisis, atau bentuk dokumen keselamatan yang ingin Anda kuasai. Direktori ini menyajikan eksplorasi keahlian praktisi keselamatan kerja secara terbuka:
          </p>
        </div>

        {/* FULL SEARCHABLE FILTER GRID RENDERED EXACTLY ONCE */}
        <HubSearchFilter items={items} isCourseSection={true} sectionLabel="Kompetensi K3" />
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      {faqs.length > 0 && (
        <section className="my-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-6">
            Pertanyaan Umum Seputar Kompetensi K3 (FAQ)
          </h2>
          <FaqAccordion items={faqs} />
        </section>
      )}

      {/* 8. FACTUAL CONSULTATION CTA */}
      <section className="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md border border-slate-700">
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold tracking-wider uppercase text-emerald-400 block mb-2">
            KONSULTASI PENGEMBANGAN KEAHLIAN K3
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug mb-3">
            Membutuhkan Bimbingan Pemilihan Jalur Kompetensi K3?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            Konsultasikan kebutuhan peningkatan keterampilan tim Anda, pemetaan kompetensi kepatuhan proyek, serta jadwal pembinaan terdekat bersama tim konsultan PT Kreasi Ultimate Berjaya. Kami siap membantu menganalisis kesesuaian materi pembinaan dengan kebutuhan nyata operasional perusahaan Anda.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={waIntentUrl('syarat', 'Konsultasi Kompetensi K3')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-extrabold text-xs sm:text-sm text-white transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Konsultasi Pemilihan Kompetensi via WhatsApp</span>
              <span aria-hidden="true">→</span>
            </a>
            <Link
              href="/jadwal"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 font-bold text-xs sm:text-sm text-white transition-all inline-flex items-center gap-2"
            >
              <span>Lihat Jadwal Pembinaan Terdekat</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
