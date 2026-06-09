import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import ClientShell from "@/components/ClientShell";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE_URL = "https://izmitsosyalmedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "İzmit Sosyal Medya | Kreatif Dijital Ajans",
    template: "%s | İzmit Sosyal Medya",
  },
  description:
    "İzmit ve Kocaeli merkezli kreatif dijital ajans. Sosyal medya yönetimi, profesyonel video çekim, web tasarım ve içerik üretimi hizmetleri sunuyoruz.",
  keywords: [
    "izmit sosyal medya",
    "izmit ajans",
    "kocaeli dijital ajans",
    "sosyal medya yönetimi",
    "izmit web tasarım",
    "izmit reklam ajansı",
    "içerik üretimi izmit",
    "video çekim izmit",
    "instagram yönetimi izmit",
    "kocaeli sosyal medya",
    "dijital pazarlama izmit",
    "kreatif ajans izmit",
  ],
  authors: [{ name: "İzmit Sosyal Medya", url: BASE_URL }],
  creator: "İzmit Sosyal Medya",
  publisher: "İzmit Sosyal Medya",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: BASE_URL,
    siteName: "İzmit Sosyal Medya",
    title: "İzmit Sosyal Medya | Kreatif Dijital Ajans",
    description:
      "İzmit ve Kocaeli merkezli kreatif dijital ajans. Sosyal medya yönetimi, profesyonel video çekim, web tasarım ve içerik üretimi hizmetleri sunuyoruz.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "İzmit Sosyal Medya — Kreatif Dijital Ajans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İzmit Sosyal Medya | Kreatif Dijital Ajans",
    description:
      "İzmit ve Kocaeli merkezli kreatif dijital ajans. Sosyal medya, web tasarım ve video prodüksiyon.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "İzmit Sosyal Medya",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  image: `${BASE_URL}/opengraph-image`,
  description:
    "İzmit ve Kocaeli merkezli kreatif dijital ajans. Sosyal medya yönetimi, web tasarım, profesyonel video çekim ve içerik üretimi.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İzmit",
    addressRegion: "Kocaeli",
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "City", name: "İzmit" },
    { "@type": "AdministrativeArea", name: "Kocaeli" },
  ],
  telephone: "+905526660306",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+905526660306",
    contactType: "customer service",
    availableLanguage: "Turkish",
  },
  sameAs: [
    "https://www.instagram.com/izmitsosyalmedia",
    "https://www.linkedin.com/company/izmitsosyalmedia",
  ],
  priceRange: "₺₺",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505]`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
