"use client";
import Link from "next/link";
import CartBadge from "./CartBadge";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-header shadow-sm">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="tracking-wider font-semibold text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
          ecoNutrient
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary Navigation">
          <Link href="/about" className="hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
            About Us
          </Link>
          <Link href="/backstage" className="hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
            Backstage
          </Link>
          <Link href="/contact" className="hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
            Contact Us
          </Link>
          <Link href="/track" className="hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
            Track Package
          </Link>
        </nav>
        <Link href="/cart" aria-label="Shopping cart" className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
          <span>Cart</span>
          <CartBadge />
        </Link>
      </div>
    </header>
  );
}
