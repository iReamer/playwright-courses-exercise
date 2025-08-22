import {test, expect} from '@playwright/test'

test('move to element', async ({page})=>{
    await page.goto('https://www.bigbasket.com/')
    const button = page.locator('[id="headlessui-menu-button-:Ramkj6:"]')

    const foodCourtCategory = page.locator('[id="headlessui-menu-items-:Rimkj6:"]').getByRole('link',{name:'Food Court'})
    const menu = page.locator('[data-headlessui-state="open"] nav');
    const foodCourtBreakfast = menu.getByText('Breakfast',{exact: true})
    const englishBreakfast = menu.getByText('English Breakfast',{exact:true})

    await button.click()

    await expect(foodCourtCategory).toBeVisible();
    await foodCourtCategory.hover()

    await expect(foodCourtBreakfast).toBeVisible();
    await foodCourtBreakfast.hover()

    await expect(englishBreakfast).toBeVisible();
    await englishBreakfast.click()

    await expect(page.locator('//h3[contains(text(),"Mushroom Croiss-tini")]')).toBeVisible();
})

