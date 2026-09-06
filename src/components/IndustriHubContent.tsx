import React from 'react';
import Link from 'next/link';
import {
  ClipboardList,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Building2,
  HardHat,
  Factory,
  Pickaxe,
  Fuel,
  Zap,
  Truck,
  HeartPulse,
  Building,
  GraduationCap,
  Users,
  HelpCircle,
} from 'lucide-react';
import { type ContentRecord } from '@/src/lib/content';
import { HubSearchFilter } from './HubSearchFilter';
import { FaqAccordion } from './FaqAccordion';
import { LandingPageHero } from './LandingPageHero';
import { sectionFaqs, sectionLegalInfo } from '@/src/lib/section-data';
import { waIntentUrl } from '@/src/lib/site';

export function IndustriHubContent({ items }: { items: ContentRecord[] }) {
  const faqs = sectionFaqs.industri || [];
  const legal = sectionLegalInfo.industri;

  return (
    <article className="industri-hub-article max-w-5xl mx-auto">
      {/* 1. LEAD-FOCUSED HERO */}
      <LandingPageHero
        breadcrumbs={[{ label: 'Beranda', href: '/' }, { label: 'Industri K3' }]}
        category="Solusi K3 Sektoral & Korporasi"
        title={
          <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-white tracking-tight leading-[1.25] mt-1.5 mb-2.5">
            K3 Berdasarkan Industri: Temukan Program yang Sesuai Risiko Perusahaan
          </h1>
        }
        description="Setiap sektor industri memiliki proses operasional, penggunaan mesin, karakteristik bahan kerja, dan potensi bahaya yang berbeda secara mendasar. Sebagai contoh, bahaya kritis pada proyek konstruksi berpusat pada pekerjaan di ketinggian dan alat berat, sedangkan pada industri kimia dan manufaktur berpusat pada zat berbahaya, energi mekanis, serta kebakaran instalasi. Oleh karena itu, penentuan program pelatihan keselamatan dan kesehatan kerja (K3) bagi karyawan perusahaan harus berangkat dari analisis kebutuhan risiko aktual di fasilitas kerja Anda, bukan sekadar memilih program secara acak dari katalog umum."
        badges={[`${items.length} Sektor Industri`, 'Analisis Bahaya Lapangan', 'In-House Training']}
        ctas={[
          {
            label: 'Minta Rekomendasi Program K3',
            href: waIntentUrl('perusahaan', 'Rekomendasi Program K3 Berdasarkan Industri'),
            variant: 'primary',
            isExternal: true,
            icon: <ClipboardList className="w-4 h-4" />,
          },
          {
            label: 'Lihat Program Pelatihan K3',
            href: '/pelatihan',
            variant: 'secondary',
            icon: <BookOpen className="w-4 h-4" />,
          },
        ]}
        subtext="Sampaikan sektor usaha, jumlah peserta, lokasi kerja, dan kebutuhan perusahaan Anda melalui WhatsApp untuk asistensi langsung."
      />

      {/* 2. QUICK COMPANY-NEEDS SELECTOR */}
      <section className="my-10">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          Apa Kebutuhan Perusahaan Anda?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-6">
          Pilih jalur konsultasi yang paling mencerminkan prioritas manajemen atau divisi HSE perusahaan Anda saat ini:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-emerald-500 transition-colors group">
            <div>
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Kepatuhan Regulasi</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Memenuhi Persyaratan K3</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Bantuan memetakan pembinaan yang relevan dengan pemenuhan kepatuhan operasional, persiapan audit SMK3, maupun regulasi penunjukan personil resmi K3 di perusahaan.
              </p>
            </div>
            <a
              href={waIntentUrl('perusahaan', 'Konsultasi Pemenuhan Persyaratan K3 Perusahaan')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1.5 group-hover:gap-2 transition-all"
            >
              <span>Konsultasi Kebutuhan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-emerald-500 transition-colors group">
            <div>
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Pengembangan SDM</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Meningkatkan Kompetensi Tim</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Identifikasi keahlian teknis lapangan, kemampuan inspeksi pengawas, atau kompetensi manajerial keselamatan kerja bagi tim internal di seluruh lini operasional.
              </p>
            </div>
            <Link
              href="/kompetensi"
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1.5 group-hover:gap-2 transition-all"
            >
              <span>Eksplorasi Kompetensi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-emerald-500 transition-colors group">
            <div>
              <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Pelatihan Khusus</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Menyiapkan In-House Training</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Diskusikan penyelenggaraan pembinaan khusus untuk rombongan karyawan langsung di site proyek atau fasilitas pabrik dengan kurikulum berbasis studi kasus aktual.
              </p>
            </div>
            <a
              href={waIntentUrl('perusahaan', 'Pengajuan In-House Training K3 Perusahaan')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1.5 group-hover:gap-2 transition-all"
            >
              <span>Ajukan In-House Training</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-emerald-500 transition-colors group">
            <div>
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <HelpCircle className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Bimbingan Awal</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Belum Tahu Program yang Tepat</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Konsultasikan profil industri, jenis peralatan yang digunakan, dan alur proses kerja Anda untuk memperoleh rekomendasi awal pilihan program yang paling efisien.
              </p>
            </div>
            <a
              href={waIntentUrl('perusahaan', 'Rekomendasi Awal Program K3 Perusahaan')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1.5 group-hover:gap-2 transition-all"
            >
              <span>Tanya via WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY GROUP NAVIGATION */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3">
          Pilih Sektor Industri
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6 text-sm sm:text-base">
          Untuk mempermudah penelusuran profil risiko dan program pembinaan, kami mengelompokkan industri ke dalam delapan sektor utama. Kelompok ini merupakan panduan navigasi editorial untuk mempermudah eksplorasi kebutuhan K3 di lapangan, bukan klasifikasi resmi pemerintah:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded bg-amber-50 text-amber-700"><HardHat className="w-4 h-4" /></span>
                <h3 className="text-sm font-bold text-slate-900">Konstruksi & Infrastruktur</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Proyek gedung bertingkat tinggi, jalan tol, jembatan bentang panjang, dan pekerjaan sipil dengan fokus pada keselamatan perancah, alat berat, dan SMKK.
              </p>
            </div>
            <Link href="/industri/proyek-konstruksi-gedung-pencakar-langit-high-rise-building" className="text-xs text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1">
              <span>Lihat profil konstruksi</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded bg-blue-50 text-blue-700"><Factory className="w-4 h-4" /></span>
                <h3 className="text-sm font-bold text-slate-900">Manufaktur & Pabrikasi</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Pabrik perakitan otomotif, baja, semen, dan tekstil dengan prioritas pada proteksi mesin, sistem isolasi LOTO, ergonomi lini perakitan, dan lingkungan kerja.
              </p>
            </div>
            <Link href="/industri/pabrik-manufaktur-perakitan-kendaraan-otomotif" className="text-xs text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1">
              <span>Lihat profil manufaktur</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded bg-slate-100 text-slate-700"><Pickaxe className="w-4 h-4" /></span>
                <h3 className="text-sm font-bold text-slate-900">Pertambangan & Mineral</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Pertambangan batubara terbuka, tambang mineral bawah tanah, serta fasilitas pabrik peleburan (smelter) nikel dan bauksit.
              </p>
            </div>
            <Link href="/industri/pertambangan-batubara-terbuka-open-cast-coal-mine" className="text-xs text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1">
              <span>Lihat profil pertambangan</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded bg-rose-50 text-rose-700"><Fuel className="w-4 h-4" /></span>
                <h3 className="text-sm font-bold text-slate-900">Minyak, Gas & Petrokimia</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Eksplorasi hulu migas, kilang pemurnian, jaringan transmisi gas bumi, dan pabrik petrokimia dengan risiko tinggi gas mudah terbakar dan bahan beracun.
              </p>
            </div>
            <Link href="/industri/eksplorasi-pengeboran-minyak-gas-hulu-upstream" className="text-xs text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1">
              <span>Lihat profil migas</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded bg-amber-50 text-amber-700"><Zap className="w-4 h-4" /></span>
                <h3 className="text-sm font-bold text-slate-900">Kelistrikan & Energi</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Pembangkit listrik (PLTU/PLTGU/PLTS), gardu induk transmisi tegangan tinggi, pemeliharaan panel daya industri, dan jaringan energi terbarukan.
              </p>
            </div>
            <Link href="/industri/pembangkit-listrik-tenaga-uap-pltu-batubara" className="text-xs text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1">
              <span>Lihat profil kelistrikan</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded bg-indigo-50 text-indigo-700"><Truck className="w-4 h-4" /></span>
                <h3 className="text-sm font-bold text-slate-900">Logistik & Transportasi</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Pusat distribusi logistik, pergudangan bertingkat (rack storage), operasional armada forklift, terminal peti kemas pelabuhan, dan pengiriman darat.
              </p>
            </div>
            <span className="text-xs text-slate-500 font-medium">Gudang, rack storage, & pelabuhan</span>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded bg-rose-50 text-rose-700"><HeartPulse className="w-4 h-4" /></span>
                <h3 className="text-sm font-bold text-slate-900">Kesehatan & Laboratorium</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Rumah sakit umum dan rujukan, klinik perusahaan, laboratorium kimia-biologi, serta fasilitas sterilisasi dan penanganan limbah medis B3.
              </p>
            </div>
            <span className="text-xs text-slate-500 font-medium">Bahaya biologis, radiasi, & kimia</span>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded bg-sky-50 text-sky-700"><Building className="w-4 h-4" /></span>
                <h3 className="text-sm font-bold text-slate-900">Gedung & Fasilitas Publik</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Gedung perkantoran bertingkat, pusat perbelanjaan (mall), hotel, apartemen, dan sarana publik dengan prioritas sistem proteksi kebakaran dan jalur evakuasi.
              </p>
            </div>
            <span className="text-xs text-slate-500 font-medium">Tanggap darurat & proteksi gedung</span>
          </div>
        </div>
      </section>

      {/* 4. RISK-TO-PROGRAM MAPPING */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
          Dari Risiko Operasional ke Kebutuhan Pelatihan
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
          Tabel pemetaan di bawah ini menunjukkan bagaimana situasi operasional spesifik dan bahaya dominan di lapangan dapat diselaraskan dengan program pembinaan K3 yang tepat untuk tim kerja Anda:
        </p>

        <div className="overflow-x-auto my-6 border border-slate-200 rounded-xl shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200">
              <tr>
                <th className="p-3 font-bold min-w-[140px]">Situasi Operasional</th>
                <th className="p-3 font-bold min-w-[180px]">Risiko Utama</th>
                <th className="p-3 font-bold min-w-[220px]">Kebutuhan K3 Relevan</th>
                <th className="p-3 font-bold min-w-[140px]">Langkah Selanjutnya</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-bold text-slate-900">Pekerjaan di Ketinggian</td>
                <td className="p-3">Jatuh dari elevasi tinggi, material jatuh menimpa pekerja di bawah, kegagalan perancah</td>
                <td className="p-3">Teknik perlindungan jatuh, inspeksi scaffolding, dan Tenaga Kerja Bangunan Tinggi (TKPK/TKBT)</td>
                <td className="p-3">
                  <Link href="/pelatihan/pelatihan-tenaga-kerja-pada-ketinggian-tingkat-1-tkpk-1-rope-access-kemnaker" className="text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1">
                    <span>Lihat Program Ketinggian</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-bold text-slate-900">Pesawat Angkat & Angkut</td>
                <td className="p-3">Crane roboh, sling putus saat pengangkatan, tabrakan forklift di lintasan gudang</td>
                <td className="p-3">Sertifikasi operator crane, operator forklift, serta teknik rigging dan pengikatan beban aman</td>
                <td className="p-3">
                  <Link href="/pelatihan/pelatihan-operator-overhead-crane-gantry-crane-kelas-i-ii-kemnaker" className="text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1">
                    <span>Lihat Program Alat Angkat</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-bold text-slate-900">Instalasi Kelistrikan</td>
                <td className="p-3">Sengatan arus listrik tegangan tinggi, ledakan busur api (arc flash), korsleting panel</td>
                <td className="p-3">Teknisi/Ahli K3 Listrik, prosedur isolasi Lockout-Tagout (LOTO), inspeksi panel berkala</td>
                <td className="p-3">
                  <Link href="/pelatihan/pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri" className="text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1">
                    <span>Lihat Program K3 Listrik</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-bold text-slate-900">Bahan Kimia Berbahaya (B3)</td>
                <td className="p-3">Keracunan uap beracun, luka bakar zat korosif, reaksi inkompatibilitas bahan kimia</td>
                <td className="p-3">Petugas/Ahli K3 Kimia, sistem pelabelan GHS, dan prosedur tanggap darurat tumpahan (spill response)</td>
                <td className="p-3">
                  <Link href="/pelatihan/pelatihan-petugas-k3-kimia-sertifikasi-resmi-kemnaker-ri" className="text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1">
                    <span>Lihat Program K3 Kimia</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-bold text-slate-900">Kebakaran & Kedaruratan</td>
                <td className="p-3">Kobaran api cepat meluas, kepanikan evakuasi massal, kegagalan fungsi hidran/APAR</td>
                <td className="p-3">Tim peran penanggulangan kebakaran (Kelas D/C/B/A), inspeksi hidran, simulasi evakuasi gedung</td>
                <td className="p-3">
                  <Link href="/pelatihan/pelatihan-manajemen-tanggap-darurat-kebakaran-emergency-response" className="text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1">
                    <span>Lihat Program Kebakaran</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-bold text-slate-900">Ruang Terbatas (Confined Space)</td>
                <td className="p-3">Asfiksia kekurangan oksigen, akumulasi gas beracun (H2S/CO), pekerja terjebak di tangki</td>
                <td className="p-3">Izin kerja masuk ruang terbatas, pengoperasian gas detector, dan prosedur penyelamatan darurat</td>
                <td className="p-3">
                  <Link href="/kompetensi" className="text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1">
                    <span>Eksplorasi Kompetensi Ruang Terbatas</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-bold text-slate-900">Kesehatan & Ergonomi Kerja</td>
                <td className="p-3">Penyakit akibat kerja (PAK), gangguan muskuloskeletal pada operator, kelelahan shift kerja</td>
                <td className="p-3">Pengukuran faktor fisika/kimia lingkungan kerja, surveilans ergonomi, pengelolaan P3K tempat kerja</td>
                <td className="p-3">
                  <Link href="/pelatihan/pengukuran-lingkungan-kerja" className="text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1">
                    <span>Lihat Lingkungan Kerja</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-bold text-slate-900">Pekerjaan Proyek & Kontraktor</td>
                <td className="p-3">Kelemahan koordinasi keselamatan multipihak, pelanggaran SOP oleh pekerja subkontraktor</td>
                <td className="p-3">Contractor Safety Management System (CSMS), Ahli K3 Konstruksi, audit kepatuhan lapangan</td>
                <td className="p-3">
                  <Link href="/pelatihan/pelatihan-ahli-k3-konstruksi-muda-madya-utama-sertifikasi-kemnaker-bnsp" className="text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1">
                    <span>Lihat K3 Konstruksi</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 italic">
          Program yang tepat bergantung pada aktivitas kerja, tingkat risiko, peran peserta, kebutuhan perusahaan, dan regulasi yang berlaku.
        </p>
      </section>

      {/* 5. HOW COMPANIES SHOULD CHOOSE & MID-PAGE CTA */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
          Cara Memilih Program K3 untuk Perusahaan
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
          Agar investasi pembinaan keselamatan kerja memberikan dampak nyata pada penurunan angka kecelakaan serta memenuhi audit kepatuhan, perusahaan disarankan menerapkan lima langkah seleksi berikut:
        </p>

        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 mb-6 space-y-4">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
            <div>
              <strong className="text-slate-900 text-sm">Identifikasi Aktivitas Kerja Nyata di Lapangan:</strong>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Petakan seluruh alur proses operasional, baik pekerjaan rutin harian seperti pemeliharaan pabrik maupun aktivitas non-rutin seperti perbaikan berkala tangki atau ereksi struktur.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
            <div>
              <strong className="text-slate-900 text-sm">Petakan Bahaya Dominan & Tugas Berisiko Tinggi:</strong>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Gunakan hasil identifikasi bahaya dan penilaian risiko (HIRADC) untuk menemukan titik-titik kritis yang berpotensi menimbulkan kerugian besar, insiden fatal, atau penghentian operasional.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
            <div>
              <strong className="text-slate-900 text-sm">Tentukan Kelompok Personel Calon Peserta:</strong>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Pisahkan kebutuhan materi pembinaan: pekerja pelaksana memerlukan keterampilan teknis proteksi, supervisor lapangan memerlukan kemampuan inspeksi dan JSA, sedangkan jajaran manajerial memerlukan pemahaman tata kelola SMK3.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">4</span>
            <div>
              <strong className="text-slate-900 text-sm">Pisahkan Kebutuhan Pelatihan, Sertifikasi, & Penunjukan Regulasi:</strong>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Pastikan sasaran akhir: apakah perusahaan hanya membutuhkan peningkatan wawasan (awareness), sertifikasi kompetensi kerja (BNSP), atau penunjukan kewenangan resmi melalui Surat Keputusan Penunjukan (SKP Kemnaker RI).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">5</span>
            <div>
              <strong className="text-slate-900 text-sm">Konfirmasi Metode Pelaksanaan, Peserta, & Target Jadwal:</strong>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Tentukan format penyelenggaraan yang paling efisien: In-House Training langsung di site untuk efisiensi tim rombongan, atau pengiriman peserta secara bertahap melalui kelas publik online terjadwal.
              </p>
            </div>
          </div>
        </div>

        {/* MID-PAGE CONVERSION CTA (BEFORE DIRECTORY) */}
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Ingin Memetakan Kebutuhan Pelatihan Perusahaan?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Diskusikan profil risiko industri dan kriteria pelatihan tim Anda bersama tim konsultan kami untuk rekomendasi paket program yang tepat sasaran.
            </p>
          </div>
          <a
            href={waIntentUrl('perusahaan', 'Pemetaan Kebutuhan Pelatihan K3 Perusahaan')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-extrabold text-xs sm:text-sm text-white transition-all shadow-sm inline-flex items-center gap-2 shrink-0"
          >
            <span>Diskusikan Kebutuhan Perusahaan</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 6. SEARCHABLE INDUSTRY DIRECTORY */}
      <section id="direktori-industri" className="my-12 scroll-mt-20">
        <div className="section-heading mb-6">
          <span className="eyebrow text-emerald-600 font-extrabold tracking-wider">
            KATALOG SEKTORAL KESELAMATAN KERJA
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Jelajahi Profil K3 Berdasarkan Industri
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Cari berdasarkan nama sektor industri, aktivitas operasional, jenis bahaya, atau lingkungan kerja untuk menemukan profil K3 yang relevan:
          </p>
        </div>

        {/* FULL SEARCHABLE FILTER GRID RENDERED EXACTLY ONCE */}
        <HubSearchFilter
          items={items}
          isCourseSection={false}
          sectionLabel="Industri K3"
          placeholder="Cari industri, aktivitas, atau risiko—contoh: konstruksi, tambang, pabrik, rumah sakit..."
        />
      </section>

      {/* 7. STRONG LEAD CONVERSION CTA AFTER DIRECTORY */}
      <section className="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md border border-slate-700">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>SOLUSI KORPORASI & IN-HOUSE TRAINING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug mb-3">
            Butuh Program K3 yang Disesuaikan dengan Risiko Perusahaan?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            Sampaikan sektor industri, aktivitas kerja, risiko utama, jumlah peserta, lokasi dan target pelaksanaan. Tim kami akan membantu menyiapkan pilihan program dan kebutuhan proposal.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={waIntentUrl('perusahaan', 'Program K3 Berdasarkan Industri')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-extrabold text-xs sm:text-sm text-white transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Ajukan Proposal In-House</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/jadwal"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 font-bold text-xs sm:text-sm text-white transition-all inline-flex items-center gap-2"
            >
              <span>Lihat Jadwal Program</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. LEGAL / REGULATORY SECTORAL SUMMARY */}
      {legal && (
        <section className="my-10 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
            {legal.badge}
          </span>
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            {legal.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
            {legal.summary}
          </p>
          <div className="text-xs text-slate-600">
            <strong className="text-slate-900 block mb-1">Rujukan Dokumen:</strong>
            <ul className="list-disc list-inside space-y-1">
              {legal.references.map((ref, idx) => (
                <li key={idx}>{ref}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      {faqs.length > 0 && (
        <section className="my-12">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Pertanyaan Umum K3 Berdasarkan Industri (FAQ)
          </h2>
          <FaqAccordion items={faqs} />
        </section>
      )}
    </article>
  );
}
