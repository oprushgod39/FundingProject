import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Government Solutions | Academy Ventures",
  description:
    "Academy Ventures works alongside public agencies, municipalities, and healthcare systems to deliver scalable healthcare and workforce solutions.",
};

const programs = [
  {
    title: "Senior Healthcare Accessibility",
    description: "Expanding access to senior healthcare services through community-based programs aligned with Medicaid waiver requirements and public health standards.",
  },
  {
    title: "Medicaid Waiver Programs",
    description: "Developing and operating programs that align with Medicaid waiver structures, enabling cost-effective, community-based care alternatives to institutional settings.",
  },
  {
    title: "Workforce Readiness Initiatives",
    description: "Building healthcare workforce pipelines in collaboration with state and local governments to address critical shortages in high-need communities.",
  },
  {
    title: "Public Health Infrastructure",
    description: "Supporting municipalities with the operational infrastructure needed to deliver scalable public health programs to their communities.",
  },
  {
    title: "Veterans Support Systems",
    description: "Specialized programs and operational frameworks designed to improve healthcare access and community support for veterans and their families.",
  },
  {
    title: "Community Transportation",
    description: "Coordinating non-emergency medical transportation systems that connect vulnerable populations to essential healthcare services.",
  },
];

export default function GovernmentSolutionsPage() {
  return (
    <>
      <PageHero
        label="Public Sector"
        title="Government &"
        titleAccent="Institutional Solutions"
        description="Academy Ventures actively works alongside public agencies, municipalities, healthcare systems, educational institutions, and community organizations to support scalable healthcare and workforce solutions."
      />

      {/* Why partner with us */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <span className="label-tag">Our Approach</span>
              <div className="gold-divider" />
              <h2 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight mb-8">
                Institutional-Grade{" "}
                <span className="text-gold-500">Expertise</span> for the Public Sector
              </h2>
              <p className="text-silver-400 leading-relaxed mb-6">
                Public sector partners require more than vendors — they need strategic collaborators
                who understand compliance requirements, community dynamics, and the complexity of
                operating within government frameworks.
              </p>
              <p className="text-silver-400 leading-relaxed mb-8">
                Academy Ventures brings deep operational experience across government-adjacent
                programs, including Medicaid waiver services, public health outreach, and
                community-based care coordination — with the infrastructure to scale.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { value: "Multi-State", label: "Operational Reach" },
                  { value: "Compliance-First", label: "Operational Model" },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-gold-500 pl-4">
                    <div className="font-display text-2xl font-bold text-gold-400 mb-1">{item.value}</div>
                    <div className="text-silver-500 text-xs uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/contact#government" className="btn-primary">
                Government Relations Inquiry
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="space-y-1">
                {[
                  "Multi-state operational coordination",
                  "Healthcare systems management",
                  "Program implementation support",
                  "Workforce mobilization",
                  "Community engagement strategies",
                  "Operational scaling",
                  "Administrative infrastructure",
                  "Compliance-oriented operational models",
                ].map((cap, i) => (
                  <div key={cap} className="flex items-center gap-4 p-4 border-b border-navy-700 hover:bg-navy-800/50 transition-colors duration-200 group">
                    <span className="text-gold-500/50 text-sm font-mono group-hover:text-gold-500 transition-colors duration-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-silver-300 text-sm">{cap}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container-wide relative z-10">
          <AnimatedSection className="mb-16">
            <span className="label-tag">Program Areas</span>
            <div className="gold-divider" />
            <h2 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight">
              Key Areas of{" "}
              <span className="text-gold-500">Focus</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, i) => (
              <AnimatedSection key={program.title} delay={i * 100}>
                <div className="group p-8 border border-navy-700 hover:border-gold-500/40 transition-all duration-300 h-full relative">
                  <div className="absolute top-0 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-700" />
                  <h3 className="text-silver-100 font-semibold text-lg mb-4 group-hover:text-gold-400 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-silver-400 text-sm leading-relaxed">{program.description}</p>
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
              Ready to Explore a{" "}
              <span className="text-gold-500">Government Partnership?</span>
            </h2>
            <p className="text-silver-400 mb-8 max-w-xl mx-auto">
              Contact our government relations team to discuss how Academy Ventures can
              support your public health and community objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
              <Link href="/partnerships" className="btn-outline">Partnership Overview</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
