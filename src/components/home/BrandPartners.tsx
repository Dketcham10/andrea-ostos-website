"use client";

import { motion } from "framer-motion";
import { SiteImage } from "@/components/shared/SiteImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { partners } from "@/lib/data/content";

export function BrandPartners() {
  const doubled = [...partners, ...partners];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trusted By"
          title="Brand Partners"
          subtitle="Collaborating with world-class brands across golf, travel, lifestyle, and wellness."
          align="center"
        />
      </div>

      <div className="relative mb-16">
        <div className="overflow-hidden">
          <div className="marquee-track gap-16 px-8">
            {doubled.map((partner, i) => (
              <div
                key={`${partner.id}-${i}`}
                className="flex items-center gap-3 shrink-0"
              >
                <span className="display-heading text-2xl md:text-3xl text-charcoal/20 font-light whitespace-nowrap">
                  {partner.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-charcoal aspect-[4/5] cursor-pointer"
            >
              <SiteImage
                src={partner.campaignImage}
                alt={partner.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs uppercase tracking-wider text-gold mb-2">
                  {partner.category}
                </p>
                <h3 className="display-heading text-2xl text-white font-light mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-white/70 mb-3">{partner.description}</p>
                {partner.metric && (
                  <span className="inline-block rounded-full glass px-3 py-1 text-xs text-gold">
                    {partner.metric}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
