const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

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

// Force each .page to be exactly one PDF page: 8.5in x 11in at 96dpi = 816 x 1056px
const PRINT_CSS = `
  @page { size: 8.5in 11in; margin: 0 !important; }
  html, body { margin: 0 !important; padding: 0 !important; background: #fff; }
  .page {
    width: 8.5in !important;
    height: 11in !important;
    min-height: unset !important;
    max-height: 11in !important;
    overflow: hidden !important;
    page-break-after: always !important;
    break-after: page !important;
    position: relative !important;
    box-sizing: border-box !important;
  }
`;

(async () => {
  const browser = await puppeteer.launch({ headless: true });

  for (const file of files) {
    const outName = file.replace('.html', '.pdf');
    const output = path.join(OUT, outName);
    console.log(`Generating ${outName}...`);

    try {
      const page = await browser.newPage();
      await page.emulateMediaType('print');
      await page.goto(`file://${path.join(BASE, file)}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      // Wait for fonts
      await new Promise(r => setTimeout(r, 2500));

      // Inject print CSS that locks every .page to exactly 11in
      await page.addStyleTag({ content: PRINT_CSS });

      await page.pdf({
        path: output,
        width: '8.5in',
        height: '11in',
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        printBackground: true,
        preferCSSPageSize: false,
      });

      await page.close();
      console.log(`  ✓ ${outName}`);
    } catch (e) {
      console.error(`  ✗ ${file}: ${e.message}`);
    }
  }

  await browser.close();
  console.log(`\nDone! PDFs saved to: ${OUT}`);
})();
