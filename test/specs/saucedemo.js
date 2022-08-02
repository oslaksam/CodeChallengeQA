const userData = require("../testdata/users");
const checkData = require("../testdata/checkdata");
const loginPage = require("../pageobjects/login.page");
const securePage = require("../pageobjects/secure.page");

describe("Test A", () => {
  it("Should login with valid credentials", async () => {
    await loginPage.open();
    await browser.maximizeWindow();
    await loginPage.login(
      userData.standard.username,
      userData.standard.password
    );
    await securePage.checkLogin();
  });
  it("Should successfully add elements to the cart", async () => {
    await securePage.addItems();
    await securePage.checkCartCount("6");
  });
  it("Should successfully remove elements from the cart", async () => {
    await securePage.removeItems();
    await securePage.checkRemoved();
  });
  it("Should logout", async () => {
    await securePage.logout();
  });
});
describe("Test B", () => {
  it("Should login with valid credentials", async () => {
    await loginPage.open();
    await browser.maximizeWindow();
    await loginPage.login(
      userData.standard.username,
      userData.standard.password
    );
    await securePage.checkLogin();
  });
  it("Should successfully compare name, description and price of the elements with the expected data", async () => {
    await securePage.checkTitle(checkData);
    await securePage.checkDescription(checkData);
    await securePage.checkPrice(checkData);
  });
  it("Should logout", async () => {
    await securePage.logout();
  });
});
