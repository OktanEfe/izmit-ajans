"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  { 
    title: "Sosyal Medya", 
    desc: "Markanızın dijital dünyadaki varlığını, sadece içerik üretimiyle değil, topluluk yönetimi ve veriye dayalı stratejik planlama ile bir ekosisteme dönüştürüyoruz.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
    href: "/hizmetler/sosyal-medya"
  },
  { 
    title: "Kamera Çekimi", 
    desc: "4K sinematik standartlarda görsel prodüksiyon süreçlerimizde, markanızın hikayesini en ince detayına kadar kurguluyor; ışık ve hareketin gücüyle izleyiciyi etkiliyoruz.",
    img: "kamera.jpg",
    href: "/hizmetler/kamera-cekimi"
  },
  { 
    title: "Web Tasarım", 
    desc: "Sıfır gecikme, sınırsız estetik arayüzler inşa ederken; teknolojiyi sanatla harmanlıyor ve markanızla kurulan dijital teması kusursuz bir deneyime dönüştürüyoruz.",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2000&auto=format&fit=crop",
    href: "/hizmetler/web-tasarim"
  },
  { 
    title: "Prodüksiyon", 
    desc: "Post-prodüksiyonda kusursuz kurgu sanatı ile ham görüntüleri birer başyapıta çeviriyoruz. Renk manipülasyonu ve ses tasarımı ile projelerinize imza atıyoruz.",
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2000&auto=format&fit=crop",
    href: "/hizmetler/produksiyon"
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 px-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[100px] font-bold tracking-tighter text-[#1D1D1F] leading-[0.9]"
          >
            NELER <br />
            <span className="text-[#86868B] font-light italic">YAPIYORUZ?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, i) => (
            <Link href={service.href} key={i} className="block group">
              <motion.div
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative bg-[#F5F5F7] p-8 md:p-16 flex flex-col justify-between overflow-hidden h-[500px] md:h-[650px] rounded-[30px] md:rounded-[40px] cursor-pointer transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-black/[0.03]"
              >
                {/* ARKA PLAN FOTOĞRAFI (Responsive Mantığı) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  {/* Masaüstü için AnimatePresence (Hover Etkisi) */}
                  <div className="hidden md:block h-full w-full">
                    <AnimatePresence>
                      {hoveredIndex === i && (
                        <motion.div
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full w-full"
                        >
                           <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-transparent z-10" />
                           <img src={service.img} className="w-full h-full object-cover" alt="" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobil için Sabit Hafif Görsel (Hover olmadığı için) */}
                  <div className="block md:hidden h-full w-full opacity-[0.3]">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/40 z-10" />
                    <img src={service.img} className="w-full h-full object-cover" alt="" />
                  </div>
                </div>

                {/* İÇERİK */}
                <div className="relative z-20 text-[#1D1D1F]">
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-6">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-xl font-medium leading-relaxed max-w-sm opacity-70 group-hover:opacity-100 transition-opacity">
                    {service.desc}
                  </p>
                </div>

                {/* ALT KISIM */}
                <div className="relative z-20 flex items-center justify-between">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-[#1D1D1F] flex items-center justify-center shadow-sm group-hover:bg-[#1D1D1F] group-hover:text-white transition-all border border-black/[0.03]">
                    <ArrowUpRight size={20} className="md:size-24 group-hover:rotate-45 transition-transform" />
                  </div>
                  
                  <span className="text-[#1D1D1F] text-[10px] font-bold tracking-[0.2em] opacity-0 md:group-hover:opacity-100 translate-x-4 md:group-hover:translate-x-0 transition-all">
                    İNCELE
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}