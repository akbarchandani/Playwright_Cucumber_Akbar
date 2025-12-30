const { After, Before, AfterStep, Status, setDefaultTimeout } = require('@cucumber/cucumber');
const playwright = require('@playwright/test');

setDefaultTimeout(30 * 1000);

Before(async function () {
  // This hook will be executed before all scenarios
  // console.log("i am first");
  // const browser = await playwright.chromium.launch({
  //   headless: false,
  // });
  // const context = await browser.newContext();
  // this.page = await context.newPage();

  console.log("i am first");
  
  // 1. Launch the browser and store it in 'this'
  this.browser = await playwright.chromium.launch({
    headless: false,
  });

  // 2. Use 'this.browser' (not 'browser') to create context
  this.context = await this.browser.newContext();

  // 3. Use 'this.context' (not 'context') to create the page
  this.page = await this.context.newPage();
});

AfterStep(async function ({ result }) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  if (result.status === Status.FAILED) {
    const buffer = await this.page.screenshot();
    await this.page.screenshot({ path: 'screenshot/screenshot1.png' });
    this.attach(buffer.toString('base64'), 'base64:image/png');
    console.log("Screenshot logged")

  }
});
After(async function () {
  // Assuming this.driver is a selenium webdriver
  console.log("i am last");

  // // 3. CLOSE THE PAGE AND BROWSER
  if (this.page) {
    await this.page.close();
  }
  if (this.context) {
    await this.context.close();
  }
  if (this.browser) {
    await this.browser.close();
  }
});