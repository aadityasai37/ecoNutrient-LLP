"use client";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8"
      style={{ minHeight: "60vh" }}
      aria-label="Hero section"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl">
        Connecting Cultures Through{" "}
        <span className="text-brand underline decoration-4 decoration-brand/30">
          Native Indian Flavours
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-700">
        Experience the authentic taste of India with ecoNutrient’s curated selection of native spices and ingredients.
      </p>
      <button
        className="mt-10 px-8 py-3 rounded-md bg-brand text-white min-h-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        aria-label="Shop now"
      >
        Shop Now
      </button>
    </section>
  );
};

export default Hero;
