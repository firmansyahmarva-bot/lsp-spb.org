import { describe, expect, it } from 'vitest';
import { records, indexableRecords, sections, findRecord } from '../src/lib/content';

describe('SEO content inventory',()=>{
 it('has a substantive structured launch inventory',()=>{expect(records.length).toBeGreaterThan(200);expect(indexableRecords.length).toBeGreaterThan(175)});
 it('has unique canonical entity keys and titles',()=>{const keys=records.map(r=>`${r.section}/${r.slug}`);expect(new Set(keys).size).toBe(keys.length);const titles=indexableRecords.map(r=>r.title.toLowerCase());expect(new Set(titles).size).toBe(titles.length)});
 it('uses safe slugs and valid sections',()=>{for(const r of records){expect(sections).toContain(r.section);expect(r.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);expect(r.title).not.toMatch(/undefined|null|placeholder/i)}});
 it('requires sufficient modules before indexation',()=>{for(const r of indexableRecords){expect(r.description.length).toBeGreaterThan(50);expect(r.answer.length).toBeGreaterThan(130);expect(r.highlights.length).toBeGreaterThanOrEqual(4)}});
 it('keeps unimplemented tools out of the index',()=>{expect(records.filter(r=>r.section==='alat'&&r.slug!=='matriks-risiko').every(r=>!r.indexable)).toBe(true);expect(findRecord('alat','matriks-risiko')?.indexable).toBe(true)});
 it('resolves contextual relationships',()=>{for(const r of indexableRecords){for(const path of r.related){const [section,slug]=path.split('/');expect(findRecord(section,slug),`${r.section}/${r.slug} -> ${path}`).toBeTruthy()}}});
 it('requires official URLs for indexable regulations',()=>{for(const r of indexableRecords.filter(r=>r.section==='regulasi-k3'))expect(r.sourceUrl).toMatch(/^https:\/\//)});
});
