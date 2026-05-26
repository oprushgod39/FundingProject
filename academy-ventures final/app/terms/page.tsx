import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions | Academy Ventures",
  description: "Website terms and conditions for Academy Ventures.",
};

const terms = [
  {
    title: "Website Use",
    text: "This website is provided for general informational purposes. Content may be updated, modified, or removed without notice.",
  },
  {
    title: "No Professional Advice",
    text: "Website content does not constitute legal, medical, financial, procurement, or professional advice. Visitors should consult qualified advisors before relying on any information.",
  },
  {
    title: "Intellectual Property",
    text: "The Academy Ventures name, brand presentation, text, and website materials are protected by applicable intellectual property laws unless otherwise noted.",
  },
  {
    title: "External Links",
    text: "The website may reference external resources or third-party platforms. Academy Ventures is not responsible for third-party content, security, or privacy practices.",
  },
  {
    title: "Limitation of Liability",
    text: "Academy Ventures is not liable for damages arising from use of, or inability to use, this website to the fullest extent permitted by law.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Terms"
        title="Terms &"
        titleAccent="Conditions"
        description="These terms govern use of the Academy Ventures website and related informational materials."
      />
      <section className="section-padding bg-navy-950">
        <div className="container-wide max-w-4xl">
          <div className="space-y-8">
            {terms.map((section) => (
              <article key={section.title} className="border-b border-navy-700 pb-8">
                <h2 className="text-silver-100 text-xl font-semibold mb-4">{section.title}</h2>
                <p className="text-silver-400 leading-relaxed">{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
