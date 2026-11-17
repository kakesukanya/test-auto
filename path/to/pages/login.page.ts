import { Page, expect } from '@playwright/test';

/**
 * Page object for the FreeCRM login page.
 */
export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the FreeCRM login page.
   */
  async navigateToLoginPage(): Promise<void> {
    this.logStep('Navigate to the FreeCRM login page');
    await this.page.goto('https://ui.freecrm.com/');
  }

  /**
   * Fill the email field with a valid email.
   * @param email - The email to enter into the email field.
   */
  async fillEmailField(email: string): Promise<void> {
    this.logStep(`Fill the email field with: ${email}`);
    const emailField = this.page.locator("xpath=//input[@name='email']");
    await emailField.waitFor({ state: 'visible' });
    await emailField.fill(email);
  }

  /**
   * Fill the password field with a valid password.
   * @param password - The password to enter into the password field.
   */
  async fillPasswordField(password: string): Promise<void> {
    this.logStep('Fill the password field');
    const passwordField = this.page.locator("xpath=//input[@name='password']");
    await passwordField.waitFor({ state: 'visible' });
    await passwordField.fill(password);
  }

  /**
   * Click the login button.
   */
  async clickLoginButton(): Promise<void> {
    this.logStep('Click the login button');
    const loginButton = this.page.locator("xpath=//button[text()='Login']");
    await loginButton.waitFor({ state: 'visible' });
    await loginButton.click();
  }

  /**
   * Verify successful login by checking the URL.
   */
  async verifySuccessfulLogin(): Promise<void> {
    this.logStep('Verify successful login');
    await expect(this.page).toHaveURL('https://ui.freecrm.com/dashboard');
  }

  /**
   * Log the step being executed.
   * @param message - The message to log.
   */
  private logStep(message: string): void {
    console.log(`STEP: ${message}`);
  }
}
