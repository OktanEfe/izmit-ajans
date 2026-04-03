"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShieldCheck, Star, Award, Zap, Globe, ArrowUpRight } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Marka Verileri - 12 Tane
const brandGroups = [
  { id: 1, name: "Fakülte Teras", category: "Eğitim", logo: "/logos/fakülte.png" },
  { id: 2, name: "İzmit Dil Akademi", category: "Eğitim", logo: "/logos/izmitdilakademi.png" },
  { id: 3, name: "Ud Garaj", category: "Otomotiv", logo: "/logos/ud-garaj.png" },
  { id: 4, name: "Ef Sanal Ofis", category: "Ofis", logo: "/logos/Efsanalofis.png" },
  { id: 5, name: "Beğendik Self Restaurant", category: "Restaurant", logo: "/logos/begendik.png" },
  { id: 6, name: "Öge Zade", category: "Restaurant", logo: "/logos/ogezade.png" },
  { id: 7, name: "Hub Coffee Kitchen", category: "Cafe", logo: "/logos/hub.png" },
  { id: 8, name: "Hampton", category: "Turizm", logo: "/logos/hampton.png" },
  { id: 9, name: "Burger Schön", category: "Restaurant", logo: "/logos/burgerschon.jpeg" },
  { id: 10, name: "Ehl-i Kadayıf", category: "Tatlı", logo: "/logos/ehli.jpeg" },
  { id: 11, name: "Cleopatra INK", category: "Tasarım", logo: "/logos/cleopatra.jpeg" },
  { id: 12, name: "Social + Plus", category: "Ajans", logo: "/logos/social.jpeg" },
  { id: 13, name: "Kebapçı Mustafa", category: "Gastronomi", logo: "/logos/kebapcımustafa.jpeg" },
  { id: 14, name: "The İniis", category: "Cafe", logo: "/logos/theiniis.jpegs" },
  { id: 15, name: "Sommario Cafe", category: "Cafe", logo: "/logos/sommario_logo.png" },
  { id: 16, name: "Pnoi Cafe", category: "Cafe", logo: "/logos/pnoicafe.png" },
  { id: 17, name: "Kebapçı Mehmet Usta", category: "Restaurant", logo: "/logos/kebapcımehmet.jpeg" },
  { id: 18, name: "The Room", category: "Konaklama", logo: "/logos/the-room.png" },
  { id: 19, name: "Kebapçı Ali", category: "Restaurant", logo: "/logos/kebapciali-logo.png" },
  { id: 20, name: "Novaa", category: "Marka", logo: "/logos/novaa.png" },
];

export default function BrandsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Derinlik Efektleri (Parallax)
  const yLogos = useTransform(smoothProgress, [0, 1], [0, -400]);
  const rotateLogos = useTransform(smoothProgress, [0, 1], [0, 10]);
  const opacityHero = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-[#050505] text-white selection:bg-rose-500 font-sans overflow-x-hidden" ref={containerRef}>
      <Navbar />

      {/* 1. BÖLÜM: BOLD INTRO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f43f5e05_0%,transparent_65%)]" />
        
        <motion.div style={{ opacity: opacityHero }} className="z-10">
          <span className="text-rose-500 font-mono tracking-[0.5em] text-[10px] uppercase mb-6 block">Güven Ortaklığı</span>
          <h1 className="text-7xl md:text-[120px] font-bold tracking-tighter leading-none mb-8 uppercase">
            BİRLİKTE <br /> <span className="text-neutral-700 outline-text italic font-light">BÜYÜDÜK.</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Şehre değer katan markaların dijital dönüşüm yolculuğunda yanlarında olduk. Her logo, bizim için bir başarı hikayesi.
          </p>
        </motion.div>
      </section>

      {/* 2. BÖLÜM: FLOATING LOGO GRID (Beyaz Kartlar) */}
      <section className="py-20 bg-[#000000] px-6 relative min-h-screen border-y border-black/5">
        <motion.div 
          style={{ y: yLogos, rotate: rotateLogos }}
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {brandGroups.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square bg-black border border-neutral-200 rounded-[3rem] flex flex-col items-center justify-center p-6 md:p-8 transition-all relative overflow-hidden"
            >
              {/* Logo Fotoğraf */}
              <div className="w-100 h-100 md:w-28 md:h-28 mb-4 relative">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Marka İsmi - Kırmızı */}
              <h3 className="text-sm md:text-base text-rose-500 font-bold uppercase tracking-wider text-center">
                {brand.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. BÖLÜM: Hikayemiz (Önceki "Neden Biz?" yerine) */}
      <section className="py-32 md:py-40 bg-white text-black rounded-t-[60px] relative z-20 -mt-20 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Sol Taraf - Fotoğraf */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden border border-neutral-200 shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                alt="Ekip Çalışması" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="px-4 py-2 bg-rose-500 text-white rounded-full text-xs font-bold uppercase tracking-widest">İzmit Sosyal Medya</span>
              </div>
            </motion.div>

            {/* Sağ Taraf - Metin İçeriği */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-rose-500 font-mono text-xs uppercase tracking-[0.4em] mb-4 block">Hikayemiz</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 uppercase">
                  DİJİTAL <br /> 
                  <span className="text-rose-500 italic">DÖNÜŞÜM</span> <br />
                  YOLCULUĞU
                </h2>
              </div>

              <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
                <p>
                  İzmit Medya olarak, 2015 yılından bu yana bölgenin en köklü markalarının dijital dönüşüm süreçlerine liderlik ediyoruz. Sadece bir ajans değil, markaların büyüme hikayesinin ortağıyız.
                </p>
                <p>
                  Her proje, bizim için yeni bir meydan okuma ve öğrenme fırsatıdır. Kamu kurumlarından özel sektöre, gastronomi dünyasından perakendeye kadar geniş bir yelpazede edindiğimiz deneyimle, markanızın ihtiyaçlarına özel çözümler geliştiriyoruz.
                </p>
                <p>
                  Dijital pazarlamanın sadece bir araç değil, bir sanat olduğuna inanıyoruz. Her kampanya, her içerik ve her etkileşim, markanızın hikayesini anlatan bir fırça darbesidir. Bizimle çalışan markalar sadece görünür olmuyor, akıllarda kalıyor.
                </p>
                <p className="font-semibold text-black">
                  Başarılarımız, güvenin ve tutkunun bir yansımasıdır. Şimdi sıra sizin hikayenizi yazmaya geldi.
                </p>
              </div>

              <div className="pt-6 flex items-center gap-8 border-t border-neutral-200">
                
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. FİNAL BÖLÜMÜ */}
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