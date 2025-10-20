import { test, expect } from "@playwright/test";

test.describe("Visual Testing", () => {
  test("Plain screenshot captured of login page", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await expect(page).toHaveScreenshot("visible-part-screenshot.png");
    console.log("Baseline screenshot captured successfully");
  });

  test("Full page screenshot captured of login page", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await expect(page).toHaveScreenshot("full-page-screenshot.png", {
      fullPage: true,
    });
    console.log("Full page screenshot captured successfully");
  });

  test("Visual check of login button", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    const loginButton = page.getByRole("button", { name: "Login" });
    await expect(loginButton).toHaveScreenshot("login-button-screenshot.png");
  });

  test("Masked screenshot of login page", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await expect(page).toHaveScreenshot("login-info-masked.png", {
      fullPage: true,
      mask: [page.locator("#username"), page.locator("#password")],
    });
  });
});
