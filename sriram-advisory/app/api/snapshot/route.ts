import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { getDb } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, role, industry, experience, email, concern } = body;

    if (!name || !role || !experience || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const db = getDb();
    const id = uuidv4();
    const created_at = new Date().toISOString();

    const stmt = db.prepare(`
      INSERT INTO snapshots (id, created_at, name, role, industry, experience, email, concern)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    stmt.run(id, created_at, name, role, industry ?? null, experience, email, concern ?? null);

    return NextResponse.json({ success: true, id });
  } catch (err) {
    console.error("[snapshot] POST error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
