"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Play } from "lucide-react";
import { SiteImage } from "@/components/shared/SiteImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  filterSocialPosts,
  getSocialProfile,
  metricLabels,
  platformLabels,
  socialPosts,
  socialProfiles,
  topicLabels,
} from "@/lib/data/socialContent";
import type { SocialPlatform } from "@/types/social";
import { cn, formatNumber } from "@/lib/utils";

const platformFilters: (SocialPlatform | "all")[] = [
  "all",
  "instagram",
  "tiktok",
  "youtube",
  "x",
  "threads",
];

function PlatformIcon({
  platform,
  className,
}: {
  platform: SocialPlatform;
  className?: string;
}) {
  if (platform === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    );
  }
  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.8a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
      </svg>
    );
  }
  if (platform === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.18 8.18 0 0 0 4.77 1.52V6.84a4.85 4.85 0 0 1-1-.15z" />
      </svg>
    );
  }
  if (platform === "x") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1.2 5.4v9.2h2.4V7.4H10.8zm4.8 0v9.2H18V7.4h-2.4z" />
    </svg>
  );
}

export function ContentFeed() {
  const [activeFilter, setActiveFilter] = useState<SocialPlatform | "all">("all");

  const filtered = useMemo(
    () => filterSocialPosts(activeFilter),
    [activeFilter]
  );

  return (
    <section className="section-padding bg-sand-light/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Latest Content"
          title="Top Posts Across Social"
          subtitle="Most popular content from Andrea's channels — tap any post to view it on the platform."
          align="center"
        />

        <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {socialProfiles.map((profile) => (
            <a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-charcoal/20 hover:shadow-md"
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: profile.accent }}
              >
                <PlatformIcon platform={profile.id} className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-charcoal">{profile.name}</p>
                <p className="truncate text-xs text-charcoal/50">{profile.handle}</p>
                <p className="text-xs text-gold mt-0.5">
                  {formatNumber(profile.followers)} followers
                </p>
              </div>
              <ExternalLink
                size={14}
                className="shrink-0 text-charcoal/30 transition-colors group-hover:text-gold"
              />
            </a>
          ))}
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {platformFilters.map((filter) => (
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
              {filter === "all" ? "All Platforms" : platformLabels[filter]}
            </button>
          ))}
        </div>

        <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-charcoal/45">
          Sorted by popularity · {filtered.length} posts
        </p>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((post, i) => {
            const profile = getSocialProfile(post.platform);
            const isFeatured = i === 0 && filtered.length >= 4;

            return (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl",
                  isFeatured && "sm:col-span-2 sm:row-span-2"
                )}
              >
                <div
                  className={cn(
                    "relative overflow-hidden",
                    isFeatured ? "aspect-[4/3]" : "aspect-[4/5]"
                  )}
                >
                  <SiteImage
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-charcoal shadow-sm">
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: profile.accent }}
                    >
                      <PlatformIcon platform={post.platform} className="h-3 w-3" />
                    </span>
                    {platformLabels[post.platform]}
                  </div>

                  <div className="absolute top-4 right-4 rounded-full bg-charcoal/70 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {post.platform === "youtube" || post.platform === "tiktok" ? (
                      <Play size={16} fill="currentColor" />
                    ) : (
                      <ArrowUpRight size={16} />
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-gold/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-charcoal">
                        {formatNumber(post.metricValue)} {metricLabels[post.metricType]}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-white/70">
                        {topicLabels[post.topic]}
                      </span>
                    </div>
                    <h3
                      className={cn(
                        "display-heading text-white font-light",
                        isFeatured ? "text-2xl md:text-3xl" : "text-lg"
                      )}
                    >
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-white/75">
                      {post.excerpt}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-gold">
                      View on {platformLabels[post.platform]}
                      <ExternalLink size={12} />
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <div className="mt-10 text-center">
          <a
            href={socialProfiles[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-green hover:text-green"
          >
            Follow Andrea on {socialProfiles[0]?.name}
            <ArrowUpRight size={16} />
          </a>
          <p className="mt-3 text-xs text-charcoal/45">
            {formatNumber(socialPosts.reduce((sum, post) => sum + post.popularityScore, 0))}+ total engagements across latest posts
          </p>
        </div>
      </div>
    </section>
  );
}
