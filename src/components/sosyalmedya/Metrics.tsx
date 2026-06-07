"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Eye } from "lucide-react";
import { reveal } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

interface Metric {
  num: string;
  label: string;
  icon: LucideIcon;
  desc: string;
}

const metrics: Metric[] = [
  { num: "12M+", label: "Yıllık Gösterim", icon: Eye, desc: "Yönettiğimiz hesapların toplam yıllık içerik gösterimi" },
  { num: "320%", label: "Ortalama Büyüme", icon: TrendingUp, desc: "İlk 6 ayda takipçi ve etkileşim artışı ortalaması" },
  { num: "48+", label: "Aktif Marka", icon: Users, desc: "Şu anda sosyal medya yönetimi verdiğimiz marka sayısı" },
];

export default function Göstergeler() {
  return (
    <section className="py-32 md:py-48 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} className="text-center mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500 block mb-4">Rakamlarla Biz</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase text-white leading-[0.9]">
            Sonuç<br />
            <span className="text-[#FF5A00] italic">Odaklı.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={i}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0A0A0A] border border-white/[0.06] rounded-[2rem] p-10 group hover:border-[#FF5A00]/30 transition-all duration-700"
              >
                <Icon size={28} className="text-[#FF5A00] mb-8" />
                <div className="text-6xl md:text-7xl font-medium tracking-tighter text-white mb-4">{m.num}</div>
                <h3 className="text-lg font-medium text-neutral-200 mb-3">{m.label}</h3>
                <p className="text-white text-sm font-light leading-relaxed">{m.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
