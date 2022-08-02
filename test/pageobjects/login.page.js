const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $("#login-button");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.click();
    await this.inputUsername.setValue(username);
    await this.inputPassword.click();
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
  /**
   * This method will check for error messages when user tries to login as a locked out user
   */
  async checkErrorMessage() {
    await $(
      "#login_button_container > div > form > div.error-message-container.error > h3"
    ).waitForDisplayed();
    await expect(
      $(
        "#login_button_container > div > form > div.error-message-container.error > h3"
      )
    ).toHaveText("Epic sadface: Sorry, this user has been locked out.");
    await $(
      "#login_button_container > div > form > div.error-message-container.error > h3 > button"
    ).click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("");
  }
}

module.exports = new LoginPage();
