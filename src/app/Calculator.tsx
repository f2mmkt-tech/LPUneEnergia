"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const GRUPOS_DESCONTO = [
  {
    grupo: 1,
    desconto: 0.25,
    label: "25% de desconto",
    estados: [
      { uf: "MG", nome: "Minas Gerais" },
      { uf: "MS", nome: "Mato Grosso do Sul" },
    ],
  },
  {
    grupo: 2,
    desconto: 0.2,
    label: "20% de desconto",
    estados: [
      { uf: "BA", nome: "Bahia" },
      { uf: "CE", nome: "Ceará" },
      { uf: "GO", nome: "Goiás" },
      { uf: "PE", nome: "Pernambuco" },
      { uf: "RN", nome: "Rio Grande do Norte" },
    ],
  },
  {
    grupo: 3,
    desconto: 0.15,
    label: "15% de desconto",
    estados: [
      { uf: "PR", nome: "Paraná" },
      { uf: "SP", nome: "São Paulo" },
    ],
  },
];

function getDiscountRate(uf: string): number | null {
  for (const grupo of GRUPOS_DESCONTO) {
    if (grupo.estados.some((e) => e.uf === uf)) return grupo.desconto;
  }
  return null;
}

export default function EconomiaCalculator() {
  const [value, setValue] = useState(500);
  const [months, setMonths] = useState(12);
  const [estadoSelecionado, setEstadoSelecionado] = useState("");

  const taxaDesconto = getDiscountRate(estadoSelecionado);
  const calculadoraAtiva = taxaDesconto !== null;

  const discountedMonthly = calculadoraAtiva ? value * (1 - taxaDesconto) : null;
  const totalSavings = calculadoraAtiva ? value * taxaDesconto * months : null;
  const percentualDesconto = taxaDesconto !== null ? Math.round(taxaDesconto * 100) : null;

  return (
    <section className="relative py-10 sm:py-12 bg-gradient-to-b from-[#2E2E2E] to-[#0A0A0A] text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-100px] w-[260px] h-[260px] bg-[#C9A46B]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[260px] h-[260px] bg-[#C9A46B]/20 blur-3xl rounded-full" />
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
            {/* STATE SELECTOR */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs sm:text-sm">
                Seu estado
              </label>
              <div className="relative">
                <select
                  value={estadoSelecionado}
                  onChange={(e) => setEstadoSelecionado(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white text-sm rounded-lg px-3 py-2.5 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C9A46B]/50 transition"
                >
                  <option value="" disabled className="bg-[#2E2E2E] text-white/50">
                    Selecione seu estado
                  </option>
                  {GRUPOS_DESCONTO.map((grupo) => (
                    <optgroup
                      key={grupo.grupo}
                      label={grupo.label}
                      className="bg-[#2E2E2E]"
                    >
                      {grupo.estados.map((estado) => (
                        <option
                          key={estado.uf}
                          value={estado.uf}
                          className="bg-[#2E2E2E] text-white"
                        >
                          {estado.nome} ({estado.uf})
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white/40">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

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
                className="w-full h-[5px] sm:h-[6px] rounded-full appearance-none cursor-pointer bg-gradient-to-r from-[#C9A46B] to-[#C9A46B]"
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
                Com OR-LINK
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
                          ? "bg-gradient-to-r from-[#C9A46B] to-[#C9A46B] text-[#2E2E2E] shadow-md"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                  >
                    {option.label}
                    {active && (
                      <span className="absolute inset-0 rounded-lg blur-md opacity-30 bg-gradient-to-r from-[#C9A46B] to-[#C9A46B] -z-10" />
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

            {calculadoraAtiva ? (
              <>
                <motion.div
                  key={totalSavings}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#C9A46B] to-[#C9A46B] bg-clip-text text-transparent"
                >
                  <CountUp
                    end={totalSavings!}
                    duration={1.2}
                    decimals={2}
                    decimal=","
                    separator="."
                    prefix="R$ "
                  />
                </motion.div>

                <p className="text-white/60 text-xs sm:text-sm mt-3">
                  Valor mensal da conta, com desconto de {percentualDesconto}%:{" "}
                  <span className="text-[#C9A46B] font-semibold">
                    R${" "}
                    {discountedMonthly!.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </p>
              </>
            ) : (
              <div className="py-4">
                <p className="text-white/40 text-sm">
                  Selecione seu estado para ver a economia estimada
                </p>
              </div>
            )}

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
            <button className="px-4 py-2 rounded-lg bg-white text-[#2E2E2E] text-sm font-medium shadow hover:scale-105 transition">
              Falar com especialista
            </button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#C9A46B] to-[#C9A46B] text-[#2E2E2E] text-sm font-semibold shadow-md hover:scale-105 transition">
              Quero o desconto!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
