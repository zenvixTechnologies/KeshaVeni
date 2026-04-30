import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function convert() {
  const dir = 'public/images/hero_section';
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

  console.log(`Found ${files.length} PNG files. Converting to WebP...`);
  
  let converted = 0;
  for (const file of files) {
    const input = path.join(dir, file);
    const output = path.join(dir, file.replace('.png', '.webp'));
    
    try {
      await sharp(input).webp({ quality: 80 }).toFile(output);
      fs.unlinkSync(input); // Delete original PNG after successful conversion
      converted++;
      if (converted % 20 === 0) {
        console.log(`Converted ${converted}/${files.length}`);
      }
    } catch (e) {
      console.error(`Error converting ${file}:`, e);
    }
  }
  console.log(`Done! Successfully converted ${converted} files.`);
}

convert();
