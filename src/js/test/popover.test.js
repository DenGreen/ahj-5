import puppetteer from "puppeteer";

const baseUrl = ".../dist/index.html";

jest.setTimeout(30000); // default puppeteer timeout
describe("button", () => {
  let browser = null;
  let page = null;
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  test("when you click on the button, you should see .popover", async () => {
    await page.goto(baseUrl);
    const btn = await page.$(".btn");
    btn.click();
    await page.waitForSelector(".popover");
  });
});
