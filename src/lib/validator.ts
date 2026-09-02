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

const normalize = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

const pageBody = (record: ContentRecord) =>
  [
    record.answer,
    ...record.blocks.flatMap((block) => [
      block.heading,
      ...block.paragraphs,
      ...(block.bullets || []),
    ]),
    ...record.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ].join(' ');

export function validateContentSystem(records: ContentRecord[]): ValidationResult {
  const issues: ValidationIssue[] = [];
  const keys = new Map<string, ContentRecord>();
  const indexable = records.filter((r) => r.indexable && r.status === 'published');
  const titles = new Map<string, string>();
  const intents = new Map<string, string>();
  const keywords = new Map<string, string>();
  const bodies = new Map<string, string>();
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;

  for (const record of records) {
    const key = `${record.section}/${record.slug}`;

    if (keys.has(key)) {
      issues.push({ rule: 'duplicate_key', severity: 'error', message: `Duplicate key: ${key}`, context: key });
    }
    keys.set(key, record);

    if (!sections.includes(record.section as Section)) {
      issues.push({ rule: 'invalid_section', severity: 'error', message: `Invalid section: ${record.section}`, context: key });
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(record.slug)) {
      issues.push({ rule: 'invalid_slug', severity: 'error', message: `Invalid slug: ${record.slug}`, context: key });
    }
  }

  for (const record of indexable) {
    const key = `${record.section}/${record.slug}`;
    const required = [
      ['title', record.title],
      ['description', record.description],
      ['answer', record.answer],
      ['intent', record.intent],
    ] as const;

    for (const [field, value] of required) {
      if (!value?.trim()) {
        issues.push({ rule: 'missing_required_field', severity: 'error', message: `Missing ${field}`, context: key });
      }
    }

    if (!datePattern.test(record.publishedAt) || !datePattern.test(record.updatedAt)) {
      issues.push({ rule: 'invalid_date', severity: 'error', message: 'Invalid publication date', context: key });
    }
    if (record.highlights.length < 4 || record.blocks.length < 3 || record.faqs.length < 2) {
      issues.push({ rule: 'insufficient_depth', severity: 'error', message: 'Indexable page lacks structural depth', context: key });
    }
    if (record.sources.length === 0) {
      issues.push({ rule: 'missing_sources', severity: 'error', message: 'Indexable page has no authoritative source', context: key });
    }

    const checks: Array<[string, string | undefined, Map<string, string>]> = [
      ['duplicate_title', record.title, titles],
      ['duplicate_intent', record.searchIntent || record.intent, intents],
      ['duplicate_keyword', record.primaryKeyword, keywords],
    ];
    for (const [rule, value, map] of checks) {
      if (!value) {
        issues.push({ rule: `missing_${rule.replace('duplicate_', '')}`, severity: 'warning', message: `Missing SEO field on ${key}`, context: key });
        continue;
      }
      const normalized = normalize(value);
      const previous = map.get(normalized);
      if (previous) {
        issues.push({ rule, severity: 'error', message: `${key} duplicates ${previous}`, context: key });
      } else {
        map.set(normalized, key);
      }
    }

    const normalizedBody = normalize(pageBody(record));
    const previousBody = bodies.get(normalizedBody);
    if (previousBody) {
      issues.push({ rule: 'duplicate_body', severity: 'error', message: `${key} duplicates ${previousBody}`, context: key });
    } else {
      bodies.set(normalizedBody, key);
    }

    for (const related of record.related) {
      const target = records.find((candidate) => `${candidate.section}/${candidate.slug}` === related);
      if (!target) {
        issues.push({ rule: 'broken_internal_link', severity: 'error', message: `Broken link to ${related}`, context: key });
      } else if (!target.indexable) {
        issues.push({ rule: 'link_to_quarantined_page', severity: 'error', message: `Related link targets noindex page ${related}`, context: key });
      }
    }
  }

  return {
    valid: !issues.some((issue) => issue.severity === 'error'),
    totalRecords: records.length,
    indexableCount: indexable.length,
    issues,
  };
}
