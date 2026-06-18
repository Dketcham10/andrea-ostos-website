"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiteImage } from "@/components/shared/SiteImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { milestones } from "@/lib/data/content";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Journey"
          title="Milestones & Adventures"
          subtitle="From debuting on tour to becoming a global brand — every chapter of the adventure."
          align="center"
        />

        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-charcoal/10 md:-translate-x-px">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-green origin-top"
            />
          </div>

          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex items-center gap-8 mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block flex-1" />
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-green border-4 border-white shadow-md -translate-x-1/2 z-10" />
              <div className="flex-1 ml-16 md:ml-0">
                <div className="rounded-2xl overflow-hidden bg-white shadow-lg border border-charcoal/5">
                  <div className="aspect-[16/9] overflow-hidden">
                    <SiteImage
                      src={milestone.image}
                      alt={milestone.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-gold text-sm font-medium">
                      {milestone.year}
                    </span>
                    <h3 className="display-heading text-xl mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
