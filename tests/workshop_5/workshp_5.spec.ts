import {test,expect} from '@playwright/test'
import { isContext } from 'vm';

test.skip('Open new window and navigate back',async ({context, page})=>{
    await page.goto('file:///C:/Projekte/Playwright/tests/workshop_5/index.html');
    const pagePromise = context.waitForEvent('page');
    await page.click('#openNewWindow');
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title())
    await expect(newPage.getByRole('heading',{name: 'Welcome to the New Page'})).toBeVisible();
})


//session-cookie not working. need to use localhost instead of file.
test.skip('Add Cookie',async ({page})=>{
    await page.goto('file:///C:/Projekte/Playwright/tests/workshop_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///C:/Projekte/Playwright/tests/workshop_5/index.html');
    const sessionCookie = cookies.find(cookies =>cookies.name === 'session')
    console.log(sessionCookie);
})

//also not working with session-cookies
test.skip('Delete Cookie',async({page})=>{
    await page.goto('file:///C:/Projekte/Playwright/tests/workshop_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///C:/Projekte/Playwright/tests/workshop_5/index.html');
    const sessionCookie = cookies.find(cookies =>cookies.name === 'session');
    console.log('Session cookie',sessionCookie);
    await page.click('#deleteCookie');
    const deletedCookies = await page.context().cookies('file:///C:/Projekte/Playwright/tests/workshop_5/index.html');
    const deletedSessionCookie = deletedCookies.find(cookies => cookies.name ==='session');
    expect(deletedSessionCookie).not.toBeDefined();
})