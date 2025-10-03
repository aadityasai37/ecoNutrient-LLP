"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fontA = "font-fraunces"; // Largest font
const fontB = "font-inter"; // Smallest font
const fontC = "font-geist-sans"; // Middle font

const headlineLines = [
  { text: "Connecting Cultures", font: fontA },
  { text: "Through", font: fontB },
  { text: "Native Indian Flavours", font: fontC },
];

const rotatingTexts = [
  "Royal Flavours of the North",
  "Spice & Soul of the South",
  "Pure & Nourishing Eastern Goodness",
  "Bold & Colourful Tastes of the West",
  "Get it on ecoNutrient",
];

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === rotatingTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds rotation

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="relative py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
      style={{ minHeight: "70vh" }}
      aria-label="Hero section"
    >
      {/* Background div */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('/Hero_home.svg'), linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        animate="visible"
        variants={parentVariants}
      >
        <h1 className="text-white grid grid-cols-1 place-items-center space-y-2 sm:space-y-3">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            {headlineLines.map(({ text, font }, idx) => (
              <motion.span
                key={idx}
                className={`inline-block leading-tight px-4 py-1 whitespace-nowrap ${font} ${
                  idx === 0
                    ? "text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                    : idx === 1
                    ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                    : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                }`}
                variants={prefersReducedMotion ? reducedMotionVariants : childVariants}
              >
                {text}
              </motion.span>
            ))}
          </div>
        </h1>
      </motion.div>

      <div className="h-10 mt-10 lg:mt-12 flex items-center justify-center sm:h-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex}
            className="bg-black/95 backdrop-blur-sm rounded-[10px] p-3 shadow-sm clip-path-blob text-white font-semibold text-xl sm:text-2xl md:text-3xl"
            style={{ clipPath: "ellipse(60% 40% at 50% 50%)", height: "2.5rem" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            {rotatingTexts[currentTextIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => {
          const shopSection = document.getElementById("products");
          shopSection?.scrollIntoView({ behavior: "smooth" });
        }}
        className="inline-flex rounded-xl bg-white text-black font-semibold px-6 py-3 mt-8 hover:shadow-md focus-visible:ring-2 ring-offset-2 ring-green-500"
        aria-label="Shop now"
      >
        Shop Now
      </button>
    </section>
  );
};

export default Hero;
