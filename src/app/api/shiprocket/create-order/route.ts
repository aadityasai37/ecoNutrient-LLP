import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const auth = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/shiprocket/auth", { method: "POST" });
    const { token } = await auth.json();

    const res = await fetch("https://apiv2.shiprocket.in/v1/external/orders/create/adhoc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) return NextResponse.json({ error: data }, { status: res.status });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Shiprocket order failed" }, { status: 500 });
  }
}
