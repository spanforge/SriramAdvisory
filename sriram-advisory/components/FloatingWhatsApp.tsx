export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919342229420"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ask a question on WhatsApp"
      title="Ask a question on WhatsApp"
      style={{ position: "fixed", right: 20, bottom: 20, zIndex: 150, display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 54, height: 54, padding: "0 14px", borderRadius: 8, background: "#128c7e", color: "#ffffff", boxShadow: "0 12px 28px rgba(10,22,40,0.22)", fontSize: 13, fontWeight: 800, textDecoration: "none" }}
    >
      WhatsApp
    </a>
  );
}
