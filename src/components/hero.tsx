import { useEffect, useState } from "react";
import video from "../media/earth.mp4";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Video Section */}
      <section
        className={`relative w-full h-screen overflow-hidden transition-transform duration-1000 ease-out ${
          isLoaded ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <video
          src={video}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        ></video>
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        <div className="relative z-10 flex flex-col gap-y-6 items-center justify-center h-full w-full px-4">
          <div className="flex flex-col items-center gap-y-4">
            <img 
              src="/pnglogo.png" 
              alt="Climwatch Logo" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain animate-pulse"
            />
            <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter iceberg-regular drop-shadow-2xl">
              Climwatch
            </h1>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center gap-y-4 max-w-2xl text-center">
            <h2 className="text-zinc-200 text-xl md:text-3xl font-light tracking-wide italic">
              Monitoring Earth, Interpreting Change
            </h2>
            
            <Link href="/products">
              <Button className="text-lg bg-primary text-white px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-transform">
                Get started
              </Button>
            </Link>
          </div>
       
        </div>
      </section>
    </>
  );
}