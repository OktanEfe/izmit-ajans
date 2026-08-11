"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { reveal } from "@/lib/animations";

export default function Story() {
  return (
    <section className="py-32 md:py-48 px-6 bg-white text-black relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }} className="relative h-[500px] rounded-[3rem] overflow-hidden border border-neutral-200 shadow-2xl group">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
            alt="Ekip"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <span className="px-4 py-2 bg-[#FF5A00] text-white rounded-full text-[9px] font-bold uppercase tracking-widest">
              İzmit Sosyal Medya
            </span>
          </div>
        </motion.div>

        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15, margin: "0px 0px 15% 0px" }} className="space-y-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#FF5A00] block">Hikayemiz</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase leading-[0.9]">
            Dijital<br />
            <span className="text-[#FF5A00] italic font-medium">Dönüşüm</span><br />
            Yolculuğu
          </h2>
          <div className="space-y-5 text-[#050505] text-lg font-light leading-relaxed">
            <p>2015&apos;ten bu yana bölgenin en köklü markalarının dijital dönüşüm süreçlerine liderlik ediyoruz. Sadece bir ajans değil, büyüme hikayesinin ortağıyız.</p>
            <p>Gastronomi&apos;den perakendeye, konaklama&apos;dan eğitim&apos;e kadar geniş bir yelpazede edindiğimiz deneyimle markanızın ihtiyaçlarına özel çözümler geliştiriyoruz.</p>
            <p className="text-[#050505] font-medium">Başarılarımız güvenin ve tutkunun yansımasıdır.</p>
          </div>
          <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-[#FF5A00] transition-all duration-500">
            Bizimle Çalışın <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
