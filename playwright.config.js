const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './', // This won't be used by cucumber, but good for Playwright context
  timeout: 30 * 1000,
  expect: {
    timeout: 30 * 1000
  },
  reporter: 'html', // Playwright's default reporter, not used by Allure
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
    headless : false,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});