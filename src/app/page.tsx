import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

const testimonials = [
  {
    name: "Priya Sharma",
    city: "Mumbai",
    rating: 5,
    quote: 'Absolutely love the authentic taste of ecoNutrient\'s Sattu! It\'s fresh, nutritious, and brings back childhood memories.'
  },
  {
    name: "Rajesh Kumar",
    city: "Delhi",
    rating: 5,
    quote: 'Great quality and fast delivery. The Sattu is perfect for my morning routine – highly recommend!'
  },
  {
    name: "Anita Patel",
    city: "Bangalore",
    rating: 5,
    quote: 'Premium product at reasonable prices. The packaging is eco-friendly too. Will order again!'
  }
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Sattu",
        url: "https://econutrient.in/product/sattu",
        image: "/Sattu Images/Sattu 1.png"
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="products" className="container py-16 bg-black">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-fraunces font-bold text-white mb-4">Our Products</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-8">
            Discover our premium range of traditional Indian superfoods, crafted with care to preserve authentic flavors and nutrition.
          </p>
          <ul className="max-w-md mx-auto space-y-2 text-left text-neutral-300">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
              Stone-ground for richer aroma and texture
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
              No artificial additives or preservatives
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
              Small-batch freshness from Jamshedpur
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
              Sustainably sourced and eco-friendly packaging
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
              Rich in protein, fiber, and essential minerals
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ProductCard displayOnly={true} id="sattu" />
          {/* Add more ProductCards for other products as needed */}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </section>

      <section className="py-16 bg-neutral-900">
        <div className="container">
          <h2 className="text-3xl font-fraunces font-bold text-center text-white mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="bg-black rounded-lg p-6 shadow-sm hover:-translate-y-2 transition-all duration-300 focus-visible:ring-2 ring-brand ring-offset-2"
                tabIndex={0}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full mr-4 bg-brand flex items-center justify-center">
                    <span className="text-black font-semibold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-400">{testimonial.city}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <blockquote className="text-neutral-300 italic">"{testimonial.quote}"</blockquote>
              </article>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Review",
                "itemReviewed": {
                  "@type": "Product",
                  "name": "ecoNutrient Products"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Customers"
                },
                "reviewBody": "Excellent quality and service."
              })
            }}
          />
        </div>
      </section>
    </>
  );
}
