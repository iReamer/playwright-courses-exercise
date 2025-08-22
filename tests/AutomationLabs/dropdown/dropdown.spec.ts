import {test,expect} from '@playwright/test'

test('Handling dropdown menus',async ({page})=>{
    await page.goto('https://www.magupdate.co.uk/reader-enquiry/PATI/241')
    const dropDownMenu = page.locator('#Contact_CountryCode')

    await dropDownMenu.selectOption('BG')
    await expect(dropDownMenu).toHaveValue('BG')
    // const dropDownMenuSelector = '#Contact_CountryCode'
    // const allOptions = await page.$$(dropDownMenuSelector+ ' > option')
    // console.log(allOptions.length);
    // for (const e of allOptions) {
    //     const text = await e.textContent()
    //     console.log(text);
    // }
    await page.waitForTimeout(3000);
})