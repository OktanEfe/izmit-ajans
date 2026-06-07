"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Monitor, Camera, Share2, Film } from "lucide-react";
import Link from "next/link";
import { reveal } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  sub: string;
  icon: LucideIcon;
  desc: string;
  tags: string[];
  href: string;
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "Web Tasarım",
    sub: "Tasarım & Geliştirme",
    icon: Monitor,
    desc: "Apple ve Stripe standartlarından ilham alan, sıfır gecikme mimarisine sahip premium arayüzler. Next.js, Tailwind, sinematik animasyonlar — markanızın en güçlü satış temsilcisi.",
    tags: ["Hız Optimizasyonu", "Animasyonlar", "SEO", "E-Ticaret"],
    href: "/webtasarim",
  },
  {
    id: "02",
    title: "Sosyal Medya",
    sub: "Sosyal & Büyüme",
    icon: Share2,
    desc: "Algoritma dominasyonu, viral içerik stratejisi, kreatif kısa formlu video kurguları. Her platform için özel içerik mimarisi ve büyüme planı.",
    tags: ["Instagram", "TikTok", "YouTube", "İçerik Üretimi"],
    href: "/sosyalmedya",
  },
  {
    id: "03",
    title: "Kamera & Prodüksiyon",
    sub: "Sinematik Çekim",
    icon: Camera,
    desc: "4K HDR sinematik çekimler, drone görüntüleri, profesyonel kurgu ve color grading. Ham görüntüden başyapıta — reklam filmlerinden marka hikayelerine.",
    tags: ["4K HDR", "Drone", "Color Grading", "Reklam Filmi"],
    href: "/kamera",
  },
  {
    id: "04",
    title: "Post Prodüksiyon",
    sub: "Post Prodüksiyon",
    icon: Film,
    desc: "Ses tasarımı, dinamik kurgu, renk manipülasyonu ve motion graphics. Dijital çağın hızına ayak uyduran, akılda kalıcı içerikler.",
    tags: ["Ses Tasarımı", "Grafik Animasyon", "Kurgu", "Görsel Efekt"],
    href: "/kamera",
  },
];

export default function ServicesList() {
  return (
    <section className="py-32 md:py-48 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="mb-24 pb-12 border-b border-white/[0.06] flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] text-white uppercase leading-[0.9]">
            Neler<br />
            <span className="text-[#FF5A00] italic">
              Yapıyoruz?
            </span>
          </h2>
          <p className="text-white text-sm font-light max-w-xs leading-relaxed">
            Her disiplinde tam yetkinlik — web&apos;den prodüksiyona kadar.
          </p>
        </motion.div>

        <div className="flex flex-col divide-y divide-white/[0.05]">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={svc.href} className="group py-12 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 cursor-pointer">
                  <div className="flex items-start gap-6 md:gap-12">
                    <span className="text-xs font-mono text-[#FF5A00] pt-2">{svc.id}</span>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-mono mb-2">{svc.sub}</p>
                      <h3 className="text-3xl md:text-5xl font-medium tracking-[-0.03em] text-white transition-all duration-700 group-hover:drop-shadow-[0_0_24px_rgba(255,90,0,0.3)] inline-flex items-center gap-4">
                        <Icon size={28} className="text-[#FF5A00]" />
                        {svc.title}
                      </h3>
                      <p className="mt-4 text-white text-sm font-light max-w-lg leading-relaxed">{svc.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {svc.tags.map(t => (
                          <span key={t} className="px-3 py-1 bg-white/[0.04] border border-white/[0.06] rounded-full text-[9px] uppercase tracking-widest text-neutral-500">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FF5A00] border border-[#FF5A00] flex items-center justify-center text-white transition-all duration-500 group-hover:drop-shadow-[0_0_16px_rgba(255,90,0,0.7)] shrink-0">
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
