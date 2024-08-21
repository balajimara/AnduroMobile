// In index.js of a new project
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';



const HomeScreen = (props) => {
  console.log("consoleTransport")
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
    </View>
  );
};
Navigation.registerComponent('Home', () => HomeScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home'
            }
          }
        ]
      }
    }
  });
});

Navigation.events().registerComponentDidAppearListener(() => {
  console.log('event')
})

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#000000'
  }
});
