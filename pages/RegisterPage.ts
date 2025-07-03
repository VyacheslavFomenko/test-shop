import {Page} from "@playwright/test";

export class RegisterPage {
    readonly page: Page;
    readonly firstNameInput = "#AccountFrm_firstname";
    readonly lastNameInput = "#AccountFrm_lastname";
    readonly emailInput = "#AccountFrm_email";
    readonly addressInput = "#AccountFrm_address_1";
    readonly cityInput = "#AccountFrm_city";
    readonly zoneInput = "#AccountFrm_zone_id";
    readonly postCodeInput = "#AccountFrm_postcode";
    readonly countryInput = "#AccountFrm_country_id";
    readonly loginNameInput = "#AccountFrm_loginname";
    readonly passwordInput = "#AccountFrm_password";
    readonly passwordReenterInput = "#AccountFrm_confirm";
    readonly confirmPolicy = "#AccountFrm_agree";

    constructor(page: Page) {
        this.page = page;
    }

    async open(): Promise<void> {
        await this.page.goto("/index.php?rt=account/create");
    }

    async fillFirstNameInput(firstName: string) {
        await this.page.locator(this.firstNameInput).clear();
        await this.page.locator(this.firstNameInput).fill(firstName);
        await this.page.locator(this.firstNameInput).blur();
    }

    async fillLastNameInput(lastName: string) {
        await this.page.locator(this.lastNameInput).clear();
        await this.page.locator(this.lastNameInput).fill(lastName);
        await this.page.locator(this.lastNameInput).blur();
    }

    async fillEmailInput(email: string) {
        await this.page.locator(this.emailInput).clear();
        await this.page.locator(this.emailInput).fill(email);
        await this.page.locator(this.emailInput).blur();
    }

    async fillAddressInput(address: string) {
        await this.page.locator(this.addressInput).clear();
        await this.page.locator(this.addressInput).fill(address);
        await this.page.locator(this.addressInput).blur();
    }

    async fillCityInput(cityName: string) {
        await this.page.locator(this.cityInput).clear();
        await this.page.locator(this.cityInput).fill(cityName);
        await this.page.locator(this.cityInput).blur();
    }

    async fillZoneSelect() {
        //TODO
        await this.page.locator(this.zoneInput).selectOption("Angus");
    }

    async fillPostCodeInput(postCode: string) {
        await this.page.locator(this.postCodeInput).clear();
        await this.page.locator(this.postCodeInput).fill(postCode);
        await this.page.locator(this.postCodeInput).blur();
    }

    async fillCountryInput(country: string) {
        await this.page.locator(this.countryInput).clear();
        await this.page.locator(this.countryInput).fill(country);
        await this.page.locator(this.countryInput).blur();
    }

    async fillLoginNameInput(loginName: string) {
        await this.page.locator(this.loginNameInput).clear();
        await this.page.locator(this.loginNameInput).fill(loginName);
        await this.page.locator(this.loginNameInput).blur();
    }

    async fillPasswordInput(password: string) {
        await this.page.locator(this.passwordInput).clear();
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.passwordInput).blur();
    }

    async fillPasswordReenterInput(passwordReenter: string) {
        await this.page.locator(this.passwordReenterInput).clear();
        await this.page.locator(this.passwordReenterInput).fill(passwordReenter);
        await this.page.locator(this.passwordReenterInput).blur();
    }

    async confirmPolicyCheck() {
        await this.page.locator(this.confirmPolicy).check();
    }

    async checkSubscribe() {
        await this.page.locator('//radio[contains(text(),"Yes")]').check();
    }

    async submit() {
        // await this.page.getByRole('button', {name: 'Continue'}).click();
        await this.page.locator('//button[contains(text(),"Continue")]').click();
    }
}
