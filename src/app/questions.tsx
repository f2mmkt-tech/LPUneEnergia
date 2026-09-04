"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Como a UNE ganha dinheiro?",
    answer: `Com a UNE, você faz parte de um grupo que compartilha energia solar de forma inteligente. Funciona assim: você e outros consumidores dividem os custos da usina, e a UNE cuida de toda a parte chata, como a burocracia dos créditos, faturas e atendimento. 

Por esse serviço de gestão, a UNE é remunerada pelo consórcio. No fim das contas, você paga só a sua parte na divisão e garante um desconto direto no seu boleto de energia.`,
  },
  {
    question: "Como fica a minha conta de luz?",
    answer: `Ao escolher a UNE, você reduz imediatamente seu gasto total com eletricidade. O pagamento mensal é dividido em duas partes: a sua cota de participação na usina de energia limpa, paga à UNE, e os impostos e tarifas obrigatórios, pagos à distribuidora local. 

Como a energia produzida por nossas usinas parceiras é mais barata que a convencional, o resultado final é uma economia de até 25% no seu orçamento.`,
  },
  {
    question: "Imóvel alugado pode ser UNE?",
    answer: `Sem problemas! A única regra é que a conta de energia precisa estar no mesmo CPF ou CNPJ de quem assina com a UNE. 

Se não estiver, a gente te explica o passo a passo para ajustar isso direto com a sua distribuidora. É um processo bem ágil.`,
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 bg-[#061A14] overflow-hidden">

      {/* 🌟 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-80px] w-[260px] h-[260px] bg-[#6EDC5F]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[260px] h-[260px] bg-[#FFC72C]/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>

          <p className="text-white/60 mt-4 text-lg">
            Entenda como funciona a UNE e como você começa a economizar
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden transition-all"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-white font-medium text-base sm:text-lg">
                    {faq.question}
                  </span>

                  {/* ICON */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#6EDC5F]"
                  >
                    ▼
                  </motion.div>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="px-6 pb-6 text-white/70 text-sm sm:text-base leading-relaxed whitespace-pre-line"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-white/60 mb-4">
            Ainda tem dúvidas?
          </p>

          <a
            href="https://wa.me/5581986628115?text=Ol%C3%A1%2C%20vi%20no%20site%20da%20Une%20e%20gostaria%20de%20saber%20mais."
            target="_blank"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] text-[#0B3D2E] font-semibold shadow-lg hover:scale-105 transition"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}