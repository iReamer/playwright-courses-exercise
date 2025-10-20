import { test, expect } from "@playwright/test";
import ManagePage from "../pages/ManagePage";

test.describe("Login flow", () => {
  let managePage: ManagePage;
  test.beforeEach(async ({ page }) => {
    managePage = new ManagePage(page);
    await managePage.loginPage.openLoginPage();
  });
  test("Successfull Login", async () => {
    await managePage.loginPage.userLogin("tomsmith", "SuperSecretPassword!");
    await managePage.securePage.assertSuccess();
  });
  test("Failed login with invalid username", async () => {
    await managePage.loginPage.userLogin("tom", "SuperSecretPassword!");
    await managePage.loginPage.expectLoginErrorInvalidUsername();
  });
  test("Failed login with invalid password", async () => {
    await managePage.loginPage.userLogin("tomsmith", "Super");
    await managePage.loginPage.expectLoginErrorInvalidPassword();
  });
});
