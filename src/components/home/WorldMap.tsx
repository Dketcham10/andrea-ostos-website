"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  filterMapCourses,
  getCourseStory,
  mapStats,
} from "@/lib/data/mapCourses";
import {
  countryPaths,
  MAP_HEIGHT,
  MAP_WIDTH,
  projectCoordinates,
  regionColors,
} from "@/lib/map/worldGeography";
import type { MapCourse, MapRegion } from "@/types/map";
import { cn } from "@/lib/utils";

const filters: { id: MapRegion | "all"; label: string }[] = [
  { id: "all", label: "All Courses" },
  { id: "mexico", label: "Mexico" },
  { id: "us", label: "United States" },
  { id: "europe", label: "Europe" },
];

export function WorldMap() {
  const [selected, setSelected] = useState<MapCourse | null>(null);
  const [hovered, setHovered] = useState<MapCourse | null>(null);
  const [filter, setFilter] = useState<MapRegion | "all">("all");

  const visible = useMemo(() => filterMapCourses(filter), [filter]);

  const markers = useMemo(
    () =>
      visible.flatMap((course) => {
        const point = projectCoordinates(course.lat, course.lng);
        if (!point) return [];
        return [{ ...course, ...point }];
      }),
    [visible]
  );

  return (
    <section id="world-map" className="section-padding bg-charcoal overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Global Adventures"
          title="The World Is My Fairway"
          subtitle={`${mapStats.total} courses played across Mexico, the United States, and Europe — click any pin to explore.`}
          light
          align="center"
        />

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setFilter(f.id);
                setSelected(null);
              }}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                filter === f.id
                  ? "bg-gold text-charcoal"
                  : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"
              )}
            >
              {f.label}
              <span className="ml-1.5 opacity-70">
                (
                {f.id === "all"
                  ? mapStats.total
                  : mapStats[f.id as MapRegion]}
                )
              </span>
            </button>
          ))}
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="relative aspect-[2/1] rounded-2xl overflow-hidden border border-white/10 bg-[#08111f] shadow-2xl">
            <svg
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              className="h-full w-full"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="World map showing golf courses played by Andrea Ostos"
            >
              <defs>
                <radialGradient id="mapOceanGlow" cx="50%" cy="48%" r="70%">
                  <stop offset="0%" stopColor="#123047" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#08111f" stopOpacity="1" />
                </radialGradient>
                <filter id="markerGlow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill="url(#mapOceanGlow)" />

              <g>
                {countryPaths.map((country) => (
                  <path
                    key={country.id}
                    d={country.d}
                    fill="#2b3444"
                    stroke="#465066"
                    strokeWidth={0.35}
                  />
                ))}
              </g>

              {markers.map((marker) => {
                const { x, y, ...course } = marker;
                const isSelected = selected?.id === course.id;
                const isHovered = hovered?.id === course.id;
                const color = regionColors[course.region];

                return (
                  <g key={course.id}>
                    {(isSelected || isHovered) && (
                      <circle
                        cx={x}
                        cy={y}
                        r={isSelected ? 12 : 9}
                        fill={color}
                        opacity="0.28"
                        className={isSelected ? "animate-pulse" : undefined}
                      />
                    )}
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? 4.5 : isHovered ? 4 : 2.75}
                      fill={color}
                      stroke="#fafafa"
                      strokeWidth={isSelected ? 1.5 : 1}
                      strokeOpacity={0.95}
                      className="cursor-pointer"
                      filter={isSelected ? "url(#markerGlow)" : undefined}
                      onMouseEnter={() => setHovered(course)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => setSelected(course)}
                    />
                  </g>
                );
              })}
            </svg>

            <AnimatePresence>
              {hovered && !selected && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="pointer-events-none absolute top-4 left-4 rounded-lg glass px-3 py-2 text-xs text-white max-w-xs"
                >
                  <p className="font-medium">{hovered.name}</p>
                  <p className="text-white/60">{hovered.city}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-4 left-4 flex flex-wrap gap-4 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#c9a962]" />
                Mexico ({mapStats.mexico})
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#2d6a4f]" />
                United States ({mapStats.us})
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#d4c4a8]" />
                Europe ({mapStats.europe})
              </span>
            </div>

            <div className="absolute bottom-4 right-4 text-xs text-white/40">
              Showing {visible.length} of {mapStats.total} courses
            </div>
          </div>

          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="absolute top-4 right-4 w-80 max-w-[calc(100%-2rem)] rounded-2xl glass overflow-hidden shadow-2xl z-10"
              >
                <div className="relative h-28 bg-gradient-to-br from-green-deep to-charcoal flex items-end p-5">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 70%, ${regionColors[selected.region]}, transparent)`,
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="absolute top-2 right-2 rounded-full bg-charcoal/60 p-1.5 text-white hover:bg-charcoal"
                  >
                    <X size={14} />
                  </button>
                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-wider text-gold">
                      {selected.country}
                    </p>
                    <h3 className="display-heading text-xl text-white leading-tight">
                      {selected.name}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-white/60 flex items-center gap-1 mb-3">
                    <MapPin size={12} />
                    {selected.city}
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {getCourseStory(selected)}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: String(mapStats.mexico), label: "Courses in Mexico" },
            { value: String(mapStats.us), label: "Courses in the US" },
            { value: String(mapStats.europe), label: "Courses in Europe" },
            { value: String(mapStats.total), label: "Total Courses Played" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="display-heading text-4xl text-gold font-light">
                {stat.value}
              </p>
              <p className="text-sm text-white/50 mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
