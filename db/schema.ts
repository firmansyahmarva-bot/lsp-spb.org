export const schemaStatements = [
 `CREATE TABLE IF NOT EXISTS entities (id TEXT PRIMARY KEY, type TEXT NOT NULL, slug TEXT NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, data_json TEXT NOT NULL DEFAULT '{}', status TEXT NOT NULL DEFAULT 'draft', created_at TEXT NOT NULL, updated_at TEXT NOT NULL)`,
 `CREATE UNIQUE INDEX IF NOT EXISTS idx_entities_type_slug ON entities(type, slug)`,
 `CREATE INDEX IF NOT EXISTS idx_entities_status ON entities(status)`,
 `CREATE TABLE IF NOT EXISTS relationships (id TEXT PRIMARY KEY, from_id TEXT NOT NULL, to_id TEXT NOT NULL, relation_type TEXT NOT NULL, weight INTEGER NOT NULL DEFAULT 1, FOREIGN KEY(from_id) REFERENCES entities(id), FOREIGN KEY(to_id) REFERENCES entities(id))`,
 `CREATE UNIQUE INDEX IF NOT EXISTS idx_relationship_unique ON relationships(from_id,to_id,relation_type)`,
 `CREATE INDEX IF NOT EXISTS idx_relationship_from ON relationships(from_id,relation_type)`,
 `CREATE TABLE IF NOT EXISTS sources (id TEXT PRIMARY KEY, entity_id TEXT NOT NULL, title TEXT NOT NULL, publisher TEXT, url TEXT NOT NULL, verified_at TEXT NOT NULL, confidence TEXT NOT NULL, FOREIGN KEY(entity_id) REFERENCES entities(id))`,
 `CREATE INDEX IF NOT EXISTS idx_sources_entity ON sources(entity_id)`,
 `CREATE TABLE IF NOT EXISTS indexation_decisions (entity_id TEXT PRIMARY KEY, indexable INTEGER NOT NULL DEFAULT 0, reasons_json TEXT NOT NULL DEFAULT '[]', content_hash TEXT, reviewed_at TEXT NOT NULL, FOREIGN KEY(entity_id) REFERENCES entities(id))`,
 `CREATE TABLE IF NOT EXISTS batches (id TEXT PRIMARY KEY, program_id TEXT NOT NULL, venue_id TEXT, starts_at TEXT NOT NULL, ends_at TEXT NOT NULL, status TEXT NOT NULL, price_amount INTEGER, currency TEXT, capacity INTEGER, source_id TEXT, FOREIGN KEY(program_id) REFERENCES entities(id))`,
 `CREATE INDEX IF NOT EXISTS idx_batches_program_status ON batches(program_id,status)`,
 `CREATE TABLE IF NOT EXISTS redirects (source_path TEXT PRIMARY KEY, destination_path TEXT NOT NULL, permanent INTEGER NOT NULL DEFAULT 1, active INTEGER NOT NULL DEFAULT 1)`
] as const;
