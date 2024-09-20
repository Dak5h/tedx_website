"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from 'next-themes';

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#speakers", label: "Speakers" },
  { href: "#support", label: "Support Us" },
  { href: "#committee", label: "Committee" },
  { href: "#sponsors", label: "Sponsors" },
];

const MobileNav = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-primary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-4 mb-4 text-center text-2xl"> {/* Reduced margins */}
          <Link href="/">
            <h1 className="text-primary font-bold text-4xl">
              TED<sup>x</sup>
            </h1>
            <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Granite Bay High School Youth
            </span>
          </Link>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col justify-center items-center gap-8 overflow-y-auto max-h-[60vh]"> {/* Added overflow and max height */}
          {navItems.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`${
                link.href === pathname ? "text-primary border-b-2 border-primary" : ""
              } text-xl capitalize hover:text-primary transition-all`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/tickets">
            <Button className="mt-2">Buy Tickets</Button> {/* Added margin for button */}
          </Link>
        </nav>
        <div className="mt-auto flex justify-end">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;