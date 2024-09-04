"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/speakers", label: "Speakers" },
  { href: "/about", label: "About" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-primary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-primary font-bold text-4xl">
              TED<sup>x</sup>
            </h1>
          </Link>
        </div>
        {/* navigation */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {navItems.map((link, index) => {
            return (
              <Link
                href={link.href}
                key={index}
                className={`${
                  link.href == pathname &&
                  "text-primary border-b-2 border-primary"
                } text-xl capitalize hover:text-primary transition-all`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/tickets">
            <Button>Buy Tickets</Button>
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
