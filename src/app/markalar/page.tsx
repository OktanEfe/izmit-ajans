"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { reveal } from "@/lib/animations";

// Sadece public/logos/ içinde GERÇEKTEN VAR olan dosyalar
const namedLogos = [
  { src: "/logos/sommario_logo.png", name: "Sommario Cafe" },
  { src: "/logos/hub.png", name: "Hub Coffee Kitchen" },
  { src: "/logos/hampton.png", name: "Hampton" },
  { src: "/logos/begendik.png", name: "Beğendik" },
  { src: "/logos/Efsanalofis.png", name: "Ef Sanal Ofis" },
  { src: "/logos/fakülte.png", name: "Fakülte Teras" },
  { src: "/logos/izmitdilakademi.png", name: "İzmit Dil Akademi" },
  { src: "/logos/heef.png", name: "Heef" },
  { src: "/logos/cleopatra.jpeg", name: "Cleopatra INK" },
  { src: "/logos/burgerschon.jpeg", name: "Burger Schön" },
  { src: "/logos/ehli.jpeg", name: "Ehl-i Kadayıf" },
  { src: "/logos/social.jpeg", name: "Social + Plus" },
  { src: "/logos/kebapciali-logo.png", name: "Kebapçı Ali" },
  { src: "/logos/kebapcımehmet.jpeg", name: "Kebapçı Mehmet Usta" },
  { src: "/logos/kebapcımustafa.jpeg", name: "Kebapçı Mustafa" },
];

// Numaralı yeni logolar
const numberedLogos = [
  "1_20260522_165225_0000",
  "2_20260522_165225_0001",
  "3_20260522_165225_0002",
  "4_20260522_165226_0003",
  "5_20260522_165226_0004",
  "6_20260522_165226_0005",
  "8_20260522_165226_0007",
  "9_20260522_165226_0008",
  "10_20260522_165226_0009",
  "11_20260522_165226_0010",
  "12_20260522_165226_0011",
  "13_20260522_165226_0012",
  "14_20260522_165226_0013",
  "15_20260522_165226_0014",
  "16_20260522_165226_0015",
  "17_20260522_165226_0016",
  "18_20260522_165226_0017",
  "19_20260522_165226_0018",
  "20_20260522_165226_0019",
  "21_20260522_165226_0020",
  "22_20260522_165226_0021",
  "23_20260522_165226_0022",
  "24_20260522_165226_0023",
  "25_20260522_165226_0024",
  "26_20260522_165226_0025",
  "27_20260522_165226_0026",
  "28_20260522_165226_0027",
  "29_20260522_165226_0028",
  "30_20260522_165226_0029",
].map((f) => ({ src: `/logos/${f}.jpg`, name: "" }));

const allLogos = [...namedLogos, ...numberedLogos];


export default function BrandsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacityHero = useTransform(smooth, [0, 0.18], [1, 0]);
  const yLogos = useTransform(smooth, [0, 1], [0, -300]);

  return (
    <div className="relative z-10 bg-[#050505]" ref={containerRef}>

      {/* ── HERO ─────────────────────────────────── */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 pt-24 relative overflow-hidden">
        <motion.div style={{ opacity: opacityHero }} className="z-10 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.2 }}
            className="block text-[10px] font-mono uppercase tracking-[0.5em] text-neutral-500 mb-8"
          >
            Güven Ortaklığı
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[64px] sm:text-[96px] md:text-[128px] font-medium tracking-[-0.05em] leading-[0.88] text-white uppercase"
          >
            Birlikte<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">Büyüdük.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            İzmit ve çevresinin köklü markalarının dijital dönüşüm yolculuğunda yanlarındayız.
          </motion.p>
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,0,0.05)_0%,transparent_60%)] pointer-events-none" />
      </section>

      {/* ── LOGO GRİD ────────────────────────────── */}
      <section className="py-20 px-6 border-t border-white/[0.04] bg-[#030303]">
        <motion.div
          style={{ y: yLogos }}
          className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {allLogos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.025, duration: 0.5 }}
              className="aspect-square bg-[#0C0C0C] border border-white/[0.05] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center p-4 md:p-6 hover:border-white/20 hover:bg-[#111] transition-all duration-500 group"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.name || "Marka logosu"}
                  fill
                  sizes="(max-width: 768px) 90px, 130px"
                  className="object-contain opacity-50 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── HAKKIMIZDA — beyaz section ───────────── */}
      <section className="py-32 md:py-48 px-6 bg-white text-black relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="relative h-[500px] rounded-[3rem] overflow-hidden border border-neutral-200 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              alt="Ekip"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="px-4 py-2 bg-[#FF5A00] text-white rounded-full text-[9px] font-bold uppercase tracking-widest">
                İzmit Sosyal Medya
              </span>
            </div>
          </motion.div>

          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="space-y-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#FF5A00] block">Hikayemiz</span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-[-0.04em] uppercase leading-[0.9]">
              Dijital<br />
              <span className="text-[#FF5A00] italic font-medium">Dönüşüm</span><br />
              Yolculuğu
            </h2>
            <div className="space-y-5 text-neutral-500 text-lg font-light leading-relaxed">
              <p>2015&apos;ten bu yana bölgenin en köklü markalarının dijital dönüşüm süreçlerine liderlik ediyoruz. Sadece bir ajans değil, büyüme hikayesinin ortağıyız.</p>
              <p>Gastronomi&apos;den perakendeye, konaklama&apos;dan eğitim&apos;e kadar geniş bir yelpazede edindiğimiz deneyimle markanızın ihtiyaçlarına özel çözümler geliştiriyoruz.</p>
              <p className="text-black font-medium">Başarılarımız güvenin ve tutkunun yansımasıdır.</p>
            </div>
            <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-[#FF5A00] transition-all duration-500">
              Bizimle Çalışın <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-40 px-6">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-[10vw] font-medium tracking-[-0.05em] leading-[0.85] uppercase text-white mb-12">
            Sıradaki<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">Başarı Hikayesi.</span>
          </h2>
          <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-[#FF5A00] text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-500">
            Projeyi Başlat <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
