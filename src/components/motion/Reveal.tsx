"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15, margin: "0px 0px 15% 0px" });

  // Fail-safe: content must never stay permanently invisible — if the
  // IntersectionObserver callback is ever delayed or missed (heavy
  // main-thread contention, an animation frame budget squeeze, etc.),
  // force it visible after a short grace period regardless.
  const [forceVisible, setForceVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setForceVisible(true), 2500);
    return () => clearTimeout(t);
  }, []);
  const visible = isInView || forceVisible;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={
        visible
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.85,
                delay,
                ease: [0.16, 1, 0.3, 1],
              },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
