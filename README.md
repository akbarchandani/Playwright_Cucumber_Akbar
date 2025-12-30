# Playwright Cucumber Allure Test Framework

This project demonstrates end-to-end testing for an eCommerce application using [Playwright](https://playwright.dev/), [Cucumber.js](https://github.com/cucumber/cucumber-js), and [Allure](https://docs.qameta.io/allure/) reporting.

---

## 📦 Project Structure

```
.
├── features/                  # Cucumber feature files
│   └── eCommerceShopping.feature
├── stepDefinitions/           # Step definition files
│   └── Main/
│       └── loginStepdef.js
├── pageObjects/               # Page Object Model classes
│   └── Main/
│   └── Home/
│   └── Orders/
│   └── Cart/
│   └── poManager.js
├── playwright.config.js       # Playwright configuration
├── cucumber.js                # Cucumber configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Tests

- **Run all tests:**
  ```bash
  npm test
  ```
- **Run regression tests in parallel:**
  ```bash
  npm run test:regression:parallel
  ```
- **Run with Allure reporting:**
  ```bash
  npm run test:allure
  ```
- **Run a specific feature:**
  ```bash
  npx cucumber-js features/eCommerceShopping.feature --require stepDefinitions/Main/*.js
  ```
- **With custom timeout:**
  ```bash
  npx cucumber-js --require stepDefinitions/Main/*.js --timeout 30000
  ```

### 3. Allure Reporting

- **Generate Allure report:**
  ```bash
  npm run allure:generate
  ```
- **Open Allure report:**
  ```bash
  npm run allure:open
  ```

---

## 🛠️ Configuration

- **Playwright settings:**  
  See [`playwright.config.js`](playwright.config.js) for browser and timeout settings.
- **Cucumber settings:**  
  See [`cucumber.js`](cucumber.js) for CLI options and timeouts.

---

## 📝 Notes

- Step definitions must match feature steps exactly.
- Use the Page Object Model for maintainable test code.
- Adjust selectors and URLs in page objects as per your application.

---

## 📚 Useful Commands

- List all available npm scripts:
  ```bash
  npm run
  ```
- Run tests with tags:
  ```bash
  npx cucumber-js --tags "@Regression"
  ```

---

## 👤 Author

Akbar Chandani

---

## 📄