export type MapRegion = "mexico" | "us" | "europe";

export interface MapCourse {
  id: string;
  name: string;
  city: string;
  country: string;
  region: MapRegion;
  lat: number;
  lng: number;
}

export interface MapCourseDetail extends MapCourse {
  story: string;
  rating?: number;
}
