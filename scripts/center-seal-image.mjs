import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, "../public/images/seal-hero.png");
const output = input;

const before = await sharp(input).metadata();
console.log("Before:", before.width, "x", before.height);

// Flatten on white, trim tight to artwork, then pad to a perfect square
const trimmed = await sharp(input)
  .flatten({ background: "#ffffff" })
  .trim({ threshold: 24, background: "#ffffff" })
  .toBuffer();

const trimmedMeta = await sharp(trimmed).metadata();
console.log("Trimmed:", trimmedMeta.width, "x", trimmedMeta.height);

const size = Math.max(trimmedMeta.width, trimmedMeta.height);
const padX = Math.floor((size - trimmedMeta.width) / 2);
const padY = Math.floor((size - trimmedMeta.height) / 2);

await sharp(trimmed)
  .extend({
    top: padY,
    bottom: size - trimmedMeta.height - padY,
    left: padX,
    right: size - trimmedMeta.width - padX,
    background: "#ffffff",
  })
  .png()
  .toFile(output);

const after = await sharp(output).metadata();
console.log("After:", after.width, "x", after.height, "(square, centered)");
