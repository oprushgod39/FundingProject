"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const inquiryTypes = [
  "Government Relations",
  "Strategic Partnerships",
  "Investor Inquiry",
  "Healthcare Operations",
  "Workforce Development",
  "Technology & Analytics",
  "Community Impact",
  "Media & Press",
  "General Inquiry",
];

const inquiryPaths = [
  { title: "Government Relations", id: "government", desc: "Agency, municipal, public health, and infrastructure collaboration." },
  { title: "Strategic Partnerships", id: "partnership", desc: "Healthcare, education, community, and infrastructure partner inquiries." },
  { title: "Investor Inquiry", id: "investor", desc: "Strategic capital, platform growth, and institutional opportunity discussions." },
  { title: "Workforce Development", id: "workforce", desc: "Training pathways, education partners, and healthcare workforce programs." },
  { title: "Media & Press", id: "media", desc: "Official statements, interviews, announcements, and communications requests." },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedSection direction="right" delay={200}>
      {submitted ? (
        <div className="flex flex-col items-center justify-center h-full text-center p-12 border border-gold-500/30">
          <div className="w-16 h-16 rounded-full border-2 border-gold-500 flex items-center justify-center mb-6">
            <span className="text-gold-500 text-2xl">✓</span>
          </div>
          <h3 className="font-display text-3xl text-silver-100 mb-4">Message Received</h3>
          <p className="text-silver-400 leading-relaxed">
            Thank you for reaching out to Academy Ventures. Our team will review your inquiry and
            respond within 2 business days.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {inquiryPaths.map((path) => (
              <button
                key={path.title}
                type="button"
                id={path.id}
                onClick={() => setFormData({ ...formData, inquiryType: path.title })}
                className={`text-left border p-4 transition-colors duration-200 ${
                  formData.inquiryType === path.title
                    ? "border-gold-500 bg-navy-800"
                    : "border-navy-600 bg-navy-900/50 hover:border-gold-500/50"
                }`}
              >
                <span className="text-silver-100 text-sm font-semibold block mb-2">
                  {path.title}
                </span>
                <span className="text-silver-500 text-xs leading-relaxed block">{path.desc}</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} id="partnership-form" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-silver-400 text-xs uppercase tracking-widest block mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-navy-800 border border-navy-600 focus:border-gold-500 text-silver-100 px-4 py-3 text-sm outline-none transition-colors duration-200"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="text-silver-400 text-xs uppercase tracking-widest block mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full bg-navy-800 border border-navy-600 focus:border-gold-500 text-silver-100 px-4 py-3 text-sm outline-none transition-colors duration-200"
                  placeholder="Organization Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-silver-400 text-xs uppercase tracking-widest block mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-navy-800 border border-navy-600 focus:border-gold-500 text-silver-100 px-4 py-3 text-sm outline-none transition-colors duration-200"
                  placeholder="john@organization.com"
                />
              </div>
              <div>
                <label className="text-silver-400 text-xs uppercase tracking-widest block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-navy-800 border border-navy-600 focus:border-gold-500 text-silver-100 px-4 py-3 text-sm outline-none transition-colors duration-200"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div>
              <label className="text-silver-400 text-xs uppercase tracking-widest block mb-2">
                Inquiry Type
              </label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full bg-navy-800 border border-navy-600 focus:border-gold-500 text-silver-100 px-4 py-3 text-sm outline-none transition-colors duration-200"
              >
                <option value="">Select inquiry type</option>
                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-silver-400 text-xs uppercase tracking-widest block mb-2">
                Message *
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-navy-800 border border-navy-600 focus:border-gold-500 text-silver-100 px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                placeholder="Please describe your inquiry or collaboration opportunity..."
              />
            </div>

            {error && (
              <div className="border border-red-500/40 bg-red-950/20 px-4 py-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-navy-950/40 border-t-navy-950 rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                "Submit Inquiry"
              )}
            </button>
          </form>
        </>
      )}
    </AnimatedSection>
  );
}
