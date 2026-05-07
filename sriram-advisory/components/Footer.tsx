export default function Footer() {
  return (
    <footer style={{
      background: "#f7f9fc",
      borderTop: "1px solid rgba(10,22,40,0.08)",
      padding: "40px 40px 32px",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src="/sriram.png"
            alt="Sriram"
            style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", border: "2px solid #1a4fd6", flexShrink: 0 }}
          />
          <div>
            <div style={{
              fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
              fontSize: 20, letterSpacing: "0.08em", color: "#0a1628",
            }}>Sriram Advisory</div>
            <div style={{ fontSize: 11, color: "#1a4fd6", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>
              Clarity. Strategy. Growth.
            </div>
          </div>
        </div>
        <p style={{ fontSize: 12, color: "#aab4c8", margin: 0 }}>
          © {new Date().getFullYear()} Sriram Advisory. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
