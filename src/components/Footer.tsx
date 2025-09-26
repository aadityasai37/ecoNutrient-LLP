import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer text-white mt-16 border-t-2 border-white/20">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
        <div className="pl-6 md:pl-16">
          <h4 className="font-semibold text-xl tracking-wide mb-2">ecoNutrient</h4>
          <p className="text-sm opacity-90">
            Nourishing traditions with modern convenience — discover authentic flavours crafted with care.
          </p>
        </div>
        <div className="pl-6 md:pl-16">
          <h5 className="font-semibold text-lg tracking-wide mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-brand hover:scale-105 active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="Go to Home page">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand hover:scale-105 active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="Learn about ecoNutrient">About Us</Link></li>
            <li><Link href="/backstage" className="hover:text-brand hover:scale-105 active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="View backstage content">Backstage</Link></li>
            <li><Link href="/products" className="hover:text-brand hover:scale-105 active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="Browse products">Products</Link></li>
            <li><Link href="/contact" className="hover:text-brand hover:scale-105 active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="Contact ecoNutrient">Contact</Link></li>
            <li><Link href="/track" className="hover:text-brand hover:scale-105 active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="Track your order">Track Order</Link></li>
            <li><Link href="/cart" className="hover:text-brand hover:scale-105 active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="View shopping cart">Cart</Link></li>
          </ul>
        </div>
        <div className="pl-6 md:pl-16">
          <h5 className="font-semibold text-lg tracking-wide mb-3">Legal</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/legal/privacy" className="hover:text-brand hover:scale-105 active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="Read privacy policy">Privacy Policy</Link></li>
            <li><Link href="/legal/terms" className="hover:text-brand hover:scale-105 active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="View terms of service">Terms of Service</Link></li>
            <li><Link href="/legal/returns" className="hover:text-brand hover:scale-105 active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="Learn about returns">Returns and Replacements</Link></li>
            <li><Link href="/legal/shipping" className="hover:text-brand hover:scale-105 active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="Shipping information">Shipping & Delivery</Link></li>
            <li><Link href="/legal/cancellation" className="hover:text-brand hover:scale-105 active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="Cancellation policy">Cancellation Policy</Link></li>
          </ul>
        </div>
        <div className="pl-6 md:pl-16">
          <h5 className="font-semibold text-lg tracking-wide mb-3">Contact Us</h5>
          <div className="text-sm space-y-2">
            <div><a href="mailto:info@econutrient.in" className="hover:text-brand active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="Send email to info@econutrient.in">info@econutrient.in</a></div>
            <div><a href="tel:+91-9835311210" className="hover:text-brand active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="Call +91-9835311210">+91-9835311210</a></div>
            <div><a href="https://maps.google.com/?q=Jamshedpur+Jharkhand" target="_blank" rel="noopener noreferrer" className="hover:text-brand active:scale-95 active:ring-1 active:ring-brand/50 focus-visible:ring-2 focus-visible:ring-brand ring-offset-2 transition-all duration-200" aria-label="View location on Google Maps">Jamshedpur, Jharkhand</a></div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-4 text-xs text-right">
          © 2025 Enteconutri Foods and Beverages LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
