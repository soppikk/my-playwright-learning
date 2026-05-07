import { expect, test } from '@playwright/test'

test('list handling practice', async ({ page }) => {
  // Login
  await page.goto('https://automationexercise.com/')
  await page.getByText('Signup / Login').click()
  await page.locator('[data-qa="login-email"]').fill('testsop@gmail.com')
  await page.locator('[data-qa="login-password"]').fill('paroli12')
  await page.getByRole('button', { name: 'Login' }).click()


//   await page.getByPlaceholder('Username').fill('standard_user')
//   await page.getByPlaceholder('Password').fill('secret_sauce')
//   await page.getByRole('button', { name: 'Login' }).click()
//   //<button type="submit" data-qa="login-button" class="btn btn-default">Login</button>
// // <input type="email" data-qa="login-email" placeholder="Email Address" name="email" value="" required=""> 
//   const products = page.locator('.inventory_item')

//   // Count
//   console.log('count:', await products.count())

//   // Click 2nd product
//   await products.nth(1).click()

  // Pause to see result, then close
  await page.waitForTimeout(2000)
  await page.close()
})