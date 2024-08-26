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
import { CachedDataTypes } from "./src/model/AnduroStorageModel"

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
      currentTabIndex: 1,
      visible: false
    },
    layout: {
      orientation: ["portrait"],
      statusBar: false,
    },
  });
  navigationLogic()
});

// Method that chooses to show between App intro slider and other screens
navigationLogic = () => {
  getCachedData(CachedDataTypes.mnemonic).then((mnemonic) => {
    console.log('mnemonic', mnemonic)
    if (mnemonic !== null) {
      Navigation.setRoot({
        root: route.login,
      });
    } else {     
        Navigation.setRoot({
          root: route.beforeLogin,
        });      
    }
  })
}
