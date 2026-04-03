"use client";
import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 md:pt-32 pb-8 md:pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
          
          {/* Slogan & Marka */}
          <div className="md:col-span-6">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 md:mb-8 leading-none">
              GELECEĞİ <br /> <span className="text-rose-500">TASARLAYALIM.</span>
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-sm mb-6 md:mb-8">
              Fikirleriniz bizimle dijital birer başyapıta dönüşür.
            </p>
            <a href="mailto:info@izmitsosyalmedya.com" className="group flex items-center gap-2 text-xl md:text-2xl font-medium hover:text-rose-500 transition-all">
              info@izmitsosyalmedya.com <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
            </a>
            <div className="mt-6 md:mt-8">
              <p className="text-neutral-400 text-base md:text-lg mb-2">İzmit, Kocaeli</p>
              <a href="tel:+902621234567" className="text-neutral-400 text-base md:text-lg hover:text-white transition-colors">
                +90 (262) 123 45 67
              </a>
            </div>
          </div>

          {/* Menü 1 */}
          <div className="md:col-span-3">
            <h3 className="text-rose-500 font-mono text-xs tracking-widest uppercase mb-6 md:mb-8">Navigasyon</h3>
            <ul className="space-y-3 md:space-y-4 text-base md:text-lg text-neutral-400">
              <li><Link href="/hizmetler" className="hover:text-white transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="/webtasarim" className="hover:text-white transition-colors">Web Tasarımı</Link></li>
              <li><Link href="/sosyal-medya" className="hover:text-white transition-colors">Sosyal Medya</Link></li>
              <li><Link href="/markalar" className="hover:text-white transition-colors">Markalar</Link></li>
              <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Menü 2 - Sosyal Medya */}
          <div className="md:col-span-3">
            <h3 className="text-rose-500 font-mono text-xs tracking-widest uppercase mb-6 md:mb-8">Bizi Takip Edin</h3>
            <ul className="space-y-3 md:space-y-4 text-base md:text-lg text-neutral-400">
              <li>
                <a href="https://instagram.com/izmitsosyalmedia" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Instagram size={20} /> Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/izmitsosyalmedya" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Linkedin size={20} /> LinkedIn
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-neutral-600 text-xs md:text-sm">
          <p className="text-center md:text-left">© {new Date().getFullYear()} İZMİT SOSYAL MEDYA. TÜM HAKLARI SAKLIDIR.</p>
          
        </div>
      </div>
    </footer>
  );
}