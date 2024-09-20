"use client";

import Link from "next/link";
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button";
import Nav from "@/components/nav";
import { ModeToggle } from "@/components/mode-toggle";
import MobileNav from "./mobileNav";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-background shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold text-primary">
              TED<sup>x</sup>
            </h1>
            <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} xl:block`}>
              Granite Bay High School Youth
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/tickets">
            <Button>Buy Tickets</Button>
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
