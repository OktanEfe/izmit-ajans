"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 md:px-6 pointer-events-none">
      <header className={`
        pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        flex items-center justify-between px-6 md:px-10 py-3 rounded-full border 
        ${isScrolled 
          ? "w-full max-w-[1000px] bg-white/80 backdrop-blur-2xl border-[#1D1D1F]/10 shadow-[0_15px_40px_rgba(0,0,0,0.05)]" 
          : "w-full max-w-[1200px] bg-transparent border-transparent"}
      `}>
<Link href="/" className="shrink-0 transition-transform hover:scale-105 active:scale-95">
<img
  src="/logov2.svg"
  alt="İzmit SM Logo"
  className="h-8 md:h-10 w-auto object-contain
             filter grayscale brightness-90"
/>
</Link>

        {/* Menü Elemanları - Geniş ve Okunaklı */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
          {[
            { name: "Hizmetler", path: "/hizmetler" },
            { name: "Web Tasarım", path: "/webtasarim" },      
            { name: "Çekim", path: "/kamera" },
            { name: "Sosyal Medya", path: "/sosyalmedya" },
            { name: "Markalar", path: "/markalar" }
          ].map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              className={`text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 ${
                pathname === item.path ? "text-rose-500" : "text-[#86868B] hover:text-[#1D1D1F]"
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <Link 
            href="/iletisim" 
            className="px-6 py-2 bg-[#1D1D1F] text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-rose-500 transition-all duration-500 shrink-0 shadow-lg shadow-black/5"
          >
            İLETİŞİM
          </Link>
        </nav>

        {/* Mobil Menü Burger - Rose Hover Etkisiyle */}
        <div className="lg:hidden flex items-center group cursor-pointer">
             <div className="w-6 h-[1px] bg-[#1D1D1F] relative after:content-[''] after:absolute after:top-1.5 after:right-0 after:w-4 after:h-[1px] after:bg-[#1D1D1F] before:content-[''] before:absolute before:-top-1.5 before:right-0 before:w-8 before:h-[1px] before:bg-[#1D1D1F] group-hover:bg-rose-500 group-hover:after:bg-rose-500 group-hover:before:bg-rose-500 transition-colors"></div>
        </div>
      </header>
    </div>
  );
}