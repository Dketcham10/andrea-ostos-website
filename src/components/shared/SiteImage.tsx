"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { defaultFallback } from "@/lib/data/images";
import { withBasePath } from "@/lib/sitePath";

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
  const resolvedFallback = withBasePath(
    typeof fallbackSrc === "string" ? fallbackSrc : defaultFallback
  );
  const resolvedSrc = withBasePath(
    typeof src === "string" ? src || fallbackSrc : defaultFallback
  );
  const [currentSrc, setCurrentSrc] = useState(resolvedSrc);
  const [showPlaceholder, setShowPlaceholder] = useState(!src);

  useEffect(() => {
    const nextSrc =
      typeof src === "string" ? src : typeof fallbackSrc === "string" ? fallbackSrc : defaultFallback;
    setCurrentSrc(withBasePath(nextSrc));
    setShowPlaceholder(typeof src !== "string" || !src);
  }, [src, fallbackSrc]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    onError?.(e);
    if (currentSrc !== resolvedFallback) {
      setCurrentSrc(resolvedFallback);
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
