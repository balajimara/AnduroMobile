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
import { getCachedData } from './src/Utility/AndurocommonUtils';
import { CachedDataTypes, StorageTypes } from "./src/model/AnduroStorageModel"
import './shim.js'

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
      visible: true
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
  getCachedData(StorageTypes.userData).then((userData) => {
    getCachedData(CachedDataTypes.mnemonic).then((mnemonic) => {
      let userinfo = JSON.parse(userData || "{}")
      if (mnemonic !== null) {
        Navigation.setRoot({
          root: route.login,
        });
      } else {
        if (Object.keys(userinfo).length === 0) {
          Navigation.setRoot({
            root: route.beforeLogin,
          });
        } else {
          if (userinfo.privacyPolicy) {
            Navigation.setRoot({
              root: route.afterPrivacy,
            });
          } else {
            Navigation.setRoot({
              root: route.beforeLogin,
            });
          }
        }
      }
    })
  })
}
