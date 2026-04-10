"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  // 🔥 Stagger container
  const container = {
    hidden: {},
    show: {
      transition: {
          staggerChildren: 0.25,
          delayChildren: 0.5,
      },
    },
  };

  // 🔥 Individual item animation
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as any, // ✅ fix
    },
  },
};

  // ✨ Stable particles (no rerender jump)
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        left: `${Math.random() * 100}%`,
        bottom: `${Math.random() * 50}%`,
      })),
    []
  );

  const [price, setPrice] = useState(320);
useEffect(() => {
  let start = 320;
  const end = 240;
  const duration = 2600; // ⬅️ slower (was 800)
  const startTime = performance.now();

  const animate = (time: number) => {
    const progress = Math.min((time - startTime) / duration, 1);

    // 🔥 easeOutCubic (very smooth)
    const eased = 1 - Math.pow(1 - progress, 3);

    const current = start - (start - end) * eased;

    setPrice(Math.round(current));

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}, []);

  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center bg-[#0B3D2E] text-white overflow-hidden pt-28 lg:pt-28">
      
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D2E] via-[#0f4d3a] to-[#07281f]" />

      {/* Glow Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#6EDC5F] opacity-20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#FFC72C] opacity-20 blur-3xl rounded-full"
      />

      {/* ✨ Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{ left: p.left, bottom: p.bottom }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 bg-[#6EDC5F]/10 border border-[#6EDC5F]/30 text-[#6EDC5F] px-4 py-1 rounded-full text-sm mb-6"
          >
            ⚡ Energia solar 100% digital
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Pare de pagar caro na luz{" "}
            <span className="text-[#FFC72C]">
              Economize até 25%
            </span>{" "}
            todos os meses ⚡
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-lg text-gray-200 mb-8 max-w-xl"
          >
            Receba desconto no seu consumo de energia, reduzindo sua fatura SEM
            GASTAR NADA! Simples, rápido e gratuito!
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover="hover" whileTap="tap">
              <Link
                href="https://wa.me/5538991197271"
                target="_blank"
                className="relative overflow-hidden flex items-center justify-center gap-2 px-7 py-3 rounded-xl 
                bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] 
                text-[#0B3D2E] font-bold text-lg shadow-xl"
              >
                {/* Shine effect */}
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  variants={{
                    hover: { x: "100%" },
                  }}
                  transition={{ duration: 0.6 }}
                />

                <motion.span
                  variants={{
                    hover: { scale: 1.05 },
                    tap: { scale: 0.97 },
                  }}
                  className="relative flex items-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp text-xl" />
                  Simular economia agora
                </motion.span>
              </Link>
            </motion.div>

            <a
              href="#como-funciona"
              className="flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition"
            >
              Como funciona
            </a>
          </motion.div>

          {/* Trust */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-4 text-sm text-gray-300"
          >
            <span>⚡ Ativação rápida</span>
            <span>🌱 Energia limpa</span>
          </motion.div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          whileHover={{ rotate: 1, scale: 1.02 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-[#6EDC5F]/10 blur-2xl"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Simulação de economia</h3>
              <p className="text-sm text-gray-400">Exemplo mensal</p>
            </div>

            {/* Bills */}
            <div className="space-y-4">
              <div className="bg-[#ff4d4d]/10 border border-[#ff4d4d]/30 rounded-lg p-4">
                <p className="text-sm text-gray-300">Conta atual</p>
                <p className="text-2xl font-bold text-[#ff6b6b]">
                    R$ {price + 80}
                  </p>
              </div>

              <div className="bg-[#6EDC5F]/10 border border-[#6EDC5F]/30 rounded-lg p-4">
                <p className="text-sm text-gray-300">Com UneEnergia</p>
                <p className="text-2xl font-bold text-[#6EDC5F]">
                          R$ {price}
                        </p>
              </div>
            </div>

            {/* Savings */}
            <div className="text-center mt-6">
              <span className="text-[#FFC72C] font-bold text-xl">
                Economize R$ 80/mês ⚡
              </span>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-5 -right-5 bg-[#FFC72C] text-[#0B3D2E] px-5 py-2 rounded-full text-sm font-bold shadow-lg"
          >
            -25%
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}