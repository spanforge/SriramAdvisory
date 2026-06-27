"use client";

import { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojzewly";

type NewsletterSignupProps = {
  compact?: boolean;
};

export default function NewsletterSignup({ compact = false }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const formData = new FormData();
      formData.set("email", email);
      formData.set("interest", "Weekly workforce intelligence newsletter");
      formData.set("_subject", "Workforce intelligence newsletter signup");
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Subscription failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p style={{ margin: 0, fontSize: 14, color: compact ? "#d1fae5" : "#0f766e", fontWeight: 700 }}>You are on the list.</p>;
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 10, flexWrap: "wrap", width: "100%" }}>
      <label style={{ flex: "1 1 220px" }}>
        <span className="sr-only">Email address</span>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          style={{ width: "100%", boxSizing: "border-box", border: "1px solid rgba(255,255,255,0.26)", borderRadius: 8, padding: "13px 14px", fontSize: 15, color: "#0a1628", background: "#ffffff" }}
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        style={{ minHeight: 48, padding: "0 18px", border: "none", borderRadius: 8, background: compact ? "#ffffff" : "#1a4fd6", color: compact ? "#0a1628" : "#ffffff", fontSize: 14, fontWeight: 800, cursor: status === "submitting" ? "wait" : "pointer" }}
      >
        {status === "submitting" ? "Joining..." : compact ? "Download Free Book" : "Subscribe"}
      </button>
      {status === "error" && <p style={{ width: "100%", margin: 0, fontSize: 13, color: compact ? "#fecaca" : "#b91c1c" }}>Could not subscribe. Please try again.</p>}
    </form>
  );
}
