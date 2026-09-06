import Link from 'next/link';

export function CompanyTrustCard() {
  return (
    <section className="pt-kreasi-trust-section" aria-labelledby="company-trust-heading">
      <div className="pt-kreasi-trust-container">
        {/* Left: Company Logo + Name */}
        <div className="trust-card-left">
          <div className="trust-company-logo">
            <span className="trust-logo-shield">🛡️</span>
          </div>
          <div>
            <h3 id="company-trust-heading" className="trust-company-name">
              PT Kreasi Ultimate Berjaya
            </h3>
            <p className="trust-company-tagline">
              Lembaga Pelatihan K3 Resmi & Konsultan Keselamatan Kerja Indonesia
            </p>
          </div>
        </div>

        {/* Center: Trust Metrics */}
        <div className="trust-card-metrics">
          <div className="trust-metric">
            <span className="trust-metric-value">10+</span>
            <span className="trust-metric-label">Tahun Pengalaman</span>
          </div>
          <div className="trust-metric-divider" />
          <div className="trust-metric">
            <span className="trust-metric-value">1000+</span>
            <span className="trust-metric-label">Perusahaan Klien</span>
          </div>
        </div>

        {/* Right: CTA + Links */}
        <div className="trust-card-right">
          <div className="trust-locations">
            <strong className="trust-location-label">Layanan di Semarang & Nasional:</strong>
            <div className="trust-location-links">
              <Link href="/lokasi/semarang" className="trust-location-link">
                📍 Pelatihan K3 Semarang, Jawa Tengah
              </Link>
              <Link href="/lokasi/yogyakarta" className="trust-location-link">
                📍 Kantor Pusat K3 Yogyakarta
              </Link>
              <span className="trust-location-link">
                🇮🇩 In-House Training Se-Indonesia
              </span>
            </div>
          </div>
          <div className="trust-certifications">
            <strong className="trust-cert-label">Standar & Lisensi:</strong>
            <div className="trust-cert-badges">
              <span className="trust-badge">✓ Kemnaker RI</span>
              <span className="trust-badge">✓ BNSP</span>
              <span className="trust-badge">✓ Verifikasi Resmi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
