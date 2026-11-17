import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

/**
 * Test suite for FreeCRM login functionality.
 */
test.describe('FreeCRM Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    // Fill the email field
    await loginPage.fillEmailField('valid_email@example.com');

    // Fill the password field
    await loginPage.fillPasswordField('valid_password');

    // Click the login button
    await loginPage.clickLoginButton();

    // Verify successful login
    await loginPage.verifySuccessfulLogin();
  });

  test.afterEach(async ({ page }) => {
    // Add any necessary teardown steps here
  });
});
