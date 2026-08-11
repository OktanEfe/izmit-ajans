"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { reveal } from "@/lib/animations";

const calismalar = [
  {
    marka: "Sommario Coffee ",
    platform: "Instagram",
    aciklama: "İçerik stratejisi, Reels kurgusu ve topluluk yönetimi.",
    link: "https://instagram.com/sommariocoffee",
  },
  {
    marka: "Pnoi Coffee",
    platform: "Instagram",
    aciklama: "Marka kimliği, grafik tasarım ve viral içerik üretimi.",
    link: "https://www.instagram.com/pnoicoffee",
  },
  {
    marka: "Otopratik Kocaeli",
    platform: "Instagram",
    aciklama: "Hashtag stratejisi, analitik raporlama ve büyüme yönetimi.",
    link: "https://www.instagram.com/otopratikkocaeli",
  },
];

export default function OrnekCalismalar() {
  return (
    <section className="py-32 md:py-48 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
          className="mb-20 border-b border-white/[0.06] pb-12"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#FF5A00]/70 mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase text-white leading-[0.9]">
            Örnek<br />
            <span className="text-[#FF5A00] italic">Çalışmalarımız</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {calismalar.map((c, i) => (
            <motion.a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col bg-[#0A0A0A] border border-white/[0.06] rounded-[2rem] overflow-hidden hover:border-[#FF5A00]/30 transition-all duration-700"
            >
              {/* Content */}
              <div className="p-8 flex flex-col gap-3 flex-1">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#FF5A00]/70">
                  {c.platform}
                </p>
                <h3 className="text-xl font-medium text-white tracking-[-0.02em]">
                  {c.marka}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1">
                  {c.aciklama}
                </p>
                <div className="flex items-center gap-2 text-[#FF5A00] text-sm font-medium mt-2 group-hover:gap-3 transition-all duration-300">
                  İncele
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
