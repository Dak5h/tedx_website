import React from "react";
import Home from "./home/page";
import About from "./about/page";
import Speakers from "./speakers/page";
import Support from "./support/page";
import Committee from "./committee/page";
import Sponsors from "./sponsors/page";
import Tickets from "./tickets/page";

function Main() {
  return (
    <div className="flex flex-col space-y-3 items-center w-full px-4 pt-40">
      <section id="home" className="relative w-full mb-16">
        <Home />
      </section>

      <section id="about" className="relative w-full mb-16">
        <About />
      </section>

      <section id="speakers" className="relative w-full mb-16">
        <Speakers />
      </section>

      <section id="committee" className="relative w-full mb-16">
        <Committee />
      </section>

      <section id="sponsors" className="relative w-full mb-16">
        <Sponsors />
      </section>

      <section id="support" className="relative w-full mb-16">
        <Support />
      </section>

      <section id="tickets" className="relative w-full mb-16">
        <Tickets />
      </section>
    </div>
  );
}

export default Main;
