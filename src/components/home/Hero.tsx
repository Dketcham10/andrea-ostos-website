"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { siteConfig } from "@/lib/data/site";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #006847 0%, #006847 33.33%, #ffffff 33.33%, #ffffff 66.66%, #CE1126 66.66%, #CE1126 100%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-charcoal/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/85" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 text-xs uppercase tracking-[0.35em] text-gold font-medium"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="display-heading max-w-5xl text-5xl font-light leading-[1.1] md:text-7xl lg:text-8xl"
        >
          {siteConfig.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl font-light"
        >
          {siteConfig.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button href="/partnerships#inquiry" variant="secondary" size="lg">
            Work With Me
          </Button>
          <Button href="/travel" variant="outline" size="lg">
            Explore My Journey
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#world-map"
            className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
