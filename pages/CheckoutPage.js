export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.zip = '#postal-code';
        this.continueBtn = '#continue';
        this.finishBtn = '#finish';
    }

    async enterDetails(fname, lname, zip) {
        await this.page.fill(this.firstName, fname);
        await this.page.fill(this.lastName, lname);
        await this.page.fill(this.zip, zip);
    }

    async finishOrder() {
        await this.page.click(this.continueBtn);
        await this.page.click(this.finishBtn);
    }
}