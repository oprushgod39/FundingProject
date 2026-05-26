import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const focusAreas = [
  "Senior healthcare accessibility",
  "Medicaid waiver aligned programs",
  "Community-based healthcare systems",
  "Workforce readiness initiatives",
  "Affordable senior housing support",
  "Veterans and vulnerable population support",
  "Healthcare infrastructure expansion",
  "Public health outreach initiatives",
  "Community transportation coordination",
  "Strategic operational consulting",
];

const capabilities = [
  { title: "Multi-State Coordination", desc: "Coordinated operational infrastructure across multiple jurisdictions" },
  { title: "Healthcare Systems Management", desc: "End-to-end management of complex healthcare delivery systems" },
  { title: "Program Implementation", desc: "Structured rollout of community and institutional programs" },
  { title: "Workforce Mobilization", desc: "Rapid deployment of trained healthcare professionals" },
  { title: "Compliance-Oriented Models", desc: "Operations built around regulatory requirements and standards" },
  { title: "Administrative Infrastructure", desc: "Scalable back-office systems for public sector partners" },
];

export default function GovernmentSection() {
  return (
    <section id="government" className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-600/50 to-transparent" />

      {/* Accent block */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-navy-800/50 to-transparent pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <AnimatedSection direction="left">
            <span className="label-tag">Public Sector</span>
            <div className="gold-divider" />
            <h2 className="section-heading mb-8">
              Government &{" "}
              <span className="text-gold-500">Institutional</span>{" "}
              Collaboration
            </h2>
            <p className="text-silver-400 text-base leading-relaxed mb-8">
              Academy Ventures actively works alongside public agencies, municipalities,
              healthcare systems, educational institutions, and community organizations
              to support scalable healthcare and workforce solutions with the discipline
              expected of federal consulting and infrastructure delivery partners.
            </p>

            <h3 className="text-silver-300 text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Areas of Focus
            </h3>
            <div className="grid grid-cols-1 gap-2 mb-10">
              {focusAreas.map((area) => (
                <div key={area} className="flex items-center gap-3 py-2 border-b border-navy-700">
                  <span className="w-1.5 h-1.5 bg-gold-500 flex-shrink-0" />
                  <span className="text-silver-400 text-sm">{area}</span>
                </div>
              ))}
            </div>

            <Link href="/government-solutions" className="btn-primary">
              Government Relations
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <h3 className="text-silver-200 text-sm font-semibold uppercase tracking-[0.2em] mb-8 mt-16 lg:mt-0">
              Institutional Capabilities
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 border border-gold-500/30 bg-navy-950/70 mb-2">
                <span className="text-gold-500 text-[10px] font-semibold uppercase tracking-[0.25em] block mb-3">
                  Public Sector Posture
                </span>
                <p className="text-silver-300 text-sm leading-relaxed">
                  Capability-led, compliance-oriented, and structured for agency,
                  municipal, institutional, and healthcare system collaboration.
                </p>
              </div>
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className="flex gap-4 p-5 border border-navy-600 hover:border-gold-500/40 transition-colors duration-300 group"
                >
                  <span className="font-display text-gold-500/40 text-2xl font-bold flex-shrink-0 group-hover:text-gold-500/60 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-silver-200 font-semibold text-sm mb-1 group-hover:text-gold-400 transition-colors duration-300">
                      {cap.title}
                    </h4>
                    <p className="text-silver-500 text-xs leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
