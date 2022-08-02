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
    //return $("//div[@id='shopping_cart_container']/a/span");
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
    await expect(this.productLink0).toBeDisplayed();
    await expect(this.productLink1).toBeDisplayed();
    await expect(this.productLink2).toBeDisplayed();
    await expect(this.productLink3).toBeDisplayed();
    await expect(this.productLink4).toBeDisplayed();
    await expect(this.productLink5).toBeDisplayed();
  }

  async checkAdded() {
    await expect(this.shoppingCounter).toHaveText("6");
  }

  async checkRemoved() {
    let elem = await this.shoppingCounter;
    await expect(elem).not.toExist();
  }
}

module.exports = new SecurePage();
