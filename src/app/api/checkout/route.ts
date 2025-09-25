import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const orderId = "EN-" + crypto.randomUUID().split("-")[0];

  // TODO: Persist order in DB and attach cart snapshot
  // Simulate payment gateway redirect URL
  const redirectUrl = `/payment/result?status=success&orderId=${orderId}`;

  // After real payment success on server webhook:
  // await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/shiprocket/create-order", { method: "POST", body: JSON.stringify(orderPayload) });

  return NextResponse.json({ orderId, redirectUrl });
}
