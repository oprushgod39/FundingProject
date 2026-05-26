import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Academy Ventures",
  description:
    "Contact Academy Ventures to schedule a consultation, explore partnership opportunities, or discuss government relations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let's Build the Future"
        titleAccent="Together"
        description="Academy Ventures welcomes collaboration with government agencies, healthcare organizations, investors, educational institutions, community organizations, and strategic partners."
      />

      <section className="section-padding bg-navy-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <AnimatedSection direction="left">
              <span className="label-tag">Get in Touch</span>
              <div className="gold-divider" />
              <h2 className="font-display text-4xl text-silver-100 leading-tight mb-8">
                We&apos;d Like to{" "}
                <span className="text-gold-500">Hear From You</span>
              </h2>
              <p className="text-silver-400 leading-relaxed mb-10">
                Whether you&apos;re a government agency exploring healthcare program partnerships,
                a healthcare organization seeking operational support, an investor interested in
                our infrastructure development, or a community organization aligned with our
                mission — we&apos;re here to listen.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  {
                    label: "Partnership Inquiries",
                    value: "partnerships@academyventures.com",
                    desc: "For strategic partnership discussions",
                  },
                  {
                    label: "Government Relations",
                    value: "government@academyventures.com",
                    desc: "For public sector collaboration",
                  },
                  {
                    label: "Media & Press",
                    value: "media@academyventures.com",
                    desc: "For press inquiries and media requests",
                  },
                ].map((contact) => (
                  <div key={contact.label} className="flex gap-4 p-5 border border-navy-700">
                    <div>
                      <div className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em] mb-1">
                        {contact.label}
                      </div>
                      <div className="text-silver-200 text-sm mb-1">{contact.value}</div>
                      <div className="text-silver-500 text-xs">{contact.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pl-6 border-l-2 border-gold-500">
                <p className="font-display text-xl text-silver-200 italic leading-relaxed">
                  &ldquo;An organization built for partnership, designed for scale, and committed to impact.&rdquo;
                </p>
              </div>
            </AnimatedSection>

            {/* Contact Form (client component) */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
