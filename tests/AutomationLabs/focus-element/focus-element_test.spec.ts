import {test,expect} from '@playwright/test'
test('Focusing on Element',async({page})=>{
    await page.goto('https://www.orangehrm.com/en/30-day-free-trial')

    const fullName = page.locator('#Form_getForm_Name');

    await fullName.focus();
    await fullName.fill('Testing Automation');
})