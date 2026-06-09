import type { Metadata } from "next";
import Hero from "@/components/kamera/Hero";
import Showcase from "@/components/kamera/Showcase";
import Features from "@/components/kamera/Features";
import CTA from "@/components/kamera/CTA";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Profesyonel Çekim & Prodüksiyon",
  description:
    "4K HDR sinematik çekimler, drone görüntüleri, color grading ve ses tasarımı. İzmit ve Kocaeli'nin en premium prodüksiyon ajansı.",
  keywords: [
    "kamera çekimi izmit",
    "sinematik prodüksiyon kocaeli",
    "4k video çekim",
    "drone çekim izmit",
    "color grading",
    "reklam filmi çekim",
  ],
  openGraph: {
    title: "Profesyonel Çekim & Prodüksiyon | İzmit Sosyal Medya",
    description:
      "4K HDR sinematik çekimler, drone görüntüleri, color grading ve ses tasarımı.",
    url: "https://izmitsosyalmedia.com/kamera",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Profesyonel Çekim & Prodüksiyon" }],
  },
  alternates: { canonical: "https://izmitsosyalmedia.com/kamera" },
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
