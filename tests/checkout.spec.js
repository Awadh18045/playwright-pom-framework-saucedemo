import { test } from '../fixtures/baseTest.js';
import { users } from '../utils/testData.js';

test('Complete order flow', async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage
}) => {

    await loginPage.goto();
    await loginPage.login(
        users.standard.username,
        users.standard.password
    );

    await inventoryPage.addProductToCart();
    await inventoryPage.goToCart();

    await cartPage.checkout();

    await checkoutPage.enterDetails('Awadh', 'Test', '452001');
    await checkoutPage.finishOrder();
});