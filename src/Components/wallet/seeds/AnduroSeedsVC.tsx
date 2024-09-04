import { View, Text, SafeAreaView, BackHandler } from "react-native"
import { useTranslation } from "react-i18next"
import { Button } from "@rneui/themed"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import "react-native-get-random-values"
import Clipboard from "@react-native-clipboard/clipboard"
import React, { useState } from "react"
import { Navigation } from "react-native-navigation"
import RNFS, { DownloadDirectoryPath, writeFile } from "react-native-fs"
import SeedItemVW from "../../../Common/Views/seeditem/SeedItem"
import { generateMnemonic, showToasterMsg } from "../../../Utility/AndurocommonUtils"
import { StorageTypes } from "../../../model/AnduroStorageModel"
import { getData } from "../../../Storage/AnduroStorage"
import { useAtom } from "jotai"

const AnduroSeedsVC = (props: any) => {
  const { t } = useTranslation()
  const [mnemonic, setMnemonic] = useState<any>([])
  const [mnemonicFirst, setMnemonicFirst] = useState<any>([])
  const [mnemonicSec, setMnemonicSec] = useState<any>([])
  const [,getdata] = useAtom(getData)
  React.useEffect(() => { 
    setTimeout(() => {
      const mnemonicKey = generateMnemonic()
      const mnemonicVal: string[] =  mnemonicKey.toString().split(" ")
      setMnemonic(mnemonicVal)
      setMnemonicFirst(mnemonicVal.slice(0,6))
      setMnemonicSec(mnemonicVal.slice(6,12))
    }, 1000)

  }, [])

  React.useEffect(() => {    
    const backPressEvent = () => {
      Navigation.pop(props.componentId) 
      return true;
    }
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backPressEvent
    );
    return () => subscription.remove();    
  }, []);

  const copyToClipboard = () => {
    Clipboard.setString(mnemonic.join(" ").toLowerCase())
    showToasterMsg("success",`${t("copymnemonic")}` )  
  }

  const downloadMnemonic = async () => {
    try {
      let userdata = getdata({ type: StorageTypes.userData })
      let path = `${RNFS.DownloadDirectoryPath}/Anduro/`
      RNFS.mkdir(path)
      path += `${userdata.walletName}.json`
      // write the file
      RNFS.writeFile(path, JSON.stringify(mnemonic), "utf8")
        .then((response: any) => {
          showToasterMsg("success",`${t("downloadkeysuccess")}` )
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
    {mnemonic.length > 0 && (
   
      <View className="bg-gray h-full flex flex-col justify-between">
        <View className="p-14 pb-0 px-6">
          <View className="w-64 m-auto mb-4">
            <Text className="text-3xl text-center text-lightgray opacity-95 leading-10 font-geistsemibold font-semibold text-center">
              {t("secret")}
            </Text>
          </View>
          <View className="mb-10">
            <Text className="font-geistregular text-headingcolor text-sm text-center font-normal">
              {t("createwalletsubdec")}
            </Text>
          </View>
          <View className="list-numbers mb-6 bg-popupclr px-4 py-4 pb-3 rounded-3xl flex-row flex-wrap">
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
          <View className="flex-row flex-wrap mb-0">
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

        <View className="p-5 pt-0">
          <Text className="font-geistregular text-center text-headingcolor text-xs font-normal mb-5">
            You’ll be asked to confirm the positions in the next step. Make sure you’ve backed these
            up somewhere
          </Text>
          <Button
            className="w-full"
            title="Continue"
            buttonStyle={{
              backgroundColor: "#E8705C",
              borderRadius: 8,
              height: 48,
            }}
            titleStyle={{ fontFamily: "JetBrainsMono-SemiBold", fontSize: 16 }}
            containerStyle={{ borderRadius: 8 }}
            onPress={() => navigateConfirmPage()}
          />
        </View>
      </View>
    
    )}    
          </SafeAreaView>  
  )
}

export default AnduroSeedsVC
