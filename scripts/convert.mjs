import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imgDir = path.resolve('./public/images');

async function convertAll() {
  const files = fs.readdirSync(imgDir);
  
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const ext = path.extname(file);
      const basename = path.basename(file, ext);
      
      // Skip if it's already a webp or if we're generating it
      if (ext === '.webp') continue;
      
      const inPath = path.join(imgDir, file);
      // Clean up the filename: replace spaces with underscores (optional, but good practice, though we must update code if we do)
      // Actually, let's keep exact basename to make search-replace easy.
      let newBasename = basename;
      // Handle the "home hero.jpg" specific case: in code it is often "home%20hero.jpg"
      const outPath = path.join(imgDir, newBasename + '.webp');
      
      console.log(`Converting ${file} to ${newBasename}.webp`);
      await sharp(inPath).webp({ quality: 80 }).toFile(outPath);
      
      // Optional: Delete the original
      fs.unlinkSync(inPath);
    }
  }
}

convertAll().catch(console.error);
