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
    <div className="relative bg-[#0B3D2E] text-white overflow-hidden">

      {/* GLOBAL GRADIENT */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0B3D2E] via-[#07281F] to-[#041B14]" />

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
