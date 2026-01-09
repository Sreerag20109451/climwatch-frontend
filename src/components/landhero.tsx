import { useEffect, useState } from "react";
import video from "../media/land.mp4";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";


export default function LandHero() {
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

        {/* Overlay Text */}
        <div className="relative z-10 flex flex-col gap-y-2 items-center justify-center h-full w-full">
          <h1 className="text-white text-4xl iceberg-regular text-center">
            Global Landscape is Changing
          </h1>
          <Link href="/products">
             <Button className="text-lg bg-primary text-white p-4">
            Get Visualisations
          </Button>
          </Link>
       
        </div>
      </section>
    </>
  );
}
