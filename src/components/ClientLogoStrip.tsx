'use client';

import React from 'react';

const partners = [
  { name: 'Kemnaker RI', tag: 'Regulasi Resmi', icon: '🏛️' },
  { name: 'BNSP RI', tag: 'Sertifikasi Profesi', icon: '🦅' },
  { name: 'PT Wijaya Karya Tbk', tag: 'Konstruksi & EPC', icon: '🏗️' },
  { name: 'PT Adhi Karya Tbk', tag: 'Infrastruktur', icon: '🏢' },
  { name: 'PT Astra International', tag: 'Manufaktur & Otomotif', icon: '⚙️' },
  { name: 'PT Pertamina Subcon', tag: 'Migas & Energi', icon: '🛢️' },
  { name: 'PT Unilever Indonesia', tag: 'FMCG & Pabrik', icon: '🏭' },
  { name: 'PT Indofood CBP', tag: 'Food & Beverage', icon: '📦' },
];

export function ClientLogoStrip({ title = 'Dipercaya oleh Praktisi HSE & Perusahaan Nasional' }: { title?: string }) {
  return (
    <div className="client-trust-strip my-8">
      <div className="client-trust-head text-center mb-5">
        <span className="client-trust-label text-xs sm:text-sm font-bold tracking-wider text-slate-500 uppercase">
          {title}
        </span>
      </div>

      <div className="client-logo-grid">
        {partners.map((p, idx) => (
          <div key={idx} className="client-logo-card">
            <span className="client-logo-icon" aria-hidden="true">{p.icon}</span>
            <div className="client-logo-info">
              <strong className="client-logo-name">{p.name}</strong>
              <span className="client-logo-tag">{p.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}