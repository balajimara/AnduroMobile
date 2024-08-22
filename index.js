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


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: route.beforeLogin,
  });
});

