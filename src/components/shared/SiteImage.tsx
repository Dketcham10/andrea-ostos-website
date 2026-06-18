"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { defaultFallback } from "@/lib/data/images";

interface SiteImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export function SiteImage({
  src,
  alt = "",
  className,
  fallbackSrc = defaultFallback,
  onError,
  ...props
}: SiteImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);
  const [showPlaceholder, setShowPlaceholder] = useState(!src);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    onError?.(e);
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      return;
    }
    setShowPlaceholder(true);
  };

  if (showPlaceholder) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-green-deep via-green to-charcoal text-white/50",
          className
        )}
      >
        <span className="px-4 text-center text-xs uppercase tracking-[0.2em]">
          {alt || "Image"}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={handleError}
      {...props}
    />
  );
}
