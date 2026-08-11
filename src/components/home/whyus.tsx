"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
}

const features: FeatureItem[] = [
  {
    id: "01",
    title: "Butik Yaklaşım",
    subtitle: "Terzi dikimi dijital stratejiler.",
  },
  {
    id: "02",
    title: "Sıfır Gecikme",
    subtitle: "Milisaniyelere oynayan üst düzey performans standartları.",
  },
  {
    id: "03",
    title: "Global Vizyon",
    subtitle: "Dünya liginde konumlanan estetik imza.",
  },
];

export default function WhyUs() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="py-32 md:py-52 px-6 overflow-hidden relative text-white selection:bg-neutral-800"
    >
      <div className="absolute top-12 left-0 w-full pointer-events-none opacity-[0.02] select-none z-0">
        <motion.h2
          style={{ x: xTranslate }}
          className="text-[200px] md:text-[280px] font-medium whitespace-nowrap uppercase leading-none tracking-tighter"
        >
          • SANAT GİBİ HİSSETTİRİR • LÜKS DİJİTAL MİMARİ • TASARIM ELÇİLİĞİ
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
          variants={textVariants}
          className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/[0.05] pb-16"
        >
          <h2 className="text-5xl md:text-[88px] font-medium tracking-[-0.04em] leading-[0.95] uppercase">
            Neden <br />
            <span className="text-[#FF5A00] font-medium italic">
              Biz?
            </span>
          </h2>
          <p className="text-white text-sm md:text-base font-light max-w-xs tracking-tight leading-relaxed uppercase font-mono">
            Kutuları ve kalıpları yıkan, sadece saf etkiyle çalışan vizyon mimarisi.
          </p>
        </motion.div>

        <div className="flex flex-col border-b border-white/[0.05]">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="group relative border-t border-white/[0.05] py-10 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-all duration-500"
            >
              <div className="flex items-center gap-6 md:gap-12">
                <span className="text-xs md:text-sm font-mono text-[#FF5A00]">
                  {f.id}
                </span>
                <h3 className="text-4xl md:text-7xl font-medium tracking-[-0.03em] text-white transition-all duration-700 group-hover:drop-shadow-[0_0_32px_rgba(255,90,0,0.45)] group-hover:brightness-110">
                  {f.title}
                </h3>
              </div>

              <div className="mt-4 md:mt-0 flex items-center gap-4 pl-12 md:pl-0">
                <span className="text-sm md:text-xl font-light text-neutral-200">
                  {f.subtitle}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#FF5A00] border border-[#FF5A00] flex items-center justify-center text-white transition-all duration-500 group-hover:drop-shadow-[0_0_16px_rgba(255,90,0,0.7)] group-hover:brightness-110">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
            variants={textVariants}
            className="text-4xl md:text-[64px] font-medium tracking-[-0.04em] leading-[1] max-w-4xl mx-auto text-neutral-300"
          >
            Sözcüklere boğulmuş tasarımları değil, <br />
            <span className="text-white font-medium italic">
              hissedilen deneyimleri
            </span>{" "}
            inşa ediyoruz.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
            className="mt-16 flex flex-col items-center"
          >
            <button className="group relative flex items-center gap-3 border border-white/10 bg-transparent text-white px-10 py-5 rounded-full text-xs font-mono tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:border-white hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] active:scale-[0.98]">
              <span className="relative z-10">İletişime Geçin</span>
              <ArrowUpRight
                size={14}
                className="relative z-10 transition-transform duration-500 group-hover:rotate-45 group-hover:text-[#FF5A00]"
              />
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
