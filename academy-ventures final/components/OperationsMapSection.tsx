import AnimatedSection from "./AnimatedSection";

const nodes = [
  { label: "Healthcare Ops", x: "24%", y: "28%" },
  { label: "Public Sector", x: "66%", y: "26%" },
  { label: "Workforce", x: "48%", y: "52%" },
  { label: "Senior Housing", x: "31%", y: "70%" },
  { label: "Technology", x: "72%", y: "67%" },
];

export default function OperationsMapSection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 to-navy-950" />
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
          <AnimatedSection direction="left">
            <span className="label-tag">Operational Network</span>
            <div className="gold-divider" />
            <h2 className="section-heading mb-8">
              A connected ecosystem for{" "}
              <span className="text-gold-500">multi-state execution.</span>
            </h2>
            <p className="text-silver-400 leading-relaxed mb-8">
              The map experience is intentionally styled like an executive operations view:
              enough signal to feel strategic, restrained enough to stay credible for
              government, healthcare, and institutional partners.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Healthcare access", "Workforce readiness", "Mobility support", "Community impact"].map(
                (item) => (
                  <div key={item} className="border border-navy-700 bg-navy-900/60 p-4">
                    <span className="text-silver-300 text-xs uppercase tracking-[0.18em]">
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={180}>
            <div className="relative min-h-[520px] data-panel overflow-hidden">
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-navy-950/80" />
              <div className="absolute inset-0 grid-overlay opacity-60" />
              <div className="absolute left-8 right-8 top-8 bottom-8 border border-navy-600" />
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-500/20" />
              <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy-500/40" />
              {nodes.map((node) => (
                <div
                  key={node.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: node.x, top: node.y }}
                >
                  <div className="relative">
                    <div className="h-3 w-3 bg-gold-500 shadow-[0_0_24px_rgba(201,168,76,0.85)]" />
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap border border-navy-600 bg-navy-950/90 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-silver-300">
                      {node.label}
                    </div>
                  </div>
                </div>
              ))}
              <div className="absolute left-8 bottom-8 right-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-navy-700 pt-5">
                <span className="text-gold-500 text-xs uppercase tracking-[0.25em]">
                  Network Command View
                </span>
                <span className="text-silver-500 text-xs uppercase tracking-[0.18em]">
                  Healthcare · workforce · public sector · technology
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
