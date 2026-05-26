import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const capabilityRows = [
  {
    domain: "Healthcare Infrastructure",
    capability: "Senior care, adult day healthcare, HCBS, transportation, pharmacy coordination",
    posture: "Enterprise healthcare systems",
  },
  {
    domain: "Public Sector Delivery",
    capability: "Agency collaboration, municipal programs, community health access, waiver-aligned operations",
    posture: "Government contractor readiness",
  },
  {
    domain: "Workforce Systems",
    capability: "Training pathways, healthcare education, mobilization, administrative readiness",
    posture: "Scalable labor infrastructure",
  },
  {
    domain: "Strategic Operations",
    capability: "Program design, implementation support, compliance-oriented systems, expansion planning",
    posture: "Institutional execution",
  },
];

export default function CapabilityStatement() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute inset-y-0 right-0 w-1/2 opacity-25 cinematic-mask">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>
      <div className="container-wide relative z-10">
        <AnimatedSection className="mb-14">
          <span className="label-tag">Capability Statement</span>
          <div className="gold-divider" />
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-end">
            <h2 className="section-heading">
              Institutional systems for{" "}
              <span className="text-gold-500">care, readiness,</span> and public impact.
            </h2>
            <p className="section-subheading">
              Academy Ventures operates as a scaled, multi-sector platform — precise,
              credible, and structured for complex engagements across healthcare,
              workforce, infrastructure, and government partnerships.
            </p>
          </div>
        </AnimatedSection>

        <div className="data-panel overflow-hidden">
          <div className="grid grid-cols-12 border-b border-navy-600 bg-navy-900/80 px-5 py-4 text-[10px] uppercase tracking-[0.24em] text-silver-500">
            <div className="col-span-4">Operating Domain</div>
            <div className="col-span-5 hidden md:block">Relevant Capability</div>
            <div className="col-span-8 md:col-span-3 text-right">Strategic Posture</div>
          </div>
          {capabilityRows.map((row, index) => (
            <AnimatedSection key={row.domain} delay={index * 80}>
              <div className="grid grid-cols-12 gap-4 border-b border-navy-700/80 px-5 py-6 last:border-b-0 hover:bg-navy-900/60 transition-colors duration-300">
                <div className="col-span-12 md:col-span-4">
                  <span className="text-gold-500/70 font-mono text-xs mr-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-silver-100 font-semibold">{row.domain}</span>
                </div>
                <div className="col-span-12 md:col-span-5 text-silver-400 text-sm leading-relaxed">
                  {row.capability}
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right text-silver-300 text-sm">
                  {row.posture}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 flex flex-col sm:flex-row gap-4" delay={250}>
          <Link href="/government-solutions" className="btn-primary">
            View Government Capabilities
          </Link>
          <Link href="/partnerships" className="btn-outline">
            Strategic Partnership Model
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
