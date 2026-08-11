"use client";

import { motion } from "framer-motion";
import { Film, Sparkles, Plane, Zap, Camera, Crosshair } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  num: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  { icon: Film,      num: "01", title: "Sinematik Kurgu",       desc: "İzleyeni durduran anlar — hikayeniz perdede hayat buluyor." },
  { icon: Sparkles,  num: "02", title: "Trendlere Uygun Çekim", desc: "Zamanın nabzını tutan kareler, markanızı gündemde tutar." },
  { icon: Plane,     num: "03", title: "Drone / Hava",           desc: "Perspektifi değiştiren görseller, bakış açınızı yükseltir." },
  { icon: Zap,       num: "04", title: "Tanıtım Filmi",          desc: "Markanızı hatırlanır kılan, duyguda iz bırakan prodüksiyon." },
  { icon: Camera,    num: "05", title: "Color Grading",          desc: "Her kare, hissetmek istediğiniz atmosferi taşır." },
  { icon: Crosshair, num: "06", title: "Ses Tasarımı",           desc: "Görüntüyü tamamlayan ses — hikayenizi bütünleştiriyor." },
];

export default function Features() {
  return (
    <section className="py-32 md:py-48 px-6 bg-transparent relative z-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/[0.06]"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase leading-[0.9] text-white">
            Yüksek<br />
            <span className="text-[#FF5A00] italic font-medium">Standartlar.</span>
          </h2>
          <p className="text-white text-sm font-light max-w-xs leading-relaxed">
            Teknik yetkinliğimizi sanatsal dokunuşlarla birleştiriyoruz.
          </p>
        </motion.div>

        <div className="flex flex-col divide-y divide-white/[0.06]">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px 15% 0px" }}
                transition={{ delay: i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group py-8 md:py-10 flex items-center gap-6 md:gap-12"
              >
                <span className="text-[11px] font-mono text-[#FF5A00] w-8 shrink-0">{f.num}</span>

                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-[#FF5A00]/40 group-hover:bg-[#FF5A00]/10 transition-all duration-400">
                  <Icon size={16} className="text-white/50 group-hover:text-[#FF5A00] transition-colors duration-400" />
                </div>

                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-12">
                  <h3 className="text-xl md:text-3xl font-medium tracking-[-0.02em] text-white uppercase group-hover:text-[#FF5A00] transition-colors duration-500">
                    {f.title}
                  </h3>
                  <p className="text-white text-sm font-light leading-relaxed md:max-w-xs md:text-right">
                    {f.desc}
                  </p>
                </div>

                <div className="w-1 h-8 rounded-full bg-white/[0.04] group-hover:bg-[#FF5A00] transition-colors duration-500 shrink-0 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
