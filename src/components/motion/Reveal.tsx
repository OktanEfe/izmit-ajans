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
  const isInView = useInView(ref, { once: false, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50, filter: "blur(4px)" }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.85,
                delay,
                ease: [0.16, 1, 0.3, 1],
              },
            }
          : {
              opacity: 0,
              y: 50,
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
