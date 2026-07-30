import { ImageResponse } from "next/og";

export const alt = "Komoe Emile — Développeur Fullstack & Cybersécurité";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#020617",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#60a5fa",
            marginBottom: 24,
          }}
        >
          Fullstack Developer • Cybersecurity
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
          }}
        >
          Komoe Komoe Emile
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#94a3b8",
            marginTop: 24,
          }}
        >
          Portfolio — Next.js, TypeScript, NestJS, PostgreSQL
        </div>
      </div>
    ),
    { ...size }
  );
}
