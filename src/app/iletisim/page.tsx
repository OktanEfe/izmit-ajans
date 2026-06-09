import type { Metadata } from "next";
import Hero from "@/components/iletisim/Hero";
import ContactSection from "@/components/iletisim/ContactSection";
import WhatsAppCTA from "@/components/iletisim/WhatsAppCTA";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Projenizi konuşalım. İzmit Sosyal Medya ile iletişime geçin, ücretsiz keşif görüşmesi için formu doldurun.",
  keywords: [
    "iletişim izmit ajans",
    "teklif al",
    "proje başlat",
    "izmit sosyal medya iletişim",
    "kocaeli dijital ajans iletişim",
  ],
  openGraph: {
    title: "İletişim | İzmit Sosyal Medya",
    description:
      "Projenizi konuşalım. Ücretsiz keşif görüşmesi için bizimle iletişime geçin.",
    url: "https://izmitsosyalmedia.com/iletisim",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "İletişim" }],
  },
  alternates: { canonical: "https://izmitsosyalmedia.com/iletisim" },
};

export default function ContactPage() {
  return (
    <div className="relative z-10">
      <Reveal><Hero /></Reveal>
      <Reveal><ContactSection /></Reveal>
      <Reveal><WhatsAppCTA /></Reveal>
      <Reveal><Footer /></Reveal>
    </div>
  );
}
