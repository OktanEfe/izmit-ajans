"use client";

import { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import Hero from "@/components/webtasarim/Hero";
import MacAnimation from "@/components/webtasarim/MacAnimation";
import ExperienceSection from "@/components/webtasarim/ExperienceSection";
import ProcessSection from "@/components/webtasarim/ProcessSection";
import TechStack from "@/components/webtasarim/TechStack";
import CTA from "@/components/webtasarim/CTA";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";

export default function WebDesignPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative z-10" ref={containerRef}>
      <Reveal><Hero /></Reveal>
      <MacAnimation smooth={smooth} />
      <Reveal><ExperienceSection /></Reveal>
      <Reveal><ProcessSection /></Reveal>
      <Reveal><TechStack /></Reveal>
      <Reveal><CTA /></Reveal>
      <Reveal><Footer /></Reveal>
    </div>
  );
}
