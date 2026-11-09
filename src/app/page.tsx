// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import WhyChooseUs from "./reviews";
import ComoFunciona from "./ComoFunciona";
import Calculator from "./Calculator";
import Contact from "./contact";
import Questions from "./questions";


export default function Campaign() {
  return (
    <div className="relative bg-[#2E2E2E] text-white overflow-hidden">

      {/* GLOBAL GRADIENT */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#2E2E2E] via-[#0A0A0A] to-[#0A0A0A]" />

      <Navbar />

      <Hero />

      <section id="comofunciona">
        <ComoFunciona />
      </section>

      <section id="calculator">
        <Calculator />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="questions">
        <Questions />
      </section>

      <section id="cases">
        <WhyChooseUs />
      </section>

      <Footer />
    </div>
  );
}
