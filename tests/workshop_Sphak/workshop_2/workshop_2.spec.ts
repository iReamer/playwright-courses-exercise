import {test,expect} from '@playwright/test'

test.skip('Automation Form Submissions', async ({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc');

    const newTodo = page.getByPlaceholder('What needs to be done?');
    const firstTodo = page.getByTestId('todo-item').nth(0);
    const secondTodo = page.getByTestId('todo-item').nth(1);

    await newTodo.fill('John Doe'); 
    await newTodo.press('Enter');
    await newTodo.fill('JJ Doe');
    await newTodo.press('Enter');

    await firstTodo.getByRole('checkbox').check();
    await secondTodo.getByRole('checkbox').check();

    await expect(secondTodo).not.toHaveClass('completed');
    await page.waitForTimeout(3000);

    
})

test.skip('Handling Form',async ({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc');
    const placeholder = page.locator('[placeholder="What needs to be done?"]');
    const checkbox = page.locator('.toggle');
    await placeholder.fill('John Doe');
    await placeholder.press('Enter');
    await checkbox.check();


})

