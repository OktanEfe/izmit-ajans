"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Gerçekte mevcut olan logo dosyaları
const logos = [
  "/logos/sommario_logo.png",
  "/logos/hub.png",
  "/logos/hampton.png",
  "/logos/begendik.png",
  "/logos/Efsanalofis.png",
  "/logos/fakülte.png",
  "/logos/izmitdilakademi.png",
  "/logos/heef.png",
  "/logos/cleopatra.jpeg",
  "/logos/burgerschon.jpeg",
  "/logos/ehli.jpeg",
  "/logos/social.jpeg",
  "/logos/kebapciali-logo.png",
  "/logos/kebapcımehmet.jpeg",
  "/logos/kebapcımustafa.jpeg",
];

function LogoTrack({ logos, reverse = false }: { logos: string[]; reverse?: boolean }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="relative flex overflow-hidden w-full">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex flex-none gap-10 md:gap-16 items-center whitespace-nowrap"
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="relative w-20 h-10 md:w-28 md:h-14 flex-shrink-0 opacity-30 hover:opacity-70 transition-opacity duration-500"
          >
            <Image
              src={src}
              alt="Marka logosu"
              fill
              sizes="112px"
              className="object-contain filter grayscale"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Brands() {
  const half = Math.ceil(logos.length / 2);
  const row1 = logos.slice(0, half);
  const row2 = logos.slice(half);

  return (
    <section className="bg-[#050505] py-32 md:py-48 overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
      >
        <h2 className="text-5xl md:text-7xl font-medium tracking-[-0.04em] leading-[0.95] uppercase text-white">
          Birlikte <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">
            Çalıştık.
          </span>
        </h2>
        <p className="text-neutral-500 max-w-xs uppercase text-[10px] tracking-[0.3em] font-mono leading-relaxed">
          İzmit ve çevresinin köklü markalarıyla büyüdük.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        <LogoTrack logos={row1} />
        <LogoTrack logos={row2} reverse />
      </div>

      {/* Kenar maskeler */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
