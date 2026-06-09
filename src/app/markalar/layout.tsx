import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çalıştığımız Markalar",
  description:
    "İzmit Sosyal Medya'nın iş birliği yaptığı markalar ve referanslar. Kocaeli'nin önde gelen işletmeleriyle dijital başarı hikayeleri.",
  keywords: [
    "referanslar izmit ajans",
    "iş birlikleri kocaeli",
    "çalışılan markalar",
    "dijital ajans referans",
    "izmit sosyal medya müşterileri",
  ],
  openGraph: {
    title: "Çalıştığımız Markalar | İzmit Sosyal Medya",
    description:
      "İzmit Sosyal Medya'nın iş birliği yaptığı markalar ve referanslar.",
    url: "https://izmitsosyalmedia.com/markalar",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Çalıştığımız Markalar" }],
  },
  alternates: { canonical: "https://izmitsosyalmedia.com/markalar" },
};

export default function BrandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
