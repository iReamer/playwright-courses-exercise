import { test, expect } from '@playwright/test';
import ManagePage from '../pages/ManagePage';

test.describe('Checkboxes Test', () => {
    let managePage: ManagePage;
    test.beforeEach(async ({ page }) => {
        managePage = new ManagePage(page);
        await managePage.checkboxesPage.openCheckboxesPage();

    })
    test('Check-Both Test', async () => {
        await managePage.checkboxesPage.assertCheckboxesState(false, true);

        await managePage.checkboxesPage.checkFirstCheckbox();
        await managePage.checkboxesPage.assertCheckboxesState(true, true);

    });
    test('Uncheck-Both Test', async () => {
        await managePage.checkboxesPage.assertCheckboxesState(false, true);


        await managePage.checkboxesPage.uncheckSecondCheckbox();

        await managePage.checkboxesPage.assertCheckboxesState(false, false)
    });
})