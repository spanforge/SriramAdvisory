import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuidesCatalog from "@/components/GuidesCatalog";
import { GUIDES } from "@/lib/siteCatalog";
import { LIFETIME_UPDATES_BODY, LIFETIME_UPDATES_TITLE } from "@/lib/guideSalesContent";

export const metadata: Metadata = {
  title: "Guides | Sriram Advisory",
  description:
    "Role-specific AI career guides for professionals who want clear repositioning paths, honest risk framing, and buyer-ready next steps.",
};

const GUIDE_DELIVERY_NOTE = "Manual email delivery, usually within 30 minutes of payment.";
const BONUS_GUIDE_NOTE =
  "Every guide includes the Agentic AI Field Guide bonus at no extra cost.";

export default function GuidesPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #102346 60%, #1a4fd6 100%)",
          paddingTop: 96,
          paddingBottom: 72,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(59,110,240,0.18)",
              border: "1px solid rgba(59,110,240,0.45)",
              borderRadius: 20,
              padding: "6px 16px",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#3b6ef0",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#93b4ff",
              }}
            >
              All Role Guides
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Buyer-facing guides for AI-era career decisions
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(200,220,255,0.84)",
              lineHeight: 1.75,
              maxWidth: 680,
              margin: "0 auto 24px",
            }}
          >
            Every guide is visible here. Pick the role that matches your current market pressure, review the price, and go straight to checkout without navigating through extra collections.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 20px 80px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #f8fbff 0%, #eef4ff 100%)",
            border: "1px solid #c7d7ff",
            borderRadius: 24,
            padding: "28px 24px",
            marginBottom: 28,
            boxShadow: "0 20px 50px rgba(10, 22, 40, 0.06)",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#1a4fd6",
                display: "block",
                marginBottom: 10,
              }}
            >
              Public Commitment
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 900,
                color: "#0a1628",
                letterSpacing: "-0.03em",
                marginBottom: 12,
              }}
            >
              {LIFETIME_UPDATES_TITLE}
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#40526b",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {LIFETIME_UPDATES_BODY}
            </p>
          </div>
        </div>

        <GuidesCatalog
          guides={GUIDES}
          deliveryNote={GUIDE_DELIVERY_NOTE}
          bonusNote={BONUS_GUIDE_NOTE}
        />
      </section>

      <Footer />
    </div>
  );
}
