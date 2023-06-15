import { Selector } from 'testcafe';

class Page {
    userNameInput: Selector;
    passwordInput: Selector;
    loginButton: Selector;
    errorBox: Selector;
    inventoryContainer: Selector;

    constructor () {
        this.userNameInput = Selector('#user-name');
        this.passwordInput = Selector('#password');
        this.loginButton = Selector('#login-button');
        this.errorBox = Selector('.error-message-container');
        this.inventoryContainer = Selector('.inventory_container');
    }
}

export default new Page();
