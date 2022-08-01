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

  get productLink0() {
    return $("//a[@id='item_0_title_link']/div");
  }
  get productLink1() {
    return $("//a[@id='item_1_title_link']/div");
  }
  get productLink2() {
    return $("//a[@id='item_2_title_link']/div");
  }
  get productLink3() {
    return $("//a[@id='item_3_title_link']/div");
  }
  get productLink4() {
    return $("//a[@id='item_4_title_link']/div");
  }
  get productLink5() {
    return $("//a[@id='item_5_title_link']/div");
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

  async addItems() {
    await this.addBackpack.click();
    await this.addBoltTshirt.click();
    await this.addOnesie.click();
    await this.addBikeLight.click();
    await this.addJacket.click();
    await this.addAllTshirt.click();
  }
}

module.exports = new SecurePage();
