import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const PHILOSOPHY = [
  {
    label: "Mindset Before Skillset",
    body: "The tools will keep changing. How you think about them determines whether they work for you — or against you.",
  },
  {
    label: "Depth Before Tools",
    body: "Understanding why AI changes your role matters more than learning which tool to use. Depth compounds. Tool knowledge expires.",
  },
  {
    label: "Direction Before Degrees",
    body: "You do not need a computer science degree to navigate the AI era well. You need clarity about where you are going and why.",
  },
  {
    label: "Honesty Over Optimism",
    body: "AI anxiety is a data problem. When you understand what is actually changing — specifically, for your role — fear turns into strategy.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{ background: "#0a1628", padding: "100px 40px 80px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
            fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#4fc3f7", marginBottom: 24,
          }}>The Advisor</div>
          <h1 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(42px, 6vw, 80px)",
            lineHeight: 1, letterSpacing: "0.02em",
            color: "#f8faff", margin: "0 0 28px",
          }}>
            The Thinking Is<br />
            <span style={{ color: "#1a4fd6" }}>The Credential.</span>
          </h1>
          <p style={{
            fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(248,250,255,0.7)",
            lineHeight: 1.75, margin: 0, maxWidth: 620,
          }}>
            Sriram Advisory exists because most career advice in the AI era is either panic or platitude.
            Neither helps. What people need is a structured, honest way to understand what is actually
            changing — and what to do about it.
          </p>
        </div>
      </section>

      {/* PHOTO + STORY */}
      <section style={{ background: "#ffffff", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 72, alignItems: "start" }}>
          <div>
            <img
              src="/sriram.png"
              alt="Sriram"
              style={{ width: "100%", maxWidth: 280, borderRadius: 16, objectFit: "cover", border: "3px solid #1a4fd6" }}
            />
            <div style={{ marginTop: 24 }}>
              <div style={{
                fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                fontSize: 22, letterSpacing: "0.06em", color: "#0a1628",
              }}>Sriram</div>
              <div style={{ fontSize: 13, color: "#5a6a8a", lineHeight: 1.6, marginTop: 4 }}>
                Founder, Sriram Advisory<br />
                Career Risk Strategist
              </div>
              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <a href="mailto:sriram@sriramadvisory.com" style={{
                  fontSize: 13, color: "#1a4fd6", textDecoration: "none",
                  display: "flex", alignItems: "center", gap: 6, fontWeight: 500,
                }}>
                  sriram@sriramadvisory.com
                </a>
                <a href="https://wa.me/919342229420" target="_blank" rel="noopener noreferrer" style={{
                  fontSize: 13, color: "#1a4fd6", textDecoration: "none",
                  display: "flex", alignItems: "center", gap: 6, fontWeight: 500,
                }}>
                  +91 93422 29420
                </a>
              </div>
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
              fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#1a4fd6", marginBottom: 20,
            }}>Why I Built This</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ fontSize: 16, color: "#3a4a6a", lineHeight: 1.8, margin: 0 }}>
                The question I kept hearing — from managers, analysts, engineers, founders — was not
                &ldquo;what AI tool should I learn?&rdquo; It was &ldquo;am I going to be okay?&rdquo;
                And nobody was giving them a straight answer.
              </p>
              <p style={{ fontSize: 16, color: "#3a4a6a", lineHeight: 1.8, margin: 0 }}>
                The career advice industry responded to AI with two flavours: doom (&ldquo;your job is disappearing&rdquo;)
                and optimism theatre (&ldquo;just learn prompting and you&rsquo;ll be fine&rdquo;). Neither was
                grounded in how roles actually work or how AI exposure actually distributes across task profiles.
              </p>
              <p style={{ fontSize: 16, color: "#3a4a6a", lineHeight: 1.8, margin: 0 }}>
                I spent time building a framework that looks at the right level of abstraction — not job titles,
                but tasks. Not industries in aggregate, but specific functions within them. What came out of that
                work is what powers the Career Risk Report. It is not a quiz. It is a structured assessment with
                a methodology behind it.
              </p>
              <p style={{ fontSize: 16, color: "#3a4a6a", lineHeight: 1.8, margin: 0 }}>
                The advisory practice exists to make that work useful — not just as a report, but as a conversation,
                a strategy session, and for some clients, an ongoing relationship. The goal is the same every time:
                get to clarity faster than you would on your own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ background: "#f7f9fc", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
            fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#1a4fd6", marginBottom: 16,
          }}>Philosophy</div>
          <h2 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "0.02em",
            color: "#0a1628", margin: "0 0 52px", lineHeight: 1,
          }}>How I Think About<br />AI and Careers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
            {PHILOSOPHY.map((p) => (
              <div key={p.label} style={{
                background: "#ffffff", border: "1px solid rgba(10,22,40,0.08)",
                borderRadius: 14, padding: "32px 28px",
              }}>
                <div style={{ width: 36, height: 3, background: "#1a4fd6", borderRadius: 2, marginBottom: 18 }} />
                <div style={{
                  fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                  fontSize: 20, letterSpacing: "0.04em", color: "#0a1628", marginBottom: 12,
                }}>{p.label}</div>
                <p style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.75, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section style={{ background: "#0a1628", padding: "80px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
            fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#4fc3f7", marginBottom: 16,
          }}>What Makes This Different</div>
          <h2 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(30px, 4vw, 48px)", letterSpacing: "0.02em",
            color: "#f8faff", margin: "0 0 36px", lineHeight: 1.1,
          }}>This Is Not Coaching.<br />Not a Course. Not Career Advice.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { label: "Not coaching", body: "Coaching works on behaviour. This works on positioning. The question is not how you show up — it is where you stand relative to how AI is reshaping your function." },
              { label: "Not a course", body: "A course teaches a skill. This answers a question: given everything about your specific role, tasks, and trajectory — where are you actually exposed, and what should you do about it?" },
              { label: "Not generic career advice", body: "Generic advice says 'learn AI tools' or 'build your personal brand.' This work is specific. It is built on a methodology. The output is a report, a score, and a 90-day action plan — not a list of suggestions." },
            ].map((item) => (
              <div key={item.label} style={{
                borderLeft: "2px solid #1a4fd6", paddingLeft: 24,
              }}>
                <div style={{
                  fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                  fontSize: 17, letterSpacing: "0.04em", color: "#4fc3f7", marginBottom: 6,
                }}>{item.label}</div>
                <p style={{ fontSize: 14, color: "rgba(248,250,255,0.65)", lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#ffffff", padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "0.02em",
            color: "#0a1628", margin: "0 0 16px", lineHeight: 1,
          }}>Ready to Find Out<br />Where You Stand?</h2>
          <p style={{ fontSize: 16, color: "#5a6a8a", lineHeight: 1.75, margin: "0 0 36px" }}>
            Start with the free Risk Snapshot — 4 fields, delivered within 24 hours.
            No commitment, no sales call.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/get-started" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#1a4fd6", color: "#ffffff", textDecoration: "none",
              padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 15,
              border: "1px solid #3b6ef0",
            }}>
              Free Risk Snapshot →
            </Link>
            <Link href="/report" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", color: "#5a6a8a", textDecoration: "none",
              padding: "14px 28px", borderRadius: 8, fontWeight: 500, fontSize: 14,
              border: "1px solid rgba(10,22,40,0.15)",
            }}>
              View the Full Report
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
