const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({ width: 1800, height: 900 });
    await page.goto('https://google.com');
    await page.type('textarea[name="q"]', 'qa engineering');
    await page.keyboard.press('Enter');
    await page.waitForSelector("#result-stats");
    await page.screenshot({ path: 'google.png' });

    await browser.close();
})();
