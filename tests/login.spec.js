import { test } from '../fixtures/baseTest.js';
import { users } from '../utils/testData.js';

test('login flow', async ({
    loginPage
}) => {

    await loginPage.goto();
    await loginPage.login(
        users.standard.username,
        users.standard.password
    );
});