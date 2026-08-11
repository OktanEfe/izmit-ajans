"use client";

import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useIsTouchDevice } from "@/lib/useIsTouchDevice";

interface HeroProps {
  opacityHero: MotionValue<number>;
}

export default function Hero({ opacityHero }: HeroProps) {
  const isTouch = useIsTouchDevice();
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6 pt-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        {!isTouch && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30 - i * 4, 0],
              x: [0, (i % 2 === 0 ? 1 : -1) * (10 + i * 2), 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute w-1 h-1 rounded-full bg-[#FF5A00]"
            style={{
              left: `${5 + (i * 4.8) % 90}%`,
              top: `${10 + (i * 7.3) % 80}%`,
            }}
          />
        ))}
        <motion.div
          animate={isTouch ? undefined : { x: [0, 30, -15, 0], y: [0, -40, 20, 0], scale: [1, 1.12, 0.92, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(255,90,0,1), transparent 70%)", top: "-5%", right: "5%", filter: "blur(120px)", opacity: 0.06 }}
        />
        <motion.div
          animate={isTouch ? undefined : { x: [0, -25, 15, 0], y: [0, 30, -20, 0], scale: [1, 0.95, 1.08, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(139,92,246,1), transparent 70%)", bottom: "5%", left: "5%", filter: "blur(110px)", opacity: 0.07 }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,0,0.05)_0%,transparent_60%)] pointer-events-none" />

      <motion.div style={{ opacity: opacityHero }} className="z-10 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.2 }}
          className="block text-[10px] font-mono uppercase tracking-[0.5em] text-neutral-500 mb-8"
        >
          Referanslarımız
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[56px] sm:text-[80px] md:text-[110px] font-medium tracking-[-0.05em] leading-[0.88] text-white uppercase"
        >
          Çalıştığımız<br />
          <span className="text-[#FF5A00] italic">Markalar.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 text-neutral-200 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
        >
          İzmit ve çevresinin köklü markalarının dijital dönüşüm yolculuğunda yanlarındayız.
        </motion.p>
      </motion.div>
    </section>
  );
}
