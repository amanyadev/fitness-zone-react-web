import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GALLERY_DIR = path.join(__dirname, '../public/gallery');
const OUTPUT_DIR = path.join(__dirname, '../public/gallery-optimized');

// Web-optimized dimensions
const SIZES = {
  thumbnail: { width: 400, height: 300 },
  medium: { width: 800, height: 600 },
  large: { width: 1200, height: 900 }
};

async function optimizeImages() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Get all image files
    const files = await fs.readdir(GALLERY_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} images to optimize...`);

    for (const file of imageFiles) {
      const inputPath = path.join(GALLERY_DIR, file);
      const baseName = path.parse(file).name;

      console.log(`Optimizing ${file}...`);

      // Create WebP versions in different sizes
      for (const [sizeName, dimensions] of Object.entries(SIZES)) {
        const outputFileName = `${baseName}-${sizeName}.webp`;
        const outputPath = path.join(OUTPUT_DIR, outputFileName);

        await sharp(inputPath)
          .resize(dimensions.width, dimensions.height, {
            fit: 'cover',
            position: 'center'
          })
          .webp({ 
            quality: 80,
            effort: 6
          })
          .toFile(outputPath);

        console.log(`  Created ${outputFileName}`);
      }

      // Also create a high-quality WebP version
      const highQualityFileName = `${baseName}-original.webp`;
      const highQualityPath = path.join(OUTPUT_DIR, highQualityFileName);

      await sharp(inputPath)
        .webp({ 
          quality: 90,
          effort: 6
        })
        .toFile(highQualityPath);

      console.log(`  Created ${highQualityFileName}`);
    }

    console.log('\n✅ Image optimization complete!');
    console.log(`Optimized images saved to: ${OUTPUT_DIR}`);

  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages(); 