import { type ContentRecord, type Section, sections } from './content-types';

export interface ValidationIssue {
  rule: string;
  severity: 'error' | 'warning';
  message: string;
  context?: string;
}

export interface ValidationResult {
  valid: boolean;
  totalRecords: number;
  indexableCount: number;
  issues: ValidationIssue[];
}

const coreRoutes = new Set(['jadwal', 'kontak', 'perusahaan', 'lokasi', 'tentang', 'sitemap']);

export function validateContentSystem(records: ContentRecord[]): ValidationResult {
  const issues: ValidationIssue[] = [];

  // 1. Total Indexable Count Check
  const indexable = records.filter(r => r.indexable && r.status === 'published');
  if (indexable.length !== 2000) {
    issues.push({
      rule: 'exact_2000_inventory',
      severity: 'error',
      message: `Expected exactly 2000 published & indexable records, found ${indexable.length}`,
    });
  }

  // 2. Duplicate Key & Slug Check
  const keyMap = new Map<string, ContentRecord>();
  const titles = new Map<string, string>();
  const intents = new Map<string, string>();
  const primaryKeywords = new Map<string, string>();
  const answers = new Map<string, string>();
  const descriptions = new Map<string, string>();

  for (const r of records) {
    const key = `${r.section}/${r.slug}`;
    if (keyMap.has(key)) {
      issues.push({
        rule: 'duplicate_key',
        severity: 'error',
        message: `Duplicate entity key detected: ${key}`,
        context: key,
      });
    } else {
      keyMap.set(key, r);
    }

    // Slug format check
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(r.slug)) {
      issues.push({
        rule: 'invalid_slug_format',
        severity: 'error',
        message: `Invalid slug format: ${r.slug} in ${r.section}`,
        context: key,
      });
    }

    // Section validity check
    if (!sections.includes(r.section as Section)) {
      issues.push({
        rule: 'invalid_section',
        severity: 'error',
        message: `Invalid section: ${r.section} for slug ${r.slug}`,
        context: key,
      });
    }

    // Duplicate Title (H1) Check
    const lowerTitle = r.title.trim().toLowerCase();
    if (titles.has(lowerTitle)) {
      issues.push({
        rule: 'duplicate_title_h1',
        severity: 'error',
        message: `Duplicate Title/H1 detected: "${r.title}" in ${key} and ${titles.get(lowerTitle)}`,
        context: key,
      });
    } else {
      titles.set(lowerTitle, key);
    }

    // Duplicate Search Intent Check
    if (r.searchIntent) {
      const lowerIntent = r.searchIntent.trim().toLowerCase();
      if (intents.has(lowerIntent)) {
        issues.push({
          rule: 'duplicate_search_intent',
          severity: 'error',
          message: `Duplicate Search Intent detected: "${r.searchIntent}" in ${key} and ${intents.get(lowerIntent)}`,
          context: key,
        });
      } else {
        intents.set(lowerIntent, key);
      }
    }

    // Duplicate Primary Keyword Check
    if (r.primaryKeyword) {
      const lowerKw = r.primaryKeyword.trim().toLowerCase();
      if (primaryKeywords.has(lowerKw)) {
        issues.push({
          rule: 'duplicate_primary_keyword',
          severity: 'error',
          message: `Duplicate Primary Keyword detected: "${r.primaryKeyword}" in ${key} and ${primaryKeywords.get(lowerKw)}`,
          context: key,
        });
      } else {
        primaryKeywords.set(lowerKw, key);
      }
    }

    // Duplicate Answer Summary Check (Similarity / Boilerplate detection)
    if (r.answer) {
      const lowerAnswer = r.answer.trim().toLowerCase();
      if (answers.has(lowerAnswer)) {
        issues.push({
          rule: 'duplicate_answer_summary',
          severity: 'error',
          message: `Duplicate Answer summary detected: "${r.answer.substring(0, 40)}..." in ${key} and ${answers.get(lowerAnswer)}`,
          context: key,
        });
      } else {
        answers.set(lowerAnswer, key);
      }
    }

    // Duplicate Description Check
    if (r.description) {
      const lowerDesc = r.description.trim().toLowerCase();
      if (descriptions.has(lowerDesc)) {
        issues.push({
          rule: 'duplicate_description',
          severity: 'error',
          message: `Duplicate Description detected: "${r.description.substring(0, 40)}..." in ${key} and ${descriptions.get(lowerDesc)}`,
          context: key,
        });
      } else {
        descriptions.set(lowerDesc, key);
      }
    }

    // Date Validation
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!r.publishedAt || !dateRegex.test(r.publishedAt)) {
      issues.push({
        rule: 'invalid_published_at',
        severity: 'error',
        message: `Invalid or missing publishedAt in ${key}: ${r.publishedAt}`,
        context: key,
      });
    }
    if (!r.updatedAt || !dateRegex.test(r.updatedAt)) {
      issues.push({
        rule: 'invalid_updated_at',
        severity: 'error',
        message: `Invalid or missing updatedAt in ${key}: ${r.updatedAt}`,
        context: key,
      });
    }

    // Content Quality Invariants
    if (!r.description || r.description.length < 30) {
      issues.push({
        rule: 'short_description',
        severity: 'error',
        message: `Description too short in ${key} (< 30 chars)`,
        context: key,
      });
    }
    if (!r.answer || r.answer.length < 50) {
      issues.push({
        rule: 'short_answer',
        severity: 'error',
        message: `Answer summary too short in ${key} (< 50 chars)`,
        context: key,
      });
    }
    if (!r.highlights || r.highlights.length < 3) {
      issues.push({
        rule: 'insufficient_highlights',
        severity: 'error',
        message: `Highlights count < 3 in ${key}`,
        context: key,
      });
    }
    if (!r.blocks || r.blocks.length < 2) {
      issues.push({
        rule: 'insufficient_blocks',
        severity: 'error',
        message: `Content blocks count < 2 in ${key}`,
        context: key,
      });
    }

    // FAQs Quality Check
    if (!r.faqs || r.faqs.length < 2) {
      issues.push({
        rule: 'insufficient_faqs',
        severity: 'error',
        message: `FAQs count < 2 in ${key}`,
        context: key,
      });
    } else {
      for (const faq of r.faqs) {
        if (!faq.question || faq.question.trim().length < 10) {
          issues.push({
            rule: 'invalid_faq_question',
            severity: 'error',
            message: `FAQ question empty or too short in ${key}`,
            context: key,
          });
        }
        if (!faq.answer || faq.answer.trim().length < 15) {
          issues.push({
            rule: 'invalid_faq_answer',
            severity: 'error',
            message: `FAQ answer empty or too short in ${key}`,
            context: key,
          });
        }
      }
    }

    // Thin Content Check (< 500 body words)
    const bodyText = [
      r.title,
      r.description,
      r.answer,
      ...(r.highlights || []),
      ...(r.blocks || []).flatMap(b => [b.heading, ...(b.paragraphs || []), ...(b.bullets || [])]),
      ...(r.faqs || []).flatMap(f => [f.question, f.answer])
    ].join(' ');
    const wordCount = bodyText.split(/\s+/).filter(Boolean).length;
    if (wordCount < 500) {
      issues.push({
        rule: 'thin_content',
        severity: 'warning',
        message: `thin_content: Word count ${wordCount} < 500 in ${r.section}/${r.slug}`,
        context: key,
      });
    }

    // Contextual CTA Check
    if (!r.primaryCtaText || r.primaryCtaText.trim().length === 0) {
      issues.push({
        rule: 'missing_primary_cta',
        severity: 'error',
        message: `Missing primaryCtaText in ${key}`,
        context: key,
      });
    }

    // Hero Image Completeness Check
    if (!r.image || !r.image.src || r.image.src.trim().length === 0) {
      issues.push({
        rule: 'missing_hero_image',
        severity: 'error',
        message: `Missing hero image in ${key}`,
        context: key,
      });
    }

    // Related Links Resolution
    for (const rel of r.related) {
      if (coreRoutes.has(rel)) {
        continue;
      }
      const [s, sl] = rel.split('/');
      const target = records.find(x => x.section === s && x.slug === sl);
      if (!target) {
        issues.push({
          rule: 'broken_internal_link',
          severity: 'error',
          message: `Broken related entity link: ${key} -> ${rel}`,
          context: key,
        });
      }
    }
  }

  // Near-Duplicate Template Check (8-word shingle Jaccard >= 0.35 within same cannibalizationGroup)
  const groupMap = new Map<string, { key: string; text: string; shingles: Set<string> }[]>();
  for (const r of records) {
    if (!r.cannibalizationGroup) continue;
    const key = `${r.section}/${r.slug}`;
    const text = [
      r.title,
      r.description,
      r.answer,
      ...(r.highlights || []),
      ...(r.blocks || []).flatMap(b => [b.heading, ...(b.paragraphs || []), ...(b.bullets || [])]),
      ...(r.faqs || []).flatMap(f => [f.question, f.answer])
    ].join(' ');
    const item = { key, text, shingles: getShingles(text) };
    if (!groupMap.has(r.cannibalizationGroup)) {
      groupMap.set(r.cannibalizationGroup, []);
    }
    groupMap.get(r.cannibalizationGroup)!.push(item);
  }

  for (const [group, items] of groupMap.entries()) {
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        const sim = jaccardSimilarity(items[i].shingles, items[j].shingles);
        if (sim >= 0.35) {
          issues.push({
            rule: 'near_duplicate_template',
            severity: 'warning',
            message: `near_duplicate_template: Jaccard similarity ${sim.toFixed(2)} >= 0.35 between ${items[i].key} and ${items[j].key} in ${group}`,
            context: items[i].key,
          });
        }
      }
    }
  }

  const errors = issues.filter(i => i.severity === 'error');
  return {
    valid: errors.length === 0,
    totalRecords: records.length,
    indexableCount: indexable.length,
    issues,
  };
}

function getShingles(text: string, k: number = 8): Set<string> {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  const shingles = new Set<string>();
  for (let i = 0; i <= words.length - k; i++) {
    shingles.add(words.slice(i, i + k).join(' '));
  }
  return shingles;
}

function jaccardSimilarity(setA: Set<string>, setB: Set<string>): number {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}
