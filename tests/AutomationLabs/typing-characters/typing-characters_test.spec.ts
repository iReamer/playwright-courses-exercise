import { test, expect } from '@playwright/test'

test('Typing Characters Delayed', async ({ page }) => {
    await page.goto('https://www.flipkart.com/', { waitUntil: 'domcontentloaded' });
    const searchField = page.getByPlaceholder('Search for Products, Brands and More');
    await expect(searchField).toBeVisible();


    await searchField.click();
    await searchField.pressSequentially('Hello', { delay: 3000 })

    expect(searchField).toHaveValue('Hello');
})