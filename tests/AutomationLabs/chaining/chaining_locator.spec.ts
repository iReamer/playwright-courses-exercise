import { test, expect } from "@playwright/test";

test("locator test", async ({ page }) => {
  await page.goto("https://www.orangehrm.com/en/30-day-free-trial");

  await page.locator("form#Form_getForm >> #Form_getForm_Name").fill("John");
  await page.locator("form#Form_getForm >> text=Get Your Free Trial").click();
});
