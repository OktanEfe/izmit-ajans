"use client";
import { motion } from "framer-motion";

const brands = ["MARKA 1", "MARKA 2", "MARKA 3", "MARKA 4", "MARKA 5", "MARKA 6"];

const Brands = () => {
  return (
    <section id="markalar" className="bg-[#0a0a0a] py-32 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
          BİRLİKTE <br /> <span className="text-rose-500 italic uppercase">ÇALIŞTIK</span>
        </h2>
        <p className="text-neutral-500 max-w-xs uppercase text-xs tracking-widest font-mono">
          Global standartlarda yerel başarılar.
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex flex-none gap-24 items-center whitespace-nowrap px-10"
        >
          {[...brands, ...brands].map((brand, i) => (
            <span 
              key={i} 
              className="text-4xl md:text-6xl font-bold text-neutral-800 hover:text-white transition-colors cursor-default select-none tracking-tighter uppercase"
            >
              {brand}
            </span>
          ))}
        </motion.div>
        {/* Kenar Yumuşatma Maskesi */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
      </div>
    </section>
  );
};

export default Brands;