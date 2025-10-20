import { test, expect } from "@playwright/test";

test("handling right/doubleclick", async ({ page }) => {
  await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
  const doubleClickButton = page.getByRole("button", {
    name: "Double-Click Me To See Alert",
  });
  const rightClickButton = page.getByText("right click me");
  await doubleClickButton.dblclick();
  await rightClickButton.click({ button: "right" });
  await page.getByText("Quit").click();
  await page.waitForTimeout(3000);
});

test("handling shift click", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/shifting_content");
  const exampleOneButton = page.getByRole("link", {
    name: "Example 1: Menu Element",
  });
  await page.waitForTimeout(3000);

  await exampleOneButton.click({ modifiers: ["Shift"] });
  await page.waitForTimeout(3000);
});
