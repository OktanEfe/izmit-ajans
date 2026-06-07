import type { Metadata } from "next";
import Hero from "@/components/iletisim/Hero";
import ContactSection from "@/components/iletisim/ContactSection";
import WhatsAppCTA from "@/components/iletisim/WhatsAppCTA";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Projenizi konuşalım. İzmit Sosyal Medya ile iletişime geçin, ücretsiz keşif görüşmesi için formu doldurun.",
  keywords: ["iletişim", "teklif al", "proje başlat", "İzmit ajans iletişim"],
  openGraph: {
    title: "İletişim | İzmit Sosyal Medya",
    description: "Projenizi konuşalım. Ücretsiz keşif görüşmesi için bizimle iletişime geçin.",
    url: "https://izmitsosyalmedya.com/iletisim",
  },
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
