"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

interface InquiryFormProps {
  type?: "sponsorship" | "general";
}

export function InquiryForm({ type = "sponsorship" }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl glass-light p-12 text-center"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green/10">
          <Check className="text-green" size={32} />
        </div>
        <h3 className="display-heading text-2xl mb-2">Message Received</h3>
        <p className="text-charcoal/60">
          Thank you for reaching out. Our team will respond within 48 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-wider text-charcoal/50">
            Name
          </label>
          <input
            type="text"
            required
            className="w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-wider text-charcoal/50">
            Company
          </label>
          <input
            type="text"
            required
            className="w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green"
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-xs uppercase tracking-wider text-charcoal/50">
          Email
        </label>
        <input
          type="email"
          required
          className="w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green"
        />
      </div>
      {type === "sponsorship" && (
        <div>
          <label className="mb-2 block text-xs uppercase tracking-wider text-charcoal/50">
            Partnership Type
          </label>
          <select className="w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green">
            <option>Tourism Campaign</option>
            <option>Golf Brand Partnership</option>
            <option>Luxury Resort Collaboration</option>
            <option>Airline / Travel Brand</option>
            <option>Apparel & Lifestyle</option>
            <option>Speaking Engagement</option>
            <option>Media Opportunity</option>
            <option>Other</option>
          </select>
        </div>
      )}
      <div>
        <label className="mb-2 block text-xs uppercase tracking-wider text-charcoal/50">
          Message
        </label>
        <textarea
          required
          rows={4}
          className="w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green resize-none"
          placeholder="Tell us about your vision for this partnership..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-8 py-4 text-sm font-medium text-white transition-all hover:bg-green-deep sm:w-auto"
      >
        Send Inquiry
        <Send size={16} />
      </button>
    </form>
  );
}
