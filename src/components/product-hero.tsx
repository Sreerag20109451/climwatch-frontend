"use client";

import { useEffect, useState } from "react";
import video from "../media/earth.mp4";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { productCards } from "@/config/site";


export default function ProductHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const products = [
    { name: "Snow Data", href: "/products/snow" },
    { name: "Climate Data", href: "/products/climate" },
    { name: "Terrain Data", href: "/products/terrain" },
    { name: "Satellite Data", href: "/products/satellite" },
  ];

  return (
    <section
      className={`relative w-full h-screen overflow-hidden transition-transform duration-1000 ease-out ${
        isLoaded ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Background Video */}
      <video
        src={video}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay with Product Buttons */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 px-4">
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center ">
          {productCards.map((product) => (
            <Link key={product.productname} href={product.href} className="w-full sm:w-auto">
              <Button variant="solid" className="text-lg" color="primary" >
                {product.productname}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
