import AnimatedSection from "./AnimatedSection";

const pillars = [
  "Senior Healthcare Services",
  "Adult Day Healthcare Operations",
  "Homecare Systems",
  "Healthcare Workforce Development",
  "Medical Transportation",
  "Affordable Senior Housing",
  "Healthcare Technology",
  "Government Partnerships",
  "Strategic Consulting",
  "Community Infrastructure",
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column */}
          <AnimatedSection direction="left">
            <span className="label-tag">About the Organization</span>
            <div className="gold-divider" />
            <h2 className="section-heading mb-8">
              An Organization{" "}
              <span className="text-gold-500">Already Operating</span>{" "}
              at Scale.
            </h2>
            <p className="text-silver-400 text-base leading-relaxed mb-6">
              Academy Ventures is a multi-sector strategic development organization operating
              across healthcare, workforce development, senior care infrastructure, technology
              integration, and community-centered services.
            </p>
            <p className="text-silver-400 text-base leading-relaxed mb-6">
              The organization was formed with a vision to build scalable systems that improve
              quality of life, strengthen healthcare access, support workforce readiness, and create
              long-term community impact through sustainable operational models.
            </p>
            <p className="text-silver-400 text-base leading-relaxed">
              Academy Ventures brings together operational leadership, healthcare expertise,
              strategic partnerships, and infrastructure development capabilities under one
              integrated platform — with operations and strategic initiatives spanning multiple states.
            </p>
          </AnimatedSection>

          {/* Right Column — Pillars */}
          <AnimatedSection direction="right" delay={200}>
            <div className="border border-navy-600 p-8">
              <h3 className="text-silver-300 text-sm font-semibold uppercase tracking-[0.2em] mb-6">
                Areas of Operation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pillars.map((pillar, i) => (
                  <div
                    key={pillar}
                    className="flex items-center gap-3 py-3 border-b border-navy-700"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                    <span className="text-silver-400 text-sm">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent quote */}
            <div className="mt-8 pl-6 border-l-2 border-gold-500">
              <p className="font-display text-xl text-silver-200 italic leading-relaxed">
                &ldquo;Confident. Institutional. Strategic. Sophisticated.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
