import AnimatedSection from "./AnimatedSection";

const differentiators = [
  {
    label: "Integrated Delivery",
    title: "One platform. Multiple service lines.",
    description:
      "Unlike single-service vendors, Academy Ventures integrates healthcare operations, workforce development, and public-sector programs into cohesive, coordinated delivery — reducing friction and improving outcomes.",
  },
  {
    label: "Multi-State Reach",
    title: "Built for geographic scale.",
    description:
      "Operational templates, compliance frameworks, and infrastructure systems designed from day one to replicate across states and regions without sacrificing quality or consistency.",
  },
  {
    label: "Government Alignment",
    title: "Structured for public-sector engagement.",
    description:
      "Deep familiarity with Medicaid waiver structures, agency collaboration protocols, and public health program requirements — enabling efficient onboarding and durable institutional relationships.",
  },
  {
    label: "Technology-Enabled",
    title: "Data-driven at every level.",
    description:
      "Analytics dashboards, AI-assisted workflows, and real-time operational visibility support better decision-making across all service lines and partner engagements.",
  },
];

const standards = [
  "HIPAA-aligned operational practices",
  "Compliance-first administrative models",
  "Institutional-grade documentation",
  "Multi-stakeholder coordination protocols",
  "Scalable, replicable program delivery",
];

export default function InstitutionalBenchmarkSection() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 scanline-overlay opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="container-wide relative z-10">
        <AnimatedSection className="mb-14">
          <span className="label-tag">Platform Differentiators</span>
          <div className="gold-divider" />
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12">
            <h2 className="section-heading">
              Structured for{" "}
              <span className="text-gold-500">institutional-grade</span> engagement.
            </h2>
            <p className="section-subheading">
              Academy Ventures is designed for the demands of government agencies, healthcare
              systems, and investment partners — with the operational infrastructure,
              compliance orientation, and execution depth each relationship requires.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentiators.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 90}>
                <div className="data-panel p-6 h-full group hover:border-gold-500/40 transition-colors duration-300">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <span className="text-gold-500 text-xs uppercase tracking-[0.24em] font-semibold">
                      {item.label}
                    </span>
                    <span className="text-silver-500 font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-silver-100 text-lg font-semibold mb-4 group-hover:text-gold-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-silver-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="right" delay={180}>
            <div className="data-panel p-8 h-full">
              <span className="label-tag">Operational Standards</span>
              <h3 className="font-display text-3xl text-silver-100 leading-tight mb-6">
                Built to meet the bar that institutions require.
              </h3>
              <div className="space-y-3">
                {standards.map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-navy-700 pb-3">
                    <span className="h-1.5 w-1.5 bg-gold-500 flex-shrink-0" />
                    <span className="text-silver-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-silver-300 text-sm leading-relaxed mt-8 border-l border-gold-500/50 pl-5">
                Target impression: a scaled operator involved in healthcare infrastructure,
                government partnerships, workforce systems, and strategic community development.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
