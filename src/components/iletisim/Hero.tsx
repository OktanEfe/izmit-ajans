"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[65vh] flex flex-col items-center justify-center text-center px-6 pt-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ x: [0, 35, -20, 0], y: [0, -45, 25, 0], scale: [1, 1.1, 0.92, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(255,90,0,1), transparent 70%)", top: "-10%", left: "10%", filter: "blur(100px)", opacity: 0.09 }}
        />
        <motion.div
          animate={{ x: [0, -40, 25, 0], y: [0, 30, -35, 0], scale: [1, 0.93, 1.1, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(139,92,246,1), transparent 70%)", top: "0%", right: "5%", filter: "blur(120px)", opacity: 0.07 }}
        />
        <motion.div
          animate={{ x: [0, 20, -30, 0], y: [0, 40, -15, 0], scale: [1, 1.06, 0.96, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(77,141,255,1), transparent 70%)", bottom: "0%", left: "40%", filter: "blur(110px)", opacity: 0.06 }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,0,0.06)_0%,transparent_60%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <span className="block text-[10px] font-mono uppercase tracking-[0.5em] text-[#FF5A00] mb-8">Bize Ulaşın</span>
        <h1 className="text-[52px] sm:text-[72px] md:text-[96px] font-medium tracking-[-0.05em] leading-[0.88] text-white uppercase">
          Projeyi<br />
          <span className="text-[#FF5A00] italic">Başlatalım.</span>
        </h1>
      </motion.div>
    </section>
  );
}
