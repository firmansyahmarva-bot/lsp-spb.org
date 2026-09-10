import { type ContentRecord } from '../../lib/content-types';

export const record: ContentRecord = {
  "section": "panduan",
  "slug": "syarat-uji-hidrostatis-bejana-tekanan",
  "title": "Panduan Syarat & Tekanan Uji Hidrostatis (Hydrotest) Tangki Pabrik",
  "metaTitle": "Panduan Syarat & Tekanan Uji Hidrostatis (Hydrotest) Tangki Pabrik | Informasi & Persyaratan Resmi",
  "description": "Kalkulasi tekanan uji 1,5 kali MAWP, pengisian air bebas udara terjebak, waktu penahanan tekanan, dan inspeksi kebocoran las.",
  "answer": "Syarat pelaksanaan uji hidrostatis (Hydrostatic Test) bejana tekanan berdasarkan Permenaker No. 37 Tahun 2016 dan standar ASME Boiler and Pressure Vessel Code (BPVC) Section VIII adalah: bejana telah dibersihkan dan diinspeksi visual bagian dalam/luar tanpa retak, menggunakan media air bersih pada temperatur 15°C - 50°C, menggunakan dua unit manometer kalibrasi terpisah dengan skala 1,5 hingga 4 kali tekanan uji, tekanan uji ditetapkan 1,3 hingga 1,5 kali tekanan kerja desain (Design Pressure), ditahan sekurang-kurangnya 30 menit tanpa penurunan jarum tekanan atau kebocoran, serta disaksikan oleh Ahli K3 Spesialis Pesawat Uap dan Bejana Tekan.",
  "highlights": [
    "Dasar Regulasi: Permenaker No. 37 Tahun 2016 Pasal 71 & Standar ASME Section VIII Div 1",
    "Media Uji: Air bersih bersuhu kamar (15°C - 50°C) untuk mencegah thermal shock dan kerapuhan getas",
    "Tekanan Uji Standar: 1,3x hingga 1,5x Tekanan Kerja Maksimum yang Diizinkan (MAWP)",
    "Persyaratan Manometer: Wajib menggunakan 2 pressure gauge terkalibrasi yang dipasang terpisah",
    "Waktu Tahan (Holding Time): Minimal 30 menit pemantauan stabil tanpa rembesan pada sambungan las"
  ],
  "blocks": [
    {
      "heading": "Standar Teknis dan Kepatuhan Keselamatan Uji Hidrostatik",
      "paragraphs": [
        "Bejana bertekanan seperti tangki kompresor angin, tabung receiver, accumulator, dan reaktor kimia menyimpan energi pneumatik yang sangat berbahaya jika mengalami kegagalan material. Pengujian ketahanan struktural bejana dilatih secara komprehensif pada [pelatihan pengujian hidrostatik](/pelatihan/pelatihan-k3-pengujian-hidrostatik-hydrotest-bejana-tekanan-dan-pipa).",
        "Uji hidrostatik menggunakan media fluida inkompresibel (air) untuk meminimalkan ledakan kompresi udara jika terjadi robekan pada dinding bejana."
      ]
    },
    {
      "heading": "Checklist Kesiapan Sebelum Pelaksanaan Hydrotest",
      "paragraphs": [
        "Sebelum pompa uji hidrostatik bertekanan tinggi dioperasikan, teknisi wajib memastikan:"
      ],
      "bullets": [
        "Pembersihan Internal: Bejana bebas dari endapan kerak, oli, dan sisa bahan kimia korosif.",
        "Pemeriksaan Ketebalan Dinding: Pengukuran Ultrasonic Thickness Gauging untuk memastikan ketebalan pelat masih di atas batas ketebalan minimum desain (T-min).",
        "Pelepasan Katup Pengaman (Safety Valve): Safety valve dilepas dan diganti dengan blind flange bertekanan tinggi agar tidak terbuka saat tekanan uji dinaikkan.",
        "Pemberian Ventilasi Udara (Air Bleeding): Membuka ventilasi atas saat pengisian air agar seluruh kantong udara keluar sempurna sebelum diberi tekanan hidrolik.",
        "Zonasi Barricade Aman: Memasang safety line dan melarang personel non-penguji berada dalam radius bahaya semprotan air bertekanan."
      ]
    },
    {
      "heading": "Kriteria Kelulusan dan Pencatatan Grafik Tekanan",
      "paragraphs": [
        "Uji dinyatakan lulus apabila jarum manometer kedua alat uji tidak menunjukkan penurunan tekanan selama masa holding time 30 menit, serta tidak ditemukan distorsi permanen, retak, atau rembesan air pada sambungan las saat diperiksa inspektur."
      ]
    },
    {
      "heading": "Pendaftaran Program Pengujian Bejana Tekanan",
      "paragraphs": [
        "Tingkatkan keahlian teknisi pabrik Anda melalui [pelatihan pengujian hidrostatik](/pelatihan/pelatihan-k3-pengujian-hidrostatik-hydrotest-bejana-tekanan-dan-pipa) di PT Kreasi Ultimate Berjaya."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Mengapa uji tekanan tidak boleh menggunakan udara bertekanan (uji pneumatik)?",
      "answer": "Udara bersifat kompresibel sehingga menyimpan energi ekspansi kinetik yang sangat besar. Jika bejana pecah saat uji udara, pecahan logam akan terlontar seperti bom serpihan yang mematikan."
    },
    {
      "question": "Berapa frekuensi wajib uji hidrostatik bejana tekan berkala menurut Kemnaker?",
      "answer": "Sesuai Permenaker 37/2016, uji hidrostatis berkala pada bejana tekanan wajib diulang sekurang-kurangnya 1 (satu) kali setiap 5 tahun."
    },
    {
      "question": "Mengapa wajib menggunakan dua unit manometer terpisah?",
      "answer": "Penggunaan dua manometer berfungsi sebagai pembanding (cross-check) untuk mendeteksi apabila salah satu instrumen mengalami kemacetan atau kesalahan pembacaan jarum kalibrasi."
    }
  ],
  "related": [
    "pelatihan/pelatihan-k3-pengujian-hidrostatik-hydrotest-bejana-tekanan-dan-pipa",
    "panduan/syarat-penerbitan-surat-keterangan-laik-k3-riksa-uji",
    "panduan/biaya-pelatihan-k3-pengelasan-welding",
    "regulasi-k3/permenaker-37-2016-bejana-tekan-tangki-timbun",
    "pelatihan/ahli-k3-umum"
  ],
  "sources": [
    {
      "label": "Permenaker No. 37 Tahun 2016 tentang K3 Bejana Tekan dan Tangki Timbun",
      "url": "https://jdih.kemnaker.go.id/katalog/permenaker-37-2016",
      "publisher": "Kemnaker RI"
    },
    {
      "label": "UU No. 1 Tahun 1970 tentang Keselamatan Kerja",
      "url": "https://jdih.kemnaker.go.id/katalog/uu-1-1970",
      "publisher": "Kemnaker RI"
    },
    {
      "label": "ASME Boiler and Pressure Vessel Code Section VIII Division 1",
      "url": "https://www.asme.org",
      "publisher": "American Society of Mechanical Engineers"
    }
  ],
  "status": "published",
  "publishedAt": "2026-08-01",
  "updatedAt": "2026-09-01",
  "indexable": true,
  "intent": "panduan syarat uji hidrostatis bejana tekanan Kalkulasi tekanan uji 1,5 kali MAWP, pengisian air bebas udara terjebak, waktu penahanan tekanan, dan inspeksi kebocoran las.",
  "primaryKeyword": "panduan syarat uji hidrostatis bejana tekanan",
  "searchIntent": "Kalkulasi tekanan uji 1,5 kali MAWP, pengisian air bebas udara terjebak, waktu penahanan tekanan, dan inspeksi kebocoran las.",
  "intentType": "informational",
  "parentTopic": "Panduan Strategis K3",
  "cannibalizationGroup": "panduan-commercial",
  "contentKind": "guide",
  "primaryCtaText": "Konsultasi Hydrotest Bejana",
  "primaryCtaIntent": "perusahaan",
  "secondaryCtaText": "Tanya Batch Pelatihan Terdekat",
  "secondaryCtaIntent": "jadwal",
  "image": {
    "src": "/images/content/praktik-pengangkatan-beban-dengan-crane-1.webp",
    "alt": "Simulasi dan praktik pengangkatan beban aman menggunakan crane di lapangan (Dokumentasi 1) - Panduan Syarat & Tekanan Uji Hidrostatis (Hydrotest) Tangki Pabrik"
  }
};
export default record;
