const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('a login to Ecommerce2 application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
  const userName = this.page.locator('#username');
  const signIn = this.page.locator("#signInBtn");
  await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await this.page.title());
  //css 
  await userName.fill("rahulshetty");
  await this.page.locator("[type='password']").fill("learning");
  await signIn.click();
});