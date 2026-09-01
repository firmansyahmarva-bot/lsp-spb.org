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
        className="button button-primary button-large"
        href={waIntentUrl(primaryIntent, context)}
        target="_blank"
        rel="noopener noreferrer"
      >
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
    <div className="trust-strip" aria-label="Jaminan Layanan & Standar Resmi">
      <div className="trust-item">
        <div className="trust-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <div className="trust-text">
          <strong>Standar Regulasi</strong>
          <small>Kemnaker RI & Skema BNSP</small>
        </div>
      </div>

      <div className="trust-item">
        <div className="trust-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>
        <div className="trust-text">
          <strong>Pre-Screening Berkas</strong>
          <small>Verifikasi Ijazah & Syarat Gratis</small>
        </div>
      </div>

      <div className="trust-item">
        <div className="trust-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        </div>
        <div className="trust-text">
          <strong>Layanan Se-Indonesia</strong>
          <small>Online & In-House Perusahaan</small>
        </div>
      </div>

      <div className="trust-item">
        <div className="trust-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <div className="trust-text">
          <strong>Konsultasi Responsif</strong>
          <small>Didampingi Tim Konsultan {site.brandName}</small>
        </div>
      </div>
    </div>
  );
}

export function InHouseCtaBox({
  title = 'Layanan In-House Training K3 Perusahaan',
  subtitle = 'Solusi pelatihan keselamatan kerja internal di lokasi fasilitas perusahaan Anda dengan jadwal fleksibel, efisiensi biaya rombongan, dan kurikulum yang diselaraskan dengan potensi bahaya operasional.',
  programName = 'Pelatihan K3 Perusahaan',
}: {
  title?: string;
  subtitle?: string;
  programName?: string;
}) {
  return (
    <section className="inhouse-cta-box" aria-labelledby="inhouse-title">
      <div className="inhouse-copy">
        <span className="eyebrow-accent">LAYANAN KHUSUS KORPORASI & B2B</span>
        <h2 id="inhouse-title">{title}</h2>
        <p>{subtitle}</p>
        <ul className="inhouse-perks">
          <li>
            <svg className="perk-check-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Efisiensi biaya rombongan untuk pelatihan kelompok karyawan internal</span>
          </li>
          <li>
            <svg className="perk-check-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Jadwal pelaksanaan fleksibel menyesuaikan kalender operasional dan shift kerja</span>
          </li>
          <li>
            <svg className="perk-check-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Studi kasus kontekstual langsung membedah fasilitas kerja dan profil bahaya perusahaan</span>
          </li>
          <li>
            <svg className="perk-check-icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Surat Penawaran Harga (SPH) resmi, silabus custom, dan kelengkapan invoice korporasi</span>
          </li>
        </ul>
      </div>

      <div className="inhouse-action-col">
        <div className="inhouse-action-card">
          <small className="inhouse-action-tag">LAYANAN KONSULTASI B2B</small>
          <h3>Ajukan Proposal & Penawaran</h3>
          <p>Diskusikan kebutuhan pelatihan internal, perkiraan peserta, dan rancangan silabus bersama konsultan kami.</p>
          <a
            className="button button-accent button-full"
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
            atau kirim email ke {site.email}
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
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <a
        className="button button-primary"
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
          className="button button-primary"
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
      <div className="section-heading">
        <span className="eyebrow">PANDUAN JALUR PESERTA</span>
        <h2 id="pathway-title">Pilih Jalur Pelatihan Sesuai Profil Anda</h2>
        <p>Kami melayani peserta individu untuk peningkatan kompetensi profesional maupun korporasi untuk pemenuhan regulasi tempat kerja.</p>
      </div>

      <div className="pathway-grid">
        <div className="pathway-card pathway-card-individual">
          <div className="pathway-badge">UNTUK INDIVIDU & FRESH GRADUATE</div>
          <h3>Jalur Profesional & Fresh Graduate</h3>
          <p>
            Tingkatkan kualifikasi karir HSE Anda dengan sertifikat resmi pembinaan K3 yang diakui industri nasional.
          </p>
          <ul className="pathway-list">
            <li>Terbuka untuk lulusan minimal D3/S1 semua jurusan</li>
            <li>Metode Blended Online interaktif fleksibel</li>
            <li>Sertifikat Pembinaan berlaku seumur hidup</li>
            <li>Bimbingan pre-screening berkas pendaftaran gratis</li>
          </ul>
          <div className="pathway-actions">
            <Link className="button button-primary button-full" href="/pelatihan/ahli-k3-umum">
              Lihat Program Ahli K3 Umum →
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
            Penuhi kewajiban hukum P2K3, audit SMK3 (PP 50/2012), dan kualifikasi tender proyek dengan pelatihan tim internal.
          </p>
          <ul className="pathway-list">
            <li>Penerbitan Surat Keputusan Penunjukan (SKP) & Lisensi K3</li>
            <li>Jadwal & lokasi fleksibel (On-site di fasilitas perusahaan)</li>
            <li>Efisiensi biaya paket grup / rombongan karyawan</li>
            <li>Surat Penawaran Harga (SPH) & invoice corporate resmi</li>
          </ul>
          <div className="pathway-actions">
            <a
              className="button button-accent button-full"
              href={waIntentUrl('perusahaan', 'Konsultasi Korporasi')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Konsultasi Pelatihan Perusahaan →
            </a>
            <Link className="card-link" href="/perbandingan/bnsp-vs-kemnaker">
              Pelajari Kebutuhan Regulasi Kemnaker →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
