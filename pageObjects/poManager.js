const { loginPage } = require('./Main/loginPage');
const { dashboardPage } = require('./Home/dashboardPage');
const { ordersHistoryPage } = require('./Orders/ordersHistoryPage');
const { ordersReviewPage } = require('./Orders/ordersReviewPage');
const { cartPage } = require('./Cart/cartPage');
class poManager {
    constructor(page) {
        this.page = page;
        this.loginPageObj = new loginPage(this.page);
        this.dashboardPage = new dashboardPage(this.page);
        this.ordersHistoryPage = new ordersHistoryPage(this.page);
        this.ordersReviewPage = new ordersReviewPage(this.page);
        this.cartPage = new cartPage(this.page);
    }

    getLoginPage() {
        return this.loginPageObj;
    }

    getCartPage() {
        return this.cartPage;
    }

    getDashboardPage() {
        return this.dashboardPage;
    }
    getOrdersHistoryPage() {
        return this.ordersHistoryPage;
    }

    getOrdersReviewPage() {
        return this.ordersReviewPage;
    }
}
module.exports = { poManager };