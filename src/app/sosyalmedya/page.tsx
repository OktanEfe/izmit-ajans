"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp, Users, Eye, Target, Zap, BarChart3, Instagram, Youtube, Play, Globe } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { reveal } from "@/lib/animations";

const metrics = [
  { num: "12M+", label: "Yıllık Gösterim", icon: Eye, desc: "Yönettiğimiz hesapların toplam yıllık içerik gösterimi" },
  { num: "320%", label: "Ortalama Büyüme", icon: TrendingUp, desc: "İlk 6 ayda takipçi ve etkileşim artışı ortalaması" },
  { num: "48+", label: "Aktif Marka", icon: Users, desc: "Şu anda sosyal medya yönetimi verdiğimiz marka sayısı" },
];

const platforms = [
  { Icon: Instagram, name: "Instagram", tag: "Reels & Feed", desc: "Görsel mükemmeliyetçiliği Reels kurgularıyla birleştirerek markanızı keşfedin merkezine konumlandırıyoruz.", color: "from-[#FF5A00]/20 to-[#EC4899]/10" },
  { Icon: Youtube, name: "YouTube", tag: "Long & Shorts", desc: "Uzun soluklu sinematik içerikler ve Shorts ekosistemiyle sadık bir abone topluluğu inşa ediyoruz.", color: "from-[#FF5A00]/20 to-[#4D8DFF]/10" },
  { Icon: Play, name: "TikTok", tag: "Viral Content", desc: "Trendsetter kurgularla markanızı viral döngülerin başlangıcı yapıyoruz.", color: "from-[#8B5CF6]/20 to-[#4D8DFF]/10" },
  { Icon: Globe, name: "Tüm Platformlar", tag: "Multi-Channel", desc: "X, LinkedIn, Pinterest — her platformda stratejik ve tutarlı varlık.", color: "from-[#4D8DFF]/20 to-[#8B5CF6]/10" },
];

const services = [
  { icon: Target, title: "İçerik Stratejisi", desc: "Marka sesi, ton ve estetik kılavuz. Algoritma ve hedef kitle analizi." },
  { icon: Zap, title: "Kreatif Üretim", desc: "Profesyonel fotoğraf, Reels kurgusu, grafik tasarım ve copywriting." },
  { icon: BarChart3, title: "Analitik & Raporlama", desc: "Haftalık performans raporu, rakip analizi, büyüme projeksiyon." },
  { icon: Users, title: "Topluluk Yönetimi", desc: "7/24 yorum yanıtlama, DM yönetimi, kriz iletişimi." },
];


export default function SocialMediaPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="relative z-10 bg-[#050505]">

      {/* ── HERO ─────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-[9px] font-mono uppercase tracking-[0.4em] text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] animate-pulse" />
              Sosyal Medya Yönetimi
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="text-[64px] sm:text-[96px] md:text-[128px] font-medium tracking-[-0.05em] leading-[0.88] text-white uppercase"
          >
            Görünür<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">Olun.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Algoritmanın ötesine geçin. Sadece içerik değil, dijital otorite inşa ediyoruz.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12"
          >
            <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-[#FF5A00] text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-500">
              Ücretsiz Analiz İste
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,0,0.07)_0%,transparent_60%)] pointer-events-none" />
      </section>

      {/* ── METRİKLER ─────────────────────────────────── */}
      <section className="py-32 md:py-48 px-6 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="text-center mb-20">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500 block mb-4">Rakamlarla Biz</span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-[-0.04em] uppercase text-white leading-[0.9]">
              Sonuç<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">Odaklı.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={i}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0A0A0A] border border-white/[0.06] rounded-[2rem] p-10 group hover:border-[#FF5A00]/30 transition-all duration-700"
                >
                  <Icon size={28} className="text-[#FF5A00] mb-8" />
                  <div className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-4">{m.num}</div>
                  <h3 className="text-lg font-medium text-neutral-200 mb-3">{m.label}</h3>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed">{m.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PLATFORMLAR — beyaz section ───────────────── */}
      <section className="py-32 md:py-48 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-neutral-100 pb-12">
            <h2 className="text-5xl md:text-8xl font-medium tracking-[-0.04em] uppercase leading-[0.9]">
              Her<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] to-[#8B5CF6] italic font-medium">Platform.</span>
            </h2>
            <p className="text-neutral-500 text-sm font-light max-w-xs leading-relaxed">
              Markanızın aktif olduğu her kanalda stratejik varlık ve tutarlı estetik.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((p, i) => {
              const Icon = p.Icon;
              return (
                <motion.div
                  key={i}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ delay: i * 0.08 }}
                  className={`bg-gradient-to-br ${p.color} rounded-[3rem] p-12 border border-neutral-100 group hover:shadow-xl transition-all duration-500 relative overflow-hidden`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white mb-8 group-hover:bg-[#FF5A00] transition-colors duration-500">
                    <Icon size={24} />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-neutral-400 block mb-2">{p.tag}</span>
                  <h3 className="text-4xl font-bold tracking-tighter mb-6 uppercase">{p.name}</h3>
                  <p className="text-neutral-600 font-light leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HİZMETLER ─────────────────────────────────── */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="mb-20 border-b border-white/[0.06] pb-12">
            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] uppercase text-white leading-[0.9]">
              Ne<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">Sunuyoruz?</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex gap-6 p-8 bg-[#0A0A0A] rounded-[2rem] border border-white/[0.06] hover:border-[#FF5A00]/30 transition-all duration-700"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF5A00]/10 flex items-center justify-center text-[#FF5A00] shrink-0 group-hover:bg-[#FF5A00] group-hover:text-white transition-all duration-500">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">{s.title}</h3>
                    <p className="text-neutral-500 text-sm font-light leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-40 px-6 border-t border-white/[0.04]">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-[10vw] font-medium tracking-[-0.05em] leading-[0.85] uppercase text-white mb-12">
            Algoritmayı<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">Domine Et.</span>
          </h2>
          <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-[#FF5A00] hover:text-white transition-all duration-500">
            Ücretsiz Sosyal Medya Analizi
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
