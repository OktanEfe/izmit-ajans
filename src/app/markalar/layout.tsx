import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslarımız",
  description: "İzmit ve çevresinin köklü markalarıyla büyüdük. 50+ marka ile dijital dönüşüm yolculuğunda yanlarındayız.",
  keywords: ["referanslar", "müşteriler", "markalar", "dijital ajans referansları", "İzmit markalar"],
  openGraph: {
    title: "Referanslarımız | İzmit Sosyal Medya",
    description: "İzmit ve çevresinin köklü markalarının dijital dönüşüm ortağıyız.",
    url: "https://izmitsosyalmedya.com/markalar",
  },
};

export default function BrandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
