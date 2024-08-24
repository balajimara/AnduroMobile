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

Navigation.events().registerAppLaunchedListener(() => {
  SplashScreen.hide();
  Navigation.setRoot({
    root: route.beforeLogin,
  });
});

