"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navItems = [
  { label: "Como funciona", href: "#comofunciona" },
  { label: "Simulação", href: "#calculator" },
  { label: "Parceiros", href: "#contact" },
  { label: "Ajuda", href: "#questions" },
];

const WA_URL =
  "https://wa.me/5581986628115?text=Ol%C3%A1%2C%20vi%20no%20site%20da%20OR-LINK%20e%20gostaria%20de%20saber%20mais.";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const lightSection = document.getElementById("comofunciona");
      if (lightSection) {
        const rect = lightSection.getBoundingClientRect();
        // Navbar bottom sits around 70px from viewport top
        setIsLightSection(rect.top <= 70 && rect.bottom > 70);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isLightSection ? "text-[#2E2E2E]" : "text-white/80";
  const portalBorder = isLightSection
    ? "border-[#2E2E2E] text-[#2E2E2E] hover:bg-[#2E2E2E]/10"
    : "border-white/60 text-white hover:bg-white/10";
  const mobileIconColor = isLightSection ? "text-[#2E2E2E]" : "text-white";

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg"
          : "bg-transparent"
      }
      w-[92%] md:w-[85%] lg:w-[70%] max-w-6xl rounded-2xl`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-2.5">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/orlink-logo.png"
            alt="OR-LINK"
            width={1230}
            height={283}
            className="w-[120px] sm:w-[150px] h-auto"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition hover:opacity-70 ${textColor}`}
            >
              {item.label}
            </a>
          ))}

          {/* Portal CTA */}
          <a
            href="https://portal.orlink.com.br/"
            target="_blank"
            className={`px-5 py-2 rounded-full border font-semibold transition hover:scale-105 ${portalBorder}`}
          >
            Acessar portal
          </a>

          {/* WhatsApp CTA */}
          <a
            href={WA_URL}
            target="_blank"
            className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#C9A46B] to-[#C9A46B] text-[#2E2E2E] font-semibold shadow-md hover:scale-105 transition"
          >
            Simular economia
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${mobileIconColor}`}
        >
          {open ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden px-4 pb-4 pt-2 space-y-3 bg-white/10 backdrop-blur-xl border-t border-white/10 rounded-b-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-white/80 hover:text-white transition"
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://portal.orlink.com.br/"
            target="_blank"
            className="block text-center mt-3 px-4 py-2 rounded-full border border-white/60 text-white font-semibold"
          >
            Acessar portal
          </a>

          <a
            href={WA_URL}
            target="_blank"
            className="block text-center mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#C9A46B] to-[#C9A46B] text-[#2E2E2E] font-semibold"
          >
            Simular economia
          </a>
        </div>
      )}
    </div>
  );
}
export default Navbar;
