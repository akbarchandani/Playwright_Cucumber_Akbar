module.exports = {
  default: {
    format: ["allure-cucumberjs/reporter"],
    formatOptions: {
      resultsDir: "allure-results", // Optional: specify your desired results directory
    },
    // Other Cucumber configurations
  },
};
// npx cucumber-js features/eCommerceShopping.feature --exit // Run one feature file scenario
// npx cucumber-js --tags "@Order" --exit // Using tags
// npx cucumber-js --tags "@Regression" --parallel 2 --exit // run parallel
// npx cucumber-js --parallel 2 --exit --format html:cucumber-report.html 
// npx cucumber-js features/greeting.feature --parallel 2 --exit --format html:cucumber-report.html
// npx cucumber-js --tags "@Order" --exit  --format @allure-decorators/cucumberjs/dist/cjs --publish // Using allure report