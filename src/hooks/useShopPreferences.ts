"use client";

import { useCallback, useEffect, useState } from "react";

const FAVORITES_KEY = "fairway-shop-favorites";
const RECENT_KEY = "fairway-shop-recent";
const MAX_RECENT = 8;

export function useShopPreferences() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recent, setRecent] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const storedFav = localStorage.getItem(FAVORITES_KEY);
      const storedRecent = localStorage.getItem(RECENT_KEY);
      if (storedFav) setFavorites(JSON.parse(storedFav));
      if (storedRecent) setRecent(JSON.parse(storedRecent));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const trackView = useCallback((id: string) => {
    setRecent((prev) => {
      const next = [id, ...prev.filter((r) => r !== id)].slice(0, MAX_RECENT);
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { favorites, recent, toggleFavorite, trackView, ready };
}
