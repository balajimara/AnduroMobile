import { Navigation } from "react-native-navigation";
import AnduroLandingVC from "../Components/landing/AnduroLandingVC";

Navigation.registerComponent("AnduroLanding", () => AnduroLandingVC);

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

  const route = {
    beforeLogin : beforeLogin,
  };
  export default route;