"use client";
import { useCartStore } from "../store/cart";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <Link href="/product/sattu" className="block">
        <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/Sattu Images/Sattu 1.png"
            alt="Sattu - Premium Quality"
            width={600}
            height={450}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
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
              className={`px-3 py-2 rounded border transition-all duration-300 ${
                variant === v.key
                  ? "border-brand text-brand bg-brand text-white shadow-lg scale-105"
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
            className="px-5 py-3 rounded-md border border-brand text-brand bg-brand text-white shadow-lg scale-105 hover:bg-brand hover:text-white hover:scale-105 active:scale-95 active:bg-green-600 active:border-green-600 transition-all duration-200"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              addItem({ id: "sattu", name: "Sattu", variant, price, qty: 1 });
              router.push(`/checkout?buy=sattu&variant=${variant}`);
            }}
            className="px-5 py-3 rounded-md bg-brand text-white hover:bg-brand/90 hover:scale-105 hover:shadow-lg active:scale-95 active:bg-green-600 active:shadow-xl transition-all duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
