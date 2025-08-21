import { test, expect } from '@playwright/test'
import { PageObject } from './page/PageObject'
import * as testData from './testData.json'


test.describe('Sample Test', () => {
    let pageObject: PageObject;
    const firstNameText = 'John';
    const ageText = '30';

    test.beforeEach(async ({ page }) => {
        pageObject = new PageObject(page);
        await pageObject.open('file:///C:/Projekte/Playwright/tests/workshop_8/index.html');
    })

    for (const data of Object.values(testData)) {
        if (data.testName === "Test 1 - Fill Input" || data.testName === "Test 2 - Negative Test") {
            test.skip(data.testName, async () => {
                await pageObject.fillFirstName(data.firstName);
                await pageObject.fillAge(data.age)
                if (data.isStudent === true) {
                    await pageObject.checkIsStudent();
                }
                await pageObject.applyData();
                expect(await pageObject.text(pageObject.displayFirstName)).toBe(data.expectedFirstName);
                expect(await pageObject.text(pageObject.displayAge)).toBe(data.expectedAge);
                console.log(data.expectedIsStudent)
                console.log(data.expectedAge)
                console.log(data.expectedFirstName)

                expect(await pageObject.text(pageObject.displayIsStudent)).toBe(data.expectedIsStudent);
            })
        }
    }
})