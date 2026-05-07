import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "snapshots.db");

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (db) return db;
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
  db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS snapshots (
      id          TEXT PRIMARY KEY,
      created_at  TEXT NOT NULL,
      name        TEXT NOT NULL,
      role        TEXT NOT NULL,
      industry    TEXT,
      experience  TEXT NOT NULL,
      email       TEXT NOT NULL,
      concern     TEXT
    )
  `);
  return db;
}

export { getDb };
