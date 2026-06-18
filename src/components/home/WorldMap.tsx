"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star, X } from "lucide-react";
import { SiteImage } from "@/components/shared/SiteImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { destinations } from "@/lib/data/destinations";
import type { Destination } from "@/types";

function latLngToXY(lat: number, lng: number, width: number, height: number) {
  const x = ((lng + 180) / 360) * width;
  const y = ((90 - lat) / 180) * height;
  return { x, y };
}

export function WorldMap() {
  const [selected, setSelected] = useState<Destination | null>(null);
  const mapW = 1000;
  const mapH = 500;

  return (
    <section id="world-map" className="section-padding bg-charcoal overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Global Adventures"
          title="The World Is My Fairway"
          subtitle="Explore countries visited, courses played, resorts reviewed, and travel partnerships around the globe."
          light
          align="center"
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="relative aspect-[2/1] rounded-2xl overflow-hidden border border-white/10">
            <svg
              viewBox={`0 0 ${mapW} ${mapH}`}
              className="h-full w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2d6a4f" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width={mapW} height={mapH} fill="#1a1a1a" />
              <rect width={mapW} height={mapH} fill="url(#mapGlow)" />

              {/* Simplified continent shapes */}
              <path
                d="M150,120 Q200,80 280,100 Q350,90 400,130 Q420,180 380,220 Q300,250 220,230 Q160,200 150,120"
                fill="#2d2d2d"
                opacity="0.8"
              />
              <path
                d="M420,100 Q500,70 580,90 Q650,80 720,120 Q780,150 800,200 Q780,280 700,300 Q600,320 500,280 Q420,240 420,100"
                fill="#2d2d2d"
                opacity="0.8"
              />
              <path
                d="M480,280 Q540,260 600,290 Q650,320 680,380 Q660,440 580,450 Q500,440 480,380 Q470,330 480,280"
                fill="#2d2d2d"
                opacity="0.8"
              />
              <path
                d="M720,120 Q780,100 850,130 Q920,160 940,220 Q900,280 820,290 Q740,270 720,200 Q710,160 720,120"
                fill="#2d2d2d"
                opacity="0.8"
              />
              <path
                d="M820,320 Q870,300 920,340 Q940,400 900,440 Q840,460 800,420 Q790,370 820,320"
                fill="#2d2d2d"
                opacity="0.8"
              />

              {/* Grid lines */}
              {[200, 300, 400].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2={mapW}
                  y2={y}
                  stroke="#ffffff"
                  strokeOpacity="0.03"
                />
              ))}
              {[250, 500, 750].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1="0"
                  x2={x}
                  y2={mapH}
                  stroke="#ffffff"
                  strokeOpacity="0.03"
                />
              ))}

              {destinations.map((dest, i) => {
                const { x, y } = latLngToXY(dest.lat, dest.lng, mapW, mapH);
                const isSelected = selected?.id === dest.id;
                return (
                  <g key={dest.id}>
                    {isSelected && (
                      <circle
                        cx={x}
                        cy={y}
                        r="20"
                        fill="#c9a962"
                        opacity="0.2"
                        className="animate-pulse"
                      />
                    )}
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? 8 : 6}
                      fill={isSelected ? "#c9a962" : "#2d6a4f"}
                      stroke="#fafafa"
                      strokeWidth="2"
                      className="cursor-pointer transition-all hover:fill-gold"
                      onClick={() => setSelected(dest)}
                    />
                    <text
                      x={x}
                      y={y - 14}
                      textAnchor="middle"
                      fill="#fafafa"
                      fontSize="10"
                      opacity={isSelected ? 1 : 0}
                      className="pointer-events-none transition-opacity"
                    >
                      {dest.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="absolute bottom-4 left-4 flex gap-4 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-green" />
                Course
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-gold" />
                Partnership
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-sand" />
                Resort
              </span>
            </div>
          </div>

          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="absolute top-4 right-4 w-80 max-w-[calc(100%-2rem)] rounded-2xl glass overflow-hidden shadow-2xl"
              >
                <div className="relative h-36">
                  <SiteImage
                    src={selected.image}
                    alt={selected.name}
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="absolute top-2 right-2 rounded-full bg-charcoal/60 p-1.5 text-white hover:bg-charcoal"
                  >
                    <X size={14} />
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="display-heading text-xl text-white">
                        {selected.name}
                      </h3>
                      <p className="text-sm text-white/60 flex items-center gap-1 mt-1">
                        <MapPin size={12} />
                        {selected.country}
                      </p>
                    </div>
                    {selected.rating && (
                      <div className="flex items-center gap-1 text-gold text-sm">
                        <Star size={14} fill="currentColor" />
                        {selected.rating}
                      </div>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed line-clamp-3">
                    {selected.story}
                  </p>
                  {selected.course && (
                    <p className="mt-2 text-xs text-green-light">
                      ⛳ {selected.course}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "34", label: "Countries" },
            { value: "127", label: "Courses Played" },
            { value: "48", label: "Resorts Visited" },
            { value: "22", label: "Brand Partners" },
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
