import { test, expect } from '@playwright/test'
import { PageObject } from './page/PageObject'


test.describe('Sample Test', () => {
    let pageObject: PageObject;
    const firstNameText = 'John';
    const ageText = '30';

    test.beforeEach(async ({ page }) => {
        pageObject = new PageObject(page);
        await pageObject.open('file:///C:/Projekte/Playwright/tests/workshop_8/index.html');
    })
    test.skip('test 1, Fill all inputs', async () => {
        await pageObject.fillFirstName(firstNameText);
        await pageObject.fillAge(ageText);
        await pageObject.checkIsStudent();
        await pageObject.applyData();

        expect(await pageObject.text(pageObject.displayFirstName)).toBe(firstNameText);
        expect(await pageObject.text(pageObject.displayAge)).toBe(ageText);
        expect(await pageObject.text(pageObject.displayIsStudent)).toBe('Yes');

    })
})