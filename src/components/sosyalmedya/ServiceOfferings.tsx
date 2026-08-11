"use client";

import { motion } from "framer-motion";
import { Target, Zap, BarChart3, Users } from "lucide-react";
import { reveal } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const services: ServiceItem[] = [
  { icon: Target, title: "İçerik Stratejisi", desc: "Marka sesi, ton ve estetik kılavuz. Algoritma ve hedef kitle analizi." },
  { icon: Zap, title: "Kreatif Üretim", desc: "Profesyonel fotoğraf, Reels kurgusu, grafik tasarım ve copywriting." },
  { icon: BarChart3, title: "Analitik & Raporlama", desc: "Haftalık performans raporu, rakip analizi, büyüme projeksiyon." },
  { icon: Users, title: "Topluluk Yönetimi", desc: "7/24 yorum yanıtlama, DM yönetimi, kriz iletişimi." },
];

export default function ServiceOfferings() {
  return (
    <section className="py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }} className="mb-20 border-b border-white/[0.06] pb-12">
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase text-white leading-[0.9]">
            Ne<br />
            <span className="text-[#FF5A00] italic">Sunuyoruz?</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
                transition={{ delay: i * 0.08 }}
                className="group flex gap-6 p-8 bg-[#0A0A0A] rounded-[2rem] border border-white/[0.06] hover:border-[#FF5A00]/30 transition-all duration-700"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF5A00]/10 flex items-center justify-center text-[#FF5A00] shrink-0 group-hover:bg-[#FF5A00] group-hover:text-white transition-all duration-500">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">{s.title}</h3>
                  <p className="text-white text-sm font-light leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
