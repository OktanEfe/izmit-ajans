"use client";
import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Process from "@/components/Process";


const WhyUs = dynamic(() => import("@/components/whyus"), { 
  ssr: false,
  loading: () => <div className="h-screen bg-white" /> 
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <Hero />
      <Services />
      <Process />
      
      <WhyUs />

      <Brands />
      <Footer />
    </main>
  );
}