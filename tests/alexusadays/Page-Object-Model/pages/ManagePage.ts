import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { CheckboxesPage } from "./CheckboxesPage";
import { SecurePage } from "./SecurePage";

export default class ManagePage {
  constructor(private readonly page: Page) {}

  private _login?: LoginPage;
  private _checkboxes?: CheckboxesPage;
  private _secure?: SecurePage;

  get loginPage(): LoginPage {
    if (!this._login) {
      this._login = new LoginPage(this.page);
    }
    return this._login;
  }
  get checkboxesPage(): CheckboxesPage {
    if (!this._checkboxes) {
      this._checkboxes = new CheckboxesPage(this.page);
    }
    return this._checkboxes;
  }
  get securePage(): SecurePage {
    return (this._secure ??= new SecurePage(this.page));
  }
}
