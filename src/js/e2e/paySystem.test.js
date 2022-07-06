import puppetteer from "puppeteer";

jest.setTimeout(60000);
describe("test validator form", () => {
  let browser = null;
  let page = null;
  const baseUrl = "http://localhost:8888";
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  test("test visa", async () => {
    await page.goto(baseUrl);
    const input = await page.$("#numberCard-input");
    await input.type("4539283476916568");
    const submit = await page.$("#card-submit");
    await submit.click();
    await page.waitForSelector(".cardVisa.active");
  });
  test("test AmericanExpress", async () => {
    await page.goto(baseUrl);
    const input = await page.$("#numberCard-input");
    await input.type("340054986290712");
    const submit = await page.$("#card-submit");
    await submit.click();
    await page.waitForSelector(".cardAmericanExpress.active");
  });
});
