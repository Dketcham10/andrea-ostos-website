"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Copy, Check } from "lucide-react";
import { bagItems } from "@/lib/data/shop";
import { affiliateLink, copyToClipboard } from "@/lib/shop/utils";
import { cn } from "@/lib/utils";

const bagLayout: { id: string; top: string; left: string }[] = [
  { id: "driver", top: "8%", left: "50%" },
  { id: "fairway", top: "22%", left: "28%" },
  { id: "hybrid", top: "22%", left: "72%" },
  { id: "irons", top: "42%", left: "50%" },
  { id: "wedges", top: "58%", left: "30%" },
  { id: "putter", top: "58%", left: "70%" },
  { id: "ball", top: "78%", left: "50%" },
];

export function BagExperience() {
  const [active, setActive] = useState(bagItems[0].id);
  const [copied, setCopied] = useState(false);
  const selected = bagItems.find((b) => b.id === active) ?? bagItems[0];

  const handleCopy = async () => {
    if (selected.discountCode) {
      const ok = await copyToClipboard(selected.discountCode);
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
      <div className="relative mx-auto aspect-square w-full max-w-md">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-green/20 to-green-deep/40 blur-3xl" />
        <div className="relative h-full w-full rounded-3xl border border-charcoal/10 bg-gradient-to-b from-sand-light/80 to-white p-8 shadow-inner">
          <div className="absolute inset-x-8 top-4 h-12 rounded-t-2xl bg-charcoal/10" />
          <div className="relative h-full pt-16">
            {bagLayout.map((pos) => {
              const item = bagItems.find((b) => b.id === pos.id);
              if (!item) return null;
              const isActive = active === pos.id;
              return (
                <button
                  key={pos.id}
                  type="button"
                  onClick={() => setActive(pos.id)}
                  style={{ top: pos.top, left: pos.left }}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-xs font-medium transition-all duration-300",
                    isActive
                      ? "bg-green text-white shadow-lg scale-110 z-10"
                      : "bg-white text-charcoal border border-charcoal/10 hover:border-green hover:text-green shadow-sm"
                  )}
                >
                  {item.slot}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-charcoal/5 bg-white p-8 shadow-lg"
        >
          <p className="text-xs uppercase tracking-wider text-gold font-medium">
            {selected.slot}
          </p>
          <h3 className="display-heading mt-2 text-2xl md:text-3xl font-light">
            {selected.name}
          </h3>
          <p className="mt-1 text-sm text-green font-medium">{selected.brand}</p>
          <p className="mt-1 text-sm text-charcoal/50">{selected.model}</p>

          <p className="mt-6 text-charcoal/70 leading-relaxed">{selected.why}</p>

          <ul className="mt-4 space-y-2">
            {selected.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-charcoal/60">
                <span className="text-gold mt-0.5">✓</span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {selected.discountCode && (
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/10 px-5 py-3 text-sm font-medium hover:bg-sand-light/50 transition-colors"
              >
                {copied ? <Check size={16} className="text-green" /> : <Copy size={16} />}
                Code: {selected.discountCode}
              </button>
            )}
            <a
              href={affiliateLink(selected.affiliateUrl, `bag-${selected.id}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-medium text-white hover:bg-green-deep transition-colors"
            >
              Shop This Club
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
