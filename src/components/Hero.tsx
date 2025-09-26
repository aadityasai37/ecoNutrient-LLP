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
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === rotatingTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Slower rotation

    return () => clearInterval(interval);
  }, [rotatingTexts.length, isPaused]);

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8"
      style={{
        minHeight: "70vh",
        backgroundImage: "url('/hero_bg.svg'), linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
      aria-label="Hero section"
    >
      <div className={`relative z-10 max-w-5xl w-full flex flex-col items-center justify-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-black/95 backdrop-blur-md rounded-[12px] p-4 sm:p-6 max-w-[38ch] mb-8 shadow-sm">
          <h1 className="font-fraunces font-bold tracking-tight text-white text-center">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl block whitespace-nowrap">Connecting Cultures Through</span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block whitespace-nowrap">Native Indian Flavours</span>
          </h1>
        </div>

        <div className="h-20 flex items-center justify-center mb-8">
          <div
            className="bg-black/95 backdrop-blur-sm rounded-[10px] p-3 shadow-sm clip-path-blob"
            style={{ clipPath: "ellipse(60% 40% at 50% 50%)" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <p className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-white transition-all duration-700 ease-out ${
              isPaused ? 'animate-none' : 'animate-slide-fade'
            }`}>
              {rotatingTexts[currentTextIndex]}
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            const shopSection = document.getElementById('products');
            shopSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-12 py-4 rounded-lg bg-black text-white text-xl font-bold hover:bg-gray-800 hover:scale-110 hover:shadow-2xl active:scale-95 active:shadow-lg transition-all duration-300 focus-visible:ring-2 ring-brand ring-offset-2"
          aria-label="Shop now"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
