export type ContentCategory =
  | "travel"
  | "golf"
  | "lifestyle"
  | "behind-the-scenes"
  | "brand-partnerships";

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  lat: number;
  lng: number;
  course?: string;
  resort?: string;
  image: string;
  video?: string;
  story: string;
  tips: string[];
  rating?: number;
  type: "course" | "resort" | "partnership" | "adventure";
}

export interface ContentItem {
  id: string;
  title: string;
  category: ContentCategory;
  image: string;
  excerpt: string;
  date: string;
  platform?: "youtube" | "instagram" | "blog";
  url?: string;
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  logo: string;
  logoImage: string;
  logoImageCard?: string;
  logoBackground?: string;
  metric?: string;
  description: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface CourseReview {
  id: string;
  name: string;
  location: string;
  country: string;
  rating: number;
  votes: number;
  image: string;
  review: string;
}
