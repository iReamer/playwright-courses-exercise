import { test, expect } from '@playwright/test'

test.skip('Automating Form Submissions @githubAction', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    const newToDo = await page.getByPlaceholder('What needs to be done?');
    await newToDo.fill('John Doe');
    await newToDo.press('Enter');
    await newToDo.fill('JJ Doe');
    await newToDo.press('Enter');

    const firstToDo = await page.getByTestId('todo-item').nth(0);
    await firstToDo.getByRole('checkbox').check();
    const secondToDo = await page.getByTestId('todo-item').nth(1);
    await secondToDo.getByRole('checkbox').check();

    await expect(firstToDo).toHaveClass('completed');
    await expect(secondToDo).not.toHaveClass('completed');
})

test('Handling Form @githubAction', async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc');

    await page.fill('[placeholder="What needs to be done?"]','John Doe')

    await page.press('[placeholder = "What needs to be done?"]','Enter')
    const checkbox = page.locator('.toggle')
    await checkbox.check()

})