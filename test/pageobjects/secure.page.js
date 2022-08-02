const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
  /**
   * define selectors using getter methods
   */
  get flashAlert() {
    return $("#flash");
  }

  get headerContainer() {
    return $("//div[@id='header_container']/div[2]/span");
  }

  get backToProducts() {
    return $("#back-to-products");
  }

  get productLinkBikeLight() {
    return $("#item_0_title_link > div");
    //return $("//a[@id='item_0_title_link']/div");
  }
  get productLinkBoltTshirt() {
    return $("#item_1_title_link > div");
    //return $("//a[@id='item_1_title_link']/div");
  }
  get productLinkOnesie() {
    return $("#item_2_title_link > div");
    //return $("//a[@id='item_2_title_link']/div");
  }
  get productLinkAllTshirt() {
    return $("#item_3_title_link > div");
    //return $("//a[@id='item_3_title_link']/div");
  }
  get productLinkBackpack() {
    return $("#item_4_title_link > div");
    //return $("//a[@id='item_4_title_link']/div");
  }
  get productLinkJacket() {
    return $("#item_5_title_link > div");
    //return $("//a[@id='item_5_title_link']/div");
  }

  get shoppingCounter() {
    return $("//div[@id='shopping_cart_container']/a/span");
  }

  get continueShopping() {
    return $("#continue-shopping");
  }

  get addBackpack() {
    return $("#add-to-cart-sauce-labs-backpack");
  }
  get addBoltTshirt() {
    return $("#add-to-cart-sauce-labs-bolt-t-shirt");
  }
  get addOnesie() {
    return $("#add-to-cart-sauce-labs-onesie");
  }
  get addBikeLight() {
    return $("#add-to-cart-sauce-labs-bike-light");
  }
  get addJacket() {
    return $("#add-to-cart-sauce-labs-fleece-jacket");
  }
  get addAllTshirt() {
    return $('[name="add-to-cart-test.allthethings()-t-shirt-(red)"]');
  }

  get removeBackpack() {
    return $("#remove-sauce-labs-backpack");
  }
  get removeBoltTshirt() {
    return $("#remove-sauce-labs-bolt-t-shirt");
  }
  get removeOnesie() {
    return $("#remove-sauce-labs-onesie");
  }
  get removeBikeLight() {
    return $("#remove-sauce-labs-bike-light");
  }
  get removeJacket() {
    return $("#remove-sauce-labs-fleece-jacket");
  }
  get removeAllTshirt() {
    return $('[name="remove-test.allthethings()-t-shirt-(red)"]');
  }

  get backPackPrice() {
    return $(
      "#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div"
    );
  }

  get bikeLightPrice() {
    return $(
      "#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.pricebar > div"
    );
  }

  get boltTshirtPrice() {
    return $(
      "#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.pricebar > div"
    );
  }

  get jacketPrice() {
    return $(
      "#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.pricebar > div"
    );
  }

  get onesiePrice() {
    return $(
      "#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.pricebar > div"
    );
  }

  get allTshirtPrice() {
    return $(
      "#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > div"
    );
  }

  get backPackDescription() {
    return $(
      "#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > div"
    );
  }

  get bikeLightDescription() {
    return $(
      "#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.inventory_item_label > div"
    );
  }

  get boltTshirtDescription() {
    return $(
      "#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.inventory_item_label > div"
    );
  }

  get jacketDescription() {
    return $(
      "#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.inventory_item_label > div"
    );
  }

  get onesieDescription() {
    return $(
      "#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.inventory_item_label > div"
    );
  }

  get allTshirtDescription() {
    return $(
      "#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.inventory_item_label > div"
    );
  }
  get menuButton() {
    return $("#react-burger-menu-btn");
  }

  get logoutButton() {
    return $("#logout_sidebar_link");
  }

  /**
   * This method will add all avalivable items to the cart
   */
  async addItems() {
    await this.addBackpack.click();
    await this.addBoltTshirt.click();
    await this.addOnesie.click();
    await this.addBikeLight.click();
    await this.addJacket.click();
    await this.addAllTshirt.click();
  }
  /**
   * This method will remove all added items from the cart
   */
  async removeItems() {
    await this.removeBackpack.click();
    await this.removeBoltTshirt.click();
    await this.removeOnesie.click();
    await this.removeBikeLight.click();
    await this.removeJacket.click();
    await this.removeAllTshirt.click();
  }

  /**
   * This method will check that logging in was successful
   */
  async checkLogin() {
    await expect(this.headerContainer).toBeDisplayed();
    await expect(this.productLinkBikeLight).toBeDisplayed();
    await expect(this.productLinkBoltTshirt).toBeDisplayed();
    await expect(this.productLinkOnesie).toBeDisplayed();
    await expect(this.productLinkAllTshirt).toBeDisplayed();
    await expect(this.productLinkBackpack).toBeDisplayed();
    await expect(this.productLinkJacket).toBeDisplayed();
  }
  /**
   * This method will check that logging in was not successful
   * Was irrelevant to the test, but I kept it in case it is needed in the future
   */
  async checkLoginNegative() {
    await expect(this.headerContainer).not.toBeDisplayed({ timeout: 100 });
    await expect(this.productLinkBikeLight).not.toBeDisplayed({ timeout: 100 });
    await expect(this.productLinkBoltTshirt).not.toBeDisplayed({
      timeout: 100,
    });
    await expect(this.productLinkOnesie).not.toBeDisplayed({ timeout: 100 });
    await expect(this.productLinkAllTshirt).not.toBeDisplayed({ timeout: 100 });
    await expect(this.productLinkBackpack).not.toBeDisplayed({ timeout: 100 });
    await expect(this.productLinkJacket).not.toBeDisplayed({ timeout: 100 });
  }
  /**
   * This method tests whether the cart contains 6 items
   */
  async checkAdded() {
    await expect(this.shoppingCounter).toHaveText("6");
  }
  /**
   * This method tests whether the cart contains 0 items
   */
  async checkRemoved() {
    let elem = await this.shoppingCounter;
    await expect(elem).not.toExist();
  }
  /**
   * This method tests whether the names of the items on the page correspond to the test data
   * @param {Object} data - This is the data that will be used to compare the names of the items in the cart
   */
  async checkTitle(data) {
    await expect(this.productLinkBikeLight).toHaveText(data.bikelight.name);
    await expect(this.productLinkBoltTshirt).toHaveText(data.boltTshirt.name);
    await expect(this.productLinkOnesie).toHaveText(data.onesie.name);
    await expect(this.productLinkAllTshirt).toHaveText(data.allTshirt.name);
    await expect(this.productLinkBackpack).toHaveText(data.backpack.name);
    await expect(this.productLinkJacket).toHaveText(data.jacket.name);
  }
  /**
   * This method tests whether the description of the items on the page correspond to the test data
   * @param {Object} data - This is the data that will be used to compare the descriptions of the items in the cart
   */
  async checkDescription(data) {
    await expect(this.bikeLightDescription).toHaveText(
      data.bikelight.description
    );
    await expect(this.boltTshirtDescription).toHaveText(
      data.boltTshirt.description
    );
    await expect(this.onesieDescription).toHaveText(data.onesie.description);
    await expect(this.allTshirtDescription).toHaveText(
      data.allTshirt.description
    );
    await expect(this.backPackDescription).toHaveText(
      data.backpack.description
    );
    await expect(this.jacketDescription).toHaveText(data.jacket.description);
  }
  /**
   * This method tests whether the prices of the items on the page correspond to the test data
   * @param {Object} data This is the data that will be used to compare the prices of the items in the cart
   */
  async checkPrice(data) {
    await expect(this.bikeLightPrice).toHaveText(data.bikelight.price);
    await expect(this.boltTshirtPrice).toHaveText(data.boltTshirt.price);
    await expect(this.onesiePrice).toHaveText(data.onesie.price);
    await expect(this.allTshirtPrice).toHaveText(data.allTshirt.price);
    await expect(this.backPackPrice).toHaveText(data.backpack.price);
    await expect(this.jacketPrice).toHaveText(data.jacket.price);
  }
  /**
   * This method is called when the user wants to logout
   */
  async logout() {
    await this.menuButton.click();
    await this.logoutButton.click();
  }
  /**
   * This method is called to assert amount of items in the cart
   * @param {String} count Number of items in the cart represented as a string
   */
  async checkCartCount(count) {
    await expect(this.shoppingCounter).toHaveText(count);
  }
  /**
   * This method is called to enter customer data and continue the purchasing process
   * @param {String} firstName First name of the customer
   * @param {String} lastName Lirst name of the customer
   * @param {String} zipCode Zip code of the customer
   */
  async purchaseItems(firstName, lastName, zipCode) {
    await $("#shopping_cart_container > a").click();
    await $("#checkout").click();
    await $("#first-name").setValue(firstName);
    await $("#last-name").setValue(lastName);
    await $("#postal-code").setValue(zipCode);
    await $("#continue").click();
  }
  /**
   * This method compares that the price and the delivery service info are correct
   * Works only when customer orders all the 6 items in the menu
   */
  async checkPriceInfo() {
    await expect(
      $(
        "#checkout_summary_container > div > div.summary_info > div:nth-child(4)"
      )
    ).toHaveText("FREE PONY EXPRESS DELIVERY!");
    await expect(
      $(
        " #checkout_summary_container > div > div.summary_info > div.summary_subtotal_label"
      )
    ).toHaveText("Item total: $129.94");
    await expect(
      $(
        "#checkout_summary_container > div > div.summary_info > div.summary_tax_label"
      )
    ).toHaveText("Tax: $10.40");
    await expect(
      $(
        "#checkout_summary_container > div > div.summary_info > div.summary_total_label"
      )
    ).toHaveText("Total: $140.34");
  }
  async finalizePurchase() {
    await $("#finish").click();
    await expect($("#checkout_complete_container > h2")).toHaveText(
      "THANK YOU FOR YOUR ORDER"
    );
    await expect($("#checkout_complete_container > div")).toHaveText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
    await $("#back-to-products").click();
  }
}

module.exports = new SecurePage();
