"use client";

import { useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
import Hero from "@/components/markalar/Hero";
import LogoGrid from "@/components/markalar/LogoGrid";
import Story from "@/components/markalar/Story";
import CTA from "@/components/markalar/CTA";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";

export default function BrandsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacityHero = useTransform(smooth, [0, 0.18], [1, 0]);

  return (
    <div className="relative z-10" ref={containerRef}>
      <Hero opacityHero={opacityHero} />
      <Reveal><LogoGrid /></Reveal>
      <Reveal><Story /></Reveal>
      <Reveal><CTA /></Reveal>
      <Reveal><Footer /></Reveal>
    </div>
  );
}
