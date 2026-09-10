import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroCta, TrustStrip, LiveBatchHeroCard, InHouseCtaBox, PathwaySelector } from '@/src/components/ConversionCta';
import { ClientLogoStrip } from '@/src/components/ClientLogoStrip';
import { ProgramCard, CategoryCard } from '@/src/components/ProgramCard';
import { FaqAccordion } from '@/src/components/FaqAccordion';
import { TestimonialsReviewStrip } from '@/src/components/TestimonialsReviewStrip';
import { CompanyTrustCard } from '@/src/components/CompanyTrustCard';
import { JsonLd } from '@/src/components/JsonLd';
import { ScrollReveal, StatCounter, InteractiveProgramNavigator, VisualPhotoSlot } from '@/src/components/InteractiveUi';
import { site, waIntentUrl } from '@/src/lib/site';
import {
  Building2,
  Flame,
  Zap,
  ShieldAlert,
  FlaskConical,
  HardHat,
  FileCheck,
  ShieldCheck,
  Building,
  Scale,
  Clock,
  GraduationCap,
  MapPin,
  Globe,
  Star,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pelatihan K3 Indonesia & Sertifikasi Ahli K3 | PT Kreasi Ultimate Berjaya',
  description: 'Pusat informasi resmi dan konsultasi pendaftaran Pelatihan K3 Indonesia: Ahli K3 Umum (Kemnaker RI 120 JP), Auditor SMK3, Petugas P3K, K3 Kebakaran, K3 Listrik, skema BNSP, dan In-House Training perusahaan bersama PT Kreasi Ultimate Berjaya.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Pelatihan K3 Indonesia & Sertifikasi Ahli K3 | PT Kreasi Ultimate Berjaya',
    description: 'Pusat informasi resmi dan konsultasi pendaftaran Pelatihan K3 Indonesia: Ahli K3 Umum (Kemnaker RI 120 JP), sertifikasi BNSP, dan In-House Training K3 perusahaan.',
    url: site.url,
    siteName: site.name,
    locale: 'id_ID',
    type: 'website',
  },
};

const navigatorCategories = [
  {
    id: 'kelembagaan',
    title: 'Kelembagaan & SMK3',
    tag: 'REGULASI WAJIB KEMNAKER',
    icon: <Building2 className="w-5 h-5 text-emerald-400" aria-hidden="true" />,
    description: 'Program pembinaan wajib pemenuhan regulasi kelembagaan K3, sekretaris P2K3, dan implementasi audit SMK3 PP 50/2012.',
    programs: [
      {
        name: 'Pelatihan Ahli K3 Umum (Kemnaker RI)',
        href: '/pelatihan/ahli-k3-umum',
        duration: '120 JP (12 Hari)',
        level: 'Kemnaker RI',
        desc: 'Pembinaan 120 JP resmi calon Sekretaris P2K3 dan pengawas norma keselamatan kerja perusahaan.',
      },
      {
        name: 'Pelatihan Auditor SMK3 (PP 50/2012)',
        href: '/pelatihan/auditor-smk3',
        duration: '40 JP (5 Hari)',
        level: 'Kemnaker RI',
        desc: 'Sertifikasi audit pemenuhan 166 kriteria Sistem Manajemen Keselamatan dan Kesehatan Kerja.',
      },
      {
        name: 'Pembinaan Tata Kelola P2K3 Perusahaan',
        href: '/pelatihan/pembinaan-p2k3',
        duration: '24 JP (2 Hari)',
        level: 'Teknis Terapan',
        desc: 'Penguatan fungsi tata kelola dan pelaporan triwulan P2K3 ke Dinas Tenaga Kerja setempat.',
      },
    ],
  },
  {
    id: 'darurat',
    title: 'Kebakaran & Tanggap Darurat',
    tag: 'PROTEKSI & MEDIS DARURAT',
    icon: <Flame className="w-5 h-5 text-amber-400" aria-hidden="true" />,
    description: 'Sertifikasi regu penanggulangan kebakaran kelas D/C/B/A serta petugas pertolongan pertama pada kecelakaan kerja (P3K).',
    programs: [
      {
        name: 'Petugas P3K di Tempat Kerja (Lisensi Kemnaker)',
        href: '/pelatihan/pelatihan-petugas-p3k-di-tempat-kerja-lisensi-resmi-kemnaker-ri-30-jp',
        duration: '30 JP (3 Hari)',
        level: 'Kemnaker RI',
        desc: 'Pemenuhan rasio wajib petugas P3K, penanganan trauma darurat medis, dan praktik resusitasi RJP.',
      },
      {
        name: 'Petugas Peran Kebakaran Kelas D',
        href: '/pelatihan/k3-kebakaran-kelas-d',
        duration: '25 JP (3 Hari)',
        level: 'Kemnaker RI',
        desc: 'Pembinaan tingkat dasar unit pemadam api awal, pengoperasian APAR, dan evakuasi darurat gedung.',
      },
      {
        name: 'Koordinator Kebakaran Kelas B Kemnaker',
        href: '/pelatihan/k3-kebakaran-kelas-b',
        duration: '60 JP (6 Hari)',
        level: 'Kemnaker RI',
        desc: 'Manajemen proteksi kebakaran aktif/pasif gedung dan komando insiden darurat perusahaan.',
      },
    ],
  },
  {
    id: 'teknis',
    title: 'Listrik, Ketinggian & Ruang Terbatas',
    tag: 'SPESIALISASI TEKNIS TINGGI',
    icon: <Zap className="w-5 h-5 text-yellow-400" aria-hidden="true" />,
    description: 'Pelatihan mitigasi risiko tinggi teknis kelistrikan, pencegahan jatuh di ketinggian (TKPK/TKBT), dan ruang terbatas (confined space).',
    programs: [
      {
        name: 'Teknisi K3 Listrik Sertifikasi Kemnaker',
        href: '/pelatihan/pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri',
        duration: '30 JP (4 Hari)',
        level: 'Permenaker 12/2015',
        desc: 'Inspeksi keselamatan instalasi listrik industri, proteksi petir, dan prosedur Lockout-Tagout (LOTO).',
      },
      {
        name: 'Ahli K3 Spesialis Listrik Kemnaker RI',
        href: '/pelatihan/pelatihan-ahli-k3-spesialis-listrik-kemnaker-ri',
        duration: '120 JP (12 Hari)',
        level: 'Kemnaker RI',
        desc: 'Pengawasan sistem instalasi gardu distribusi, audit PUIL 2020, dan proteksi bahaya Arc Flash.',
      },
      {
        name: 'Tenaga Kerja Bangunan Tinggi (TKBT 1)',
        href: '/pelatihan/pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-1-tkbt-1-kemnaker-ri',
        duration: '3 Hari',
        level: 'Permenaker 09/2016',
        desc: 'Keselamatan bekerja pada platform tetap, APD full body harness, dan sistem penahan jatuh (fall arrest).',
      },
      {
        name: 'Petugas K3 Madya Ruang Terbatas (Standby Person)',
        href: '/pelatihan/pelatihan-petugas-k3-madya-ruang-terbatas-confined-space-kemnaker',
        duration: '3 Hari',
        level: 'SK Dirjen Binwasnaker',
        desc: 'Pengawasan izin kerja permit-to-work, komunikasi darurat, dan evakuasi non-entry ruang sempit.',
      },
    ],
  },
  {
    id: 'angkut',
    title: 'Pesawat Angkat-Angkut & Uap',
    tag: 'ALAT BERAT & BOILER PABRIK',
    icon: <HardHat className="w-5 h-5 text-orange-400" aria-hidden="true" />,
    description: 'Sertifikasi lisensi SIO Kemnaker RI untuk operator alat angkat angkut industri dan ketel uap pabrik.',
    programs: [
      {
        name: 'Operator Forklift Kelas I & II Kemnaker',
        href: '/pelatihan/pelatihan-operator-forklift-kelas-i-kelas-ii-sertifikasi-kemnaker',
        duration: '30 JP (3 Hari)',
        level: 'Permenaker 08/2020',
        desc: 'Pengoperasian forklift aman, batas beban SWL, segitiga stabilitas, dan penerbitan SIO resmi.',
      },
      {
        name: 'Operator Overhead Crane & Gantry Crane',
        href: '/pelatihan/pelatihan-operator-overhead-crane-gantry-crane-kelas-i-ii-kemnaker',
        duration: '4 Hari',
        level: 'Permenaker 08/2020',
        desc: 'Pengoperasian hoist crane pabrik, inspeksi runway girder, dan uji kompetensi operator.',
      },
      {
        name: 'Juru Ikat Beban (Rigger) Bersertifikat',
        href: '/pelatihan/pelatihan-juru-ikat-beban-rigger-slinger-bersertifikat-kemnaker',
        duration: '3 Hari',
        level: 'Permenaker 08/2020',
        desc: 'Teknik pengikatan beban rigging, kalkulasi sling tension, aba-aba sinyal, dan keselamatan angkat.',
      },
      {
        name: 'Operator Boiler Ketel Uap Kelas I & II',
        href: '/pelatihan/pelatihan-operator-boiler-ketel-uap-kelas-i-ii-lisensi-kemnaker',
        duration: '5 Hari',
        level: 'Permenaker 37/2016',
        desc: 'Pengoperasian ketel uap industri, pengelolaan air umpan boiler, dan lisensi operator boiler resmi.',
      },
    ],
  },
  {
    id: 'sektoral',
    title: 'Kimia, Konstruksi & Hiperkes',
    tag: 'SEKTORAL & KESEHATAN KERJA',
    icon: <FlaskConical className="w-5 h-5 text-purple-400" aria-hidden="true" />,
    description: 'Pembinaan keahlian khusus pengendalian bahaya kimia industri, keselamatan konstruksi proyek, dan hiperkes medis.',
    programs: [
      {
        name: 'Ahli K3 Kimia Sertifikasi Resmi Kemnaker RI',
        href: '/pelatihan/pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri',
        duration: '120 JP (12 Hari)',
        level: 'Kepmenaker 187/1999',
        desc: 'Penyusunan dokumen pengendalian potensi bahaya besar kimia dan mitigasi risiko bahan B3 pabrik.',
      },
      {
        name: 'Ahli K3 Konstruksi (Muda/Madya/Utama)',
        href: '/pelatihan/pelatihan-ahli-k3-konstruksi-muda-madya-utama-sertifikasi-kemnaker-bnsp',
        duration: '12 Hari',
        level: 'Permenaker 01/1980',
        desc: 'Pengawasan keselamatan proyek gedung dan infrastruktur serta penyusunan Rencana Keselamatan Konstruksi (RKK).',
      },
      {
        name: 'Dokter Perusahaan Sertifikasi Hiperkes',
        href: '/pelatihan/pelatihan-dokter-perusahaan-sertifikasi-hiperkes-kemnaker-ri',
        duration: '10 Hari',
        level: 'Permenaker 01/1976',
        desc: 'Surveilans kesehatan kerja okupasi, penegakan diagnosis penyakit akibat kerja (PAK), dan kelaikan kerja fit-to-work.',
      },
      {
        name: 'Paramedis Perusahaan Sertifikasi Hiperkes',
        href: '/pelatihan/pelatihan-paramedis-perusahaan-sertifikasi-hiperkes-kemnaker-ri',
        duration: '6 Hari',
        level: 'Permenaker 01/1979',
        desc: 'Pengelolaan klinik perusahaan, pertolongan gawat darurat medis industri, dan keperawatan kesehatan kerja.',
      },
    ],
  },
];

const k3Categories = [
  {
    icon: <Building2 className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    title: 'Kelembagaan & SMK3',
    desc: 'Pembinaan kepatuhan regulasi wajib, Sekretaris P2K3, dan audit SMK3 PP 50/2012.',
    href: '/pelatihan/ahli-k3-umum',
    count: 'Flagship 120 JP',
  },
  {
    icon: <Flame className="w-6 h-6 text-amber-600" aria-hidden="true" />,
    title: 'Kebakaran & Darurat',
    desc: 'Unit penanggulangan kebakaran Kelas D/C/B/A, Petugas P3K, dan tim tanggap darurat.',
    href: '/pelatihan/k3-kebakaran-kelas-d',
    count: 'Regulasi Kemnaker',
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-600" aria-hidden="true" />,
    title: 'Listrik & Energi',
    desc: 'Teknisi dan Ahli K3 Listrik, inspeksi instalasi, proteksi petir, dan prosedur LOTO.',
    href: '/pelatihan/pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri',
    count: 'Permenaker 12/2015',
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-blue-600" aria-hidden="true" />,
    title: 'Ketinggian & Konstruksi',
    desc: 'Bekerja di ketinggian TKBT/TKPK, akses tali rope access, dan perancah scaffolding.',
    href: '/pelatihan/pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-1-tkbt-1-kemnaker-ri',
    count: 'Permenaker 09/2016',
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-purple-600" aria-hidden="true" />,
    title: 'Higiene & Kimia',
    desc: 'Pengendalian bahan kimia berbahaya B3, Ahli K3 Kimia, dan pemantauan lingkungan industri.',
    href: '/pelatihan/pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri',
    count: 'Lingkungan Industri',
  },
  {
    icon: <HardHat className="w-6 h-6 text-orange-600" aria-hidden="true" />,
    title: 'Pesawat Angkat & Angkut',
    desc: 'Operator Forklift, Mobile Crane, Rigger, dan inspeksi alat berat operasional.',
    href: '/pelatihan/pelatihan-operator-forklift-kelas-i-kelas-ii-sertifikasi-kemnaker',
    count: 'SIA & SIO Lisensi',
  },
];

const popularPrograms = [
  {
    tag: 'FLAGSHIP UTAMA',
    title: 'Pelatihan Ahli K3 Umum (Kemnaker RI)',
    desc: 'Pembinaan calon Ahli K3 Umum 120 JP resmi Kemnaker RI untuk memenuhi kewajiban hukum pengurus P2K3 dan pengawasan norma K3 perusahaan.',
    href: '/pelatihan/ahli-k3-umum',
    points: ['Sertifikasi Resmi Kemnaker RI (Sertifikat + SKP + Lisensi)', 'Durasi 120 Jam Pelajaran (±12 Hari Kerja)', 'Syarat Minimal D3/S1 Semua Jurusan'],
    highlight: true,
    image: {
      src: '/images/content/instruktur-memandu-sesi-kelas-1.webp',
      alt: 'Pembinaan Calon Ahli K3 Umum Kemnaker RI',
    },
    issuer: 'Kemnaker RI',
    price: { startingFrom: 'Rp 6.000.000', label: 'Investasi Mulai' },
    meta: { duration: '120 JP / 12 Hari' },
  },
  {
    tag: 'SISTEM MANAJEMEN',
    title: 'Pelatihan Auditor SMK3 (PP 50/2012)',
    desc: 'Program pembinaan untuk mengaudit pemenuhan 166 kriteria Sistem Manajemen K3 di lingkungan perusahaan sesuai ketentuan PP 50/2012.',
    href: '/pelatihan/auditor-smk3',
    points: ['Sertifikasi Auditor Kemnaker RI', 'Khusus Pemegang Sertifikat Ahli K3', 'Kesiapan Menghadapi Audit Eksternal SMK3'],
    highlight: false,
    image: {
      src: '/images/content/asesmen-individu-dengan-pengisian-dokumen-1.webp',
      alt: 'Auditor SMK3 PP 50/2012',
    },
    issuer: 'Kemnaker RI',
    price: { startingFrom: 'Rp 5.000.000', label: 'Investasi Mulai' },
    meta: { duration: '40 JP / 5 Hari' },
  },
  {
    tag: 'TANGGAP DARURAT MEDIS',
    title: 'Petugas P3K di Tempat Kerja',
    desc: 'Pelatihan pertolongan pertama pada kecelakaan kerja untuk memenuhi rasio wajib petugas P3K perusahaan sesuai Permenaker 15/2008.',
    href: '/pelatihan/pelatihan-petugas-p3k-di-tempat-kerja-lisensi-resmi-kemnaker-ri-30-jp',
    points: ['Sertifikasi Lisensi Petugas P3K Kemnaker RI', 'Praktik Resusitasi Jantung Paru (RJP) & Balut Bidai', 'Terbuka untuk Karyawan Lintas Departemen'],
    highlight: false,
    image: {
      src: '/images/content/peserta-mengikuti-sesi-di-ruang-kelas-1.webp',
      alt: 'Petugas P3K di Tempat Kerja Kemnaker RI',
    },
    issuer: 'Kemnaker RI',
    price: { startingFrom: 'Rp 4.500.000', label: 'Investasi Mulai' },
    meta: { duration: '30 JP / 3 Hari' },
  },
  {
    tag: 'PROTEKSI KEBAKARAN',
    title: 'Petugas Peran Kebakaran (Kelas D Kemnaker)',
    desc: 'Pembinaan unit tanggap darurat api dasar dan penanggung jawab kebakaran di tempat kerja sesuai Kepmenaker 186/1999.',
    href: '/pelatihan/k3-kebakaran-kelas-d',
    points: ['Kepmenaker No. KEP.186/MEN/1999', 'Teori Segitiga Api & Praktik APAR/Hydrant', 'Sertifikasi Lisensi Pemadam Api Dasar'],
    highlight: false,
    image: {
      src: '/images/content/peserta-mengerjakan-ujian-tertulis-di-kelas-1.webp',
      alt: 'Petugas Peran Kebakaran Kelas D',
    },
    issuer: 'Kemnaker RI',
    price: { startingFrom: 'Rp 4.250.000', label: 'Investasi Mulai' },
    meta: { duration: '25 JP / 3 Hari' },
  },
  {
    tag: 'INSTALASI & KELISTRIKAN',
    title: 'Pelatihan Teknisi K3 Listrik Kemnaker',
    desc: 'Keahlian keselamatan instalasi, pemeliharaan, inspeksi, dan mitigasi bahaya sengatan listrik serta busur api (arc flash).',
    href: '/pelatihan/pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri',
    points: ['Permenaker 12/2015 & SNI 0225:2020 PUIL', 'Pengukuran Tahanan Pembumian Grounding', 'Inspeksi & Prosedur Lockout Tagout (LOTO)'],
    highlight: false,
    image: {
      src: '/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp',
      alt: 'K3 Teknisi Listrik Industri',
    },
    issuer: 'Kemnaker RI',
    price: { startingFrom: 'Rp 7.000.000', label: 'Investasi Mulai' },
    meta: { duration: '30 JP / 4 Hari' },
  },
  {
    tag: 'BEKERJA DI KETINGGIAN',
    title: 'Tenaga Kerja Bangunan Tinggi (TKBT 1)',
    desc: 'Pelatihan teknis keselamatan bekerja di ketinggian platform tetap berlandaskan regulasi resmi Permenaker 09/2016.',
    href: '/pelatihan/pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-1-tkbt-1-kemnaker-ri',
    points: ['Sistem Proteksi Jatuh & Angkur Standar', 'Penggunaan Full Body Harness & Lanyard', 'Lisensi Kerja Ketinggian Resmi Kemnaker RI'],
    highlight: false,
    image: {
      src: '/images/content/praktik-pengangkatan-beban-dengan-crane-1.webp',
      alt: 'TKBT 1 Ketinggian Platform Tetap',
    },
    issuer: 'Kemnaker RI',
    price: { startingFrom: 'Rp 4.500.000', label: 'Investasi Mulai' },
    meta: { duration: '3 Hari' },
  },
  {
    tag: 'PESAWAT ANGKAT & ANGKUT',
    title: 'Operator Forklift Kelas I & II Kemnaker',
    desc: 'Sertifikasi lisensi SIO Kemnaker RI untuk operator forklift industri, penanganan segitiga stabilitas, dan manuver lorong sempit.',
    href: '/pelatihan/pelatihan-operator-forklift-kelas-i-kelas-ii-sertifikasi-kemnaker',
    points: ['Permenaker No. 08 Tahun 2020', 'Segitiga Stabilitas & Batas Beban Aman (SWL)', 'Penerbitan SIO Operator Resmi Kemnaker RI'],
    highlight: false,
    image: {
      src: '/images/content/instruktur-memandu-sesi-kelas-2.webp',
      alt: 'Operator Forklift Industri Kemnaker',
    },
    issuer: 'Kemnaker RI',
    price: { startingFrom: 'Rp 4.250.000', label: 'Investasi Mulai' },
    meta: { duration: '30 JP / 3 Hari' },
  },
  {
    tag: 'KONSTRUKSI BANGUNAN',
    title: 'Ahli K3 Konstruksi (Muda / Madya / Utama)',
    desc: 'Pembinaan pengawasan keselamatan konstruksi proyek infrastruktur dan gedung serta penyusunan Rencana Keselamatan Konstruksi (RKK).',
    href: '/pelatihan/pelatihan-ahli-k3-konstruksi-muda-madya-utama-sertifikasi-kemnaker-bnsp',
    points: ['Permenaker 01/1980 & Permen PUPR 10/2021', 'Penyusunan Dokumen RKK & IBPRP Proyek', 'Sertifikasi Ahli K3 Konstruksi Bangunan'],
    highlight: false,
    image: {
      src: '/images/content/inspeksi-lapangan-oleh-ahli-k3-1.webp',
      alt: 'Ahli K3 Konstruksi Proyek',
    },
    issuer: 'Kemnaker & BNSP',
    price: { startingFrom: 'Rp 10.500.000', label: 'Investasi Mulai' },
    meta: { duration: '12 Hari' },
  },
  {
    tag: 'KESEHATAN KERJA',
    title: 'Dokter Perusahaan Sertifikasi Hiperkes',
    desc: 'Pembinaan resmi kelaikan kerja okupasi, surveilans medis karyawan, dan penegakan diagnosis penyakit akibat kerja (PAK).',
    href: '/pelatihan/pelatihan-dokter-perusahaan-sertifikasi-hiperkes-kemnaker-ri',
    points: ['Permenaker No. PER.01/MEN/1976', 'Surveilans Medis & Penegakan Diagnosa PAK', 'Sertifikat Resmi Hiperkes dari Kemnaker RI'],
    highlight: false,
    image: {
      src: '/images/content/sesi-konsultasi-dengan-konsultan-k3-1.webp',
      alt: 'Dokter Hiperkes Perusahaan',
    },
    issuer: 'Kemnaker RI',
    price: { startingFrom: 'Rp 11.500.000', label: 'Investasi Mulai' },
    meta: { duration: '10 Hari' },
  },
];

const homeFaqs = [
  {
    question: 'Apa saja jenis pelatihan K3 yang diselenggarakan di Indonesia?',
    answer: 'Pelatihan K3 di Indonesia terbagi menjadi pembinaan regulasi wajib Kemnaker RI (seperti Ahli K3 Umum, Auditor SMK3, K3 Kebakaran, K3 Listrik, K3 Ketinggian, Petugas P3K), skema sertifikasi uji kompetensi BNSP melalui LSP berlisensi, serta pelatihan teknis terapan in-house sesuai kebutuhan operasional industri perusahaan.',
  },
  {
    question: 'Mengapa Pelatihan Ahli K3 Umum menjadi program yang paling banyak diminati?',
    answer: 'Pelatihan Ahli K3 Umum (120 JP) berlandaskan Permenaker No. 02/MEN/1992 merupakan program fundamental yang mempersiapkan tenaga ahli K3 untuk menduduki posisi Sekretaris P2K3 di perusahaan. Sertifikasi ini menjadi kualifikasi dasar yang dipersyaratkan oleh industri manufaktur, konstruksi, pertambangan, minyak & gas, dan fasilitas pelayanan kesehatan.',
  },
  {
    question: 'Apa perbedaan mendasar antara sertifikat K3 Kemnaker RI dengan BNSP?',
    answer: 'Sertifikasi Kemnaker RI berfokus pada pemenuhan kepatuhan hukum perusahaan (legal compliance) dengan keluaran Sertifikat Pembinaan, SKP, dan Lisensi Kewenangan. Sementara sertifikasi BNSP berfokus pada pembuktian standar kompetensi kerja individu (SKKNI) melalui uji asesmen portofolio dan wawancara asesor.',
  },
  {
    question: 'Berapa perkiraan biaya mengikuti pelatihan K3?',
    answer: 'Biaya pelatihan K3 bervariasi bergantung pada jenis program, durasi jam pelajaran (JP), metode pelaksanaan (Blended Online atau Tatap Muka), serta kelengkapan fasilitas sertifikasi. Untuk mendapatkan rincian biaya transparan dan penawaran resmi, Anda dapat menghubungi tim konsultan PT Kreasi Ultimate Berjaya.',
  },
  {
    question: 'Bagaimana prosedur penyelenggaraan In-House Training K3 untuk perusahaan?',
    answer: 'Perusahaan dapat menyampaikan kebutuhan topik pelatihan, perkiraan jumlah peserta, dan target tanggal pelaksanaan kepada tim konsultan kami. Kami akan menyusun rancangan silabus yang diselaraskan dengan potensi bahaya tempat kerja Anda serta menerbitkan Surat Penawaran Harga (SPH) resmi.',
  },
];

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Pelatihan Ahli K3 Umum Kemnaker RI 120 JP',
    description: 'Program pembinaan calon Ahli K3 Umum resmi Kementerian Ketenagakerjaan RI (120 Jam Pelajaran).',
    provider: {
      '@type': 'Organization',
      name: site.name,
      sameAs: site.url,
    },
    educationalCredentialAwarded: 'Sertifikat Pembinaan Calon Ahli K3 Umum Kemnaker RI & SKP Lisensi K3',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PT Kreasi Ultimate Berjaya',
    alternateName: ['LSP SPB', 'Pelatihan K3 Indonesia'],
    url: 'https://pelatihan-k3.co.id',
    logo: 'https://pelatihan-k3.co.id/logo.svg',
    description: 'Lembaga Pelatihan K3 Resmi & Konsultan Keselamatan Kerja Indonesia dengan 10+ tahun pengalaman melayani 1000+ perusahaan di Semarang, Yogyakarta, dan nasional.',
    foundingDate: '2014',
    sameAs: [
      'https://www.instagram.com/pelatihan.k3',
      'https://www.facebook.com/pelatihan.k3',
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Semarang',
        addressRegion: 'Jawa Tengah',
        postalCode: '50192',
        addressCountry: 'ID',
        streetAddress: 'Jl. Jaten III, Pedurungan Tengah',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Yogyakarta',
        addressRegion: 'DI Yogyakarta',
        postalCode: '55573',
        addressCountry: 'ID',
        streetAddress: 'Jl. Wonosari Km 8.5, Gandu',
      },
    ],
    areaServed: 'ID',
    knowsAbout: ['Pelatihan K3', 'Keselamatan Kerja', 'Sertifikasi BNSP', 'In-House Training'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: 'ID',
      availableLanguage: ['id', 'en'],
    },
  };

  return (
    <main>
      <JsonLd data={[faqSchema, courseSchema, organizationSchema]} />

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="hero-academy-wrapper">
        <div className="hero-academy-grid">
          <div className="hero-copy">
            <div className="hero-live-pill">
              <span className="live-dot" />
              <span>PUSAT SERTIFIKASI & PELATIHAN K3 RESMI</span>
            </div>
            
            <h1 className="hero-main-title">
              Pusat <span>Pelatihan K3</span> & Sertifikasi Resmi Indonesia
            </h1>
            
            <p className="hero-lead">
              Layanan edukasi, konsultasi pendaftaran, dan pendampingan resmi program keselamatan kerja nasional: sertifikasi <strong>Ahli K3 Umum (Kemnaker RI 120 JP)</strong>, spesialisasi teknis industri, skema kompetensi BNSP, dan In-House Training perusahaan.
            </p>

            <HeroCta
              primaryText="Konsultasi Jadwal & Pendaftaran"
              primaryIntent="jadwal"
              secondaryText="Minta Estimasi Biaya"
              secondaryIntent="biaya"
              context="Pelatihan K3"
            />

            <TrustStrip />

      <ClientLogoStrip />
          </div>

          <aside className="hero-interactive-col" aria-label="Program Unggulan Terdekat">
            <LiveBatchHeroCard />
          </aside>
        </div>
      </section>

      {/* 2. STAT COUNTERS & PROOF METRICS */}
      <ScrollReveal>
        <section className="stats-proof-grid" aria-label="Ringkasan Standar & Dampak Layanan">
          <StatCounter
            icon={<FileCheck className="w-6 h-6 text-emerald-600" aria-hidden="true" />}
            value={120}
            suffix=" JP"
            label="Kurikulum Ahli K3 Umum"
            sublabel="Standar Resmi Kemnaker RI"
          />
          <StatCounter
            icon={<ShieldCheck className="w-6 h-6 text-emerald-600" aria-hidden="true" />}
            value={100}
            suffix="%"
            label="Pre-Screening Ijazah Bebas Biaya"
            sublabel="Verifikasi Syarat Sebelum Bayar"
          />
          <StatCounter
            icon={<Building className="w-6 h-6 text-emerald-600" aria-hidden="true" />}
            value={3}
            suffix="+"
            label="Kantor & Layanan Regional"
            sublabel="Yogya, Semarang & In-House Nasional"
          />
          <StatCounter
            icon={<Scale className="w-6 h-6 text-emerald-600" aria-hidden="true" />}
            value={100}
            suffix="+"
            label="Modul & Referensi Regulasi"
            sublabel="Terverifikasi Standar Perundang-Undangan"
          />
        </section>
      </ScrollReveal>

      {/* 3. INTERACTIVE PROGRAM NAVIGATOR (TABS + LIVE PANELS) */}
      <section className="section-container" aria-labelledby="navigator-heading">
        <ScrollReveal>
          <div className="section-heading text-center">
            <span className="eyebrow">EXPLORER PROGRAM K3</span>
            <h2 id="navigator-heading">Jelajahi Katalog Pelatihan K3 Berdasarkan Kategori</h2>
            <p className="mx-auto">
              Pilih bidang keselamatan kerja untuk melihat rincian silabus, durasi jam pelajaran (JP), dan sertifikasi kementerian yang sesuai.
            </p>
          </div>
          <InteractiveProgramNavigator categories={navigatorCategories} />
        </ScrollReveal>
      </section>

      {/* 4. FLAGSHIP SPOTLIGHT: AHLI K3 UMUM (120 JP) */}
      <section className="section-container" style={{ paddingTop: 0 }} aria-labelledby="flagship-heading">
        <ScrollReveal>
          <div className="flagship-showcase-card">
            <div className="flagship-showcase-copy">
              <div className="flagship-badge-row">
                <span className="program-tag program-tag-highlight inline-flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current text-amber-500" aria-hidden="true" />
                  <span>PROGRAM UNGGULAN NASIONAL</span>
                </span>
                <span className="flagship-jp-pill">120 JAM PELAJARAN</span>
              </div>
              <h2 id="flagship-heading" className="flagship-showcase-title">
                Pelatihan Ahli K3 Umum (Kemnaker RI)
              </h2>
              <p className="flagship-showcase-desc">
                Sertifikasi fundamental paling dicari di industri nasional. Berlandaskan <strong>Permenaker No. 02/MEN/1992</strong> untuk mempersiapkan tenaga ahli K3 yang berwenang mengawasi kepatuhan norma K3 dan menjabat sebagai Sekretaris P2K3 di tempat kerja.
              </p>

              <div className="flagship-pillars-grid">
                <div className="pillar-item">
                  <span className="pillar-icon flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                  </span>
                  <div>
                    <strong>Legalitas Kemnaker RI</strong>
                    <small>Sertifikat Pembinaan, SKP & Kartu Lisensi K3</small>
                  </div>
                </div>
                <div className="pillar-item">
                  <span className="pillar-icon flex items-center justify-center">
                    <Clock className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                  </span>
                  <div>
                    <strong>Durasi 120 JP (±12 Hari)</strong>
                    <small>Teori interaktif, PKL daring/luring & evaluasi</small>
                  </div>
                </div>
                <div className="pillar-item">
                  <span className="pillar-icon flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                  </span>
                  <div>
                    <strong>Syarat Min. D3/S1</strong>
                    <small>Terbuka bagi fresh graduate & utusan perusahaan</small>
                  </div>
                </div>
                <div className="pillar-item">
                  <span className="pillar-icon flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                  </span>
                  <div>
                    <strong>Pre-Screening Bebas Biaya</strong>
                    <small>Verifikasi ijazah sebelum pembayaran</small>
                  </div>
                </div>
              </div>

              <div className="flagship-actions">
                <Link className="button button-accent button-large btn-glow" href="/pelatihan/ahli-k3-umum">
                  <span>Buka Detail & Silabus Ahli K3 Umum</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  className="button button-outline-light button-large"
                  href={waIntentUrl('jadwal', 'Ahli K3 Umum')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tanya Jadwal Batch Terdekat
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. K3 DISCIPLINE / CATEGORY CLUSTERS */}
      <section className="section-container section-container-alt" aria-labelledby="categories-heading">
        <ScrollReveal>
          <div className="section-heading text-center">
            <span className="eyebrow">BIDANG KESELAMATAN KERJA</span>
            <h2 id="categories-heading">Kategori & Bidang Keahlian K3</h2>
            <p className="mx-auto">
              Eksplorasi ragam program pelatihan keselamatan kerja berdasarkan bidang risiko industri dan standar regulasi kementerian.
            </p>
          </div>

          <div className="category-grid">
            {k3Categories.map((cat) => (
              <CategoryCard
                key={cat.title}
                icon={cat.icon}
                title={cat.title}
                desc={cat.desc}
                href={cat.href}
                count={cat.count}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 6. IMAGE-LED INDUSTRIAL SAFETY & TRAINING PRACTICES */}
      <section className="section-container" aria-labelledby="visual-practices-heading">
        <ScrollReveal>
          <div className="section-heading text-center">
            <span className="eyebrow">STANDAR PELAKSANAAN</span>
            <h2 id="visual-practices-heading">Metode Pembinaan & Praktik Lapangan Terstandar</h2>
            <p className="mx-auto">
              Rangkaian pembelajaran mengombinasikan pendalaman regulasi hukum, studi kasus kecelakaan kerja aktual, serta observasi lapangan (PKL) terpandu.
            </p>
          </div>

          <div className="program-grid-3">
            <VisualPhotoSlot
              theme="academy"
              tag="BLENDED & ONLINE CLASS"
              title="Kelas Pembinaan Interaktif"
              caption="Sesi pemaparan teori regulasi norma K3 dipandu instruktur bersertifikasi dengan studi kasus nyata lintas sektor industri."
              metrics={[
                { label: 'Metode', value: 'Blended Zoom' },
                { label: 'Interaksi', value: 'Dua Arah' },
              ]}
            />
            <VisualPhotoSlot
              theme="industrial"
              tag="PRAKTIK KERJA LAPANGAN"
              title="Observasi Bahaya Fasilitas Kerja"
              caption="Peserta melakukan simulasi inspeksi potensi bahaya mekanik, listrik, kimia, dan ergonomi serta menyusun laporan audit K3."
              metrics={[
                { label: 'Output', value: 'Laporan PKL' },
                { label: 'Evaluator', value: 'Pengawas K3' },
              ]}
            />
            <VisualPhotoSlot
              theme="fire"
              tag="TANGGAP DARURAT"
              title="Simulasi Mitigasi Kebakaran & P3K"
              caption="Pelatihan taktis pemadaman api awal dengan APAR/Hydrant serta teknik resusitasi medis penyelamatan korban kecelakaan."
              metrics={[
                { label: 'Praktik', value: 'APAR & RJP' },
                { label: 'Sertifikasi', value: 'Kemnaker RI' },
              ]}
            />
          </div>
        </ScrollReveal>
      </section>

      {/* 7. POPULAR TRAINING PROGRAMS GRID */}
      <section className="section-container section-container-alt" aria-labelledby="programs-heading">
        <ScrollReveal>
          <div className="section-heading text-center">
            <span className="eyebrow">KATALOG PROGRAM POPULER</span>
            <h2 id="programs-heading">Program Pelatihan K3 Terpopuler</h2>
            <p className="mx-auto">
              Pilihan pembinaan teknis dan sertifikasi kompetensi K3 yang paling banyak diikuti oleh praktisi HSE dan perusahaan di Indonesia.
            </p>
          </div>

          <div className="program-grid-3">
            {popularPrograms.map((item) => (
              <ProgramCard
                key={item.title}
                title={item.title}
                tag={item.tag}
                desc={item.desc}
                href={item.href}
                points={item.points}
                highlight={item.highlight}
                image={item.image}
                issuer={item.issuer}
                price={item.price}
                meta={item.meta}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link className="button button-primary button-large btn-glow" href="/pelatihan">
              <span>Jelajahi Seluruh Katalog Program Pelatihan K3</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* 8. AUDIENCE PATHWAY SELECTOR (INDIVIDUAL VS CORPORATE) */}
      <section className="section-container">
        <ScrollReveal>
          <PathwaySelector />
        </ScrollReveal>
      </section>

      {/* 9. BNSP VS KEMNAKER COMPARISON OVERVIEW */}
      <section className="section-container section-container-alt" aria-labelledby="comparison-heading">
        <ScrollReveal>
          <div className="section-heading text-center">
            <span className="eyebrow">PANDUAN MEMILIH JALUR</span>
            <h2 id="comparison-heading">Perbedaan Pelatihan K3 Kemnaker RI vs Sertifikasi BNSP</h2>
            <p className="mx-auto">
              Pahami perbedaan fungsi kelembagaan agar Anda dapat menentukan jalur sertifikasi yang paling sesuai dengan kebutuhan hukum perusahaan atau portofolio karir personal Anda.
            </p>
          </div>

          <div className="comparison-preview-grid">
            <div className="comparison-preview-card">
              <div className="comparison-preview-head">
                <span className="program-tag">KEMNAKER RI</span>
                <h3>Jalur Kepatuhan Hukum (Compliance)</h3>
              </div>
              <p>
                Dipersyaratkan untuk pemenuhan audit SMK3 (PP 50/2012), penunjukan sekretaris P2K3, dan tender proyek pemerintah yang mewajibkan Surat Keputusan Penunjukan (SKP) dan Kartu Lisensi K3.
              </p>
              <ul className="comparison-preview-list">
                <li><strong>Penerbit:</strong> Kementerian Ketenagakerjaan RI</li>
                <li><strong>Output:</strong> Sertifikat Pembinaan, SKP & Lisensi K3</li>
                <li><strong>Fokus:</strong> Pengawasan kepatuhan norma di tempat kerja</li>
              </ul>
              <Link className="card-link" href="/pelatihan/ahli-k3-umum">
                Lihat Program Ahli K3 Kemnaker →
              </Link>
            </div>

            <div className="comparison-preview-card">
              <div className="comparison-preview-head">
                <span className="program-tag">BNSP (LSP)</span>
                <h3>Jalur Standar Kompetensi Profesi (SKKNI)</h3>
              </div>
              <p>
                Dipersyaratkan untuk pengakuan portofolio keahlian individu berdasarkan unit Standar Kompetensi Kerja Nasional Indonesia (SKKNI) yang diakui secara nasional dan regional.
              </p>
              <ul className="comparison-preview-list">
                <li><strong>Penerbit:</strong> Badan Nasional Sertifikasi Profesi</li>
                <li><strong>Output:</strong> Sertifikat Kompetensi Kerja Garuda BNSP</li>
                <li><strong>Fokus:</strong> Pengujian & pembuktian kompetensi profesi</li>
              </ul>
              <Link className="card-link" href="/perbandingan/bnsp-vs-kemnaker">
                Baca Matriks Perbandingan Lengkap →
              </Link>
            </div>

            <div className="comparison-preview-card comparison-preview-card-cta">
              <span className="program-tag program-tag-highlight">KONSULTASI GRATIS</span>
              <h3>Butuh Rekomendasi Jalur yang Tepat?</h3>
              <p>
                Sampaikan posisi pekerjaan, kualifikasi pendidikan, dan tujuan proyek Anda. Tim konsultan kami siap membantu memetakan jalur sertifikasi terbaik.
              </p>
              <a
                className="button button-accent button-full btn-glow"
                href={waIntentUrl('kemnaker_bnsp', 'Konsultasi Jalur K3')}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 'auto' }}
              >
                <span>Konsultasi Jalur K3 via WA</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 10. IN-HOUSE TRAINING CTA FOR ENTERPRISE */}
      <section className="section-container" style={{ paddingTop: 0 }}>
        <ScrollReveal>
          <InHouseCtaBox
            title="Layanan In-House Training K3 Perusahaan"
            subtitle="Penyelenggaraan pelatihan internal di fasilitas kantor atau pabrik Anda dengan jadwal fleksibel, efisiensi biaya rombongan, dan kurikulum yang disesuaikan dengan profil risiko industri."
            programName="In-House Training K3"
          />
        </ScrollReveal>
      </section>

      {/* 11. 4-STEP CONSULTATION & REGISTRATION TIMELINE */}
      <section className="section-container section-container-alt" aria-labelledby="timeline-heading">
        <ScrollReveal>
          <div className="section-heading text-center">
            <span className="eyebrow">ALUR LAYANAN</span>
            <h2 id="timeline-heading">4 Tahap Mudah Konsultasi & Pendaftaran Pelatihan K3</h2>
            <p className="mx-auto">
              Kami mendampingi proses dari tahap pemetaan kebutuhan, verifikasi berkas awal, hingga terbitnya sertifikat secara transparan dan terstandar.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step-card">
              <div className="step-number-glow">01</div>
              <h3>Konsultasi Kebutuhan</h3>
              <p>Pilih program pelatihan K3 yang sesuai dengan tujuan karir personal atau kebutuhan audit kepatuhan perusahaan.</p>
            </div>
            <div className="process-step-card">
              <div className="step-number-glow">02</div>
              <h3>Pre-Screening Berkas</h3>
              <p>Verifikasi kelayakan ijazah, KTP, dan surat tugas kerja secara gratis guna memastikan kesiapan administrasi regulasi.</p>
            </div>
            <div className="process-step-card">
              <div className="step-number-glow">03</div>
              <h3>Konfirmasi Batch</h3>
              <p>Pilih jadwal batch kelas publik terdekat atau jadwalkan tanggal khusus pelaksanaan in-house training perusahaan.</p>
            </div>
            <div className="process-step-card">
              <div className="step-number-glow">04</div>
              <h3>Pembinaan & Sertifikasi</h3>
              <p>Ikuti rangkaian pembinaan, evaluasi, hingga proses administrasi penerbitan sertifikat/lisensi resmi.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 12. LOCATION & SERVICE COVERAGE */}
      <section className="section-container" aria-labelledby="coverage-heading">
        <ScrollReveal>
          <div className="section-heading text-center">
            <span className="eyebrow">JANGKAUAN LAYANAN</span>
            <h2 id="coverage-heading">Kantor Operasional & Layanan Pelatihan Nasional</h2>
            <p className="mx-auto">
              PT Kreasi Ultimate Berjaya melayani pendaftaran kelas publik online serta penyelenggaraan In-House Training K3 langsung di lokasi perusahaan di seluruh Indonesia.
            </p>
          </div>

          <div className="program-grid-3">
            <div className="location-card">
              <div className="location-head">
                <span className="location-icon flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                </span>
                <span className="program-tag">KANTOR PUSAT</span>
              </div>
              <h3>Yogyakarta & Sleman</h3>
              <p>
                Jl. Wonosari Km 8.5, Gandu, Sendangtirto, Kec. Berbah, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55573.
              </p>
              <Link className="card-link" href="/lokasi/yogyakarta">
                Info Pelatihan K3 Yogyakarta →
              </Link>
            </div>

            <div className="location-card">
              <div className="location-head">
                <span className="location-icon flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                </span>
                <span className="program-tag">LAYANAN REGIONAL</span>
              </div>
              <h3>Semarang & Jawa Tengah</h3>
              <p>
                Jl. Jaten III, Pedurungan Tengah, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50192.
              </p>
              <Link className="card-link" href="/lokasi/semarang">
                Pelatihan K3 Semarang, Jawa Tengah - In-House Training Kemnaker RI →
              </Link>
            </div>

            <div className="location-card">
              <div className="location-head">
                <span className="location-icon flex items-center justify-center">
                  <Globe className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                </span>
                <span className="program-tag program-tag-highlight">SE-INDONESIA</span>
              </div>
              <h3>In-House Training Nasional</h3>
              <p>
                Tim instruktur kami siap hadir langsung ke fasilitas industri, tambang, konstruksi, atau kantor perusahaan Anda di seluruh provinsi Indonesia.
              </p>
              <a
                className="card-link"
                href={waIntentUrl('perusahaan', 'Pelatihan In-House Nasional')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ajukan Pelatihan In-House Perusahaan →
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 13. COMPREHENSIVE FAQ */}
      <section className="section-container section-container-alt">
        <ScrollReveal>
          <FaqAccordion items={homeFaqs} title="Pertanyaan Umum Seputar Pelatihan K3" />
        </ScrollReveal>
      </section>

      {/* 13.5 ALUMNI REVIEWS & TESTIMONIALS */}
      <TestimonialsReviewStrip />

      {/* 13.6 COMPANY TRUST CARD - PT KREASI ULTIMATE BERJAYA (E-E-A-T + Semarang SEO) */}
      <CompanyTrustCard />

      {/* 14. CLOSING HIGH-TRUST CTA */}
      <section className="closing-cta-section" aria-labelledby="closing-cta-heading">
        <ScrollReveal>
          <div className="closing-cta-inner">
            <div className="closing-badge-pill">
              <span className="closing-badge-dot" />
              <span>KONSULTASI RESMI PELATIHAN K3</span>
            </div>
            <h2 id="closing-cta-heading" className="closing-cta-title">
              Tingkatkan Standar Keselamatan Kerja & Karir K3 Anda Sekarang
            </h2>
            <p className="closing-cta-lead">
              Hubungi konsultan PT Kreasi Ultimate Berjaya untuk menanyakan tanggal batch terdekat, pre-screening kelayakan berkas ijazah, atau pengajuan proposal In-House Training K3 perusahaan.
            </p>
            <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
              <a
                className="button button-accent button-large btn-glow"
                href={waIntentUrl('jadwal', 'Pelatihan K3')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Tanya Jadwal & Pendaftaran Pelatihan</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                className="button button-outline-light button-large"
                href={waIntentUrl('biaya', 'Pelatihan K3')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Minta Estimasi Biaya & Proposal</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
