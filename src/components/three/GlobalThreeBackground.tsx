"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface AtmosphereProps {
  scrollRef: React.MutableRefObject<number>;
}

// Scroll state'i React state yerine ref'te tutuyoruz — scroll'da sıfır re-render
function DynamicAtmosphere({ scrollRef }: AtmosphereProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [particlePositions] = useState(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i]     = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 4 - 1;
    }
    return positions;
  });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.03;
      pointsRef.current.position.z = THREE.MathUtils.lerp(
        pointsRef.current.position.z,
        scrollRef.current * 3,
        0.1
      );
    }
  });

  return (
    <Points ref={pointsRef} positions={particlePositions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FF5A00"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function GlobalThreeBackground() {
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = total > 0 ? window.scrollY / total : 0;
    };
    // passive: true → tarayıcıya scroll'u bloke etmeyeceğimizi söyler (performans)
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-70">
        <div
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[50%] bg-gradient-to-br from-[#FF5A00]/20 via-[#FF7AB6]/10 to-transparent rounded-full filter blur-[120px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute -top-[25%] -right-[10%] w-[60%] h-[50%] bg-gradient-to-bl from-[#4D8DFF]/20 via-[#FFD166]/10 to-transparent rounded-full filter blur-[120px] animate-pulse"
          style={{ animationDuration: "11s" }}
        />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[40%] bg-gradient-to-tr from-[#FF5A00]/15 via-transparent to-transparent rounded-full filter blur-[100px]" />
      </div>

      {/* dpr={[1, 1.5]} → retina'da max 1.5x pixel ratio, düşük güçlü GPU'da kesmez */}
      <Canvas
        camera={{ position: [0, 0, 4], fov: 65 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} />
        <DynamicAtmosphere scrollRef={scrollRef} />
      </Canvas>
    </div>
  );
}
