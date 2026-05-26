import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const ecosystemNodes = [
  { title: "Healthcare Operations", area: "top-left" },
  { title: "Senior Care Infrastructure", area: "top-right" },
  { title: "Community Impact", area: "middle-left" },
  { title: "Workforce Development", area: "middle-right" },
  { title: "Technology Integration", area: "bottom-left" },
  { title: "Government Solutions", area: "bottom-right" },
];

const areaClasses: Record<string, string> = {
  "top-left": "md:col-start-1 md:row-start-1",
  "top-right": "md:col-start-3 md:row-start-1",
  "middle-left": "md:col-start-1 md:row-start-2",
  "middle-right": "md:col-start-3 md:row-start-2",
  "bottom-left": "md:col-start-1 md:row-start-3",
  "bottom-right": "md:col-start-3 md:row-start-3",
};

export default function EcosystemDiagramSection() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="label-tag">Integrated Ecosystem</span>
            <div className="gold-divider" />
            <h2 className="section-heading mb-8">
              One platform connecting{" "}
              <span className="text-gold-500">care, workforce, public sector,</span> and infrastructure.
            </h2>
            <p className="text-silver-400 leading-relaxed mb-8">
              Academy Ventures is best understood as an operating ecosystem — not a single
              service line. Each division reinforces the others, enabling seamless delivery
              across complex, multi-stakeholder healthcare and community environments.
            </p>
            <Link href="/divisions" className="btn-primary">
              View Operating Divisions
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={150}>
            <div className="relative data-panel overflow-hidden p-6 md:p-8">
              <div className="absolute inset-0 scanline-overlay opacity-10" />
              <div className="absolute left-1/2 top-1/2 hidden h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy-500/35 md:block" />
              <div className="absolute left-1/2 top-1/2 hidden h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-500/15 md:block" />

              <div className="relative z-10 grid grid-cols-1 gap-4 md:min-h-[560px] md:grid-cols-[1fr_220px_1fr] md:grid-rows-3 md:items-center">
                <div className="order-first flex min-h-48 items-center justify-center rounded-full border border-gold-500/35 bg-navy-950/85 px-8 text-center md:order-none md:col-start-2 md:row-start-2 md:min-h-56">
                  <div>
                    <div className="mb-3 text-[10px] uppercase tracking-[0.25em] text-gold-500">
                      Core Platform
                    </div>
                    <div className="font-display text-3xl leading-tight text-silver-100">
                      Academy Ventures
                    </div>
                  </div>
                </div>

                {ecosystemNodes.map((node, index) => (
                  <div
                    key={node.title}
                    className={`${areaClasses[node.area]} relative border border-navy-600 bg-navy-950/95 px-5 py-5`}
                  >
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="font-mono text-xs text-gold-500/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="hidden h-2.5 w-2.5 bg-gold-500 shadow-[0_0_22px_rgba(201,168,76,0.85)] md:block" />
                    </div>
                    <h3 className="text-xs uppercase leading-relaxed tracking-[0.18em] text-silver-200">
                      {node.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
