const loginData = require("../testdata/logindata");
const checkData = require("../testdata/checkdata");
const loginPage = require("../pageobjects/login.page");
const securePage = require("../pageobjects/secure.page");

describe("Test A", () => {
  it("Should login with valid credentials", async () => {
    await loginPage.open();
    await loginPage.login(loginData.username, loginData.password);
    await securePage.checkLogin();
  });
  it("Should successfully add elements to the cart", async () => {
    await securePage.addItems();
    await securePage.checkAdded();
  });
  it("Should successfully remove elements from the cart", async () => {
    await securePage.removeItems();
    await securePage.checkRemoved();
  });
});
describe("Test B", () => {
  it("Should login with valid credentials", async () => {
    await loginPage.open();
    await loginPage.login(loginData.username, loginData.password);
    await securePage.checkLogin();
  });
  it("Should successfully compare name, description and price of the elements with the expected data", async () => {
    await securePage.checkTitle(checkData);
    await securePage.checkDescription(checkData);
    await securePage.checkPrice(checkData);
  });
});
