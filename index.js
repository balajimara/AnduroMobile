
import { Navigation } from "react-native-navigation";
import route from "./src/Route/Route";


Navigation.events().registerAppLaunchedListener(() => {
  // SplashScreen.hide();
  Navigation.setRoot({
    root: route.beforeLogin,
  });
});
