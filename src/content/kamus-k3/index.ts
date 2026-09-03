import { type ContentRecord } from '../../lib/content-types';
import rec_0 from './teori-domino-heinrich';
import rec_1 from './model-swiss-cheese-james-reason';
import rec_2 from './piramida-kecelakaan-frank-bird';
import rec_3 from './analisis-akar-masalah-root-cause-analysis';
import rec_4 from './diagram-tulang-ikan-ishikawa-fishbone';
import rec_5 from './metode-analisis-bowtie-bowtie-analysis';
import rec_6 from './hierarki-pengendalian-bahaya-hierarchy-of-controls';
import rec_7 from './konsep-zero-harm-vision-zero';
import rec_8 from './budaya-keselamatan-safety-culture-ladder';
import rec_9 from './iklim-keselamatan-kerja-safety-climate';
import rec_10 from './safety-leadership-komitmen-manajemen';
import rec_11 from './tindakan-tidak-aman-unsafe-act';
import rec_12 from './kondisi-tidak-aman-unsafe-condition';
import rec_13 from './hampir-celaka-nearmiss-incident';
import rec_14 from './kecelakaan-kerja-akibat-hubungan-kerja-lti';
import rec_15 from './total-recordable-incident-rate-trir';
import rec_16 from './lost-time-incident-frequency-rate-ltifr';
import rec_17 from './tingkat-keparahan-cedera-severity-rate';
import rec_18 from './hari-kerja-hilang-lost-workdays';
import rec_19 from './analisis-tren-keselamatan-safety-trend-analysis';
import rec_20 from './leading-indicator-vs-lagging-indicator';
import rec_21 from './safety-behavior-observation-sbo';
import rec_22 from './penghentian-kerja-bahaya-stop-work-authority';
import rec_23 from './sistem-pelaporan-bahaya-karyawan-hazard-reporting';
import rec_24 from './induksi-keselamatan-safety-induction';
import rec_25 from './pertemuan-keselamatan-harian-toolbox-meeting';
import rec_26 from './izin-kerja-aman-terintegrasi-ptw-system';
import rec_27 from './rencana-tanggap-darurat-fasilitas-erp';
import rec_28 from './manajemen-perubahan-operasional-moc';
import rec_29 from './audit-keselamatan-berlapis-layered-safety-audit';
import rec_30 from './pemeriksaan-visual-5r-5s-tempat-kerja';
import rec_31 from './analisis-biaya-kecelakaan-kerja-iceberg-theory';
import rec_32 from './manajemen-keselamatan-kontraktor-csms';
import rec_33 from './penilaian-kematangan-budaya-k3';
import rec_34 from './program-insentif-pengakuan-keselamatan';
import rec_35 from './matriks-akuntabilitas-k3-pengawas';
import rec_36 from './penyelidikan-insiden-metode-5-why';
import rec_37 from './fault-tree-analysis-fta-kegagalan-sistem';
import rec_38 from './event-tree-analysis-eta-skenario-bahaya';
import rec_39 from './human-error-assessment-reduction-technique-heart';
import rec_40 from './situational-awareness-tenaga-kerja';
import rec_41 from './pola-perilaku-berisiko-risk-tolerance';
import rec_42 from './safety-walkthrough-direksi';
import rec_43 from './manajemen-jam-kerja-selamat-safe-man-hours';
import rec_44 from './standar-kualifikasi-kompetensi-personel-k3';
import rec_45 from './pengawasan-norma-k3-terpadu';
import rec_46 from './perlindungan-tenaga-kerja-rentan';
import rec_47 from './kewajiban-pengurus-tempat-kerja';
import rec_48 from './tata-kelola-dokumentasi-k3-terstandar';
import rec_49 from './prinsip-kehati-hatian-dini-precautionary-principle';
import rec_50 from './nilai-ambang-batas-nab-faktor-kimia';
import rec_51 from './konsentrasi-paparan-singkat-ktd-stel';
import rec_52 from './kadar-tertinggi-diperkenankan-c-ceiling';
import rec_53 from './paparan-rata-rata-tertimbang-waktu-twa';
import rec_54 from './toksikologi-industri-efek-dosis-respons';
import rec_55 from './bahan-kimia-karsinogenik-golongan-1';
import rec_56 from './bahan-kimia-mutagenik-teratogenik';
import rec_57 from './paparan-uap-benzena-mitigasi-leukemia';
import rec_58 from './paparan-debu-asbes-pencegahan-asbestosis';
import rec_59 from './paparan-silika-kristalin-silikosis';
import rec_60 from './toksisitas-logam-berat-timbal-pb';
import rec_61 from './toksisitas-merkuri-kerusakan-syaraf';
import rec_62 from './toksisitas-gas-karbon-monoksida-co';
import rec_63 from './toksisitas-gas-asam-sulfida-h2s';
import rec_64 from './toksisitas-gas-klorin-cl2-industri';
import rec_65 from './paparan-gas-amonia-nh3-ruang-tertutup';
import rec_66 from './paparan-senyawa-organik-volatil-vocs';
import rec_67 from './pengambilan-sampel-udara-personal-personal-air-sampling';
import rec_68 from './kaset-filter-debu-respirabel-inhalabel';
import rec_69 from './tabung-sorben-arang-aktif-pengambil-sampel-gas';
import rec_70 from './indeks-pajanan-biologi-biological-exposure-indices-bei';
import rec_71 from './pemantauan-gas-biohazard-ruang-laboratorium';
import rec_72 from './ventilasi-pembuangan-lokal-local-exhaust-ventilation-lev';
import rec_73 from './uji-efisiensi-kap-pengisap-ventilasi-hood-capture-velocity';
import rec_74 from './standar-kualitas-udara-dalam-ruang-iaq';
import rec_75 from './paparan-partikulat-pm2-5-pm10-pabrik';
import rec_76 from './paparan-uap-asam-klorida-asam-sulfat';
import rec_77 from './paparan-pelarut-toluena-xilena-cat';
import rec_78 from './pengendalian-bahaya-debu-kapas-bissinosis';
import rec_79 from './pengendalian-bahaya-debu-batubara-pneumokoniosis';
import rec_80 from './standar-higiene-fasilitas-sanitasi-pabrik';
import rec_81 from './pemeriksaan-kualitas-air-minum-pekerja';
import rec_82 from './kantin-sehat-higiene-pengolahan-pangan-industri';
import rec_83 from './pemantauan-jamur-bakteri-saluran-ac-gedung';
import rec_84 from './bahaya-aerosol-biologis-bioaerosol';
import rec_85 from './uji-fit-testing-masker-respirator-kualitatif-kuantitatif';
import rec_86 from './penyimpanan-bahan-kimia-inkompatibel';
import rec_87 from './label-bahaya-sistem-harmonisasi-global-ghs';
import rec_88 from './format-16-bab-lembar-data-keselamatan-msds';
import rec_89 from './indeks-bahaya-kesehatan-nfpa-704';
import rec_90 from './pengelolaan-reaktivitas-kimia-eksotermik';
import rec_91 from './dekontaminasi-tubuh-korban-paparan-kimia';
import rec_92 from './pengoperasian-stasiun-eyewash-emergency-shower';
import rec_93 from './pengendalian-uap-pengelasan-welding-fume';
import rec_94 from './paparan-isosianat-industri-busa-cat';
import rec_95 from './paparan-pestisida-organofosfat-perkebunan';
import rec_96 from './pengujian-kadar-oksigen-udara-kerja';
import rec_97 from './standar-kebersihan-udara-ruang-bersih-cleanroom';
import rec_98 from './pengolahan-limbah-udara-wet-scrubber';
import rec_99 from './audit-kepatuhan-higiene-industri-permenaker-05-2018';
import rec_100 from './manajemen-keselamatan-proses-psm-14-elemen';
import rec_101 from './batas-ledakan-bawah-lower-explosive-limit-lel';
import rec_102 from './batas-ledakan-atas-upper-explosive-limit-uel';
import rec_103 from './titik-nyala-flash-point-cairan-mudah-terbakar';
import rec_104 from './titik-bakar-fire-point-bahan-bakar';
import rec_105 from './suhu-swasulut-auto-ignition-temperature';
import rec_106 from './klasifikasi-area-berbahaya-hazardous-area-zonasi-atex';
import rec_107 from './peralatan-listrik-tahan-ledakan-explosion-proof-ex';
import rec_108 from './ledakan-debu-industri-dust-explosion-pentagram';
import rec_109 from './fenomena-bleve-boiling-liquid-expanding-vapor-explosion';
import rec_110 from './fenomena-vce-vapor-cloud-explosion';
import rec_111 from './fenomena-jet-fire-pool-fire-kilang';
import rec_112 from './fenomena-flash-fire-pakaian-tahan-api';
import rec_113 from './hazard-and-operability-study-hazop';
import rec_114 from './failure-mode-and-effects-analysis-fmea';
import rec_115 from './layers-of-protection-analysis-lopa';
import rec_116 from './safety-instrumented-system-sis-safety-integrity-level-sil';
import rec_117 from './katup-pengaman-tekanan-pressure-safety-valve-psv';
import rec_118 from './cakram-pecah-tekanan-rupture-disc-system';
import rec_119 from './sistem-flare-pelepasan-tekanan-darurat';
import rec_120 from './pre-startup-safety-review-pssr-checklist';
import rec_121 from './integritas-mekanikal-peralatan-kritis-mechanical-integrity';
import rec_122 from './manajemen-bahaya-reaktivitas-kimia-chemical-reactivity-hazard';
import rec_123 from './pengendalian-runaway-reaction-reaktor-kimia';
import rec_124 from './inerting-tangki-menggunakan-gas-nitrogen-n2-purging';
import rec_125 from './sistem-pendeteksi-gas-beracun-api-terintegrasi-f-g-system';
import rec_126 from './penahan-api-saluran-pipa-flame-arrester';
import rec_127 from './panel-pelepas-ledakan-bangunan-explosion-relief-venting';
import rec_128 from './sistem-pemadam-busa-curah-otomatis-deluge-foam-system';
import rec_129 from './isolasi-katup-darurat-jarak-jauh-emergency-isolation-valve-eiv';
import rec_130 from './pemodelan-sebaran-awan-gas-beracun-gas-dispersion-modeling';
import rec_131 from './zona-aman-radiasi-panas-thermal-radiation-exclusion-zone';
import rec_132 from './overpressure-wave-kerusakan-struktur-bangunan';
import rec_133 from './kuantifikasi-frekuensi-kejadian-bahaya-qra-study';
import rec_134 from './audit-kepatuhan-keselamatan-proses-kimia-terpadu';
import rec_135 from './sistem-drainase-kimia-pemisah-minyak-air-api-separator';
import rec_136 from './pengendalian-listrik-statis-pengisian-truk-tangki-bbm';
import rec_137 from './prosedur-hot-tapping-jalur-pipa-bertekanan-aktif';
import rec_138 from './kajian-kelaikan-berkelanjutan-asset-life-assessment';
import rec_139 from './penyelidikan-insiden-proses-menggunakan-metode-taproot';
import rec_140 from './sistem-ventilasi-darurat-ruang-reaktor-kimia';
import rec_141 from './pemisahan-jarak-aman-tangki-timbun-tank-separation-distance';
import rec_142 from './sistem-tanggul-pengaman-tumpahan-tangki-bund-wall-containment';
import rec_143 from './proteksi-katodik-pipa-bawah-tanah-cathodic-protection';
import rec_144 from './pengujian-korosi-akustik-emisi-pipa-tekanan-tinggi';
import rec_145 from './katup-penutup-otomatis-darurat-gas-automatic-shut-off-valve';
import rec_146 from './kajian-kelaikan-operasi-pabrik-plant-pre-commissioning';
import rec_147 from './manajemen-suku-cadang-kritis-keselamatan-safety-critical-spares';
import rec_148 from './simulasi-kegagalan-daya-total-kilang-blackout-emergency-drill';
import rec_149 from './penyusunan-safety-case-fasilitas-tingkat-bahaya-besar';
import rec_150 from './prosedur-lockout-tagout-loto-6-langkah';
import rec_151 from './gembok-pengaman-loto-hasp-multi-lock';
import rec_152 from './tag-bahaya-jangan-dioperasikan-danger-tag';
import rec_153 from './pengujian-tegangan-nol-zero-voltage-verification';
import rec_154 from './bahaya-busur-api-listrik-arc-flash-boundary';
import rec_155 from './kategori-apd-arc-flash-cal-cm2-rating';
import rec_156 from './sistem-pembumian-proteksi-protective-grounding';
import rec_157 from './penyalur-petir-konvensional-franklin-sangkar-faraday';
import rec_158 from './penyalur-petir-elektrostatis-early-streamer-emission-ese';
import rec_159 from './tahanan-pembumian-maksimum-5-ohm-grounding-resistance';
import rec_160 from './gawai-proteksi-arus-sisa-residual-current-device-rcd-gfci';
import rec_161 from './pemutus-sirkuit-udara-air-circuit-breaker-acb';
import rec_162 from './pemutus-sirkuit-casing-terpasang-molded-case-circuit-breaker-mccb';
import rec_163 from './inspeksi-termografi-titik-panas-panel-listrik-infrared-thermography';
import rec_164 from './klasifikasi-tingkat-perlindungan-enklosur-ip-rating';
import rec_165 from './pengaman-titik-operasi-mesin-point-of-operation-guarding';
import rec_166 from './tirai-sinar-sensor-keselamatan-safety-light-curtain';
import rec_167 from './saklar-interlock-pengaman-pintu-mesin-safety-interlock-switch';
import rec_168 from './tombol-penghenti-darurat-emergency-stop-mushroom-button';
import rec_169 from './kontrol-pengoperasian-dua-tangan-two-hand-control-device';
import rec_170 from './pengaman-transmisi-sabuk-roda-gigi-belt-gear-guarding';
import rec_171 from './batas-beban-kerja-aman-alat-angkat-safe-working-load-swl';
import rec_172 from './indikator-momen-beban-crane-load-moment-indicator-lmi';
import rec_173 from './sudut-angkat-kritis-sling-tali-kawat-baja-sling-angle-tension';
import rec_174 from './uji-tarik-uji-beban-lebih-proof-load-overload-test';
import rec_175 from './inspeksi-kawat-putus-sling-baja-wire-rope-broken-wires-limit';
import rec_176 from './faktor-keamanan-tali-alat-angkat-safety-factor-5-1';
import rec_177 from './penyangga-kaki-crane-outrigger-pad-ground-bearing-pressure';
import rec_178 from './katup-pengurang-tekanan-uap-pressure-reducing-valve-prv';
import rec_179 from './gelas-penduga-ketinggian-air-boiler-water-level-gauge-glass';
import rec_180 from './sistem-blowdown-otomatis-ketel-uap-automatic-boiler-blowdown';
import rec_181 from './katup-pengaman-tekanan-ganda-bejana-uap-dual-safety-relief-valve';
import rec_182 from './uji-beban-dinamis-statis-crane-angkat-crane-proof-testing';
import rec_183 from './pemeriksaan-batas-keausan-hook-kait-crane-hook-throat-opening-limit';
import rec_184 from './sistem-rem-darurat-otomatis-hoist-crane-fail-safe-electromagnetic-brake';
import rec_185 from './pengaman-batas-angkat-ketinggian-hook-upper-limit-switch-crane';
import rec_186 from './pengaman-anti-benturan-antar-crane-anti-collision-sensor-system';
import rec_187 from './perangkap-air-pemisah-kondensat-jalur-udara-kompresor-air-water-separator';
import rec_188 from './tangki-penerima-udara-kompresor-air-receiver-tank-inspection';
import rec_189 from './pemeriksaan-korosi-bawah-insulasi-pipa-uap-cui-ultrasonic-testing';
import rec_190 from './pengaman-sabuk-konveyor-tali-tarik-darurat-emergency-pull-cord-switch';
import rec_191 from './pembersih-scraping-belt-konveyor-conveyor-belt-scraper-safety';
import rec_192 from './pengaman-sensor-kecepatan-putar-konveyor-zero-speed-switch-under-speed';
import rec_193 from './pengaman-pelindung-pisau-mesin-bubut-lathe-chuck-shield-interlock';
import rec_194 from './pengaman-jarak-dudukan-gerinda-bench-grinder-tool-rest-gap-3mm';
import rec_195 from './pemeriksaan-keseimbangan-roda-gerinda-grinding-wheel-ring-test';
import rec_196 from './pengaman-pedal-kaki-mesin-stamping-shrouded-foot-pedal-guard';
import rec_197 from './pengaman-sensor-tirai-laser-mesin-tekuk-plat-press-brake-laser-guard';
import rec_198 from './sistem-interlock-kunci-terjebak-mekanikal-trapped-key-interlock-system';
import rec_199 from './pengaman-pintu-lift-interlock-mekanik-elektrik-elevator-door-interlock';
import rec_200 from './gangguan-tulang-otot-rangka-akibat-kerja-musculoskeletal-disorders-msds';
import rec_201 from './metode-penilaian-cepat-seluruh-tubuh-rapid-entire-body-assessment-reba';
import rec_202 from './metode-penilaian-cepat-anggota-tubuh-atas-rapid-upper-limb-assessment-rula';
import rec_203 from './persamaan-pengangkatan-beban-manual-standar-niosh-niosh-lifting-equation';
import rec_204 from './batas-beban-pengangkatan-yang-direkomendasikan-recommended-weight-limit-rwl';
import rec_205 from './indeks-pengangkatan-beban-berisiko-lifting-index-li';
import rec_206 from './analisis-beban-kerja-postur-owas-ovako-working-posture-analysis-system';
import rec_207 from './metode-penilaian-risiko-gerakan-berulang-job-strain-index-jsi';
import rec_208 from './penilaian-regangan-otot-ekstremitas-atas-quick-exposure-check-qec';
import rec_209 from './desain-stasiun-kerja-duduk-berdiri-ergonomis-sit-stand-workstation';
import rec_210 from './tinggi-meja-kerja-sesuai-posisi-siku-istirahat';
import rec_211 from './pencahayaan-visual-task-bebas-silau-glare-control-visual-fatigue';
import rec_212 from './penyesuaian-kursi-kerja-ergonomis-5-kaki-lumbar-support-armrest';
import rec_213 from './pencegahan-sindrom-carpal-tunnel-cts-operator-komputer';
import rec_214 from './beban-kerja-mental-karyawan-nasa-task-load-index-nasa-tlx';
import rec_215 from './kelelahan-kerja-akibat-shift-malam-circadian-rhythm-disruption';
import rec_216 from './manajemen-waktu-istirahat-mikro-micro-breaks-muscle-stretching';
import rec_217 from './ergonomi-partisipatif-lini-produksi-manufaktur';
import rec_218 from './antropometri-desain-alat-kerja-populasi-indonesia';
import rec_219 from './getaran-lengan-tangan-perkakas-gerinda-hand-arm-vibration-syndrome-havs';
import rec_220 from './getaran-seluruh-tubuh-pengemudi-alat-berat-whole-body-vibration-wbv';
import rec_221 from './pengendalian-stres-kerja-program-konseling-karyawan';
import rec_222 from './ergonomi-rumah-sakit-teknik-memindahkan-pasien-lumpuh';
import rec_223 from './ergonomi-kasir-ritel-pengurangan-putaran-pinggang-berulang';
import rec_224 from './ergonomi-pergudangan-penataan-ketinggian-rak-zona-emas-knuckle-to-shoulder';
import rec_225 from './pencegahan-nyeri-punggung-bawah-low-back-pain-mitigation';
import rec_226 from './ergonomi-pekerja-komputer-vdt-aturan-20-20-20-istirahat-mata';
import rec_227 from './alat-bantu-angkat-mekanis-vacuum-lifter-scissor-table';
import rec_228 from './penilaian-faktor-psikososial-kerja-berdasarkan-sni-9011-2021';
import rec_229 from './audit-kepatuhan-standar-ergonomi-permenaker-05-2018';
import rec_230 from './penataan-jangkauan-tangan-area-kerja-primer-sekunder';
import rec_231 from './desain-pegangan-perkakas-tangan-ergonomis-handle-diameter-grip';
import rec_232 from './pencegahan-trigger-finger-pada-pekerja-perakitan-kabel';
import rec_233 from './pencegahan-tendonitis-bahu-operator-pengangkatan-di-atas-kepala';
import rec_234 from './pengukuran-beban-kerja-fisik-menggunakan-denyut-jantung-kardiovaskular';
import rec_235 from './evaluasi-tingkat-konsumsi-oksigen-kerja-fisik-berat-vo2-max-testing';
import rec_236 from './desain-antarmuka-manusia-mesin-human-machine-interface-hmi-ergonomics';
import rec_237 from './pencegahan-kelelahan-mata-operator-ruang-kontrol-sentral-cctv-fatigue';
import rec_238 from './pengaturan-rotasi-kerja-shift-mengurangi-beban-otot-monoton';
import rec_239 from './penyediaan-matras-anti-lelah-berdiri-lama-anti-fatigue-floor-mat';
import rec_240 from './desain-jalur-lalu-lintas-pejalan-kaki-pabrik-bebas-hambatan-sandungan';
import rec_241 from './pemeriksaan-getaran-jok-kursi-operator-truk-tambang-suspensi-udara';
import rec_242 from './desain-tata-letak-tombol-darurat-yang-mudah-dijangkau-seluruh-postur';
import rec_243 from './desain-ruang-istirahat-pekerja-yang-tenang-memulihkan-stamina';
import rec_244 from './pengukuran-tingkat-kejenuhan-kerja-occupational-burnout-inventory';
import rec_245 from './program-senam-peregangan-kerja-bersama-setiap-pukul-10-14';
import rec_246 from './analisis-kesalahan-manusia-berbasis-kognitif-cognitive-work-analysis';
import rec_247 from './desain-kemasan-barang-maksimum-20-kg-untuk-angkat-manual';
import rec_248 from './pelatihan-teknik-mengangkat-beban-tekuk-lutut-punggung-lurus';
import rec_249 from './penyusunan-program-manajemen-ergonomi-terpadu-korporasi';
import rec_250 from './tetrahedron-api-bahan-bakar-panas-oksigen-reaksi-rantai';
import rec_251 from './klasifikasi-kebakaran-kelas-a-b-c-d-k-standar-nasional';
import rec_252 from './media-pemadam-serbuk-kimia-kering-dry-chemical-powder-multi-purpose';
import rec_253 from './media-pemadam-gas-karbon-dioksida-co2-clean-agent';
import rec_254 from './media-pemadam-busa-mekanik-aqueous-film-forming-foam-afff';
import rec_255 from './media-pemadam-kimia-basah-wet-chemical-kalium-asetat';
import rec_256 from './media-pemadam-gas-bersih-pengganti-halon-fm-200-novec-1230';
import rec_257 from './pemeriksaan-jarum-indikator-tekanan-tabung-apar-pressure-gauge';
import rec_258 from './metode-pengoperasian-apar-pass-pull-aim-squeeze-sweep';
import rec_259 from './jarak-jangkau-penempatan-apar-maksimum-15-meter';
import rec_260 from './jaringan-pipa-hydrant-basah-wet-riser-system-gedung';
import rec_261 from './jaringan-pipa-hydrant-kering-dry-riser-system-khusus-damkar';
import rec_262 from './pilar-hydrant-luar-halaman-gedung-outdoor-yard-hydrant-pillar';
import rec_263 from './kotak-hydrant-dalam-gedung-indoor-fire-hose-cabinet';
import rec_264 from './nozzle-pemadam-pancaran-padat-tirai-kabut-jet-spray-fog-nozzle';
import rec_265 from './kopling-selang-pemadam-standar-machino-storz';
import rec_266 from './kopling-kembar-mobil-dinas-pemadam-siamese-connection';
import rec_267 from './pompa-pemadam-utama-elektrik-pompa-cadangan-diesel';
import rec_268 from './pompa-penjaga-tekanan-pipa-hydrant-jockey-pump-system';
import rec_269 from './kepala-sprinkler-otomatis-kaca-termosensitif-glass-bulb-sprinkler';
import rec_270 from './panel-kontrol-alarm-kebakaran-utama-fire-alarm-control-panel-mcfa';
import rec_271 from './detektor-asap-optik-fotoelektrik-photoelectric-smoke-detector';
import rec_272 from './detektor-panas-temperatur-tetap-kenaikan-laju-fixed-ror-heat-detector';
import rec_273 from './detektor-api-sinar-ultraviolet-inframerah-uv-ir-flame-detector';
import rec_274 from './tombol-manual-panggil-darurat-kebakaran-manual-call-point-break-glass';
import rec_275 from './lonceng-lampu-strobo-alarm-evakuasi-gedung-strobe-siren';
import rec_276 from './kipas-tekanan-udara-positif-tangga-darurat-pressurized-stairwell-fan';
import rec_277 from './pintu-kebakaran-tahan-api-2-jam-dengan-panic-exit-device';
import rec_278 from './dinding-pemisah-kompartemen-api-fire-separation-barrier';
import rec_279 from './tanda-petunjuk-jalur-keluar-darurat-menyala-photoluminescent-exit-sign';
import rec_280 from './sistem-pemadam-busa-udara-bertekanan-tinggi-compressed-air-foam-system-cafs';
import rec_281 from './sistem-pemadam-kabut-air-bertekanan-tinggi-water-mist-system';
import rec_282 from './katup-pengendali-aliran-alarm-sprinkler-alarm-check-valve-water-motor-gong';
import rec_283 from './saklar-aliran-air-sprinkler-vane-type-water-flow-switch';
import rec_284 from './kepala-sprinkler-respon-cepat-hunian-early-suppression-fast-response-esfr';
import rec_285 from './sistem-pre-action-sprinkler-ruang-server-arsip-berharga';
import rec_286 from './sistem-pemadam-total-flooding-karbon-dioksida-tekanan-tinggi';
import rec_287 from './sistem-pemadam-gas-inert-ig-541-inergen-gas-campuran-n2-ar-co2';
import rec_288 from './katup-pelepas-tekanan-otomatis-ruang-gas-total-flooding-pressure-relief-vent';
import rec_289 from './sistem-pipa-pemadam-dapur-restoran-hood-ansulex-k-class';
import rec_290 from './sistem-tirai-air-pembatas-radiasi-dinding-tangki-water-spray-deluge-curtain';
import rec_291 from './monitor-meriam-air-busa-pemadam-kebakaran-industri-fire-water-monitor';
import rec_292 from './peredam-asap-otomatis-saluran-ducting-ac-motorized-smoke-damper';
import rec_293 from './penyekat-api-penetrasi-kabel-dinding-firestop-penetration-sealant';
import rec_294 from './kaca-jendela-tahan-api-berkawat-baja-wired-fire-rated-glass';
import rec_295 from './lampu-penerangan-darurat-mandiri-baterai-emergency-battery-light';
import rec_296 from './papan-rencana-operasi-tanggap-darurat-kebakaran-gedung-fire-safety-plan-map';
import rec_297 from './sistem-pengeras-suara-komunikasi-darurat-massal-public-address-voice-evacuation';
import rec_298 from './titik-kumpul-evakuasi-luar-ruangan-aman-emergency-assembly-point-station';
import rec_299 from './audit-kesiapan-sarana-proteksi-kebakaran-gedung-sesuai-permenaker-02-1983';
import rec_300 from './matriks-risiko-5x5-tingkat-kemungkinan-keparahan';
import rec_301 from './analisis-bahaya-awal-preliminary-hazard-analysis-pha';
import rec_302 from './what-if-analysis-untuk-tinjauan-proses-operasional';
import rec_303 from './job-safety-analysis-jsa-langkah-kerja-bertahap';
import rec_304 from './hazard-identification-risk-assessment-and-determining-controls-hiradc';
import rec_305 from './kajian-bahaya-operabilitas-hazard-and-operability-hazop';
import rec_306 from './pohon-analisis-kegagalan-logika-deduktif-fault-tree-analysis-fta';
import rec_307 from './pohon-analisis-kejadian-logika-induktif-event-tree-analysis-eta';
import rec_308 from './analisis-lapisan-perlindungan-independen-lopa';
import rec_309 from './diagram-bowtie-ancaman-top-event-penghalang-konsekuensi';
import rec_310 from './metode-investigasi-insiden-5-why-analysis';
import rec_311 from './metode-investigasi-pohon-faktor-penyebab-casual-factor-tree';
import rec_312 from './sistem-investigasi-terstruktur-taproot-root-cause-tree';
import rec_313 from './pengumpulan-bukti-fisik-posisi-bagian-kertas-saksi-4p-people';
import rec_314 from './wawancara-saksi-mata-insiden-menggunakan-teknik-kognitif';
import rec_315 from './penyusunan-tindakan-korektif-tindakan-pencegahan-capa';
import rec_316 from './audit-kepatuhan-166-kriteria-smk3-berdasarkan-pp-50-2012';
import rec_317 from './audit-sistem-manajemen-k3-berdasarkan-klausul-iso-45001';
import rec_318 from './audit-kepatuhan-kontraktor-contractor-safety-management-system-audit';
import rec_319 from './audit-keselamatan-pertambangan-smkp-minerba-audit';
import rec_320 from './audit-keselamatan-konstruksi-smkk-pupr-audit';
import rec_321 from './audit-sertifikasi-tempat-uji-kompetensi-tuk-bnsp';
import rec_322 from './penyusunan-lembar-ketidaksesuaian-audit-mayor-minor-ncr-sheet';
import rec_323 from './tinjauan-manajemen-berkala-management-review-meeting';
import rec_324 from './evaluasi-kepatuhan-regulasi-ketenagakerjaan-legal-compliance-register';
import rec_325 from './perhitungan-statistik-kecelakaan-kerja-fr-sr-safe-man-hours';
import rec_326 from './sistem-manajemen-perubahan-management-of-change-moc';
import rec_327 from './tinjauan-keselamatan-sebelum-fasilitas-beroperasi-pssr';
import rec_328 from './penyusunan-rencana-tanggap-darurat-skenario-kontinjensi-erp';
import rec_329 from './audit-kematangan-budaya-keselamatan-safety-culture-maturity-assessment';
import rec_330 from './metode-analisis-modus-kegagalan-dampak-kritis-fmeca-criticality';
import rec_331 from './kajian-kualitatif-bahaya-proses-process-hazard-analysis-pha-revalidation';
import rec_332 from './analisis-keandalan-manusia-human-reliability-assessment-hra-method';
import rec_333 from './sistem-pelaporan-kejadian-hampir-celaka-nearmiss-management-system';
import rec_334 from './metode-analisis-pohon-keputusan-keselamatan-decision-tree-safety-analysis';
import rec_335 from './pemetaan-zona-risiko-fasilitas-industri-facility-risk-contouring';
import rec_336 from './simulasi-perambatan-api-asap-berbasis-komputasi-cfd-fire-modeling';
import rec_337 from './audit-due-diligence-k3-untuk-merger-akuisisi-pabrik';
import rec_338 from './audit-kesiapan-tanggap-darurat-bencana-alam-gempa-banjir';
import rec_339 from './penyusunan-matriks-kompetensi-kebutuhan-pelatihan-k3-tna-matrix';
import rec_340 from './metode-analisis-biaya-manfaat-investasi-keselamatan-cost-benefit-safety-analysis';
import rec_341 from './penetapan-indikator-kinerja-k3-terkemuka-leading-kpi-scorecard';
import rec_342 from './audit-kepatuhan-pelabelan-lembar-data-keselamatan-kimia-ghs';
import rec_343 from './audit-keselamatan-instalasi-kelistrikan-penyalur-petir-pabrik';
import rec_344 from './audit-higiene-industri-pengukuran-faktor-fisika-kimia-kerja';
import rec_345 from './audit-ergonomi-lini-perakitan-menggunakan-video-analisis';
import rec_346 from './penyusunan-laporan-tahunan-kinerja-k3-untuk-dewan-komisaris';
import rec_347 from './audit-pemenuhan-tindakan-korektif-pasca-audit-pengawas-ketenagakerjaan';
import rec_348 from './validasi-efektivitas-barikade-fisik-dalam-diagram-bowtie';
import rec_349 from './audit-integritas-dokumen-izin-kerja-aman-terintegrasi-ptw-audit';

export const kamusK3Records: ContentRecord[] = [
  rec_0,
  rec_1,
  rec_2,
  rec_3,
  rec_4,
  rec_5,
  rec_6,
  rec_7,
  rec_8,
  rec_9,
  rec_10,
  rec_11,
  rec_12,
  rec_13,
  rec_14,
  rec_15,
  rec_16,
  rec_17,
  rec_18,
  rec_19,
  rec_20,
  rec_21,
  rec_22,
  rec_23,
  rec_24,
  rec_25,
  rec_26,
  rec_27,
  rec_28,
  rec_29,
  rec_30,
  rec_31,
  rec_32,
  rec_33,
  rec_34,
  rec_35,
  rec_36,
  rec_37,
  rec_38,
  rec_39,
  rec_40,
  rec_41,
  rec_42,
  rec_43,
  rec_44,
  rec_45,
  rec_46,
  rec_47,
  rec_48,
  rec_49,
  rec_50,
  rec_51,
  rec_52,
  rec_53,
  rec_54,
  rec_55,
  rec_56,
  rec_57,
  rec_58,
  rec_59,
  rec_60,
  rec_61,
  rec_62,
  rec_63,
  rec_64,
  rec_65,
  rec_66,
  rec_67,
  rec_68,
  rec_69,
  rec_70,
  rec_71,
  rec_72,
  rec_73,
  rec_74,
  rec_75,
  rec_76,
  rec_77,
  rec_78,
  rec_79,
  rec_80,
  rec_81,
  rec_82,
  rec_83,
  rec_84,
  rec_85,
  rec_86,
  rec_87,
  rec_88,
  rec_89,
  rec_90,
  rec_91,
  rec_92,
  rec_93,
  rec_94,
  rec_95,
  rec_96,
  rec_97,
  rec_98,
  rec_99,
  rec_100,
  rec_101,
  rec_102,
  rec_103,
  rec_104,
  rec_105,
  rec_106,
  rec_107,
  rec_108,
  rec_109,
  rec_110,
  rec_111,
  rec_112,
  rec_113,
  rec_114,
  rec_115,
  rec_116,
  rec_117,
  rec_118,
  rec_119,
  rec_120,
  rec_121,
  rec_122,
  rec_123,
  rec_124,
  rec_125,
  rec_126,
  rec_127,
  rec_128,
  rec_129,
  rec_130,
  rec_131,
  rec_132,
  rec_133,
  rec_134,
  rec_135,
  rec_136,
  rec_137,
  rec_138,
  rec_139,
  rec_140,
  rec_141,
  rec_142,
  rec_143,
  rec_144,
  rec_145,
  rec_146,
  rec_147,
  rec_148,
  rec_149,
  rec_150,
  rec_151,
  rec_152,
  rec_153,
  rec_154,
  rec_155,
  rec_156,
  rec_157,
  rec_158,
  rec_159,
  rec_160,
  rec_161,
  rec_162,
  rec_163,
  rec_164,
  rec_165,
  rec_166,
  rec_167,
  rec_168,
  rec_169,
  rec_170,
  rec_171,
  rec_172,
  rec_173,
  rec_174,
  rec_175,
  rec_176,
  rec_177,
  rec_178,
  rec_179,
  rec_180,
  rec_181,
  rec_182,
  rec_183,
  rec_184,
  rec_185,
  rec_186,
  rec_187,
  rec_188,
  rec_189,
  rec_190,
  rec_191,
  rec_192,
  rec_193,
  rec_194,
  rec_195,
  rec_196,
  rec_197,
  rec_198,
  rec_199,
  rec_200,
  rec_201,
  rec_202,
  rec_203,
  rec_204,
  rec_205,
  rec_206,
  rec_207,
  rec_208,
  rec_209,
  rec_210,
  rec_211,
  rec_212,
  rec_213,
  rec_214,
  rec_215,
  rec_216,
  rec_217,
  rec_218,
  rec_219,
  rec_220,
  rec_221,
  rec_222,
  rec_223,
  rec_224,
  rec_225,
  rec_226,
  rec_227,
  rec_228,
  rec_229,
  rec_230,
  rec_231,
  rec_232,
  rec_233,
  rec_234,
  rec_235,
  rec_236,
  rec_237,
  rec_238,
  rec_239,
  rec_240,
  rec_241,
  rec_242,
  rec_243,
  rec_244,
  rec_245,
  rec_246,
  rec_247,
  rec_248,
  rec_249,
  rec_250,
  rec_251,
  rec_252,
  rec_253,
  rec_254,
  rec_255,
  rec_256,
  rec_257,
  rec_258,
  rec_259,
  rec_260,
  rec_261,
  rec_262,
  rec_263,
  rec_264,
  rec_265,
  rec_266,
  rec_267,
  rec_268,
  rec_269,
  rec_270,
  rec_271,
  rec_272,
  rec_273,
  rec_274,
  rec_275,
  rec_276,
  rec_277,
  rec_278,
  rec_279,
  rec_280,
  rec_281,
  rec_282,
  rec_283,
  rec_284,
  rec_285,
  rec_286,
  rec_287,
  rec_288,
  rec_289,
  rec_290,
  rec_291,
  rec_292,
  rec_293,
  rec_294,
  rec_295,
  rec_296,
  rec_297,
  rec_298,
  rec_299,
  rec_300,
  rec_301,
  rec_302,
  rec_303,
  rec_304,
  rec_305,
  rec_306,
  rec_307,
  rec_308,
  rec_309,
  rec_310,
  rec_311,
  rec_312,
  rec_313,
  rec_314,
  rec_315,
  rec_316,
  rec_317,
  rec_318,
  rec_319,
  rec_320,
  rec_321,
  rec_322,
  rec_323,
  rec_324,
  rec_325,
  rec_326,
  rec_327,
  rec_328,
  rec_329,
  rec_330,
  rec_331,
  rec_332,
  rec_333,
  rec_334,
  rec_335,
  rec_336,
  rec_337,
  rec_338,
  rec_339,
  rec_340,
  rec_341,
  rec_342,
  rec_343,
  rec_344,
  rec_345,
  rec_346,
  rec_347,
  rec_348,
  rec_349
];
