"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, ShieldCheck, Zap, Globe, LucideIcon } from "lucide-react";

interface StatItem {
  id: string;
  number: string;
  label: string;
  desc: string;
  icon: LucideIcon; // Hata vermemesi için kesin Lucide tipi atandı
}

const stats: StatItem[] = [
  {
    id: "01",
    number: "48+",
    label: "Kreatif Prodüksiyon",
    desc: "4K sinematik standartlarda, rafine marka hikayeleri ve lüks segment görsel varlıklar.",
    icon: Zap,
  },
  {
    id: "02",
    number: "99.4%",
    label: "Kusursuz Dağıtım",
    desc: "Sıfır gecikmeli Next.js mimarileri ve Apple estetiğinden ilham alan benzersiz arayüzler.",
    icon: ShieldCheck,
  },
  {
    id: "03",
    number: "12M+",
    label: "Dijital Etkileşim",
    desc: "Stratejik kısa formlu video kurguları ve viral algoritma dominasyonu ile kitlesel büyüme.",
    icon: Globe,
  },
];

export default function VisionImpact() {
  // HTMLDivElement tipi eklenerek referans hatası çözüldü
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Ağır ve akıcı parallax etkisi için scroll takibi
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Sol ve sağ blokların scroll ile asimetrik olarak zıt yönlere esnemesi (Parallax)
  const yLeft = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yRight = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Mouse hareketini yakalayıp lüks ışık sızması (Glow) efekti yaratma
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Premium sayfa açılış animasyonları (Ağır ve akışkan)
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 60, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const gridVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] py-32 md:py-52 px-6 overflow-hidden text-white selection:bg-neutral-800 selection:text-white"
    >
      {/* MOUSE GLOW: Arka plandaki lüks hareketli ışık katmanı */}
      <div
        className="pointer-events-none absolute -inset-px opacity-20 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(77,141,255,0.15), rgba(255,90,0,0.08), transparent 40%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          
          {/* SOL ALAN: Manifesto & Ağır Scroll Başlığı */}
          <motion.div style={{ y: yLeft }} className="lg:col-span-5 lg:sticky top-40">
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              whileInView={{ opacity: 0.3, letterSpacing: "0.5em" }}
              transition={{ duration: 1.2 }}
              className="text-[10px] font-bold text-white uppercase block mb-6 font-mono"
            >
              Vizyon & Etki
            </motion.span>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={textVariants}
              className="text-5xl md:text-[76px] font-medium tracking-[-0.04em] uppercase leading-[0.9] mb-8"
            >
              Sıradanı <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF]">
                Reddet.
              </span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-sm text-balance"
            >
              Sadece projenizi inşa etmiyoruz; pazar içerisindeki konumunuzu radikal bir estetik mimariyle yeniden tasarlıyoruz.
            </motion.p>
          </motion.div>

          {/* SAĞ ALAN: Parallax İstatistik Kartları */}
          <motion.div
            style={{ y: yRight }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            variants={gridVariants}
            className="lg:col-span-7 flex flex-col gap-8 md:gap-10"
          >
            {stats.map((stat, i) => {
              // Komponent referansı büyük harfle atanarak JSX render hatası giderildi
              const Icon = stat.icon;

              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative bg-[#0D0D0F] border border-neutral-900 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 overflow-hidden group transition-all duration-700 hover:border-neutral-800 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                >
                  {/* Apple Intelligence Aurora Border Glow (Masaüstünde hover anında) */}
                  <motion.div
                    variants={{
                      hover: { opacity: 0.4, backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
                    }}
                    transition={{
                      opacity: { duration: 0.4 },
                      backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear" },
                    }}
                    className="absolute inset-0 rounded-[32px] border-[1.5px] border-transparent bg-gradient-to-r from-[#4D8DFF]/40 via-[#FF7AB6]/40 via-[#FF5A00]/40 to-[#4D8DFF]/40 bg-[size:200%_auto] opacity-0 pointer-events-none z-10 [mask-image:linear-gradient(rgba(0,0,0,1),rgba(0,0,0,1))] [mask-clip:content-box] hidden md:block"
                  />

                  {/* SOL KISIM: Dev Rakamlar ve Etiket */}
                  <div className="flex flex-col gap-2 relative z-20">
                    <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.2em] text-neutral-500 mb-2">
                      <span className="text-[#FF5A00] font-medium">{stat.id}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-800" />
                      <span className="uppercase">Metrics</span>
                    </div>

                    <div className="flex items-baseline gap-4">
                      <h3 className="text-6xl md:text-8xl font-medium tracking-tighter text-white font-sans transition-transform duration-700 group-hover:scale-[1.02]">
                        {stat.number}
                      </h3>
                      <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-[#FF5A00] group-hover:border-[#FF5A00]/20 transition-colors duration-500">
                        <Icon size={20} />
                      </div>
                    </div>

                    <h4 className="text-xl font-medium text-neutral-200 mt-4 group-hover:text-[#FF5A00] transition-colors duration-400">
                      {stat.label}
                    </h4>
                    <p className="text-base font-light text-neutral-400 max-w-md leading-relaxed mt-1">
                      {stat.desc}
                    </p>
                  </div>

                  {/* SAĞ KISIM: Minimalist Buton Aksiyonu */}
                  <div className="relative z-20 md:self-end md:ml-auto">
                    <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 bg-neutral-900/50 backdrop-blur-md transition-all duration-500 group-hover:bg-[#FF5A00] group-hover:border-[#FF5A00] group-hover:text-white">
                      <motion.div
                        variants={{
                          hover: { rotate: 45, scale: 1.1 },
                        }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <ArrowUpRight size={18} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Arka plan gizli büyük soyut neon hare */}
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-gradient-to-tr from-[#FF5A00]/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Arka Plan Premium İnce Gren Dokusu */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}