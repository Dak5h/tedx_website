"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/speakers", label: "Speakers" },
  { href: "/about", label: "About" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior>
              <NavigationMenuLink
                className={`relative group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50
                  ${
                    item.href == pathname &&
                    "text-primary group-hover:text-primary"
                  }
                `}
              >
                {item.label}
                {item.href == pathname && (
                  <span
                    className="absolute bottom-0 left-[16px] right-[16px] h-[2px] bg-primary"
                    style={{ borderRadius: 0 }}
                  />
                )}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Nav;
