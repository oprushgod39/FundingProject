import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About | Academy Ventures",
  description:
    "Learn about Academy Ventures — a multi-sector strategic development organization building scalable systems for healthcare, workforce, and community advancement.",
};

const values = [
  {
    title: "Mission-Driven",
    description:
      "Every initiative is anchored in measurable impact for the communities and populations we serve.",
  },
  {
    title: "Operationally Excellent",
    description:
      "We bring institutional rigor, process discipline, and execution focus to complex challenges.",
  },
  {
    title: "Scalable by Design",
    description:
      "We build systems that can grow — not just programs that run, but infrastructure that expands.",
  },
  {
    title: "Community First",
    description:
      "Decisions are made with the long-term wellbeing of families and communities in mind.",
  },
];

const timeline = [
  {
    phase: "Foundation",
    title: "Establishing the Vision",
    description:
      "Academy Ventures was formed with a clear mandate: build scalable systems that improve quality of life, strengthen healthcare access, and support workforce readiness.",
  },
  {
    phase: "Expansion",
    title: "Building the Ecosystem",
    description:
      "The organization expanded its footprint across multiple states, developing integrated service networks and strategic partnerships with government and institutional partners.",
  },
  {
    phase: "Growth",
    title: "Scaling Healthcare Infrastructure",
    description:
      "Focus shifted to scaling adult day healthcare, senior care, and community health programs — building operational templates that could be replicated across geographies.",
  },
  {
    phase: "Innovation",
    title: "Technology Integration",
    description:
      "Academy Ventures invested in modernizing operations with analytics, AI-assisted workflows, and data-driven decision support across all service lines.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About the Organization"
        title="Integrated Infrastructure"
        titleAccent="for Better Communities"
        description="Academy Ventures is a multi-sector strategic development organization operating across healthcare, workforce development, senior care infrastructure, technology integration, and community-centered services."
      />

      {/* Mission Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <span className="label-tag">Our Mission</span>
              <div className="gold-divider" />
              <h2 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight mb-8">
                Building Systems That{" "}
                <span className="text-gold-500">Strengthen</span> Communities
              </h2>
              <p className="text-silver-400 leading-relaxed mb-6">
                Academy Ventures was formed with a vision to build scalable systems that improve
                quality of life, strengthen healthcare access, support workforce readiness, and
                create long-term community impact through sustainable operational models.
              </p>
              <p className="text-silver-400 leading-relaxed mb-6">
                We bring together operational leadership, healthcare expertise, strategic
                partnerships, and infrastructure development capabilities under one integrated
                platform — with operations and strategic initiatives spanning multiple states.
              </p>
              <p className="text-silver-400 leading-relaxed">
                Our approach is not to build programs in isolation, but to construct interconnected
                systems where each component strengthens the others — creating ecosystems of care
                and community support that are durable, scalable, and mission-aligned.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="grid grid-cols-1 gap-4">
                {values.map((value, i) => (
                  <div key={value.title} className="flex gap-5 p-6 border border-navy-600 hover:border-gold-500/40 transition-colors duration-300 group">
                    <span className="font-display text-3xl font-bold text-gold-500/30 group-hover:text-gold-500/60 transition-colors duration-300 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-silver-200 font-semibold mb-2 group-hover:text-gold-400 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-silver-500 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container-wide relative z-10">
          <AnimatedSection className="mb-16">
            <span className="label-tag">Our Story</span>
            <div className="gold-divider" />
            <h2 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight">
              A History of{" "}
              <span className="text-gold-500">Strategic Development</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500 via-gold-500/30 to-transparent" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.phase} delay={i * 150} className="pl-20 relative">
                  <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-navy-950 border-2 border-gold-500" />
                  <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em] block mb-2">
                    {item.phase}
                  </span>
                  <h3 className="text-silver-200 font-semibold text-xl mb-3">{item.title}</h3>
                  <p className="text-silver-400 leading-relaxed max-w-2xl">{item.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl text-silver-100 mb-6">
              Ready to Partner with{" "}
              <span className="text-gold-500">Academy Ventures?</span>
            </h2>
            <p className="text-silver-400 mb-8 max-w-xl mx-auto">
              Explore how our integrated approach to healthcare, workforce, and community
              infrastructure can support your organization&apos;s objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
              <Link href="/divisions" className="btn-outline">Explore Our Divisions</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
