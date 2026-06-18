"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Copy, Check, Heart, ExternalLink } from "lucide-react";
import { SiteImage } from "@/components/shared/SiteImage";
import { images, sized, type ImageKey } from "@/lib/data/images";
import { affiliateLink, copyToClipboard } from "@/lib/shop/utils";
import type { ShopProduct } from "@/types/shop";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: ShopProduct;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
  onView?: (id: string) => void;
  compact?: boolean;
}

export function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
  onView,
  compact,
}: ProductCardProps) {
  const [copied, setCopied] = useState(false);
  const imageSrc =
    images[product.imageKey as ImageKey] ?? sized.card("golfWide");

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.discountCode) {
      const ok = await copyToClipboard(product.discountCode);
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  const handleShop = () => {
    onView?.(product.id);
    window.open(affiliateLink(product.affiliateUrl, `product-${product.id}`), "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-charcoal/5 bg-white shadow-sm transition-all hover:shadow-xl",
        compact && "flex-row md:flex-col"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-sand-light/30",
          compact ? "w-32 shrink-0 md:w-full aspect-square md:aspect-[4/3]" : "aspect-[4/3]"
        )}
      >
        <SiteImage
          src={imageSrc}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.discountPercent && (
          <span className="absolute top-3 left-3 rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-charcoal">
            -{product.discountPercent}%
          </span>
        )}
        {onToggleFavorite && (
          <button
            type="button"
            onClick={() => onToggleFavorite(product.id)}
            className="absolute top-3 right-3 rounded-full bg-white/90 p-2 shadow-sm transition-transform hover:scale-110"
            aria-label={isFavorite ? "Remove from favorites" : "Save to favorites"}
          >
            <Heart
              size={16}
              className={isFavorite ? "fill-terracotta text-terracotta" : "text-charcoal/40"}
            />
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] uppercase tracking-wider text-green font-medium">
          {product.brand}
        </p>
        <h3 className="display-heading mt-1 text-lg font-light leading-snug">
          {product.name}
        </h3>
        {product.price && (
          <p className="mt-1 text-sm text-charcoal/50">{product.price}</p>
        )}
        {!compact && (
          <p className="mt-2 text-sm text-charcoal/60 leading-relaxed line-clamp-2">
            {product.review}
          </p>
        )}
        <p className="mt-2 text-xs text-charcoal/50 italic line-clamp-2">
          &ldquo;{product.whySheUsesIt}&rdquo;
        </p>

        <div className="mt-auto pt-4 flex flex-col gap-2">
          {product.discountCode && (
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center justify-between rounded-lg bg-sand-light/60 px-3 py-2 text-xs font-medium transition-colors hover:bg-sand-light"
            >
              <span>
                Code: <strong className="text-green">{product.discountCode}</strong>
              </span>
              {copied ? (
                <Check size={14} className="text-green" />
              ) : (
                <Copy size={14} className="text-charcoal/40" />
              )}
            </button>
          )}
          <button
            type="button"
            onClick={handleShop}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-green-deep"
          >
            Shop Now
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
