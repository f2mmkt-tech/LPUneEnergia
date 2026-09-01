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

export  function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            src="/logos/Logo2-bg2.png"
            alt="UNE"
            width={110}
            height={30}
            className="w-[90px] sm:w-[105px] h-auto"
            priority
          />
        </Link>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">

      <div className={`hidden lg:flex items-center gap-8 text-sm font-medium
  ${scrolled ? "text-black" : "text-white/80"}`}>
  {navItems.map((item) => (
    <a
      key={item.label}
      href={item.href}
      className={`transition hover:text-black/80 ${scrolled ? "text-black" : "text-white/80"}`}
    >
      {item.label}
    </a>
  ))}
</div>

          {/* Portal CTA */}
          <a
            href="https://portal.energiaune.com.br/auth/login"
            target="_blank"
            className={`px-5 py-2 rounded-full border font-semibold transition hover:scale-105
              ${scrolled ? "border-[#0B3D2E] text-[#0B3D2E] hover:bg-[#0B3D2E]/10" : "border-white/60 text-white hover:bg-white/10"}`}
          >
            Acessar portal
          </a>

          {/* CTA */}
          <a
            href="https://wa.me/553187954089"
            target="_blank"
            className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] text-[#0B3D2E] font-semibold shadow-md hover:scale-105 transition"
          >
            Simular economia
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
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
            href="https://portal.energiaune.com.br/auth/login"
            target="_blank"
            className="block text-center mt-3 px-4 py-2 rounded-full border border-white/60 text-white font-semibold"
          >
            Acessar portal
          </a>

          <a
            href="https://wa.me/553187954089"
            target="_blank"
            className="block text-center mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] text-[#0B3D2E] font-semibold"
          >
            Simular economia
          </a>
        </div>
      )}
    </div>
  );
}
export default Navbar;