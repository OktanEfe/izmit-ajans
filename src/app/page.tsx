import type { Metadata } from "next";
import HomePageContent from "@/components/home/HomePageContent";

export const metadata: Metadata = {
  title: "İzmit Sosyal Medya — Dijital Ajans, Web Tasarım & Prodüksiyon",
  description: "Fikirden dijital esere. İzmit merkezli premium dijital ajans — web tasarım, sosyal medya yönetimi, kamera çekimi ve prodüksiyon.",
  keywords: ["İzmit ajans", "dijital ajans", "web tasarım İzmit", "sosyal medya ajansı", "prodüksiyon ajansı"],
  openGraph: {
    title: "İzmit Sosyal Medya — Dijital Ajans, Web Tasarım & Prodüksiyon",
    description: "Fikirden dijital esere. İzmit merkezli premium dijital ajans.",
    url: "https://izmitsosyalmedya.com",
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
