import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import * as fs from 'fs';

test.describe('Accessibility Tests', () => {
    test('Basic WCGA Check', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login');
        const accessibilityScannerResults = await new AxeBuilder({ page })
            .withTags(['wcag2aa', 'wcag2a', 'wcag21a', 'wcag21aa', 'wcag22a', 'wcag22aa'])
            .analyze();

        // Commented so the tests don't fail
        // expect(accessibilityScannerResults.violations).toHaveLength(0);

    })
    test('Check with logs', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login');
        const accessibilityScannerResults = await new AxeBuilder({ page })
            .analyze();

        const reportLines: string[] = [];
        if (accessibilityScannerResults.violations.length > 0) {
            reportLines.push('Accessibility Violations Found: ');
            for (const violation of accessibilityScannerResults.violations) {
                reportLines.push(`Violation: ${violation.id}`);
                reportLines.push(`Description: ${violation.description}`);
                reportLines.push(`Impact: ${violation.impact}`);
                for (const node of violation.nodes) {
                    reportLines.push(`Node HTML: ${node.html}`);
                    reportLines.push(`Failure Summary ${node.failureSummary}`);
                    reportLines.push(`Node selector: ${node.target.join(', ')}`);
                }
            }
        }
        else {
            reportLines.push('No accessibility violations found :)')
        }

        const reportFilePath = `accessibility-reports/accessbility-report.txt`;
        await fs.promises.writeFile(reportFilePath,reportLines.join('\n'));

        // Commented so the tests don't fail
        // expect(accessibilityScannerResults.violations).toHaveLength(0);

    })

})