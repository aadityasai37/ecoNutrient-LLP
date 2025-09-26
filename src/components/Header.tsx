"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      className={`sticky top-9 z-40 py-2 transition-all duration-300 ${
        isScrolled ? "px-2 bg-transparent" : "px-4 shadow-md bg-white/95 backdrop-blur-md"
      } clip-path-polygon(0 0, 100% 0, 100% 85%, 0 100%)`}
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
    >
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center focus-visible:ring-2 ring-brand ring-offset-2 ml-4"
          aria-label="ecoNutrient Home"
        >
          <Image
            src="/Header_Logo_2.png"
            alt="ecoNutrient Logo"
            width={128}
            height={48}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>
        <nav
          className="hidden md:flex items-center gap-2 ml-auto"
          aria-label="Primary Navigation"
        >
          <Link
            href="/"
            className={`font-fraunces font-semibold text-base px-4 py-2 rounded-full hover:-translate-y-0.5 hover:backdrop-blur-md active:scale-98 active:shadow-inner transition-all duration-140 ease-out focus-visible:ring-2 ring-brand ring-offset-2 min-w-[20px] ${
              isScrolled 
                ? "text-white hover:text-white/80" 
                : "text-black bg-white/80 hover:bg-white/90 hover:text-brand"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-inter font-semibold text-sm px-4 py-2 rounded-full hover:-translate-y-0.5 hover:backdrop-blur-md active:scale-98 active:shadow-inner transition-all duration-140 ease-out focus-visible:ring-2 ring-brand ring-offset-2 min-w-[20px] ${
              isScrolled 
                ? "text-white hover:text-white/80" 
                : "text-black bg-white/80 hover:bg-white/90 hover:text-brand"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/backstage"
            className={`font-inter font-semibold text-sm px-4 py-2 rounded-full hover:-translate-y-0.5 hover:backdrop-blur-md active:scale-98 active:shadow-inner transition-all duration-140 ease-out focus-visible:ring-2 ring-brand ring-offset-2 min-w-[20px] ${
              isScrolled 
                ? "text-white hover:text-white/80" 
                : "text-black bg-white/80 hover:bg-white/90 hover:text-brand"
            }`}
          >
            Backstage
          </Link>
          <Link
            href="/products"
            className={`font-inter font-semibold text-sm px-4 py-2 rounded-full hover:-translate-y-0.5 hover:backdrop-blur-md active:scale-98 active:shadow-inner transition-all duration-140 ease-out focus-visible:ring-2 ring-brand ring-offset-2 min-w-[20px] ${
              isScrolled 
                ? "text-white hover:text-white/80" 
                : "text-black bg-white/80 hover:bg-white/90 hover:text-brand"
            }`}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className={`font-inter font-semibold text-sm px-4 py-2 rounded-full hover:-translate-y-0.5 hover:backdrop-blur-md active:scale-98 active:shadow-inner transition-all duration-140 ease-out focus-visible:ring-2 ring-brand ring-offset-2 min-w-[20px] ${
              isScrolled 
                ? "text-white hover:text-white/80" 
                : "text-black bg-white/80 hover:bg-white/90 hover:text-brand"
            }`}
          >
            Contact Us
          </Link>
          <Link
            href="/track"
            className={`font-inter font-semibold text-sm px-4 py-2 rounded-full hover:-translate-y-0.5 hover:backdrop-blur-md active:scale-98 active:shadow-inner transition-all duration-140 ease-out focus-visible:ring-2 ring-brand ring-offset-2 min-w-[20px] ${
              isScrolled 
                ? "text-white hover:text-white/80" 
                : "text-black bg-white/80 hover:bg-white/90 hover:text-brand"
            }`}
          >
            Track Package
          </Link>
        </nav>
        <Link
          href="/cart"
          aria-label="Shopping cart"
          className={`flex items-center font-inter font-semibold text-sm hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:ring-2 ring-brand ring-offset-2 ml-4 ${
            isScrolled ? "text-white" : "text-black"
          } hover:text-brand`}
        >
          <CartBadge />
        </Link>
      </div>
    </header>
  );
}
