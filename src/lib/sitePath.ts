/** Must stay in sync with next.config.ts basePath for GitHub Pages. */
export const GITHUB_PAGES_BASE_PATH = "/andrea-ostos-website";

function detectBasePath(): string {
  if (typeof window === "undefined") return "";

  const { host, pathname } = window.location;
  if (host.endsWith("github.io") && pathname.startsWith(GITHUB_PAGES_BASE_PATH)) {
    return GITHUB_PAGES_BASE_PATH;
  }

  return "";
}

export function siteBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || detectBasePath();
}

/** Prefix local asset paths for GitHub Pages subpath hosting. */
export function withBasePath(path: string | undefined): string {
  if (!path || !path.startsWith("/") || path.startsWith("//")) {
    return path ?? "";
  }

  const base = siteBasePath();
  if (!base) return path;
  if (path.startsWith(`${base}/`)) return path;

  return `${base}${path}`;
}
