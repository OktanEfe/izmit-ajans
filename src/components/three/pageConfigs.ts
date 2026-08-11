export interface PageConfig {
  color1: string;
  color2: string;
  color3: string;
  rotationZ: number;
  cAzimuthAngle: number;
  brightness: number;
}

export const PAGE_CONFIGS: Record<string, PageConfig> = {
  "/":            { color1: "#5606ff", color2: "#fe8989", color3: "#000000", rotationZ: 235, cAzimuthAngle: 180, brightness: 0.85 },
  "/hizmetler":   { color1: "#5606ff", color2: "#fe8989", color3: "#000000", rotationZ: 235, cAzimuthAngle: 180, brightness: 0.8  },
  "/sosyalmedya": { color1: "#5606ff", color2: "#4D8DFF", color3: "#000000", rotationZ: 245, cAzimuthAngle: 190, brightness: 0.8  },
  "/kamera":      { color1: "#FF5A00", color2: "#8B1a00", color3: "#000000", rotationZ: 220, cAzimuthAngle: 160, brightness: 0.75 },
  "/webtasarim":  { color1: "#4D8DFF", color2: "#5606ff", color3: "#000000", rotationZ: 250, cAzimuthAngle: 200, brightness: 0.8  },
  "/markalar":    { color1: "#fe8989", color2: "#5606ff", color3: "#000000", rotationZ: 230, cAzimuthAngle: 170, brightness: 0.8  },
  "/iletisim":    { color1: "#FF5A00", color2: "#5606ff", color3: "#000000", rotationZ: 240, cAzimuthAngle: 185, brightness: 0.8  },
};
