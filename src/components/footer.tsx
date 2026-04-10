"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#07281F] to-[#041B14] text-white pt-20 pb-8 overflow-hidden">

      {/* 🌌 Background glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] bg-[#6EDC5F]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[280px] h-[280px] bg-[#FFC72C]/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* 🔥 TOP CTA STRIP */}
        <div className="mb-16 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              Pronto para começar a economizar?
            </h3>
            <p className="text-white/60 text-sm">
              Simule agora e veja quanto você pode reduzir na sua conta.
            </p>
          </div>

          <a
            href="https://wa.me/5538991197271"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] text-[#0B3D2E] font-semibold shadow-lg hover:scale-105 transition"
          >
            Simular economia
          </a>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="space-y-5 text-center md:text-left">
            <Image
              src="/logos/Logo2-bg2.png"
              alt="UNE Energia"
              width={150}
              height={40}
              className="mx-auto md:mx-0"
            />

            <p className="text-white/60 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Energia solar por assinatura. Economize na sua conta sem instalar placas e sem investimento inicial.
            </p>

            {/* SOCIALS */}
          <div className="flex justify-center md:justify-start">
            <motion.a
              href="https://www.instagram.com/uneenergias/"
              target="_blank"
              whileHover={{ y: -3, scale: 1.05 }}
              className="flex items-center gap-3 px-4 py-2 rounded-xl 
              bg-white/10 border border-white/10 
              hover:bg-gradient-to-r hover:from-[#6EDC5F] hover:to-[#FFC72C] 
              hover:text-[#0B3D2E] transition"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/20">
                <i className="fab fa-instagram text-sm" />
              </div>

              <span className="text-sm font-medium">
                Siga no Instagram
              </span>
            </motion.a>
          </div>
          </div>

          {/* MIDDLE */}
          <div className="text-center space-y-5">
            <h4 className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-12 mt-8">
              Navegação
            </h4>

            <div className="flex flex-col gap-3 text-sm">
              {[
                { label: "Como funciona", href: "#comofunciona" },
                { label: "Simular economia", href: "#calculator" },
                { label: "Perguntas frequentes", href: "#questions" },
                { label: "Contato", href: "#contact" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="relative text-white/60 hover:text-[#6EDC5F] transition"
                >
                  {link.label}

                  {/* underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#6EDC5F] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-center md:text-right space-y-5">

            <h4 className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-12 mt-8">
              Contato
            </h4>

            <div className="space-y-2 text-sm text-white/60">
              <p>contato@uneenergia.com.br</p>

              <a
                href="https://wa.me/5538991197271"
                target="_blank"
                className="block hover:text-[#6EDC5F] transition"
              >
                +55 (38) 99119-7271
              </a>
            </div>

            {/* MICRO TRUST */}
            <p className="text-xs text-white/40">
              Atendimento rápido via WhatsApp ⚡
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-white/10 my-10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">

          <p>
            © {CURRENT_YEAR} UNE Energia. Todos os direitos reservados.
          </p>

          {/* CREDIT */}
          <p className="flex items-center gap-1">
            Produzido por{" "}
            <span className="font-semibold text-white/80 hover:text-[#6EDC5F] transition">
              Foco Marketing
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;