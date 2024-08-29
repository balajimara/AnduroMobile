import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Text, ListItem } from "@rneui/themed"

interface confirmseedItemProps {
  mnemonicKey: string
  position?: number
  selectAction: number
  key: number
}

const ConfirmSeedItemVW = (props: confirmseedItemProps) => {
  const { mnemonicKey, position, selectAction } = props
  const changeBgColor = () => {
    styles.wrapper.backgroundColor = "#2E2825";
  };
  return (
    <TouchableOpacity  onPress={changeBgColor}>
    <ListItem style={styles.subtitleView} containerStyle={styles.listView}>
    <View className="flex-row items-center justify-between bg-popupclr py-2 px-4 rounded-xl w-full">
    <View><Text className="text-walletLight text-sm mb-1 font-geistregular">{mnemonicKey}</Text></View>
    <View className="py-1.5 w-14 border-transparent border"><Text className="text-center text-sm text-lightgray">x</Text></View>
    </View>
  </ListItem>
 </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  icon: {
    color: '#fff',
    fontSize: 14,
  },
  subtitleView: {
    color: '#000',
    padding:0
  },
  listView: {
    backgroundColor: '#231B19',
    borderRadius:12,
    padding:10,
    marginBottom:10
  }
});

export default ConfirmSeedItemVW