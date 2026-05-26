import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const partnerTypes = [
  "Government Agencies",
  "Healthcare Organizations",
  "Investors",
  "Educational Institutions",
  "Community Organizations",
  "Strategic Partners",
  "Infrastructure Developers",
  "Workforce Development Groups",
];

export default function ContactCTA() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-gold-500/10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-b border-l border-gold-500/10" />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="label-tag">Let&apos;s Collaborate</span>
            <div className="gold-divider mx-auto" />
            <h2 className="section-heading mb-6">
              Let&apos;s Build the{" "}
              <span className="text-gold-500">Future</span> Together
            </h2>
            <p className="section-subheading mx-auto text-center mb-12">
              Academy Ventures welcomes collaboration opportunities with organizations that
              share our commitment to building scalable systems for community advancement.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {partnerTypes.map((type) => (
                <span
                  key={type}
                  className="px-4 py-2 border border-navy-600 text-silver-400 text-xs uppercase tracking-widest"
                >
                  {type}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/contact#partnership" className="btn-outline">
              Partnership Inquiry
            </Link>
            <Link href="/government-solutions" className="btn-outline">
              Government Relations
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
