import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Investor Relations | Academy Ventures",
  description:
    "Academy Ventures investor relations overview covering healthcare infrastructure, workforce systems, public-sector collaboration, and strategic growth priorities.",
};

const thesis = [
  {
    title: "Healthcare Demand Is Structural",
    text: "Aging demographics, caregiver pressure, workforce shortages, and care-access gaps create long-term demand for coordinated community healthcare infrastructure.",
  },
  {
    title: "Fragmented Markets Need Operators",
    text: "Senior care, adult day healthcare, transportation, home-based services, workforce training, and community programs often operate separately. Academy Ventures is positioned around integration.",
  },
  {
    title: "Public-Private Models Are Expanding",
    text: "Government agencies, municipalities, health systems, and education partners increasingly need capable operators who can support scalable, compliant, community-based programs.",
  },
];

const verticals = [
  "Senior care infrastructure",
  "Adult day healthcare operations",
  "Home and community-based services",
  "Healthcare workforce development",
  "Medical transportation coordination",
  "Affordable senior housing support",
  "Healthcare technology integration",
  "Public-sector healthcare programs",
];

const priorities = [
  { label: "Expansion", value: "Multi-state healthcare and community infrastructure growth" },
  { label: "Partnerships", value: "Institutional, government, healthcare, education, and strategic partner alignment" },
  { label: "Systems", value: "Administrative, analytics, workforce, and care-coordination platforms" },
  { label: "Impact", value: "Senior access, workforce readiness, veterans support, and underserved community outcomes" },
];

export default function InvestorRelationsPage() {
  return (
    <>
      <PageHero
        label="Investor Relations"
        title="A Platform for"
        titleAccent="Strategic Growth"
        description="Academy Ventures is structured around healthcare infrastructure, workforce systems, government collaboration, technology-enabled operations, and scalable community impact."
      />

      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-25" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
            <AnimatedSection>
              <span className="label-tag">Growth Thesis</span>
              <div className="gold-divider" />
              <h2 className="section-heading mb-8">
                Healthcare infrastructure is becoming a{" "}
                <span className="text-gold-500">strategic operating category.</span>
              </h2>
              <p className="text-silver-400 leading-relaxed">
                Academy Ventures brings together operational models that sit at the
                intersection of healthcare access, workforce capacity, public-sector need,
                and community infrastructure.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-5">
              {thesis.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 90}>
                  <div className="data-panel p-7 group hover:border-gold-500/40 transition-colors duration-300">
                    <span className="text-gold-500/70 font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-silver-100 text-xl font-semibold mt-4 mb-3 group-hover:text-gold-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-silver-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900 relative overflow-hidden">
        <div
          className="absolute inset-y-0 right-0 w-1/2 opacity-25 cinematic-mask"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-wide relative z-10">
          <AnimatedSection className="mb-14 max-w-4xl">
            <span className="label-tag">Platform Verticals</span>
            <div className="gold-divider" />
            <h2 className="section-heading">
              Multiple growth channels under one{" "}
              <span className="text-gold-500">operating architecture.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {verticals.map((vertical, index) => (
              <AnimatedSection key={vertical} delay={index * 60}>
                <div className="data-panel p-6 min-h-40">
                  <span className="text-gold-500/60 font-mono text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-silver-100 font-semibold mt-5 leading-snug">
                    {vertical}
                  </h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-950">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="label-tag">Strategic Priorities</span>
              <div className="gold-divider" />
              <h2 className="section-heading mb-8">
                Built for durable expansion, not short-term noise.
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {priorities.map((item, index) => (
                <AnimatedSection key={item.label} delay={index * 80}>
                  <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 border border-navy-600 bg-navy-900/60 p-5">
                    <h3 className="text-gold-500 font-semibold text-sm uppercase tracking-[0.18em]">
                      {item.label}
                    </h3>
                    <p className="text-silver-400 text-sm leading-relaxed">{item.value}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection className="mt-16 data-panel p-10 md:p-14 text-center">
            <span className="label-tag">Investor Access</span>
            <h2 className="font-display text-4xl md:text-5xl text-silver-100 mb-6">
              Discuss strategic growth opportunities.
            </h2>
            <p className="text-silver-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Investors and strategic partners can request a conversation with Academy
              Ventures regarding platform growth, expansion priorities, and institutional
              partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact#investor" className="btn-primary">
                Investor Inquiry
              </Link>
              <Link href="/case-studies" className="btn-outline">
                View Case Studies
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
