"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Plus, Monitor, Camera, Share2, Film } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { reveal } from "@/lib/animations";

const services = [
  {
    id: "01",
    title: "Web Tasarım",
    sub: "UI/UX & Development",
    icon: Monitor,
    desc: "Apple ve Stripe standartlarından ilham alan, sıfır gecikme mimarisine sahip premium arayüzler. Next.js, Tailwind, sinematik animasyonlar — markanızın en güçlü satış temsilcisi.",
    tags: ["Next.js", "Framer Motion", "SEO", "E-Ticaret"],
    href: "/webtasarim",
  },
  {
    id: "02",
    title: "Sosyal Medya",
    sub: "Social & Growth",
    icon: Share2,
    desc: "Algoritma dominasyonu, viral içerik stratejisi, kreatif kısa formlu video kurguları. Her platform için özel içerik mimarisi ve büyüme planı.",
    tags: ["Instagram", "TikTok", "YouTube", "İçerik Üretimi"],
    href: "/sosyalmedya",
  },
  {
    id: "03",
    title: "Kamera & Prodüksiyon",
    sub: "Cinematography",
    icon: Camera,
    desc: "4K HDR sinematik çekimler, drone görüntüleri, profesyonel kurgu ve color grading. Ham görüntüden başyapıta — reklam filmlerinden marka hikayelerine.",
    tags: ["4K HDR", "Drone", "Color Grading", "Reklam Filmi"],
    href: "/kamera",
  },
  {
    id: "04",
    title: "Post Prodüksiyon",
    sub: "Post-Production",
    icon: Film,
    desc: "Ses tasarımı, dinamik kurgu, renk manipülasyonu ve motion graphics. Dijital çağın hızına ayak uyduran, akılda kalıcı içerikler.",
    tags: ["Ses Tasarımı", "Motion Graphics", "Kurgu", "VFX"],
    href: "/kamera",
  },
];

const process = [
  { step: "01", title: "Keşif & Strateji", desc: "Markanızın DNA'sını analiz ediyor, rakiplerinizi inceliyor ve size özel dijital yol haritası oluşturuyoruz." },
  { step: "02", title: "Tasarım & Üretim", desc: "Her detayı hassasiyetle işliyor, en yüksek estetik standartlarda üretim yapıyoruz." },
  { step: "03", title: "Test & Optimizasyon", desc: "Her çıktıyı gerçek kullanıcı verisiyle test ediyor, performansı maksimize ediyoruz." },
  { step: "04", title: "Yayın & Büyüme", desc: "Canlıya alıyor, sürekli izliyor ve büyüme fırsatlarını proaktif yakalıyoruz." },
];

const faq = [
  { q: "Proje süresi ne kadar?", a: "Kapsama göre 2–8 hafta. Web projeleri 2–4 hafta, prodüksiyon projeleri 1–2 hafta, sosyal medya yönetimi aylık sözleşmeyle çalışır." },
  { q: "Fiyatlandırma nasıl?", a: "Her proje özel analiz gerektirir. Ücretsiz keşif görüşmemizde ihtiyaçlarınızı dinleyip size özel teklif sunuyoruz." },
  { q: "Tüm hizmetleri birlikte alabilir miyim?", a: "Evet — tam kapsamlı dijital pakette web, sosyal medya ve prodüksiyonu birlikte alanlara özel kampanya fiyatları uygulanır." },
];


export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="relative z-10 bg-[#050505]">

      {/* ── HERO ─────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 0.4, letterSpacing: "0.5em" }}
            transition={{ duration: 1.2 }}
            className="block text-[10px] font-mono uppercase tracking-[0.4em] text-neutral-500 mb-8"
          >
            Tam Hizmet Dijital Ajans
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[64px] sm:text-[96px] md:text-[128px] font-medium tracking-[-0.05em] leading-[0.88] text-white uppercase"
          >
            Strateji<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">
              & Estetik.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 text-neutral-400 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed"
          >
            Mühendislik disiplinini saf kreatif estetikle birleştiriyor, markanız için dijital ekosistemler inşa ediyoruz.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-6"
          >
            <Link href="/iletisim" className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#FF5A00] hover:text-white transition-all duration-500">
              Proje Başlat
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,0,0.06)_0%,transparent_60%)] pointer-events-none" />
      </section>

      {/* ── SERVİSLER LİSTESİ ─────────────────────────── */}
      <section className="py-32 md:py-48 px-6 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="mb-24 pb-12 border-b border-white/[0.06] flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <h2 className="text-4xl md:text-7xl font-medium tracking-[-0.04em] text-white uppercase leading-[0.9]">
              Neler<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">
                Yapıyoruz?
              </span>
            </h2>
            <p className="text-neutral-500 text-sm font-light max-w-xs leading-relaxed">
              Her disiplinde tam yetkinlik — web'den prodüksiyona kadar.
            </p>
          </motion.div>

          <div className="flex flex-col divide-y divide-white/[0.05]">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.id}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link href={svc.href} className="group py-12 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 cursor-pointer block">
                    <div className="flex items-start gap-6 md:gap-12">
                      <span className="text-xs font-mono text-[#FF5A00] pt-2">{svc.id}</span>
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-mono mb-2">{svc.sub}</p>
                        <h3 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] text-neutral-400 group-hover:text-white transition-all duration-700 group-hover:translate-x-3 inline-flex items-center gap-4">
                          <Icon size={28} className="text-neutral-700 group-hover:text-[#FF5A00] transition-colors" />
                          {svc.title}
                        </h3>
                        <p className="mt-4 text-neutral-500 text-sm font-light max-w-lg leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">{svc.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {svc.tags.map(t => (
                            <span key={t} className="px-3 py-1 bg-white/[0.04] border border-white/[0.06] rounded-full text-[9px] uppercase tracking-widest text-neutral-500">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center text-neutral-500 group-hover:bg-[#FF5A00] group-hover:border-[#FF5A00] group-hover:text-white transition-all duration-500 shrink-0">
                      <ArrowUpRight size={16} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SÜREÇ — beyaz section ─────────────────────── */}
      <section className="py-32 md:py-48 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="mb-20 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-[#FF5A00] block mb-4">Nasıl Çalışıyoruz</span>
            <h2 className="text-5xl md:text-8xl font-medium tracking-[-0.04em] uppercase leading-[0.9]">
              4 Adımda<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] to-[#8B5CF6] italic font-medium">Sonuç.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-50 rounded-[2rem] p-8 border border-neutral-100 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500"
              >
                <span className="text-8xl font-black text-black/5 absolute -right-2 -top-4 select-none">{p.step}</span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 relative z-10">{p.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed relative z-10">{p.desc}</p>
                <div className="w-8 h-1 bg-[#FF5A00] mt-6 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SSS ──────────────────────────────────────── */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-neutral-500 block mb-4">Şeffaflık</span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-[-0.04em] uppercase text-white leading-[0.9]">
              Sıkça<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">Sorulanlar.</span>
            </h2>
          </motion.div>
          <div className="divide-y divide-white/[0.06]">
            {faq.map((item, i) => (
              <motion.div key={i} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} transition={{ delay: i * 0.08 }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-8 flex justify-between items-center text-left gap-4 group"
                >
                  <span className="text-lg md:text-2xl font-medium text-neutral-300 group-hover:text-white transition-colors">{item.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 shrink-0 group-hover:border-[#FF5A00] group-hover:text-[#FF5A00] transition-all"
                  >
                    <Plus size={14} />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 text-neutral-400 text-base font-light leading-relaxed">{item.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-40 px-6 border-t border-white/[0.04]">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] font-mono text-neutral-500 block mb-8">Sonraki Adım</span>
          <h2 className="text-6xl md:text-[10vw] font-medium tracking-[-0.05em] leading-[0.85] uppercase text-white mb-12">
            Birlikte<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF7AB6] to-[#4D8DFF] italic">İnşa Edelim.</span>
          </h2>
          <Link href="/iletisim" className="group inline-flex items-center gap-3 bg-[#FF5A00] text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-500">
            Ücretsiz Keşif Görüşmesi
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
