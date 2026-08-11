"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { reveal } from "@/lib/animations";

export default function CTA() {
  return (
    <section className="py-32 px-6 border-t border-white/[0.04]">
      <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }} className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.05em] leading-[0.85] uppercase text-white mb-12">
          Geleceği<br />
          <span className="text-[#FF5A00] italic">Birlikte İnşa.</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-[#FF5A00] hover:text-white transition-all duration-500">
            Hemen Teklif Al <ArrowUpRight size={18} />
          </Link>
          <Link href="/hizmetler" className="inline-flex items-center gap-3 border border-white/20 text-white px-10 py-5 rounded-full font-semibold hover:bg-white/10 transition-all duration-500">
            Tüm Hizmetler
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
