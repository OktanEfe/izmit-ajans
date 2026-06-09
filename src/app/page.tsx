import type { Metadata } from "next";
import HomePageContent from "@/components/home/HomePageContent";

export const metadata: Metadata = {
  title: "İzmit Sosyal Medya | Kreatif Dijital Ajans",
  description:
    "Fikirden dijital esere. İzmit ve Kocaeli merkezli kreatif dijital ajans — sosyal medya yönetimi, profesyonel video çekim, web tasarım ve içerik üretimi.",
  keywords: [
    "izmit dijital ajans",
    "kocaeli ajans",
    "web tasarım izmit",
    "sosyal medya ajansı izmit",
    "prodüksiyon ajansı kocaeli",
    "içerik üretimi",
  ],
  openGraph: {
    title: "İzmit Sosyal Medya | Kreatif Dijital Ajans",
    description:
      "Fikirden dijital esere. İzmit ve Kocaeli merkezli kreatif dijital ajans.",
    url: "https://izmitsosyalmedia.com",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "İzmit Sosyal Medya" }],
  },
  alternates: { canonical: "https://izmitsosyalmedia.com" },
};

export default function HomePage() {
  return <HomePageContent />;
}
