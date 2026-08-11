"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useIsTouchDevice } from "@/lib/useIsTouchDevice";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const isTouch = useIsTouchDevice();

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={isTouch ? undefined : { x: [0, 40, -20, 0], y: [0, -50, 25, 0], scale: [1, 1.1, 0.92, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(255,90,0,1), transparent 70%)", top: "-5%", left: "0%", filter: "blur(110px)", opacity: 0.08 }}
        />
        <motion.div
          animate={isTouch ? undefined : { x: [0, -35, 20, 0], y: [0, 30, -40, 0], scale: [1, 0.95, 1.12, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(139,92,246,1), transparent 70%)", top: "10%", right: "-5%", filter: "blur(120px)", opacity: 0.07 }}
        />
        <motion.div
          animate={isTouch ? undefined : { x: [0, 25, -30, 0], y: [0, 40, -20, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(77,141,255,1), transparent 70%)", bottom: "10%", left: "25%", filter: "blur(100px)", opacity: 0.06 }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,0,0.06)_0%,transparent_60%)] pointer-events-none" />

      <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 0.4, letterSpacing: "0.5em" }}
          transition={{ duration: 1.2 }}
          className="block text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500 mb-8"
        >
          Tam Hizmet Dijital Ajans
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[56px] sm:text-[80px] md:text-[110px] font-medium tracking-[-0.05em] leading-[0.88] text-white uppercase"
        >
          Strateji<br />
          <span className="text-[#FF5A00] italic">
            &amp; Estetik.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 text-white text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed"
        >
          Mühendislik disiplinini saf kreatif estetikle birleştiriyor, markanız için dijital ekosistemler inşa ediyoruz.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <Link href="/iletisim" className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#FF5A00] hover:text-white transition-all duration-500">
            Proje Başlat
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
