"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const process = [
  { step: "01", title: "Keşif", desc: "Markanızın dijital DNA'sını analiz ediyoruz.", color: "from-[#FF5A00]/10 to-[#FF5A00]/5", accent: "#FF5A00" },
  { step: "02", title: "Mühendislik", desc: "Performans odaklı kod yapısını kuruyoruz.", color: "from-[#8B5CF6]/10 to-[#8B5CF6]/5", accent: "#8B5CF6" },
  { step: "03", title: "Sanat", desc: "Görsel dünyayı premium standartlarda işliyoruz.", color: "from-[#EC4899]/10 to-[#EC4899]/5", accent: "#EC4899" },
  { step: "04", title: "Yayılım", desc: "Global SEO ile yayına alıyoruz.", color: "from-[#4D8DFF]/10 to-[#4D8DFF]/5", accent: "#4D8DFF" },
];

const webFeatures = [
  "Hız Optimizasyonu",
  "Deneyim Tasarımı",
  "E-Ticaret Çözümleri",
  "SEO Odaklı Geliştirme",
  "Özel Arayüzler",
  "Mobil Öncelikli Yapı",
];

export default function ProcessSection() {
  return (
    <section className="py-28 md:py-36 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase leading-[0.9] text-white">
            İşimiz{" "}
            <span className="text-[#FF5A00] italic font-light lowercase">
              sonuç.
            </span>
          </h2>
          <p className="mt-4 text-white/60 text-base font-light">Dijital başarınızı adım adım nasıl kurguluyoruz?</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {process.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative p-8 bg-gradient-to-br ${p.color} rounded-3xl border border-white group overflow-hidden cursor-pointer transition-all duration-400`}
            >
              <span
                className="text-7xl font-black absolute -right-3 -top-3 leading-none select-none"
                style={{ color: p.accent, opacity: 0.12 }}
              >
                {p.step}
              </span>
              <div
                className="w-2 h-2 rounded-full mb-6"
                style={{ backgroundColor: p.accent }}
              />
              <h4 className="text-lg font-black uppercase tracking-tighter mb-3 relative z-10 text-white">
                {p.title}
              </h4>
              <p className="text-white relative z-10 text-sm leading-relaxed">{p.desc}</p>
              <div
                className="w-8 h-[2px] mt-5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400"
                style={{ backgroundColor: p.accent }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-white bg-gradient-to-br from-white/[0.04] to-transparent p-10 md:p-14"
        >
          <h3 className="text-2xl md:text-4xl font-bold tracking-tighter uppercase mb-8 text-white">
            Her Projede{" "}
            <span className="text-[#FF5A00]">Standart</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-16">
            {webFeatures.map((item) => (
              <div key={item} className="flex items-center gap-3 text-white font-medium text-sm">
                <CheckCircle2 size={15} className="text-[#FF5A00] shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
