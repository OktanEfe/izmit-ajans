"use client";

import { useEffect, useRef, useState } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { PAGE_CONFIGS, type PageConfig } from "./pageConfigs";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

interface Props {
  pagePath: string;
}

function ShaderGradientScene({ pagePath }: Props) {
  const base: PageConfig = PAGE_CONFIGS[pagePath] ?? PAGE_CONFIGS["/hizmetler"];

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

export default function DesktopShaderCanvas({ pagePath }: Props) {
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
