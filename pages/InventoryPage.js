export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.addToCartBtn = '#add-to-cart-sauce-labs-backpack';
        this.cartIcon = '.shopping_cart_link';
    }

    async addProductToCart() {
        await this.page.click(this.addToCartBtn);
    }

    async goToCart() {
        await this.page.click(this.cartIcon);
    }
}