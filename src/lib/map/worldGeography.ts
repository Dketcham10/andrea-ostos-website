import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection } from "geojson";
import type { Topology } from "topojson-specification";
import worldTopology from "./world-110m.json";

export const MAP_WIDTH = 1000;
export const MAP_HEIGHT = 500;

const topology = worldTopology as unknown as Topology;
const countries = feature(
  topology,
  topology.objects.countries
) as FeatureCollection;

const projection = geoNaturalEarth1().fitExtent(
  [
    [8, 6],
    [MAP_WIDTH - 8, MAP_HEIGHT - 6],
  ],
  countries
);

const pathGenerator = geoPath(projection);

export const countryPaths = countries.features
  .map((country, index) => ({
    id: String(country.id ?? index),
    d: pathGenerator(country) ?? "",
  }))
  .filter((country) => country.d.length > 0);

export function projectCoordinates(
  lat: number,
  lng: number
): { x: number; y: number } | null {
  const point = projection([lng, lat]);
  if (!point) return null;
  return { x: point[0], y: point[1] };
}

export const regionColors: Record<string, string> = {
  mexico: "#c9a962",
  us: "#2d6a4f",
  europe: "#d4c4a8",
};
