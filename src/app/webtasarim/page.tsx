"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, ShieldCheck, Smartphone, Globe, Code2, Cpu, Activity, Search, Lock, BarChart, MousePointer2, Layers, CheckCircle2 } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function WebDesignPage() {
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 1024;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // --- LİD (KAPAK) ANİMASYONU ---
  const lidRotateX = useTransform(smoothProgress, [0, 0.25], [-90, 0]);
  const scale = useTransform(smoothProgress, [0, 0.3], [0.6, 1.05]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.3], [0, 1, 1]);
  
  const yContent = useTransform(smoothProgress, [0.4, 1], [0, -150]);

  // --- SIRALANAN BEYAZ BİLGİ KARTLARI (Hızlandırılmış ve Responsive) ---
  const card1Opacity = useTransform(smoothProgress, [0.2, 0.28], [0, 1]);
  const card1Y = useTransform(smoothProgress, [0.2, 0.35], [100, isMobile ? -80 : -150]);
  const card1X = useTransform(smoothProgress, [0.2, 0.35], [isMobile ? -120 : -300, isMobile ? -100 : -250]);

  const card2Opacity = useTransform(smoothProgress, [0.24, 0.32], [0, 1]);
  const card2Y = useTransform(smoothProgress, [0.24, 0.38], [100, isMobile ? -20 : -50]);
  const card2X = useTransform(smoothProgress, [0.24, 0.38], [isMobile ? 120 : 300, isMobile ? 100 : 250]);

  const card3Opacity = useTransform(smoothProgress, [0.28, 0.36], [0, 1]);
  const card3Y = useTransform(smoothProgress, [0.28, 0.42], [100, isMobile ? 40 : 50]);
  const card3X = useTransform(smoothProgress, [0.28, 0.42], [isMobile ? -120 : -300, isMobile ? -100 : -250]);

  const card4Opacity = useTransform(smoothProgress, [0.32, 0.4], [0, 1]);
  const card4Y = useTransform(smoothProgress, [0.32, 0.46], [100, isMobile ? 100 : 150]);
  const card4X = useTransform(smoothProgress, [0.32, 0.46], [isMobile ? 120 : 300, isMobile ? 100 : 250]);

  return (
    <div className="bg-[#050505] text-white selection:bg-rose-500 font-sans" ref={containerRef}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#f43f5e05_0%,transparent_50%)]" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="z-10">
          <h1 className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.85] mb-10 uppercase">
            HIZIN <br /> <span className="text-neutral-800 italic font-light lowercase text-5xl md:text-[80px]">estetiği.</span>
          </h1>
          <p className="text-neutral-500 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
            Sadece bir web sitesi değil, markanızın en hızlı çalışan dijital varlığını inşa ediyoruz.
          </p>
        </motion.div>
      </section>

      {/* 2. PC EKRANI VE SIRALANAN BEYAZ KARTLAR */}
      <section className="h-[250vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden perspective-1000">
          
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Alt Gövde (Base) */}
            <motion.div style={{ scale, opacity }} className="absolute w-[80%] max-w-[900px] h-[20px] bg-[#222] rounded-b-xl bottom-[30%] z-10 border-t border-white/20" />

            {/* Üst Kapak (Lid/Ekran) */}
            <motion.div 
              style={{ rotateX: lidRotateX, scale, opacity, transformOrigin: "bottom" }}
              className="w-[80%] max-w-[900px] aspect-video bg-[#111] rounded-t-[2rem] border border-white/10 shadow-2xl relative z-20 overflow-hidden"
            >
              <div className="absolute inset-2 bg-black rounded-[1.8rem] overflow-hidden flex items-center justify-center border border-white/5">
                  <motion.div style={{ y: yContent }} className="w-full h-full p-8">
                      <div className="flex gap-2 mb-8"><div className="w-3 h-3 rounded-full bg-red-500/50" /><div className="w-3 h-3 rounded-full bg-yellow-500/50" /><div className="w-3 h-3 rounded-full bg-green-500/50" /></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-32 bg-white/5 rounded-2xl animate-pulse" />
                        <div className="h-32 bg-white/5 rounded-2xl animate-pulse" />
                        <div className="h-64 col-span-2 bg-gradient-to-br from-rose-500/10 to-transparent rounded-2xl flex items-center justify-center">
                            <Cpu size={60} className="text-rose-500/20" />
                        </div>
                      </div>
                  </motion.div>
              </div>
            </motion.div>

            {/* --- BEYAZ BİLGİ KARTLARI (Hızlandırılmış ve Responsive) --- */}
            <motion.div style={{ opacity: card1Opacity, x: card1X, y: card1Y }} className="absolute z-30 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl w-48 md:w-64 text-black">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4"><div className="p-1.5 md:p-2 bg-rose-50 rounded-lg text-rose-500"><Zap size={16} className="md:w-5 md:h-5" /></div><span className="font-bold text-sm md:text-base">LCP: 0.6s</span></div>
                <p className="text-[9px] md:text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Dünya Standartlarının Üzerinde Hız</p>
            </motion.div>

            <motion.div style={{ opacity: card2Opacity, x: card2X, y: card2Y }} className="absolute z-30 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl w-48 md:w-64 text-black">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4"><div className="p-1.5 md:p-2 bg-blue-50 rounded-lg text-blue-500"><Search size={16} className="md:w-5 md:h-5" /></div><span className="font-bold text-sm md:text-base">SEO: 100</span></div>
                <p className="text-[9px] md:text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Organik Trafik Uyumluluğu</p>
            </motion.div>

            <motion.div style={{ opacity: card3Opacity, x: card3X, y: card3Y }} className="absolute z-30 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl w-48 md:w-64 text-black">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4"><div className="p-1.5 md:p-2 bg-emerald-50 rounded-lg text-emerald-500"><ShieldCheck size={16} className="md:w-5 md:h-5" /></div><span className="font-bold text-sm md:text-base">SSL Guard</span></div>
                <p className="text-[9px] md:text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Kurumsal Veri Güvenliği</p>
            </motion.div>

            <motion.div style={{ opacity: card4Opacity, x: card4X, y: card4Y }} className="absolute z-30 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl w-48 md:w-64 text-black">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4"><div className="p-1.5 md:p-2 bg-orange-50 rounded-lg text-orange-500"><Activity size={16} className="md:w-5 md:h-5" /></div><span className="font-bold text-sm md:text-base">%99.9 Up</span></div>
                <p className="text-[9px] md:text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Kesintisiz Erişilebilirlik</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. GÖRSEL VE FEATURE GRID */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026" className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Code" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-10 left-10"><span className="px-4 py-2 bg-rose-500 rounded-full text-[10px] font-bold uppercase tracking-widest">Geleceğin Teknolojisi</span></div>
             </motion.div>
             <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-white">
                  Sadece kod değil, <br /> <span className="text-rose-500">deneyim</span> tasarlıyoruz.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                    {[
                        { icon: <MousePointer2 className="text-rose-500" />, title: "Akıcı Etkileşim", desc: "60 FPS pürüzsüz animasyonlar." },
                        { icon: <Layers className="text-rose-500" />, title: "Modern Yığın", desc: "Next.js & Tailwind CSS gücü." }
                    ].map((f, i) => (
                        <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10">
                            <div className="mb-4">{f.icon}</div>
                            <h4 className="font-bold uppercase tracking-tighter mb-2">{f.title}</h4>
                            <p className="text-neutral-500 text-sm">{f.desc}</p>
                        </div>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. YENİ: SÜREÇ GEZGİNİ (SİZE NE KATAR?) */}
      <section className="py-40 bg-white text-black px-6 rounded-[50px]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">İŞİMİZ <span className="text-rose-500 italic font-light lowercase">sonuç.</span></h2>
                <p className="text-neutral-500 text-xl font-light">Adım adım dijital başarınızı nasıl kurguluyoruz?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { step: "01", title: "Keşif", desc: "Markanızın dijital DNA'sını analiz ediyoruz." },
                    { step: "02", title: "Mühendislik", desc: "Performans odaklı kod yapısını kuruyoruz." },
                    { step: "03", title: "Sanat", desc: "Görsel dünyayı premium standartlarda işliyoruz." },
                    { step: "04", title: "Yayılım", desc: "Global SEO stratejisiyle yayına alıyoruz." }
                ].map((s, i) => (
                    <div key={i} className="p-10 bg-neutral-50 rounded-[2.5rem] border border-neutral-200 relative group overflow-hidden">
                        <span className="text-8xl font-black text-black opacity-5 absolute -right-4 -top-4">{s.step}</span>
                        <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 relative z-10">{s.title}</h4>
                        <p className="text-neutral-500 relative z-10 text-sm leading-relaxed">{s.desc}</p>
                        <div className="w-12 h-1 bg-rose-500 mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 6. FİNAL BÖLÜMÜ */}
      <section className="py-40 md:py-60 px-6 bg-black relative overflow-hidden">
        {/* Hareketli Işık Süzmesi (Glow) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
            x: ["-50%", "-45%", "-50%"],
            y: ["-50%", "-55%", "-50%"]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-rose-600 blur-[180px] rounded-full pointer-events-none z-0" 
        />
      
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-[100px] font-black tracking-tighter leading-[0.85] mb-16 uppercase">
              GELECEĞİ <br /> 
              <span className="text-transparent bg-clip-text bg-rose-500">BİRLİKTE</span> <br /> 
              İNŞA EDELİM
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              {/* Optimize Edilmiş Oval Buton - Ana */}
              <motion.button 
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-black px-12 py-5 rounded-full font-bold text-[13px] uppercase tracking-[0.15em] hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-xl shadow-white/5 active:shadow-none min-w-[220px]"
              >
                Hemen Teklif Alın
              </motion.button>
      
              {/* Optimize Edilmiş Oval Buton - İkincil */}
              <motion.button 
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)", y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/15 text-white px-12 py-5 rounded-full font-bold text-[13px] uppercase tracking-[0.15em] backdrop-blur-sm transition-all duration-300 min-w-[220px]"
              >
                Bize Yazın
              </motion.button>
            </div>
            
            <div className="mt-24 space-y-4 opacity-20">
              <div className="w-px h-12 bg-white mx-auto" />
              <p className="font-mono text-[9px] uppercase tracking-[0.5em]">
                İzmit Medya • 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}