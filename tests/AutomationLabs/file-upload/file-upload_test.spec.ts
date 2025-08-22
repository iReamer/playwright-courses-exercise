import { test, expect } from '@playwright/test'
import { buffer } from 'stream/consumers';

test('Uploading  One File', async ({ page }) => {
    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');
    const uploadButton = page.locator('input[name="upfile"]');

    await uploadButton.setInputFiles('tests/AutomationLabs/file-upload/test-file.png');
})

test('Uploading  Multiple Files', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    const uploadButton = page.locator('input[name="filesToUpload"]');

    await uploadButton.setInputFiles(['tests/AutomationLabs/file-upload/test-file.png',
        'tests/AutomationLabs/file-upload/test-file-2.png']);
})

test('Upload File from Buffer', async ({ page }) => {
    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');
    const uploadButton = page.locator('input[name="upfile"]');

    await uploadButton.setInputFiles({ name: 'Test', mimeType: 'text/plain', buffer: Buffer.from('This is a test') });
    await page.waitForTimeout(3000)

})

test('Deselect Files', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    const uploadButton = page.locator('input[name="filesToUpload"]');

    await uploadButton.setInputFiles(['tests/AutomationLabs/file-upload/test-file.png',
        'tests/AutomationLabs/file-upload/test-file-2.png']);
    await uploadButton.setInputFiles([]);

})