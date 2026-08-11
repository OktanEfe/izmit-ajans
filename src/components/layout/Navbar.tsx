"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Hizmetler", path: "/hizmetler" },
  { name: "Web Tasarım", path: "/webtasarim" },
  { name: "Çekim", path: "/kamera" },
  { name: "Sosyal Medya", path: "/sosyalmedya" },
  { name: "Markalar", path: "/markalar" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setIsOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 md:px-6 pointer-events-none pt-6">
        <header
          className={`
            pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            flex items-center justify-between px-6 md:px-10 py-3 rounded-full border
            ${isScrolled || isOpen
              ? "w-full max-w-[1000px] bg-black/90 md:bg-black/70 md:backdrop-blur-md border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "w-full max-w-[1200px] bg-transparent border-transparent"}
          `}
        >
          <Link href="/" className="shrink-0 transition-transform hover:scale-105 active:scale-95">
            <Image
              src="/logov2.svg"
              alt="İzmit Sosyal Medya Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto object-contain filter grayscale brightness-90"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 ${
                  pathname === item.path
                    ? "text-[#FF5A00]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/iletisim"
              className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-500 shrink-0 ${
                pathname === "/iletisim"
                  ? "bg-[#FF5A00] text-white"
                  : "bg-white text-black hover:bg-[#FF5A00] hover:text-white"
              }`}
            >
              İletişim
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={16} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </header>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-black/96 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6 w-full px-8">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full text-center"
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-4xl font-medium tracking-[-0.02em] uppercase py-3 transition-colors duration-300 ${
                      pathname === item.path ? "text-[#FF5A00]" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.4 }}
                className="mt-6"
              >
                <Link
                  href="/iletisim"
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-12 py-5 bg-[#FF5A00] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-500"
                >
                  Proje Başlat
                </Link>
              </motion.div>
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 text-neutral-600 font-mono text-[9px] uppercase tracking-[0.4em]"
            >
              İzmit Sosyal Medya
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
