"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { PAGE_CONFIGS } from "./pageConfigs";

/* The three.js / @shadergradient/react dependency graph is only pulled into
   the bundle when this actually renders — mobile never mounts it, so mobile
   never pays the download/parse cost for a canvas it doesn't show. */
const DesktopShaderCanvas = dynamic(() => import("./DesktopShaderCanvas"), {
  ssr: false,
  loading: () => null,
});

interface Props {
  pagePath: string;
}

export default function PageShaderBackground({ pagePath }: Props) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const base = PAGE_CONFIGS[pagePath] ?? PAGE_CONFIGS["/hizmetler"];

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <div
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 20% 15%, ${base.color1}55 0%, transparent 55%),
                       radial-gradient(ellipse at 80% 85%, ${base.color2}44 0%, transparent 55%),
                       radial-gradient(ellipse at 60% 40%, ${base.color1}22 0%, transparent 45%),
                       #050505`,
        }}
      />
    );
  }

  return <DesktopShaderCanvas pagePath={pagePath} />;
}
