"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/animations";

const process = [
  { step: "01", title: "Keşif & Strateji", desc: "Markanızın DNA'sını analiz ediyor, rakiplerinizi inceliyor ve size özel dijital yol haritası oluşturuyoruz." },
  { step: "02", title: "Tasarım & Üretim", desc: "Her detayı hassasiyetle işliyor, en yüksek estetik standartlarda üretim yapıyoruz." },
  { step: "03", title: "Test & Optimizasyon", desc: "Her çıktıyı gerçek kullanıcı verisiyle test ediyor, performansı maksimize ediyoruz." },
  { step: "04", title: "Yayın & Büyüme", desc: "Canlıya alıyor, sürekli izliyor ve büyüme fırsatlarını proaktif yakalıyoruz." },
];

export default function ProcessSteps() {
  return (
    <section className="py-32 md:py-48 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }} className="mb-20 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-[#FF5A00] block mb-4">Nasıl Çalışıyoruz</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase leading-[0.9]">
            4 Adımda<br />
            <span className="text-[#FF5A00] italic font-medium">Sonuç.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-50 rounded-[2rem] p-8 border border-neutral-100 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500"
            >
              <span className="text-8xl font-black text-black/5 absolute -right-2 -top-4 select-none">{p.step}</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 relative z-10">{p.title}</h3>
              <p className="text-neutral-700 text-sm leading-relaxed relative z-10">{p.desc}</p>
              <div className="w-8 h-1 bg-[#FF5A00] mt-6 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
