import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PILLARS = [
  {
    title: "Clarity in Complexity",
    desc: "Cut through the noise and understand what AI means for you — your career, your business, your future.",
  },
  {
    title: "Strategy for Today & Tomorrow",
    desc: "Actionable steps you can take now that compound over time.",
  },
  {
    title: "Growth with Purpose",
    desc: "Not just surviving the AI era — thriving with intention.",
  },
  {
    title: "Mindset Before Skillset",
    desc: "The tools will keep changing. How you think about them determines whether they work for you — or against you.",
  },
];

const SERVICE_CARDS = [
  {
    service: "Career Navigation",
    desc: "AI is not replacing roles — it is replacing the thinking behind them. Shift how you see your role, your leverage, and your next move before the market shifts it for you.",
  },
  {
    service: "Business Readiness",
    desc: "Build the frameworks and mindset your team needs to adopt AI effectively — without disruption and without getting left behind.",
  },
  {
    service: "Growth Strategy",
    desc: "Whether you are a professional repositioning or a founder building, we create a clear path forward and hold you accountable to it.",
  },
];

export default function HomePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">

      <Navbar />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #f0f5ff 0%, #e8eef8 55%, #f4f7fe 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(26,79,214,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,79,214,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="hidden lg:block" style={{
          position: "absolute", top: -80, right: "10%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,79,214,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 py-16 md:py-24 lg:py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div style={{
              display: "inline-block",
              fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
              fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#1a4fd6", marginBottom: 24,
              padding: "5px 12px", border: "1px solid rgba(26,79,214,0.25)", borderRadius: 4,
            }}>For Everyone in the AI Era</div>
            <h1 style={{
              fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(52px, 7vw, 96px)",
              lineHeight: 0.95, letterSpacing: "0.02em",
              color: "#0a1628", margin: "0 0 28px",
            }}>
              THINK<br />
              <span style={{ color: "#1a4fd6" }}>DIFFERENTLY.<br />THRIVE.</span>
            </h1>
            <p style={{
              fontSize: "clamp(16px, 2vw, 20px)", color: "#5a6a8a",
              lineHeight: 1.7, margin: "0 0 48px", maxWidth: 480,
            }}>
              Sriram Advisory exists for <strong style={{ color: "#0a1628" }}>everyone</strong> who
              is willing to challenge how they think about AI, their career, and their future — not just the technically trained,
              not just the already successful. Everyone.
            </p>

            <div style={{ marginTop: 20 }}>
              <p style={{ fontSize: 13, color: "rgba(10,22,40,0.5)", margin: "0 0 10px", letterSpacing: "0.04em" }}>
                Get in touch:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="mailto:sriram@sriramadvisory.com" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  fontSize: 15, fontWeight: 500, color: "rgba(10,22,40,0.8)",
                  textDecoration: "none", borderBottom: "1px solid rgba(26,79,214,0.4)",
                  paddingBottom: 2, letterSpacing: "0.02em", width: "fit-content",
                }}>sriram@sriramadvisory.com</a>
                <a href="https://wa.me/919342229420" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  fontSize: 15, fontWeight: 500, color: "rgba(10,22,40,0.8)",
                  textDecoration: "none", width: "fit-content",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.964-1.406A9.946 9.946 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.066-1.115l-.29-.173-3.007.852.804-2.934-.19-.302A7.944 7.944 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" fill="#25D366"/>
                  </svg>
                  +91 93422 29420
                </a>
              </div>
            </div>
          </div>

          {/* Right — Value card */}
          <div className="backdrop-blur-[12px] rounded-[20px] p-8 md:p-12" style={{
            background: "rgba(10,22,40,0.04)",
            border: "1px solid rgba(10,22,40,0.08)",
          }}>
            <p style={{
              fontSize: "clamp(18px, 2.2vw, 26px)", fontWeight: 300,
              lineHeight: 1.6, color: "#0a1628", margin: "0 0 28px",
            }}>
              The AI era rewards those who{" "}
              <strong style={{ fontWeight: 700, color: "#1a4fd6" }}>change how they think</strong>,{" "}
              not just what they know — and it is open to{" "}
              <strong style={{ fontWeight: 700 }}>anyone willing to make that shift</strong>.
            </p>
            <p style={{
              fontSize: 14, color: "rgba(10,22,40,0.5)", lineHeight: 1.75,
              borderTop: "1px solid rgba(10,22,40,0.08)", paddingTop: 24, margin: 0,
            }}>
              You do not need a computer science degree. You do not need to already be ahead.
              You need the willingness to think differently, the courage to act on that shift, and the right guidance.
              That is what we provide.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-white py-16 md:py-24 lg:py-[100px] px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[640px] mb-12 md:mb-16">
            <div style={{
              fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
              fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#1a4fd6", marginBottom: 16,
            }}>Who We Help</div>
            <h2 style={{
              fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "0.02em",
              color: "#0a1628", margin: "0 0 20px", lineHeight: 1,
            }}>For Everyone<br />Ready to Think Differently</h2>
            <p style={{ fontSize: 17, color: "#5a6a8a", lineHeight: 1.75, margin: 0 }}>
              Whether you are a professional rethinking your role in the AI era,
              a business owner questioning how to lead differently, or someone who senses
              the world has shifted and wants to shift with it — we meet you where you are.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_CARDS.map((s) => (
              <div key={s.service} className="flex flex-col gap-4 rounded-[16px] p-8 md:p-9" style={{
                border: "1px solid rgba(10,22,40,0.1)",
              }}>
                <div style={{ width: 40, height: 3, background: "#1a4fd6", borderRadius: 2 }} />
                <h3 style={{
                  fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                  fontSize: 26, letterSpacing: "0.04em", color: "#0a1628", margin: 0,
                }}>{s.service}</h3>
                <p className="flex-1" style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS + CTA */}
      <section className="py-16 md:py-20 lg:py-[80px] px-5 md:px-10" style={{ background: "#f0f4f8" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-12" style={{
            fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
            fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#1a4fd6",
          }}>How We Work</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16 md:mb-[72px]">
            {PILLARS.map((p) => (
              <div key={p.title} className="flex flex-col gap-3">
                <div style={{ width: 32, height: 2, background: "#1a4fd6", borderRadius: 1 }} />
                <div style={{
                  fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                  fontSize: 20, letterSpacing: "0.04em", color: "#0a1628", lineHeight: 1.2,
                }}>{p.title}</div>
                <div style={{ fontSize: 13, color: "#5a6a8a", lineHeight: 1.7 }}>{p.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-12 md:pt-14" style={{
            borderTop: "1px solid rgba(10,22,40,0.08)",
          }}>
            <p className="max-w-[600px]" style={{
              fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
              fontSize: "clamp(28px, 4vw, 52px)", color: "#0a1628",
              margin: 0, letterSpacing: "0.02em", lineHeight: 1,
            }}>
              The AI era rewards those who{" "}
              <span style={{ color: "#1a4fd6" }}>change how they think,</span>{" "}
              not just what they know.
            </p>
            <Link href="/get-started" className="inline-flex items-center gap-2.5 shrink-0 rounded-[10px] px-7 md:px-9 py-4 md:py-[18px]" style={{
              background: "#1a4fd6",
              color: "#fff", fontSize: 15, fontWeight: 600,
              letterSpacing: "0.02em", textDecoration: "none",
            }}>
              Get Your Risk Score →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER — no menu */}
      <Footer />
    </div>
  );
}
