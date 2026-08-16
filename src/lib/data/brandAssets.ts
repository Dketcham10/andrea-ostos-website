const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function brandAsset(path: string): string {
  return `${basePath}${path}`;
}

export const brandLogos = {
  titleist: brandAsset("/brands/titleist.png"),
  emirates: brandAsset("/brands/emirates.svg"),
  fourSeasons: brandAsset("/brands/four-seasons.svg"),
  fourSeasonsCard: brandAsset("/brands/four-seasons-white.svg"),
  lululemon: brandAsset("/brands/lululemon.svg"),
  lululemonCard: brandAsset("/brands/lululemon-white.svg"),
  whoop: brandAsset("/brands/whoop.svg"),
  whoopCard: brandAsset("/brands/whoop-white.svg"),
} as const;
