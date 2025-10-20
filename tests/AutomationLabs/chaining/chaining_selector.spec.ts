import { test, expect } from "@playwright/test";

test("locator test", async ({ page }) => {
  await page.goto("https://www.orangehrm.com/en/30-day-free-trial");

  const form = page.locator("form#Form_getForm");
  const formButton = form.getByRole("button", { name: "Get Your Free Trial" });
  const formFirstName = form.locator("#Form_getForm_Name");

  await formFirstName.fill("John");
  await formButton.click();

  await page.waitForTimeout(3000);
});
