export type SocialPlatform = "youtube" | "instagram" | "tiktok" | "x" | "threads";

export type SocialMetricType = "views" | "likes" | "impressions";

export interface SocialProfile {
  id: SocialPlatform;
  name: string;
  handle: string;
  url: string;
  followers: number;
  accent: string;
}

export interface SocialPost {
  id: string;
  title: string;
  excerpt: string;
  platform: SocialPlatform;
  url: string;
  image: string;
  publishedAt: string;
  metricValue: number;
  metricType: SocialMetricType;
  popularityScore: number;
  topic: "travel" | "golf" | "lifestyle" | "behind-the-scenes" | "brand-partnerships";
}
