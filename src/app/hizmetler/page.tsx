"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Camera, Share2, Plus, ArrowUpRight, CheckCircle2, Play, Coffee, Zap, Palette, BarChart3, Radio } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- VERİLER ---
const markalar = ["İzmit Belediyesi", "Kocaelispor", "Symbol AVM", "41 Burda", "Maide Restoran", "Wes Hotel"];

const sssVerisi = [
  { q: "Web tasarım süresi ne kadar sürüyor?", a: "Projenin kapsamına göre 2-4 hafta arasında değişiyor. Modern Next.js altyapısı ve performans odaklı özel kodlama süreçlerimizle markanıza en hızlı ve güvenli deneyimi sunuyoruz." },
  { q: "Sosyal medya yönetimi neleri kapsıyor?", a: "İçerik üretimi, profesyonel çekimler, paylaşım planlaması, topluluk yönetimi, rakip analizi ve aylık detaylı raporlama dahil tüm süreçleri uçtan uca yönetiyoruz." },
  { q: "Prodüksiyon süreçleri nasıl işliyor?", a: "Önce senaryo ve storyboard aşamasını tamamlıyoruz. Ardından 4K HDR ekipmanlarımız ve drone setimizle çekimleri gerçekleştirip, profesyonel kurgu ve color grading ile final haline getiriyoruz." },
];

const OzelImlec = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <motion.div 
      animate={{ x: position.x - 12, y: position.y - 12 }}
      className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
    />
  );
};

export default function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#050505] text-white selection:bg-rose-500 font-sans overflow-x-hidden">
      <Navbar />
      <OzelImlec />

      {/* 1. TANITIM BÖLÜMÜ */}
      <section className="relative min-h-[80vh] flex items-center px-6 pt-24 overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-rose-500/10 blur-[150px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-rose-500 font-mono tracking-[0.5em] text-[10px] uppercase mb-8 block">Tam Hizmet Dijital Ajans</span>
            <h1 className="text-[10vw] md:text-[7vw] font-black leading-[0.85] tracking-tighter mb-10 uppercase">
              STRATEJİ VE <br /> <span className="text-neutral-800 outline-text italic font-light lowercase">estetiğin</span> <br /> BULUŞMASI
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. SONSUZ AKAN MARKALAR */}
      <section className="py-16 border-y border-white/5 bg-black/40 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center opacity-20"
        >
          {[...markalar, ...markalar].map((marka, i) => (
            <span key={i} className="text-4xl font-black tracking-tighter uppercase italic">{marka}</span>
          ))}
        </motion.div>
      </section>

      {/* 3. HİZMETLER - ESKİ BENTO GRID YAPISI */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* 1. Web Tasarım */}
          <motion.div whileHover={{ scale: 0.995 }} className="md:col-span-8 bg-[#0a0a0a] rounded-[3rem] p-10 md:p-16 border border-white/5 relative group overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <Monitor className="text-rose-500 mb-10" size={48} />
              <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase">Web Tasarım & <br /> Yüksek Performans</h3>
              <p className="text-neutral-500 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed">
                Hız ve estetiği Next.js altyapısı ile birleştiriyoruz. Sadece bir site değil, markanızın en güçlü satış temsilcisini inşa ediyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                {["Next.js Mimarisi", "Hız Optimizasyonu", "Deneyim Tasarımı", "E-Ticaret Çözümleri", "SEO Odaklı Kod", "Özel Arayüzler"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-neutral-400 font-medium">
                    <CheckCircle2 size={16} className="text-rose-500 shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <Zap size={120} className="absolute top-10 right-10 opacity-5 group-hover:opacity-20 transition-opacity text-white" />
          </motion.div>

          {/* 2. Kurumsal Kimlik */}
          <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-4 bg-white rounded-[3rem] p-10 md:p-14 text-black flex flex-col justify-between group relative overflow-hidden">
            <Palette size={48} className="text-rose-500 mb-10" />
            <div>
              <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase leading-none">Kurumsal <br /> Kimlik</h3>
              <p className="text-neutral-600 font-medium mb-8 italic">Markanızın ruhunu görsel bir dile dönüştürüyoruz.</p>
              <ul className="space-y-3 text-sm font-bold uppercase tracking-tight">
                <li>• Logo Tasarımı</li>
                <li>• Renk Paleti</li>
                <li>• Marka Kitabı</li>
              </ul>
            </div>
            <ArrowUpRight size={40} className="absolute bottom-10 right-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </motion.div>

          {/* 3. Sosyal Medya */}
          <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-4 bg-rose-500 rounded-[3rem] p-10 md:p-14 text-white flex flex-col justify-between group relative">
            <Share2 size={48} className="mb-10 text-white" />
            <div>
              <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase leading-none">Sosyal Medya <br /> Yönetimi</h3>
              <p className="text-rose-100 font-medium leading-relaxed">Algoritmaları değil, gerçek insan duygularını hedefleyerek topluluğunuzu büyüyoruz.</p>
            </div>
            <div className="mt-8 flex gap-2">
               <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><BarChart3 size={16}/></div>
               <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><Radio size={16}/></div>
            </div>
          </motion.div>

          {/* 4. Prodüksiyon */}
          <motion.div whileHover={{ scale: 0.995 }} className="md:col-span-8 h-[550px] rounded-[3rem] relative overflow-hidden group border border-white/5">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691523567-6112338bc353?q=80&w=2070')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20">
               <div className="w-20 h-20 rounded-full bg-rose-500 flex items-center justify-center shadow-2xl">
                  <Play fill="white" size={28} />
               </div>
            </div>
            <div className="absolute bottom-0 left-0 p-10 md:p-16 w-full flex flex-col md:row justify-between items-end z-10 text-left">
              <div className="max-w-xl">
                <Camera className="text-rose-500 mb-6" size={48} />
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6">PRODÜKSİYON & <br /> DRONE</h3>
                <p className="text-neutral-300 text-lg font-light leading-relaxed">
                  İzmit&apos;ten dünyaya açılan sinematik bir vizyon. 4K HDR çekimlerle markanızı en yüksek kalitede sahneliyoruz.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-40 bg-white text-black rounded-[4rem] mx-6 relative overflow-hidden group">
  {/* Arka Plan: Daha Belirgin Teknik Kahve Çizimi */}
  <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[400px] md:w-[700px] pointer-events-none opacity-[0.08] select-none">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-black">
      {/* Belirgin Bardak Gövdesi */}
      <path 
        d="M70,40 L80,160 L120,160 L130,40 Z" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
      {/* Bardak Kapağı */}
      <path d="M65,40 L135,40 L130,30 L70,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {/* Bardak Tutacağı / Kuşak */}
      <path d="M74,80 L126,80 M76,110 L124,110" fill="none" stroke="currentColor" strokeWidth="1" />
      {/* Hareketli Duman Çizgileri */}
      <motion.path 
        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
        d="M90,20 Q95,10 100,20 T110,20" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1" 
      />
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
      
      {/* Sol Taraf: 3 Satırlı Başlık */}
      <div className="flex-1">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-7xl md:text-[8vw] font-black tracking-tighter leading-[0.8] uppercase"
        >
          HADİ <br /> 
          <span className="text-rose-500 italic font-light lowercase">bir kahve</span> <br /> 
          İÇELİM.
        </motion.h2>
      </div>

      {/* Sağ Taraf: İçerik ve Buton */}
      <div className="flex-1 flex flex-col items-start gap-12">
        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-light text-neutral-500 leading-tight tracking-tight"
        >
          İş konuşmadan önce <br />
          <span className="text-black font-black italic">taze bir mola</span> verelim, <br />
          enerjimizi <span className="text-black font-black">birlikte</span> tazeleyelim.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-10 w-full md:w-auto">
          {/* Oval Yatay Buton */}
          <motion.button 
            whileHover={{ scale: 1.02, x: 10 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-black text-white pl-12 pr-6 py-6 rounded-full flex items-center gap-10 shadow-2xl transition-all"
          >
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-500">Şimdi</span>
              <span className="text-sm font-black uppercase tracking-[0.2em] whitespace-nowrap">Randevu Oluştur</span>
            </div>
            
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-rose-500 transition-all duration-500">
              <ArrowUpRight size={28} />
            </div>
          </motion.button>

          {/* Yan Bilgi */}
          <div className="flex items-center gap-4 opacity-30">
            <Coffee size={24} />
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-black uppercase tracking-widest">Mola Vakti</span>
              <span className="text-[12px] font-bold">Espresso / Latte</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 5. SIKÇA SORULANLAR */}
      <section className="py-40 bg-[#050505] px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-rose-500 font-mono uppercase tracking-[0.5em] text-[10px] mb-6 block">Şeffaflık</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">Sıkça Sorulanlar</h2>
          </div>
          <div className="divide-y divide-white/10">
            {sssVerisi.map((faq, i) => (
              <div key={i} className="group">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full py-10 flex justify-between items-center text-left text-xl md:text-3xl font-bold hover:text-rose-500 transition-all"
                >
                  <span className="max-w-[90%]">{faq.q}</span>
                  <div className={`p-2 rounded-full border border-white/10 transition-transform duration-500 ${activeFaq === i ? 'rotate-45 bg-rose-500 border-rose-500' : ''}`}>
                    <Plus size={20} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-10 text-neutral-500 text-lg md:text-xl leading-relaxed font-light italic">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
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