"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function EconomiaCalculator() {
  const [value, setValue] = useState(500);
  const [months, setMonths] = useState(12);

  // 20% discount
  const discountRate = 0.2;

  // Monthly discounted bill
  const discountedMonthly = value * (1 - discountRate);

  // Total cost with UNE over selected months
  const totalWithDiscount = discountedMonthly * months;

  // Total cost without UNE
  const totalWithoutDiscount = value * months;

  // Savings
  const totalSavings = totalWithoutDiscount - totalWithDiscount;

  return (
    <section className="relative py-10 sm:py-12 bg-gradient-to-b from-[#0B3D2E] to-[#07281F] text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-100px] w-[260px] h-[260px] bg-[#6EDC5F]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[260px] h-[260px] bg-[#FFC72C]/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 leading-tight">
            Veja sua economia em tempo real
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Ajuste sua conta e descubra quanto você pode economizar com energia solar.
          </p>
        </div>

        {/* CARD */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          {/* TOP */}
          <div className="flex flex-col gap-4 mb-6">
            {/* LABEL + VALUE */}
            <div className="flex items-center justify-between">
              <p className="text-white/60 text-xs sm:text-sm">Sua conta atual</p>
              <h3 className="text-lg sm:text-2xl font-semibold text-right">
                R$ {value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </h3>
            </div>

            {/* SLIDER */}
            <div>
              <input
                type="range"
                min={100}
                max={2000}
                step={50}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full h-[5px] sm:h-[6px] rounded-full appearance-none cursor-pointer bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C]"
              />
              <div className="flex justify-between text-[10px] sm:text-xs text-white/40 mt-2">
                <span>R$100</span>
                <span>R$2000</span>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 my-1">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[10px] sm:text-xs text-white/40 whitespace-nowrap">
                Com UNE
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* MONTH OPTIONS */}
            <div className="grid grid-cols-3 gap-2 w-full">
              {[
                { label: "1 mês", value: 1 },
                { label: "3 meses", value: 3 },
                { label: "1 ano", value: 12 },
              ].map((option) => {
                const active = months === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => setMonths(option.value)}
                    className={`relative w-full py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300
                      ${
                        active
                          ? "bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] text-[#0B3D2E] shadow-md"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                  >
                    {option.label}
                    {active && (
                      <span className="absolute inset-0 rounded-lg blur-md opacity-30 bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] -z-10" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RESULT */}
          <div className="text-center mb-8">
            <p className="text-white/60 text-xs sm:text-sm mb-2">
              Economia estimada no período
            </p>

            <motion.div
              key={totalSavings}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] bg-clip-text text-transparent"
            >
                      <CountUp
                  end={totalSavings}
                  duration={1.2}
                  decimals={2}
                  decimal=","
                  separator="."
                  prefix="R$ "
                />
            </motion.div>

            {/* Monthly discounted value */}
            <p className="text-white/60 text-xs sm:text-sm mt-3">
              Valor mensal da conta, com desconto de 20%:{" "}
              <span className="text-[#6EDC5F] font-semibold">
                R${" "}
                {discountedMonthly.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </p>

            <p className="text-[10px] sm:text-xs text-white/40 mt-2">
              *Estimativa baseada no seu consumo médio
            </p>
          </div>

          {/* LEGAL NOTE */}
          <p className="text-[10px] sm:text-xs text-white/40 mt-4 text-justify">
            O desconto aplicado na calculadora acima é a título de exemplo, sendo
            o desconto diferente de acordo com cada estado brasileiro. O desconto
            é aplicado somente sobre o valor de consumo, não incluindo impostos e
            tarifas obrigatórias da distribuidora local.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mt-6">
            <button className="px-4 py-2 rounded-lg bg-white text-[#0B3D2E] text-sm font-medium shadow hover:scale-105 transition">
              Falar com especialista
            </button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] text-[#0B3D2E] text-sm font-semibold shadow-md hover:scale-105 transition">
              Quero o desconto!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}