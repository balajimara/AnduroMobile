import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from "react-native"
import { useTranslation } from "react-i18next"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { ListItem } from "@rneui/themed"
import ToggleSwitch from "toggle-switch-react-native"
import { showToasterMsg } from "../../../Utility/AndurocommonUtils"

interface LanguageListProps {
    type?: string
    title: string
    callback: () => Promise<void>
    isChecked: boolean
    symbol?: string
    nativeCoins?: string[]
  }

const LanguageListVW = (props: LanguageListProps) => {
  const { t } = useTranslation()
  const { title, callback, isChecked, symbol, type, nativeCoins } = props
  const [isActive, setIsActive] = React.useState<boolean>(isChecked)
   
  const validateNativeCoins = () => {
    if (type === "native-coins" && isChecked && nativeCoins?.length === 1) {      
      showToasterMsg("error", t("nativecoinerror"))  
      setIsActive(true)
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
                <View className="bg-popupclr p-4 py-2 pr-2.5 mb-3 w-full justify-between flex-row flex-wrap items-center">
                <View className="flex-row flex-wrap items-center"> 
                <View className="mr-3"><Image resizeMode={"contain"} source={require("../../../assets/images/euro-flag.png")} className="w-8 m-auto" /></View>
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
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   listView: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    padding:0
   }
  })

export default LanguageListVW