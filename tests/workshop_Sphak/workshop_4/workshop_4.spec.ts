import {test,expect} from '@playwright/test'

test.skip('Handling Alerts', async ({page})=>{
    await page.goto('file:///C:/Projekte/Playwright/tests/workshop_4/index.html')
            let alertMessage = ''

    await page.on('dialog', async(dialog)=>{
        expect(dialog.type()).toBe('alert');
        alertMessage = dialog.message()
        await dialog.accept();
    })
    await page.click('#show-alert');
    expect(alertMessage).toBe('This is a simple alert.');
})

test.skip('Confirm Alert',async ({page})=>{
    await page.goto('file:///C:/Projekte/Playwright/tests/workshop_4/index.html')
    let alertMessage = ''

    page.on('dialog', async(dialog)=>{
        alertMessage = dialog.message();
        await dialog.dismiss();
    })

    await page.click('#show-confirm');
    expect(alertMessage).toBe('You clicked Cancel.');
})

test.skip('Handling Pop-Ups',async ({page})=>{
    await page.goto('file:///C:/Projekte/Playwright/tests/workshop_4/index.html')
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('#open-popup'),

    ]);

    await popup.waitForLoadState();
    await popup.close();

})