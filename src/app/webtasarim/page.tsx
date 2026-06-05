"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Zap, Search, ShieldCheck, Activity, MousePointer2, Layers, CheckCircle2, Cpu } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { reveal } from "@/lib/animations";

const techStack = [
  { label: "Framework", value: "Next.js 15" },
  { label: "Styling", value: "Tailwind CSS" },
  { label: "Animation", value: "Framer Motion" },
  { label: "Deploy", value: "Vercel Edge" },
  { label: "TypeScript", value: "Strict Mode" },
  { label: "Performance", value: "100 / 100" },
];

const features = [
  { icon: Zap, title: "LCP: 0.6s", sub: "Dünya Standartlarının Üzerinde", color: "text-[#FF5A00]", bg: "bg-[#FF5A00]/10" },
  { icon: Search, title: "SEO: 100", sub: "Organik Trafik Uyumluluğu", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: ShieldCheck, title: "SSL Guard", sub: "Kurumsal Veri Güvenliği", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { icon: Activity, title: "%99.9 Up", sub: "Kesintisiz Erişilebilirlik", color: "text-violet-400", bg: "bg-violet-400/10" },
];

const process = [
  { step: "01", title: "Keşif", desc: "Markanızın dijital DNA'sını analiz ediyoruz." },
  { step: "02", title: "Mühendislik", desc: "Performans odaklı kod yapısını kuruyoruz." },
  { step: "03", title: "Sanat", desc: "Görsel dünyayı premium standartlarda işliyoruz." },
  { step: "04", title: "Yayılım", desc: "Global SEO ile yayına alıyoruz." },
];

const webFeatures = [
  ["Next.js Mimarisi", "Hız Optimizasyonu", "Deneyim Tasarımı"],
  ["E-Ticaret Çözümleri", "SEO Odaklı Kod", "Özel Arayüzler"],
];

export default function WebDesignPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = windowWidth < 1024;

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

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


  return (
    <div className="relative z-10 bg-[#050505]" ref={containerRef}>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,0,0.06)_0%,transparent_55%)] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.2 }}
            className="block text-[10px] font-mono uppercase tracking-[0.5em] text-neutral-500 mb-8"
          >
            Web Tasarım & Geliştirme
          </motion.span>
          <h1 className="text-[64px] sm:text-[96px] md:text-[128px] font-medium tracking-[-0.05em] leading-[0.88] uppercase text-white">
            Hızın<br />
            <span className="text-neutral-700 italic font-light lowercase text-[52px] sm:text-[80px] md:text-[100px]">estetiği.</span>
          </h1>
          <p className="mt-10 text-neutral-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
            Sadece bir web sitesi değil, markanızın en hızlı çalışan dijital varlığını inşa ediyoruz.
          </p>
          <div className="mt-12 flex items-center justify-center gap-6">
            <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-[#FF5A00] hover:text-white transition-all duration-500">
              Proje Başlat <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── MAC SCROLL ANİMASYONU ──────────────────── */}
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
                    {["red", "yellow", "green"].map(c => <div key={c} className={`w-3 h-3 rounded-full bg-${c}-500/50`} />)}
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

            {/* Performans kartları */}
            {[
              { style: { opacity: card1O, x: card1X, y: card1Y }, data: features[0] },
              { style: { opacity: card2O, x: card2X, y: card2Y }, data: features[1] },
              { style: { opacity: card3O, x: card3X, y: card3Y }, data: features[2] },
              { style: { opacity: card4O, x: card4X, y: card4Y }, data: features[3] },
            ].map(({ style, data }, i) => {
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

      {/* ── FEATURE GRİD ─────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="relative h-[460px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026" className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Code" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="px-4 py-2 bg-[#FF5A00] rounded-full text-[9px] font-bold uppercase tracking-widest text-white">Geleceğin Teknolojisi</span>
            </div>
          </motion.div>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase text-white leading-[0.9]">
              Sadece kod değil,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">Deneyim</span> tasarlıyoruz.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {[
                { icon: MousePointer2, title: "Akıcı Etkileşim", desc: "60 FPS pürüzsüz animasyonlar." },
                { icon: Layers, title: "Modern Stack", desc: "Next.js & Tailwind CSS gücü." },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="p-8 bg-white/[0.03] rounded-3xl border border-white/[0.06] hover:border-[#FF5A00]/30 transition-colors duration-500">
                    <Icon size={24} className="text-[#FF5A00] mb-4" />
                    <h4 className="font-bold uppercase tracking-tight text-white mb-2">{f.title}</h4>
                    <p className="text-neutral-500 text-sm">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SÜREÇ — beyaz section ─────────────────── */}
      <section className="py-32 md:py-40 bg-white text-black px-6 rounded-[3rem] mx-0">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="text-center mb-20">
            <h2 className="text-5xl md:text-8xl font-medium tracking-[-0.04em] uppercase leading-[0.9]">
              İşimiz <span className="text-[#FF5A00] italic font-light lowercase">sonuç.</span>
            </h2>
            <p className="mt-4 text-neutral-500 text-xl font-light">Adım adım dijital başarınızı nasıl kurguluyoruz?</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
            {process.map((p, i) => (
              <motion.div key={i} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} transition={{ delay: i * 0.08 }} className="p-10 bg-neutral-50 rounded-[2.5rem] border border-neutral-200 relative group overflow-hidden hover:shadow-xl transition-shadow duration-500">
                <span className="text-8xl font-black text-black/5 absolute -right-4 -top-4">{p.step}</span>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-4 relative z-10">{p.title}</h4>
                <p className="text-neutral-500 relative z-10 text-sm leading-relaxed">{p.desc}</p>
                <div className="w-10 h-1 bg-[#FF5A00] mt-6 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Web feature checklist */}
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="bg-black text-white rounded-[3rem] p-12 md:p-16">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-10">Her Projede Standart</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-16">
              {webFeatures.flat().map(item => (
                <div key={item} className="flex items-center gap-4 text-neutral-300 font-medium">
                  <CheckCircle2 size={16} className="text-[#FF5A00] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="mb-16">
            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase text-white leading-[0.9]">
              Kullandığımız<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">Teknolojiler.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((t, i) => (
              <motion.div
                key={i}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-6 text-center hover:border-[#FF5A00]/30 transition-all duration-500"
              >
                <p className="text-[9px] uppercase tracking-widest text-neutral-500 font-mono mb-2">{t.label}</p>
                <p className="text-sm font-bold text-white">{t.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-40 px-6 border-t border-white/[0.04]">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-[10vw] font-medium tracking-[-0.05em] leading-[0.85] uppercase text-white mb-12">
            Geleceği<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">Birlikte İnşa.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-[#FF5A00] hover:text-white transition-all duration-500">
              Hemen Teklif Al <ArrowUpRight size={18} />
            </Link>
            <Link href="/hizmetler" className="inline-flex items-center gap-3 border border-white/20 text-white px-10 py-5 rounded-full font-semibold hover:bg-white/10 transition-all duration-500">
              Tüm Hizmetler
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
