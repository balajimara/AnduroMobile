import { Navigation } from "react-native-navigation";
import AnduroLandingVC from "../Components/landing/AnduroLandingVC";
import AnduroCreateTypeVC from "../Components/createtype/AnduroCreateTypeVC";

Navigation.registerComponent("AnduroLanding", () => AnduroLandingVC);
Navigation.registerComponent("AnduroCreateType", () => AnduroCreateTypeVC);
/**
 * default root before login
 */

const beforeLogin = {
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
            }
          },
        },
      },
    ],
  },
};

  const route = {
    beforeLogin : beforeLogin,
    createType: createType
  };
  export default route;