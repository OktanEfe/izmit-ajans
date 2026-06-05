"use client";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Brands from "@/components/home/Brands";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Reveal from "@/components/motion/Reveal";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const WhyUs = dynamic(() => import("@/components/home/whyus"), {
  ssr: false,
  loading: () => <div className="h-screen bg-[#050505]" />,
});

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <main className="relative z-10 min-h-screen bg-[#050505]">
        <Reveal><Hero /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><WhyUs /></Reveal>
        <Reveal><Brands /></Reveal>
        <Reveal><Footer /></Reveal>
      </main>
    </SmoothScrollProvider>
  );
}
