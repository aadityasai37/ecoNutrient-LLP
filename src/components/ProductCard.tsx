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

interface ProductCardProps {
  displayOnly?: boolean;
  id?: string;
}

export default function ProductCard({ displayOnly = false, id = "sattu" }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("1kg");

  const price = variants.find((v) => v.key === variant)!.price;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Sattu",
    image: "/Sattu Images/Sattu 1.png",
    description: "Premium quality Sattu made from roasted gram flour, rich in protein and essential nutrients.",
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock"
    }
  };

  if (displayOnly) {
    return (
      <Link href={`/product/${id}`} className="group block">
        <div className="relative aspect-square bg-neutral-100 rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
          <Image
            src="/Sattu Images/Sattu 1.png"
            alt="Sattu - Premium Quality"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-black">Sattu</h3>
          <p className="mt-2 text-neutral-600 text-sm">
            Premium quality Sattu made from roasted gram flour, rich in protein and essential nutrients.
          </p>
          <div className="mt-3 text-lg font-semibold text-brand">From ₹189</div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </Link>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <Link href={`/product/${id}`} className="block">
        <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/Sattu Images/Sattu 1.png"
            alt="Sattu - Premium Quality"
            width={300}
            height={300}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </div>
  );
}
