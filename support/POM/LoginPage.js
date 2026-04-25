const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.roleDropdown = 'select#role';
    this.continueButton = 'button:has-text("Continue")';
    this.usernameInput = 'input[name="username"], input[type="email"]';
    this.passwordInput = 'input[type="password"]';
    this.signInButton = 'button:has-text("Sign in")';
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async selectRole(role = 'admin') {
    await this.page.selectOption(this.roleDropdown, { label: role });
    await this.page.click(this.continueButton);
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.signInButton);
  }
}

module.exports = { LoginPage };