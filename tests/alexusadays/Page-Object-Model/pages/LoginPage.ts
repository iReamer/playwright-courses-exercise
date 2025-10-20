import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";

export class LoginPage extends BasePage {
  async openLoginPage() {
    this.goToUrl("https://the-internet.herokuapp.com/login");
  }
  async userLogin(username: string, password: string) {
    await this.basePageFill("#username", username);
    await this.basePageFill("#password", password);
    await this.basePageClick('button[type="submit"]');
  }
  async expectLoginErrorInvalidUsername() {
    await this.basePageExpectVisible("#flash");
    await expect(this.page.locator("#flash")).toContainText(
      "Your username is invalid!",
    );
  }
  async expectLoginErrorInvalidPassword() {
    await this.basePageExpectVisible("#flash");
    await expect(this.page.locator("#flash")).toContainText(
      "Your password is invalid!",
    );
  }
}
