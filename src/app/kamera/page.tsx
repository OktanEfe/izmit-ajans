import type { Metadata } from "next";
import Hero from "@/components/kamera/Hero";
import Showcase from "@/components/kamera/Showcase";
import Features from "@/components/kamera/Features";
import CTA from "@/components/kamera/CTA";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Kamera & Sinematik Prodüksiyon",
  description: "4K HDR sinematik çekimler, drone görüntüleri, color grading ve profesyonel ses tasarımı. İzmit'in en premium prodüksiyon ajansı.",
  keywords: ["kamera çekimi", "sinematik prodüksiyon", "4K çekim", "drone çekim", "color grading", "İzmit"],
  openGraph: {
    title: "Kamera & Sinematik Prodüksiyon | İzmit Sosyal Medya",
    description: "4K HDR sinematik çekimler, drone görüntüleri, color grading ve ses tasarımı.",
    url: "https://izmitsosyalmedya.com/kamera",
  },
};

export default function CameraPage() {
  return (
    <div className="relative z-10">
      <Reveal><Hero /></Reveal>
      <Showcase />
      <Reveal><Features /></Reveal>
<Reveal><CTA /></Reveal>
      <Reveal><Footer /></Reveal>
    </div>
  );
}
