"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const features = [
  { 
    title: "Butik Yaklaşım", 
    desc: "Her markayı kendi hikayesiyle ele alıyor, fabrikasyon çözümler yerine terzi dikimi stratejiler geliştiriyoruz.",
    color: "bg-[#F5F5F7]"
  },
  { 
    title: "Sıfır Gecikme", 
    desc: "Modern teknoloji yığınımızla Apple standartlarında, hız odaklı ve akıcı bir kullanıcı deneyimi inşa ediyoruz.",
    color: "bg-[#E8E8ED]"
  },
  { 
    title: "Global Vizyon", 
    desc: "Yerel değerleri global tasarım trendleriyle birleştirerek markanızı dünya standartlarına taşıyoruz.",
    color: "bg-[#D2D2D7]"
  }
];

export default function WhyUs() {
  const containerRef = useRef<HTMLElement>(null);
  
  // 1. ADIM: useScroll her zaman en üstte ve güvenli
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 2. ADIM: Değeri doğrudan transform içinde yönetiyoruz (Hata payı sıfır)
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -800]);

  return (
    <section ref={containerRef} className="bg-white py-40 overflow-hidden relative border-t border-black/[0.03]">
      
      {/* ARKA PLAN SLOGAN */}
      <div className="absolute top-20 left-0 w-full pointer-events-none opacity-[0.03] select-none text-[#1D1D1F]">
        <motion.h2 style={{ x: xTranslate }} className="text-[250px] font-black whitespace-nowrap uppercase leading-none">
          NEDEN İZMİT MEDYA • FARK YARAT • İZMİT SOSYAL MEDYA • 
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Başlık */}
        <div className="mb-24 text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-bold tracking-tighter text-[#1D1D1F]"
          >
            Neden <br /> 
            <span className="font-light italic text-[#86868B]">Biz?</span>
          </motion.h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Sol: Büyük Siyah Kart */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 bg-[#1D1D1F] p-12 md:p-20 rounded-[40px] text-white flex flex-col justify-between min-h-[500px] overflow-hidden relative group"
          >
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-[0.4em] text-white/40 uppercase">Felsefemiz</span>
              <h3 className="text-4xl md:text-6xl font-bold mt-8 tracking-tighter leading-tight">
                Dijitalde <br /> Sanatın <br /> İmzası.
              </h3>
            </div>
            
            <p className="relative z-10 text-xl text-white/60 font-medium max-w-xs">
              Teknoloji sadece bir araçtır; biz o aracı bir sanat eserine dönüştürüyoruz.
            </p>

            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Sağ: Gri Kartlar */}
          <div className="flex flex-col gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${f.color} p-10 rounded-[40px] flex flex-col justify-between hover:shadow-xl transition-all duration-500 cursor-default group`}
              >
                <div className="flex justify-between items-start mb-12">
                  <h4 className="text-3xl font-bold tracking-tighter text-[#1D1D1F]">{f.title}</h4>
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    {i + 1}
                  </div>
                </div>
                <p className="text-[#86868B] text-lg font-medium leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ALT VURGU */}
        <div className="mt-48 border-t border-black/5 pt-24 text-center text-[#1D1D1F]">
          <h3 className="text-[42px] md:text-[90px] font-black tracking-tighter leading-[0.9]">
            Zihninizdeki vizyonu, <br />
            <span className="text-[#86868B] font-light italic text-6xl md:text-[80px]">gerçeğe dönüştürüyoruz.</span>
          </h3>
          
          <div className="mt-16 flex flex-col items-center gap-6">
            <button className="group relative overflow-hidden bg-[#1D1D1F] text-white px-16 py-6 rounded-full text-xs font-black tracking-[0.2em] uppercase transition-all shadow-2xl hover:bg-black active:scale-95">
              <span className="relative z-10">Bize Ulaşın</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}