"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Camera, Film, Play, Zap, Plane, Crosshair, Sparkles } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Tipler ---
interface VideoItem {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc?: string;
  dark?: boolean;
  bg?: string;
  border?: string;
}

// --- Veriler ---
const showcaseVideos: VideoItem[] = [
  {
    id: 1,
    title: "SINIRSIZ",
    subtitle: "PERSPEKTİF",
    tag: "PREMIUM COLOR GRADING",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000",
  },
  {
    id: 2,
    title: "SİNEMATİK",
    subtitle: "DİNAMİZM",
    tag: "4K HDR PRODUCTION",
    image: "https://images.unsplash.com/photo-1492691523567-307303bea390?q=80&w=2000",
  },
  {
    id: 3,
    title: "HİKAYE",
    subtitle: "ANLATICILIĞI",
    tag: "STORYTELLING & EDIT",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2000",
  }
];

// --- Alt Bileşenler ---
function VideoSection({ video }: { video: VideoItem }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const width = useTransform(scrollYProgress, [0, 0.4], ["85%", "100%"]);
  const scale = useTransform(scrollYProgress, [0.4, 0.7], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section ref={sectionRef} className="h-[120vh] relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ width, scale, opacity }}
          className="h-[80vh] md:h-screen bg-[#111] relative overflow-hidden shadow-2xl"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${video.image})`, filter: 'brightness(0.5)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center z-20">
             <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform group">
                <Play fill="white" size={24} className="ml-1 text-white group-hover:text-rose-500 transition-colors" />
             </div>
          </div>

          <div className="absolute bottom-20 left-10 md:left-24 z-30">
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="flex items-center gap-3 text-rose-500 mb-4 font-mono text-[10px] tracking-[0.4em] font-bold">
                  <Crosshair size={14} /> <span>{video.tag}</span>
                </div>
                <h2 className="text-5xl md:text-[100px] font-black tracking-tighter uppercase text-white leading-[0.85]">
                  {video.title} <br /> {video.subtitle}
                </h2>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, dark, bg, border }: FeatureCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }} 
      className={`p-10 rounded-[3rem] border transition-all h-[450px] flex flex-col justify-between
        ${dark ? 'bg-neutral-900 text-white border-transparent' : bg ? `${bg} ${border} text-black` : 'bg-neutral-50 border-neutral-100 text-black'}
      `}
    >
      <div className="w-12 h-12 flex items-center justify-center">{icon}</div>
      <div>
        <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase leading-tight">{title}</h3>
        <p className={`${dark ? 'text-neutral-400' : 'text-neutral-500'} leading-relaxed italic text-sm`}>{desc || "En yüksek teknik yetkinlik ve sanatsal bakış açısı ile."}</p>
      </div>
    </motion.div>
  );
}

// --- Ana Sayfa ---
export default function CameraDronePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0]);
  const lensScale = useTransform(smoothProgress, [0, 0.1], [1.3, 0.8]);

  return (
    <div className="bg-[#050505] text-white selection:bg-rose-500 font-sans overflow-x-hidden" ref={containerRef}>
      <Navbar />

     {/* 1. GİRİŞ */}
     <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">
        {/* Kamera Lensi Arka Plan */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Lens Dış Halka */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[800px] h-[800px] border-2 border-rose-500/10 rounded-full"
          />
          
          {/* Lens Orta Halkalar */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[600px] h-[600px] border border-rose-500/15 rounded-full"
          />
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[400px] h-[400px] border border-rose-500/20 rounded-full"
          />
          
          {/* Lens İç Halka */}
          <div className="absolute w-[200px] h-[200px] border-2 border-rose-500/30 rounded-full" />
          
          {/* Lens Merkez - Aperture */}
          <div className="absolute w-[100px] h-[100px] bg-rose-500/5 rounded-full blur-xl" />
          
          {/* Lens Blade Efekti (Diyafram) */}
          <div className="absolute w-[300px] h-[300px]">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                className="absolute top-1/2 left-1/2 w-[2px] h-[150px] bg-gradient-to-b from-rose-500/30 via-rose-500/10 to-transparent origin-bottom"
                style={{ transform: `translate(-50%, -100%) rotate(${i * 45}deg)` }}
              />
            ))}
          </div>
          
          {/* Işık Parlaması */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,_#f43f5e15_0%,transparent_70%)] rounded-full blur-3xl"
          />
        </div>
        
        <motion.div style={{ opacity: heroOpacity }} className="z-10 text-center px-6">
          <h1 className="text-6xl md:text-[110px] font-black tracking-tighter leading-none mb-8 uppercase text-white">
            GÖRSEL <br /> <span className="text-neutral-600 italic font-light">MÜKEMMELLİK.</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
            Hikayenizi en yüksek teknoloji ve kreatif vizyonla, sinematik bir başyapıta dönüştürüyoruz.
          </p>
        </motion.div>

        <motion.div 
          style={{ scale: lensScale, opacity: heroOpacity }}
          className="absolute w-[500px] h-[500px] border-2 border-rose-500/40 rounded-full pointer-events-none shadow-[0_0_50px_rgba(244,63,94,0.3)]"
        />
      </section>

      {/* 2. VİDEO SERİSİ */}
      <div className="relative">
        {showcaseVideos.map((video) => (
          <VideoSection key={video.id} video={video} />
        ))}
      </div>

      {/* 3. BENTO GRID */}
      <section className="py-32 bg-white text-black rounded-t-[50px] relative z-40 shadow-[0_-30px_60px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 uppercase">YÜKSEK <br /> <span className="text-rose-500 italic font-light">STANDARTLAR.</span></h2>
            <p className="text-xl text-neutral-500 font-light">Teknik yetkinliğimizi sanatsal dokunuşlarla birleştiriyoruz.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={<Film size={40} className="text-rose-500" />} title="Sinematik Kurgu" desc="Görüntüleri hikayeye dönüştüren profesyonel kurgu süreci." />
            <FeatureCard icon={<Sparkles size={40} className="text-rose-500" />} title="4K HDR Kayıt" desc="En derin renkler ve en keskin detaylar ile geleceğin kalitesi." dark />
            <FeatureCard icon={<Plane size={40} className="text-blue-600" />} title="Havadan Görüntüleme" bg="bg-blue-50" border="border-blue-100" />
            <FeatureCard icon={<Zap size={40} className="text-rose-600" />} title="Tanıtım Filmleri" bg="bg-rose-50" border="border-rose-100" />
            <FeatureCard icon={<div className="w-10 h-10 bg-rose-500 rounded-full blur-md opacity-50" />} title="Color Grading" dark />
            <FeatureCard icon={<Camera size={40} className="text-black" />} title="Sound Design" />
          </div>
        </div>
      </section>

      {/* 4. CTA */}
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