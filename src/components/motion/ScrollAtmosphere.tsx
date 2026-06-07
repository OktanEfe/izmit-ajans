"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollAtmosphere() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const orb1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.06, 0.1, 0.07, 0.12, 0.06]);
  const orb2Opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.04, 0.09, 0.05, 0.08]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const orb3Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.08, 0.04]);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
      <motion.div
        style={{
          opacity: orb1Opacity,
          y: orb1Y,
          background: "radial-gradient(ellipse, rgba(255,90,0,1), transparent 65%)",
          position: "absolute",
          width: "700px",
          height: "500px",
          borderRadius: "50%",
          top: "10%",
          right: "-5%",
          filter: "blur(120px)",
        }}
      />
      <motion.div
        style={{
          opacity: orb2Opacity,
          y: orb2Y,
          background: "radial-gradient(ellipse, rgba(139,92,246,1), transparent 65%)",
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          bottom: "20%",
          left: "-5%",
          filter: "blur(140px)",
        }}
      />
      <motion.div
        style={{
          opacity: orb3Opacity,
          background: "radial-gradient(ellipse, rgba(77,141,255,1), transparent 65%)",
          position: "absolute",
          width: "500px",
          height: "400px",
          borderRadius: "50%",
          top: "50%",
          left: "30%",
          filter: "blur(110px)",
        }}
      />
    </div>
  );
}
