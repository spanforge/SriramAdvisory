import { NextRequest, NextResponse } from "next/server";

const CASHFREE_BASE_URL =
  process.env.CASHFREE_ENV === "production"
    ? "https://api.cashfree.com/pg/orders"
    : "https://sandbox.cashfree.com/pg/orders";

export async function POST(req: NextRequest) {
  if (!process.env.CASHFREE_APP_ID || !process.env.CASHFREE_SECRET_KEY) {
    console.error("Cashfree env vars missing - CASHFREE_APP_ID or CASHFREE_SECRET_KEY not set");
    return NextResponse.json({ error: "Payment gateway not configured" }, { status: 500 });
  }

  const body = await req.json();
  const { productName, amount, name, email, phone } = body;

  if (!productName || !amount || !name || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const parsedAmount = parseFloat(amount);
  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
  }

  const rawPhone = String(phone ?? "").replace(/\D/g, "");
  const customerPhone = rawPhone.length >= 10 ? rawPhone.slice(-10) : "9000000000";
  const orderNote = String(productName).trim().slice(0, 450);
  const orderId = `SA_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

  try {
    const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000").replace(
      /^http:\/\//,
      process.env.CASHFREE_ENV === "production" ? "https://" : "http://"
    );

    const response = await fetch(CASHFREE_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": process.env.CASHFREE_APP_ID,
        "x-client-secret": process.env.CASHFREE_SECRET_KEY,
        "x-api-version": "2023-08-01",
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: parsedAmount,
        order_currency: "INR",
        customer_details: {
          customer_id: `cust_${Date.now()}`,
          customer_name: name.trim().slice(0, 100),
          customer_email: email.trim().slice(0, 200),
          customer_phone: customerPhone,
        },
        order_meta: {
          return_url: `${baseUrl}/payment-status?order_id={order_id}&product=${encodeURIComponent(productName)}`,
        },
        order_note: orderNote,
      }),
    });

    let data: Record<string, unknown>;
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.error("Cashfree returned non-JSON:", text);
      return NextResponse.json({ error: "Unexpected response from payment gateway" }, { status: 502 });
    }

    if (!response.ok) {
      console.error("Cashfree order creation failed:", JSON.stringify(data, null, 2));
      const cfMessage =
        (data.message as string) ||
        (data.error as string) ||
        "Order creation failed";
      return NextResponse.json({ error: cfMessage, details: data }, { status: response.status });
    }

    return NextResponse.json({ payment_session_id: data.payment_session_id, order_id: orderId });
  } catch (err) {
    console.error("Cashfree fetch error:", err);
    return NextResponse.json({ error: "Could not reach payment gateway" }, { status: 503 });
  }
}
