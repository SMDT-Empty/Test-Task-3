const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({ width: 1800, height: 900 });
    await page.goto('https://google.com');
    await page.type('textarea[name="q"]', 'qa engineering');
    await page.evaluate(() => {

        const search = document.querySelector(".gNO89b")
        search.click();
    })

    await page.waitForSelector("#rso");

    const href = await page.evaluate(() => {
        const rso = document.querySelectorAll("[id='rso']")[0]
        const website = rso.querySelectorAll('a')[0]
        return website.getAttribute('href')
    })
    const newPage = await browser.newPage();
    await newPage.setViewport({ width: 1800, height: 900 });
    await newPage.goto(href);

    await page.screenshot({ path: 'google.png' });
    await newPage.screenshot({ path: 'newPage.png' });
    await browser.close();
})();
