import type { Metadata } from "next";
import { PageShell, Section } from "@/components/AdvisoryUI";

export const metadata: Metadata = {
  title: "Products | Sriram Advisory",
  description: "Explore products by Sriram Advisory, starting with the free LinkedIn Text Formatter to write, format, preview and copy your LinkedIn posts.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <PageShell>
      <section className="sa-hero">
        <div className="sa-wrap sa-prose">
          <p className="sa-eyebrow">Products</p>
          <h1>Practical tools by Sriram Advisory</h1>
          <p className="sa-lede">Explore tools built to make everyday work easier. Start with our first free product below.</p>
        </div>
      </section>
      <Section title="Free products">
        <article className="sa-card sa-prose">
          <p className="sa-card-meta">Free</p>
          <h3>LinkedIn Text Formatter</h3>
          <p>Turn your ideas into clear, ready-to-share LinkedIn posts with LinkedIn Text Formatter. This free tool from Sriram Advisory lets you write, add emphasis with Unicode text formatting, preview your post, and copy it to LinkedIn. Drafts stay private on your device, and offline editing lets you keep writing when you are away from a connection.</p>
          <a className="sa-btn sa-btn-primary" href="https://ltf.sriramadvisory.com/">Open LinkedIn Text Formatter <span aria-hidden="true">&rarr;</span></a>
        </article>
      </Section>
    </PageShell>
  );
}
