const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const { poManager } = require('../../../pageObjects/poManager');

let poManagerObj;

Then('Verify order is present in the OrderHistory', async function () {
    poManagerObj = new poManager(this.page);
    const dashboardPage = poManagerObj.getDashboardPage();
    await dashboardPage.navigateToOrders();

    const ordersHistoryPage = poManagerObj.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});