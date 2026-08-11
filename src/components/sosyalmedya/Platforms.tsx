"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Play, Globe } from "lucide-react";
import { reveal } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

interface Platform {
  Icon: LucideIcon;
  name: string;
  tag: string;
  desc: string;
  color: string;
}

const platforms: Platform[] = [
  { Icon: Instagram, name: "Instagram", tag: "Reels & Paylaşım", desc: "Görsel mükemmeliyetçiliği Reels kurgularıyla birleştirerek markanızı keşfedin merkezine konumlandırıyoruz.", color: "from-[#FF5A00]/20 to-[#EC4899]/10" },
  { Icon: Youtube, name: "YouTube", tag: "Uzun & Kısa Video", desc: "Uzun soluklu sinematik içerikler ve Shorts ekosistemiyle sadık bir abone topluluğu inşa ediyoruz.", color: "from-[#FF5A00]/20 to-[#4D8DFF]/10" },
  { Icon: Play, name: "TikTok", tag: "Viral İçerik", desc: "Trendsetter kurgularla markanızı viral döngülerin başlangıcı yapıyoruz.", color: "from-[#8B5CF6]/20 to-[#4D8DFF]/10" },
  { Icon: Globe, name: "Tüm Platformlar", tag: "Çok Kanallı", desc: "X, LinkedIn, Pinterest — her platformda stratejik ve tutarlı varlık.", color: "from-[#4D8DFF]/20 to-[#8B5CF6]/10" },
];

export default function Platforms() {
  return (
    <section className="py-32 md:py-48 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }} className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-neutral-100 pb-12">
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase leading-[0.9]">
            Her<br />
            <span className="text-[#FF5A00] italic font-medium">Platform.</span>
          </h2>
          <p className="text-white text-sm font-light max-w-xs leading-relaxed">
            Markanızın aktif olduğu her kanalda stratejik varlık ve tutarlı estetik.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((p, i) => {
            const Icon = p.Icon;
            return (
              <motion.div
                key={i}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
                transition={{ delay: i * 0.08 }}
                className={`bg-gradient-to-br ${p.color} rounded-[3rem] p-10 md:p-12 border border-neutral-100 group hover:shadow-xl transition-all duration-500 relative overflow-hidden`}
              >
                <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white mb-8 group-hover:bg-[#FF5A00] transition-colors duration-500">
                  <Icon size={24} />
                </div>
                <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-neutral-400 block mb-2">{p.tag}</span>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 uppercase">{p.name}</h3>
                <p className="text-neutral-600 font-light leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
