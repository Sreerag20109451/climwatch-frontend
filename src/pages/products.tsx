"use client";

import { useState } from "react";
import DefaultLayout from "@/layouts/default";
import SnowHero from "@/components/snowhero";
import LandHero from "@/components/landhero";
import ProductHero from "@/components/product-hero";

const slides = [
  <SnowHero key="snow" />,
  <LandHero key="land" />,
];

export default function ProductsPage() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <DefaultLayout>
      <div className="relative w-full h-screen overflow-hidden">

        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              {slide}
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-black/50 text-white px-4 py-2 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-black/50 text-white px-4 py-2 rounded-full"
        >
          ›
        </button>
      </div>
    </DefaultLayout>
  );
}
