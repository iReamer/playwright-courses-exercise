import { test } from '@playwright/test';

test('Basic Navigation', async ({ page }) => {
    await page.goto('https://www.gitlab.com');
    await page.waitForTimeout(3000);
    await page.reload();
})

test('Interacting with Web Element on Github', async ({ page }) => {
    await page.goto('https://www.gitlab.com');

    const cookieBtn = page.locator('#onetrust-accept-btn-handler, button:has-text("Accept"), button:has-text("Accept all")');
    if (await cookieBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
        await cookieBtn.click();
    }
    await page.locator('#be-navigation-desktop').getByRole('link', { name: 'Get free trial' }).click();
    await page.locator('[data-testid=new-user-first-name-field]').fill('John1');
    await page.locator('[data-testid=new-user-last-name-field]').fill('Test1');
    await page.getByTestId('new-user-email-field').fill('test@test.de');


})


test('Using Various Locator Methods', async ({ page }) => {

    await page.setViewportSize({ width: 800, height: 800 });
    await page.goto('https://gitlab.com');

    const cookieBtn = page.locator('#onetrust-accept-btn-handler, button:has-text("Accept"), button:has-text("Accept all")');
    if (await cookieBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
        await cookieBtn.click();
    }
    await page.getByRole('button', { name: 'Main Menu' }).click();
    await page.getByRole('link', { name: 'Sign in' }).click();

})