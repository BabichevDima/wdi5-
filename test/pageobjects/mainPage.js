const Page = require("./page.js");
const mainPageElements = require("../locators/mainPageElements.js");
const commonPageElements = require("../locators/commonPageElements.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class mainPage extends Page {
  constructor() {
    super();
  }

  /* =========================================================== */
  /* Arrangements                                                */
  /* =========================================================== */

  /* ===========================================================  */
  /* Actions                                                      */
  /* ===========================================================  */

  async iPressOnButton(sText) {
    await (await commonPageElements.getButtonByText(sText)).press();
  }

  async iEnterSomeValueToUiElement(sId, sValue) {
    await (await commonPageElements.getControlById(sId)).enterText(sValue);
  }

  async iPressOnTheTreeItemControl(sTitle) {
    await (await commonPageElements.getTreeItemByText(sTitle)).press();
  }

  async iPressOnTheControl(sId) {
    await (await commonPageElements.getControlById(sId)).press();
  }

  async iPressTheControlLink(sValue) {
    await (await commonPageElements.getTitleLinkControlByText(sValue)).press();
  }

  async iPressTheLink(sValue) {
    await (await mainPageElements.getParamTextControlByText(sValue)).press();
  }

  async iPressOnTheArrowDown() {
    await (await mainPageElements.getIconArrowDownControl()).press();
  }

  async iPressOnTheMenuItem() {
    await (await mainPageElements.getMenuItemControl()).press();
  }

  async iPressOnIcon(sSRC) {
    await (await commonPageElements.getIconControlBySRC(sSRC)).press();
  }

  async iPressTheLinkByText(sValue) {
    await (await commonPageElements.getLinkControlByText(sValue)).press();
  }

  async iPressTheText(sValue) {
    await (await commonPageElements.getTextControlByText(sValue)).press();
  }

  /* =========================================================== */
  /* Assertions                                                  */
  /* =========================================================== */

  async iAssertTheControlByText(sValue) {
    const sText = await (await commonPageElements.getTextControlByText(sValue)).getText();

    expect(sText).toEqual(sValue);
  }

  async iAssertTheControlByID(sId, sValue) {
    var sText;

    try {
      sText = await (await commonPageElements.getControlById(sId)).getObjectTitle();
    } catch {
      sText = await (await commonPageElements.getControlById(sId)).getText();
    }

    expect(sText).toEqual(sValue);
  }

  async iAssertTheControlByIdTest(sValue){
    const objectTitle = await (await mainPageElements.getObjectPageHeaderControl()).getObjectTitle();

    expect(objectTitle).toEqual(sValue);
  }

  async iShouldSeeTheURLContaining(sValue){
    // await browser.url("https://sapui5.hana.ondemand.com/#/api/sap.m%23methods/sap.m.isDate");

    const testURL = await browser.getUrl();

    await expect(browser).toHaveUrlContaining(sValue)
  }


}

module.exports = new mainPage();
