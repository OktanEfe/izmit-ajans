"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Film, Sparkles, Plane, Zap, Camera, Crosshair, Play } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

const showcases = [
  { tag: "Reklam Filmi", title: "Markanızın En Güçlü\nSahnesi", img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000" },
  { tag: "Drone Görüntüleme", title: "Yukarıdan\nBakış Açısı", img: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?q=80&w=2000" },
  { tag: "Kurumsal Prodüksiyon", title: "Hikaye\nAnlatıcılığı", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2000" },
];

const features = [
  { icon: Film, title: "Sinematik Kurgu", desc: "Premier Pro + DaVinci ile görüntüleri hikayeye dönüştürüyoruz.", dark: true },
  { icon: Sparkles, title: "4K HDR Kayıt", desc: "En derin renkler, en keskin detaylar." },
  { icon: Plane, title: "Drone / Hava", desc: "DJI Mavic 3 ile sinematik aerial görüntüler.", accent: true },
  { icon: Zap, title: "Tanıtım Filmi", desc: "Kurumsal ve ürün tanıtım filmleri.", dark: true },
  { icon: Camera, title: "Color Grading", desc: "Renk manipülasyonu ile atmosfer yaratma." },
  { icon: Crosshair, title: "Ses Tasarımı", desc: "Profesyonel ses kaydı ve post-prodüksiyon." },
];

function ShowcaseItem({ item, index }: { item: typeof showcases[0]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const width = useTransform(scrollYProgress, [0, 0.35], ["80%", "100%"]);
  const scale = useTransform(scrollYProgress, [0.35, 0.7], [1, 1.04]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section ref={ref} className="h-[110vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ width, scale, opacity }}
          className="h-[80vh] md:h-screen relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.img})`, filter: "brightness(0.45)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-white/20 transition-all duration-500 group">
              <Play fill="white" size={22} className="ml-1 text-white group-hover:text-[#FF5A00] transition-colors" />
            </div>
          </div>
          <div className="absolute bottom-12 left-8 md:left-16 z-30">
            <span className="flex items-center gap-2 text-[#FF5A00] text-[9px] tracking-[0.4em] font-mono uppercase mb-4">
              <Crosshair size={12} /> {item.tag} — {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="text-4xl md:text-7xl font-medium tracking-[-0.04em] uppercase text-white leading-[0.9] whitespace-pre-line">
              {item.title}
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function CameraPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const smooth = useSpring(heroScroll, { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(smooth, [0, 0.5], [1, 0]);
  const lensScale = useTransform(smooth, [0, 0.15], [1.2, 0.75]);

  return (
    <div className="relative z-10 bg-[#050505]">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 bg-black" ref={heroRef}>
        {/* Kamera lensi animasyonu */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[800, 600, 400, 250].map((size, i) => (
            <motion.div
              key={size}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-full border border-[#FF5A00]"
              style={{ width: size, height: size, opacity: 0.06 + i * 0.04 }}
            />
          ))}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,_#f43f5e18_0%,transparent_70%)] rounded-full blur-3xl"
          />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.2 }}
            className="block text-[10px] font-mono uppercase tracking-[0.5em] text-neutral-500 mb-8"
          >
            Sinematik Prodüksiyon
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[64px] sm:text-[96px] md:text-[128px] font-medium tracking-[-0.05em] leading-[0.88] text-white uppercase"
          >
            Görsel<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">Mükemmellik.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 text-neutral-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed"
          >
            4K HDR'dan drone çekimine, color grading'den ses tasarımına — hikayenizi başyapıta dönüştürüyoruz.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12"
          >
            <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-[#FF5A00] hover:text-white transition-all duration-500">
              Proje Başlat
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ scale: lensScale, opacity: heroOpacity }}
          className="absolute w-[350px] h-[350px] border-2 border-[#FF5A00]/30 rounded-full pointer-events-none shadow-[0_0_60px_rgba(255,90,0,0.15)]"
        />
      </section>

      {/* ── VIDEO SHOWCASELERİ ──────────────────────── */}
      <div>
        {showcases.map((item, i) => (
          <ShowcaseItem key={i} item={item} index={i} />
        ))}
      </div>

      {/* ── BENTO GRID — beyaz section ─────────────── */}
      <section className="py-32 md:py-48 px-6 bg-white text-black relative z-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 max-w-3xl"
          >
            <h2 className="text-5xl md:text-8xl font-medium tracking-[-0.04em] uppercase leading-[0.9]">
              Yüksek<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] to-[#8B5CF6] italic font-medium">Standartlar.</span>
            </h2>
            <p className="mt-6 text-neutral-500 text-xl font-light">Teknik yetkinliğimizi sanatsal dokunuşlarla birleştiriyoruz.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8 }}
                  className={`p-10 rounded-[3rem] border h-[420px] flex flex-col justify-between transition-all duration-500 ${
                    f.dark ? "bg-neutral-900 text-white border-transparent" :
                    f.accent ? "bg-[#FF5A00] text-white border-transparent" :
                    "bg-neutral-50 border-neutral-100 text-black"
                  }`}
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Icon size={32} className={f.dark || f.accent ? "text-white" : "text-[#FF5A00]"} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase">{f.title}</h3>
                    <p className={`${f.dark ? "text-neutral-400" : f.accent ? "text-white/80" : "text-neutral-500"} text-sm leading-relaxed italic`}>{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-40 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-6xl md:text-[10vw] font-medium tracking-[-0.05em] leading-[0.85] uppercase text-white mb-12">
            Projenizi<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">Sahneleyelim.</span>
          </h2>
          <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-[#FF5A00] text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-500">
            Prodüksiyon Teklifi Al
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
