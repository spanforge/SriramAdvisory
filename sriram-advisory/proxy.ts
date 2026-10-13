import { timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

function equal(left: string, right: string) {
  const a = Buffer.from(left), b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function proxy(request: NextRequest) {
  if (process.env.SRIRAM_STAGING !== "1") return NextResponse.next();
  const headers = { "X-Robots-Tag": "noindex, nofollow", "Cache-Control": "private, no-store" };
  const username = process.env.STAGING_USERNAME;
  const password = process.env.STAGING_PASSWORD;
  // A staging deployment must fail closed until credentials are configured.
  if (!username || username.includes(":") || !password) return new NextResponse("Staging access is not configured.", { status: 503, headers });
  const token = request.headers.get("authorization")?.match(/^Basic ([A-Za-z0-9+/]+={0,2})$/iu)?.[1];
  if (token) {
    const decoded = Buffer.from(token, "base64").toString("utf8");
    if (equal(decoded, `${username}:${password}`)) {
      const response = NextResponse.next();
      for (const [name, value] of Object.entries(headers)) response.headers.set(name, value);
      return response;
    }
  }
  return new NextResponse("Sign in to view this staging site.", { status: 401, headers: { ...headers, "WWW-Authenticate": 'Basic realm="Sriram Advisory staging", charset="UTF-8"' } });
}
