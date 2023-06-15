import { Role } from 'testcafe';
import page from './page-model';

fixture `A reproduction repo for https://github.com/DevExpress/testcafe/issues/6765`
    .page `https://www.saucedemo.com`;

// Roles
const userOne = Role('https://www.saucedemo.com', async t => {
    await t
      .typeText(page.userNameInput, 'standard_user')
      .typeText(page.passwordInput, 'secret_sauce')
      .click(page.loginButton);
}, { preserveUrl: true });

// Tests
test('Display error on random login data', async t => {
    await t
        .typeText(page.userNameInput, 'abc') // Type random user-name
        .typeText(page.passwordInput, 'def') // Type random password
        .click(page.loginButton);

    await t.expect(page.errorBox.exists).ok();
});

test('Log in properly and display inventory', async t => {
    await t.useRole(userOne);
    await t.expect(page.inventoryContainer.exists).ok();
});
