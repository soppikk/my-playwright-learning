import { expect, test } from '@playwright/test'

test.describe('Happy Path + inventory', () => {
  // Login
  test.beforeEach(async ({ page }) => {

  await page.goto('https://www.saucedemo.com/')
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.getByRole('button', { name: 'Login' }).click()
   })
 test('should show inventory after login', async ({ page }) => {
    // login already happened in beforeEach
    await expect(page).toHaveURL(/inventory/);
  })
 
test('Add item to the cart', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()  
    await expect(page.locator(".shopping_cart_badge"),
        "Cart badge should show 1 after adding a product"
        ).toHaveText("1");
})

test('Remove item from the cart', async ({ page }) => {
     await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click() //add to the cart first since its starting from clean state
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click()
   await expect(
  page.locator(".shopping_cart_badge"),
  "Cart badge should not be visible after removing product"
).not.toBeVisible(); })

// Bonus challenges

test('Add 3 items to the cart', async ({ page }) => {
    await page.locator('.btn_inventory').nth(0).click() //item1
    await page.locator('.btn_inventory').nth(1).click() //item2
    await page.locator('.btn_inventory').nth(2).click() //item3
    await expect(page.locator(".shopping_cart_badge"),
        "Cart badge should show 3 after adding products"
        ).toHaveText("3");
    await page.locator('.btn_inventory').nth(2).click() //remove one item
    await expect(page.locator(".shopping_cart_badge"),
        "Cart badge should show 2 after removing one product"
    ).toHaveText("2");
  })
  })


// test('Sort items and make sure its correctly sorted', async ({ page }) => {



// }) 



test.describe('Negative Path', () => {
    test('should show error with wrong password', async ({ page }) => {
      await page.goto('https://www.saucedemo.com/')
      await page.getByPlaceholder('Username').fill('standard_user')
      await page.getByPlaceholder('Password').fill('wrong_password')
      await page.getByRole('button', { name: 'Login' }).click()
      await expect(page.getByText(/Username and password do not match/)).toBeVisible()

     
    })
   
  test.describe('Empty form validation', () => {
    test('should show error with username is required message', async ({ page }) => {
      await page.goto('https://www.saucedemo.com/')
      await page.getByRole('button', { name: 'Login' }).click()
      await expect(page.getByText(/Username is required/)).toBeVisible()
   
    })
    })
  test.describe('Half form validation', () => {
    test('should show message that password is required', async ({ page }) => {
      await page.goto('https://www.saucedemo.com/')
      await page.getByPlaceholder('Username').fill('standard_user')
      await page.getByRole('button', { name: 'Login' }).click()
      await expect(page.getByText(/Password is required/)).toBeVisible()
   
    })
    })
 })
