"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const namedLogos = [
  { src: "/logos/hub.png", name: "Hub Coffee Kitchen" },
  { src: "/logos/hampton.png", name: "Hampton" },
  { src: "/logos/begendik.png", name: "Beğendik" },
  { src: "/logos/izmitdilakademi.png", name: "İzmit Dil Akademi" },
  { src: "/logos/heef.png", name: "Heef" },
  { src: "/logos/cleopatra.jpeg", name: "Cleopatra INK" },
  { src: "/logos/kebapcımehmet.jpeg", name: "Kebapçı Mehmet Usta" },
  { src: "/logos/ism_logo_20260612_171747_0000.webp", name: "İSM" },
];

const numberedLogos = [
  "1_20260522_165225_0000",
  "2_20260522_165225_0001",
  "3_20260522_165225_0002",
  "4_20260522_165226_0003",
  "5_20260522_165226_0004",
  "6_20260522_165226_0005",
  "8_20260522_165226_0007",
  "9_20260522_165226_0008",
  "10_20260522_165226_0009",
  "11_20260522_165226_0010",
  "12_20260522_165226_0011",
  "14_20260522_165226_0013",
  "15_20260522_165226_0014",
  "16_20260522_165226_0015",
  "17_20260522_165226_0016",
  "18_20260522_165226_0017",
  "19_20260522_165226_0018",
  "20_20260522_165226_0019",
  "21_20260522_165226_0020",
  "22_20260522_165226_0021",
  "23_20260522_165226_0022",
  "24_20260522_165226_0023",
  "25_20260522_165226_0024",
  "26_20260522_165226_0025",
  "27_20260522_165226_0026",
  "28_20260522_165226_0027",
  "29_20260522_165226_0028",
  "30_20260522_165226_0029",
].map((f) => ({ src: `/logos/${f}.jpg`, name: "" }));

const newLogos = [
  "31_20260612_173011_0000",
  "32_20260612_173011_0001",
  "33_20260612_173011_0002",
  "34_20260612_173011_0003",
  "35_20260612_173011_0004",
  "36_20260612_173011_0005",
].map((f) => ({ src: `/logos/${f}.webp`, name: "" }));

const allLogos = [...namedLogos, ...numberedLogos, ...newLogos];

export default function LogoGrid() {
  return (
    <section className="py-20 px-6 border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl">
        <div
          className="rounded-[3rem] overflow-hidden p-8 md:p-12"
          style={{ background: "linear-gradient(135deg, rgba(255,90,0,0.12) 0%, rgba(255,250,245,0.97) 30%, #FAFAF8 60%, rgba(255,138,0,0.08) 100%)" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-[10px] font-mono uppercase tracking-[0.4em] text-[#FF5A00]/70 mb-10"
          >
            Çalıştığımız Markalar
          </motion.p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
            {allLogos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.018, duration: 0.5 }}
                whileHover={{ scale: 1.06 }}
                className="aspect-square bg-white border border-neutral-200/80 rounded-[1.2rem] md:rounded-[1.5rem] flex items-center justify-center p-3 md:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_24px_rgba(255,90,0,0.15)] hover:border-[#FF5A00]/30 transition-all duration-400 group"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo.src}
                    alt={logo.name || "Marka logosu"}
                    fill
                    sizes="(max-width: 768px) 90px, 130px"
                    className="object-contain transition-all duration-400 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
