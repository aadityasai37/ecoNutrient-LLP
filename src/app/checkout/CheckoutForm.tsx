"use client";
import { useCartStore } from "../../store/cart";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutForm() {
  const items = useCartStore((s) => s.items);
  const router = useRouter();
  const qs = useSearchParams();

  useEffect(() => {
    // if coming from Buy Now, ensure at least one item exists
    if (qs.get("buy") && items.length === 0) {
      router.push("/");
    }
  }, [qs, items, router]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/checkout", { method: "POST", body: form });
    const data = await res.json();
    // data.redirectUrl represents payment gateway session
    router.push(data.redirectUrl);
  }

  return (
    <main className="container py-8">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <input
            name="name"
            required
            placeholder="Full Name"
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="phone"
            required
            placeholder="Phone"
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="address1"
            required
            placeholder="Address Line 1"
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="address2"
            placeholder="Address Line 2"
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="city"
            required
            placeholder="City"
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="state"
            required
            placeholder="State"
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="pincode"
            required
            placeholder="Pincode"
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="country"
            defaultValue="India"
            className="w-full border rounded px-3 py-2"
          />
          <textarea
            name="notes"
            placeholder="Order notes"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="p-4 border rounded">
          <h2 className="font-medium mb-3">Order Summary</h2>
          <ul className="space-y-2">
            {items.map((it) => (
              <li key={it.id + it.variant} className="flex justify-between">
                <span>
                  {it.name} — {it.variant} × {it.qty}
                </span>
                <span>₹{it.price * it.qty}</span>
              </li>
            ))}
          </ul>
          <button
            type="submit"
            className="mt-4 w-full px-6 py-3 rounded-md bg-brand text-white"
          >
            Proceed to Pay
          </button>
        </div>
      </form>
    </main>
  );
}
