import type { MapCourse, MapRegion } from "@/types/map";

type Seed = [name: string, city: string, lat: number, lng: number];

function addCourses(
  region: MapRegion,
  country: string,
  seeds: Seed[],
  idPrefix: string
): MapCourse[] {
  return seeds.map(([name, city, lat, lng], i) => ({
    id: `${idPrefix}-${i + 1}`,
    name,
    city,
    country,
    region,
    lat,
    lng,
  }));
}

const mexicoCourses: Seed[] = [
  ["Quivira Golf Club", "Los Cabos", 22.88, -109.98],
  ["Diamante Dunes", "Los Cabos", 22.91, -109.85],
  ["Cabo del Sol", "Los Cabos", 22.9, -109.83],
  ["El Camaleón Mayakoba", "Playa del Carmen", 20.69, -87.02],
  ["Iberostar Playa Paraíso", "Riviera Maya", 20.65, -87.05],
  ["Puerto Los Cabos", "San José del Cabo", 23.06, -109.7],
  ["Vidanta Vallarta", "Nuevo Vallarta", 20.72, -105.28],
  ["Vista Vallarta Club de Golf", "Puerto Vallarta", 20.65, -105.25],
  ["Tres Marias Golf Club", "Mazatlán", 23.22, -106.45],
  ["Estrella del Mar", "Mazatlán", 23.18, -106.52],
  ["Club de Golf Mexico", "Mexico City", 19.28, -99.25],
  ["Club Campestre Bosques", "Mexico City", 19.38, -99.28],
  ["Hacienda San Miguel", "Querétaro", 20.58, -100.38],
  ["Las Mañanitas Golf Club", "Cuernavaca", 18.92, -99.22],
  ["La Loma Club de Golf", "San Luis Potosí", 22.15, -101.0],
  ["Club Campestre Monterrey", "Monterrey", 25.65, -100.35],
  ["Las Torres Golf Club", "Monterrey", 25.72, -100.28],
  ["Club Campestre Tampico", "Tampico", 22.28, -97.85],
  ["Isla del Padre Country Club", "Boca del Río", 19.12, -96.12],
  ["La Herradura Golf Club", "Veracruz", 19.18, -96.08],
  ["Tres Vidas Golf Club", "Acapulco", 16.78, -99.82],
  ["Turtle Dunes Golf Club", "Acapulco", 16.82, -99.88],
  ["La Escondida Golf Club", "Puebla", 19.05, -98.18],
  ["Club de Golf Pachuca", "Pachuca", 20.12, -98.75],
  ["Chapultepec Golf Club", "Mexico City", 19.42, -99.2],
  ["Club de Golf Santa Anita", "Guadalajara", 20.62, -103.42],
  ["El Tigre Club de Golf", "Nuevo Vallarta", 20.75, -105.32],
  ["Flamingos Golf Club", "Puerto Vallarta", 20.58, -105.25],
  ["Marival Golf Club", "Nuevo Vallarta", 20.7, -105.3],
  ["Masters Course at Moon Palace", "Cancún", 21.05, -86.78],
  ["Riviera Cancún Golf", "Cancún", 21.12, -86.82],
  ["Hard Rock Golf Club", "Riviera Maya", 20.62, -87.08],
  ["Bahia Principe Golf Club", "Riviera Maya", 20.58, -87.12],
  ["Gran Coyote Golf Riviera Maya", "Playa del Carmen", 20.72, -87.0],
  ["Mayan Palace Golf Club", "Acapulco", 16.85, -99.9],
];

const usCourses: Seed[] = [
  ["Pebble Beach Golf Links", "Pebble Beach, CA", 36.57, -121.95],
  ["Torrey Pines South", "La Jolla, CA", 32.9, -117.25],
  ["Spyglass Hill", "Pebble Beach, CA", 36.58, -121.94],
  ["The Riviera Country Club", "Pacific Palisades, CA", 34.05, -118.5],
  ["Los Angeles Country Club", "Los Angeles, CA", 34.07, -118.42],
  ["TPC Harding Park", "San Francisco, CA", 37.72, -122.49],
  ["Olympic Club Lake", "San Francisco, CA", 37.72, -122.48],
  ["Pasatiempo Golf Club", "Santa Cruz, CA", 36.98, -122.02],
  ["Bandon Dunes", "Bandon, OR", 43.19, -124.39],
  ["Pacific Dunes", "Bandon, OR", 43.18, -124.4],
  ["Chambers Bay", "University Place, WA", 47.2, -122.57],
  ["Pinehurst No. 2", "Pinehurst, NC", 35.195, -79.47],
  ["Kiawah Island Ocean Course", "Kiawah Island, SC", 32.61, -80.08],
  ["Harbour Town Golf Links", "Hilton Head, SC", 32.14, -80.79],
  ["Sea Island Seaside", "St. Simons Island, GA", 31.18, -81.35],
  ["East Lake Golf Club", "Atlanta, GA", 33.74, -84.31],
  ["Augusta National", "Augusta, GA", 33.5, -82.02],
  ["TPC Sawgrass Stadium", "Ponte Vedra Beach, FL", 30.2, -81.39],
  ["Bay Hill Club & Lodge", "Orlando, FL", 28.47, -81.51],
  ["Trump National Doral Blue Monster", "Miami, FL", 25.81, -80.34],
  ["Seminole Golf Club", "Juno Beach, FL", 26.88, -80.05],
  ["Streamsong Red", "Bowling Green, FL", 27.83, -82.0],
  ["Whistling Straits Straits", "Kohler, WI", 43.83, -87.73],
  ["Erin Hills", "Erin, WI", 43.25, -88.35],
  ["Medinah Country Club No. 3", "Medinah, IL", 41.97, -88.05],
  ["Olympia Fields North", "Olympia Fields, IL", 41.51, -87.69],
  ["Bethpage Black", "Farmingdale, NY", 40.74, -73.48],
  ["Shinnecock Hills", "Southampton, NY", 40.9, -72.44],
  ["National Golf Links", "Southampton, NY", 40.9, -72.42],
  ["Merion Golf Club East", "Ardmore, PA", 40.0, -75.31],
  ["Oakmont Country Club", "Oakmont, PA", 40.52, -79.83],
  ["Congressional Blue", "Bethesda, MD", 39.01, -77.07],
  ["TPC Potomac at Avenel Farm", "Potomac, MD", 39.02, -77.2],
  ["Muirfield Village", "Dublin, OH", 40.14, -83.16],
  ["Firestone South", "Akron, OH", 41.02, -81.5],
  ["Valhalla Golf Club", "Louisville, KY", 38.27, -85.52],
  ["Southern Hills Country Club", "Tulsa, OK", 36.1, -95.95],
  ["Colonial Country Club", "Fort Worth, TX", 32.72, -97.36],
  ["Dallas National Golf Club", "Dallas, TX", 32.65, -96.88],
  ["TPC San Antonio Oaks", "San Antonio, TX", 29.6, -98.62],
  ["Barton Creek Fazio Foothills", "Austin, TX", 30.28, -97.87],
  ["TPC Scottsdale Stadium", "Scottsdale, AZ", 33.61, -111.91],
  ["We-Ko-Pa Saguaro", "Fort McDowell, AZ", 33.58, -111.55],
  ["Desert Mountain Cochise", "Scottsdale, AZ", 33.78, -111.85],
  ["Shadow Creek", "North Las Vegas, NV", 36.25, -115.15],
  ["Wolf Creek Golf Club", "Mesquite, NV", 36.8, -114.07],
  ["Sand Hollow Golf Resort", "Hurricane, UT", 37.12, -113.38],
  ["Promontory Painted Valley", "Park City, UT", 40.68, -111.45],
  ["Cherry Hills Country Club", "Cherry Hills Village, CO", 39.63, -104.95],
  ["Castle Pines Golf Club", "Castle Rock, CO", 39.45, -104.88],
  ["Kapalua Plantation", "Kapalua, HI", 21.0, -156.65],
  ["Mauna Kea Golf Course", "Kohala Coast, HI", 19.99, -155.83],
  ["Wailea Emerald", "Wailea, HI", 20.69, -156.44],
  ["Prairie Dunes", "Hutchinson, KS", 38.08, -97.92],
  ["Interlachen Country Club", "Edina, MN", 44.91, -93.38],
  ["Riviera Country Club", "Minneapolis, MN", 44.88, -93.35],
  ["Scioto Country Club", "Columbus, OH", 40.08, -83.05],
  ["Oakland Hills South", "Bloomfield Hills, MI", 42.54, -83.28],
  ["French Lick Resort Pete Dye", "French Lick, IN", 38.55, -86.62],
  ["Bellerive Country Club", "St. Louis, MO", 38.63, -90.45],
];

const europeCourses: Seed[] = [
  ["Old Course at St Andrews", "St Andrews, Scotland", 56.34, -2.8],
  ["Royal Portrush Dunluce", "Portrush, Northern Ireland", 55.2, -6.65],
  ["Ballybunion Old Course", "Ballybunion, Ireland", 52.51, -9.47],
  ["Real Club Valderrama", "Sotogrande, Spain", 36.29, -5.28],
  ["Le Golf National", "Saint-Quentin-en-Yvelines, France", 48.73, 2.07],
];

export const mapCourses: MapCourse[] = [
  ...addCourses("mexico", "Mexico", mexicoCourses, "mx"),
  ...addCourses("us", "United States", usCourses, "us"),
  ...addCourses("europe", "Europe", europeCourses, "eu"),
];

export const mapStats = {
  total: mapCourses.length,
  mexico: mapCourses.filter((c) => c.region === "mexico").length,
  us: mapCourses.filter((c) => c.region === "us").length,
  europe: mapCourses.filter((c) => c.region === "europe").length,
};

export function getMapCourseById(id: string): MapCourse | undefined {
  return mapCourses.find((c) => c.id === id);
}

export function filterMapCourses(region: MapRegion | "all"): MapCourse[] {
  if (region === "all") return mapCourses;
  return mapCourses.filter((c) => c.region === region);
}

/** Short story snippets for featured clicks */
export function getCourseStory(course: MapCourse): string {
  const stories: Record<MapRegion, string> = {
    mexico:
      "From desert links in Baja to jungle fairways in Riviera Maya — Mexico will always be home.",
    us: "From Pacific cliffs to desert canyons — every round in America tells a different story.",
    europe:
      "The cathedrals of golf. History, wind, and fairways that changed the game forever.",
  };
  return `${course.name} in ${course.city} — ${stories[course.region]}`;
}
