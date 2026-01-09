import { Link } from "@heroui/link"; 
import { 
  Navbar as HeroUINavbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle, 
  NavbarMenu, 
  NavbarMenuItem, 
} from "@heroui/navbar"; 

import { siteConfig } from "@/config/site"; 
import { GithubIcon } from "@/components/icons"; 
import Logo from "../logo/pnglogo.png"; 

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" height="4rem" shouldHideOnScroll className="bg-black p-1 opacity-70">
      {/* Logo / Brand */}
      <NavbarContent className="flex w-full justify-between items-center" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" color="foreground" href="/">
            <img src={Logo} className="h-24 w-24 py-1" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Menu items - visible on lg and above */}
      <NavbarContent className="hidden lg:flex gap-6 items-center" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link className="text-white text-lg tinos-regular" href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Github & Toggle for md and below */}
      <NavbarContent className="flex items-center gap-4" justify="end">
        <NavbarItem>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
        </NavbarItem>

        {/* Show toggle only on md and below */}
        <NavbarMenuToggle className="lg:hidden text-white text-lg" />
      </NavbarContent>

      {/* Mobile Menu (md and below) */}
      <NavbarMenu className="bg-black opacity-90 lg:hidden">
        <div className="mx-4 mt-2 flex flex-col gap-2 py-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="primary" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
