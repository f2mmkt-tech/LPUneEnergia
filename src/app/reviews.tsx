"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Elisa",
    business: "Elisa Café",
    text: "Sem investimento inicial, conseguimos reduzir custos e melhorar nossa operação.",
    video: "https://player.vimeo.com/video/76979871", // 👈 Vimeo embed link
  },
  {
    name: "Pedro",
    business: "Pizzarone",
    text: "A economia nos permitiu investir mais no crescimento do negócio.",
    video: "/videos/review2.mp4",
  },
  {
    name: "Ildefonso",
    business: "Bar do Dé",
    text: "Sem custo para aderir e com economia todos os meses na conta de energia.",
    video: "/videos/review3.mp4",
  },
  {
    name: "Deborah",
    business: "Feijoah",
    text: "Reduzimos um dos maiores custos do restaurante e ainda ajudamos o planeta.",
    video: "/videos/review4.mp4",
  },
];

export default function ReviewsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const isEmbed = (url: string) =>
    url.includes("vimeo") || url.includes("youtube");

  return (
    <section className="relative py-20 bg-[#0B3D2E] text-white overflow-hidden">
      
      {/* 🌌 Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#6EDC5F]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#FFC72C]/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Vários clientes{" "}
            <span className="text-[#6EDC5F]">já estão economizando</span>{" "}
            com a UNE
          </h2>
        </div>

        {/* CARDS */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

          {reviews.map((review, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setActiveVideo(review.video)}
              className="relative min-w-[260px] sm:min-w-[280px] h-[420px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* PREVIEW */}
              {!isEmbed(review.video) ? (
                <video
                  src={review.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  <span className="text-white/60 text-sm">▶ Ver vídeo</span>
                </div>
              )}

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-5 z-10">
                <p className="text-sm leading-relaxed text-white/90 mb-4">
                  {review.text}
                </p>

                <div className="text-xs text-white/70">
                  <span className="font-semibold text-white">
                    {review.name}
                  </span>{" "}
                  • {review.business}
                </div>
              </div>

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
                  ▶
                </div>
              </div>

              {/* BORDER */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-[#6EDC5F]/40 transition rounded-2xl" />
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <a
            href="https://wa.me/5538991197271"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition"
          >
            Falar com especialista
          </a>

          <a
            href="#"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#6EDC5F] to-[#FFC72C] text-[#0B3D2E] font-semibold shadow hover:scale-105 transition"
          >
            Quero economizar!
          </a>
        </div>
      </div>

      {/* 🎥 MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center px-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md rounded-full w-10 h-10 text-white hover:bg-white/40 transition"
              >
                ✕
              </button>

              {/* VIDEO PLAYER */}
              {isEmbed(activeVideo) ? (
                <iframe
                  src={`${activeVideo}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                />
              ) : (
                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}