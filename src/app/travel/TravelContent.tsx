"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { SiteImage } from "@/components/shared/SiteImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { destinations } from "@/lib/data/destinations";
import { images } from "@/lib/data/images";

export default function TravelContent() {
  const [filter, setFilter] = useState<string>("all");

  const types = ["all", "course", "resort", "partnership", "adventure"];
  const typeLabels: Record<string, string> = {
    all: "All Destinations",
    course: "Golf Courses",
    resort: "Resorts",
    partnership: "Partnerships",
    adventure: "Adventures",
  };

  const filtered =
    filter === "all"
      ? destinations
      : destinations.filter((d) => d.type === filter);

  const featured = destinations[0];

  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <SiteImage
            src={featured.image || images.mexicoCoast}
            alt={featured.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </div>
        <div className="relative z-10 section-padding w-full !pb-16 pt-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Travel Hub
            </p>
            <h1 className="display-heading text-5xl md:text-7xl text-white font-light max-w-3xl">
              Golf Destinations & Travel Stories
            </h1>
            <p className="mt-4 text-white/70 text-lg max-w-xl">
              A luxury travel publication meets the fairway — explore courses,
              resorts, and adventures from around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2 mb-12">
            {types.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFilter(type)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  filter === type
                    ? "bg-green text-white"
                    : "bg-sand-light/50 text-charcoal/60 hover:text-charcoal"
                }`}
              >
                {typeLabels[type]}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {filtered.map((dest, i) => (
              <motion.article
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <SiteImage
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full glass px-3 py-1 text-xs text-white uppercase tracking-wider">
                      {dest.type}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h2 className="display-heading text-2xl font-light">
                        {dest.name}
                      </h2>
                      <p className="text-sm text-charcoal/50 flex items-center gap-1 mt-1">
                        <MapPin size={14} />
                        {dest.country}
                      </p>
                    </div>
                    {dest.rating && (
                      <div className="flex items-center gap-1 text-gold">
                        <Star size={16} fill="currentColor" />
                        <span className="text-sm font-medium">{dest.rating}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                    {dest.story}
                  </p>
                  {dest.course && (
                    <p className="text-xs text-green font-medium mb-4">
                      ⛳ {dest.course}
                    </p>
                  )}
                  <div className="border-t border-charcoal/5 pt-4">
                    <p className="text-xs uppercase tracking-wider text-charcoal/40 mb-3">
                      Local Tips
                    </p>
                    <ul className="space-y-2">
                      {dest.tips.map((tip) => (
                        <li
                          key={tip}
                          className="text-sm text-charcoal/70 flex items-start gap-2"
                        >
                          <span className="text-gold mt-0.5">→</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
