// const commonPageElements = require("./commonPageElements");

// class mainPageElements extends commonPageElements {
//   constructor() {
//     super();
//   }

//   async getObjectPageHeaderControl() {
//     return await browser.asControl({
//       selector: {
//         id: "title",
//         viewName: "sap.ui.documentation.sdk.view.SubApiDetail",
//       },
//     });
//   }
// }

// module.exports = new mainPageElements();

// const commonPageElements = require("./commonPageElements");

class mainPageElements {
  async getObjectPageHeaderControl() {
    return await browser.asControl({
      selector: {
        id: "title",
        viewName: "sap.ui.documentation.sdk.view.SubApiDetail",
      },
    });
  }

  async getParamTextControlByText(sValue) {
    return await browser.asControl({
      selector: {
        controlType: "sap.ui.documentation.ParamText",
        viewName: "sap.ui.documentation.sdk.view.SubApiDetail",
        properties: {
          text: sValue,
        },
      },
    });
  }

  async getIconArrowDownControl() {
    return await browser.asControl({
      selector: {
        controlType: "sap.ui.core.Icon",
        viewName: "sap.ui.documentation.sdk.view.SubApiDetail",
        properties: {
          src: {
            regex: {
              source: "slim\\-arrow\\-down",
            },
          },
        },
        ancestor: {
          controlType: "sap.m.SplitButton",
          viewName: "sap.ui.documentation.sdk.view.SubApiDetail",
          properties: {
            text: "Methods",
          },
        },
      },
    });
  }

  async getMenuItemControl() {
    return await browser.asControl({
      selector: {
        controlType: "sap.ui.unified.MenuItem",
        viewName: "sap.ui.documentation.sdk.view.SubApiDetail",
        properties: {
          text: "sap.m.isDate",
        },
        searchOpenDialogs: true,
        interaction: {
          idSuffix: "txt",
        },
      },
    });
  }

}

module.exports = new mainPageElements();
