// GitHub Pages serves project sites under a sub-path (e.g. /<repo>/), so all
// links and assets need that prefix. `next/link` and the router apply basePath
// automatically, but `next/image` string `src` values do NOT — those must be
// prefixed manually with `asset()`. Keep this in sync with `basePath` in
// next.config.ts (both read the same NEXT_PUBLIC_BASE_PATH env var).
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefix a public/static asset path (e.g. "/assets/seal.svg") with basePath. */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
