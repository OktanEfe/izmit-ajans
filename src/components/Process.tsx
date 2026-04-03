"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const steps = [
  { 
    number: "01",
    title: "Kalıpları Kır", 
    desc: "Mevcut veriyi ve pazar boşluklarını analiz ederek, rakiplerinizin cesaret edemediği stratejik rotayı belirliyoruz." 
  },
  { 
    number: "02",
    title: "Ruh Kat", 
    desc: "Markanızın özünü tanımlayan görsel dili ve hikayeyi, modern estetik anlayışıyla en baştan kurguluyoruz." 
  },
  { 
    number: "03",
    title: "Dijital İnşa", 
    desc: "Yazılımın disiplini ile kreatif vizyonu birleştirerek, performans odaklı ve sanat değeri taşıyan dijital ürünler yaratıyoruz." 
  },
  { 
    number: "04",
    title: "Dominasyon", 
    desc: "Projeyi yayına alıyor, veriyi izliyor ve markanızı pazarın yeni standart belirleyicisi konumuna taşıyoruz." 
  }
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="bg-[#050505] py-32 md:py-48 px-6 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* SOL TARAF: Sabit Başlık */}
          <div className="lg:col-span-5">
            <div className="sticky top-40">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] font-bold tracking-[0.5em] text-white/30 uppercase block mb-6"
              >
                Metodolojimiz
              </motion.span>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85]">
                Stratejik <br /> 
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-rose-500 bg-clip-text text-transparent italic">
                  Adımlar.
                </span>
              </h2>
              <p className="mt-8 text-white/40 text-lg md:text-xl font-light max-w-xs leading-relaxed">
                Fikrin esere dönüşme sürecindeki her adım, titiz bir mühendislik ve sınırsız bir hayal gücüyle atılır.
              </p>
            </div>
          </div>

          {/* SAĞ TARAF: Adımlar */}
          <div className="lg:col-span-7 relative">
            
            {/* Dinamik Yol Çizgisi (Scroll ile dolan) */}
            <div className="absolute left-0 top-0 w-[1px] h-full bg-white/10" />
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-blue-500 via-purple-500 to-rose-500 z-10"
            />

            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="pl-12 md:pl-20 pb-24 md:pb-40 relative group"
              >
                {/* Glow Noktası */}
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#1d1d1f] border border-white/20 z-20 group-hover:border-white transition-all duration-500">
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-100 group-hover:blur-sm transition-opacity" />
                </div>

                {/* Adım Numarası */}
                <span className="text-sm font-mono text-white/20 mb-4 block group-hover:text-blue-400 transition-colors tracking-widest">
                  {step.number}
                </span>
                
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white/30 group-hover:text-white transition-all duration-500">
                  {step.title}
                </h3>
                
                <p className="text-xl md:text-2xl text-white/40 font-light max-w-2xl leading-relaxed group-hover:text-white/80 transition-colors">
                  {step.desc}
                </p>

                {/* Arka plan hover ışığı */}
                <div className="absolute -left-20 top-0 w-full h-full bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}