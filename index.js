/**
 * @format
 */
//import {AppRegistry} from 'react-native';
import App from './App';
//import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
//import route, { screens } from './src/Route/Route';
//screens();
import { Navigation } from "react-native-navigation";
import route from './src/Route/Route';
import SplashScreen from 'react-native-splash-screen';
import "./i18n"
import { getValueFromStorage } from './src/Storage/AnduroStorage';

Navigation.events().registerAppLaunchedListener(() => {
  SplashScreen.hide();
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: true,
      animate: true,
    },
    bottomTab: {
      fontSize: 12,
      selectedFontSize: 12,
      textColor: "#c3c3c3",
      selectedTextColor: "#ffffff",
      fontFamily: "Montserrat-SemiBold",
    },
    bottomTabs: {
      backgroundColor: "#017DA4",
      titleDisplayMode: "alwaysShow",
    },
    layout: {
      orientation: ["portrait"],
      statusBar: false,
    },
  });
  navigationLogic()
});

// Method that chooses to show between App intro slider and other screens
const navigationLogic = async () => {
  const userToken = await getValueFromStorage("user");
  if (userToken === null) {
    Navigation.setRoot({
      root: route.beforeLogin,
    });
  } else {
    
  }
};

