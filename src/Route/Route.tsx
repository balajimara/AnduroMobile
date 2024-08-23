import { Navigation } from "react-native-navigation";
import AnduroLandingVC from "../Components/wallet/landing/AnduroLandingVC";
import AnduroCreateTypeVC from "../Components/wallet/createtype/AnduroCreateTypeVC";
import AnduroSeedsVC from "../Components/wallet/seeds/AnduroSeedsVC";
import AnduroCreatePasswordVC from "../Components/wallet/createpassword/AnduroCreatePasswordVC";
import AnduroSeedConfirmVC from "../Components/wallet/seedconfirm/AnduroSeedConfirmVC";
import AnduroCreateVC from "../Components/wallet/AnduroCreateVC";

Navigation.registerComponent("AnduroLanding", () => AnduroLandingVC);
Navigation.registerComponent("AnduroCreateType", () => AnduroCreateTypeVC);
Navigation.registerComponent("AnduroSeeds", () => AnduroSeedsVC);
Navigation.registerComponent("AnduroCreatePassword", () => AnduroCreatePasswordVC);
Navigation.registerComponent("AnduroSeedConfirm", () => AnduroSeedConfirmVC);
Navigation.registerComponent("WalletCreate", () => AnduroCreateVC);

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

const createType = {
  stack: {
    children: [
      {
        component: {
          name: "AnduroCreateType",
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

/**
 * default crete type page 
 */

const seeds = {
  stack: {
    children: [
      {
        component: {
          name: "AnduroSeeds",
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


/**
 * default crete type page 
 */

const walletCreate = {
  stack: {
    children: [
      {
        component: {
          name: "WalletCreate",
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
    createType: createType,
    seeds: seeds,
    walletCreate: walletCreate

  };
  export default route;