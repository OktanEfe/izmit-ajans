"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useIsTouchDevice } from "@/lib/useIsTouchDevice";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const smooth = useSpring(heroScroll, { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(smooth, [0, 0.5], [1, 0]);
  const lensScale = useTransform(smooth, [0, 0.15], [1.2, 0.75]);
  const isTouch = useIsTouchDevice();

  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 bg-black" ref={heroRef}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[900, 700, 500, 320].map((size, i) => (
          <motion.div
            key={size}
            animate={isTouch ? undefined : { rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 25 + i * 10, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full border border-[#FF5A00]"
            style={{ width: size, height: size, opacity: 0.05 + i * 0.04 }}
          />
        ))}
        <motion.div
          animate={isTouch ? undefined : { scale: [1, 1.2, 1], opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,90,0,0.15)_0%,transparent_70%)] rounded-full blur-3xl"
        />
        <motion.div
          animate={isTouch ? undefined : { scale: [1, 0.85, 1], opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
          className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(77,141,255,0.12)_0%,transparent_70%)] rounded-full blur-2xl"
        />
      </div>

      <motion.div style={{ opacity: heroOpacity }} className="z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.2 }}
          className="block text-[10px] font-mono uppercase tracking-[0.5em] text-neutral-500 mb-8"
        >
          Sinematik Prodüksiyon
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[38px] sm:text-[56px] md:text-[80px] lg:text-[110px] font-medium tracking-[-0.05em] leading-[0.88] text-white uppercase"
        >
          Görsel<br />
          <span className="text-[#FF5A00] italic">Mükemmellik.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 text-white text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed"
        >
          4K HDR&apos;dan drone çekimine, color grading&apos;den ses tasarımına — hikayenizi başyapıta dönüştürüyoruz.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-12">
          <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-[#FF5A00] hover:text-white transition-all duration-500">
            Proje Başlat
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ scale: lensScale, opacity: heroOpacity }}
        className="absolute w-[350px] h-[350px] border-2 border-[#FF5A00]/30 rounded-full pointer-events-none shadow-[0_0_80px_rgba(255,90,0,0.2),inset_0_0_40px_rgba(255,90,0,0.05)]"
      />
    </section>
  );
}
