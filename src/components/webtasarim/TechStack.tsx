"use client";

import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingUp, Users, Award, Clock, Star, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StatItem {
  icon: LucideIcon;
  rawValue: number | null; /* null = symbol like ∞ or 5.0 */
  suffix: string;
  display: string;        /* fallback / symbol display */
  label: string;
  desc: string;
}

const stats: StatItem[] = [
  { icon: TrendingUp, rawValue: 340,  suffix: "%+", display: "+340%", label: "Ortalama Büyüme",       desc: "Müşterilerimizin ilk 6 ayda ulaştığı dönüşüm artışı." },
  { icon: Users,      rawValue: 50,   suffix: "+",  display: "50+",   label: "Mutlu Marka",           desc: "Birlikte büyüttüğümüz ve dijitale taşıdığımız işletmeler." },
  { icon: Award,      rawValue: 100,  suffix: "%",  display: "100%",  label: "Teslimat Taahhüdü",    desc: "Anlaşılan sürede, söz verilen kalitede — her seferinde." },
  { icon: Clock,      rawValue: 48,   suffix: "s",  display: "48s",   label: "Hızlı Başlangıç",      desc: "Projeye başlamadan önce sadece 48 saatlik keşif süreci." },
  { icon: Star,       rawValue: null, suffix: "",   display: "5.0",   label: "Müşteri Memnuniyeti",  desc: "Referanslarımız konuşuyor — değerlendirmelerimizi okuyun." },
  { icon: Zap,        rawValue: null, suffix: "",   display: "∞",     label: "Destek",               desc: "Yayına aldıktan sonra da yanınızdayız. Sınırsız revizyon." },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref      = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const spring   = useSpring(motionVal, { stiffness: 60, damping: 20, mass: 0.8 });
  const inViewRef = useRef<HTMLSpanElement>(null);
  const inView   = useInView(inViewRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(motionVal, target, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    return () => ctrl.stop();
  }, [inView, motionVal, target]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        const rounded = suffix === "%" || suffix === "%+" ? Math.round(v) : Math.round(v);
        ref.current.textContent =
          suffix === "%+" ? `+${rounded}%` : `${rounded}${suffix}`;
      }
    });
  }, [spring, suffix]);

  return (
    <span ref={inViewRef}>
      <span ref={ref}>0{suffix}</span>
    </span>
  );
}

export default function TechStack() {
  return (
    <section className="py-32 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.06]"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase text-white leading-[0.9]">
            Rakamlar<br />
            <span className="text-[#FF5A00] italic">Konuşuyor.</span>
          </h2>
          <p className="text-white text-sm font-light max-w-xs leading-relaxed">
            Sonuçlarımızı kelimelerle değil, verilerle anlatıyoruz.
          </p>
        </motion.div>

        {/* Top row — 3 large stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] mb-0">
          {stats.slice(0, 3).map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4 px-0 sm:px-10 first:pl-0 last:pr-0 py-10"
              >
                <Icon size={18} className="text-[#FF5A00]" />
                <span className="text-[64px] md:text-[80px] font-black leading-none tracking-tighter tabular-nums text-white">
                  {s.rawValue !== null
                    ? <CountUp target={s.rawValue} suffix={s.suffix} />
                    : s.display}
                </span>
                <div>
                  <p className="text-white font-semibold text-sm uppercase tracking-wide mb-1">{s.label}</p>
                  <p className="text-white/60 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.08]" />

        {/* Bottom row — 3 smaller stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {stats.slice(3).map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: (i + 3) * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-6 px-0 sm:px-10 first:pl-0 last:pr-0 py-10"
              >
                <span className="text-[48px] md:text-[56px] font-black leading-none tracking-tighter tabular-nums text-[#FF5A00] shrink-0">
                  {s.rawValue !== null
                    ? <CountUp target={s.rawValue} suffix={s.suffix} />
                    : s.display}
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Icon size={14} className="text-white/40" />
                    <p className="text-white font-semibold text-xs uppercase tracking-widest">{s.label}</p>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
