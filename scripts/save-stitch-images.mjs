import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const envText = readFileSync(resolve(root, ".env"), "utf8");
const apiKey = envText.match(/^STITCH_API_KEY=(.+)$/m)?.[1]?.trim();
if (!apiKey) {
  console.error("STITCH_API_KEY not found in .env");
  process.exit(1);
}

process.env.STITCH_API_KEY = apiKey;

const PROJECT_ID = "1404355359562424874";
const SCREEN_ID = "fd384c293c18477594eb9c47d7675d56";

const IMAGE_MAP = [
  { alt: "CFA Logo Small", name: "logo-nav" },
  { alt: "Watermark", name: "watermark" },
  { alt: "CFA Official Seal", name: "seal-hero" },
  { alt: null, dataAlt: "handshake", name: "about-handshake" },
  { alt: null, dataAlt: "President", name: "president" },
  { alt: null, dataAlt: "General Secretary", name: "secretary" },
  { alt: null, dataAlt: "Treasurer", name: "treasurer" },
  { alt: "CFA Footer Logo", name: "logo-footer" },
];

const { stitch } = await import("@google/stitch-sdk");
const project = stitch.project(PROJECT_ID);
const screen = await project.getScreen(SCREEN_ID);
const raw = screen.data ?? screen;

let htmlUrl = raw?.htmlCode?.downloadUrl;
if (!htmlUrl) {
  const html = await screen.getHtml();
  if (html.startsWith("http")) htmlUrl = html;
  else {
    writeFileSync(resolve(root, "stitch-reference/raw-from-api.html"), html);
    console.error("Could not resolve HTML download URL");
    process.exit(1);
  }
}

const html = await fetch(htmlUrl).then((r) => r.text());
const outDir = resolve(root, "public/images");
mkdirSync(outDir, { recursive: true });

const imgRegex = /<img\b[^>]*>/gi;
const matches = [...html.matchAll(imgRegex)];
const manifest = [];

let mapIndex = 0;
for (const match of matches) {
  const tag = match[0];
  const src = tag.match(/\bsrc="([^"]+)"/)?.[1];
  if (!src?.startsWith("http")) continue;

  const alt = tag.match(/\balt="([^"]*)"/)?.[1] ?? "";
  const dataAlt = tag.match(/\bdata-alt="([^"]*)"/)?.[1] ?? "";

  let mapped = IMAGE_MAP[mapIndex];
  if (!mapped) {
    mapped = { name: `image-${mapIndex + 1}` };
  } else {
    mapIndex++;
  }

  const res = await fetch(src);
  if (!res.ok) {
    console.warn(`Failed to download ${src}: ${res.status}`);
    continue;
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  const contentType = res.headers.get("content-type") ?? "";
  let ext = extname(new URL(src).pathname) || ".png";
  if (!ext || ext === ".") {
    ext = contentType.includes("jpeg") ? ".jpg" : contentType.includes("webp") ? ".webp" : ".png";
  }

  const filename = `${mapped.name}${ext}`;
  const filePath = resolve(outDir, filename);
  writeFileSync(filePath, buffer);

  manifest.push({
    name: mapped.name,
    file: `/images/${filename}`,
    alt: alt || dataAlt.slice(0, 80),
    srcHash: createHash("md5").update(src).digest("hex").slice(0, 8),
  });
  console.log(`Saved ${filename}`);
}

writeFileSync(
  resolve(root, "src/assets/image-manifest.json"),
  JSON.stringify(manifest, null, 2),
);
console.log(`\n${manifest.length} images saved to public/images/`);
