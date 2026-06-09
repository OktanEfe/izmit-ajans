import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "İzmit Sosyal Medya — Kreatif Dijital Ajans";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* top orange bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#FF5A00",
          }}
        />

        {/* logo badge + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "36px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "#FF5A00",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-1px",
            }}
          >
            İSM
          </div>
          <div style={{ fontSize: "26px", fontWeight: 700, color: "white", letterSpacing: "-0.5px" }}>
            İzmit Sosyal Medya
          </div>
        </div>

        {/* headline */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "white",
            letterSpacing: "-3px",
            textAlign: "center",
            lineHeight: 1.05,
            marginBottom: "28px",
            maxWidth: "960px",
          }}
        >
          Kreatif{" "}
          <span style={{ color: "#FF5A00" }}>Dijital Ajans.</span>
        </div>

        {/* sub */}
        <div
          style={{
            fontSize: "24px",
            color: "#777",
            fontWeight: 300,
            textAlign: "center",
            letterSpacing: "1px",
          }}
        >
          Sosyal Medya · Web Tasarım · Video Prodüksiyon
        </div>

        {/* domain */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "15px",
            color: "#333",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          izmitsosyalmedia.com
        </div>
      </div>
    ),
    { ...size }
  );
}
