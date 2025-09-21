import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = await fetch("https://apiv2.shiprocket.in/v1/external/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: process.env.SHIPROCKET_EMAIL,
        password: process.env.SHIPROCKET_PASSWORD,
      }),
      cache: "no-store",
    });
    const data = await res.json();
    if (!res.ok) return NextResponse.json({ error: data }, { status: res.status });
    return NextResponse.json({ token: data.token });
  } catch (e) {
    return NextResponse.json({ error: "Shiprocket auth failed" }, { status: 500 });
  }
}
