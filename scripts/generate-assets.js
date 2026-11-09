const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateAll() {
  console.log('--- Generating Brand Favicons from Logo ---');

  const logoPath = path.join(__dirname, '../public/images/logo.jpg');
  const heroScreenshotPath = path.join(__dirname, '../public/assets/aistudio/herosc.png');

  // 1. Generate Favicons with rounded corners (authentic brand logo)
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon.ico', size: 48 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
  ];

  for (const { name, size } of sizes) {
    const roundedCorners = Buffer.from(
      `<svg><rect x="0" y="0" width="${size}" height="${size}" rx="${Math.round(size * 0.22)}" ry="${Math.round(size * 0.22)}"/></svg>`
    );

    const outPath = path.join(__dirname, '../public', name);
    await sharp(logoPath)
      .resize(size, size, { fit: 'cover' })
      .composite([{
        input: roundedCorners,
        blend: 'dest-in'
      }])
      .png()
      .toFile(outPath);
    console.log(`Generated: ${name} (${size}x${size})`);
  }

  // 2. Generate Open Graph preview image (1200x630) directly from real hero screenshot (herosc.png)
  console.log('--- Generating OG Image from herosc.png ---');
  const ogOutPath = path.join(__dirname, '../public/og-image.png');
  
  if (fs.existsSync(heroScreenshotPath)) {
    await sharp(heroScreenshotPath)
      .resize(1200, 630, { fit: 'cover', position: 'center' })
      .png({ quality: 95 })
      .toFile(ogOutPath);
    console.log('Generated: public/og-image.png (1200x630) from herosc.png');
  } else {
    console.warn('Warning: herosc.png not found at', heroScreenshotPath);
  }
}

generateAll().catch(console.error);
