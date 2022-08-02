const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("Test A", () => {
  it("Should login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(await SecurePage.headerContainer).toBeDisplayed();
  });
  it("Should successfully add elements to the cart", async () => {
    await SecurePage.addItems();
    await expect(await SecurePage.shoppingCounter).toHaveText("6");
  });
  it("Should successfully remove elements from the cart", async () => {
    await SecurePage.removeItems();
    let elem = await SecurePage.shoppingCounter;
    await expect(elem).not.toExist();
  });
});
