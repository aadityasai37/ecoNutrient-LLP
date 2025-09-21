"use client";
import { useCartStore } from "../store/cart";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Variant = "1kg" | "500g";
const variants: { key: Variant; label: string; price: number }[] = [
  { key: "1kg", label: "1 Kg", price: 359 },
  { key: "500g", label: "500 g", price: 189 },
];

export default function ProductCard() {
  const addItem = useCartStore((s) => s.addItem);
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("1kg");

  const price = variants.find((v) => v.key === variant)!.price;

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="aspect-square bg-neutral-100 rounded-lg" />
      {/* Image guidance: Upload 1200x1200 main image; use 600x600 for thumbs; hero background 1920x1080. */}
      <div>
        <h3 className="text-2xl font-semibold">Sattu</h3>
        <p className="mt-2 text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          facilisis.
        </p>
        <div className="mt-4 flex gap-2">
          {variants.map((v) => (
            <button
              key={v.key}
              onClick={() => setVariant(v.key)}
              className={`px-3 py-2 rounded border ${
                variant === v.key
                  ? "border-brand text-brand"
                  : "border-neutral-300"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
        <div className="mt-4 text-xl font-semibold">₹{price}</div>
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => {
              addItem({ id: "sattu", name: "Sattu", variant, price, qty: 1 });
            }}
            className="px-5 py-3 rounded-md border border-brand text-brand hover:bg-brand hover:text-white transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              addItem({ id: "sattu", name: "Sattu", variant, price, qty: 1 });
              router.push(`/checkout?buy=sattu&variant=${variant}`);
            }}
            className="px-5 py-3 rounded-md bg-brand text-white hover:opacity-90 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
