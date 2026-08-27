import { describe, expect, it } from 'vitest';
import { indexableRecords, records } from '../src/lib/content';

const base=process.env.TEST_BASE_URL||'http://localhost:3000';
describe('rendered routes',()=>{
 it('renders representative templates and SEO endpoints',async()=>{for(const path of ['/','/pelatihan','/pelatihan/ahli-k3-umum','/profesi/hse-officer','/regulasi-k3/uu-1-1970','/lokasi/semarang','/robots.txt','/sitemap.xml','/sitemaps/pelatihan.xml']){const res=await fetch(base+path);expect(res.status,path).toBe(200)}});
 it('renders every generated detail URL without server errors',async()=>{for(let i=0;i<records.length;i+=12){const batch=records.slice(i,i+12);const results=await Promise.all(batch.map(r=>fetch(`${base}/${r.section}/${r.slug}`,{redirect:'manual'})));results.forEach((res,j)=>expect(res.status,`${batch[j].section}/${batch[j].slug}`).toBe(200))}} ,60000);
 it('publishes only indexable canonical URLs in section sitemaps',async()=>{const xml=await (await fetch(base+'/sitemaps/pelatihan.xml')).text();for(const r of records.filter(r=>r.section==='pelatihan'))expect(xml.includes(`/${r.section}/${r.slug}`)).toBe(r.indexable);expect(indexableRecords.length).toBeGreaterThan(0)});
});
