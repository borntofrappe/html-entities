const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// consider the file produced by 11ty in the dist folder
const input = './dist/index.html';
const output = './dist/static/html-entities.png';

if(fs.existsSync(input)) {
  console.log(`Launching **puppeteer** for '${input}'`);
  const headless = true;
  (async () => {
    const browser = await puppeteer.launch({ headless });
    const page = await browser.newPage();
  
    await page.goto(path.resolve(input), { waitUntil: 'networkidle0' });
  
    const main = await page.$('main');
    const { x, y, width, height } = await main.boundingBox();
    await page.setViewport({
      width: width + x * 2,
      height: height + y * 2,
      deviceScaleFactor: 1,
    });
    console.log(`Writing '${output}' from '${input}'`);
    await page.screenshot({ path: output, clip: { x, y, width, height } });
    await browser.close();
  })();
} else {
  console.log(`'${input}' not found. Screenshot aborted.'`);
}
