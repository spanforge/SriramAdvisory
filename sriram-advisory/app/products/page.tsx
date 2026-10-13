import type { Metadata } from "next";
import { PageShell, Section } from "@/components/AdvisoryUI";

export const metadata: Metadata = {
  title: "Products | Sriram Advisory",
  description: "Small tools for everyday work, built by Sriram Advisory. Try the free LinkedIn Text Formatter to write, format, preview and copy your next post.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <PageShell>
      <section className="sa-hero">
        <div className="sa-wrap sa-prose">
          <p className="sa-eyebrow">Products</p>
          <h1>Small tools. Useful every day.</h1>
          <p className="sa-lede">Good tools make the next step easier. Our products focus on everyday tasks, starting with a simpler way to prepare your next LinkedIn post.</p>
        </div>
      </section>
      <Section eyebrow="Free to use" title="Give your next LinkedIn post a little more clarity." intro="A useful idea deserves a clear presentation. Write your draft, bring attention to the words that matter, and see how it reads before you share it.">
        <article className="sa-card sa-prose">
          <p className="sa-card-meta">Free product · By Sriram Advisory</p>
          <h3>LinkedIn Text Formatter</h3>
          <p>Turn your ideas into clear, ready-to-share LinkedIn posts with LinkedIn Text Formatter. This free tool from Sriram Advisory lets you write, add emphasis with Unicode text formatting, preview your post, and copy it to LinkedIn. Drafts stay private on your device, and offline editing lets you keep writing when you are away from a connection.</p>
          <a className="sa-btn sa-btn-primary" href="https://ltf.sriramadvisory.com/" target="_blank" rel="noopener noreferrer" aria-label="Try LinkedIn Text Formatter — opens in a new tab or window">Try LinkedIn Text Formatter <span aria-hidden="true">&rarr;</span></a>
        </article>
      </Section>
    </PageShell>
  );
}
