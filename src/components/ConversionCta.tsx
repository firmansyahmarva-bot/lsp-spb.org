import Link from 'next/link';
import { site, waIntentUrl } from '@/src/lib/site';

export function HeroCta({
  primaryText = 'Konsultasi Jadwal & Pendaftaran',
  primaryIntent = 'jadwal',
  secondaryText = 'Minta Estimasi Biaya',
  secondaryIntent = 'biaya',
  context = 'Pelatihan K3',
}: {
  primaryText?: string;
  primaryIntent?: 'jadwal' | 'biaya' | 'syarat' | 'perusahaan' | 'daftar' | 'kemnaker_bnsp';
  secondaryText?: string;
  secondaryIntent?: 'jadwal' | 'biaya' | 'syarat' | 'perusahaan' | 'daftar' | 'kemnaker_bnsp';
  context?: string;
}) {
  return (
    <div className="hero-cta-group">
      <a
        className="button button-primary button-large btn-glow"
        href={waIntentUrl(primaryIntent, context)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="btn-wa-icon-wrap">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.146-.525-1.745-.722-2.868-2.502-2.955-2.617-.087-.116-.708-.941-.708-1.792s.448-1.272.607-1.446c.159-.175.347-.217.463-.217l.332.007c.115.006.27-.044.423.324.159.384.542 1.321.59 1.417.048.096.08.209.016.335-.064.126-.096.205-.191.317-.096.111-.202.248-.288.334-.096.096-.197.2-.085.391.112.191.498.822 1.069 1.331.735.656 1.355.859 1.546.955.191.096.303.08.415-.048.112-.128.479-.558.607-.749.127-.191.255-.159.431-.096.175.064 1.115.526 1.306.622.191.096.319.144.367.224.048.079.048.463-.096.868z" />
          </svg>
        </span>
        <span>{primaryText}</span>
        <svg className="btn-arrow-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
      <a
        className="button button-secondary button-large"
        href={waIntentUrl(secondaryIntent, context)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{secondaryText}</span>
      </a>
    </div>
  );
}

export function TrustStrip() {
  return (
    <div className="trust-strip" aria-label="Standar Resmi & Keunggulan Layanan">
      <div className="trust-item">
        <div className="trust-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <div className="trust-text">
          <strong>Standar Resmi Kemnaker</strong>
          <small>Sertifikat, SKP & Lisensi K3</small>
        </div>
      </div>

      <div className="trust-item">
        <div className="trust-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        </div>
        <div className="trust-text">
          <strong>Skema Kompetensi BNSP</strong>
          <small>Uji Asesmen Standar SKKNI</small>
        </div>
      </div>

      <div className="trust-item">
        <div className="trust-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        </div>
        <div className="trust-text">
          <strong>Pre-Screening Ijazah</strong>
          <small>Verifikasi Syarat Bebas Biaya</small>
        </div>
      </div>

      <div className="trust-item">
        <div className="trust-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        </div>
        <div className="trust-text">
          <strong>Layanan Se-Indonesia</strong>
          <small>Online & In-House Perusahaan</small>
        </div>
      </div>
    </div>
  );
}

export function LiveBatchHeroCard() {
  return (
    <div className="live-batch-hero-card">
      <div className="live-batch-card-glow" />
      <div className="live-batch-top">
        <div className="live-batch-badge">
          <span className="live-dot" />
          <span>BATCH BULAN INI DIBUKA</span>
        </div>
        <span className="live-cert-tag">Kemnaker RI</span>
      </div>

      <h3 className="live-batch-title">Pelatihan Ahli K3 Umum (120 JP)</h3>
      <p className="live-batch-desc">
        Program sertifikasi wajib pengurus P2K3 perusahaan berlandaskan Permenaker 02/1992.
      </p>

      <div className="live-batch-specs">
        <div className="live-spec-chip">
          <span className="live-spec-icon">⏱️</span>
          <span>120 Jam Pelajaran (12 Hari)</span>
        </div>
        <div className="live-spec-chip">
          <span className="live-spec-icon">💻</span>
          <span>Blended Online / Tatap Muka</span>
        </div>
        <div className="live-spec-chip">
          <span className="live-spec-icon">🎓</span>
          <span>Syarat Min. D3/S1 Semua Jurusan</span>
        </div>
        <div className="live-spec-chip">
          <span className="live-spec-icon">📜</span>
          <span>Sertifikat + SKP + Lisensi K3</span>
        </div>
      </div>

      <div className="live-batch-divider" />

      <div className="live-batch-perks">
        <div className="live-perk-item">
          <span className="perk-check">✓</span>
          <span>Modul Regulasi & Materi Ujian Lengkap</span>
        </div>
        <div className="live-perk-item">
          <span className="perk-check">✓</span>
          <span>Bimbingan PKL Industri & Seminar Kertas Kerja</span>
        </div>
        <div className="live-perk-item">
          <span className="perk-check">✓</span>
          <span>Evaluasi Pengawas K3 Kemnaker RI</span>
        </div>
      </div>

      <div className="live-batch-actions">
        <a
          className="button button-accent button-full btn-batch-action"
          href={waIntentUrl('jadwal', 'Ahli K3 Umum')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Konfirmasi Jadwal Batch via WA</span>
          <span aria-hidden="true">→</span>
        </a>
        <Link className="live-batch-detail-link" href="/pelatihan/ahli-k3-umum">
          Lihat Silabus Lengkap Ahli K3 Umum →
        </Link>
      </div>

      <div className="live-batch-footer-note">
        🛡️ Pre-screening berkas ijazah & konsultasi 100% gratis tanpa komitmen
      </div>
    </div>
  );
}

export function InHouseCtaBox({
  title = 'Layanan In-House Training K3 Perusahaan',
  subtitle = 'Solusi pembinaan keselamatan kerja langsung di fasilitas operasional atau pabrik perusahaan Anda dengan jadwal fleksibel, efisiensi biaya rombongan, dan kurikulum yang diselaraskan dengan potensi bahaya tempat kerja.',
  programName = 'Pelatihan K3 Perusahaan',
}: {
  title?: string;
  subtitle?: string;
  programName?: string;
}) {
  return (
    <section className="inhouse-cta-box" aria-labelledby="inhouse-title">
      <div className="inhouse-copy">
        <div className="inhouse-badge-pill">
          <span className="inhouse-badge-dot" />
          <span>SOLUSI KORPORASI & B2B</span>
        </div>
        <h2 id="inhouse-title">{title}</h2>
        <p>{subtitle}</p>
        <ul className="inhouse-perks">
          <li>
            <div className="inhouse-check-circle">✓</div>
            <div>
              <strong>Efisiensi Biaya Paket Grup:</strong> Lebih hemat untuk pelatihan tim karyawan internal secara serentak.
            </div>
          </li>
          <li>
            <div className="inhouse-check-circle">✓</div>
            <div>
              <strong>Jadwal & Lokasi Fleksibel:</strong> Waktu pelaksanaan disesuaikan dengan shift dan kalender operasional pabrik.
            </div>
          </li>
          <li>
            <div className="inhouse-check-circle">✓</div>
            <div>
              <strong>Studi Kasus Fasilitas Aktual:</strong> Membedah langsung potensi bahaya dan audit internal tempat kerja Anda.
            </div>
          </li>
          <li>
            <div className="inhouse-check-circle">✓</div>
            <div>
              <strong>Legalitas SPH & Dokumen Perusahaan:</strong> Surat Penawaran Harga (SPH) resmi, silabus custom, dan kelengkapan invoice penagihan.
            </div>
          </li>
        </ul>
      </div>

      <div className="inhouse-action-col">
        <div className="inhouse-action-card">
          <small className="inhouse-action-tag">KONSULTASI IN-HOUSE TRAINING</small>
          <h3>Ajukan Proposal & Penawaran</h3>
          <p>Diskusikan kebutuhan pelatihan internal, perkiraan peserta, dan rancangan silabus bersama konsultan kami.</p>
          <a
            className="button button-accent button-full btn-glow"
            href={waIntentUrl('perusahaan', programName)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Konsultasi In-House via WA</span>
            <span aria-hidden="true">→</span>
          </a>
          <a
            className="link-subtle"
            href={`mailto:${site.email}?subject=Permintaan%20Proposal%20In-House%20Training%20${encodeURIComponent(programName)}`}
          >
            atau kirim email RFP ke {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}

export function ConsultationBanner({
  title = 'Masih Ragu Memilih Program yang Tepat?',
  text = 'Tim konsultan PT Kreasi Ultimate Berjaya siap membantu memetakan kebutuhan kepatuhan hukum, syarat dokumen, dan estimasi biaya tanpa komitmen.',
  ctaText = 'Konsultasi Sekarang',
  intent = 'jadwal',
  context,
}: {
  title?: string;
  text?: string;
  ctaText?: string;
  intent?: 'jadwal' | 'biaya' | 'syarat' | 'perusahaan' | 'daftar' | 'kemnaker_bnsp';
  context?: string;
}) {
  return (
    <div className="consultation-banner">
      <div className="consultation-banner-copy">
        <div className="consultation-banner-tag">BIMBINGAN KONSULTASI</div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <a
        className="button button-primary btn-glow"
        href={waIntentUrl(intent, context)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{ctaText}</span>
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export function ScheduleInquiryBox({
  programTitle = 'Ahli K3 Umum',
}: {
  programTitle?: string;
}) {
  return (
    <div className="schedule-inquiry-card">
      <div className="schedule-badge">
        <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
        <span>INFO JADWAL BATCH</span>
      </div>
      <h3>Konfirmasi Jadwal Terdekat & Ketersediaan Batch</h3>
      <p>Jadwal batch kelas publik diselenggarakan secara berkala setiap bulan. Hubungi tim admisi untuk konfirmasi tanggal pembukaan batch dan persyaratan pendaftaran.</p>
      <div className="schedule-cta-row">
        <a
          className="button button-primary btn-glow"
          href={waIntentUrl('jadwal', programTitle)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Tanya Jadwal {programTitle}</span>
          <span aria-hidden="true">→</span>
        </a>
        <Link className="button button-secondary" href="/jadwal">
          Lihat Alur Pendaftaran
        </Link>
      </div>
    </div>
  );
}

export function PathwaySelector() {
  return (
    <section className="pathway-section" aria-labelledby="pathway-title">
      <div className="section-heading text-center">
        <span className="eyebrow">PANDUAN JALUR PESERTA</span>
        <h2 id="pathway-title">Pilih Jalur Pelatihan Sesuai Kebutuhan Anda</h2>
        <p className="mx-auto">Kami melayani peserta individu untuk peningkatan kompetensi karir maupun perusahaan untuk kepatuhan regulasi audit K3.</p>
      </div>

      <div className="pathway-grid">
        <div className="pathway-card pathway-card-individual">
          <div className="pathway-badge">UNTUK INDIVIDU & FRESH GRADUATE</div>
          <h3>Jalur Profesional & Fresh Graduate</h3>
          <p>
            Tingkatkan kualifikasi karir HSE Anda dengan sertifikat resmi pembinaan K3 yang diakui dan dipersyaratkan oleh industri nasional.
          </p>
          <ul className="pathway-list">
            <li>Terbuka untuk lulusan minimal D3/S1 semua jurusan</li>
            <li>Metode Blended Online interaktif fleksibel</li>
            <li>Sertifikat Pembinaan berlaku seumur hidup</li>
            <li>Bimbingan pre-screening berkas pendaftaran gratis</li>
          </ul>
          <div className="pathway-actions">
            <Link className="button button-primary button-full btn-glow" href="/pelatihan/ahli-k3-umum">
              <span>Buka Program Ahli K3 Umum</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="card-link" href="/panduan/syarat-ahli-k3-umum">
              Cek Syarat Ijazah & Dokumen →
            </Link>
          </div>
        </div>

        <div className="pathway-card pathway-card-corporate">
          <div className="pathway-badge pathway-badge-corp">UNTUK PERUSAHAAN & HRD/HSE</div>
          <h3>Jalur Korporasi & In-House Training</h3>
          <p>
            Penuhi kewajiban hukum P2K3, audit SMK3 (PP 50/2012), dan kualifikasi tender proyek dengan pelatihan tersertifikasi bagi tim internal.
          </p>
          <ul className="pathway-list">
            <li>Penerbitan Surat Keputusan Penunjukan (SKP) & Lisensi K3</li>
            <li>Jadwal & lokasi fleksibel (On-site di fasilitas perusahaan)</li>
            <li>Efisiensi biaya paket grup / rombongan karyawan</li>
            <li>Surat Penawaran Harga (SPH) & invoice corporate resmi</li>
          </ul>
          <div className="pathway-actions">
            <a
              className="button button-accent button-full btn-glow"
              href={waIntentUrl('perusahaan', 'Konsultasi Korporasi')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Konsultasi In-House Perusahaan</span>
              <span aria-hidden="true">→</span>
            </a>
            <Link className="card-link card-link-light" href="/perbandingan/bnsp-vs-kemnaker">
              Pelajari Kebutuhan Regulasi Kemnaker →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
