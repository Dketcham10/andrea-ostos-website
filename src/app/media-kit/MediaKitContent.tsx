"use client";

import { motion } from "framer-motion";
import { Download, Users, TrendingUp, Globe, Heart } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/lib/data/site";
import { formatNumber } from "@/lib/utils";

const partnershipTypes = [
  "Sponsored Travel Content",
  "Brand Ambassador Roles",
  "Product Launch Campaigns",
  "Social Media Campaigns",
  "Golf Event Appearances",
  "Speaking Engagements",
  "Content Licensing",
  "Co-Branded Collections",
];

export default function MediaKitContent() {
  return (
    <>
      <section className="section-padding bg-charcoal text-white pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="For Brands & Media"
            title="Media Kit"
            subtitle="Everything you need to understand the audience, reach, and partnership potential."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: Users,
                value: formatNumber(siteConfig.stats.followers),
                label: "Total Followers",
              },
              {
                icon: TrendingUp,
                value: formatNumber(siteConfig.stats.reach),
                label: "Monthly Reach",
              },
              {
                icon: Heart,
                value: `${siteConfig.stats.engagement}%`,
                label: "Engagement Rate",
              },
              {
                icon: Globe,
                value: String(siteConfig.stats.countries),
                label: "Countries Reached",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl glass p-8 text-center"
              >
                <stat.icon className="mx-auto mb-4 text-gold" size={28} />
                <p className="display-heading text-3xl text-white font-light">
                  {stat.value}
                </p>
                <p className="text-sm text-white/50 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading
                eyebrow="Audience"
                title="Who Follows the Journey"
              />
              <div className="space-y-6">
                {[
                  { label: "Primary Age", value: siteConfig.demographics.age },
                  { label: "Gender Split", value: siteConfig.demographics.gender },
                  {
                    label: "Top Markets",
                    value: siteConfig.demographics.topMarkets.join(", "),
                  },
                  {
                    label: "Key Interests",
                    value: siteConfig.demographics.interests.join(", "),
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-charcoal/10 pb-4"
                  >
                    <p className="text-xs uppercase tracking-wider text-charcoal/40 mb-1">
                      {item.label}
                    </p>
                    <p className="text-charcoal font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Opportunities"
                title="Partnership Options"
              />
              <ul className="space-y-3">
                {partnershipTypes.map((type, i) => (
                  <motion.li
                    key={type}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 rounded-xl bg-sand-light/50 px-5 py-4"
                  >
                    <span className="h-2 w-2 rounded-full bg-green shrink-0" />
                    <span className="text-sm font-medium">{type}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-green-deep text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="display-heading text-3xl md:text-4xl font-light mb-4">
            Download Full Media Kit
          </h2>
          <p className="text-white/70 mb-8">
            Complete audience analytics, rate card, brand guidelines, and
            high-resolution assets.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-charcoal font-medium hover:bg-gold-light transition-colors"
          >
            <Download size={18} />
            Download PDF
          </button>
        </div>
      </section>
    </>
  );
}
