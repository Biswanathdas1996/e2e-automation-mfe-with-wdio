import { Given, When, Then } from "@wdio/cucumber-framework";
import { openUrl, doClick } from "../utils/BaseFunctions";
import Elements from "../Elements/index";
const ExpectChai = require("chai").expect;

Given(/^I am on the home page$/, async () => {
  await openUrl("/");
});

// When(/^I register with (\w+)$/, async (username: string) => {
//   await RegisterPage.fillTheForm(username);
// });

Then(/^I should see a title message saying (.*)$/, (msg) => {
  expect(browser).toHaveAttrContaining(msg, "");
});

Then(
  /^I can see the product (.*) listed with name (.*)$/,
  (productIndex, productName) => {
    expect(Elements.getProductCard(productIndex)).toBeDisplayed();
    expect(Elements.getProductTitle(productIndex)).toBeDisplayed();
    console.log(productName);
  }
);

When(/^I click on the add to cart button of (.*)$/, async (productIndex) => {
  await doClick(await Elements.AddToCardButton(productIndex));
  browser.pause(4000);
});

Then(/^I can see (.*) no of product added to cart$/, async (cartCount) => {
  ExpectChai(await Elements.cartIconBandage.getText()).to.equal(cartCount);
  browser.pause(4000);
});
