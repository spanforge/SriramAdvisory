import Link from "next/link";

const RECOMMENDATIONS = [
  { title: "Career Positioning Audit", body: "Turn career clarity into a stronger resume and LinkedIn story.", href: "/services/career-positioning-audit", price: "Rs 999" },
  { title: "AI Risk Rankings India 2026", body: "See wider role-level pressure across the Indian market.", href: "/products/ai-risk-rankings-india-2026", price: "Rs 999" },
  { title: "State of QA Careers India 2026", body: "A deeper market read for QA professionals and leaders.", href: "/products/state-of-qa-careers-india-2026", price: "Rs 799" },
];

export default function ProductRecommendations() {
  return (
    <section style={{ padding: "72px 20px", background: "#f7f9fc" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6" }}>Continue Your Research</span>
        <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", color: "#0a1628", margin: "12px 0 28px" }}>Useful next steps for a fuller market view.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {RECOMMENDATIONS.map((item) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: "none", background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "20px" }}>
              <div style={{ color: "#1a4fd6", fontSize: 13, fontWeight: 800, marginBottom: 8 }}>{item.price}</div>
              <h3 style={{ margin: "0 0 8px", fontSize: 18, color: "#0a1628" }}>{item.title}</h3>
              <p style={{ margin: 0, color: "#52627e", fontSize: 14, lineHeight: 1.65 }}>{item.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
