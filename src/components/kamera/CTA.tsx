"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.05em] leading-[0.85] uppercase text-white mb-12">
          Projenizi<br />
          <span className="text-[#FF5A00] italic">Sahneleyelim.</span>
        </h2>
        <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-[#FF5A00] text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-500">
          Prodüksiyon Teklifi Al
          <ArrowUpRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}
