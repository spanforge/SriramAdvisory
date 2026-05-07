import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(255,255,255,0.97)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(10,22,40,0.08)",
      padding: "0 40px",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center",
        height: 68,
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
          <img
            src="/sriram.png"
            alt="Sriram"
            style={{ width: 46, height: 46, borderRadius: "50%", objectFit: "cover", border: "2px solid #1a4fd6", flexShrink: 0 }}
          />
          <div>
            <div style={{
              fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
              fontSize: 26, letterSpacing: "0.08em", color: "#0a1628", lineHeight: 1,
            }}>Sriram Advisory</div>
            <div style={{ fontSize: 11, letterSpacing: "0.12em", color: "#1a4fd6", textTransform: "uppercase", lineHeight: 1.5, fontWeight: 500 }}>
              Clarity. Strategy. Growth.
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
