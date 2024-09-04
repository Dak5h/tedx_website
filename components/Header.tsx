"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/nav";
import { ModeToggle } from "@/components/mode-toggle";
import MobileNav from "./mobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-bold text-primary">
            TED<sup>x</sup>
          </h1>
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
