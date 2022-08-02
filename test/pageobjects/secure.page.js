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
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async addItems() {
    await this.addBackpack.click();
    await this.addBoltTshirt.click();
    await this.addOnesie.click();
    await this.addBikeLight.click();
    await this.addJacket.click();
    await this.addAllTshirt.click();
  }

  async removeItems() {
    await this.removeBackpack.click();
    await this.removeBoltTshirt.click();
    await this.removeOnesie.click();
    await this.removeBikeLight.click();
    await this.removeJacket.click();
    await this.removeAllTshirt.click();
  }

  /**
   * a method to check if the elements exist on the page
   *
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

  async checkAdded() {
    await expect(this.shoppingCounter).toHaveText("6");
  }

  async checkRemoved() {
    let elem = await this.shoppingCounter;
    await expect(elem).not.toExist();
  }

  async checkTitle(data) {
    await expect(this.productLinkBikeLight).toHaveText(data.bikelight.name);
    await expect(this.productLinkBoltTshirt).toHaveText(data.boltTshirt.name);
    await expect(this.productLinkOnesie).toHaveText(data.onesie.name);
    await expect(this.productLinkAllTshirt).toHaveText(data.allTshirt.name);
    await expect(this.productLinkBackpack).toHaveText(data.backpack.name);
    await expect(this.productLinkJacket).toHaveText(data.jacket.name);
  }

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

  async checkPrice(data) {
    await expect(this.bikeLightPrice).toHaveText(data.bikelight.price);
    await expect(this.boltTshirtPrice).toHaveText(data.boltTshirt.price);
    await expect(this.onesiePrice).toHaveText(data.onesie.price);
    await expect(this.allTshirtPrice).toHaveText(data.allTshirt.price);
    await expect(this.backPackPrice).toHaveText(data.backpack.price);
    await expect(this.jacketPrice).toHaveText(data.jacket.price);
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutButton.click();
  }

  async checkCartCount(count) {
    await expect(this.shoppingCounter).toHaveText(count);
  }

  async purchaseItems(firstName, lastName, zipCode) {
    await $("#shopping_cart_container > a").click();
    await $("#checkout").click();
    await $("#first-name").setValue(firstName);
    await $("#last-name").setValue(lastName);
    await $("#postal-code").setValue(zipCode);
    await $("#continue").click();
  }

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
