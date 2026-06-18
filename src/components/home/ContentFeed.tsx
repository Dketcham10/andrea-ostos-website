"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Camera } from "lucide-react";
import { SiteImage } from "@/components/shared/SiteImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { contentFeed, categoryLabels } from "@/lib/data/content";
import type { ContentCategory } from "@/types";
import { cn } from "@/lib/utils";

const filters: (ContentCategory | "all")[] = [
  "all",
  "travel",
  "golf",
  "lifestyle",
  "behind-the-scenes",
  "brand-partnerships",
];

export function ContentFeed() {
  const [activeFilter, setActiveFilter] = useState<ContentCategory | "all">(
    "all"
  );

  const filtered =
    activeFilter === "all"
      ? contentFeed
      : contentFeed.filter((item) => item.category === activeFilter);

  return (
    <section className="section-padding bg-sand-light/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Latest Content"
          title="Stories From the Fairway"
          subtitle="Travel adventures, golf tips, brand collaborations, and behind-the-scenes moments."
          align="center"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                activeFilter === filter
                  ? "bg-green text-white shadow-md"
                  : "bg-white text-charcoal/60 hover:text-charcoal border border-charcoal/10"
              )}
            >
              {filter === "all" ? "All" : categoryLabels[filter]}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filtered.map((item, i) => (
            <motion.article
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-white shadow-sm cursor-pointer",
                i === 0 && filtered.length >= 4 && "sm:col-span-2 sm:row-span-2"
              )}
            >
              <div
                className={cn(
                  "relative overflow-hidden",
                  i === 0 && filtered.length >= 4 ? "aspect-[4/3]" : "aspect-[4/5]"
                )}
              >
                <SiteImage
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

                {item.platform === "youtube" && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={20} className="text-charcoal ml-0.5" fill="currentColor" />
                  </div>
                )}
                {item.platform === "instagram" && (
                  <div className="absolute top-4 right-4 text-white/80">
                    <Camera size={18} />
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-[10px] uppercase tracking-wider text-gold font-medium">
                    {categoryLabels[item.category]}
                  </span>
                  <h3
                    className={cn(
                      "display-heading text-white font-light mt-1",
                      i === 0 && filtered.length >= 4
                        ? "text-2xl md:text-3xl"
                        : "text-lg"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 mt-2 line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
