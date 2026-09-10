import fs from 'fs';
import path from 'path';

const dir = path.resolve('src/content/pelatihan');

function replaceSyllabusAndMeta(filePath, updates) {
  if (!fs.existsSync(filePath)) return;
  let c = fs.readFileSync(filePath, 'utf8');

  if (updates.description) {
    c = c.replace(/"description":\s*"[^"]*"/, `"description": ${JSON.stringify(updates.description)}`);
  }
  if (updates.answer) {
    c = c.replace(/"answer":\s*"[^"]*"/, `"answer": ${JSON.stringify(updates.answer)}`);
  }
  if (updates.legalBasis) {
    c = c.replace(/"legalBasis":\s*"[^"]*"/, `"legalBasis": ${JSON.stringify(updates.legalBasis)}`);
  }
  if (updates.highlights) {
    const highlightsStr = `"highlights": [\n    ${updates.highlights.map(h => JSON.stringify(h)).join(',\n    ')}\n  ]`;
    c = c.replace(/"highlights":\s*\[[\s\S]*?\n\s*\](?=,\s*"courseDetails":)/, highlightsStr);
  }
  if (updates.certificationOutput) {
    const certStr = `"certificationOutput": [\n      ${updates.certificationOutput.map(h => JSON.stringify(h)).join(',\n      ')}\n    ]`;
    c = c.replace(/"certificationOutput":\s*\[[\s\S]*?\n\s*\](?=,\s*"syllabusModules":)/, certStr);
  }
  if (updates.syllabusModules) {
    const syllabusJson = JSON.stringify(updates.syllabusModules, null, 6).replace(/\n/g, '\n    ');
    const syllabusStr = `"syllabusModules": ${syllabusJson.trim()}`;
    c = c.replace(/"syllabusModules":\s*\[[\s\S]*?\n\s*\](?=,\s*"priceInfo":)/, syllabusStr);
  }

  fs.writeFileSync(filePath, c, 'utf8');
}

// 1. Dokter Hiperkes
replaceSyllabusAndMeta(path.join(dir, 'pelatihan-dokter-perusahaan-sertifikasi-hiperkes-kemnaker-ri.ts'), {
  description: "Pendaftaran resmi Pelatihan Dokter Perusahaan Sertifikasi Hiperkes Kemnaker RI durasi 10 Hari. Kuasai surveilans kesehatan okupasi, penegakan diagnosis Penyakit Akibat Kerja (PAK) sesuai Perpres 07/2019, evaluasi kelaikan kerja fit-to-work, dan tata kelola klinik industri.",
  answer: "Pelatihan Dokter Perusahaan Sertifikasi Hiperkes Kemnaker RI adalah program pembinaan keahlian medis okupasi berdurasi 10 hari sesuai amanat Permenaker No. PER.01/MEN/1976. Pelatihan ini melatih dokter dalam mengelola pelayanan kesehatan kerja perusahaan, menyelenggarakan surveilans medis berkala, menegakkan diagnosis Penyakit Akibat Kerja (PAK), serta menilai kelaikan kerja pekerja (fit for duty) di lingkungan industri berisiko.",
  legalBasis: "Permenaker No. PER.01/MEN/1976 tentang Kewajiban Latihan Hiperkes Bagi Dokter Perusahaan & Permenaker No. PER.03/MEN/1982",
  highlights: [
    "Durasi Pembinaan: 10 Hari Kerja Terjadwal",
    "Dasar Hukum Acuan: Permenaker No. PER.01/MEN/1976 & Permenaker PER.03/MEN/1982",
    "Jalur Sertifikasi: Sertifikat Resmi Hiperkes Dokter Perusahaan dari Kemnaker RI",
    "Fokus Pembelajaran: Surveilans Kesehatan Kerja, Penegakan Diagnosa PAK & Fit-for-Duty Assessment"
  ],
  certificationOutput: [
    "Sertifikat Pelatihan Hiperkes Dokter Perusahaan resmi dari Kementerian Ketenagakerjaan RI",
    "Surat Tanda Registrasi Hiperkes Dokter dari Ditjen Binwasnaker & K3 Kemnaker",
    "Transkrip Pembinaan Medis Okupasi & Higiene Perusahaan",
    "Surat Keterangan Telah Mengikuti Pembinaan Dokter Pemeriksa Kesehatan Tenaga Kerja"
  ],
  syllabusModules: [
    {
      module: "Modul 01: Perundangan Kesehatan Kerja & Ergonomi Industri",
      topics: [
        "Permenaker No. PER.01/MEN/1976 & Penyelenggaraan Pelayanan Kesehatan Kerja Permenaker 03/1982",
        "Standar Keselamatan dan Kesehatan Lingkungan Kerja (Permenaker 05/2018)",
        "Ergonomi Klinis Tempat Kerja & Pencegahan Musculoskeletal Disorders (MSDs)"
      ],
      hours: "24 JP"
    },
    {
      module: "Modul 02: Surveilans Medis & Penegakan Diagnosis PAK",
      topics: [
        "7 Langkah Penegakan Diagnosis Penyakit Akibat Kerja (Perpres 07/2019)",
        "Pemeriksaan Kesehatan Awal, Berkala, dan Khusus (Permenaker 02/1980)",
        "Interpretasi Hasil Audiometri, Spirometri, dan Pemantauan Biomonitoring Toksikologi"
      ],
      hours: "32 JP"
    },
    {
      module: "Modul 03: Penilaian Kelaikan Kerja & Tata Kelola Klinik Perusahaan",
      topics: [
        "Prosedur Fit-for-Duty Assessment Sebelum Penugasan Khusus",
        "Manajemen Kembali Bekerja (Return to Work Program) Pasca Kecelakaan / Sakit Panjang",
        "Kunjungan Perusahaan (Praktek Lapangan Ergonomi & Higiene Industri) serta Ujian Evaluasi Kemnaker"
      ],
      hours: "24 JP"
    }
  ]
});
console.log('Enhanced Dokter Hiperkes');

// 2. Paramedis Hiperkes
replaceSyllabusAndMeta(path.join(dir, 'pelatihan-paramedis-perusahaan-sertifikasi-hiperkes-kemnaker-ri.ts'), {
  description: "Pelatihan Paramedis Perusahaan Sertifikasi Hiperkes Kemnaker RI durasi 6 Hari sesuai Permenaker No. PER.01/MEN/1979. Kuasai tata kelola klinik pabrik, surveilans keperawatan okupasi, pencegahan PAK, dan pertolongan gawat darurat tempat kerja.",
  answer: "Pelatihan Paramedis Perusahaan Sertifikasi Hiperkes Kemnaker RI adalah program pembinaan kompetensi keperawatan okupasi berdurasi 6 hari sesuai amanat Permenaker No. PER.01/MEN/1979. Pembinaan ini membekali perawat industri kemampuan menyelenggarakan pelayanan klinik perusahaan, penatalaksanaan gawat darurat medis, pemantauan status gizi dan higiene lingkungan kerja, serta deteksi dini penyakit akibat kerja.",
  legalBasis: "Permenaker No. PER.01/MEN/1979 tentang Kewajiban Latihan Higiene Perusahaan, Kesehatan Dan Keselamatan Kerja Bagi Tenaga Paramedis Perusahaan",
  highlights: [
    "Durasi Pembinaan: 6 Hari Kerja Terjadwal",
    "Dasar Hukum Acuan: Permenaker No. PER.01/MEN/1979 & Permenaker 03/1982",
    "Jalur Sertifikasi: Sertifikat Hiperkes Paramedis Resmi Kementerian Ketenagakerjaan RI",
    "Fokus Pembelajaran: Tata Kelola Klinik Perusahaan, Keperawatan Okupasi & Deteksi Dini PAK"
  ],
  certificationOutput: [
    "Sertifikat Pelatihan Hiperkes Tenaga Paramedis resmi dari Kementerian Ketenagakerjaan RI",
    "Transkrip Kompetensi Keperawatan Okupasi & Higiene Industri",
    "Surat Keterangan Pembinaan Pelayanan Kesehatan Kerja Perusahaan"
  ],
  syllabusModules: [
    {
      module: "Modul 01: Regulasi Kesehatan Kerja & Pengorganisasian Klinik",
      topics: [
        "Permenaker No. PER.01/MEN/1979 & Permenaker PER.03/MEN/1982",
        "Manajemen Administrasi & Standar Fasilitas Pelayanan Kesehatan Kerja Pabrik",
        "Penyelenggaraan Makanan & Gizi Kerja bagi Tenaga Kerja Shift"
      ],
      hours: "14 JP"
    },
    {
      module: "Modul 02: Keperawatan Okupasi & Surveilans Kesehatan Pekerja",
      topics: [
        "Peran Perawat dalam Pemeriksaan Kesehatan Awal, Berkala, dan Khusus",
        "Pengukuran dan Pemantauan Faktor Bahaya Fisika-Kimia di Ruang Kerja",
        "Pencegahan & Pengendalian Penyakit Menular (TBC, HIV/AIDS, Hepatitis) di Industri"
      ],
      hours: "18 JP"
    },
    {
      module: "Modul 03: Tanggap Darurat Medis & Evaluasi Sertifikasi Kemnaker",
      topics: [
        "Penatalaksanaan Trauma Darurat, Pendarahan, Fraktur, dan Intoksikasi Bahan Kimia",
        "Kunjungan Studi Kasus Ergonomi & Higiene Perusahaan",
        "Ujian Evaluasi Kelulusan & Pengurusan Sertifikat Hiperkes Paramedis Kemnaker RI"
      ],
      hours: "16 JP"
    }
  ]
});
console.log('Enhanced Paramedis Hiperkes');

// 3. Operator Forklift
replaceSyllabusAndMeta(path.join(dir, 'pelatihan-operator-forklift-kelas-i-kelas-ii-sertifikasi-kemnaker.ts'), {
  description: "Pelatihan Operator Forklift Kelas I & II Sertifikasi Kemnaker RI durasi 30 JP (3 Hari). Kuasai segitiga stabilitas forklift, penentuan load center, batas beban aman (SWL), inspeksi harian pra-operasi, dan uji lisensi SIO resmi.",
  answer: "Pelatihan Operator Forklift Kelas I dan Kelas II Sertifikasi Kemnaker RI adalah program pembinaan teknis keselamatan operasional forklift berdurasi 30 JP (3 hari kerja) berdasarkan Permenaker No. 08 Tahun 2020 tentang K3 Pesawat Angkat dan Angkut. Pelatihan membekali operator pemahaman batas beban aman (SWL), konsep load center dan segitiga stabilitas, teknik manuver di lorong sempit, inspeksi harian garpu/mast, serta penerbitan Lisensi K3 (SIO) resmi.",
  legalBasis: "Permenaker No. 08 Tahun 2020 tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Angkut",
  highlights: [
    "Durasi Pembinaan: 30 JP (3 Hari Kerja)",
    "Dasar Hukum Acuan: Permenaker No. 08 Tahun 2020 tentang K3 Pesawat Angkat dan Angkut",
    "Jalur Sertifikasi: Sertifikat Pembinaan & Lisensi Kewenangan (SIO) Kemnaker RI",
    "Fokus Pembelajaran: Segitiga Stabilitas Forklift, Load Center, Inspeksi Mast & Manuver Aman"
  ],
  certificationOutput: [
    "Sertifikat Pembinaan Operator Forklift resmi dari Kementerian Ketenagakerjaan RI",
    "Surat Keputusan Penunjukan (SKP) Lisensi K3 Operator",
    "Kartu Lisensi Kewenangan (SIO) Operator Forklift Kemnaker RI Masa Berlaku 5 Tahun"
  ],
  syllabusModules: [
    {
      module: "Modul 01: Peraturan Perundangan K3 Pesawat Angkat & Angkut",
      topics: [
        "Permenaker No. 08 Tahun 2020 & Syarat K3 Operator Forklift",
        "Kewajiban Pemeriksaan & Pengujian Berkala Alat Angkut",
        "Sanksi Hukum & Kewenangan Operator Forklift Kelas I (kapasitas > 15 ton) dan Kelas II (<= 15 ton)"
      ],
      hours: "8 JP"
    },
    {
      module: "Modul 02: Teori Stabilitas & Penanganan Beban Forklift",
      topics: [
        "Segitiga Stabilitas (Stability Triangle) & Titik Berat (Center of Gravity)",
        "Kalkulasi Beban Berdasarkan Load Center & Pembacaan Plat Beban (Capacity Chart)",
        "Teknik Melintasi Ramp/Tanjakan, Permukaan Basah, dan Lorong Gudang Sempit"
      ],
      hours: "12 JP"
    },
    {
      module: "Modul 03: Praktek Lapangan, Inspeksi Harian & Ujian SIO Kemnaker",
      topics: [
        "Prosedur Pre-Operational Check: Garpu, Rantai Mast, Rem, Klakson, dan Sistem Hidrolik",
        "Praktek Manuver Angkat-Angkut Beban & Penataan Palet Bertingkat",
        "Ujian Teori dan Praktik Pengoperasian Bersama Penguji Kemnaker RI"
      ],
      hours: "10 JP"
    }
  ]
});
console.log('Enhanced Forklift');

// 4. TKBT 1
replaceSyllabusAndMeta(path.join(dir, 'pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-1-tkbt-1-kemnaker-ri.ts'), {
  description: "Pelatihan Tenaga Kerja Bangunan Tinggi Tingkat 1 (TKBT 1) Sertifikasi Kemnaker RI durasi 3 Hari. Pembinaan bekerja di ketinggian platform tetap berlandaskan Permenaker No. 09 Tahun 2016, APD full body harness, dan lisensi SIO resmi.",
  answer: "Pelatihan Tenaga Kerja Bangunan Tinggi Tingkat 1 (TKBT 1) Sertifikasi Kemnaker RI adalah program pembinaan berdurasi 3 hari sesuai Permenaker No. 09 Tahun 2016 untuk pekerja yang beroperasi di ketinggian pada platform kerja tetap berpagar pengaman atau lantai bertingkat. Materi mencakup sistem penahan jatuh (fall arrest), inspeksi full body harness, teknik 3-point contact, dan pencegahan benda jatuh (falling objects).",
  legalBasis: "Permenaker No. 09 Tahun 2016 tentang Keselamatan dan Kesehatan Kerja dalam Pekerjaan pada Ketinggian",
  highlights: [
    "Durasi Pembinaan: 3 Hari Kerja Terjadwal",
    "Dasar Hukum Acuan: Permenaker No. 09 Tahun 2016 tentang K3 Pekerjaan pada Ketinggian",
    "Jalur Sertifikasi: Sertifikat Pembinaan & Lisensi Kewenangan (SIO) TKBT 1 Kemnaker RI",
    "Fokus Pembelajaran: APD Full Body Harness, Sistem Penahan Jatuh & Platform Tetap"
  ],
  certificationOutput: [
    "Sertifikat Pembinaan Tenaga Kerja Bangunan Tinggi Tingkat 1 resmi Kemnaker RI",
    "Surat Keputusan Penunjukan Lisensi K3 Bekerja di Ketinggian",
    "Kartu Lisensi Kewenangan K3 (SIO) TKBT Tingkat 1 Kemnaker RI"
  ],
  syllabusModules: [
    {
      module: "Modul 01: Regulasi K3 Bekerja di Ketinggian & Rencana Kerja",
      topics: [
        "Permenaker No. 09 Tahun 2016 tentang K3 Pekerjaan pada Ketinggian",
        "Identifikasi Bahaya Jatuh dari Ketinggian (Working at Height JSA)",
        "Persyaratan Struktur Platform Kerja Tetap, Pagar Pengaman, dan Toe-Board"
      ],
      hours: "6 JP"
    },
    {
      module: "Modul 02: Alat Pelindung Jatuh Perorangan (APJP)",
      topics: [
        "Kriteria Pemilihan dan Pemasangan Full Body Harness Standar EN/ANSI",
        "Penggunaan Shock-Absorbing Lanyard & Dual-Leg Lanyard untuk Tie-Off 100%",
        "Pemasangan Barikade Zona Jatuhan dan Pemasangan Tool Lanyard"
      ],
      hours: "10 JP"
    },
    {
      module: "Modul 03: Praktik Lapangan & Evaluasi Lisensi TKBT 1 Kemnaker",
      topics: [
        "Praktik Inspeksi Pra-Penggunaan Harness & Lanyard",
        "Teknik Bergerak Aman dengan 3-Point Contact pada Tangga dan Akses Tetap",
        "Ujian Evaluasi Kelulusan & Penerbitan Lisensi K3 TKBT Tingkat 1"
      ],
      hours: "8 JP"
    }
  ]
});
console.log('Enhanced TKBT 1');

// 5. Confined Space Madya
replaceSyllabusAndMeta(path.join(dir, 'pelatihan-petugas-k3-madya-ruang-terbatas-confined-space-kemnaker.ts'), {
  description: "Pelatihan Petugas K3 Madya Ruang Terbatas (Standby Person) Sertifikasi Kemnaker RI durasi 3 Hari. Kuasai prosedur izin kerja confined space, pemantauan pekerja dari luar lubang manhole, komunikasi darurat, dan lisensi SIO resmi.",
  answer: "Pelatihan Petugas K3 Madya Ruang Terbatas (Confined Space Standby Person / Attendant) Sertifikasi Kemnaker RI adalah pembinaan keselamatan berdurasi 3 hari berlandaskan Surat Edaran dan Standar Kompetensi Kemnaker RI. Petugas Madya bertugas khusus berjaga di luar lubang masuk manhole, mengendalikan lembar izin masuk, memantau kondisi personil di dalam tangki, dan memicu evakuasi non-entry saat terjadi kondisi darurat.",
  legalBasis: "Keputusan Direktur Jenderal Pembinaan Pengawasan Ketenagakerjaan No. KEP.113/DJPPK/IX/2006 tentang Pedoman Teknis K3 Ruang Terbatas",
  highlights: [
    "Durasi Pembinaan: 3 Hari Kerja Terjadwal",
    "Dasar Hukum Acuan: Kepdirjen Binwasnaker No. KEP.113/DJPPK/IX/2006",
    "Jalur Sertifikasi: Sertifikat Pembinaan & Lisensi Petugas Madya Ruang Terbatas Kemnaker RI",
    "Fokus Pembelajaran: Standby Person Duty, Log Sheet Masuk, Deteksi Gas & Evakuasi Non-Entry"
  ],
  certificationOutput: [
    "Sertifikat Pembinaan Petugas K3 Madya Ruang Terbatas resmi Kemnaker RI",
    "Surat Keputusan Penunjukan Lisensi K3 Ruang Terbatas",
    "Kartu Lisensi Kewenangan (SIO) Petugas Madya Confined Space Kemnaker RI"
  ],
  syllabusModules: [
    {
      module: "Modul 01: Regulasi Ruang Terbatas & Izin Kerja (Permit to Work)",
      topics: [
        "Kriteria Ruang Terbatas (Confined Space) & Bahaya Atmosfer Berbahaya",
        "Tanggung Jawab Hukum Petugas Madya (Standby Person) vs Petugas Utama (Entrant)",
        "Prosedur Penerbitan dan Penutupan Confined Space Entry Permit"
      ],
      hours: "6 JP"
    },
    {
      module: "Modul 02: Monitoring Keselamatan di Luar Manhole & Komunikasi",
      topics: [
        "Pengawasan Akses Keluar-Masuk Personel & Log Sheet Pencatatan",
        "Prinsip Kerja Gas Detector Multi-Gas dan Pembacaan Parameter Alarm",
        "Sistem Komunikasi Verbal & Sinyal Tali Pengaman antara Standby Person dan Entrant"
      ],
      hours: "10 JP"
    },
    {
      module: "Modul 03: Prosedur Evakuasi Non-Entry & Ujian SIO Kemnaker",
      topics: [
        "Pengoperasian Tripod, Winch Retractable, dan Tali Penyelamat Tanpa Masuk Lubang",
        "Simulasi Koordinasi Tanggap Darurat dengan Tim Penyelamat Eksternal",
        "Ujian Evaluasi Kelulusan & Penerbitan Lisensi Petugas Madya Kemnaker"
      ],
      hours: "8 JP"
    }
  ]
});
console.log('Enhanced Confined Space Madya');

// 6. Confined Space Utama
replaceSyllabusAndMeta(path.join(dir, 'pelatihan-petugas-k3-utama-ruang-terbatas-confined-space-kemnaker.ts'), {
  description: "Pelatihan Petugas K3 Utama Ruang Terbatas (Entrant) Sertifikasi Kemnaker RI durasi 5 Hari. Kuasai teknik masuk tangki confined space, uji gas atmosferik berbahaya, pemakaian SCBA, isolasi LOTO, dan lisensi SIO resmi.",
  answer: "Pelatihan Petugas K3 Utama Ruang Terbatas (Confined Space Entrant) Sertifikasi Kemnaker RI adalah pembinaan berdurasi 5 hari yang melatih personil teknis yang bertugas masuk dan bekerja di dalam tangki, bejana, terowongan, atau ruang terbatas lainnya. Materi mencakup pemantauan mandiri gas atmosfer (O2, LEL, H2S, CO), isolasi energi LOTO, ventilasi mekanis blower, pemakaian Self-Contained Breathing Apparatus (SCBA), serta teknik penyelamatan diri.",
  legalBasis: "Keputusan Direktur Jenderal Pembinaan Pengawasan Ketenagakerjaan No. KEP.113/DJPPK/IX/2006 tentang Pedoman Teknis K3 Ruang Terbatas",
  highlights: [
    "Durasi Pembinaan: 5 Hari Kerja Terjadwal",
    "Dasar Hukum Acuan: Kepdirjen Binwasnaker No. KEP.113/DJPPK/IX/2006",
    "Jalur Sertifikasi: Sertifikat Pembinaan & Lisensi Petugas Utama Ruang Terbatas Kemnaker RI",
    "Fokus Pembelajaran: Pekerja Masuk (Entrant), Pemakaian SCBA, Ventilasi Blower & Self-Rescue"
  ],
  certificationOutput: [
    "Sertifikat Pembinaan Petugas K3 Utama Ruang Terbatas resmi Kemnaker RI",
    "Surat Keputusan Penunjukan Lisensi K3 Ruang Terbatas",
    "Kartu Lisensi Kewenangan (SIO) Petugas Utama Confined Space Kemnaker RI"
  ],
  syllabusModules: [
    {
      module: "Modul 01: Analisis Bahaya Masuk Ruang Terbatas & Isolasi Energi",
      topics: [
        "Bahaya Asfiksia, Keracunan Gas Toksik, dan Ledakan Gas Mudah Terbakar",
        "Prosedur Isolasi Pipa dan Lockout Tagout (LOTO) Aliran Fluida Berbahaya",
        "Teknik Purging dan Ventilasi Mekanis (Forced Ventilation Blower)"
      ],
      hours: "12 JP"
    },
    {
      module: "Modul 02: Pengujian Gas Atmosferik & Alat Pelindung Pernapasan",
      topics: [
        "Kalibrasi dan Penggunaan Multi-Gas Detector 4-Parameter di Berbagai Kedalaman",
        "Pemakaian dan Perawatan Self-Contained Breathing Apparatus (SCBA) & Air-Line Respirator",
        "Penggunaan Full Body Harness dengan Dorsal Attachment untuk Winch Evakuasi"
      ],
      hours: "16 JP"
    },
    {
      module: "Modul 03: Praktik Masuk Lubang (Entry Simulation) & Ujian SIO",
      topics: [
        "Simulasi Masuk Ruang Terbatas Bersekat dan Bermanuver dengan SCBA",
        "Prosedur Tanggap Darurat Mandiri (Self-Rescue) saat Gas Alarm Berbunyi",
        "Ujian Praktik Lapangan dan Evaluasi Kelulusan Lisensi Petugas Utama Kemnaker RI"
      ],
      hours: "12 JP"
    }
  ]
});
console.log('Enhanced Confined Space Utama');
