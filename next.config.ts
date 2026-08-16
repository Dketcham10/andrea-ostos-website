import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** Keep in sync with src/lib/sitePath.ts */
const GITHUB_PAGES_BASE_PATH = "/andrea-ostos-website";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? GITHUB_PAGES_BASE_PATH : undefined,
  assetPrefix: isGithubPages ? `${GITHUB_PAGES_BASE_PATH}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? GITHUB_PAGES_BASE_PATH : "",
  },
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
