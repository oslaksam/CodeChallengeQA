const userData = require("../testdata/users");
const loginPage = require("../pageobjects/login.page");
const securePage = require("../pageobjects/secure.page");
const { faker } = require("@faker-js/faker");

describe("Extra tests", () => {
  it("Should do a complete checkout", async () => {
    await browser.maximizeWindow();
    await loginPage.open();
    await loginPage.login(
      userData.standard.username,
      userData.standard.password
    );
    await securePage.checkLogin();
    await securePage.addItems();
    await securePage.purchaseItems(
      faker.name.firstName(),
      faker.name.lastName(),
      faker.address.zipCode()
    );
    await securePage.finalizePurchase();
    await securePage.logout();
  });
  it("Locked out user should not be able to sign in", async () => {
    await browser.maximizeWindow();
    await loginPage.open();
    await loginPage.login(userData.locked.username, userData.locked.password);
    await loginPage.checkErrorMessage();
  });
  it("Should have 3 items in the cart because we logged in as a problematic user", async () => {
    await browser.maximizeWindow();
    await loginPage.open();
    await loginPage.login(userData.problem.username, userData.problem.password);
    await securePage.checkLogin();
    await securePage.addItems();
    await securePage.checkCartCount("3");
    await securePage.logout();
  });
});
