"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { reveal } from "@/lib/animations";

export default function WhatsAppCTA() {
  return (
    <section className="py-32 md:py-48 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(255,90,0,0.12), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(139,92,246,0.08), transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }}
        className="max-w-3xl mx-auto relative"
      >
        <div className="rounded-[3rem] border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm p-14 md:p-20 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF5A00]/30 bg-[#FF5A00]/10 text-[#FF5A00] text-[9px] font-mono tracking-[0.25em] uppercase mb-8">
            <MessageSquare size={10} />
            Anlık İletişim
          </span>

          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase leading-[0.9] text-white mb-6">
            Zaman<br />
            <span className="text-[#FF5A00] italic font-medium">
              Değerlidir.
            </span>
          </h2>

          <p className="text-white text-base font-light mb-12 max-w-sm mx-auto leading-relaxed">
            Form doldurmak istemiyorsanız doğrudan hattımızdan yazın. Ortalama yanıt süresi: <span className="text-white font-semibold">2 dakika.</span>
          </p>

          <a
            href="https://wa.me/905526660306"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full text-white px-12 py-5 font-semibold text-base transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] transition-all duration-700 group-hover:opacity-90" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#FF7A20] via-[#FF8FCB] to-[#6BA3FF] transition-opacity duration-700" />
            <MessageSquare size={20} className="relative z-10" />
            <span className="relative z-10">WhatsApp&apos;tan Yazın</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <p className="mt-6 text-neutral-700 text-[10px] font-mono tracking-widest uppercase">
            veya{" "}
            <a href="/iletisim#form" className="text-neutral-500 hover:text-[#FF5A00] transition-colors underline underline-offset-2">
              iletişim formunu kullanın
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
