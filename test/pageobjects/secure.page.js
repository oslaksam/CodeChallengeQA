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
    $("//div[@id='header_container']/div[2]/span");
  }

  get backToProducts() {
    $("#back-to-products");
  }

  get productLink0() {
    $("//a[@id='item_0_title_link']/div");
  }
  get productLink1() {
    $("//a[@id='item_1_title_link']/div");
  }
  get productLink2() {
    $("//a[@id='item_2_title_link']/div");
  }
  get productLink3() {
    $("//a[@id='item_3_title_link']/div");
  }
  get productLink4() {
    $("//a[@id='item_4_title_link']/div");
  }
  get productLink5() {
    $("//a[@id='item_5_title_link']/div");
  }

  get shoppingCounter() {
    $("//div[@id='shopping_cart_container']/a/span");
  }

  get continueShopping() {
    $("#continue-shopping");
  }

  get addBackpack() {
    $("#add-to-cart-sauce-labs-backpack");
  }
  get addBoltTshirt() {
    $("#add-to-cart-sauce-labs-bolt-t-shirt");
  }
  get addOnesie() {
    $("#add-to-cart-sauce-labs-onesie");
  }
  get addBikeLight() {
    $("#add-to-cart-sauce-labs-bike-light");
  }
  get addJacket() {
    $("#add-to-cart-sauce-labs-fleece-jacket");
  }
  get addAllTshirt() {
    $("#add-to-cart-test.allthethings()-t-shirt-(red)");
  }

  get removeBackpack() {
    $("#remove-sauce-labs-backpack");
  }
  get removeBoltTshirt() {
    $("#remove-sauce-labs-bolt-t-shirt");
  }
  get removeOnesie() {
    $("#remove-sauce-labs-onesie");
  }
  get removeBikeLight() {
    $("#remove-sauce-labs-bike-light");
  }
  get removeJacket() {
    $("#remove-sauce-labs-fleece-jacket");
  }
  get removeAllTshirt() {
    $("#remove-test.allthethings()-t-shirt-(red)");
  }
}

module.exports = new SecurePage();
