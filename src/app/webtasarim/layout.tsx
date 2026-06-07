import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Tasarım & UI/UX",
  description: "Sıfır gecikme mimarisi, Apple estetiği ve premium UI/UX. Next.js ile inşa ettiğimiz web siteleri markanızın en güçlü dijital varlığıdır.",
  keywords: ["web tasarım", "UI UX tasarım", "Next.js", "frontend geliştirme", "website yapımı", "İzmit web tasarım"],
  openGraph: {
    title: "Web Tasarım & UI/UX | İzmit Sosyal Medya",
    description: "Sıfır gecikme mimarisi ve premium UI/UX ile web sitesi geliştirme.",
    url: "https://izmitsosyalmedya.com/webtasarim",
  },
};

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
