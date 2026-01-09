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

        {/* Overlay Text */}
        <div className="relative z-10 flex flex-col gap-y-2 items-center justify-center h-full w-full">
          <h1 className="text-white text-4xl iceberg-regular text-center">
            Earth, Like You’ve Never Seen Before
          </h1>
          <Link href="/products">
             <Button className="text-lg bg-primary text-white p-5">
            Get started
          </Button>
          </Link>
       
        </div>
      </section>
    </>
  );
}
