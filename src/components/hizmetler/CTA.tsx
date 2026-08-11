"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { reveal } from "@/lib/animations";

export default function CTA() {
  return (
    <section className="py-32 px-6 border-t border-white/[0.04]">
      <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }} className="max-w-4xl mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.5em] font-mono text-neutral-500 block mb-8">Sonraki Adım</span>
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.05em] leading-[0.85] uppercase text-white mb-12">
          Birlikte<br />
          <span className="text-[#FF5A00] italic">İnşa Edelim.</span>
        </h2>
        <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-[#FF5A00] text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-500">
          Ücretsiz Keşif Görüşmesi
          <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}
