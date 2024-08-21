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
            passProps: {
              from: "auth",
            },
            options: {
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
    beforeLogin : beforeLogin,
  };
  export default route;