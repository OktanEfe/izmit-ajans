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
  description: "Algoritma dominasyonu, viral içerik stratejisi ve kısa formlu video kurguları. Instagram, TikTok ve YouTube'da markanızı zirveye taşıyoruz.",
  keywords: ["sosyal medya yönetimi", "Instagram yönetimi", "TikTok", "içerik üretimi", "dijital pazarlama", "İzmit"],
  openGraph: {
    title: "Sosyal Medya Yönetimi | İzmit Sosyal Medya",
    description: "Algoritma dominasyonu, viral içerik ve büyüme stratejisi.",
    url: "https://izmitsosyalmedya.com/sosyalmedya",
  },
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
