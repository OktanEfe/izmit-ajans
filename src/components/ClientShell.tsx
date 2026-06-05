"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";

const GlobalThreeBackground = dynamic(
  () => import("@/components/three/GlobalThreeBackground"),
  { ssr: false }
);

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalThreeBackground />
      <Navbar />
      {children}
    </>
  );
}
