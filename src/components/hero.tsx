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
        
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
          
          {/* Logo */}
          <div className="">
             <img 
              src="/pnglogo.png" 
              alt="Climwatch Logo" 
              className="w-28 h-28 md:w-40 md:h-40 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Tagline and Button Container */}
          <div className="flex flex-col items-center gap-y-8 max-w-2xl">
            <h2 className="text-zinc-200 text-xl md:text-2xl font-light tracking-widest uppercase italic opacity-90">
              Monitoring Earth, Interpreting Change
            </h2>
            
            <Link href="/products">
              <Button className="text-lg bg-primary text-white px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all font-bold">
                Get started
              </Button>
            </Link>
          </div>
       
        </div>
      </section>
    </>
  );
}