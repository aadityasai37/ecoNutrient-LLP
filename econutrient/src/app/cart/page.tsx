"use client";
import { useCartStore } from "../../store/cart";
import Link from "next/link";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQty = useCartStore((s) => s.updateQty);
  const totalAmount = useCartStore((s) => s.totalAmount);

  return (
    <main className="container py-8">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((it) => (
              <li
                key={it.id + it.variant}
                className="flex items-center justify-between border rounded p-4"
              >
                <div>
                  <div className="font-medium">
                    {it.name} — {it.variant}
                  </div>
                  <div className="text-sm text-neutral-600">₹{it.price}</div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    value={it.qty}
                    onChange={(e) =>
                      updateQty(it.id, it.variant as any, Number(e.target.value))
                    }
                    className="w-16 border rounded px-2 py-1"
                  />
                  <button
                    onClick={() => removeItem(it.id, it.variant as any)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <div className="text-xl font-semibold">Total: ₹{totalAmount()}</div>
            <Link href="/checkout" className="px-6 py-3 rounded-md bg-brand text-white">
              Checkout
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
