import { BasePage } from "./BasePage";
import type { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class CheckboxesPage extends BasePage {

    // Declare reusable locators
    protected readonly firstBox: Locator;
    protected readonly secondBox: Locator;
    protected readonly form: Locator;

    constructor(page) {
        super(page);
        this.firstBox = this.page.locator('form#checkboxes input').nth(0);
        this.secondBox = this.page.locator('form#checkboxes input').nth(1);
        this.form = this.page.locator('form#checkboxes');
    }

    async openCheckboxesPage() {
        await this.goToUrl('https://the-internet.herokuapp.com/checkboxes')
        await this.basePageExpectVisible(this.form);
    }

    async checkFirstCheckbox() {
        await this.firstBox.check();
    }

    async uncheckFirstCheckbox() {
        await this.firstBox.uncheck();
    }
    async checkSecondCheckbox() {
        await this.secondBox.check();
    }
    async uncheckSecondCheckbox() {
        await this.secondBox.uncheck();
    }
    async assertCheckboxesState(isFirstChecked: boolean, isSecondChecked: boolean){
        await expect(this.firstBox).toBeChecked({checked: isFirstChecked});
        await expect(this.secondBox).toBeChecked({checked: isSecondChecked});
    }
}
