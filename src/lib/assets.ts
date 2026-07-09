import fs from "fs";
import path from "path";

/**
 * Server-only asset guard. Given a public path like "/images/case-study.jpg",
 * returns that path only if the file actually exists under /public — otherwise
 * returns undefined so the caller falls back to the labeled Placeholder.
 *
 * This makes real assets genuinely drop-in: add the file and the placeholder
 * swaps automatically, with no code change. It's forgiving about the file
 * extension (.jpg / .jpeg / .png / .webp / .avif), so whatever you drop in works.
 */
const CANDIDATE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

export function existingImage(publicPath?: string): string | undefined {
  if (!publicPath) return undefined;

  const publicDir = path.join(process.cwd(), "public");
  const rel = publicPath.replace(/^\//, "");

  if (fs.existsSync(path.join(publicDir, rel))) return publicPath;

  const withoutExt = rel.replace(/\.[^.]+$/, "");
  for (const ext of CANDIDATE_EXTENSIONS) {
    const candidate = `${withoutExt}${ext}`;
    if (fs.existsSync(path.join(publicDir, candidate))) return `/${candidate}`;
  }

  return undefined;
}
