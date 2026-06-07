import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Free Resources | Sriram Advisory",
  description:
    "A single place for Sriram Advisory free resources, downloads, and public career material.",
};

const FREE_RESOURCES = [
  {
    badge: "Free Guide",
    title: "Reel Lessons Part 1",
    subtitle: "Short lessons and reflections collected into a free downloadable guide.",
    blurb:
      "A compact collection of practical reel lessons, reflections, and sharp career observations designed to give readers quick clarity, stronger perspective, and useful takeaways without the fluff.",
    price: "Free",
    href: "/free/reel-lessons-part1-v6-release",
    accentColor: "#0f766e",
    bgGradient: "linear-gradient(135deg, #f3fffb 0%, #dcfce7 100%)",
    borderColor: "#86efac",
    bullets: [
      "Short, direct lessons you can consume quickly",
      "Built to be useful, practical, and easy to revisit",
      "A strong first entry in the free Sriram Advisory library",
    ],
  },
];

export default function FreePage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />

      <section
        style={{
          background: "linear-gradient(135deg, #07111d 0%, #0f3d38 55%, #0f766e 100%)",
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
              background: "rgba(16,185,129,0.15)",
              border: "1px solid rgba(110,231,183,0.36)",
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
                background: "#34d399",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#a7f3d0",
              }}
            >
              Free Library
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
            Free resources will live here
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(209,250,229,0.86)",
              lineHeight: 1.75,
              maxWidth: 640,
              margin: "0 auto 24px",
            }}
          >
            This is the place where Sriram Advisory free stuff will be listed over time. Public downloads, lightweight guides, and free career resources will all be collected here in one place.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {[
              "Free downloads only",
              "Built to grow into a public resource shelf",
              "Easy path into future lead capture",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 999,
                  color: "#ecfdf5",
                  padding: "10px 14px",
                  fontSize: 13,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 980, margin: "0 auto", padding: "64px 20px 80px" }}>
        <div
          style={{
            background: "#f8fafc",
            border: "1px solid #d9e2ec",
            borderRadius: 18,
            padding: "24px 22px",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#0f766e",
              marginBottom: 10,
            }}
          >
            About This Section
          </div>
          <p style={{ margin: 0, fontSize: 15, color: "#425472", lineHeight: 1.8 }}>
            Right now this section starts with one free guide. Over time, this page can hold more public PDFs, reel lesson collections, short reference guides, and other no-cost resources.
          </p>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #0a1628 0%, #102346 55%, #0f766e 100%)",
            border: "1px solid rgba(15,118,110,0.28)",
            borderRadius: 24,
            padding: "32px 24px",
            marginBottom: 32,
            boxShadow: "0 24px 60px rgba(10, 22, 40, 0.12)",
          }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#a7f3d0",
                marginBottom: 10,
              }}
            >
              Support The Mission
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              If this free work helps you, support Sriram Advisory so Sriram can keep making more
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(220,252,231,0.86)",
                lineHeight: 1.8,
                margin: "0 auto 16px",
                maxWidth: 700,
              }}
            >
              Free resources take real time, thought, and care to create. When you buy a report, a guide, or a service, you are not just buying something for yourself. You are helping Sriram keep publishing honest, useful, India-first career intelligence that more people can access for free.
            </p>
            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.74)",
                lineHeight: 1.8,
                margin: "0 auto 26px",
                maxWidth: 680,
              }}
            >
              If you want this free library to grow into something genuinely valuable, the best way to support it is by backing the paid work that funds the research, writing, and time behind it.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 12,
              }}
            >
              {[
                { label: "Buy Reports", href: "/reports", background: "#1a4fd6" },
                { label: "Buy Guides", href: "/guides", background: "#0f766e" },
                { label: "Explore Services", href: "/services", background: "#b45309" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    background: item.background,
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: 800,
                    padding: "12px 18px",
                    borderRadius: 10,
                    minWidth: 170,
                  }}
                >
                  {item.label} {"->"}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {FREE_RESOURCES.map((resource) => (
            <Link key={resource.href} href={resource.href} style={{ textDecoration: "none" }}>
              <div
                className="guide-card guide-card-body"
                style={{
                  background: resource.bgGradient,
                  border: `1.5px solid ${resource.borderColor}`,
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
                        background: resource.accentColor,
                        color: "#ffffff",
                        padding: "3px 10px",
                        borderRadius: 20,
                      }}
                    >
                      {resource.badge}
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
                    {resource.title} {"->"}
                  </h2>
                  <p style={{ fontSize: 14, fontWeight: 700, color: resource.accentColor, marginBottom: 12 }}>
                    {resource.subtitle}
                  </p>
                  <p style={{ fontSize: 15, color: "#3d4f6e", lineHeight: 1.7, marginBottom: 14 }}>
                    {resource.blurb}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {resource.bullets.map((bullet) => (
                      <div key={bullet} style={{ fontSize: 13, color: "#4b5d7b", lineHeight: 1.6 }}>
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="guide-card-price-col">
                  <div style={{ fontSize: 28, fontWeight: 800, color: resource.accentColor }}>{resource.price}</div>
                  <div
                    style={{
                      marginTop: 16,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: resource.accentColor,
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 700,
                      padding: "10px 20px",
                      borderRadius: 8,
                      letterSpacing: "0.01em",
                    }}
                  >
                    View guide {"->"}
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
