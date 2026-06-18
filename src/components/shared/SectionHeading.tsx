"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs uppercase tracking-[0.25em] mb-4 font-medium",
            light ? "text-gold" : "text-green"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "display-heading text-4xl md:text-5xl lg:text-6xl font-light leading-tight",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-white/70" : "text-charcoal/60"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
