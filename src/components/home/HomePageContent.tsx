"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Reveal from "@/components/motion/Reveal";
import IntroOverlay from "@/components/home/IntroOverlay";

const WhyUs = dynamic(() => import("@/components/home/whyus"), {
  ssr: false,
  loading: () => <div className="h-screen bg-[#050505]" />,
});

export default function HomePageContent() {
  const [introVisible, setIntroVisible] = useState(true);

  return (
    <>
      {introVisible && <IntroOverlay onDone={() => setIntroVisible(false)} />}
      <main className="relative z-10 min-h-screen">
        <Reveal><Hero /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><WhyUs /></Reveal>
        <Reveal><Footer /></Reveal>
      </main>
    </>
  );
}
