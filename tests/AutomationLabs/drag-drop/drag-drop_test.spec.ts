import {test,expect} from '@playwright/test'

test('Drag and Drop with dragTo()',async ({page})=>{
    await page.goto('https://jqueryui.com/droppable/');
    const frame = page.frameLocator('.demo-frame')
    const draggableElement = frame.locator('#draggable');
    const droppableElement = frame.locator('#droppable');


    await expect(droppableElement.locator('p')).not.toHaveText('Dropped!');
    await draggableElement.dragTo(droppableElement);
    await expect(droppableElement.locator('p')).toHaveText('Dropped!');


})

test('Drag and Drop with Mouse Down / Up',async ({page})=>{
    await page.goto('https://jqueryui.com/droppable/');
    const frame = page.frameLocator('.demo-frame')
    const draggableElement = frame.locator('#draggable');
    const droppableElement = frame.locator('#droppable');


    await expect(droppableElement.locator('p')).not.toHaveText('Dropped!');
    await draggableElement.hover();
    await page.mouse.down();
    await droppableElement.hover();
    await page.mouse.up();
    await expect(droppableElement.locator('p')).toHaveText('Dropped!');


})