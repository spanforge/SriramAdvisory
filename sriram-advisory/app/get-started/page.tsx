"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function GetStartedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", years: "", email: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/snapshot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      {/* HERO STRIP */}
      <section style={{ background: "#0a1628", padding: "80px 24px 60px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
            fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#4fc3f7", marginBottom: 20,
          }}>Start Here</div>
          <h1 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(38px, 5vw, 64px)",
            lineHeight: 1, letterSpacing: "0.02em",
            color: "#f8faff", margin: "0 0 20px",
          }}>
            Find Out Where<br />
            <span style={{ color: "#1a4fd6" }}>You Actually Stand.</span>
          </h1>
          <p style={{
            fontSize: 16, color: "rgba(248,250,255,0.65)",
            lineHeight: 1.75, margin: 0,
          }}>
            Two options below. Both start with the same question — where are you in your career
            and how exposed is your role to AI disruption?
          </p>
        </div>
      </section>

      {/* TWO OPTIONS */}
      <section style={{ background: "#f7f9fc", padding: "64px 24px" }}>
        <div style={{
          maxWidth: 1000, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 32,
        }}>
          {/* OPTION 1 — Free Snapshot */}
          <div style={{
            background: "#ffffff", border: "2px solid #1a4fd6",
            borderRadius: 16, padding: "44px 36px",
            position: "relative",
          }}>
            <div style={{
              position: "absolute", top: -1, left: 32,
              background: "#1a4fd6", color: "#ffffff",
              fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              padding: "4px 14px", borderRadius: "0 0 8px 8px",
            }}>Start for free</div>

            <div style={{ marginTop: 8 }}>
              <div style={{
                fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
                fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
                color: "#1a4fd6", marginBottom: 10,
              }}>Free Risk Snapshot</div>
              <h2 style={{
                fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                fontSize: 32, letterSpacing: "0.03em", color: "#0a1628",
                margin: "0 0 8px", lineHeight: 1,
              }}>SA-AIRS™ Lite</h2>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#0a1628", margin: "0 0 6px" }}>
                ₹0
              </div>
              <p style={{ fontSize: 13, color: "#8898b8", margin: "0 0 24px" }}>
                Delivered within 24 hours &bull; No commitment &bull; No sales call
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {[
                  "AI exposure score for your current role",
                  "Top 2–3 risk vectors specific to your function",
                  "One priority action for the next 30 days",
                  "No sales pitch. Just the assessment.",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#1a4fd6", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#3a4a6a", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>

              {submitted ? (
                <div style={{
                  background: "rgba(16,180,140,0.08)", border: "1px solid rgba(16,180,140,0.25)",
                  borderRadius: 10, padding: "20px 24px", textAlign: "center",
                }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>✓</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#0d9e7e", marginBottom: 6 }}>
                    Snapshot request received
                  </div>
                  <p style={{ fontSize: 13, color: "#5a6a8a", margin: 0 }}>
                    You will hear back within 24 hours at {form.email}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { name: "name", label: "Your Name", placeholder: "e.g. Priya Sharma", type: "text" },
                    { name: "role", label: "Current Role / Title", placeholder: "e.g. Senior Product Manager", type: "text" },
                    { name: "email", label: "Email Address", placeholder: "you@example.com", type: "email" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: "#3a4a6a", display: "block", marginBottom: 6, letterSpacing: "0.04em" }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        required
                        placeholder={field.placeholder}
                        style={{
                          width: "100%", boxSizing: "border-box",
                          border: "1px solid rgba(10,22,40,0.18)", borderRadius: 8,
                          padding: "11px 14px", fontSize: 14, color: "#0a1628",
                          outline: "none", background: "#fafbfd",
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#3a4a6a", display: "block", marginBottom: 6, letterSpacing: "0.04em" }}>
                      Years of Experience
                    </label>
                    <select
                      name="years"
                      value={form.years}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%", boxSizing: "border-box",
                        border: "1px solid rgba(10,22,40,0.18)", borderRadius: 8,
                        padding: "11px 14px", fontSize: 14, color: "#0a1628",
                        outline: "none", background: "#fafbfd", appearance: "none",
                      }}
                    >
                      <option value="">Select range</option>
                      <option value="0-3">0 – 3 years</option>
                      <option value="4-7">4 – 7 years</option>
                      <option value="8-12">8 – 12 years</option>
                      <option value="13-18">13 – 18 years</option>
                      <option value="19+">19+ years</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      marginTop: 8,
                      background: loading ? "#8898b8" : "#1a4fd6",
                      color: "#ffffff", border: "1px solid #3b6ef0",
                      borderRadius: 8, padding: "14px 24px",
                      fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
                      letterSpacing: "0.02em", transition: "background 0.15s",
                    }}
                  >
                    {loading ? "Submitting…" : "Get My Free Snapshot →"}
                  </button>

                  <p style={{ fontSize: 11, color: "#aab4c8", textAlign: "center", margin: "4px 0 0" }}>
                    No account required. No credit card. Just your email.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* OPTION 2 — Full Report */}
          <div style={{
            background: "#0a1628", border: "1px solid rgba(79,195,247,0.2)",
            borderRadius: 16, padding: "44px 36px",
          }}>
            <div style={{
              fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
              fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
              color: "#4fc3f7", marginBottom: 10,
            }}>Full Career Report</div>
            <h2 style={{
              fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
              fontSize: 32, letterSpacing: "0.03em", color: "#f8faff",
              margin: "0 0 8px", lineHeight: 1,
            }}>SA-AIRS™ Full</h2>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#f8faff", margin: "0 0 2px" }}>
              ₹999
            </div>
            <div style={{
              fontSize: 12, color: "#8898b8",
              textDecoration: "line-through", marginBottom: 6,
            }}>Regular ₹1499</div>
            <p style={{ fontSize: 13, color: "rgba(248,250,255,0.5)", margin: "0 0 28px" }}>
              Launch pricing &bull; One-time &bull; Yours to keep
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
              {[
                "Full task-level AI exposure analysis",
                "12-dimension career vulnerability score",
                "Comparator benchmarks (role × tenure × sector)",
                "60-page structured report",
                "90-day Repositioning Action Plan",
                "30-minute debrief call included",
                "Satisfaction guarantee or full refund",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#4fc3f7", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                  <span style={{ fontSize: 14, color: "rgba(248,250,255,0.75)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://rzp.io/sriramadvisory"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block", textAlign: "center",
                background: "#1a4fd6", color: "#ffffff", textDecoration: "none",
                padding: "14px 24px", borderRadius: 8,
                fontSize: 15, fontWeight: 700,
                border: "1px solid #3b6ef0", marginBottom: 16,
              }}
            >
              Get the Full Report — ₹999 →
            </a>

            <div style={{
              background: "rgba(248,250,255,0.05)", borderRadius: 10,
              padding: "16px 20px",
            }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#4fc3f7", marginBottom: 4 }}>
                Satisfaction Guarantee
              </div>
              <p style={{ fontSize: 12, color: "rgba(248,250,255,0.5)", margin: 0, lineHeight: 1.6 }}>
                If you read the report and do not feel it gave you genuine clarity about your AI exposure
                and what to do about it — full refund, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REASSURANCE STRIP */}
      <section style={{ background: "#ffffff", padding: "40px 24px", borderTop: "1px solid rgba(10,22,40,0.07)" }}>
        <div style={{
          maxWidth: 900, margin: "0 auto",
          display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center",
        }}>
          {[
            "No upsells during or after the free snapshot",
            "No drip email sequences",
            "The full report pays for itself in one good decision",
            "Working with real professionals — not a generic AI tool",
          ].map((item) => (
            <div key={item} style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ color: "#1a4fd6", fontSize: 16 }}>•</span>
              <span style={{ fontSize: 13, color: "#5a6a8a" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f7f9fc", padding: "64px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(28px, 3.5vw, 40px)", letterSpacing: "0.02em",
            color: "#0a1628", margin: "0 0 40px", lineHeight: 1,
          }}>Common Questions</h2>
          {[
            {
              q: "What happens after I submit the snapshot form?",
              a: "You will receive a personalised snapshot within 24 hours — by email. It is a short document: your exposure score, your top risk vectors, and one priority action. It is not a sales pitch.",
            },
            {
              q: "What is the difference between the snapshot and the full report?",
              a: "The snapshot is a quick read: 3–4 focused outputs to orient you. The full report is a 60-page structured assessment with 12 scored dimensions, peer benchmarks, and a 90-day plan. If the snapshot is useful, the report goes deeper on every dimension.",
            },
            {
              q: "Is there a call involved in the snapshot?",
              a: "No. The snapshot is fully async — you fill in 4 fields, we do the analysis, you get the output. The full report includes a 30-minute debrief call.",
            },
            {
              q: "What if I don't like the full report?",
              a: "Full refund. No conditions, no process. Just email and it is done.",
            },
          ].map((item) => (
            <div key={item.q} style={{
              borderBottom: "1px solid rgba(10,22,40,0.08)",
              paddingBottom: 24, marginBottom: 24,
            }}>
              <div style={{
                fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                fontSize: 18, letterSpacing: "0.02em", color: "#0a1628", marginBottom: 10,
              }}>{item.q}</div>
              <p style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.75, margin: 0 }}>{item.a}</p>
            </div>
          ))}
          <div style={{ marginTop: 8 }}>
            <p style={{ fontSize: 14, color: "#5a6a8a" }}>
              More questions?{" "}
              <a href="mailto:sriram@sriramadvisory.com" style={{ color: "#1a4fd6", fontWeight: 500 }}>
                Email directly
              </a>{" "}
              or{" "}
              <a href="https://wa.me/919342229420" target="_blank" rel="noopener noreferrer" style={{ color: "#1a4fd6", fontWeight: 500 }}>
                WhatsApp
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
