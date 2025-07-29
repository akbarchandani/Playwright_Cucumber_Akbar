const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const { poManager } = require('../../../pageObjects/poManager');

let poManagerObj;


When('Enter valid details and Place the Order', async function () {
  poManagerObj = new poManager(this.page);
  const cartPage = poManagerObj.getCartPage();
  await cartPage.Checkout();

  const ordersReviewPage = poManagerObj.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect("ind", "India");
  this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log(this.orderId);
});