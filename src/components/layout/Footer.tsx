"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white pt-32 md:pt-48 pb-12 px-6 border-t border-white/[0.04] relative overflow-hidden selection:bg-neutral-800">
      
      {/* ARKA PLAN DEVASE AURORA GLOW (Lüks Işık Sızıntısı) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-t from-[#FF5A00]/5 via-[#4D8DFF]/2 to-transparent blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ÜST ALAN: SİNEMATİK DEVASE CALL TO ACTION */}
        <div className="mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-mono tracking-[0.4em] text-neutral-500 uppercase block mb-6">
              Bir Sonraki Bölüm
            </span>
            <h2 className="text-[11vw] md:text-[8vw] font-medium tracking-[-0.05em] leading-[0.85] uppercase mb-12">
              Birlikte <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic font-medium">
                İnşa Edelim.
              </span>
            </h2>
          </motion.div>

          {/* Hızlı E-Posta Aksiyonu */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="inline-block"
          >
            <a 
              href="mailto:info@izmitsosyalmedya.com" 
              className="group flex items-center gap-4 text-xl md:text-3xl font-light text-neutral-400 hover:text-white transition-colors duration-500 pb-2 border-b border-white/10 hover:border-white"
            >
              <span>info@izmitsosyalmedya.com</span>
              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-500 transition-all duration-500 group-hover:bg-[#FF5A00] group-hover:border-[#FF5A00] group-hover:text-white group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </div>
            </a>
          </motion.div>
        </div>

        {/* ORTA ALAN: EDİTORYAL LİNK VE BİLGİ GRİDİ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 border-t border-white/[0.05] pt-16 mb-24">
          
          {/* Stüdyo Künyesi */}
          <div className="md:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <img
                src="/logov2.svg"
                alt="Studio Logo"
                className="h-6 w-auto object-contain filter contrast-200 saturate-0 brightness-200 align-left self-start"
              />
              <p className="text-neutral-500 text-sm font-light max-w-xs mt-4 leading-relaxed">
                Global estetik standartları, rafine arayüz mimarisi ve kreatif sinematik prodüksiyonla birleştiren yeni nesil dijital stüdyo.
              </p>
            </div>
            
            {/* Lokasyon ve İletişim Detayları */}
            <div className="flex flex-col gap-3 text-sm font-light text-neutral-400">
              <div className="flex items-center gap-3 group">
                <MapPin size={14} className="text-neutral-600 group-hover:text-[#FF5A00] transition-colors" />
                <span>İzmit, Kocaeli</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone size={14} className="text-neutral-600 group-hover:text-[#FF5A00] transition-colors" />
                <a href="tel:+902621234567" className="hover:text-white transition-colors">
                  +90 (262) 123 45 67
                </a>
              </div>
            </div>
          </div>

          {/* Navigasyon Sütunu */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-neutral-600 font-mono text-[10px] tracking-[0.3em] uppercase mb-8">Navigasyon</h3>
            <ul className="flex flex-col gap-4 text-base font-light text-neutral-400">
              {["Hizmetlerimiz", "Web Tasarımı", "Sosyal Medya", "Markalar", "İletişim"].map((name, i) => {
                const paths = ["/hizmetler", "/webtasarim", "/sosyal-medya", "/markalar", "/iletisim"];
                return (
                  <li key={i}>
                    <Link 
                      href={paths[i]} 
                      className="inline-block transition-all duration-500 hover:text-white hover:tracking-wide group"
                    >
                      <span className="relative">
                        {name}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF5A00] transition-all duration-500 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Sosyal Medya Sütunu */}
          <div className="md:col-span-3">
            <h3 className="text-neutral-600 font-mono text-[10px] tracking-[0.3em] uppercase mb-8">Bağlantılar</h3>
            <ul className="flex flex-col gap-4 text-base font-light text-neutral-400">
              <li>
                <a 
                  href="https://instagram.com/izmitsosyalmedia" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 transition-all duration-500 hover:text-white hover:tracking-wide group"
                >
                  <Instagram size={16} className="text-neutral-600 group-hover:text-[#FF5A00] transition-colors" /> 
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/izmitsosyalmedya" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 transition-all duration-500 hover:text-white hover:tracking-wide group"
                >
                  <Linkedin size={16} className="text-neutral-600 group-hover:text-[#FF5A00] transition-colors" /> 
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* EN ALT BİLGİ ALANI (COPYRIGHT) */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-600 text-[11px] font-mono tracking-widest uppercase">
          <p className="text-center sm:text-left">
            © {currentYear} Studio Crafted. Tüm Hakları Saklıdır.
          </p>
          <div className="flex gap-6 text-neutral-700">
            <span className="hover:text-neutral-400 transition-colors cursor-default">Privacy</span>
            <span className="hover:text-neutral-400 transition-colors cursor-default">Terms</span>
          </div>
        </div>

      </div>

      {/* Arka Plan Elit Gren Dokusu */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </footer>
  );
}