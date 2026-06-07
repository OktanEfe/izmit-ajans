"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-white pt-24 px-6 select-none overflow-hidden"
    >
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="heroWaveFilter" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="turbulence" baseFrequency="0.012 0.02" numOctaves="2" result="noise" seed="3">
              <animate attributeName="baseFrequency" dur="14s" values="0.012 0.02;0.018 0.012;0.012 0.02" repeatCount="indefinite" />
              <animate attributeName="seed" dur="10s" values="3;8;3" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Dark vignette so text stays readable over ShaderGradient */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.82) 100%)" }}
      />

      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="hero-orb-1 absolute w-[700px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(139,92,246,1), transparent 70%)",
            top: "-10%",
            left: "5%",
            filter: "blur(100px)",
            opacity: 0.08,
          }}
        />
        <motion.div
          className="hero-orb-2 absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(255,90,0,1), transparent 70%)",
            top: "20%",
            right: "-5%",
            filter: "blur(120px)",
            opacity: 0.07,
          }}
        />
        <motion.div
          className="hero-orb-3 absolute w-[500px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(77,141,255,1), transparent 70%)",
            bottom: "5%",
            left: "30%",
            filter: "blur(110px)",
            opacity: 0.06,
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none z-10 p-5 sm:p-8">
        {/* Equalizer layer stack — each runs at a different phase/speed */}
        <div className="hero-eq-layer1 absolute inset-0">
          <div
            className="hero-animated-border absolute inset-0 rounded-[32px] sm:rounded-[48px]"
            style={{ filter: "url(#heroWaveFilter)" }}
          />
        </div>
        <div className="hero-eq-layer2 absolute inset-0 rounded-[32px] sm:rounded-[48px]" />
        <div className="hero-eq-layer3 absolute inset-0 rounded-[32px] sm:rounded-[48px]" />
      </div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 w-full max-w-6xl mx-auto flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-12"
        />

        <h1 className="text-[58px] sm:text-[104px] md:text-[136px] font-medium tracking-[-0.05em] leading-[0.9] pb-4 text-neutral-100 flex flex-col items-center">
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

          <motion.span
            variants={typewriterContainer}
            initial="hidden"
            animate="visible"
            className="text-[#FF5A00] italic font-medium mt-1 pb-[0.18em]"
          >
            {line2.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block whitespace-pre">
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 text-white text-base sm:text-lg md:text-xl font-light max-w-xl tracking-normal leading-relaxed text-balance"
        >
          Sıradanlığı değil, yeni dijital standartları kurguluyoruz. Markanızı karanlığın asaletinde zirveye konumlandıran rafine dokunuşlar.
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-col sm:flex-row items-center gap-8 sm:gap-12"
        >
          <Link href="/iletisim" className="group relative block">
            <div className="absolute -inset-[3px] rounded-full bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] opacity-0 blur-[12px] group-hover:opacity-80 transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105" />
            <div className="relative flex items-center gap-3 bg-white text-black px-10 py-5 sm:px-12 rounded-full text-sm sm:text-base font-semibold tracking-wide shadow-[0_20px_40px_rgba(255,90,0,0.1)] transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:scale-105 group-hover:bg-neutral-50 active:scale-[0.98]">
              <span>Proje Başlat</span>
              <ArrowUpRight
                className="text-black/80 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"
                size={18}
              />
            </div>
          </Link>

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
