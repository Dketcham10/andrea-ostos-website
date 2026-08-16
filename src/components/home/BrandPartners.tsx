"use client";

import { motion } from "framer-motion";
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
          <div className="marquee-track gap-12 px-8">
            {doubled.map((partner, i) => (
              <div
                key={`${partner.id}-${i}`}
                className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl bg-charcoal/[0.03] px-4"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logoImage}
                  alt={`${partner.name} logo`}
                  className="max-h-10 w-full object-contain opacity-70"
                  loading="lazy"
                />
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
              className="group overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div
                className="relative flex aspect-[4/3] items-center justify-center p-8 transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ backgroundColor: partner.logoBackground ?? "#f5f5f5" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logoImageCard ?? partner.logoImage}
                  alt={`${partner.name} logo`}
                  className="max-h-24 w-full max-w-[85%] object-contain drop-shadow-sm"
                  loading="lazy"
                />
              </div>

              <div className="border-t border-charcoal/10 bg-charcoal p-6">
                <p className="text-xs uppercase tracking-wider text-gold mb-2">
                  {partner.category}
                </p>
                <h3 className="display-heading text-2xl text-white font-light mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-white/70 mb-3">{partner.description}</p>
                {partner.metric && (
                  <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-gold">
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
