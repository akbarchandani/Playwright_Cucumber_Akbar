const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const { poManager } = require('../../../pageObjects/poManager');

let poManagerObj;

Given('a login to Ecommerce application with {string} and {string}', async function (username, password) {
    poManagerObj = new poManager(this.page);
    const loginPage = poManagerObj.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
});