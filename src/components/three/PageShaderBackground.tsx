"use client";

import { useEffect, useRef, useState } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

interface PageConfig {
  color1: string;
  color2: string;
  color3: string;
  rotationZ: number;
  cAzimuthAngle: number;
  brightness: number;
}

const PAGE_CONFIGS: Record<string, PageConfig> = {
  "/":            { color1: "#5606ff", color2: "#fe8989", color3: "#000000", rotationZ: 235, cAzimuthAngle: 180, brightness: 0.85 },
  "/hizmetler":   { color1: "#5606ff", color2: "#fe8989", color3: "#000000", rotationZ: 235, cAzimuthAngle: 180, brightness: 0.8  },
  "/sosyalmedya": { color1: "#5606ff", color2: "#4D8DFF", color3: "#000000", rotationZ: 245, cAzimuthAngle: 190, brightness: 0.8  },
  "/kamera":      { color1: "#FF5A00", color2: "#8B1a00", color3: "#000000", rotationZ: 220, cAzimuthAngle: 160, brightness: 0.75 },
  "/webtasarim":  { color1: "#4D8DFF", color2: "#5606ff", color3: "#000000", rotationZ: 250, cAzimuthAngle: 200, brightness: 0.8  },
  "/markalar":    { color1: "#fe8989", color2: "#5606ff", color3: "#000000", rotationZ: 230, cAzimuthAngle: 170, brightness: 0.8  },
  "/iletisim":    { color1: "#FF5A00", color2: "#5606ff", color3: "#000000", rotationZ: 240, cAzimuthAngle: 185, brightness: 0.8  },
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

interface Props {
  pagePath: string;
}

function ShaderGradientScene({ pagePath }: Props) {
  const base = PAGE_CONFIGS[pagePath] ?? PAGE_CONFIGS["/hizmetler"];

  const rafRef   = useRef<number>(0);
  const progRef  = useRef(0);
  const rotRef   = useRef(base.rotationZ);
  const azRef    = useRef(base.cAzimuthAngle);

  const [rot, setRot] = useState(base.rotationZ);
  const [az,  setAz]  = useState(base.cAzimuthAngle);

  useEffect(() => {
    const loop = () => {
      const scrollH = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const target  = window.scrollY / scrollH;
      progRef.current = lerp(progRef.current, target, 0.04);

      const targetRot = base.rotationZ + progRef.current * 50;
      const targetAz  = base.cAzimuthAngle + progRef.current * 40;

      rotRef.current = lerp(rotRef.current, targetRot, 0.05);
      azRef.current  = lerp(azRef.current,  targetAz,  0.05);

      setRot(Math.round(rotRef.current * 10) / 10);
      setAz( Math.round(azRef.current  * 10) / 10);

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [base.rotationZ, base.cAzimuthAngle]);

  return (
    <ShaderGradient
      control="props"
      type="waterPlane"
      animate="on"
      uSpeed={0.1}
      uStrength={2.4}
      uDensity={1.1}
      uFrequency={5.5}
      uTime={0.2}
      color1={base.color1}
      color2={base.color2}
      color3={base.color3}
      brightness={base.brightness}
      cAzimuthAngle={az}
      cDistance={3.9}
      cPolarAngle={115}
      cameraZoom={1}
      rotationX={0}
      rotationY={0}
      rotationZ={rot}
      positionX={-0.5}
      positionY={0.1}
      positionZ={0}
      lightType="3d"
      envPreset="city"
      grain="off"
      enableTransition={false}
    />
  );
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

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <ShaderGradientCanvas
        pixelDensity={1}
        powerPreference="high-performance"
        style={{ width: "100%", height: "100%" }}
      >
        <ShaderGradientScene pagePath={pagePath} />
      </ShaderGradientCanvas>
    </div>
  );
}
