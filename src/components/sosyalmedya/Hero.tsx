"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useIsTouchDevice } from "@/lib/useIsTouchDevice";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const isTouch = useIsTouchDevice();

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="hero-grid absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,90,0,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <motion.div
          animate={isTouch ? undefined : { x: [0, -30, 15, 0], y: [0, 25, -35, 0], scale: [1, 1.1, 0.93, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[700px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(255,90,0,1), transparent 70%)", top: "-10%", right: "-5%", filter: "blur(130px)", opacity: 0.09 }}
        />
        <motion.div
          animate={isTouch ? undefined : { x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 0.94, 1.08, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(236,72,153,1), transparent 70%)", bottom: "0%", left: "-5%", filter: "blur(120px)", opacity: 0.07 }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,0,0.07)_0%,transparent_60%)] pointer-events-none" />

      <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-[9px] font-mono uppercase tracking-[0.4em] text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] animate-pulse" />
            Sosyal Medya Yönetimi
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="text-[56px] sm:text-[80px] md:text-[110px] font-medium tracking-[-0.05em] leading-[0.88] text-white uppercase"
        >
          Görünür<br />
          <span className="text-[#FF5A00] italic">Olun.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 text-white text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
        >
          Algoritmanın ötesine geçin. Sadece içerik değil, dijital otorite inşa ediyoruz.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-12">
          <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-[#FF5A00] text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-500">
            Ücretsiz Analiz İste
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
