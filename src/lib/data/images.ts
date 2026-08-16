/** Verified Unsplash photo IDs — all return HTTP 200 as of project setup. */
const BASE = "https://images.unsplash.com";

export function img(
  photoId: string,
  width = 1200,
  height?: number
): string {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(width),
    q: "80",
  });
  if (height) params.set("h", String(height));
  return `${BASE}/${photoId}?${params.toString()}`;
}

/** Named, verified images for the site */
export const images = {
  // Golf
  golfHero: img("photo-1596727147705-61a532a659bd", 1920, 1080),
  golfSwing: img("photo-1763917379121-91130139aca0", 1200, 800),
  golfCourse: img("photo-1596727147705-61a532a659bd", 1200, 800),
  golfWide: img("photo-1596727147705-61a532a659bd", 1200, 800),
  golfBunker: img("photo-1698426002572-01af3df03c13", 1200, 800),
  stAndrews: img("photo-1687291134396-304d837a1d65", 1200, 800),
  desertGolf: img("photo-1671904942522-8e2a0dbb709f", 1200, 800),

  // Social content thumbnails
  capeTown: img("photo-1770553129625-9a0803c9e645", 1200, 800),
  safari: img("photo-1559596657-7d68cf82bb18", 1200, 800),
  morningCoffee: img("photo-1544787219-7f47ccb76574", 1200, 800),

  // Mexico & Americas
  mexicoCoast: img("photo-1518638150340-f706e86654de", 1200, 800),
  mexicoBeach: img("photo-1507525428034-b723cf961d3e", 1200, 800),

  // Global travel
  dubai: img("photo-1512453979798-5ea266f8880c", 1200, 800),
  tokyo: img("photo-1540959733332-eab4deabeeaf", 1200, 800),
  santorini: img("photo-1613395877344-13d4a8e0d49e", 1200, 800),
  paris: img("photo-1502602898657-3e91760cbb34", 1200, 800),
  bali: img("photo-1523906834658-6e24ef2386f9", 1200, 800),
  alps: img("photo-1464822759023-fed622ff2c3b", 1200, 800),
  mountains: img("photo-1506905925346-21bda4d32df4", 1200, 800),
  roadTrip: img("photo-1469854523086-cc02fe5d8800", 1200, 800),
  adventure: img("photo-1551632811-561732d1e306", 1200, 800),
  forest: img("photo-1500530855697-b586d89ba3ee", 1200, 800),
  ocean: img("photo-1544551763-46a013bb70d5", 1200, 800),
  travelFlat: img("photo-1488646953014-85cb44e25828", 1200, 800),

  // Luxury & lifestyle
  resort: img("photo-1566073771259-6a8506099945", 1200, 800),
  resortPool: img("photo-1582719508461-905c673771fd", 1200, 800),
  spa: img("photo-1571896349842-33c89424de2d", 1200, 800),
  hotel: img("photo-1582719478250-c89cae4dc85b", 1200, 800),

  // Brand & lifestyle
  airplane: img("photo-1436491865332-7a61a109cc05", 1200, 800),
  fitness: img("photo-1518611012118-696072aa579a", 1200, 800),
  wellness: img("photo-1571019614242-c5c5dee9f50b", 1200, 800),
  apparel: img("photo-1518611012118-696072aa579a", 1200, 800),
  social: img("photo-1605649487212-47bdab064df7", 1200, 800),
  stadium: img("photo-1564507592333-c60657eea523", 1200, 800),
  nature: img("photo-1470071459604-3b5ec3a7fe05", 1200, 800),
} as const;

export type ImageKey = keyof typeof images;

export const defaultFallback = images.golfHero;

/** Size presets for common layouts */
export const sized = {
  thumb: (key: ImageKey) => img(extractId(images[key]), 600, 400),
  card: (key: ImageKey) => img(extractId(images[key]), 800, 600),
  hero: (key: ImageKey) => img(extractId(images[key]), 1920, 1080),
  full: (key: ImageKey) => images[key],
};

function extractId(url: string): string {
  const match = url.match(/photo-[a-z0-9-]+/);
  return match?.[0] ?? "photo-1596727147705-61a532a659bd";
}
