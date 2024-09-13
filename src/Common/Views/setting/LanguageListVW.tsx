import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from "react-native"
import { useTranslation } from "react-i18next"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { CheckBox, ListItem } from "@rneui/themed"
import ToggleSwitch from "toggle-switch-react-native"
import { showToasterMsg } from "../../../Utility/AndurocommonUtils"
import { NativeCoinModel } from "../../../model/AnduroNetworkModel"

interface LanguageListProps {
    type?: string
    title: string
    callback: () => Promise<void>
    isChecked: boolean
    symbol?: string
    nativeCoins?: NativeCoinModel[]
  }

const LanguageListVW = (props: LanguageListProps) => {
  const { t } = useTranslation()
  const { title, callback, isChecked, symbol, type, nativeCoins } = props
  const [isActive, setIsActive] = React.useState<boolean>(isChecked)


  const Icons = () => {
    if (title === "USD" || title === "English" ) {
      return require("../../../assets/images/usa-flag.png")
    } else if (title === "Spanish") {
      return require("../../../assets/images/spanish.png")
    } else if (title === "Germany") {
      return require("../../../assets/images/germany.png")
    } else if (title === "French") {
      return require("../../../assets/images/french.png")
    } else if (title === "EUR") {
      return require("../../../assets/images/euro-flag.png")
    } else  if (symbol === "BTC") {
      return require("../../../assets/icons/btc.png")
    } else if (symbol === "CBTC") {
      return require("../../../assets/icons/cbtc.png")
    } else if (symbol === "ALYS") {
      return require("../../../assets/icons/alys.png")
    } else {
      return require("../../../assets/icons/btc.png")
    }
  }

  React.useEffect(() => {}, [])

  const updateCoins = async () => {
    if (type === "native-coins" && isChecked && nativeCoins?.length === 1) {
        showToasterMsg("error", t("nativecoinerror"))
        setIsActive(true)
    } else {
        setIsActive(!isActive)
        await callback()
    }
  }

  return (
        <SafeAreaView>
             {type === "native-coins" && (
                <TouchableOpacity onPress={() => updateCoins()}>
                <ListItem className="bg-transparent" containerStyle={styles.listView}>          

                <View className="p-4 py-0 px-5 mb-3 w-full justify-between flex-row flex-wrap items-center">                
                
                <View className="flex-row flex-wrap items-center">
             
                <View className="mr-3"><Image resizeMode={"contain"} source={Icons()} className="w-6 m-auto" /></View>
                <View>
                    <Text className="text-lightgray capitalize text-base">{title}</Text>
                </View>
                </View>
                <View>
                <ToggleSwitch
                    isOn={isActive}
                    onColor="#A94C3D"
                    offColor="#66332b"
                    size="medium"
                    onToggle={() => updateCoins()}
                    />
                </View>
                </View>
                </ListItem>
                </TouchableOpacity>
             )}
            {type !== "native-coins" && (
              <TouchableOpacity onPress={callback}>
              <ListItem className="bg-transparent" containerStyle={styles.listView}>
              <View className="py-2 px-5 w-full">
                <View className="border-b-2 border-currencyLine p-2 pr-0 mb-0">
                <View className="justify-between flex-row flex-wrap">
                  <View className="flex-row items-center">
                  <View className="mr-2"><Image resizeMode={"contain"} source={Icons()} className="w-8 m-auto" /></View>
                  <Text className="text-base font-geistregular text-walletLight custom-radio relative cursor-pointer">{title}</Text>
                  </View>
                  <View>
                  <CheckBox
                    checked={isChecked}
                    onPress={callback}
                    iconType="material-community"
                    checkedIcon="radiobox-marked"
                    uncheckedIcon="radiobox-blank"
                    uncheckedColor="#2E2825"
                    checkedColor="#E8705C"
                    size={26}
                    containerStyle={styles.radioButton}
                  />
                  </View>
                </View>
                </View>
              </View>
              </ListItem>
              </TouchableOpacity>
             )}
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   listView: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    padding:0
   },
   radioButton: {
    backgroundColor:'transparent',
    padding:0
   }
  })

export default LanguageListVW