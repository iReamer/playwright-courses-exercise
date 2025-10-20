import { Page, Locator, expect } from "@playwright/test";

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  // Navigation
  // Should be Base-URL cant be in this Project
  protected async goToUrl(url: string) {
    await this.page.goto(url);
  }

  protected async basePageClick(selector: string | Locator) {
    await this.toLocator(selector).click();
  }

  protected async basePageFill(selector: string | Locator, value: string) {
    await this.toLocator(selector).fill(value);
  }

  protected async basePageExpectVisible(selector: string | Locator) {
    await expect(this.toLocator(selector)).toBeVisible();
  }

  // Utility
  protected toLocator(selector: string | Locator): Locator {
    return typeof selector === "string"
      ? this.page.locator(selector) // if string selector recieved -> create a Locator
      : selector; // esle already a locator -> return unchanged
  }
}
