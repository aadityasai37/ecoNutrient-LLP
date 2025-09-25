"use client";
import { useCartStore } from "../../../store/cart";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Variant = "1kg" | "500g";
const variants: { key: Variant; label: string; price: number }[] = [
  { key: "1kg", label: "1 Kg", price: 359 },
  { key: "500g", label: "500 g", price: 189 },
];

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const addItem = useCartStore((s) => s.addItem);
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("1kg");
  const [selectedImage, setSelectedImage] = useState(0);

  const price = variants.find((v) => v.key === variant)!.price;

  const productImages = [
    "/Sattu Images/Sattu 1.png",
    "/Sattu Images/Sattu 2.png",
    "/Sattu Images/Sattu 3.png",
    "/Sattu Images/Sattu 4.jpg"
  ];

  const productDetails = {
    name: "Sattu",
    description: "Premium quality Sattu made from roasted gram flour, rich in protein and essential nutrients. Perfect for traditional Indian beverages and healthy recipes.",
    features: [
      "High in protein and fiber",
      "Rich in essential minerals",
      "No preservatives or additives",
      "Traditionally stone-ground",
      "Perfect for Sattu drink and recipes"
    ],
    nutrition: {
      protein: "22g per 100g",
      fiber: "8g per 100g",
      iron: "4.5mg per 100g",
      calcium: "80mg per 100g"
    }
  };

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Link
          href="/"
          className="text-brand hover:underline"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
            <Image
              src={productImages[selectedImage]}
              alt={productDetails.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square bg-neutral-100 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? "border-brand" : "border-transparent"
                }`}
              >
                <Image
                  src={image}
                  alt={`${productDetails.name} ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{productDetails.name}</h1>
            <p className="text-neutral-600 text-lg">{productDetails.description}</p>
          </div>

          {/* Variant Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Select Size</h3>
            <div className="flex gap-2">
              {variants.map((v) => (
                <button
                  key={v.key}
                  onClick={() => setVariant(v.key)}
                  className={`px-4 py-2 rounded border ${
                    variant === v.key
                      ? "border-brand text-brand bg-brand/10"
                      : "border-neutral-300 hover:border-brand"
                  }`}
                >
                  {v.label} - ₹{v.price}
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2">
              {productDetails.features.map((feature, index) => (
                <li key={index} className="flex items-center text-neutral-600">
                  <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Nutritional Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-600">Protein:</span>
                <span className="font-semibold">{productDetails.nutrition.protein}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Fiber:</span>
                <span className="font-semibold">{productDetails.nutrition.fiber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Iron:</span>
                <span className="font-semibold">{productDetails.nutrition.iron}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Calcium:</span>
                <span className="font-semibold">{productDetails.nutrition.calcium}</span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold">₹{price}</div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => {
                addItem({ id: "sattu", name: "Sattu", variant, price, qty: 1 });
              }}
              className="flex-1 px-6 py-3 rounded-md border border-brand text-brand hover:bg-brand hover:text-white transition-all duration-200"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                addItem({ id: "sattu", name: "Sattu", variant, price, qty: 1 });
                router.push(`/checkout?buy=sattu&variant=${variant}`);
              }}
              className="flex-1 px-6 py-3 rounded-md bg-brand text-white hover:bg-brand/90 transition-all duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
