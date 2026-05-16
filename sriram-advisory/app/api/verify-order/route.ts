import { NextRequest, NextResponse } from "next/server";

const CASHFREE_BASE_URL =
  process.env.CASHFREE_ENV === "production"
    ? "https://api.cashfree.com/pg/orders"
    : "https://sandbox.cashfree.com/pg/orders";

export async function GET(req: NextRequest) {
  const orderId = req.nextUrl.searchParams.get("order_id");

  if (!orderId) {
    return NextResponse.json({ error: "Missing order_id" }, { status: 400 });
  }

  const response = await fetch(`${CASHFREE_BASE_URL}/${encodeURIComponent(orderId)}`, {
    method: "GET",
    headers: {
      "x-client-id": process.env.CASHFREE_APP_ID!,
      "x-client-secret": process.env.CASHFREE_SECRET_KEY!,
      "x-api-version": "2023-08-01",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to fetch order", details: data }, { status: 500 });
  }

  return NextResponse.json({ order_status: data.order_status });
}
