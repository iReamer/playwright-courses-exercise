import { test, expect } from "@playwright/test";
const selectors = {
  firstName: "#firstName",
  age: "#age",
  student: "#isStudent",
};

test.describe("Variable Declarations and Types", () => {
  test.skip("Declarations and Types", async ({ page }) => {
    let firstName: string = "John";
    let age: number = 30;
    let isStudent: boolean = false;
    await page.goto(
      "file:///C:/Projekte/Playwright/tests/workshop_7/index.html",
    );
    await page.fill(selectors.firstName, firstName);
    await page.fill(selectors.age, age.toString());
    await page.check("#isStudent");
    await page.click("#applyData");
    expect(await page.textContent("#displayFirstName")).toBe(firstName);
    expect(await page.textContent("#displayAge")).toBe(age.toString());
    expect(await page.isChecked("#isStudent")).toBe(true);
  });
});

test.describe("Type Definitions and Interfaces", () => {
  test.skip("Type Def and Interfaces", async ({ page }) => {
    type User = {
      firstname: string;
      age: number;
      isStudent: boolean;
    };
    let user: User = {
      firstname: "jane",
      age: 25,
      isStudent: false,
    };
    await page.goto(
      "file:///C:/Projekte/Playwright/tests/workshop_7/index.html",
    );
    await page.fill(selectors.firstName, user.firstname);
    await page.fill(selectors.age, user.age.toString());
    await page.click("#applyData");

    expect(await page.textContent("#displayFirstName")).toBe(user.firstname);
    expect(await page.textContent("#displayAge")).toBe(user.age.toString());
    expect(await page.isChecked("#isStudent")).toBe(user.isStudent);
  });
});
