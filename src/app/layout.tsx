import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import ClientShell from "@/components/ClientShell";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://izmitsosyalmedya.com"),
  title: {
    default: "İzmit Sosyal Medya — Web Tasarım, Sosyal Medya & Prodüksiyon",
    template: "%s | İzmit Sosyal Medya",
  },
  description: "İzmit merkezli full-service dijital ajans. Web tasarım, sosyal medya yönetimi, kamera çekimi ve prodüksiyon hizmetleri.",
  keywords: ["İzmit ajans", "dijital ajans", "web tasarım", "sosyal medya", "kamera çekimi", "prodüksiyon", "İzmit"],
  authors: [{ name: "İzmit Sosyal Medya" }],
  creator: "İzmit Sosyal Medya",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "İzmit Sosyal Medya",
    title: "İzmit Sosyal Medya — Web Tasarım, Sosyal Medya & Prodüksiyon",
    description: "İzmit merkezli full-service dijital ajans. Web tasarım, sosyal medya yönetimi, kamera çekimi ve prodüksiyon hizmetleri.",
  },
  twitter: {
    card: "summary_large_image",
    title: "İzmit Sosyal Medya",
    description: "İzmit merkezli full-service dijital ajans.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505]`}>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
