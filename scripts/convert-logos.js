// Logo JPG/JPEG/PNG → WebP dönüştürücü
// Kullanım: node scripts/convert-logos.js
// Gereksinim: npm install sharp

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const LOGOS_DIR = path.join(__dirname, "../public/logos");
const EXTS = [".jpg", ".jpeg", ".png"];

async function convertAll() {
  const files = fs.readdirSync(LOGOS_DIR);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!EXTS.includes(ext)) continue;

    const inputPath = path.join(LOGOS_DIR, file);
    const outputName = path.basename(file, ext) + ".webp";
    const outputPath = path.join(LOGOS_DIR, outputName);

    if (fs.existsSync(outputPath)) {
      console.log(`SKIP: ${outputName} zaten mevcut`);
      continue;
    }

    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      console.log(`OK: ${file} → ${outputName}`);
    } catch (err) {
      console.error(`HATA: ${file} →`, err.message);
    }
  }

  console.log("\nDönüşüm tamamlandı.");
}

convertAll();
