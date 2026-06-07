import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreeGuideLeadForm from "@/components/FreeGuideLeadForm";

export const metadata: Metadata = {
  title: "Reel Lessons Part 1 | Free Guide | Sriram Advisory",
  description:
    "Free Sriram Advisory guide landing page for Reel Lessons Part 1, with frontend lead capture for name, email, and optional phone.",
};

const THEME = {
  accent: "#0f766e",
  accentSoft: "#a7f3d0",
  accentStrong: "#065f46",
  heroGradient: "linear-gradient(135deg, #061412 0%, #0b2d29 52%, #0f766e 100%)",
  heroText: "rgba(209,250,229,0.86)",
  sectionTint: "#ecfdf5",
  sectionBorder: "#86efac",
  panelTint: "#f7fffb",
  finalGradient: "linear-gradient(160deg, #061412 0%, #0b2d29 60%, #065f46 100%)",
};

export default function ReelLessonsPart1Page() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background: THEME.heroGradient,
          paddingTop: 100,
          paddingBottom: 90,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px", position: "relative" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginBottom: 28,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(16,185,129,0.18)",
                border: "1px solid rgba(110,231,183,0.42)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: THEME.accentSoft,
              }}
            >
              Free Download
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: THEME.accentSoft,
              }}
            >
              Reel Lessons Collection
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(34px, 5.5vw, 66px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.08,
              marginBottom: 22,
              letterSpacing: "-0.03em",
            }}
          >
            Reel Lessons Part 1
            <br />
            <span style={{ color: THEME.accentSoft }}>Free Release Guide</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 2.2vw, 21px)",
              color: THEME.heroText,
              lineHeight: 1.65,
              maxWidth: 740,
              margin: "0 auto 16px",
            }}
          >
            A free landing page for the Reel Lessons Part 1 release. This is designed as a lightweight public resource with a simple lead-capture flow instead of paid checkout.
          </p>

          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.65)",
              fontStyle: "italic",
              marginBottom: 28,
            }}
          >
            This is where readers can discover the guide, understand what it is, and leave their details to receive access once the form integration is connected.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
              marginBottom: 36,
            }}
          >
            {[
              "Free guide access flow",
              "Name and email required",
              "Phone field optional",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 999,
                  padding: "10px 16px",
                  fontSize: 13,
                  color: "#f8fbff",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            className="hero-price-box"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 20,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                }}
              >
                Free
              </span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: THEME.accentSoft,
                marginBottom: 16,
                display: "block",
              }}
            >
              Lead capture flow ready for Formspree
            </span>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.6,
                margin: "0 0 14px",
              }}
            >
              This page intentionally uses a form instead of payment, so you can collect details before sharing the guide.
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.6,
                margin: "0 0 20px",
              }}
            >
              Once you wire Formspree, this same UI can become the live delivery entry point for the document.
            </p>

            <FreeGuideLeadForm
              guideTitle="Reel Lessons Part 1"
              accentColor={THEME.accent}
              buttonLabel="Get this free guide ->"
            />
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "28px 20px 24px" }}>
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {[
            "A dedicated free-resource page that matches the rest of the site design language.",
            "A simple lead form with name, email, and optional phone so the experience is ready for later integration.",
            "A clean way to separate free resources from paid guides and services in the main navigation.",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#f8fafc",
                border: "1px solid #d9e2ec",
                borderRadius: 14,
                padding: "18px 18px",
                fontSize: 14,
                color: "#304159",
                lineHeight: 1.6,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: THEME.sectionTint, padding: "72px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 46 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: THEME.accent,
                display: "block",
                marginBottom: 12,
              }}
            >
              What This Page Does
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 800,
                color: "#0a1628",
                letterSpacing: "-0.02em",
              }}
            >
              A proper landing page for a free guide
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                title: "Sets expectations clearly",
                desc: "Readers immediately understand this is a free resource and that details are being collected through a simple access form.",
              },
              {
                title: "Matches existing site patterns",
                desc: "The page borrows the same premium landing-page structure used elsewhere, so it feels native to the rest of the website.",
              },
              {
                title: "Stays easy to evolve",
                desc: "You can later connect Formspree, change copy, or add direct delivery logic without redesigning the page.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#ffffff",
                  border: `1px solid ${THEME.sectionBorder}`,
                  borderRadius: 16,
                  padding: "24px 24px",
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: THEME.accent,
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.7 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 46 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: THEME.accentStrong,
                display: "block",
                marginBottom: 12,
              }}
            >
              Reader Journey
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 800,
                color: "#0a1628",
                letterSpacing: "-0.02em",
              }}
            >
              From discovery to access request
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {[
              {
                title: "1. Discover the guide",
                bullets: [
                  "Find it from the new Free menu",
                  "See it listed on the free resources landing page",
                  "Understand quickly that it is not part of paid checkout",
                ],
              },
              {
                title: "2. Open the form",
                bullets: [
                  "Click the main call-to-action button",
                  "Reveal the free-access form inline",
                  "Enter name, email, and optional phone",
                ],
              },
              {
                title: "3. Prepare for handoff",
                bullets: [
                  "Keep the visual flow production-ready",
                  "Swap the submit handler to Formspree later",
                  "Use the same page as the long-term free download entry point",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: THEME.panelTint,
                  border: "1px solid #d9e2ec",
                  borderRadius: 16,
                  padding: "22px 22px",
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#0a1628",
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {item.bullets.map((bullet) => (
                    <div key={bullet} style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.6 }}>
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "120px 24px",
          background: THEME.finalGradient,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              color: "#f8faff",
              marginBottom: 16,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Keep this ready for live free distribution
          </h2>
          <p style={{ fontSize: 17, color: "rgba(240,250,255,0.78)", lineHeight: 1.7, marginBottom: 32 }}>
            The page is already structured for a clean free-resource flow. Once Formspree is connected, the existing interface can start collecting real submissions without another redesign pass.
          </p>
          <div style={{ maxWidth: 420, margin: "0 auto" }}>
            <FreeGuideLeadForm
              guideTitle="Reel Lessons Part 1"
              accentColor={THEME.accent}
              buttonLabel="Open free access form ->"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
