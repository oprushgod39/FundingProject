import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  {
    title: "Integrated Operational Experience",
    description:
      "Deep understanding of healthcare operations, community systems, and scalable service models built through years of real-world implementation.",
  },
  {
    title: "Strategic Infrastructure Approach",
    description:
      "Focus on long-term sustainability, operational scalability, and measurable impact — not short-term engagements.",
  },
  {
    title: "Community-Centered Philosophy",
    description:
      "Programs designed around accessibility, dignity, and practical outcomes for the populations we serve.",
  },
  {
    title: "Cross-Sector Collaboration",
    description:
      "Experience working across healthcare, workforce, housing, education, and public sector initiatives simultaneously.",
  },
  {
    title: "Growth & Execution",
    description:
      "Operationally focused leadership with proven execution-driven expansion capabilities across multiple states.",
  },
  {
    title: "Technology-Enabled Operations",
    description:
      "Modern analytics, dashboards, and AI-assisted workflows that improve decision-making at every level.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40" />

      <div className="container-wide relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="label-tag">Why Partner With Us</span>
          <div className="gold-divider mx-auto" />
          <h2 className="section-heading mb-6">
            Why Organizations{" "}
            <span className="text-gold-500">Partner With</span> Academy Ventures
          </h2>
          <p className="section-subheading mx-auto text-center">
            We bring institutional-grade expertise, cross-sector experience, and a relentless
            focus on execution to every engagement.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 100}>
              <div className="group relative p-8 border border-navy-700 hover:border-gold-500/50 transition-all duration-500 h-full">
                <div className="absolute top-0 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-700" />
                <div className="mb-4">
                  <span className="font-display text-gold-500/30 text-4xl font-bold group-hover:text-gold-500/50 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-silver-100 font-semibold text-lg mb-4 group-hover:text-gold-400 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-silver-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center" delay={300}>
          <Link href="/partnerships" className="btn-primary">
            Explore Partnership Opportunities
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
