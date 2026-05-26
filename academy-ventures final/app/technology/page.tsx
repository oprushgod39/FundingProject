import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Technology & Innovation | Academy Ventures",
  description:
    "Academy Ventures integrates operational technology, analytics, and AI-assisted workflows to modernize healthcare delivery and create scalable infrastructure.",
};

const capabilities = [
  {
    title: "Healthcare Analytics",
    description: "Advanced data analytics platforms that surface actionable insights from complex healthcare operational data.",
    features: ["Real-time reporting dashboards", "Predictive analytics", "Outcome measurement", "Resource optimization"],
  },
  {
    title: "Operational Dashboards",
    description: "Purpose-built command centers that give healthcare operators a clear, real-time view of all operational metrics.",
    features: ["Multi-facility visibility", "KPI tracking", "Alert systems", "Custom reporting"],
  },
  {
    title: "AI-Assisted Workflows",
    description: "Intelligent automation that reduces administrative burden, improves accuracy, and frees staff to focus on care.",
    features: ["Documentation automation", "Care coordination AI", "Scheduling optimization", "Compliance monitoring"],
  },
  {
    title: "Administrative Integration",
    description: "Seamless integration of billing, scheduling, compliance, and HR systems into unified operational platforms.",
    features: ["EHR connectivity", "Billing optimization", "Payroll integration", "Document management"],
  },
  {
    title: "Workforce Platforms",
    description: "Digital infrastructure for recruiting, onboarding, scheduling, and retaining healthcare professionals at scale.",
    features: ["Talent management", "Credentialing systems", "Shift management", "Performance tracking"],
  },
  {
    title: "Technology Modernization",
    description: "Strategic assessment and migration of legacy healthcare technology to modern, scalable cloud infrastructure.",
    features: ["Legacy system migration", "Cloud transformation", "Security hardening", "Performance optimization"],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        label="Technology & Innovation"
        title="Modern Infrastructure for"
        titleAccent="Modern Healthcare"
        description="Academy Ventures integrates operational technology, analytics, and modern systems infrastructure to improve healthcare coordination, efficiency, scalability, and reporting capabilities across all service lines."
      />

      {/* Philosophy */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <span className="label-tag">Our Approach</span>
              <div className="gold-divider" />
              <h2 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight mb-8">
                Technology as{" "}
                <span className="text-gold-500">Operational Infrastructure</span>,{" "}
                Not Just Tools
              </h2>
              <p className="text-silver-400 leading-relaxed mb-6">
                Most healthcare organizations treat technology as a collection of point solutions —
                a billing system here, a scheduling tool there. Academy Ventures takes a different
                approach: we build integrated technology ecosystems where every system communicates,
                every data point contributes to decision-making, and every workflow is optimized
                for real-world healthcare operations.
              </p>
              <p className="text-silver-400 leading-relaxed mb-8">
                The result is a technology environment where operators have visibility, staff have
                support, and patients receive more coordinated, higher-quality care.
              </p>
              <Link href="/contact" className="btn-primary">Technology Consultation</Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="border border-navy-600 p-8">
                <h3 className="text-silver-300 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                  Technology Stack Priorities
                </h3>
                {[
                  { label: "Integration", value: 95 },
                  { label: "Data Security", value: 100 },
                  { label: "Scalability", value: 90 },
                  { label: "Compliance", value: 100 },
                  { label: "User Experience", value: 85 },
                  { label: "Interoperability", value: 88 },
                ].map((item) => (
                  <div key={item.label} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-silver-400 text-sm">{item.label}</span>
                      <span className="text-gold-500 text-xs font-semibold">{item.value}%</span>
                    </div>
                    <div className="h-px bg-navy-600">
                      <div
                        className="h-full bg-gradient-to-r from-gold-500 to-gold-400"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container-wide relative z-10">
          <AnimatedSection className="mb-16">
            <span className="label-tag">Capabilities</span>
            <div className="gold-divider" />
            <h2 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight">
              Technology{" "}
              <span className="text-gold-500">Capabilities</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 100}>
                <div className="group p-8 border border-navy-700 hover:border-gold-500/40 transition-all duration-300 h-full relative">
                  <div className="absolute top-0 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-700" />
                  <h3 className="text-silver-100 font-semibold text-lg mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-silver-400 text-sm leading-relaxed mb-5">{cap.description}</p>
                  <div className="space-y-2">
                    {cap.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-gold-500/60 flex-shrink-0" />
                        <span className="text-silver-500 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl text-silver-100 mb-6">
              Ready to Modernize Your{" "}
              <span className="text-gold-500">Healthcare Operations?</span>
            </h2>
            <p className="text-silver-400 mb-8 max-w-xl mx-auto">
              Our technology team will assess your current infrastructure and design a
              modernization roadmap aligned with your operational and compliance objectives.
            </p>
            <Link href="/contact" className="btn-primary">Schedule a Technology Review</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
