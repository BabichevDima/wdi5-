// module.exports = class commonPageElements {
//     constructor() {}

//     async getButtonByText(sText) {
//       return await browser.asControl({
//         selector: {
//           controlType: "sap.m.Button",
//           properties: {
//             text: sText,
//           },
//         },
//       });
//     }

//     async getTreeItemByText(sTitle) {
//       return await browser.asControl({
//         selector: {
//           controlType: "sap.ui.documentation.DemokitTreeItem",
//           properties: {
//             title: sTitle,
//           },
//         },
//       });
//     }

//     async getControlById(sId) {
//       return await browser.asControl({
//         selector: {
//           id: sId,
//         },
//       });
//     }

//     async getTextControlByText(sValue) {
//       return await browser.asControl({
//         selector: {
//           controlType: "sap.m.Text",
//           properties: {
//             text: sValue,
//           },
//         },
//       });
//     }
  
//     async getLinkControlByText(sValue) {
//       return await browser.asControl({
//         selector: {
//           controlType: "sap.ui.documentation.TitleLink",
//           properties: {
//             text: sValue,
//           },
//         },
//       });
//     }

//   };

// // module.exports = new commonPageElements();


class commonPageElements {

  async getButtonByText(sText) {
    return await browser.asControl({
      selector: {
        controlType: "sap.m.Button",
        properties: {
          text: sText,
        },
      },
    });
  }

  async getTreeItemByText(sTitle) {
    return await browser.asControl({
      selector: {
        controlType: "sap.ui.documentation.DemokitTreeItem",
        properties: {
          title: sTitle,
        },
      },
    });
  }

  async getControlById(sId) {
    return await browser.asControl({
      selector: {
        id: sId,
      },
    });
  }

  async getTextControlByText(sValue) {
    return await browser.asControl({
      selector: {
        controlType: "sap.m.Text",
        properties: {
          text: sValue,
        },
      },
    });
  }

  async getTitleLinkControlByText(sValue) {
    return await browser.asControl({
      selector: {
        controlType: "sap.ui.documentation.TitleLink",
        properties: {
          text: sValue,
        },
      },
    });
  }

  async getIconControlBySRC(sSRC) {
    return await browser.asControl({
      selector: {
        controlType: "sap.ui.core.Icon",
        properties: {
          src: sSRC,
        },
      },
    });
  }

  async getLinkControlByText(sValue) {
    return await browser.asControl({
      selector: {
        controlType: "sap.m.Link",
        properties: {
          text: sValue,
        },
      },
    });
  }

};

module.exports = new commonPageElements();