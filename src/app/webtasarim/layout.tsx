import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Tasarım & Geliştirme",
  description:
    "Modern, hızlı ve mobil uyumlu web siteleri. İzmit ve Kocaeli işletmeleri için Next.js, React tabanlı kurumsal web tasarım ve geliştirme hizmetleri.",
  keywords: [
    "web tasarım izmit",
    "web geliştirme kocaeli",
    "nextjs web sitesi",
    "mobil uyumlu tasarım",
    "kurumsal web sitesi izmit",
    "hızlı web sitesi",
  ],
  openGraph: {
    title: "Web Tasarım & Geliştirme | İzmit Sosyal Medya",
    description:
      "Modern, hızlı ve mobil uyumlu web siteleri. İzmit ve Kocaeli işletmeleri için profesyonel web tasarım.",
    url: "https://izmitsosyalmedia.com/webtasarim",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Web Tasarım & Geliştirme" }],
  },
  alternates: { canonical: "https://izmitsosyalmedia.com/webtasarim" },
};

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
