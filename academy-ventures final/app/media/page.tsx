import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Media & Press | Academy Ventures",
  description:
    "Media and communications page for Academy Ventures announcements, positioning, and press inquiries.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        label="Media"
        title="Media &"
        titleAccent="Communications"
        description="A dedicated destination for future announcements, public statements, media inquiries, and institutional communications."
      />
      <section className="section-padding bg-navy-950">
        <div className="container-wide">
          <AnimatedSection className="data-panel p-10 md:p-14 max-w-4xl">
            <span className="label-tag">Press Center</span>
            <h2 className="font-display text-4xl text-silver-100 mb-6">
              Academy Ventures communications will appear here as the platform expands.
            </h2>
            <p className="text-silver-400 leading-relaxed mb-8">
              This page gives media, institutional partners, and public-sector stakeholders a
              clear route for announcements, official language, and communications inquiries.
            </p>
            <Link href="/contact#media" className="btn-primary">
              Media Inquiry
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
