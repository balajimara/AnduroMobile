import {Navigation} from 'react-native-navigation';
// import 'nativewind/types';
import SplashScreen from 'react-native-splash-screen';
import App from './App';
Navigation.registerComponent('com.anduromobile.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  SplashScreen.hide();
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.anduromobile.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
