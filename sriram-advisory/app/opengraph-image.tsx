import { ImageResponse } from "next/og";
export const alt = "Sriram Advisory — See the problem clearly. Find a practical way forward.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FAFAF7", color: "#172026", padding: "72px", borderLeft: "16px solid #174D4A" }}>
      <div style={{ display: "flex", fontSize: 30, color: "#174D4A" }}>Sriram Advisory</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 64, lineHeight: 1.15, maxWidth: 1000 }}><span>See the problem clearly.</span><span>Find a practical way forward.</span></div>
      <div style={{ display: "flex", fontSize: 24, color: "#46525A" }}>Clear thinking. Practical progress.</div>
    </div>, size,
  );
}
