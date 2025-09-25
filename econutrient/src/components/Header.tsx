"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CartBadge from "./CartBadge";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 shadow-sm transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-70 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ml-8"
        >
          <img
            src="/Header_Logo_2.png"
            alt="ecoNutrient"
            className="h-12 w-auto"
          />
        </Link>
        <nav
          className="hidden md:flex items-center gap-6 ml-auto"
          aria-label="Primary Navigation"
        >
          <Link
            href="/"
            className="font-bold text-black hover:text-brand hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-bold text-black hover:text-brand hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            About Us
          </Link>
          <Link
            href="/backstage"
            className="font-bold text-black hover:text-brand hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Backstage
          </Link>
          <Link
            href="/contact"
            className="font-bold text-black hover:text-brand hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Contact Us
          </Link>
          <Link
            href="/track"
            className="font-bold text-black hover:text-brand hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Track Package
          </Link>
        </nav>
        <Link
          href="/cart"
          aria-label="Shopping cart"
          className="flex items-center font-bold text-black hover:text-brand hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ml-4"
        >
          <CartBadge />
        </Link>
      </div>
    </header>
  );
}
