import { useEffect, useState } from "react";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";


export interface ProductHeroSlideProps{
  name : string,
  description: string,
  href: string,
  image:string
}

export default function ProductHeroSlide(props : ProductHeroSlideProps ) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <section
        className={`relative w-full h-screen overflow-hidden transition-transform duration-1000 ease-out ${
          isLoaded ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <img
          src={props.image}
          className="absolute top-0 left-0 w-full h-full object-cover"
        
        ></img>
        <div className="relative z-10 flex flex-col gap-y-2 items-center justify-center h-full w-full">
          <h1 className="text-white text-4xl iceberg-regular text-center">
           {props.description}
          </h1>
          <Link href={props.href}>
             <Button className="text-lg bg-primary text-white p-4">
            Get Visualisation
          </Button>
          </Link>
       
        </div>
      </section>
    </>
  );
}
