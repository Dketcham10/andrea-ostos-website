/** Append affiliate tracking params to partner URLs */
export function affiliateLink(url: string, source = "shop"): string {
  if (url.startsWith("#")) return url;
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("ref", "andreaostos");
    parsed.searchParams.set("utm_source", source);
    parsed.searchParams.set("utm_medium", "affiliate");
    return parsed.toString();
  } catch {
    return url;
  }
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function getPromoTimeLeft(endsAt: string): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
} {
  const diff = new Date(endsAt).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, expired: false };
}
