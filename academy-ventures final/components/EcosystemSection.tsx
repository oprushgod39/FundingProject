import AnimatedSection from "./AnimatedSection";

const services = [
  "Adult Day Healthcare Programs",
  "Home & Community Based Services",
  "Senior Wellness Initiatives",
  "Pharmacy & Medication Coordination",
  "Transportation & Mobility Support",
  "Rehabilitation Coordination",
  "Workforce Training & Education",
  "Community Health Outreach",
  "Affordable Senior Housing Support",
  "Care Navigation & Case Coordination",
  "Healthcare Administrative Services",
  "Strategic Healthcare Consulting",
];

export default function EcosystemSection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[200px] font-bold text-navy-800/30 whitespace-nowrap pointer-events-none select-none">
        ECOSYSTEM
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Service Grid */}
          <AnimatedSection direction="left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-start gap-3 p-4 border border-navy-700 hover:border-gold-500/50 transition-colors duration-300 group"
                >
                  <span className="w-5 h-5 rounded-full border border-gold-500/50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold-500/10 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  </span>
                  <span className="text-silver-400 text-sm leading-snug group-hover:text-silver-200 transition-colors duration-300">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Text Column */}
          <AnimatedSection direction="right" delay={200}>
            <span className="label-tag">Integrated Service Network</span>
            <div className="gold-divider" />
            <h2 className="section-heading mb-8">
              A Unified Network of{" "}
              <span className="text-gold-500">Care & Support</span>
            </h2>
            <p className="text-silver-400 text-base leading-relaxed mb-6">
              Academy Ventures supports and operates a diversified ecosystem of healthcare
              and community-focused initiatives that work together to improve accessibility,
              continuity of care, and operational efficiency.
            </p>
            <p className="text-silver-400 text-base leading-relaxed mb-8">
              Each service within the network is designed to complement the others —
              creating seamless pathways for individuals to receive comprehensive support
              across every stage of care.
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "12+", label: "Integrated Services" },
                { value: "Multi-State", label: "Geographic Reach" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-gold-500 pl-4">
                  <div className="font-display text-3xl font-bold text-gold-400 mb-1">
                    {item.value}
                  </div>
                  <div className="text-silver-500 text-xs uppercase tracking-wider">
                    {item.label}
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
