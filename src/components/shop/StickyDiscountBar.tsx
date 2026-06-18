"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ExternalLink, X } from "lucide-react";
import { partnerDiscounts } from "@/lib/data/shop";
import { affiliateLink, copyToClipboard } from "@/lib/shop/utils";

export function StickyDiscountBar() {
  const [visible, setVisible] = useState(true);
  const featured = partnerDiscounts.find((d) => d.featured) ?? partnerDiscounts[0];
  const [copied, setCopied] = useState(false);

  if (!visible) return null;

  const handleCopy = async () => {
    const ok = await copyToClipboard(featured.code);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        exit={{ y: -60 }}
        className="fixed top-[72px] left-0 right-0 z-40 bg-green-deep text-white shadow-lg"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 md:px-8">
          <p className="text-xs md:text-sm truncate">
            <span className="text-gold font-medium">{featured.brand}:</span>{" "}
            {featured.savings} with code{" "}
            <strong className="font-mono">{featured.code}</strong>
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-xs font-medium text-charcoal hover:bg-gold-light transition-colors"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? "Copied!" : "Copy Code"}
            </button>
            <a
              href={affiliateLink(featured.affiliateUrl, "sticky-bar")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 rounded-full border border-white/30 px-3 py-1.5 text-xs hover:bg-white/10 transition-colors"
            >
              Shop
              <ExternalLink size={12} />
            </a>
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="p-1 text-white/50 hover:text-white"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
