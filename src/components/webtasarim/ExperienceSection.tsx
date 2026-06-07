"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MousePointer2, ShieldCheck } from "lucide-react";
import { reveal } from "@/lib/animations";

const miniFeatures = [
  { icon: MousePointer2, title: "Akıcı Etkileşim", desc: "Kullanıcıyı bağlayan pürüzsüz dijital deneyimler." },
  { icon: ShieldCheck, title: "Güvenilir Teslimat", desc: "Her proje zamanında ve söz verilen kalitede teslim." },
];

export default function ExperienceSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.05 }} className="relative h-[460px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026"
            alt="Web Design"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-8 left-8">
            <span className="px-4 py-2 bg-[#FF5A00] rounded-full text-[9px] font-bold uppercase tracking-widest text-white">Premium Dijital Deneyim</span>
          </div>
        </motion.div>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.05 }} className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.04em] uppercase text-white leading-[0.9]">
            Sadece tasarım değil,<br />
            <span className="text-[#FF5A00] italic">Etki</span> yaratıyoruz.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {miniFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-8 bg-white/[0.03] rounded-3xl border border-white/[0.06] hover:border-[#FF5A00]/30 transition-colors duration-500">
                  <Icon size={24} className="text-[#FF5A00] mb-4" />
                  <h4 className="font-bold uppercase tracking-tight text-white mb-2">{f.title}</h4>
                  <p className="text-white text-sm">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
