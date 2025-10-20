import { test, expect } from "@playwright/test";

test.skip("Advanced Interactions", async ({ page }) => {
  await page.goto("file:///C:/Projekte/Playwright/tests/workshop_3/index.html");
  await page.hover("#hover-me");
  expect(await page.textContent("#hover-me")).toContain("Text Changed!");

  await page.click("#context-menu", { button: "right" });
  expect(await page.getByText("Context Menu Appears!").textContent()).toContain(
    "Context Menu Appears!",
  );

  await page.dblclick("#double-click");
  expect(await page.locator("img").count()).toBe(1);
});

test.skip("Drag and Drop", async ({ page }) => {
  await page.goto("file:///C:/Projekte/Playwright/tests/workshop_3/index.html");
  await page.dragAndDrop(".drag-source", ".drop-target");
  expect(await page.textContent(".drop-target")).toContain("Success");
});

test.skip("Handling iFrame", async ({ page }) => {
  await page.goto("file:///C:/Projekte/Playwright/tests/workshop_3/index.html");
  const iframeElement = page.frame({ name: "iframeName" });
  const inputSelector = "#iframe-input";

  if (iframeElement) {
    await iframeElement.type(inputSelector, "Hello Playwright");
    expect(await iframeElement?.locator(inputSelector).inputValue()).toContain(
      "Hello Playwright",
    );
  } else {
    console.error("iframe is not available");
  }
});
