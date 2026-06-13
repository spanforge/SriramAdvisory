import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES } from "@/lib/siteCatalog";

export const metadata: Metadata = {
  title: "Services | Sriram Advisory",
  description:
    "Structured advisory services for professionals who want diagnostic clarity, better market signal, and sharper positioning.",
};

export default function ServicesPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #40210d 58%, #b45309 100%)",
          paddingTop: 96,
          paddingBottom: 72,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(245,158,11,0.16)",
              border: "1px solid rgba(251,191,36,0.38)",
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
                background: "#f59e0b",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fde68a",
              }}
            >
              Advisory Services
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
            Services for professionals who need sharper market signal
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255,239,213,0.86)",
              lineHeight: 1.75,
              maxWidth: 620,
              margin: "0 auto 24px",
            }}
          >
            Practical, structured reviews for buyers who want clarity on role risk, positioning gaps, and what to fix next.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 980, margin: "0 auto", padding: "64px 20px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {SERVICES.map((service) => (
            <Link key={service.href} href={service.href} style={{ textDecoration: "none" }}>
              <div
                className="guide-card guide-card-body"
                style={{
                  background: service.bgGradient,
                  border: `1.5px solid ${service.borderColor}`,
                  borderRadius: 18,
                  cursor: "pointer",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        background: service.accentColor,
                        color: "#ffffff",
                        padding: "3px 10px",
                        borderRadius: 20,
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 26px)",
                      fontWeight: 800,
                      color: "#0a1628",
                      marginBottom: 6,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {service.title} {"->"}
                  </h2>
                  <p style={{ fontSize: 14, fontWeight: 700, color: service.accentColor, marginBottom: 12 }}>
                    {service.subtitle}
                  </p>
                  <p style={{ fontSize: 15, color: "#3d4f6e", lineHeight: 1.7, marginBottom: 14 }}>
                    {service.blurb}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {service.bullets.map((bullet) => (
                      <div key={bullet} style={{ fontSize: 13, color: "#4b5d7b", lineHeight: 1.6 }}>
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="guide-card-price-col">
                  <div style={{ fontSize: 28, fontWeight: 800, color: service.accentColor }}>{service.price}</div>
                  <div
                    style={{
                      marginTop: 16,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: service.accentColor,
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 700,
                      padding: "10px 20px",
                      borderRadius: 8,
                      letterSpacing: "0.01em",
                    }}
                  >
                    View service {"->"}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
