"use client";

import React from "react";

const WA_URL =
  "https://wa.me/5538988330939?text=Ol%C3%A1%2C%20vi%20no%20site%20da%20OR-LINK%20e%20gostaria%20de%20saber%20mais.";

export default function BusinessPartner() {
  return (
    <section className="relative py-28 px-6 bg-[#0A0A0A] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-80px] w-[260px] h-[260px] bg-[#C9A46B]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[260px] h-[260px] bg-[#C9A46B]/20 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-8">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
          Seja{" "}
          <span className="bg-gradient-to-r from-[#C9A46B] to-[#C9A46B] bg-clip-text text-transparent">
            Parceiro OR-LINK
          </span>{" "}
          em um negócio lucrativo!
        </h1>

        <p className="text-white/70 text-lg leading-relaxed">
          Para você que tem carteira de clientes B2B, junte-se à missão OR-LINK e multiplique este
          impacto positivo por todo o Brasil. Lucre através da expansão da nossa marca, formando
          um time de licenciados e clientes engajados com o futuro do planeta e o consumo consciente.
        </p>

        <a
          href={WA_URL}
          target="_blank"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#C9A46B] to-[#C9A46B] text-[#2E2E2E] font-bold text-xl shadow-2xl hover:scale-105 transition"
        >
          <i className="fa-brands fa-whatsapp text-2xl" />
          Quero ser parceiro!
        </a>
      </div>
    </section>
  );
}
