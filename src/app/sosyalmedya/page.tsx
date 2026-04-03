
"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Instagram, Play, Linkedin, Youtube, Facebook, Twitter, 
  ArrowUpRight, Heart, MessageCircle, Send, User, 
  Sparkles, Zap, Target, TrendingUp, Globe, Activity 
} from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';

// REELS İÇERİKLERİ
const reelsContent = [
  { id: 1, title: "@izmitmedya", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop", info: "Kreatif kurgu ve yüksek etkileşimli Reels projeleri." },
  { id: 2, title: "@digitalart", img: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1000&auto=format&fit=crop", info: "Algoritma dostu içerik üretimi ve viral yayılım." },
  { id: 3, title: "@brandboost", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop", info: "Topluluk yönetimi ve sadık takipçi kitlesi inşası." },
  { id: 4, title: "@socialflow", img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1000&auto=format&fit=crop", info: "Sinematik anlatım ve profesyonel video prodüksiyonu." },
];

export default function SocialMediaPage() {
  const containerRef = useRef<HTMLDivElement>(null);
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

  const phoneScale = useTransform(smoothProgress, [0.2, 0.45], [1, isMobile ? 8 : 25]); 
  const phoneOpacity = useTransform(smoothProgress, [0.45, 0.55], [1, 0]);
  const infoOpacity = useTransform(smoothProgress, [0.02, 0.1, 0.4, 0.5], [0, 1, 1, 0]);
  const infoTranslateSide = useTransform(smoothProgress, [0.2, 0.45], [0, 250]);

  const transformXLeft = useTransform(infoTranslateSide, (v: number) => isMobile ? 0 : -v);
  const transformXRight = useTransform(infoTranslateSide, (v: number) => isMobile ? 0 : v);

  const whiteContentScale = useTransform(smoothProgress, [0.5, 0.65], [0.8, 1]);
  const whiteContentOpacity = useTransform(smoothProgress, [0.5, 0.6], [0, 1]);

  const leftCards = [
    { t: "Kreatif DNA", s: "izmitsosyalmedya kurgusu", Icon: Sparkles },
    { t: "Viral Metrik", s: "%400 Büyüme", Icon: TrendingUp },
    { t: "Viral Metrik", s: "%400 Büyüme", Icon: TrendingUp },
    { t: "Aktif Yönetim", s: "7/24 Takip", Icon: Activity }
  ];

  const rightCards = [
    { t: "ROI Odaklı", s: "Net Satış", Icon: Target },
    { t: "Global Vizyon", s: "Dünya Standartları", Icon: Globe },
    { t: "Viral Metrik", s: "%400 Büyüme", Icon: TrendingUp },
    { t: "Akıllı Veri", s: "Analitik Zeka", Icon: Zap }
  ];

  return (
    <div className="bg-[#050505] text-white selection:bg-rose-500 font-sans overflow-x-hidden" ref={containerRef}>
      <Navbar />

      {/* 1. HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f43f5e10_0%,transparent_70%)]" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          <h1 className="text-6xl md:text-8xl lg:text-[160px] font-black tracking-tighter leading-[0.85] mb-12 uppercase">
            GÖRÜNÜR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-700 to-neutral-400 italic font-light lowercase">olun.</span>
          </h1>
          <p className="text-neutral-500 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            İzmit Sosyal Medya ile algoritmanın ötesine geçin. Sadece içerik değil, dijital otorite inşa ediyoruz.
          </p>
        </motion.div>
      </section>

      <section className="h-[120vh] relative bg-[#050505]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          
          {/* IŞIK SÜZMESİ (Aura) */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute w-full h-full bg-[radial-gradient(circle,_#f43f5e15_0%,transparent_70%)] blur-[100px] z-0"
          />

          <div className="relative w-full max-w-7xl px-6 flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between z-10 gap-8 lg:gap-0">
            
            {/* SOL KARTLAR - Mobilde 2'şerli grid */}
            <motion.div 
              style={{ opacity: infoOpacity, x: transformXLeft }}
              className="grid grid-cols-2 lg:flex lg:flex-col gap-4 lg:gap-12 w-full lg:w-auto order-2 lg:order-1"
            >
              {leftCards.map((item, i) => (
                <div key={i} className="p-4 lg:p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-[2.5rem] w-full lg:w-[320px]">
                   <item.Icon className="text-rose-500 mb-2 lg:mb-4" size={isMobile ? 24 : 32} />
                   <h4 className="text-xl lg:text-3xl font-black tracking-tighter uppercase italic leading-none mb-1 lg:mb-2">{item.t}</h4>
                   <p className="text-neutral-500 text-[10px] lg:text-xs font-bold uppercase tracking-widest">{item.s}</p>
                </div>
              ))}
            </motion.div>

            {/* MERKEZDEKİ TELEFON - Mobilde tam görünür */}
            <motion.div 
              style={{ 
                scale: 1,
                opacity: phoneOpacity 
              }} 
              className="relative w-[180px] h-[380px] sm:w-[220px] sm:h-[450px] md:w-[280px] md:h-[580px] lg:w-[320px] lg:h-[660px] bg-black rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] border-[8px] sm:border-[10px] md:border-[12px] lg:border-[14px] border-neutral-900 shadow-[0_0_100px_rgba(244,63,94,0.2)] z-20 overflow-hidden order-1 lg:order-2 flex-shrink-0 mx-auto lg:mx-0"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 md:w-28 lg:w-32 h-4 sm:h-5 md:h-5 lg:h-6 bg-neutral-900 rounded-b-3xl z-40" />
              <motion.div 
                animate={{ y: ["0%", "-100%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex flex-col gap-3 sm:gap-4 p-3 sm:p-4"
              >
                {[...reelsContent, ...reelsContent, ...reelsContent].map((reel, idx) => (
                  <div key={idx} className="w-full h-[450px] sm:h-[550px] md:h-[600px] lg:h-[650px] bg-neutral-900 rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] relative shrink-0 overflow-hidden border border-white/5">
                    <img src={reel.img} className="absolute inset-0 w-full h-full object-cover opacity-70" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-4 sm:left-6 z-20 text-left">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-rose-500 flex items-center justify-center font-bold text-[8px] text-white">ISM</div>
                            <span className="text-[9px] sm:text-[10px] md:text-sm font-black text-white uppercase tracking-tighter">izmitsosyalmedya</span>
                        </div>
                        <p className="text-[9px] sm:text-[10px] text-white/80 leading-tight max-w-[150px] sm:max-w-[200px] line-clamp-2">{reel.info}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* SAĞ KARTLAR - Mobilde 2'şerli grid */}
            <motion.div 
              style={{ opacity: infoOpacity, x: transformXRight }}
              className="grid grid-cols-2 lg:flex lg:flex-col gap-4 lg:gap-12 w-full lg:w-auto order-3 text-left lg:text-right items-start lg:items-end"
            >
              {rightCards.map((item, i) => (
                <div key={i} className="p-4 lg:p-8 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl lg:rounded-[2.5rem] w-full lg:w-[320px]">
                   <item.Icon className="text-rose-500 mb-2 lg:mb-4" size={isMobile ? 24 : 32} />
                   <h4 className="text-xl lg:text-3xl font-black tracking-tighter uppercase italic leading-none mb-1 lg:mb-2">{item.t}</h4>
                   <p className="text-neutral-500 text-[10px] lg:text-xs font-bold uppercase tracking-widest">{item.s}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* FİNAL BEYAZ ALAN GEÇİŞİ */}
          <motion.div 
            style={{ 
              scale: whiteContentScale, 
              opacity: whiteContentOpacity 
            }} 
            className="absolute inset-0 z-30 bg-white flex flex-col items-center justify-center text-black pointer-events-none"
          >
             <h2 className="text-7xl md:text-[140px] font-black tracking-tighter leading-[0.8] uppercase text-center text-black">
                YENİ <br /> <span className="text-rose-500 italic font-light lowercase text-black">standart.</span>
             </h2>
          </motion.div>
        </div>
      </section>

      {/* 3. DERİN ANALİZ BÖLÜMÜ - Responsive fotoğraf */}
      <section className="py-20 md:py-40 bg-white text-black px-6 relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-24">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2 relative group">
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border border-neutral-100 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1551288049-bbbda540d3b9?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="Analytics" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:p-8 lg:p-12">
                        <div className="text-white">
                            <span className="font-mono text-xs uppercase tracking-[0.3em] mb-2 md:mb-4 block text-rose-500 font-bold">Real-time Data</span>
                            <h4 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter uppercase italic leading-none">Analitik <br/> Mühendislik.</h4>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2 text-left">
                <span className="text-rose-500 font-black uppercase tracking-[0.4em] text-xs mb-6 md:mb-8 block underline decoration-2 underline-offset-8">Rakamlarla Biz</span>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase italic leading-[0.85] mb-6 md:mb-10 text-black">
                    Veriyi <br/> <span className="text-neutral-400 uppercase not-italic font-black">Başarıya</span> <br/> <span className="text-rose-500">Dönüştürün.</span>
                </h3>
                <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed mb-8 md:mb-12 max-w-lg">
                    Algoritmaların arkasındaki matematiği çözüyoruz. Her kareyi, her saniyeyi ve her kelimeyi markanızın dijital otoritesini artırmak için optimize ediyoruz. İzmit&apos;in dijital nabzı artık sizin elinizde.
                </p>
                <div className="grid grid-cols-2 gap-6 md:gap-8 pt-6 md:pt-8 border-t border-neutral-100">
                    <div><span className="text-3xl md:text-4xl font-black text-rose-500 tracking-tighter leading-none">320%</span><p className="text-xs uppercase font-bold text-neutral-400 mt-2 tracking-widest">Erişim Artışı</p></div>
                    <div><span className="text-3xl md:text-4xl font-black text-rose-500 tracking-tighter leading-none">12M+</span><p className="text-xs uppercase font-bold text-neutral-400 mt-2 tracking-widest">Yıllık Gösterim</p></div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* 4. PLATFORMLAR */}
      <section className="py-40 bg-neutral-50 text-black px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { Icon: Youtube, title: "YouTube", desc: "Uzun soluklu sinematik anlatımlar ve Shorts ekosistemiyle sadık bir abone topluluğu inşa ediyoruz." },
              { Icon: Instagram, title: "Instagram", desc: "Görsel mükemmeliyetçiliği Reels kurgularıyla birleştirerek markanızı keşfetin merkezine yerleştiriyoruz." },
              { Icon: Play, title: "TikTok", desc: "Trendsetter kurgularla markanızı viral döngülerin parçası değil, başlangıcı yapıyoruz." },
              { Icon: Twitter, title: "X / Twitter", desc: "Gündemi yakalayan hızlı reaksiyonlar ve keskin stratejilerle dijital nabzı sizin için tutuyoruz." }
            ].map((p, i) => (
                <div key={i} className="group relative bg-white p-12 rounded-[4rem] border border-neutral-200 overflow-hidden h-[500px] flex flex-col justify-between hover:shadow-2xl transition-all duration-500">
                    <p.Icon size={400} className="absolute -right-20 -top-20 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700" />
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-3xl flex items-center justify-center text-white mb-10 bg-neutral-900 group-hover:bg-rose-500 transition-colors shadow-xl shadow-neutral-200">
                            <p.Icon size={32}/>
                        </div>
                        <h3 className="text-5xl font-black tracking-tighter uppercase mb-6 leading-none">{p.title}</h3>
                        <p className="text-neutral-500 text-lg font-medium leading-relaxed max-w-sm italic">{p.desc}</p>
                    </div>
                </div>
            ))}
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
                İzmit Sosyal Medya • 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}