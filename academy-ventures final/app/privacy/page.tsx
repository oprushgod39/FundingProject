import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Academy Ventures",
  description: "Privacy policy for Academy Ventures website visitors and inquiry submissions.",
};

const sections = [
  {
    title: "Information We Collect",
    text: "Academy Ventures may collect information submitted through website forms, including name, organization, contact details, inquiry type, and message content.",
  },
  {
    title: "How Information Is Used",
    text: "Information is used to respond to inquiries, evaluate partnership opportunities, improve website performance, and support legitimate business communications.",
  },
  {
    title: "Information Sharing",
    text: "Academy Ventures does not sell personal information. Information may be shared with internal teams or service providers when necessary to respond to an inquiry or operate the website.",
  },
  {
    title: "Security",
    text: "Reasonable administrative, technical, and organizational safeguards are used to protect submitted information. No website transmission can be guaranteed completely secure.",
  },
  {
    title: "Contact",
    text: "Questions about this policy may be submitted through the Academy Ventures contact page.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Privacy"
        title="Privacy"
        titleAccent="Policy"
        description="This policy outlines how Academy Ventures handles information submitted through this website."
      />
      <section className="section-padding bg-navy-950">
        <div className="container-wide max-w-4xl">
          <div className="space-y-8">
            {sections.map((section) => (
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
