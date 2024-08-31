import React, { useState } from "react"
import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"
import { Button } from "@rneui/themed"
import { Navigation } from "react-native-navigation"
import { BlurView } from "@react-native-community/blur";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import "react-native-get-random-values"
import Clipboard from "@react-native-clipboard/clipboard"
import RNFS, { DownloadDirectoryPath, writeFile } from "react-native-fs"
import SeedItemVW from "../../../Common/Views/seeditem/SeedItem"
import { generateMnemonic } from "../../../Utility/AndurocommonUtils"

const AnduroBackupWalletVC = (props: any) => {
  const { t } = useTranslation()
  const [mnemonic, setMnemonic] = useState<any>([])
  const [mnemonicFirst, setMnemonicFirst] = useState<any>([])
  const [mnemonicSec, setMnemonicSec] = useState<any>([])
  React.useEffect(() => {
    setTimeout(() => {
      const mnemonicVal = generateMnemonic().toString().split(" ")
      setMnemonic(mnemonicVal)
      setMnemonicFirst(mnemonicVal.slice(0,6))
      setMnemonicSec(mnemonicVal.slice(6,12))
    }, 1000)
  }, [])

  const copyToClipboard = () => {
    Clipboard.setString(mnemonic.join(" "))
    Navigation.dismissAllOverlays()
    Navigation.showOverlay({
      component: {
        name: "Toast",
        options: {
          layout: {
            componentBackgroundColor: "transparent",
          },
          overlay: {
            interceptTouchOutside: false,
          },
        },
        passProps: {
          type: "success",
          message: `${t("copymnemonic")}`,
        },
      },
    })
  }

  const downloadMnemonic = async () => {
    try {
      let path = `${RNFS.DownloadDirectoryPath}/Anduro`
      RNFS.mkdir(path)
      path += "/data.txt"
      RNFS.writeFile(path, JSON.stringify(mnemonic.split(" ")), "utf8")
        .then((response: any) => {
          console.log("FILE WRITTEN!", response)
        })
        .catch((err: any) => {
          console.log(err.message)
        })
    } catch (e) {
      console.log("error", e)
    }
  }

  const navigateConfirmPage = async () => {
    Navigation.push(props.componentId, {
      component: {
        name: "AnduroSeedConfirm",
        passProps: {
          mnemonic: mnemonic.join(" "),
        },
        options: {
          topBar: {
            visible: false,
          },
          bottomTabs: {
            visible: false,
          },
        },
      },
    })
  }
  return (
    <SafeAreaView>
     <View className="bg-gray h-full flex flex-col justify-between">
      <View>
       <View className="p-14 px-6 pb-0">
        <View className="m-auto mb-5 w-80"><Text className="font-geistregular text-headingcolor text-base text-center font-normal">Write down your seed phrase and make sure to keep it private.</Text></View>
        <Text className="font-geistregular text-headingcolor text-base text-center font-normal">This is the unique key to your wallet.</Text>
        <View className="mt-10">
        <View className="relative rounded-3xl overflow-hidden">
        <BlurView
          style={styles.absolute}
          containerStyle={styles.absolute}
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
        />
          <View className="list-numbers bg-popupclr px-4 py-4 pb-3 rounded-3xl flex-row flex-wrap">
           <View className="w-1/2 px-4">
            {mnemonic.length > 0 &&
              mnemonicFirst.map((val: string, i: number) => (    
                <SeedItemVW title={val} index={i+1} key={i}></SeedItemVW>
              ))}          
              </View>
              <View className="w-1/2 px-4">
              {mnemonicSec.length > 0 &&
              mnemonicSec.map((val: string, i: number) => (
                <SeedItemVW title={val} index={i+7} key={i}></SeedItemVW>
            ))}   
           </View>
          </View>
          <View className="popup-show absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center">
           <View className="w-20">
            <Button
                icon={{
                  name: "eye-outline",
                  size: 15,
                  color: "white",
                }}
                title={t("show")} 
                buttonStyle={{
                  backgroundColor: "#231B19",
                  borderRadius: 8,
                  height: 34,
                }}
                titleStyle={{ fontFamily: "Geist-Regular", fontSize: 12, opacity: 0.55 }}
                containerStyle={{ borderRadius: 8 }}
              />
           </View>
          </View>
         </View> 
         <View className="flex-row flex-wrap mt-6">
            <View className="w-1/2 pr-1.5 m-auto">
              <Button
                className="w-full bg-popupclr h-9 rounded-3xl text-lightgray"
                icon={{
                  name: "content-copy",
                  size: 15,
                  color: "white",
                  // opacity:0.55
                }}
                title={t("copytoclipboard")}
                buttonStyle={{
                  backgroundColor: "#231B19",
                  borderRadius: 24,
                  height: 40,
                }}
                titleStyle={{ fontFamily: "Geist-Regular", fontSize: 12, opacity: 0.55 }}
                containerStyle={{ borderRadius: 24 }}
                onPress={() => copyToClipboard()}
              />
            </View>
            <View className="w-1/2 pl-1.5">
              <Button
                className="w-full bg-popupclr h-9 rounded-3xl text-lightgray"
                icon={{
                  name: "crop-free",
                  size: 15,
                  color: "white",
                  // opacity:0.55
                }}
                title={t("downloadkeys")}
                buttonStyle={{
                  backgroundColor: "#231B19",
                  borderRadius: 24,
                  height: 40,
                }}
                containerStyle={{ borderRadius: 24 }}
                titleStyle={{ fontFamily: "Geist-Regular", fontSize: 12, opacity: 0.55 }}
                onPress={() => downloadMnemonic()}
              />
            </View>
          </View>
        </View> 
       </View>
      </View>

      <View className="p-5">
       <Button className="w-full"
            title="Continue"
            delayPressIn={0}
            buttonStyle={{
              backgroundColor: '#E8705C',
              borderRadius: 8,
              height: 48,
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
            disabled
            disabledStyle={{backgroundColor:'#E8705C', color:'#fff',opacity:0.40}}
          />
      </View>
     </View>
    </SafeAreaView>
  )}

  const styles = StyleSheet.create({
    absolute: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: '100%',
      width: '100%',
      zIndex:1
    }
  });

  export default AnduroBackupWalletVC