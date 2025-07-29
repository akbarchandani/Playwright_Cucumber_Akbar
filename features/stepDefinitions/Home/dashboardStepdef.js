const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const { poManager } = require('../../../pageObjects/poManager');

let poManagerObj;


When('Add {string} to Cart', async function (productName) {
  poManagerObj = new poManager(this.page);
  const dashboardPage = poManagerObj.getDashboardPage();
  await dashboardPage.searchProductAddCart(productName);
  await dashboardPage.navigateToCart();
});