import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main id="shop" className="container py-12">
        <ProductCard />
      </main>
    </>
  );
}
