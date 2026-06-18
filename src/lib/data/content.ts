import type { ContentItem, Milestone, CourseReview, Partner } from "@/types";
import { sized } from "@/lib/data/images";

export const contentFeed: ContentItem[] = [
  {
    id: "1",
    title: "48 Hours in St Andrews",
    category: "travel",
    image: sized.card("golfCourse"),
    excerpt: "From the Swilcan Bridge to the best fish & chips in Fife.",
    date: "2026-05-12",
    platform: "youtube",
  },
  {
    id: "2",
    title: "Driver Tips for More Distance",
    category: "golf",
    image: sized.card("golfSwing"),
    excerpt: "Three simple changes that added 15 yards to my drive.",
    date: "2026-05-08",
    platform: "instagram",
  },
  {
    id: "3",
    title: "Behind the Scenes: Dubai Campaign",
    category: "behind-the-scenes",
    image: sized.card("dubai"),
    excerpt: "What it takes to shoot a luxury brand campaign on course.",
    date: "2026-04-28",
    platform: "blog",
  },
  {
    id: "4",
    title: "Resort Review: COMO Shambhala",
    category: "travel",
    image: sized.card("spa"),
    excerpt: "Wellness, golf, and the ultimate reset in Bali.",
    date: "2026-04-15",
    platform: "blog",
  },
  {
    id: "5",
    title: "Emirates x Andrea Ostos Collection",
    category: "brand-partnerships",
    image: sized.card("airplane"),
    excerpt: "Travel in style — our capsule collection launches this fall.",
    date: "2026-04-01",
    platform: "instagram",
  },
  {
    id: "6",
    title: "Morning Routine on Tour",
    category: "lifestyle",
    image: sized.card("wellness"),
    excerpt: "How I prepare mentally and physically before every round.",
    date: "2026-03-22",
    platform: "youtube",
  },
  {
    id: "7",
    title: "Cape Town Adventure Vlog",
    category: "travel",
    image: sized.card("adventure"),
    excerpt: "Safari, sandbelt golf, and sunset on Table Mountain.",
    date: "2026-03-10",
    platform: "youtube",
  },
  {
    id: "8",
    title: "LPGA Season Preview",
    category: "golf",
    image: sized.card("golfWide"),
    excerpt: "My goals, schedule, and what I'm most excited about.",
    date: "2026-02-28",
    platform: "blog",
  },
  {
    id: "9",
    title: "Regresando a Casa: Golf en México",
    category: "travel",
    image: sized.card("mexicoCoast"),
    excerpt:
      "A homecoming tour of Mexico's finest courses — from Los Cabos to the highlands.",
    date: "2026-02-14",
    platform: "youtube",
  },
];

export const partners: Partner[] = [
  {
    id: "1",
    name: "Titleist",
    category: "Golf Equipment",
    logo: "Titleist",
    campaignImage: sized.card("golfWide"),
    metric: "2.4M campaign impressions",
    description: "Official ball and equipment partner since 2022.",
  },
  {
    id: "2",
    name: "Emirates",
    category: "Airline",
    logo: "Emirates",
    campaignImage: sized.card("airplane"),
    metric: "890K video views",
    description: "Global travel ambassador for luxury golf destinations.",
  },
  {
    id: "3",
    name: "Four Seasons",
    category: "Luxury Resorts",
    logo: "Four Seasons",
    campaignImage: sized.card("resort"),
    metric: "12% booking uplift",
    description: "Resort partner across 8 properties worldwide.",
  },
  {
    id: "4",
    name: "Lululemon",
    category: "Apparel",
    logo: "Lululemon",
    campaignImage: sized.card("fitness"),
    metric: "15K units sold in launch week",
    description: "Co-designed golf & travel capsule collection.",
  },
  {
    id: "5",
    name: "Visit Scotland",
    category: "Tourism Board",
    logo: "Visit Scotland",
    campaignImage: sized.card("golfCourse"),
    metric: "3.1M social reach",
    description: "Official golf tourism ambassador for Scotland.",
  },
  {
    id: "6",
    name: "Visit Mexico",
    category: "Tourism Board",
    logo: "Visit Mexico",
    campaignImage: sized.card("mexicoCoast"),
    metric: "2.8M social reach",
    description:
      "Official ambassador showcasing Mexico's golf and travel destinations.",
  },
  {
    id: "7",
    name: "Whoop",
    category: "Fitness & Wellness",
    logo: "WHOOP",
    campaignImage: sized.card("wellness"),
    metric: "42% engagement rate",
    description: "Performance and recovery partner on tour.",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2018",
    title: "Turned Professional",
    description:
      "Earned LPGA Tour card — one of Mexico's rising stars on golf's biggest stage.",
    image: sized.card("golfWide"),
  },
  {
    year: "2020",
    title: "First Tour Victory",
    description:
      "Breakthrough win at the Portland Classic — a dream realized.",
    image: sized.card("golfSwing"),
  },
  {
    year: "2022",
    title: "1M Followers",
    description:
      "Crossed one million followers across platforms — content meets sport.",
    image: sized.card("social"),
  },
  {
    year: "2023",
    title: "Global Brand Ambassador",
    description:
      "Signed multi-year deals with Emirates and Four Seasons.",
    image: sized.card("dubai"),
  },
  {
    year: "2024",
    title: "30 Countries Played",
    description:
      "Documented golf in 30 countries — The Fairway Passport was born.",
    image: sized.card("travelFlat"),
  },
  {
    year: "2025",
    title: "Top 25 World Ranking",
    description:
      "Career-best ranking while growing the brand to 800K+ followers.",
    image: sized.card("stadium"),
  },
];

export const courseRankings: CourseReview[] = [
  {
    id: "1",
    name: "Old Course at St Andrews",
    location: "St Andrews",
    country: "Scotland",
    rating: 9.8,
    votes: 2847,
    image: sized.thumb("golfCourse"),
    review: "The cathedral of golf. Every golfer must experience this once.",
  },
  {
    id: "2",
    name: "Royal Melbourne (West)",
    location: "Melbourne",
    country: "Australia",
    rating: 9.7,
    votes: 1923,
    image: sized.thumb("roadTrip"),
    review: "Sandbelt perfection. Strategy over power every single hole.",
  },
  {
    id: "3",
    name: "Pebble Beach Golf Links",
    location: "California",
    country: "USA",
    rating: 9.6,
    votes: 3102,
    image: sized.thumb("golfSwing"),
    review: "The most beautiful course in America. Period.",
  },
  {
    id: "4",
    name: "Kasumigaseki Country Club",
    location: "Tokyo",
    country: "Japan",
    rating: 9.5,
    votes: 1456,
    image: sized.thumb("tokyo"),
    review: "Immaculate conditions and rich Olympic history.",
  },
  {
    id: "5",
    name: "Fancourt Links",
    location: "Cape Town",
    country: "South Africa",
    rating: 9.4,
    votes: 987,
    image: sized.thumb("mountains"),
    review: "Mountain views and links-style challenge in one package.",
  },
];

export const tournamentSchedule = [
  {
    date: "Mar 20–23, 2026",
    event: "Founders Cup",
    location: "Phoenix, AZ",
    status: "upcoming" as const,
  },
  {
    date: "Apr 3–6, 2026",
    event: "Chevron Championship",
    location: "The Woodlands, TX",
    status: "upcoming" as const,
  },
  {
    date: "May 15–18, 2026",
    event: "PGA Championship (Content Partner)",
    location: "Charlotte, NC",
    status: "upcoming" as const,
  },
  {
    date: "Feb 8–11, 2026",
    event: "Honda LPGA Thailand",
    location: "Bangkok, Thailand",
    status: "completed" as const,
    result: "T-12",
  },
  {
    date: "Jan 18–21, 2026",
    event: "Hilton Grand Vacations Tournament",
    location: "Orlando, FL",
    status: "completed" as const,
    result: "T-8",
  },
];

export const categoryLabels: Record<string, string> = {
  travel: "Travel",
  golf: "Golf",
  lifestyle: "Lifestyle",
  "behind-the-scenes": "Behind The Scenes",
  "brand-partnerships": "Brand Partnerships",
};
