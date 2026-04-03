// src/components/BackgroundWrapper.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#010101", "#02040a", "#010101"]);

  return (
    <motion.div style={{ backgroundColor: bgColor }} className="relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         {/* Renk dalgaların burada */}
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}