"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  const rotateX = useTransform(smoothY, [-500, 500], [10, -10]);
  const rotateY = useTransform(smoothX, [-500, 500], [-10, 10]);

  const prismX = useTransform(smoothX, (v) => v * -0.05);
  const prismY = useTransform(smoothY, (v) => v * -0.05);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return <div className="min-h-screen bg-[#FBFBFD]" />;

  // Partiküller için sabit pozisyonlar
  const orangeParticles = Array.from({ length: 15 }, (_, i) => ({
    startX: 100 + (i * 70),
    startY: 100 + (i * 30) % 500,
    delay: i * 0.2
  }));

  const blueParticles = Array.from({ length: 18 }, (_, i) => ({
    startX: 100 + (i * 65),
    startY: 200 + (i * 25) % 500,
    delay: i * 0.15
  }));

  const pinkParticles = Array.from({ length: 20 }, (_, i) => ({
    startX: 100 + (i * 60),
    startY: 150 + (i * 28) % 500,
    delay: i * 0.18
  }));

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#FBFBFD] text-[#1D1D1F] overflow-hidden px-6">
      
      {/* APPLE INTELLIGENCE STYLE WAVES */}
      <motion.div 
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        {/* Ana Dalga Konteyneri */}
        <div className="absolute w-full h-full flex items-center justify-center">
          
          {/* TURUNCU DALGA (En Alt - Y: 60%) */}
          <motion.div
            animate={{
              x: [1400, -200],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-[1600px] h-[300px] top-[60%]"
          >
            <svg width="100%" height="100%" viewBox="0 0 1600 300" className="opacity-80">
              <defs>
                <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#FF8C42" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FFA07A" stopOpacity="0.7" />
                </linearGradient>
                <filter id="glow1">
                  <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <motion.path
                d="M 0 150 Q 200 100 400 150 T 800 150 T 1200 150 T 1600 150"
                stroke="url(#orangeGrad)"
                strokeWidth="80"
                fill="none"
                filter="url(#glow1)"
                animate={{
                  d: [
                    "M 0 150 Q 200 100 400 150 T 800 150 T 1200 150 T 1600 150",
                    "M 0 150 Q 200 200 400 150 T 800 150 T 1200 150 T 1600 150",
                    "M 0 150 Q 200 100 400 150 T 800 150 T 1200 150 T 1600 150"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
            
            {/* Turuncu Partiküller */}
            {orangeParticles.map((particle, i) => (
              <motion.div
                key={`orange-${i}`}
                initial={{ x: particle.startX, y: particle.startY }}
                animate={{
                  x: [particle.startX, particle.startX - 1400],
                  y: [particle.startY, particle.startY + 20, particle.startY - 20, particle.startY],
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "linear"
                }}
                className="absolute w-2 h-2 rounded-full bg-orange-500"
                style={{
                  boxShadow: "0 0 15px rgba(255, 107, 53, 0.9)"
                }}
              />
            ))}
          </motion.div>

          {/* MAVİ DALGA (Orta - Y: 45%) */}
          <motion.div
            animate={{
              x: [1400, -200],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-[1600px] h-[300px] top-[45%]"
          >
            <svg width="100%" height="100%" viewBox="0 0 1600 300" className="opacity-75">
              <defs>
                <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#0096C7" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#48CAE4" stopOpacity="0.7" />
                </linearGradient>
                <filter id="glow2">
                  <feGaussianBlur stdDeviation="18" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <motion.path
                d="M 0 150 Q 200 120 400 150 T 800 150 T 1200 150 T 1600 150"
                stroke="url(#blueGrad)"
                strokeWidth="90"
                fill="none"
                filter="url(#glow2)"
                animate={{
                  d: [
                    "M 0 150 Q 200 120 400 150 T 800 150 T 1200 150 T 1600 150",
                    "M 0 150 Q 200 180 400 150 T 800 150 T 1200 150 T 1600 150",
                    "M 0 150 Q 200 120 400 150 T 800 150 T 1200 150 T 1600 150"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
            
            {/* Mavi Partiküller */}
            {blueParticles.map((particle, i) => (
              <motion.div
                key={`blue-${i}`}
                initial={{ x: particle.startX, y: particle.startY }}
                animate={{
                  x: [particle.startX, particle.startX - 1400],
                  y: [particle.startY, particle.startY - 25, particle.startY + 25, particle.startY],
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 0.9, 0.5]
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "linear"
                }}
                className="absolute w-2.5 h-2.5 rounded-full bg-cyan-400"
                style={{
                  boxShadow: "0 0 20px rgba(0, 180, 216, 1)"
                }}
              />
            ))}
          </motion.div>

          {/* PEMBE DALGA (En Üst - Y: 30%) */}
          <motion.div
            animate={{
              x: [1400, -200],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-[1600px] h-[300px] top-[30%]"
          >
            <svg width="100%" height="100%" viewBox="0 0 1600 300" className="opacity-70">
              <defs>
                <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF006E" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#FB5607" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FF85B3" stopOpacity="0.6" />
                </linearGradient>
                <filter id="glow3">
                  <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <motion.path
                d="M 0 150 Q 200 110 400 150 T 800 150 T 1200 150 T 1600 150"
                stroke="url(#pinkGrad)"
                strokeWidth="100"
                fill="none"
                filter="url(#glow3)"
                animate={{
                  d: [
                    "M 0 150 Q 200 110 400 150 T 800 150 T 1200 150 T 1600 150",
                    "M 0 150 Q 200 190 400 150 T 800 150 T 1200 150 T 1600 150",
                    "M 0 150 Q 200 110 400 150 T 800 150 T 1200 150 T 1600 150"
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
            
            {/* Pembe Partiküller */}
            {pinkParticles.map((particle, i) => (
              <motion.div
                key={`pink-${i}`}
                initial={{ x: particle.startX, y: particle.startY }}
                animate={{
                  x: [particle.startX, particle.startX - 1400],
                  y: [particle.startY, particle.startY + 30, particle.startY - 30, particle.startY],
                  scale: [1, 2, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "linear"
                }}
                className="absolute w-3 h-3 rounded-full bg-pink-500"
                style={{
                  boxShadow: "0 0 25px rgba(255, 0, 110, 1)"
                }}
              />
            ))}
          </motion.div>

          {/* Ekstra Işık Efektleri */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute w-[800px] h-[800px] rounded-full bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-3xl"
          />
        </div>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 text-center flex flex-col items-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 px-6 py-2 rounded-full border border-black/[0.03] bg-white/20 backdrop-blur-md"
        >
          <span className="text-[#1D1D1F]/40 font-bold uppercase text-[9px] tracking-[0.6em]">
            İzmit Medya <span className="mx-2 opacity-20">/</span> Experience Design
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[55px] md:text-[110px] font-bold tracking-[-0.05em] leading-[0.85] mb-12"
        >
          Fikirden <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1D1D1F] to-[#1D1D1F]/40">
            dijital esere.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.5 }}
          className="text-[#1D1D1F] text-lg md:text-2xl font-light max-w-2xl mb-16 tracking-tight leading-relaxed"
        >
          Sıradanlığı değil, yeni standartları kurguluyoruz. <br />
          Markanızı dijitalin zirvesine taşıyan rafine dokunuşlar.
        </motion.p>

        {/* BUTTONS */}
        <div className="flex flex-row gap-8 items-center">
          <Link href="/iletisim">
            <motion.button 
              whileHover="hover"
              className="group relative flex items-center gap-2 bg-[#1D1D1F] text-white px-9 py-4 rounded-full text-[13px] font-bold tracking-wide transition-all active:scale-95"
            >
              <span>PROJE BAŞLAT</span>
              <motion.div
                variants={{
                  hover: { x: 3, y: -3 }
                }}
              >
                <ArrowUpRight size={18} />
              </motion.div>
            </motion.button>
          </Link>
          
          <Link href="/hizmetler" className="group flex items-center gap-2 text-[12px] font-bold tracking-[0.1em] text-[#1D1D1F]/40 hover:text-[#1D1D1F] transition-colors">
            HİZMETLER
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}