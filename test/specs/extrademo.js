const userData = require("../testdata/users");
const checkData = require("../testdata/checkdata");
const loginPage = require("../pageobjects/login.page");
const securePage = require("../pageobjects/secure.page");

describe("Extra tests", () => {
  it("Locked out user should not be able to sign in", async () => {
    await browser.maximizeWindow();
    await loginPage.open();
    await loginPage.login(userData.locked.username, userData.locked.password);
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
  });
  it("Should have 3 items in the cart because we logged in as a problematic user", async () => {
    await browser.maximizeWindow();
    await loginPage.open();
    await loginPage.login(userData.problem.username, userData.problem.password);
    await securePage.checkLogin();
    await securePage.addItems();
    await expect(securePage.shoppingCounter).toHaveText("3");
  });
});
