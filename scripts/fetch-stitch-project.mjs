import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const envPath = resolve(root, ".env");
const envText = readFileSync(envPath, "utf8");
const apiKey = envText.match(/^STITCH_API_KEY=(.+)$/m)?.[1]?.trim();
if (!apiKey) {
  console.error("STITCH_API_KEY not found in .env");
  process.exit(1);
}

const { stitch } = await import("@google/stitch-sdk");

process.env.STITCH_API_KEY = apiKey;

const projects = await stitch.projects();
if (!projects.length) {
  console.log("No Stitch projects found.");
  process.exit(0);
}

projects.sort((a, b) => {
  const ta = Date.parse(a.updateTime ?? a.createTime ?? 0);
  const tb = Date.parse(b.updateTime ?? b.createTime ?? 0);
  return tb - ta;
});

const recent = projects[0];
console.log("Most recent project:");
console.log(JSON.stringify({
  id: recent.id,
  projectId: recent.projectId,
  title: recent.data?.title ?? recent.title,
  updateTime: recent.data?.updateTime ?? recent.updateTime,
}, null, 2));

const screens = await recent.screens();
console.log(`\nScreens (${screens.length}):`);
for (const screen of screens) {
  console.log(JSON.stringify({
    id: screen.id,
    title: screen.data?.title ?? screen.title,
    updateTime: screen.data?.updateTime ?? screen.updateTime,
  }));
}

const outDir = resolve(root, "stitch-reference");
const { mkdirSync } = await import("node:fs");
mkdirSync(outDir, { recursive: true });

const downloaded = await recent.downloadAssets(outDir);
console.log("\nDownloaded assets:");
console.log(JSON.stringify(downloaded, null, 2));
