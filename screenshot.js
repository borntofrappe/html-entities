const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// consider the file produced by 11ty in the dist folder
const inputFile = './dist/index.html';
const outputEntities = './dist/static/html-entities.png';
const outputCard = './dist/static/twitter-card.png';

if(fs.existsSync(inputFile)) {
  console.log(`Launching **puppeteer** for '${inputFile}'`);
  const headless = true;
  (async () => {
    const browser = await puppeteer.launch({ headless });
    const page = await browser.newPage();
  
    await page.goto(path.resolve(inputFile), { waitUntil: 'networkidle0' });
  
    const main = await page.$('main');
    const { x, y, width, height } = await main.boundingBox();
    await page.setViewport({
      width: width + x * 2,
      height: height + y * 2,
      deviceScaleFactor: 1,
    });
    console.log(`Writing '${outputEntities}' from '${inputFile}'`);
    await page.screenshot({ path: outputEntities, clip: { x, y, width, height } });

    const dx = 30;
    const dy = 20;
    const x1 = x - dx;
    const y1 = y - dy;
    const w1 = width + dx * 2;

    console.log(`Writing '${outputCard}' from '${inputFile}'`);
    await page.screenshot({ path: outputCard, clip: { x: x1, y: y1, width: w1, height: w1 / 2 } });
    await browser.close();
  })();
} else {
  console.log(`'${inputFile}' not found. Screenshot aborted.'`);
}
