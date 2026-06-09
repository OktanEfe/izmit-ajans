import type { Metadata } from "next";
import Hero from "@/components/sosyalmedya/Hero";
import Göstergeler from "@/components/sosyalmedya/Metrics";
import Platforms from "@/components/sosyalmedya/Platforms";
import ServiceOfferings from "@/components/sosyalmedya/ServiceOfferings";
import CTA from "@/components/sosyalmedya/CTA";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Sosyal Medya Yönetimi",
  description:
    "Algoritma dominasyonu, viral içerik stratejisi ve Reels kurguları. Instagram, TikTok ve YouTube'da İzmit markanızı zirveye taşıyoruz.",
  keywords: [
    "sosyal medya yönetimi izmit",
    "instagram yönetimi kocaeli",
    "tiktok içerik üretimi",
    "reels kurgu",
    "dijital pazarlama izmit",
    "topluluk yönetimi",
  ],
  openGraph: {
    title: "Sosyal Medya Yönetimi | İzmit Sosyal Medya",
    description:
      "Algoritma dominasyonu, viral içerik ve büyüme stratejisi. İzmit ve Kocaeli'nin en iyi sosyal medya ajansı.",
    url: "https://izmitsosyalmedia.com/sosyalmedya",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sosyal Medya Yönetimi" }],
  },
  alternates: { canonical: "https://izmitsosyalmedia.com/sosyalmedya" },
};

export default function SocialMediaPage() {
  return (
    <div className="relative z-10">
      <Reveal><Hero /></Reveal>
      <Reveal><Göstergeler /></Reveal>
      <Reveal><Platforms /></Reveal>
      <Reveal><ServiceOfferings /></Reveal>
      <Reveal><CTA /></Reveal>
      <Reveal><Footer /></Reveal>
    </div>
  );
}
