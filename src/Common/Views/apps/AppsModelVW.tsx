import { Button, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";

const  AppsModelVW = (props:any) => {
  const dismiss = () => Navigation.dismissOverlay(props.componentId);

  return (
    <View style={styles.root}>
      <View style={styles.alert}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.message}>{props.message}</Text>
        <Button title="OK" onPress={dismiss} />
      </View>
    </View>
  );
}

const styles =  StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000050',
  },
  alert: {
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    width: 250,
    elevation: 4,
    padding: 16,
  },
  title: {
    fontSize: 18,
  },
  message: {
    marginVertical: 8,
  },
});

AppsModelVW.options = (props:any) => {
  return {
    overlay: {
      interceptTouchOutside: true,
    },
  };
};

export default AppsModelVW;