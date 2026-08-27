import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/src/components/SiteChrome';
import { sectionLabels, sectionRecords, sections } from '@/src/lib/content';

export function generateStaticParams(){ return sections.map(section=>({section})); }
export async function generateMetadata({params}:{params:Promise<{section:string}>}):Promise<Metadata>{ const {section}=await params; if(!sections.includes(section as never)) return {}; const label=sectionLabels[section]; return {title:label,description:`Jelajahi ${label.toLowerCase()} yang terstruktur, saling terhubung, dan ditinjau untuk kebutuhan K3 Indonesia.`,alternates:{canonical:`/${section}`}}; }

export default async function SectionPage({params}:{params:Promise<{section:string}>}){
 const {section}=await params; if(!sections.includes(section as never)) notFound(); const items=sectionRecords(section); const label=sectionLabels[section];
 return <main className="content-main"><Breadcrumbs items={[{label:'Beranda',href:'/'},{label}]}/><header className="hub-hero"><p className="eyebrow">PUSAT PENGETAHUAN K3</p><h1>{label}</h1><p>Temukan informasi berdasarkan entitas dan kebutuhan, bukan kumpulan kata kunci. Setiap halaman menghubungkan konsep, program, profesi, regulasi, dan langkah praktis yang relevan.</p></header><section className="record-grid" aria-label={label}>{items.map(item=><Link key={item.slug} href={`/${item.section}/${item.slug}`} className="record-card"><small>{sectionLabels[item.section]}</small><h2>{item.title}</h2><p>{item.description}</p><span>Baca selengkapnya →</span></Link>)}</section></main>;
}
