"use client";

import { motion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import { Zap, Search, ShieldCheck, Activity, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  sub: string;
  color: string;
  bg: string;
}

const features: Feature[] = [
  { icon: Zap, title: "LCP: 0.6s", sub: "Dünya Standartlarının Üzerinde", color: "text-[#FF5A00]", bg: "bg-[#FF5A00]/10" },
  { icon: Search, title: "SEO: 100", sub: "Organik Trafik Uyumluluğu", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: ShieldCheck, title: "SSL Guard", sub: "Kurumsal Veri Güvenliği", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { icon: Activity, title: "%99.9 Up", sub: "Kesintisiz Erişilebilirlik", color: "text-violet-400", bg: "bg-violet-400/10" },
];

interface MacAnimationProps {
  smooth: MotionValue<number>;
}

export default function MacAnimation({ smooth }: MacAnimationProps) {
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = windowWidth < 1024;

  const lidRotateX = useTransform(smooth, [0, 0.22], [-90, 0]);
  const macScale = useTransform(smooth, [0, 0.28], [0.6, 1.05]);
  const macOpacity = useTransform(smooth, [0, 0.08, 0.28], [0, 1, 1]);
  const yContent = useTransform(smooth, [0.38, 1], [0, -120]);

  const card1O = useTransform(smooth, [0.22, 0.3], [0, 1]);
  const card1Y = useTransform(smooth, [0.22, 0.36], [80, isMobile ? -70 : -140]);
  const card1X = useTransform(smooth, [0.22, 0.36], [isMobile ? -80 : -220, isMobile ? -60 : -180]);

  const card2O = useTransform(smooth, [0.26, 0.34], [0, 1]);
  const card2Y = useTransform(smooth, [0.26, 0.4], [80, isMobile ? -20 : -50]);
  const card2X = useTransform(smooth, [0.26, 0.4], [isMobile ? 80 : 220, isMobile ? 60 : 180]);

  const card3O = useTransform(smooth, [0.3, 0.38], [0, 1]);
  const card3Y = useTransform(smooth, [0.3, 0.44], [80, isMobile ? 30 : 50]);
  const card3X = useTransform(smooth, [0.3, 0.44], [isMobile ? -80 : -220, isMobile ? -60 : -180]);

  const card4O = useTransform(smooth, [0.34, 0.42], [0, 1]);
  const card4Y = useTransform(smooth, [0.34, 0.48], [80, isMobile ? 90 : 140]);
  const card4X = useTransform(smooth, [0.34, 0.48], [isMobile ? 80 : 220, isMobile ? 60 : 180]);

  const cards = [
    { style: { opacity: card1O, x: card1X, y: card1Y }, data: features[0] },
    { style: { opacity: card2O, x: card2X, y: card2Y }, data: features[1] },
    { style: { opacity: card3O, x: card3X, y: card3Y }, data: features[2] },
    { style: { opacity: card4O, x: card4X, y: card4Y }, data: features[3] },
  ];

  return (
    <section className="h-[260vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden" style={{ perspective: "1200px" }}>
        <div className="relative flex items-center justify-center w-full h-full">
          <motion.div style={{ scale: macScale, opacity: macOpacity }} className="absolute w-[78%] max-w-[860px] h-[20px] bg-[#222] rounded-b-xl bottom-[30%] z-10 border-t border-white/20" />
          <motion.div
            style={{ rotateX: lidRotateX, scale: macScale, opacity: macOpacity, transformOrigin: "bottom" }}
            className="w-[78%] max-w-[860px] aspect-video bg-[#111] rounded-t-[2rem] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative z-20 overflow-hidden"
          >
            <div className="absolute inset-2 bg-black rounded-[1.8rem] overflow-hidden flex items-center justify-center border border-white/5">
              <motion.div style={{ y: yContent }} className="w-full h-full p-8">
                <div className="flex gap-2 mb-8">
                  {(["red", "yellow", "green"] as const).map(c => (
                    <div key={c} className={`w-3 h-3 rounded-full ${c === "red" ? "bg-red-500/50" : c === "yellow" ? "bg-yellow-500/50" : "bg-green-500/50"}`} />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-28 bg-white/5 rounded-2xl animate-pulse" />
                  <div className="h-28 bg-white/5 rounded-2xl animate-pulse" style={{ animationDelay: "0.3s" }} />
                  <div className="h-56 col-span-2 bg-gradient-to-br from-[#FF5A00]/10 to-transparent rounded-2xl flex items-center justify-center">
                    <Cpu size={56} className="text-[#FF5A00]/20" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {cards.map(({ style, data }, i) => {
            const Icon = data.icon;
            return (
              <motion.div key={i} style={style} className="absolute z-30 bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-2xl w-44 md:w-60 text-black">
                <div className="flex items-center gap-2 md:gap-3 mb-3">
                  <div className={`p-1.5 md:p-2 rounded-lg ${data.bg}`}>
                    <Icon size={14} className={`md:w-4 md:h-4 ${data.color}`} />
                  </div>
                  <span className="font-bold text-sm">{data.title}</span>
                </div>
                <p className="text-[9px] md:text-[10px] text-neutral-500 font-bold uppercase tracking-widest">{data.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
