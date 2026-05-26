import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Careers | Academy Ventures",
  description:
    "Career and workforce interest pathways for Academy Ventures healthcare, operations, technology, and community infrastructure initiatives.",
};

const pathways = [
  "Healthcare administration",
  "Senior care operations",
  "Community health outreach",
  "Transportation coordination",
  "Workforce training",
  "Technology and analytics",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Build Systems That"
        titleAccent="Serve Communities"
        description="Academy Ventures supports workforce pathways across healthcare operations, administration, community support, technology, and public-sector aligned services."
      />
      <section className="section-padding bg-navy-950">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <AnimatedSection>
              <span className="label-tag">Talent Pathways</span>
              <div className="gold-divider" />
              <h2 className="section-heading mb-6">
                Workforce readiness is part of the platform.
              </h2>
              <p className="text-silver-400 leading-relaxed mb-8">
                This page creates a credible destination for future hiring, training,
                education partnerships, and workforce interest forms.
              </p>
              <Link href="/contact#workforce" className="btn-primary">
                Workforce Inquiry
              </Link>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pathways.map((path, index) => (
                <AnimatedSection key={path} delay={index * 80}>
                  <div className="data-panel p-6">
                    <span className="text-gold-500/60 font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-silver-100 font-semibold mt-5">{path}</h3>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
