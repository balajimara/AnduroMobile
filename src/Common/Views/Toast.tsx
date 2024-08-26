import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Navigation } from "react-native-navigation"

const Toast = function (props: any) {
 const { message, type, componentId } = props
  return (
    <View style={styles.root}>
      <View style={styles.root}>
        <Text style={styles.text}>{message}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Navigation.dismissOverlay(props.componentId)}
        >
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  toast: {
    elevation: 2,
    flexDirection: 'row',
    height: 40,
    margin: 16,
    borderRadius: 20,
    backgroundColor: "#000000",
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 16,
  },
  button: {
    marginRight: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// Toast.options = {
//   layout: {
//     componentBackgroundColor: 'transparent',
//   },
//   overlay: {
//     interceptTouchOutside: false,
//   },
// };

export default Toast