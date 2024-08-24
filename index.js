/**
 * @format
 */
//import {AppRegistry} from 'react-native';
//import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
//import route, { screens } from './src/Route/Route';
//screens();
import { Navigation } from "react-native-navigation";
import route from './src/Route/Route';
import SplashScreen from 'react-native-splash-screen';
import "./i18n"
import { getValueFromStorage } from './src/Storage/AnduroStorage';
import { getCachedData } from './src/Utility/AndurocommonUtils';

Navigation.events().registerAppLaunchedListener(() => {
  SplashScreen.hide();
  Navigation.setDefaultOptions({
    topBar: {
      background:{
        color: "#140401"
      },
      title: {
         color: "#fff",
         fontFamily: "Geist-SemiBold",
      },
      visible: true,
      drawBehind: true,
      animate: true,
    },
    bottomTab: {
      margin: 12,
      selectedFontSize: 12,
      textColor: "#c3c3c3",
      selectedTextColor: "#ffffff",
      fontFamily: "Montserrat-SemiBold",
    },
    bottomTabs: {
      backgroundColor: "#140401",
      titleDisplayMode: "alwaysHide",
      currentTabIndex: 1
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
      root: route.afterLogin,
    });
  } else {
    
  }
};

