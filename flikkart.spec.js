
import { test, expect } from '@playwright/test';

test('OrangeHRM login functionality', async ({ page }) => {
	// Go to the OrangeHRM login page
	await page.goto('https://opensource-demo.orangehrmlive.com/');

	// Fill in username
	await page.fill('input[name="username"]', 'Admin');

	// Fill in password
	await page.fill('input[name="password"]', 'admin123');

	// Click the login button
	await page.click('button[type="submit"]');

	// Assert that dashboard is visible after login
	await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();
});

