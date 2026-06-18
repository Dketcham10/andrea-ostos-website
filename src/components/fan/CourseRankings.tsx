"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, Star } from "lucide-react";
import { SiteImage } from "@/components/shared/SiteImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { courseRankings } from "@/lib/data/content";

export function CourseRankings() {
  const [votes, setVotes] = useState<Record<string, number>>({});

  const handleVote = (id: string) => {
    setVotes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const sorted = [...courseRankings].sort(
    (a, b) => b.votes + (votes[b.id] || 0) - (a.votes + (votes[a.id] || 0))
  );

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Community"
          title="Course Rankings"
          subtitle="Vote for your favorite courses from Andrea's travels around the world."
          align="center"
        />

        <div className="space-y-4 max-w-3xl mx-auto">
          {sorted.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-2xl border border-charcoal/5 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="display-heading text-2xl text-gold w-8 text-center font-light">
                {i + 1}
              </span>
              <div className="h-16 w-16 rounded-xl overflow-hidden shrink-0">
                <SiteImage
                  src={course.image}
                  alt={course.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{course.name}</h3>
                <p className="text-sm text-charcoal/50">
                  {course.location}, {course.country}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Star size={12} className="text-gold" fill="currentColor" />
                  <span className="text-xs text-charcoal/60">{course.rating}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleVote(course.id)}
                className="flex items-center gap-2 rounded-full border border-charcoal/10 px-4 py-2 text-sm hover:bg-green hover:text-white hover:border-green transition-all"
              >
                <ThumbsUp size={14} />
                {(course.votes + (votes[course.id] || 0)).toLocaleString()}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
