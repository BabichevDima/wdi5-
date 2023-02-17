const mainPage = require('../pageobjects/mainPage');

describe('My application TEST WDI5', () => {
    it('Press button "Get Started with UI5"', async () => {

        await mainPage.iPressOnButton("Accept All");
        await mainPage.iPressOnButton("Get Started with UI5");
        await mainPage.iAssertTheControlByText(" Get Started: Setup, Tutorials, and Demo Apps ");
    });


    it('Enter value', async () => {

        await mainPage.iEnterSomeValueToUiElement("sdk---topicMaster--searchField", "Walkthrough");
        await mainPage.iPressOnTheTreeItemControl("Step 27: Unit Test with QUnit");
        await mainPage.iAssertTheControlByText(" Step 27: Unit Test with QUnit ");
    });


    it('Select Icon Tab', async () => {

        await mainPage.iPressOnTheControl("sdk---app--toolsTab");
        await mainPage.iPressOnTheControl("sdk---app--searchControl-openingBtn-img");
        await mainPage.iEnterSomeValueToUiElement("sdk---app--searchControl-searchField", "test");
        await mainPage.iAssertTheControlByID("sdk---searchPage--searchTitle", 'Search Results for "test"');
    });


    it('Press the API Reference section', async () => {

        await mainPage.iPressOnTheControl("sdk---app--apiMasterTab");
        await mainPage.iPressTheControlLink("Main Controls");
        await mainPage.iAssertTheControlByIdTest("namespace sap.m");
    });

    it('Press the Methods button', async () => {

        await mainPage.iPressOnButton("Methods");
        await mainPage.iPressTheLink("sap.m.closeKeyboard");
        await mainPage.iPressOnTheArrowDown();
        await mainPage.iPressOnTheMenuItem();
        await mainPage.iShouldSeeTheURLContaining("isDate");
    });


    it('Press the Avatar Item', async () => {

        await mainPage.iPressOnTheTreeItemControl("Avatar");
        await mainPage.iPressTheLinkByText("sap.m.Avatar");
        await mainPage.iPressTheText("Avatar");
        await mainPage.iShouldSeeTheURLContaining("sap.m.sample.Avatar");
    });

})


