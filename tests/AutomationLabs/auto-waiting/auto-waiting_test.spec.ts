import{test,expect} from '@playwright/test'

test.use({
    actionTimeout: 1500
})

test('auto wait checks',async({page})=>{
    await page.goto('https://classic.freecrm.com/register/');
    await expect(page.locator('input[name="agreeTerms"]')).toBeVisible();
    // page.setDefaultTimeout(15000)
    const checkboxAgree = page.locator('input[name="agreeTerms"]');

    //await checkboxAgree.check({timeout:500});
    await checkboxAgree.check();
})