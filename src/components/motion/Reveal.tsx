"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // once: false → component viewport'tan çıkınca animasyon sıfırlanır
  const isInView = useInView(ref, { once: false, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.98, filter: "blur(4px)" }}
      animate={
        isInView
          ? {
              // GİRİŞ: yavaş, sinematik, ağır
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              transition: {
                duration: 0.85,
                delay,
                ease: [0.16, 1, 0.3, 1],
              },
            }
          : {
              // ÇIKIŞ: hızlı, temiz, sahne kapanıyor
              opacity: 0,
              y: 40,
              scale: 0.98,
              filter: "blur(4px)",
              transition: {
                duration: 0.4,
                ease: "easeIn",
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}
