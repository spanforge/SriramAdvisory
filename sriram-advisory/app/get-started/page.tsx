"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const PRODUCTS = [
  {
    tier: "AI Career Risk Score",
    price: "₹999",
    tag: "Most popular",
    desc: "Personalised 1-page assessment of your specific role — scored by Sriram.",
    items: [
      "Role-specific AI exposure analysis",
      "SA-AIRS™ 5-dimension score",
      "Risk tier placement",
      "Top 3 priority actions",
      "Delivered within 24 hours",
    ],
    cta: "Get My Risk Score — ₹999",
    href: "https://rzp.io/sriramadvisory",
    external: true,
    highlight: true,
  },
  {
    tier: "Pro Edition",
    price: "₹1,999",
    tag: "Full intelligence",
    desc: "Complete intelligence report + quarterly updates for serious professionals.",
    items: [
      "Everything in Risk Score",
      "SA-AIRS™ methodology in detail with visual charts",
      "7 industry deep dives (IT, BPO, BFSI, Healthcare, Manufacturing, Retail, Education)",
      "Salary outlook scenarios & premium insights",
      "AI tools curated by profession",
      "Dedicated Top 10% Ladder™ section",
      "90-day roadmap (detailed & actionable)",
      "Resume & LinkedIn positioning guide",
      "Two quarterly updates included",
    ],
    cta: "Get Pro Edition — ₹1,999",
    href: "https://rzp.io/sriramadvisory",
    external: true,
    highlight: false,
  },
];

export default function GetStartedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/meenljjo", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
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
      <section style={{ background: "#f0f4f8", padding: "96px 24px 72px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
            fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#1a4fd6", marginBottom: 20,
          }}>The Complete Advisory Range</div>
          <h1 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(38px, 5vw, 64px)",
            lineHeight: 1, letterSpacing: "0.02em",
            color: "#0a1628", margin: "0 0 20px",
          }}>
            Your Career Score.<br />
            <span style={{ color: "#1a4fd6" }}>Your Next Move.</span>
          </h1>
          <p style={{ fontSize: 16, color: "#5a6a8a", lineHeight: 1.75, margin: "0 0 32px" }}>
            Designed for Indian professionals. Choose the depth that matches your situation.
            All prices in INR (₹).
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/919342229420" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 14, color: "#5a6a8a", textDecoration: "none",
              padding: "10px 20px", borderRadius: 8, fontWeight: 500,
              border: "1px solid rgba(10,22,40,0.15)",
            }}>
              Questions? WhatsApp us →
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section style={{ background: "#ffffff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
          }}>
            {PRODUCTS.map((p) => (
              <div key={p.tier} style={{
                background: p.highlight ? "rgba(26,79,214,0.04)" : "#ffffff",
                border: p.highlight ? "2px solid #1a4fd6" : "1px solid rgba(10,22,40,0.1)",
                borderRadius: 16, padding: "40px 32px",
                display: "flex", flexDirection: "column", gap: 0,
                position: "relative",
              }}>
                {p.highlight && (
                  <div style={{
                    position: "absolute", top: -1, left: 32,
                    background: "#1a4fd6", color: "#ffffff",
                    fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                    padding: "4px 14px", borderRadius: "0 0 8px 8px",
                  }}>{p.tag}</div>
                )}
                {!p.highlight && (
                  <div style={{
                    fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
                    fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "#1a4fd6", marginBottom: 12,
                  }}>{p.tag}</div>
                )}
                <div style={{ marginTop: p.highlight ? 12 : 0 }}>
                  <h2 style={{
                    fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                    fontSize: 28, letterSpacing: "0.03em", color: "#0a1628",
                    margin: "0 0 6px", lineHeight: 1,
                  }}>{p.tier}</h2>
                  <div style={{ fontSize: 36, fontWeight: 800, color: "#0a1628", margin: "0 0 6px", fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)", letterSpacing: "0.02em" }}>
                    {p.price}
                  </div>
                  <p style={{ fontSize: 14, color: "#5a6a8a", margin: "0 0 24px", lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 32 }}>
                    {p.items.map((item) => (
                      <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "#1a4fd6", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                        <span style={{ fontSize: 14, color: "#3a4a6a", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={p.href}
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noopener noreferrer" : undefined}
                    style={{
                      display: "block", textAlign: "center",
                      background: "#1a4fd6", color: "#ffffff", textDecoration: "none",
                      padding: "14px 24px", borderRadius: 8,
                      fontSize: 15, fontWeight: 700,
                      border: "1px solid #3b6ef0",
                    }}
                  >
                    {p.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM TIERS */}
      <section style={{ background: "#f0f4f8", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
            fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#1a4fd6", marginBottom: 12,
          }}>For Serious Professionals</div>
          <h2 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "0.02em",
            color: "#0a1628", margin: "0 0 40px", lineHeight: 1,
          }}>Work Directly With Sriram</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              {
                tier: "Clarity Call",
                price: "₹3,999 – ₹7,499",
                sub: "30 minutes",
                desc: "1:1 with Sriram to map your exact next move. Includes a full SA-AIRS™ audit of your specific role.",
                items: ["Pre-call SA-AIRS™ audit of your role", "30-minute 1:1 session", "Exact next-move roadmap", "Session notes delivered"],
              },
              {
                tier: "Domain Deep Dive Program",
                price: "₹9,999 – ₹24,999+",
                sub: "Custom 90-day program",
                desc: "Custom transition program: from your current role to its AI-era equivalent.",
                items: ["Personalised 90-day transition plan", "Weekly accountability sessions", "Role-to-AI-era equivalence mapping", "Curated upskill & tool recommendations", "Direct founder access throughout"],
              },
            ].map((p) => (
              <div key={p.tier} style={{
                background: "#ffffff", border: "1px solid rgba(10,22,40,0.1)",
                borderRadius: 16, padding: "36px 32px",
                display: "flex", flexDirection: "column",
              }}>
                <div style={{
                  fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
                  fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#1a4fd6", marginBottom: 10,
                }}>{p.sub}</div>
                <h3 style={{
                  fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                  fontSize: 26, letterSpacing: "0.03em", color: "#0a1628",
                  margin: "0 0 4px", lineHeight: 1,
                }}>{p.tier}</h3>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#0a1628", margin: "0 0 6px" }}>{p.price}</div>
                <p style={{ fontSize: 14, color: "#5a6a8a", margin: "0 0 20px", lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28, flex: 1 }}>
                  {p.items.map((item) => (
                    <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#1a4fd6", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span style={{ fontSize: 14, color: "#3a4a6a", lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/919342229420" target="_blank" rel="noopener noreferrer" style={{
                  display: "block", textAlign: "center",
                  background: "transparent", color: "#1a4fd6", textDecoration: "none",
                  padding: "13px 24px", borderRadius: 8,
                  fontSize: 14, fontWeight: 700,
                  border: "2px solid #1a4fd6",
                }}>
                  Enquire on WhatsApp →
                </a>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#5a6a8a", marginTop: 24, textAlign: "center" }}>
            Founder discounts available in direct conversations. DM / WhatsApp to know more.
          </p>
        </div>
      </section>

      {/* REASSURANCE */}
      <section style={{ background: "#ffffff", padding: "40px 24px", borderTop: "1px solid rgba(10,22,40,0.07)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
          {[
            "Advisory analysis — not a guaranteed prediction",
            "For personal use only",
            "No drip email sequences after purchase",
            "Working with real professionals — not a generic AI tool",
          ].map((item) => (
            <div key={item} style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ color: "#1a4fd6", fontSize: 16 }}>•</span>
              <span style={{ fontSize: 13, color: "#5a6a8a" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / CUSTOM INQUIRY */}
      <section style={{ background: "#f7f9fc", padding: "64px 24px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
            fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#1a4fd6", marginBottom: 12,
          }}>Not Sure Where to Start?</div>
          <h2 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "0.02em",
            color: "#0a1628", margin: "0 0 12px", lineHeight: 1,
          }}>Send a Message</h2>
          <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.7, margin: "0 0 32px" }}>
            Describe your situation and we will point you to the right starting point.
          </p>

          {submitted ? (
            <div style={{
              background: "rgba(16,180,140,0.08)", border: "1px solid rgba(16,180,140,0.25)",
              borderRadius: 12, padding: "28px 32px", textAlign: "center",
            }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>✓</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#0d9e7e", marginBottom: 8 }}>Message received</div>
              <p style={{ fontSize: 14, color: "#5a6a8a", margin: 0 }}>
                You will hear back within 24 hours at {form.email}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { name: "name", label: "Your Name", placeholder: "e.g. Priya Sharma", type: "text" },
                { name: "role", label: "Current Role / Title", placeholder: "e.g. Senior Product Manager", type: "text" },
                { name: "email", label: "Email Address", placeholder: "you@example.com", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "#3a4a6a", display: "block", marginBottom: 6, letterSpacing: "0.04em" }}>
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
                <label style={{ fontSize: 13, fontWeight: 600, color: "#3a4a6a", display: "block", marginBottom: 6, letterSpacing: "0.04em" }}>
                  What would you like to discuss?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us your situation, your role, and what you are trying to figure out..."
                  rows={4}
                  style={{
                    width: "100%", boxSizing: "border-box",
                    border: "1px solid rgba(10,22,40,0.18)", borderRadius: 8,
                    padding: "11px 14px", fontSize: 14, color: "#0a1628",
                    outline: "none", background: "#fafbfd", resize: "vertical",
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? "#8898b8" : "#1a4fd6",
                  color: "#ffffff", border: "1px solid #3b6ef0",
                  borderRadius: 8, padding: "14px 24px",
                  fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
                  letterSpacing: "0.02em", transition: "background 0.15s",
                }}
              >
                {loading ? "Sending…" : "Send Message →"}
              </button>
              <p style={{ fontSize: 13, color: "#8898b8", margin: "0", textAlign: "center" }}>
                Or reach us directly at{" "}
                <a href="mailto:sriram@sriramadvisory.com" style={{ color: "#1a4fd6" }}>sriram@sriramadvisory.com</a>
                {" "}or{" "}
                <a href="https://wa.me/919342229420" target="_blank" rel="noopener noreferrer" style={{ color: "#1a4fd6" }}>WhatsApp</a>.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#ffffff", padding: "64px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(28px, 3.5vw, 40px)", letterSpacing: "0.02em",
            color: "#0a1628", margin: "0 0 40px", lineHeight: 1,
          }}>Common Questions</h2>
          {[
            {
              q: "What does the Pro Edition add over the Risk Score?",
              a: "The Pro Edition (₹1,999) includes everything in the Risk Score plus detailed industry deep dives across 7 sectors, salary outlook scenarios, AI tools curated by profession, a dedicated Top 10% Ladder™ section, a 90-day roadmap, LinkedIn positioning guide, and two quarterly updates.",
            },
            {
              q: "How does the Clarity Call work?",
              a: "You book a 30-minute 1:1 call with Sriram. Before the call, he completes a full SA-AIRS™ audit of your specific role. On the call, you discuss your exact situation and leave with a clear next-move roadmap. Session notes are delivered after.",
            },
            {
              q: "What if I am not satisfied with my purchase?",
              a: "Full refund, no conditions, no process. Just email and it is done. See our Refund Policy for details.",
            },
            {
              q: "Are the prices final?",
              a: "Current pricing is as listed. Founder discounts are available in direct conversations — DM or WhatsApp to know more.",
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
        </div>
      </section>

      <Footer />
    </>
  );
}
