
import snow from "../media/snow.jpg"
import ocean from "../media/ocean.jpg"
import land from "../media/land.jpg"
import temp from "../media/temp.jpg"
import ghats from "../media/ghats.jpg"

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
  ],
  navMenuItems: [
   {
      label: "HOME",
      href: "/",
    },
      {
      label: "PRODUCTS",
      href: "/products",
    },

  ],
  links: {
    github: "https://github.com/Sreerag20109451/geowatch-server",
    Linkedin : "https://www.linkedin.com/in/sreerag-sathian-212305189/overlay/background-image/"

  },
  products : [
    {name: 'snow' , description : ''}
  ]
};


export const productCards = [
  {
    productname: "Snow Data",
    description: "Access various snow datasets: global snow cover, snow melt, snow depth, seasonal snow trends.",
    href: "/snow",
    image: snow
  },
  // {
  //   productname: "Land Cover",
  //   description: "Explore land cover types and vegetation across the globe.",
  //   href: "/land",
  //   image: land
  // },
  // {
  //   productname: "Ocean Data",
  //   description: "Visualize sea surface temperature, chlorophyll, and ocean currents.",
  //   href: "/ocean",
  //   image: ocean
  // },
  // {
  //   productname: "Temperature Trends",
  //   description: "Monitor global and regional temperature changes over time.",
  //   href: "/temperature",
  //   image :temp
  // },
  // {
  //   productname: "Regions",
  //   description: "Detailed environmental, biodiversity and climate visualizations for different regions of the world.",
  //   href: "/regions/himalayas",
  //   image : ghats
  // },
 
];



