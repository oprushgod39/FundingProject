import AnimatedSection from "./AnimatedSection";

const trustItems = [
  "Multi-state operational coordination",
  "Healthcare infrastructure development",
  "Public-sector collaboration",
  "Workforce systems and training pathways",
  "Community-based care models",
  "Compliance-oriented administrative infrastructure",
];

export default function TrustArchitectureSection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-25" />
      <div className="container-wide relative z-10">
        <AnimatedSection className="text-center mb-14">
          <span className="label-tag">Credibility Architecture</span>
          <div className="gold-divider mx-auto" />
          <h2 className="section-heading mb-6">
            Signals designed for{" "}
            <span className="text-gold-500">government, investors,</span> and health systems.
          </h2>
          <p className="section-subheading mx-auto text-center">
            Academy Ventures is structured to meet the credibility standards required by
            government agencies, healthcare institutions, and investment partners — with
            operational depth, compliance orientation, and scalable execution at every level.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustItems.map((item, index) => (
            <AnimatedSection key={item} delay={index * 70}>
              <div className="data-panel p-6 h-full group hover:border-gold-500/40 transition-colors duration-300">
                <span className="text-gold-500/60 font-mono text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-silver-100 font-semibold mt-5 leading-snug group-hover:text-gold-400 transition-colors duration-300">
                  {item}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
