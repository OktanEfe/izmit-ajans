import type { Metadata } from "next";
import Hero from "@/components/hizmetler/Hero";
import ServicesList from "@/components/hizmetler/ServicesList";
import ProcessSteps from "@/components/hizmetler/ProcessSteps";
import FAQ from "@/components/hizmetler/FAQ";
import CTA from "@/components/hizmetler/CTA";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Web tasarım, sosyal medya yönetimi, profesyonel kamera çekimi ve post prodüksiyon. İzmit Sosyal Medya ile dijital dünyadaki varlığınızı güçlendirin.",
  keywords: [
    "hizmetler izmit",
    "web tasarım izmit",
    "sosyal medya yönetimi",
    "kamera çekimi kocaeli",
    "video prodüksiyon",
    "dijital ajans hizmetleri",
  ],
  openGraph: {
    title: "Hizmetlerimiz | İzmit Sosyal Medya",
    description:
      "Web tasarım, sosyal medya, profesyonel kamera çekimi ve prodüksiyon hizmetleri.",
    url: "https://izmitsosyalmedia.com/hizmetler",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "İzmit Sosyal Medya Hizmetleri" }],
  },
  alternates: { canonical: "https://izmitsosyalmedia.com/hizmetler" },
};

export default function ServicesPage() {
  return (
    <div className="relative z-10">
      <Reveal><Hero /></Reveal>
      <Reveal><ServicesList /></Reveal>
      <Reveal><ProcessSteps /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><CTA /></Reveal>
      <Reveal><Footer /></Reveal>
    </div>
  );
}
