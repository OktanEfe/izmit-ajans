"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  title: string;
  desc: string;
  img: string;
  href: string;
  tag: string;
}

const services: ServiceItem[] = [
  {
    title: "Sosyal Medya",
    tag: "Sosyal & Büyüme",
    desc: "Markanızın dijital dünyadaki varlığını veriye dayalı stratejiyle baştan aşağı optimize edilmiş dinamik bir ekosisteme dönüştürüyoruz. Kreatif içerik üretimi, estetik algoritma yönetimi ve kısa formlu dikey video varlıklarıyla kitlenizle kurduğunuz bağı tamamen premium bir düzeye taşıyoruz.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000&auto=format&fit=crop",
    href: "/sosyalmedya"
  },
  {
    title: "Kamera Çekimi",
    tag: "Sinematik Çekim",
    desc: "4K ve üstü sinematik standartlarda, prodüksiyon hikayenizin tüm gücünü rafine ışık mühendisliği ve yüksek estetik algıyla kurguluyoruz. Reklam filmlerinden kreatif marka hikayelerine kadar her kareyi sanatsal bir derinlikle işleyerek vizyonunuzu kusursuz birer esere dönüştürüyoruz.",
    img: "https://images.unsplash.com/photo-1567593810070-7a3d471af022?q=80&w=2000&auto=format&fit=crop",
    href: "/kamera"
  },
  {
    title: "Web Tasarım",
    tag: "Tasarım & Geliştirme",
    desc: "Sıfır gecikme mimarisi, premium kullanıcı deneyimi (UI/UX) ve minimal estetiği ileri düzey front-end teknolojileriyle harmanlayarak kurguluyoruz. Apple ve Stripe standartlarından ilham alan, akıcı animasyonlara sahip modern arayüzlerle dijital imzanızı en tepeye konumlandırıyoruz.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
    href: "/webtasarim"
  },
  {
    title: "Prodüksiyon",
    tag: "Post Prodüksiyon",
    desc: "Post-prodüksiyon sürecinde ses tasarımı, dinamik ses frekans kurgusu ve sinematik renk manipülasyonu (color grading) ile ham görüntüleri birer başyapıta çeviriyoruz. Dijital çağın hızlı tüketim ritmine ayak uyduran, akılda kalıcı reklam ve stüdyo üretimleri tasarlıyoruz.",
    img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop",
    href: "/hizmetler"
  },
];

export default function Services() {
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const gridVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative w-full py-32 md:py-48 px-6 overflow-hidden selection:bg-white/10 text-white">

      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#FF5A00]/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-[#4D8DFF]/3 blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={headerVariants}
          className="mb-24 md:mb-36 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/[0.06] pb-16"
        >
          <h2 className="text-[40px] md:text-[80px] font-medium tracking-[-0.04em] text-white leading-[0.95] uppercase">
            Neler <br />
            <span className="text-[#FF5A00] italic">
              yapıyoruz?
            </span>
          </h2>
          <p className="text-white text-sm md:text-base font-light max-w-sm tracking-normal leading-relaxed text-balance">
            Mühendislik disiplinini saf kreatif estetikle birleştiriyor, markanız için karanlığın asaletinde dijital ekosistemler inşa ediyoruz.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={gridVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service, i) => (
            <Link href={service.href} key={i} className="block group relative">
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-[#0A0A0A] border border-white/[0.08] p-8 md:p-12 flex flex-col justify-between overflow-hidden rounded-[24px] cursor-pointer h-[540px] md:h-[600px] shadow-[0_10px_40px_rgba(0,0,0,0.3)] group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)] group-hover:border-white/[0.15] transition-shadow duration-400"
              >
                <div className="absolute inset-0 rounded-[24px] border border-transparent bg-gradient-to-r from-[#FF5A00]/40 via-[#FF7AB6]/25 to-[#4D8DFF]/40 opacity-30 group-hover:opacity-70 transition-opacity duration-400 pointer-events-none z-30 [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:xor] [-webkit-mask-composite:xor] p-[1px]" />

                <div className="absolute inset-0 pointer-events-none z-5">
                  <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-[#FF5A00]/5 via-transparent to-[#4D8DFF]/5 opacity-60 group-hover:opacity-100 transition-opacity duration-400" />
                </div>

                <div className="absolute inset-0 z-0 overflow-hidden rounded-[24px]">
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-[#0a0a0a]/70 to-[#0a0a0a] z-10 transition-colors duration-400 group-hover:via-[#0a0a0a]/50 group-hover:to-[#0a0a0a]/85" />
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-cover filter grayscale-[0.4] opacity-30 group-hover:opacity-55 group-hover:grayscale-0 transition-all duration-700 mix-blend-screen"
                    />
                  </motion.div>
                </div>

                <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-0"
                  style={{ boxShadow: "inset 0 0 60px rgba(255,90,0,0.08), inset 0 0 120px rgba(77,141,255,0.04)" }} />

                <div className="relative z-20 flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-mono tracking-[0.25em] text-[#FF5A00]/70 uppercase">
                      {service.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-100 mt-2 transition-colors duration-400 group-hover:text-white">
                      {service.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-white/[0.12] bg-neutral-900/50 backdrop-blur-md flex items-center justify-center text-neutral-300 transition-all duration-400 group-hover:bg-white group-hover:border-white group-hover:text-black">
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.div>
                  </div>
                </div>

                <div className="relative z-20 mt-auto flex flex-col gap-6">
                  <p className="text-white text-sm md:text-[15px] font-light leading-relaxed max-w-xl">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06] w-full">
                    <span className="w-1 h-1 rounded-full bg-[#FF5A00] shadow-[0_0_8px_#FF5A00]" />
                    <span className="text-[9px] font-mono tracking-[0.3em] text-[#FF5A00]/60 uppercase transition-colors duration-400 group-hover:text-[#FF5A00]">
                      Keşfetmeyi Başlat
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
