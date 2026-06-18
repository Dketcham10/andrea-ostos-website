"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { SiteImage } from "@/components/shared/SiteImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { destinations } from "@/lib/data/destinations";

export function BucketListTracker() {
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("fairway-bucket-list");
    if (stored) setSaved(JSON.parse(stored));
  }, []);

  const toggle = (id: string) => {
    const next = saved.includes(id)
      ? saved.filter((s) => s !== id)
      : [...saved, id];
    setSaved(next);
    localStorage.setItem("fairway-bucket-list", JSON.stringify(next));
  };

  const bucketListDestinations = destinations.filter((d) => d.course);

  return (
    <section className="section-padding bg-green-deep text-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Fan Experience"
          title="Golf Bucket List"
          subtitle="Save your dream destinations and start planning your own fairway adventure."
          light
          align="center"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bucketListDestinations.map((dest, i) => {
            const isSaved = saved.includes(dest.id);
            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden glass cursor-pointer"
              >
                <div className="aspect-[3/4] relative">
                  <SiteImage
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  <button
                    type="button"
                    onClick={() => toggle(dest.id)}
                    className="absolute top-4 right-4 rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    aria-label={isSaved ? "Remove from bucket list" : "Add to bucket list"}
                  >
                    {isSaved ? (
                      <BookmarkCheck size={18} className="text-gold" />
                    ) : (
                      <Bookmark size={18} className="text-white" />
                    )}
                  </button>
                  <div className="absolute bottom-0 p-5">
                    <p className="text-xs text-gold uppercase tracking-wider">
                      {dest.country}
                    </p>
                    <h3 className="display-heading text-lg mt-1">{dest.course}</h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {saved.length > 0 && (
          <p className="text-center mt-8 text-white/60 text-sm">
            {saved.length} destination{saved.length !== 1 ? "s" : ""} saved to
            your bucket list
          </p>
        )}
      </div>
    </section>
  );
}
