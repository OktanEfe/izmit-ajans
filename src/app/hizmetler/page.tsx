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
  description: "Web tasarım, sosyal medya yönetimi, kamera çekimi ve post prodüksiyon. İzmit Sosyal Medya ile dijital dünyadaki varlığınızı güçlendirin.",
  keywords: ["hizmetler", "web tasarım", "sosyal medya", "kamera çekimi", "prodüksiyon", "dijital ajans", "İzmit"],
  openGraph: {
    title: "Hizmetlerimiz | İzmit Sosyal Medya",
    description: "Web tasarım, sosyal medya, kamera çekimi ve prodüksiyon hizmetleri.",
    url: "https://izmitsosyalmedya.com/hizmetler",
  },
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
