import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

/**
 * Test suite for login and signup functionality.
 */
test.describe('Login and Signup Flow', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('https://example.com/login');
  });

  /**
   * Test case for logging in and navigating to the signup page.
   */
  test('should login and navigate to signup page', async ({ page }) => {
    // Fill the Email Field with the user's email.
    await page.locator('name=email').fill('user@example.com');

    // Fill the Password Field with the user's password.
    await page.locator('name=password').fill('password123');

    // Click the Login Button to submit the login form.
    await page.locator('//button[text()="Login"]').click();

    // Click the Sign Up Link to navigate to the signup page.
    await page.locator('linkText=Sign Up').click();

    // Verify that the signup page is displayed.
    await expect(page).toHaveURL('https://example.com/signup');
  });
});
