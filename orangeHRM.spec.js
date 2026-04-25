const { test, expect } = require('@playwright/test');

test('OrangeHRM End-to-End Login Test', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();
  // 1. Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // 2. Wait for the username field to be visible and fill in credentials
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  // 3. Click the login button using a stable locator
  await page.getByRole('button', { name: 'Login' }).click();

  // 4. Assert that the dashboard is visible after login
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});
