"use client";
import { useSearchParams } from "next/navigation";

export default function PaymentResultForm() {
  const qs = useSearchParams();
  const status = qs.get("status");
  const orderId = qs.get("orderId");

  return (
    <main className="container py-12 text-center">
      {status === "success" ? (
        <div>
          <h1 className="text-3xl font-semibold">Payment Successful</h1>
          <p className="mt-2">Order Number: {orderId}</p>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-semibold">Payment Failed</h1>
          <p className="mt-2">Please try again.</p>
        </div>
      )}
    </main>
  );
}
