import { test, expect } from '@playwright/test'; //import tools

test('has title', async ({ page }) => {   //destructuring pages + naming the test
  await page.goto('https://playwright.dev/'); //waiting to load the page

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/); //waiting to see if it contains a substring
});

test('get started link', async ({ page }) => { //destructuring pages + naming the test
  await page.goto('https://playwright.dev/'); //waiting to load

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click(); //waiting to click on get started

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible(); //waiting to see if heading has name installation
});
