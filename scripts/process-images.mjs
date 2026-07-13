import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("images");
const OUT = path.resolve("public/images");

const jobs = [
  { src: "home page hero section.jpeg", out: "hero.jpg", maxW: 1400 },
  { src: "club.jpeg", out: "gallery-shisha-lounge.jpg", maxW: 1000 },
  { src: "club2.jpeg", out: "gallery-live-crowd.jpg", maxW: 1000 },
  { src: "club3.jpeg", out: "gallery-bottle-service.jpg", maxW: 1000 },
  { src: "club4.jpeg", out: "gallery-dance-portrait.jpg", maxW: 1000 },
  { src: "club5.jpeg", out: "gallery-cheers-shots.jpg", maxW: 1000 },
  { src: "club6.jpeg", out: "gallery-hookah-drinks.jpg", maxW: 1000 },
  { src: "event 1.jpeg", out: "event-homowo-bash.jpg", maxW: 900 },
  { src: "kebab.jpeg", out: "menu-suya-skewers.jpg", maxW: 1200 },
  { src: "turnt.jpeg", out: "gallery-shot-celebration.jpg", maxW: 1000 },
  { src: "walako.jpeg", out: "gallery-matchday-jersey.jpg", maxW: 900 },
  { src: "wk.jpeg", out: "bar-counter-neon.jpg", maxW: 1200 },
];

await mkdir(OUT, { recursive: true });

const manifest = {};

for (const job of jobs) {
  const inputPath = path.join(SRC, job.src);
  const outputPath = path.join(OUT, job.out);

  const pipeline = sharp(inputPath).rotate().resize({
    width: job.maxW,
    withoutEnlargement: true,
  });

  const buffer = await pipeline
    .clone()
    .jpeg({ quality: 80, mozjpeg: true, progressive: true })
    .toBuffer();

  await writeFile(outputPath, buffer);
  const meta = await sharp(buffer).metadata();

  const blurBuffer = await sharp(inputPath)
    .rotate()
    .resize(16)
    .jpeg({ quality: 40 })
    .toBuffer();

  manifest[job.out] = {
    width: meta.width,
    height: meta.height,
    blurDataURL: `data:image/jpeg;base64,${blurBuffer.toString("base64")}`,
  };

  console.log(
    `${job.src} -> ${job.out}: ${meta.width}x${meta.height}, ${(buffer.length / 1024).toFixed(0)}KB`
  );
}

// Logo: keep as PNG, optimize
const logoBuffer = await sharp(path.join(SRC, "Logo.png"))
  .png({ quality: 90, compressionLevel: 9 })
  .toBuffer();
await writeFile(path.join(OUT, "logo.png"), logoBuffer);
const logoMeta = await sharp(logoBuffer).metadata();
manifest["logo.png"] = { width: logoMeta.width, height: logoMeta.height };

// Favicon + apple touch icon from logo
await sharp(path.join(SRC, "Logo.png"))
  .resize(180, 180, { fit: "contain", background: { r: 10, g: 10, b: 10, alpha: 1 } })
  .png()
  .toFile(path.resolve("app/apple-icon.png"));

await sharp(path.join(SRC, "Logo.png"))
  .resize(32, 32, { fit: "contain", background: { r: 10, g: 10, b: 10, alpha: 1 } })
  .png()
  .toFile(path.resolve("app/icon.png"));

await writeFile(
  path.resolve("lib/image-manifest.json"),
  JSON.stringify(manifest, null, 2)
);

console.log("Done. Manifest written to lib/image-manifest.json");
