
import { ProductHeroSlideProps } from "@/components/slide";
import land from "../media/land.jpg"
import snow from "../media/snow.jpg"


export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "About Me",
      href: "/about",
    },
   
  ],
  navMenuItems: [
   {
      label: "Home",
      href: "/",
    },
     {
      label: "About Me",
      href: "/about",
    },

  ],
  links: {

  },
};



export const ProductItems : ProductHeroSlideProps[] = [{
    name: "Land Cover",
    description: "Global landscape is changing",
    href: "/products/land-vis",
    image: land
  },
  {
    name: "Snow",
    description: "Explore the snow and ice cover across globe",
    href: "/products/snow-vis",
    image :snow
  }
  ]



  
 



