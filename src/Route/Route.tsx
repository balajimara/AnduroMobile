import { Navigation } from "react-native-navigation";
import AnduroLandingVC from "../Components/wallet/landing/AnduroLandingVC";
import AnduroCreateTypeVC from "../Components/wallet/createtype/AnduroCreateTypeVC";
import AnduroSeedsVC from "../Components/wallet/seeds/AnduroSeedsVC";
import AnduroCreatePasswordVC from "../Components/wallet/createpassword/AnduroCreatePasswordVC";
import AnduroSeedConfirmVC from "../Components/wallet/seedconfirm/AnduroSeedConfirmVC";
import AnduroCreateVC from "../Components/wallet/AnduroCreateVC";
import AnduroImportVC from "../Components/wallet/import/AnduroImportVC";
import AnduroLoginVC from "../Components/wallet/login/AnduroLoginVC";

Navigation.registerComponent("AnduroLanding", () => AnduroLandingVC);
Navigation.registerComponent("AnduroCreateType", () => AnduroCreateTypeVC);
Navigation.registerComponent("AnduroSeeds", () => AnduroSeedsVC);
Navigation.registerComponent("AnduroCreatePassword", () => AnduroCreatePasswordVC);
Navigation.registerComponent("AnduroSeedConfirm", () => AnduroSeedConfirmVC);
Navigation.registerComponent("AnduroWalletCreate", () => AnduroCreateVC);
Navigation.registerComponent("AnduroWalletImport", () => AnduroImportVC);
Navigation.registerComponent("AnduroLogin", () => AnduroLoginVC)

/**
 * default root before login
 */

const privacy = {
  stack: {
    children: [
      {
        component: {
          name: "AnduroLanding",
          options: {          
            animations: {
              setRoot: {
                waitForRender: true,
              },
            }
          },
        },
      },
    ],
  },
};

/**
 * default crete type page 
 */

const login = {
  stack: {
    children: [
      {
        component: {
          name: "AnduroLogin",
          options: {
            topBar: {
              visible: false,
            },
            bottomTabs: {
              visible: false
            },
            animations: {
              setRoot: {
                waitForRender: true,
              },
            },
          },
        },
      },
    ],
  },
};

  const route = {
    beforeLogin : privacy,
    login: login

  };
  export default route;