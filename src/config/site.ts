
import { ProductHeroSlideProps } from "@/components/slide";
import land from "../media/land.jpg"
import snow from "../media/snow.jpg"
import { NewsItems } from "@/components/newsfeed/newsfeed";
import newsImage from "../media/news.jpg"


export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "About Me",
      href: "/about",
    },
    {
      label: "Snow Cover",
      href: "/products/snow-vis",
    },
    {
      label: "Land Cover",
      href : "/products/land-vis"
    }
   
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
     {
      label: "Snow Cover",
      href: "/products/snow-vis",
    },
        {
      label: "Land Cover",
      href : "/products/land-vis"
    }

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
    description: "Explore the snow and ice across globe",
    href: "/products/snow-vis",
    image :snow
  }
  ]


export const newsData: NewsItems = [
  {
    title: "Global Ocean Temperatures Hit Record High",
    image: newsImage,
    content: "Scientists report that average sea surface temperatures reached an all-time peak this month. This trend is accelerating coral bleaching events across the Pacific. Researchers are calling for immediate data sharing to monitor marine heatwaves.",
    source: "Marine Science Daily",
    href: "https://example.com/ocean-report"
  },
  {
    title: "Breakthrough in Solid-State Battery Tech",
    image: newsImage,
    content: "A new prototype battery offers double the energy density of current lithium-ion models. This innovation could significantly extend the range of electric vehicles while reducing fire risks. Production is expected to scale within the next two years.",
    source: "Tech Green",
    href: "https://example.com/battery-tech"
  },
  {
    title: "Reforestation Project Surpasses 1 Million Trees",
    image: newsImage,
    content: "The Amazon Recovery Initiative successfully planted its millionth sapling this week. The project focuses on restoring biodiversity by using native species specifically adapted to the local climate. Local communities are leading the long-term maintenance efforts.",
    source: "Global Watch",
    href: "https://example.com/reforestation-success"
  },
  {
    title: "Solar Power Costs Drop by 15% Locally",
    image: newsImage,
    content: "Improved manufacturing techniques have driven down the cost of residential solar installations. Industry experts predict a surge in home grid independence over the next fiscal year. Local subsidies are further incentivizing the transition to renewable energy.",
    source: "Energy Post",
    href: "https://example.com/solar-costs"
  },
  {
    title: "Urban Farming Initiative Launches in Chicago",
    image: newsImage,
    content: "New vertical farms are being integrated into repurposed industrial warehouses to reduce food miles. These facilities use 90% less water than traditional soil-based farming methods. The produce will be distributed directly to local schools and grocery stores.",
    source: "The City Journal",
    href: "https://example.com/urban-farming"
  }
];
  
 



