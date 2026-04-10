"use client";

import React, { useState } from "react";

export default function BusinessForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    area: "",
    carteira: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      setStatus("success");
      setFormData({
        nome: "",
        email: "",
        whatsapp: "",
        area: "",
        carteira: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-28 px-6 bg-[#061A14] overflow-hidden">

      {/* 🌟 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-80px] w-[260px] h-[260px] bg-[#6EDC5F]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[260px] h-[260px] bg-[#FFC72C]/20 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-lg text-center lg:text-left ml-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
            Seja{" "}
            <span className="bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] bg-clip-text text-transparent">
              Parceiro UNE
            </span>{" "}
            em um negócio lucrativo!
          </h1>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Para você que tem carteira de clientes B2B, junte-se à missão UNE e multiplique este
             impacto positivo por todo o Brasil. Lucre através da expansão da nossa marca, formando 
             um time de licenciados e clientes engajados com o futuro do planeta e o consumo consciente.
          </p>

          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            Cadastre-se e saiba como começar essa parceira rentável de forma gratuita.
          </p>
        </div>

        {/* FORM */}
        <div className="relative w-full max-w-md mx-auto">

          {/* GLASS CARD */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">

            <h2 className="text-white text-lg font-semibold uppercase mb-6">
              Quero ser parceiro UNE
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {[
                { name: "nome", placeholder: "Nome" },
                { name: "whatsapp", placeholder: "WhatsApp" },
                { name: "area", placeholder: "Área de atuação" },
                { name: "carteira", placeholder: "Tamanho da carteira de clientes" },
                { name: "email", placeholder: "E-mail" },
              ].map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#6EDC5F] outline-none pb-2 text-white placeholder-white/50 transition-all duration-300"
                />
              ))}

              {/* CTA */}
              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full rounded-full bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] text-[#0B3D2E] font-semibold py-3 shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-60"
              >
                {loading ? "ENVIANDO..." : "COMEÇAR PARCERIA"}
              </button>

              {/* STATUS */}
              {status === "success" && (
                <div className="text-center text-sm text-green-400 mt-3">
                  ✅ Enviado com sucesso!
                </div>
              )}

              {status === "error" && (
                <div className="text-center text-sm text-red-400 mt-3">
                  ❌ Erro ao enviar. Tente novamente.
                </div>
              )}
            </form>
          </div>

          {/* SUBTLE GLOW BORDER */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6EDC5F]/20 to-[#FFC72C]/20 blur-xl -z-10" />
        </div>
      </div>
    </section>
  );
}