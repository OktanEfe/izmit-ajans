"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6 pt-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ x: [0, -40, 20, 0], y: [0, 30, -40, 0], scale: [1, 1.1, 0.92, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(77,141,255,1), transparent 70%)", top: "-15%", right: "-10%", filter: "blur(120px)", opacity: 0.09 }}
        />
        <motion.div
          animate={{ x: [0, 35, -25, 0], y: [0, -40, 20, 0], scale: [1, 0.94, 1.1, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(139,92,246,1), transparent 70%)", bottom: "10%", left: "-5%", filter: "blur(110px)", opacity: 0.07 }}
        />
        <motion.div
          animate={{ x: [0, -20, 30, 0], y: [0, 35, -15, 0], scale: [1, 1.06, 0.96, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(255,90,0,1), transparent 70%)", top: "30%", left: "30%", filter: "blur(100px)", opacity: 0.05 }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,0,0.06)_0%,transparent_55%)] pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.2 }}
          className="block text-[10px] font-mono uppercase tracking-[0.5em] text-neutral-500 mb-8"
        >
          Web Tasarım &amp; Geliştirme
        </motion.span>
        <h1 className="text-[56px] sm:text-[80px] md:text-[110px] font-medium tracking-[-0.05em] leading-[0.88] uppercase text-white">
          Hızın<br />
          <span className="text-white italic font-light lowercase text-[44px] sm:text-[66px] md:text-[86px]">estetiği.</span>
        </h1>
        <p className="mt-10 text-neutral-400 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
          Sadece bir web sitesi değil, markanızın en hızlı çalışan dijital varlığını inşa ediyoruz.
        </p>
        <div className="mt-12 flex items-center justify-center gap-6">
          <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-[#FF5A00] hover:text-white transition-all duration-500">
            Proje Başlat <ArrowUpRight size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
