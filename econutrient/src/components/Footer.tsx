import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer text-white mt-16">
      <div className="container grid md:grid-cols-3 gap-8 py-10">
        <div>
          <h4 className="font-semibold mb-2">ecoNutrient</h4>
          <p className="text-sm opacity-90">
            Nourishing traditions with modern convenience — discover authentic flavours crafted with care.
          </p>
        </div>
        <div>
          <h5 className="font-medium mb-2">Quick Links</h5>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/backstage">Backstage</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/track">Track Order</Link></li>
            <li><Link href="/cart">Cart</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2">Legal</h5>
          <ul className="space-y-1 text-sm">
            <li><Link href="/legal/privacy">Privacy Policy</Link></li>
            <li><Link href="/legal/terms">Terms of Service</Link></li>
            <li><Link href="/legal/returns">Returns and Replacements</Link></li>
          </ul>
          <div className="mt-4 text-sm">
            <div>info@econutrient.in</div>
            <div>+91-9835311210</div>
            <div>Jamshedpur, Jharkhand</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-4 text-xs">
          © 2025 Enteconutri Foods and Beverages LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
