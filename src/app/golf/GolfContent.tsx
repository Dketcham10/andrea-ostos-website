"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar, Target, Play } from "lucide-react";
import { SiteImage } from "@/components/shared/SiteImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  tournamentSchedule,
  courseRankings,
} from "@/lib/data/content";
import { siteConfig } from "@/lib/data/site";
import { images, sized } from "@/lib/data/images";

const achievements = [
  { label: "LPGA Tour Wins", value: "3" },
  { label: "World Ranking", value: "#22" },
  { label: "Courses Played", value: String(siteConfig.stats.courses) },
  { label: "Career Earnings", value: "$2.4M" },
];

export default function GolfContent() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <SiteImage
            src={images.golfSwing}
            alt="Golf"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </div>
        <div className="relative z-10 section-padding w-full !pb-16 pt-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Golf Hub
            </p>
            <h1 className="display-heading text-5xl md:text-7xl text-white font-light">
              On & Off the Course
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {achievements.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="display-heading text-4xl text-gold font-light">
                  {item.value}
                </p>
                <p className="text-sm text-white/50 mt-2 uppercase tracking-wider">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Schedule"
            title="Tournament Calendar"
            subtitle="Upcoming events and recent results from the LPGA Tour."
          />

          <div className="space-y-4">
            {tournamentSchedule.map((event, i) => (
              <motion.div
                key={event.event}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-charcoal/5 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-full p-3 ${
                      event.status === "upcoming"
                        ? "bg-green/10 text-green"
                        : "bg-charcoal/5 text-charcoal/40"
                    }`}
                  >
                    {event.status === "upcoming" ? (
                      <Calendar size={20} />
                    ) : (
                      <Trophy size={20} />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{event.event}</h3>
                    <p className="text-sm text-charcoal/50">
                      {event.location} · {event.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {"result" in event && event.result && (
                    <span className="rounded-full bg-gold/10 text-gold px-4 py-1.5 text-sm font-medium">
                      {event.result}
                    </span>
                  )}
                  <span
                    className={`text-xs uppercase tracking-wider ${
                      event.status === "upcoming"
                        ? "text-green"
                        : "text-charcoal/40"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-light/30">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Instruction"
            title="Swing & Tips"
            subtitle="Instructional content to help you play your best golf."
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Driver Distance Secrets",
                image: sized.card("golfWide"),
                duration: "8:42",
              },
              {
                title: "Short Game Masterclass",
                image: sized.card("golfCourse"),
                duration: "12:15",
              },
              {
                title: "Course Management 101",
                image: sized.card("golfSwing"),
                duration: "6:30",
              },
            ].map((video) => (
              <div
                key={video.title}
                className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer"
              >
                <SiteImage
                  src={video.image}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="rounded-full bg-white/90 p-4 mb-3 group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-charcoal ml-1" fill="currentColor" />
                  </div>
                  <h3 className="text-white font-medium">{video.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Course Tracker"
            title="Favorite Courses Worldwide"
            subtitle="Personal ratings and reviews from 127 courses across the globe."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseRankings.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden border border-charcoal/5 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <SiteImage
                    src={course.image}
                    alt={course.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{course.name}</h3>
                    <span className="text-gold text-sm font-medium flex items-center gap-1">
                      <Target size={14} />
                      {course.rating}
                    </span>
                  </div>
                  <p className="text-sm text-charcoal/50 mb-3">
                    {course.location}, {course.country}
                  </p>
                  <p className="text-sm text-charcoal/60 leading-relaxed">
                    {course.review}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
