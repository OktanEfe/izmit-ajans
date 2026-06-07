"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import ScrollAtmosphere from "@/components/motion/ScrollAtmosphere";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const PageShaderBackground = dynamic(
  () => import("@/components/three/PageShaderBackground"),
  { ssr: false, loading: () => null }
);

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SmoothScrollProvider>
      <PageShaderBackground pagePath={pathname} />
      <ScrollAtmosphere />
      <Navbar />
      {children}
    </SmoothScrollProvider>
  );
}
