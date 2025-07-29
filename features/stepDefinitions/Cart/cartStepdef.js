const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const { poManager } = require('../../../pageObjects/poManager');

let poManagerObj;

Then('Verify {string} is displayed in the Cart', async function (productName) {
    poManagerObj = new poManager(this.page);
    const cartPage = poManagerObj.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
});
