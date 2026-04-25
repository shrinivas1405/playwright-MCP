const { test, expect } = require('@playwright/test');

test('Dropdown: select Java language using CSS selector', async ({ page }) => {
  // Step 1: Go to the site
  await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');

  // Step 2: Select 'Java' from the dropdown using CSS selector
  // The dropdown has id 'dropdowm-menu-1'
  await page.selectOption('#dropdowm-menu-1', { label: 'Java' });

  // Optionally, assert that 'Java' is selected
  const selectedValue = await page.$eval('#dropdowm-menu-1', el => el.value);
  expect(selectedValue).toBe('java');
});
