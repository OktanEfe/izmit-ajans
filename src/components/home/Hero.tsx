"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll Parallax Kontrolü
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Harf harf daktilo animasyon varyantları
  const typewriterContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.03, delayChildren: 0.3 }
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, textShadow: "0 0 10px rgba(255,90,0,0)" },
    visible: {
      opacity: 1,
      textShadow: "0 0 0px rgba(255,90,0,0)",
      transition: { duration: 0.05, ease: "linear" }
    }
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 1.2 } 
    }
  };

  const line1 = "Fikirden";
  const line2 = "dijital esere.";

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#050505] text-white pt-24 px-6 select-none"
    >

      {/*
        ==================================================================
        APPLE INTELLIGENCE ANIMATED CONIC BORDER
        Dönen mor→pembe→turuncu→mavi gradient border
        ==================================================================
      */}
      <div className="absolute inset-0 pointer-events-none z-10 p-5 sm:p-8">
        {/* sonar-pulse: inset box-shadow içeriye yayılır — ses dalgası hissi */}
        <div className="sonar-pulse relative w-full h-full rounded-[32px] sm:rounded-[48px]">
          <div
            className="hero-animated-border absolute inset-0 rounded-[32px] sm:rounded-[48px]"
            style={{ padding: '1.5px' }}
          />
        </div>
      </div>

      {/* 
        ==================================================================
        HERO CONTENT AREA
        ==================================================================
      */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 w-full max-w-6xl mx-auto flex flex-col items-center text-center"
      >
        {/* Üst Rafine Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-12"
        >
          <span className="inline-flex items-center text-neutral-500 font-mono text-[10px] uppercase tracking-[0.45em] px-5 py-2.5 rounded-full border border-white/[0.04] bg-[#0A0A0A]/80 backdrop-blur-xl">
            <motion.span 
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mr-3 shadow-[0_0_10px_#FF5A00]" 
            />
            Studio Crafted Systems
          </span>
        </motion.div>

        {/* BAŞLIK: Gerçek Daktilo (Harf Harf) Efekti */}
        <h1 className="text-[58px] sm:text-[104px] md:text-[136px] font-medium tracking-[-0.05em] leading-[0.9] pb-4 text-neutral-100 flex flex-col items-center">
          {/* Satır 1 */}
          <motion.span 
            variants={typewriterContainer}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {line1.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block whitespace-pre">
                {char}
              </motion.span>
            ))}
          </motion.span>

          {/* Satır 2 - Apple Renk Geçişli */}
          <motion.span 
            variants={typewriterContainer}
            initial="hidden"
            animate="visible"
            className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic font-medium mt-1 pb-[0.18em]"
          >
            {line2.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block whitespace-pre">
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        {/* Açıklama Paragrafı */}
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 text-neutral-400 text-base sm:text-lg md:text-xl font-light max-w-xl tracking-normal leading-relaxed text-balance"
        >
          Sıradanlığı değil, yeni dijital standartları kurguluyoruz. Markanızı karanlığın asaletinde zirveye konumlandran rafine dokunuşlar.
        </motion.p>

        {/* BÜYÜTÜLMÜŞ & ULTRA HOVER AKSİYON BUTONLARI */}
        <motion.div 
          variants={fadeUpVariants} 
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-col sm:flex-row items-center gap-8 sm:gap-12"
        >
          {/* Proje Başlat: Tamamen Büyüyen & Çeperi Saran Işık */}
          <Link href="/iletisim" className="group relative block">
            {/* Buton Arkası Siri Işık Kümesi (Hover Anında Devleşir) */}
            <div className="absolute -inset-[3px] rounded-full bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] opacity-0 blur-[12px] group-hover:opacity-80 transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105" />
            
            {/* Büyütülmüş Buton Gövdesi */}
            <div className="relative flex items-center gap-3 bg-white text-black px-10 py-5 sm:px-12 sm:py-5.5 rounded-full text-sm sm:text-base font-semibold tracking-wide shadow-[0_20px_40px_rgba(255,90,0,0.1)] transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:scale-105 group-hover:bg-neutral-50 active:scale-[0.98]">
              <span>Proje Başlat</span>
              <ArrowUpRight 
                className="text-black/80 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" 
                size={18} 
              />
            </div>
          </Link>

          {/* Hizmetler Butonu */}
          <Link 
            href="/hizmetler" 
            className="group relative text-base font-medium tracking-wide text-neutral-400 hover:text-white transition-all duration-400 py-3 block transform group-hover:scale-105"
          >
            Hizmetlerimizi İnceleyin
            <span className="absolute bottom-1 left-0 w-full h-[1.5px] bg-gradient-to-r from-[#FF5A00] to-[#4D8DFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1] origin-left" />
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}