"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, InstagramIcon, LinkedinIcon, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white pt-32 md:pt-48 pb-12 px-6 border-t border-white/[0.04] relative overflow-hidden selection:bg-neutral-800">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-t from-[#FF5A00]/5 via-[#4D8DFF]/2 to-transparent blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-mono tracking-[0.4em] text-neutral-500 uppercase block mb-6">
              Bir Sonraki Bölüm
            </span>
            <h2 className="text-[11vw] md:text-[8vw] font-medium tracking-[-0.05em] leading-[0.85] uppercase mb-12">
              Birlikte <br />
              <span className="text-[#FF5A00] italic font-medium">
                İnşa Edelim.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 border-t border-white/[0.05] pt-16 mb-24">

          <div className="md:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <Image
                src="/logov2.svg"
                alt="İzmit Sosyal Medya Logo"
                width={120}
                height={30}
                className="h-6 w-auto object-contain filter contrast-200 saturate-0 brightness-200 self-start"
              />
              <p className="text-neutral-500 text-sm font-light max-w-xs mt-4 leading-relaxed">
                Dijital estetik standartları, rafine arayüz mimarisi ve kreatif sinematik prodüksiyonla birleştiren yeni nesil dijital ajans.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm font-light text-neutral-400">
              <div className="flex items-center gap-3 group">
                <MapPin size={14} className="text-neutral-600 group-hover:text-[#FF5A00] transition-colors" />
                <span>İzmit, Kocaeli</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone size={14} className="text-neutral-600 group-hover:text-[#FF5A00] transition-colors" />
                <a href="tel:+905526660306" className="hover:text-white transition-colors">
                  0552 666 03 06
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-neutral-600 font-mono text-[10px] tracking-[0.3em] uppercase mb-8">Sayfa Menüsü</h3>
            <ul className="flex flex-col gap-4 text-base font-light text-neutral-400">
              {["Hizmetlerimiz", "Web Tasarımı", "Sosyal Medya", "Markalar", "İletişim"].map((name, i) => {
                const paths = ["/hizmetler", "/webtasarim", "/sosyalmedya", "/markalar", "/iletisim"];
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

          <div className="md:col-span-3">
            <h3 className="text-neutral-600 font-mono text-[10px] tracking-[0.3em] uppercase mb-8">Sosyal Medya</h3>
            <ul className="flex flex-col gap-4 text-base font-light text-neutral-400">
              <li>
                <a
                  href="https://www.instagram.com/izmitsosyalmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-all duration-500 hover:text-white hover:tracking-wide group"
                >
                  <InstagramIcon size={16} className="text-neutral-600 group-hover:text-[#FF5A00] transition-colors" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/izmitsosyalmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-all duration-500 hover:text-white hover:tracking-wide group"
                >
                  <LinkedinIcon size={16} className="text-neutral-600 group-hover:text-[#FF5A00] transition-colors" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-600 text-[11px] font-mono tracking-widest uppercase">
          <p className="text-center sm:text-left">
            © {currentYear} İzmit Sosyal Medya. Tüm Hakları Saklıdır.
          </p>
          <div className="flex gap-6 text-neutral-700">
            <span className="hover:text-neutral-400 transition-colors cursor-default">Gizlilik</span>
            <span className="hover:text-neutral-400 transition-colors cursor-default">Kullanım Koşulları</span>
          </div>
        </div>

      </div>

      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </footer>
  );
}
