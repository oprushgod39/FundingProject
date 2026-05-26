import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Workforce Development | Academy Ventures",
  description:
    "Academy Ventures supports the development of modern healthcare workforce pathways through strategic educational collaborations, training initiatives, and professional development systems.",
};

const pathways = [
  {
    title: "Healthcare Administration",
    description: "Comprehensive training in healthcare operations, billing, compliance, and administrative leadership.",
    duration: "6–12 months",
  },
  {
    title: "Medical Support Training",
    description: "Hands-on preparation for direct care roles including patient support, documentation, and clinical coordination.",
    duration: "3–6 months",
  },
  {
    title: "Healthcare Analytics",
    description: "Data literacy and analytics skills for healthcare professionals looking to drive operational and clinical improvement.",
    duration: "3–6 months",
  },
  {
    title: "Medical Technology Pathways",
    description: "Technical training in healthcare technology systems, EHR platforms, and digital health infrastructure.",
    duration: "4–8 months",
  },
  {
    title: "Community Healthcare Operations",
    description: "Specialized training for professionals delivering services in community-based care environments.",
    duration: "3–6 months",
  },
  {
    title: "Leadership & Operational Training",
    description: "Executive development programs for healthcare administrators and operational leaders.",
    duration: "Ongoing",
  },
];

export default function WorkforceDevelopmentPage() {
  return (
    <>
      <PageHero
        label="Workforce Development"
        title="Building the Future"
        titleAccent="Healthcare Workforce"
        description="Academy Ventures supports the development of modern workforce pathways through strategic educational collaborations, healthcare training initiatives, and professional development systems designed for the demands of tomorrow."
      />

      {/* Why workforce development */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <span className="label-tag">The Challenge</span>
              <div className="gold-divider" />
              <h2 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight mb-8">
                A Critical Shortage{" "}
                <span className="text-gold-500">Requires Bold Solutions</span>
              </h2>
              <p className="text-silver-400 leading-relaxed mb-6">
                The United States faces an unprecedented healthcare workforce shortage — a crisis
                that will only deepen as the population ages and demand for services grows. Traditional
                education systems cannot close this gap alone.
              </p>
              <p className="text-silver-400 leading-relaxed mb-6">
                Academy Ventures addresses this challenge through practical, accelerated training
                pathways that bring qualified healthcare professionals into the workforce faster —
                without sacrificing quality or competency.
              </p>
              <p className="text-silver-400 leading-relaxed">
                Our programs are designed in close collaboration with healthcare operators,
                employers, and government agencies — ensuring graduates are job-ready and
                aligned with real-world needs.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="space-y-6">
                {[
                  { stat: "Accelerated", label: "Training Timelines", desc: "Programs designed for rapid workforce entry" },
                  { stat: "Employer-Aligned", label: "Curriculum Design", desc: "Built with input from healthcare operators" },
                  { stat: "Community-Focused", label: "Graduate Placement", desc: "Emphasis on local and regional employment" },
                  { stat: "Ongoing", label: "Professional Development", desc: "Continuing education for career advancement" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-5 p-5 border border-navy-600 hover:border-gold-500/40 transition-colors duration-300 group">
                    <div className="text-left flex-shrink-0">
                      <div className="font-display text-xl font-bold text-gold-400 group-hover:text-gold-300 transition-colors duration-300">
                        {item.stat}
                      </div>
                      <div className="text-silver-500 text-xs uppercase tracking-wider">{item.label}</div>
                    </div>
                    <p className="text-silver-400 text-sm leading-relaxed self-center">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Training Pathways */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container-wide relative z-10">
          <AnimatedSection className="mb-16">
            <span className="label-tag">Training Programs</span>
            <div className="gold-divider" />
            <h2 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight">
              Workforce{" "}
              <span className="text-gold-500">Pathways</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathways.map((pathway, i) => (
              <AnimatedSection key={pathway.title} delay={i * 100}>
                <div className="group p-8 border border-navy-700 hover:border-gold-500/40 transition-all duration-300 h-full relative">
                  <div className="absolute top-0 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-700" />
                  <h3 className="text-silver-100 font-semibold text-lg mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {pathway.title}
                  </h3>
                  <p className="text-silver-400 text-sm leading-relaxed mb-4">{pathway.description}</p>
                  <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold">
                    Duration: {pathway.duration}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <span className="label-tag">Collaborative Approach</span>
            <div className="gold-divider mx-auto" />
            <h2 className="font-display text-4xl text-silver-100">
              We Partner With{" "}
              <span className="text-gold-500">Leading Institutions</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Educational Institutions", "Healthcare Operators", "Government Agencies", "Community Organizations"].map((type) => (
                <div key={type} className="p-6 border border-navy-600 text-center group hover:border-gold-500/40 transition-colors duration-300">
                  <span className="text-silver-400 text-sm text-center group-hover:text-silver-200 transition-colors duration-300">{type}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection className="text-center mt-12" delay={300}>
            <Link href="/contact" className="btn-primary">Explore Workforce Programs</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
