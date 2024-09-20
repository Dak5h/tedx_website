import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Home from "./home/page";

function Main() {
  return (
    <div className="flex flex-col space-y-3 items-center w-full px-4 pt-40">
      <section id="home" className="relative w-full">
        <Home />
      </section>

      <section id="about" className="relative w-full">
        <h2>About Us</h2>
      </section>

      <section id="speakers" className="relative w-full">
        <h2>Speakers</h2>
      </section>

      <section id="committee" className="relative w-full">
        <h2>Committee</h2>
      </section>
    </div>
  );
}

export default Main;