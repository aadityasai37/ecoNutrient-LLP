import { useState } from "react";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";

const products = [
  { id: "sattu", name: "Sattu", price: 189, variants: ["500g", "1kg"] },
  // Add more products as needed
];

export default function ProductsPage() {
  const [filter, setFilter] = useState<"all" | "500g" | "1kg">("all");

  const filteredProducts = filter === "all" ? products : products.filter(p => p.variants.includes(filter));

  return (
    <div className="container py-16">
      <div className="mb-8">
        <Link href="/" className="text-brand hover:underline">← Back to Home</Link>
      </div>
      <h1 className="text-4xl font-fraunces font-bold text-black mb-8">Our Products</h1>

      <div className="mb-8">
        <label htmlFor="filter" className="mr-4 font-semibold">Filter by size:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value as typeof filter)}
          className="border border-neutral-300 rounded px-3 py-2"
        >
          <option value="all">All</option>
          <option value="500g">500g</option>
          <option value="1kg">1kg</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} id={product.id} />
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://econutrient.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://econutrient.in/products"
              }
            ]
          })
        }}
      />
    </div>
  );
}
