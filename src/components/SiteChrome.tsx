import Link from 'next/link';
import { site, waUrl } from '@/src/lib/site';

export function Header() {
  return <header className="site-header">
    <Link href="/" className="brand" aria-label={`${site.name} — Beranda`}><span className="brand-mark">KU</span><span>Kreasi Ultimate <b>Berjaya</b></span></Link>
    <nav aria-label="Navigasi utama"><Link href="/pelatihan">Program</Link><Link href="/profesi">Profesi</Link><Link href="/regulasi-k3">Regulasi K3</Link><Link href="/panduan">Panduan</Link><Link href="/lokasi">Lokasi</Link></nav>
    <a className="button button-small" href={waUrl()}>Konsultasi</a>
  </header>;
}

export function Footer() {
  return <footer className="site-footer">
    <div><Link href="/" className="brand"><span className="brand-mark">KU</span><span>Kreasi Ultimate <b>Berjaya</b></span></Link><p>Event Organizer & Business Consultant dengan fokus informasi dan konsultasi kebutuhan Pelatihan K3.</p></div>
    <div><h2>Jelajahi</h2><Link href="/pelatihan">Program</Link><Link href="/kompetensi">Kompetensi</Link><Link href="/industri">Industri</Link><Link href="/kamus-k3">Kamus K3</Link></div>
    <div><h2>Hubungi</h2><a href={`mailto:${site.email}`}>{site.email}</a><a href={waUrl()}>{site.whatsappDisplay}</a><span>{site.phone}</span><a href={site.instagram}>Instagram</a></div>
    <div><h2>Lokasi</h2><Link href="/lokasi/sleman">Sleman · Yogyakarta</Link><Link href="/lokasi/semarang">Semarang</Link><p>Jadwal dan ketersediaan program dikonfirmasi sebelum pendaftaran.</p></div>
    <small>© 2026 {site.name}. Informasi keselamatan dan regulasi harus dibaca bersama sumber resmi.</small>
  </footer>;
}

export function Breadcrumbs({ items }: { items: { label:string; href?:string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb">{items.map((item,i)=><span key={`${item.label}-${i}`}>{item.href?<Link href={item.href}>{item.label}</Link>:item.label}{i<items.length-1 && <b>/</b>}</span>)}</nav>;
}
