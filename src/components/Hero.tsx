"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const rotatingTexts = [
    "Rich & Royal North Indian Taste",
    "Spicy & Aromatic South Indian Flavour",
    "Earthy & Wholesome Eastern Essence",
    "Vibrant & Zesty Western Delights"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === rotatingTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8"
      style={{
        minHeight: "70vh",
        backgroundImage: "url('/Hero_bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      aria-label="Hero section"
    >
      <div className="relative z-10 max-w-5xl">
        <h1 className="font-extrabold tracking-tight text-white mb-8">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl block">Connecting Cultures Through</span>{" "}
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block">Native Indian Flavours</span>
        </h1>

        <div className="h-16 mb-8 flex items-center justify-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white animate-pulse">
            {rotatingTexts[currentTextIndex]}
          </p>
        </div>

        <button
          onClick={() => {
            const shopSection = document.getElementById('shop');
            shopSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-10 px-12 py-4 rounded-lg  bg-black text-white text-xl font-bold hover:bg-gray-800 hover:scale-110 hover:shadow-2xl active:scale-95 active:shadow-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          aria-label="Shop now"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
