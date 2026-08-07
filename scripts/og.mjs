// Renders public/og.png from scripts/og/template.html, filled with the live
// values in src/data/site.ts. Run after changing role, tagline or site URL —
// the card bakes that text into pixels, so editing site.ts alone leaves the
// social preview stale.
//
//   node scripts/og.mjs
//
// Requires Google Chrome (headless screenshot). No npm dependencies.

import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const CHROME =
  process.env.CHROME_PATH ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

/** Pull a top-level string field out of the profile object in site.ts. */
function field(source, name) {
  const match = source.match(new RegExp(`\\b${name}:\\s*\\n?\\s*"([^"]+)"`));
  if (!match) throw new Error(`Could not read profile.${name} from site.ts`);
  return match[1];
}

const site = readFileSync(join(root, "src/data/site.ts"), "utf8");
const profile = site.slice(site.indexOf("export const profile"));

const config = readFileSync(join(root, "astro.config.mjs"), "utf8");
const url = (config.match(/site:\s*'([^']+)'/)?.[1] ?? "").replace(
  /^https?:\/\//,
  "",
);

const html = readFileSync(join(root, "scripts/og/template.html"), "utf8")
  .replace("{{NAME}}", field(profile, "name"))
  .replace("{{ROLE}}", field(profile, "role"))
  .replace("{{TAGLINE}}", field(profile, "tagline"))
  .replace("{{URL}}", url);

const work = mkdtempSync(join(tmpdir(), "og-"));
const page = join(work, "og.html");
const out = join(root, "public/og.png");

try {
  writeFileSync(page, html);
  execFileSync(
    CHROME,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--window-size=1200,630",
      // Google Fonts must load before the snapshot.
      "--virtual-time-budget=8000",
      `--screenshot=${out}`,
      `file://${page}`,
    ],
    { stdio: "ignore" },
  );
  console.log(`Wrote ${out} — ${field(profile, "role")}`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
