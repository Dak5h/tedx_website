"use client";

import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { useTheme } from "next-themes";
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
            <Image
              src="/tedx_logo.png" // Replace with your image path
              alt="TEDx Logo" // Provide an appropriate alt text
              width={150} // Set desired width
              height={10} // Set desired height
              className="object-contain" // Ensure the image scales correctly
            />
            <span
              className={`text-2xl ${theme === "dark" ? "text-white" : "text-black"} xl:block ml-3`}
            >
              Granite Bay High School <span className="font-bold">Youth</span>
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/tickets">
            <Button>Buy Tickets</Button>
          </Link>
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
