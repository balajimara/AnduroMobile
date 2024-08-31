import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const AnduroMenuVC = () => {
  return (
    <SafeAreaView>
      <View className="navbar bg-gray p-3.5 justify-between">
       <View className="navbar-start w-auto">
       </View>
       <View className="navbar-center">
        <Text className="font-geistsemibold capitalize text-base text-lightgray w-64 m-auto whitespace-nowrap overflow-hidden text-ellipsis">Profile</Text>
       </View>
       <View className="navbar-end w-auto">
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
       </View>
      </View>
      <View className="p-3.5 settings-menu">
       <View className="flex items-center pb-8 w-full relative">
        <Text className="font-geistregular text-base text-walletLight font-normal cursor-pointer"><Icon style={[styles.icon]} name="wallet-outline"></Icon> Backup Wallet</Text>
        <View className="absolute right-3.5"><Icon style={[styles.icon]} name="chevron-right"></Icon></View>
       </View>  
       <View className="flex items-center pb-8 w-full relative">
        <Text className="font-geistregular text-base text-walletLight font-normal cursor-pointer"><Icon style={[styles.icon]} name="currency-sign"></Icon> Select Currency</Text>
        <View className="absolute right-3.5"><Icon style={[styles.icon]} name="chevron-right"></Icon></View>
       </View>
       <View className="flex items-center pb-8 w-full relative">
        <Text className="font-geistregular text-base text-walletLight font-normal cursor-pointer"><Icon style={[styles.icon]} name="translate"></Icon> Change Language</Text>
        <View className="absolute right-3.5"><Icon style={[styles.icon]} name="chevron-right"></Icon></View>
       </View>
       <View className="flex items-center pb-8 w-full relative">
        <Text className="font-geistregular text-base text-walletLight font-normal cursor-pointer"><Icon style={[styles.icon]} name="hand-coin-outline"></Icon> Native Coins</Text>
        <View className="absolute right-3.5"><Icon style={[styles.icon]} name="chevron-right"></Icon></View>
       </View>
       <View className="flex items-center pb-8 w-full relative">
        <Text className="font-geistregular text-base text-walletLight font-normal cursor-pointer"><Icon style={[styles.icon]} name="form-textbox-password"></Icon> Set Password</Text>
        <View className="absolute right-3.5"><Icon style={[styles.icon]} name="chevron-right"></Icon></View>
       </View>
       <View className="flex items-center pb-8 w-full relative">
        <Text className="font-geistregular text-base text-walletLight font-normal cursor-pointer"><Icon style={[styles.icon]} name="logout"></Icon> Logout</Text>
        <View className="absolute right-3.5"><Icon style={[styles.icon]} name="chevron-right"></Icon></View>
       </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  icon: {
    color: "#fff",
    fontSize: 14,
  },
})

export default AnduroMenuVC
