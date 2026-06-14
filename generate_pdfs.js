const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = '/Users/salmaelshahawy/Desktop/summer_booklet';
const OUT = path.join(BASE, 'pdfs');

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

const files = [
  'summer_booklet_week1.html',
  'summer_booklet_week2.html',
  'summer_booklet_week3.html',
  'summer_booklet_week4.html',
  'summer_booklet_week5.html',
  'summer_booklet_weeks6_8.html',
  'summer_booklet_answer_key.html',
];

for (const file of files) {
  const input = `file://${path.join(BASE, file)}`;
  const outName = file.replace('.html', '.pdf');
  const output = path.join(OUT, outName);
  console.log(`Generating ${outName}...`);
  try {
    execSync(`"${CHROME}" --headless=new --disable-gpu --print-to-pdf="${output}" --print-to-pdf-no-header --no-pdf-header-footer "${input}"`, {
      timeout: 30000,
      stdio: 'pipe',
    });
    console.log(`  ✓ ${outName}`);
  } catch (e) {
    console.error(`  ✗ ${file}: ${e.message}`);
  }
}

console.log(`\nDone! PDFs saved to: ${OUT}`);
