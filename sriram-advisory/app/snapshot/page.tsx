"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIMS_PREVIEW = [
  { id: "D1", name: "Task Repetition Level", weight: "25%" },
  { id: "D2", name: "Automation Feasibility", weight: "25%" },
  { id: "D3", name: "Market Saturation", weight: "20%" },
  { id: "D4", name: "Decision Complexity (inv.)", weight: "15%" },
  { id: "D5", name: "Human Context Dep. (inv.)", weight: "15%" },
];

export default function SnapshotPage() {
  const [form, setForm] = useState({ name: "", role: "", industry: "", experience: "", email: "", concern: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/snapshot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />

      {/* HEADER */}
      <section className="px-5 md:px-10" style={{ paddingTop: 120, paddingBottom: 60, background: "#0a1628" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <div className="hero-badge" style={{ marginBottom: 24, width: "fit-content" }}>
              <span className="hero-badge-dot" />
              Free Snapshot &middot; 24-Hour Delivery
            </div>
            <h1 className="section-title" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: 20 }}>
              Get Your AI<br />Career Risk Score
            </h1>
            <p style={{ fontSize: 16, color: "#8898b8", lineHeight: 1.75, marginBottom: 32 }}>
              Fill in 4–6 fields. Sriram personally scores your profile against the SA-AIRS&#8482; v4 formula. You receive your score, risk tier, and one key insight — within 24 hours.
            </p>
            <div className="guarantee-box" style={{ marginBottom: 32 }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>🛡</span>
              <div>
                <div className="guarantee-title" style={{ fontSize: 14 }}>1 Actionable Insight Guaranteed</div>
                <div className="guarantee-desc" style={{ fontSize: 12 }}>If you can&apos;t identify one specific action from your snapshot, full refund. No forms.</div>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, letterSpacing: "0.1em", color: "#4fc3f7", marginBottom: 14, textTransform: "uppercase" }}>// What You Get</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["2-dimension quick score (D1 + D2)", "Risk tier placement (Low / Moderate / High / Very High / Critical)", "Top 10% Ladder level (L1–L5)", "1 key insight specific to your role", "Upgrade path to Full Report (optional)"].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, fontSize: 13, color: "#8898b8", alignItems: "flex-start" }}>
                    <span style={{ color: "#22d3a0", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FORM */}
          <div>
            {status === "done" ? (
              <div style={{ background: "rgba(34,211,160,0.06)", border: "1px solid rgba(34,211,160,0.2)", borderRadius: 16, padding: "48px 32px", textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 20 }}>✓</div>
                <h2 style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 32, color: "#22d3a0", marginBottom: 12, letterSpacing: "0.05em" }}>Snapshot Received</h2>
                <p style={{ color: "#8898b8", fontSize: 14, lineHeight: 1.75 }}>
                  Sriram will review your profile and deliver your SA-AIRS&#8482; score within 24 hours. Check your email — including spam/promotions.
                </p>
                <p style={{ marginTop: 24, fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "rgba(136,152,184,0.5)", letterSpacing: "0.06em" }}>
                  SA-AIRS&#8482; v4 &middot; Manually scored &middot; Not automated
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-card" style={{ borderRadius: 16, padding: "32px" }}>
                  <div style={{ marginBottom: 24, fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.12em", color: "#4fc3f7", textTransform: "uppercase" }}>
                    Free Snapshot Form &middot; SA-AIRS&#8482; v4
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div>
                      <label className="form-label">Full Name <span style={{ color: "#ff4d4d" }}>*</span></label>
                      <input className="form-input" type="text" placeholder="Ravi Kumar" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="form-label">Current Job Title / Role <span style={{ color: "#ff4d4d" }}>*</span></label>
                      <input className="form-input" type="text" placeholder="e.g. Senior Software Engineer, Marketing Manager" required value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} />
                    </div>
                    <div>
                      <label className="form-label">Industry / Domain</label>
                      <input className="form-input" type="text" placeholder="e.g. SaaS, BFSI, Healthcare, D2C" value={form.industry} onChange={e => setForm({ ...form, industry: e.target.value })} />
                    </div>
                    <div>
                      <label className="form-label">Years of Experience <span style={{ color: "#ff4d4d" }}>*</span></label>
                      <select className="form-input form-select" required value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })}>
                        <option value="">Select range</option>
                        <option>0–2 years (Early career)</option>
                        <option>3–5 years (Mid-level)</option>
                        <option>6–10 years (Senior)</option>
                        <option>10–15 years (Lead / Principal)</option>
                        <option>15+ years (Director / Executive)</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Work Email <span style={{ color: "#ff4d4d" }}>*</span></label>
                      <input className="form-input" type="email" placeholder="ravi@company.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                      <p style={{ marginTop: 6, fontSize: 11, color: "rgba(136,152,184,0.5)", fontFamily: "var(--font-dm-mono), monospace" }}>Score delivered here within 24 hours</p>
                    </div>
                    <div>
                      <label className="form-label">Biggest Career Concern Right Now (optional)</label>
                      <textarea className="form-input" placeholder="e.g. Worried my role will be automated in 2 years. Not sure how to position myself for AI..." value={form.concern} onChange={e => setForm({ ...form, concern: e.target.value })} style={{ resize: "vertical", minHeight: 90 }} />
                    </div>
                  </div>
                  <button type="submit" className="form-submit" style={{ marginTop: 24 }} disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : "Submit — Get My Free Snapshot →"}
                  </button>
                  {status === "error" && <p style={{ color: "#ff4d4d", fontSize: 13, textAlign: "center", marginTop: 10 }}>Something went wrong. Please try again or email directly.</p>}
                  <div className="form-trust" style={{ marginTop: 16 }}>
                    <span>🔒</span> No spam &middot; No pitch &middot; Just your score · You can reply to opt out anytime
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-mid">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">After You Submit</span>
            <h2 className="section-title">What Happens Next</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, maxWidth: 900, margin: "0 auto" }}>
            {[
              { n: "01", title: "Received", desc: "Your form is logged. You get an email confirmation immediately." },
              { n: "02", title: "Manually Scored", desc: "Sriram reviews your profile against the SA-AIRS™ formula. Not a bot." },
              { n: "03", title: "Delivered in 24h", desc: "Your score, tier, ladder level, and 1 key insight hit your inbox." },
            ].map((s) => (
              <div key={s.n} style={{ padding: "24px", background: "rgba(248,250,255,0.03)", border: "1px solid rgba(248,250,255,0.07)", borderRadius: 14 }}>
                <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 32, fontWeight: 700, color: "#1a4fd6", lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
                <div style={{ fontWeight: 700, color: "#f8faff", marginBottom: 8, fontSize: 15 }}>{s.title}</div>
                <div style={{ color: "#8898b8", fontSize: 13, lineHeight: 1.65 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIMENSIONS PREVIEW */}
      <section className="section section-dark">
        <div className="section-inner" style={{ maxWidth: 800 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <span className="section-label">Scored Against</span>
              <h2 className="section-title">SA-AIRS&#8482; v4<br />Formula</h2>
              <p className="section-sub" style={{ marginBottom: 24 }}>
                Your Snapshot scores 2 of 5 dimensions. The Full Report includes all 5 plus the 36-month horizon.
              </p>
              <a href="/system" style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 12, color: "#4fc3f7", textDecoration: "none", letterSpacing: "0.06em" }}>
                See full methodology &rarr;
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {DIMS_PREVIEW.map((d, i) => (
                <div key={d.id} style={{ display: "flex", gap: 14, padding: "14px 16px", background: "rgba(248,250,255,0.03)", border: `1px solid ${i < 2 ? "rgba(79,195,247,0.2)" : "rgba(248,250,255,0.06)"}`, borderRadius: 10, alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 13, fontWeight: 700, color: i < 2 ? "#4fc3f7" : "#8898b8", flexShrink: 0, width: 26 }}>{d.id}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: i < 2 ? "#f8faff" : "#8898b8", fontWeight: i < 2 ? 600 : 400 }}>{d.name}</div>
                    <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "rgba(136,152,184,0.6)", marginTop: 2 }}>Weight: {d.weight}</div>
                  </div>
                  {i < 2 && <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#4fc3f7", border: "1px solid rgba(79,195,247,0.3)", borderRadius: 4, padding: "2px 6px", letterSpacing: "0.08em", flexShrink: 0 }}>SNAPSHOT</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
