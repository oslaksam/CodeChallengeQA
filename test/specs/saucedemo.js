const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("Test A", () => {
  it("Should login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await SecurePage.check();
  });
  it("Should successfully add elements to the cart", async () => {
    await SecurePage.addItems();
    await SecurePage.checkAdded();
  });
  it("Should successfully remove elements from the cart", async () => {
    await SecurePage.removeItems();
    await SecurePage.checkRemoved();
  });
});
describe("Test B", () => {
  it("Should login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await SecurePage.check();
  });
});
