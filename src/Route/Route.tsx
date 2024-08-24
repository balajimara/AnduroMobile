import { Navigation } from "react-native-navigation";
import AnduroLandingVC from "../Components/wallet/landing/AnduroLandingVC";
import AnduroCreateTypeVC from "../Components/wallet/createtype/AnduroCreateTypeVC";
import AnduroSeedsVC from "../Components/wallet/seeds/AnduroSeedsVC";
import AnduroCreatePasswordVC from "../Components/wallet/createpassword/AnduroCreatePasswordVC";
import AnduroSeedConfirmVC from "../Components/wallet/seedconfirm/AnduroSeedConfirmVC";
import AnduroCreateVC from "../Components/wallet/AnduroCreateVC";
import AnduroImportVC from "../Components/wallet/import/AnduroImportVC";
import AnduroLoginVC from "../Components/wallet/login/AnduroLoginVC";
import AnduroCollectiblesVC from "../Components/tabs/collectibles/AnduroCollectiblesVC";
import AnduroDashboardVC from "../Components/tabs/dashboard/AnduroDashboardVC";
import AnduroAppsVC from "../Components/tabs/apps/AnduroAppsVC";

Navigation.registerComponent("AnduroLanding", () => AnduroLandingVC);
Navigation.registerComponent("AnduroCreateType", () => AnduroCreateTypeVC);
Navigation.registerComponent("AnduroSeeds", () => AnduroSeedsVC);
Navigation.registerComponent("AnduroCreatePassword", () => AnduroCreatePasswordVC);
Navigation.registerComponent("AnduroSeedConfirm", () => AnduroSeedConfirmVC);
Navigation.registerComponent("AnduroWalletCreate", () => AnduroCreateVC);
Navigation.registerComponent("AnduroWalletImport", () => AnduroImportVC);
Navigation.registerComponent("AnduroLogin", () => AnduroLoginVC)
Navigation.registerComponent("collectible", () => AnduroCollectiblesVC)
Navigation.registerComponent("dashboard", () => AnduroDashboardVC)
Navigation.registerComponent("apps", () => AnduroAppsVC)
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

const afterLogin = {
  bottomTabs: {
    children: [
      {
        stack: {
          id: "collectibles",
          children: [
            {
              component: {
                name: "collectibles",
              },
            },
          ],
          options: {
            bottomTab: {
              icon: require("./../assets/images/tab/collectible.png")
            }
          }
        },
      },
      {
        stack: {
          id: "dashboard",
          children: [
            {
              component: {
                name: "dashboard", 
              },
            },
          ],
          options: {
            bottomTab: {
              icon: require("./../assets/images/tab/dashboard.png")
            }
          }
        },
      },
      {
        stack: {
          id: "apps",
          children: [
            {
              component: {
                name: "apps", 
              },
            },
          ],
          options: {
            bottomTab: {
              icon: require("./../assets/images/tab/apps.png"),
              selectedIcon: require("./../assets/images/tab/apps_active.png"),
            }
          }
        },
      },
    ],
  },
};


const route = {
  beforeLogin : privacy,
  login: login,
  afterLogin

};
export default route;