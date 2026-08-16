import type { SocialPlatform, SocialPost, SocialProfile } from "@/types/social";
import { sized } from "@/lib/data/images";

/** Update handles, URLs, and metrics when syncing real social accounts. */
const profiles = [
  {
    id: "instagram" as const,
    name: "Instagram",
    handle: "@andreaostos",
    url: "https://instagram.com/andreaostos",
    followers: 412000,
    accent: "#E1306C",
  },
  {
    id: "tiktok" as const,
    name: "TikTok",
    handle: "@andreaostos",
    url: "https://tiktok.com/@andreaostos",
    followers: 286000,
    accent: "#010101",
  },
  {
    id: "youtube" as const,
    name: "YouTube",
    handle: "@andreaostos",
    url: "https://youtube.com/@andreaostos",
    followers: 148000,
    accent: "#FF0000",
  },
  {
    id: "x" as const,
    name: "X",
    handle: "@andreaostos",
    url: "https://x.com/andreaostos",
    followers: 94000,
    accent: "#0f0f0f",
  },
  {
    id: "threads" as const,
    name: "Threads",
    handle: "@andreaostos",
    url: "https://threads.net/@andreaostos",
    followers: 57000,
    accent: "#101010",
  },
] satisfies SocialProfile[];

export const socialProfiles = [...profiles].sort(
  (a, b) => b.followers - a.followers
);

const posts: SocialPost[] = [
  {
    id: "yt-cape-town",
    title: "Cape Town Adventure Vlog",
    excerpt: "Safari, sandbelt golf, and sunset on Table Mountain.",
    platform: "youtube",
    url: "https://youtube.com/@andreaostos",
    image: sized.card("capeTown"),
    publishedAt: "2026-03-10",
    metricValue: 2400000,
    metricType: "views",
    popularityScore: 2400000,
    topic: "travel",
  },
  {
    id: "tt-driver-tips",
    title: "3 Moves for 15 Extra Yards",
    excerpt: "Quick driver tips that actually work on course.",
    platform: "tiktok",
    url: "https://tiktok.com/@andreaostos",
    image: sized.card("golfSwing"),
    publishedAt: "2026-05-08",
    metricValue: 1820000,
    metricType: "views",
    popularityScore: 1820000,
    topic: "golf",
  },
  {
    id: "ig-dubai",
    title: "Behind the Scenes: Dubai Campaign",
    excerpt: "Luxury brand shoot on course — full BTS reel.",
    platform: "instagram",
    url: "https://instagram.com/andreaostos",
    image: sized.card("dubai"),
    publishedAt: "2026-04-28",
    metricValue: 890000,
    metricType: "likes",
    popularityScore: 890000,
    topic: "brand-partnerships",
  },
  {
    id: "yt-st-andrews",
    title: "48 Hours in St Andrews",
    excerpt: "From the Swilcan Bridge to the best fish & chips in Fife.",
    platform: "youtube",
    url: "https://youtube.com/@andreaostos",
    image: sized.card("stAndrews"),
    publishedAt: "2026-05-12",
    metricValue: 720000,
    metricType: "views",
    popularityScore: 720000,
    topic: "travel",
  },
  {
    id: "x-tour-win",
    title: "Portland Classic Win Reaction",
    excerpt: "The moment it all clicked — raw emotions after my first LPGA win.",
    platform: "x",
    url: "https://x.com/andreaostos",
    image: sized.card("golfCourse"),
    publishedAt: "2025-09-14",
    metricValue: 465000,
    metricType: "impressions",
    popularityScore: 465000,
    topic: "golf",
  },
  {
    id: "threads-mexico",
    title: "Regresando a Casa: Golf en México",
    excerpt: "Homecoming tour of Mexico's finest courses.",
    platform: "threads",
    url: "https://threads.net/@andreaostos",
    image: sized.card("mexicoCoast"),
    publishedAt: "2026-02-14",
    metricValue: 318000,
    metricType: "views",
    popularityScore: 318000,
    topic: "travel",
  },
  {
    id: "ig-morning-routine",
    title: "Morning Routine on Tour",
    excerpt: "How I prepare mentally and physically before every round.",
    platform: "instagram",
    url: "https://instagram.com/andreaostos",
    image: sized.card("morningCoffee"),
    publishedAt: "2026-03-22",
    metricValue: 276000,
    metricType: "likes",
    popularityScore: 276000,
    topic: "lifestyle",
  },
  {
    id: "tt-bunker-save",
    title: "Bunker Save That Went Viral",
    excerpt: "Watch this up-and-down from a plugged lie.",
    platform: "tiktok",
    url: "https://tiktok.com/@andreaostos",
    image: sized.card("golfBunker"),
    publishedAt: "2026-04-02",
    metricValue: 214000,
    metricType: "views",
    popularityScore: 214000,
    topic: "golf",
  },
  {
    id: "yt-lpga-preview",
    title: "LPGA Season Preview",
    excerpt: "My goals, schedule, and what I'm most excited about.",
    platform: "youtube",
    url: "https://youtube.com/@andreaostos",
    image: sized.card("golfSwing"),
    publishedAt: "2026-02-28",
    metricValue: 185000,
    metricType: "views",
    popularityScore: 185000,
    topic: "golf",
  },
  {
    id: "x-emirates",
    title: "Emirates x Andrea Ostos Collection",
    excerpt: "Travel in style — our capsule collection launches this fall.",
    platform: "x",
    url: "https://x.com/andreaostos",
    image: sized.card("airplane"),
    publishedAt: "2026-04-01",
    metricValue: 128000,
    metricType: "impressions",
    popularityScore: 128000,
    topic: "brand-partnerships",
  },
  {
    id: "ig-resort-review",
    title: "Resort Review: COMO Shambhala",
    excerpt: "Wellness, golf, and the ultimate reset in Bali.",
    platform: "instagram",
    url: "https://instagram.com/andreaostos",
    image: sized.card("bali"),
    publishedAt: "2026-04-15",
    metricValue: 112000,
    metricType: "likes",
    popularityScore: 112000,
    topic: "travel",
  },
  {
    id: "threads-practice",
    title: "Range Session in Scottsdale",
    excerpt: "Pre-tournament prep and a few thoughts on course management.",
    platform: "threads",
    url: "https://threads.net/@andreaostos",
    image: sized.card("desertGolf"),
    publishedAt: "2026-05-01",
    metricValue: 86000,
    metricType: "views",
    popularityScore: 86000,
    topic: "behind-the-scenes",
  },
];

export const socialPosts = [...posts].sort(
  (a, b) => b.popularityScore - a.popularityScore
);

export const platformLabels: Record<SocialPlatform, string> = {
  youtube: "YouTube",
  instagram: "Instagram",
  tiktok: "TikTok",
  x: "X",
  threads: "Threads",
};

export const metricLabels: Record<SocialPost["metricType"], string> = {
  views: "views",
  likes: "likes",
  impressions: "impressions",
};

export const topicLabels: Record<SocialPost["topic"], string> = {
  travel: "Travel",
  golf: "Golf",
  lifestyle: "Lifestyle",
  "behind-the-scenes": "Behind The Scenes",
  "brand-partnerships": "Brand Partnerships",
};

export function getSocialProfile(platform: SocialPlatform): SocialProfile {
  return socialProfiles.find((profile) => profile.id === platform)!;
}

export function filterSocialPosts(platform: SocialPlatform | "all"): SocialPost[] {
  if (platform === "all") return socialPosts;
  return socialPosts.filter((post) => post.platform === platform);
}
