"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mojrgpqk", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 16px",
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(26,79,214,0.25)",
    borderRadius: 8, color: "#0a1628", fontSize: 15,
    outline: "none", boxSizing: "border-box",
  };

  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 60%, #e6efff 100%)", paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,79,214,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,79,214,0.04) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a4fd6", display: "block", marginBottom: 20 }}>Get in Touch</span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, color: "#0a1628", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>Contact</h1>
          <p style={{ fontSize: 18, color: "#5a6a8a", lineHeight: 1.7 }}>
            Questions about the assessment, methodology, or refund policy — we respond within 24 hours.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 24px 120px", background: "#f7f9fc" }}>
        <div className="contact-layout" style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* CONTACT INFO */}
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0a1628", marginBottom: 32 }}>Direct Contact</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.15)", borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#0d9268", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Email</div>
                <a href="mailto:sriram@sriramadvisory.com" style={{ color: "#1a4fd6", textDecoration: "none", fontSize: 15, fontWeight: 600 }}>
                  sriram@sriramadvisory.com
                </a>
                <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 6 }}>Response within 24 hours</p>
              </div>
              <div style={{ background: "rgba(10,22,40,0.025)", border: "1px solid rgba(26,79,214,0.15)", borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#0d9268", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>WhatsApp</div>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" style={{ color: "#1a4fd6", textDecoration: "none", fontSize: 15, fontWeight: 600 }}>
                  Message on WhatsApp →
                </a>
                <p style={{ fontSize: 15, color: "#5a6a8a", marginTop: 6 }}>For quick queries</p>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0a1628", marginBottom: 32 }}>Send a Message</h2>
            {status === "sent" ? (
              <div style={{ background: "rgba(34,211,160,0.08)", border: "1px solid rgba(34,211,160,0.25)", borderRadius: 12, padding: "36px 32px", textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#0d9268", marginBottom: 8 }}>Message sent.</div>
                <p style={{ fontSize: 15, color: "#5a6a8a" }}>We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label htmlFor="contact-name" style={{ fontSize: 13, fontWeight: 700, color: "#5a6a8a", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Name</label>
                    <input
                      id="contact-name"
                      type="text" required placeholder="Your name"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ fontSize: 13, fontWeight: 700, color: "#5a6a8a", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Email</label>
                    <input
                      id="contact-email"
                      type="email" required placeholder="your@email.com"
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" style={{ fontSize: 13, fontWeight: 700, color: "#5a6a8a", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Subject</label>
                  <input
                    id="contact-subject"
                    type="text" placeholder="What is your question about?"
                    value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" style={{ fontSize: 13, fontWeight: 700, color: "#5a6a8a", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Message</label>
                  <textarea
                    id="contact-message"
                    required rows={5} placeholder="Your message..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>
                {status === "error" && (
                  <p style={{ fontSize: 15, color: "#dc2626" }}>Something went wrong. Please email us directly at sriram@sriramadvisory.com</p>
                )}
                <button
                  type="submit" disabled={status === "sending"}
                  style={{
                    background: status === "sending" ? "rgba(26,79,214,0.5)" : "#1a4fd6",
                    color: "#fff", fontWeight: 700, fontSize: 15,
                    padding: "14px 32px", borderRadius: 9, border: "none",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    alignSelf: "flex-start",
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
