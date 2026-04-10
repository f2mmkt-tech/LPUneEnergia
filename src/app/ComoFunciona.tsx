"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Cadastro simples",
    desc: "Envie sua conta de luz e alguns dados básicos. Tudo online.",
  },
  {
    number: "02",
    title: "Ativação automática",
    desc: "A UNE conecta você à energia solar sem instalação ou obras.",
  },
  {
    number: "03",
    title: "Economia todo mês",
    desc: "Você recebe créditos solares e paga menos na sua conta.",
  },
];

const highlights = [
  "Sem custo inicial",
  "Sem instalação",
  "Sem burocracia",
  "100% digital",
  "Até 25% de economia",
  "Atuação em 9 estados",
];

export default function ComoFunciona() {
  return (
    <section className="relative w-full py-28 overflow-hidden bg-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#6EDC5F]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#FFC72C]/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-[#0B3D2E] mb-6"
          >
            Como Funciona
          </motion.h2>

          <p className="text-gray-600 text-lg">
            Sem instalação, sem complicação. A UNE conecta você à energia solar
            e garante economia real todos os meses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* STEPS */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="group p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] text-white font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-[#0B3D2E] font-semibold text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* VISUAL */}
         <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="flex justify-center"
>
  <div className="relative w-full max-w-xl">

    {/* CONTAINER */}
    <div className="relative bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl p-10 shadow-xl">

      {/* FLOW ROW */}
      <div className="flex items-center justify-between">

        {/* SOLAR */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-2xl bg-[#FFF4CC] flex items-center justify-center text-2xl shadow-md">
            ☀️
          </div>
          <span className="text-sm text-gray-600">Usina Solar</span>
        </div>

        {/* LINE 1 */}
        <div className="flex-1 h-[2px] bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] mx-4 relative overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-20 h-full bg-white/40 blur-sm"
          />
        </div>

        {/* UNE */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] flex items-center justify-center text-white font-bold shadow-xl">
            UNE
          </div>
          <span className="text-sm text-gray-600">Distribuição</span>
        </motion.div>

        {/* LINE 2 */}
        <div className="flex-1 h-[2px] bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] mx-4 relative overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.5 }}
            className="absolute top-0 left-0 w-20 h-full bg-white/40 blur-sm"
          />
        </div>

        {/* USERS */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#E8F8F0] flex items-center justify-center shadow">
              🏠
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#E8F8F0] flex items-center justify-center shadow">
              🏢
            </div>
          </div>
          <span className="text-sm text-gray-600">Você</span>
        </div>

      </div>

      {/* FLOATING LABEL */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full text-xs shadow-md border text-black"
      >
        ⚡ Créditos de energia
      </motion.div>

      {/* BOTTOM INFO */}
      <div className="mt-8 grid grid-cols-3 gap-4 text-center text-xs text-gray-500">
        <div>Geração limpa</div>
        <div>Compensação automática</div>
        <div>Economia na conta</div>
      </div>

    </div>
  </div>
</motion.div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mt-24 flex flex-wrap justify-center gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="px-5 py-2 rounded-full bg-white border shadow-sm text-[#0B3D2E] text-sm font-medium"
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="https://wa.me/5538991197271"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl 
            bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] 
            text-[#0B3D2E] font-bold text-lg shadow-xl hover:scale-105 transition"
          >
            <i className="fa-brands fa-whatsapp text-xl" />
            Quero o desconto!
          </Link>
        </div>

      </div>
    </section>
  );
}