import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Community Impact | Academy Ventures",
  description:
    "Academy Ventures believes healthcare infrastructure and community wellness are critical components of long-term national resilience.",
};

const initiatives = [
  {
    category: "Veterans Support",
    title: "Veterans Wellness & Accessibility",
    description:
      "Comprehensive programs designed to improve healthcare access, mental wellness support, and community integration for veterans and their families.",
    items: ["Healthcare navigation", "Benefits coordination", "Community integration", "Family support systems"],
  },
  {
    category: "Senior Services",
    title: "Aging Population Support Systems",
    description:
      "Integrated systems that allow seniors to age with dignity, maintain independence, and remain connected to their communities through coordinated care.",
    items: ["Adult day programs", "Home-based care", "Social engagement", "Transportation coordination"],
  },
  {
    category: "Underserved Communities",
    title: "Healthcare Access for All",
    description:
      "Targeted programs that address healthcare access disparities in rural areas, low-income communities, and historically underserved populations.",
    items: ["Mobile outreach", "Community health workers", "Language access services", "Sliding-scale programs"],
  },
  {
    category: "Workforce Communities",
    title: "Healthcare Workforce Development",
    description:
      "Building community pathways into healthcare careers, creating economic mobility while addressing critical workforce shortages simultaneously.",
    items: ["Training pathways", "Career placement", "Mentorship programs", "Continuing education"],
  },
];

export default function CommunityImpactPage() {
  return (
    <>
      <PageHero
        label="Community Impact"
        title="Supporting Communities"
        titleAccent="With Purpose"
        description="Academy Ventures believes healthcare infrastructure and community wellness are critical components of long-term national resilience. We build systems that support the people who need it most."
      />

      {/* Mission statement */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <span className="label-tag">Our Commitment</span>
              <div className="gold-divider" />
              <h2 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight mb-8">
                Systems Built for{" "}
                <span className="text-gold-500">People</span>,{" "}
                Not Just Processes
              </h2>
              <p className="text-silver-400 leading-relaxed mb-6">
                Community impact isn&apos;t a program or a department at Academy Ventures —
                it&apos;s the lens through which we evaluate every decision. We build with the
                end user in mind: the senior who needs transportation to their medical appointment,
                the veteran navigating a complex benefits system, the family seeking care for an
                aging parent.
              </p>
              <p className="text-silver-400 leading-relaxed mb-8">
                Real impact requires sustainable systems — not one-time interventions. Our
                community development work creates the infrastructure that communities can
                rely on for decades.
              </p>
              <Link href="/contact" className="btn-primary">Partner on Community Programs</Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="space-y-4">
                {[
                  "Veterans wellness and accessibility",
                  "Aging population support systems",
                  "Community healthcare access",
                  "Workforce shortages in healthcare",
                  "Rural and underserved communities",
                  "Integrated support ecosystems",
                  "Community partnerships",
                  "Long-term social impact models",
                ].map((item, i) => (
                  <div key={item} className="flex items-center gap-4 p-4 border-b border-navy-700 group hover:bg-navy-800/30 transition-colors duration-200">
                    <span className="w-6 h-6 rounded-full border border-gold-500/40 flex items-center justify-center text-gold-500 text-xs font-mono flex-shrink-0 group-hover:bg-gold-500/10 transition-colors duration-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-silver-400 text-sm group-hover:text-silver-200 transition-colors duration-200">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section id="veterans" className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container-wide relative z-10">
          <AnimatedSection className="mb-16">
            <span className="label-tag">Focus Areas</span>
            <div className="gold-divider" />
            <h2 className="font-display text-4xl md:text-5xl text-silver-100 leading-tight">
              Community{" "}
              <span className="text-gold-500">Initiatives</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, i) => (
              <AnimatedSection key={initiative.title} delay={i * 150}>
                <div className="group p-8 border border-navy-700 hover:border-gold-500/40 transition-all duration-300 h-full relative">
                  <div className="absolute top-0 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-700" />
                  <span className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em] block mb-3">
                    {initiative.category}
                  </span>
                  <h3 className="text-silver-100 font-semibold text-xl mb-4 group-hover:text-gold-400 transition-colors duration-300">
                    {initiative.title}
                  </h3>
                  <p className="text-silver-400 text-sm leading-relaxed mb-6">
                    {initiative.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {initiative.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-gold-500/60 flex-shrink-0" />
                        <span className="text-silver-500 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl text-silver-100 mb-16">
              The{" "}
              <span className="text-gold-500">Difference</span> We Make
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { value: "10,000+", label: "Lives Directly Impacted" },
                { value: "15+", label: "States Reached" },
                { value: "50+", label: "Community Partners" },
                { value: "Multiple", label: "Program Types" },
              ].map((item) => (
                <div key={item.label} className="p-6 border border-navy-700">
                  <div className="font-display text-4xl font-bold text-gold-400 mb-2">{item.value}</div>
                  <div className="text-silver-400 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <Link href="/contact" className="btn-primary">Get Involved</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
