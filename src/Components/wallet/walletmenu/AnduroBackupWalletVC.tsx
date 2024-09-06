import React, { useState } from "react"
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, BackHandler } from "react-native"
import { useTranslation } from "react-i18next"
import { Button, Input, Icon } from "@rneui/themed"
import { Navigation } from "react-native-navigation"
import { BlurView } from "@react-native-community/blur";
import "react-native-get-random-values"
import Clipboard from "@react-native-clipboard/clipboard"
import RNFS, { DownloadDirectoryPath, writeFile } from "react-native-fs"
import SeedItemVW from "../../../Common/Views/seeditem/SeedItem"
import { decrypteData, generateMnemonic, getCachedData, showToasterMsg } from "../../../Utility/AndurocommonUtils"
import SecretRecoveryList from "../../../Common/Views/setting/secretRecoveryVW"
import { CachedDataTypes, StorageTypes } from "../../../model/AnduroStorageModel"
import * as bip39 from 'bip39';
import PopupVW from "../../../Common/Views/popup/PopupVW"
import route from "../../../Route/Route"
import { useAtom } from "jotai"
import { getData } from "../../../Storage/AnduroStorage"


const AnduroBackupWalletVC = (props: any) => {
  const { t } = useTranslation()
  const [mnemonic, setMnemonic] = useState<any>([])
  const [mnemonicFirst, setMnemonicFirst] = useState<any>([])
  const [mnemonicSec, setMnemonicSec] = useState<any>([])
  const [showMnemonic, setShowMnemonic] = useState(false)
  const [showPasswordPopup, setShowPasswordPopup] = React.useState<boolean>(false)

  const [isShownToast, setIsShownToast] = React.useState<boolean>(false);
  const [toasttype, setToasttype] = React.useState<string>("");
  const [toastmessage, setToastMessage] = React.useState<string>("");
  const [,getdata] = useAtom(getData)

  const data = [
    {title: "vivid" },{title: "power" },{title: "gesture" },{title: "badge" },{title: "shoulder" },{title: "gap" },{title: "image" },
    {title: "negative" },{title: "mountain" },{title: "vital" },{title: "solve" },{title: "mandate" },
  ]

  React.useEffect(() => {
    setMnemonicFirst(data.slice(0, 6));
    setMnemonicSec(data.slice(6, 12));
    setShowMnemonic(true);
  }, []);


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

  React.useEffect(() => {    
    const backPressEvent = () => {
      Navigation.setRoot({
        root: route.afterLogin
      })
      return true;
    }
      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        backPressEvent
      );
      return () => subscription.remove();
    
}, []);

  const handleShow = async () => {
    const seeds: string = await getCachedData(CachedDataTypes.mnemonic) || "";
    console.log("seeds===",seeds)
    if (bip39.validateMnemonic(seeds)) {
      setMnemonic(seeds.split(/\s+/));
      setMnemonicFirst(seeds.split(/\s+/).slice(0, 6));
      setMnemonicSec(seeds.split(/\s+/).slice(6, 12));
      setShowMnemonic(false);
    } else {
      setShowPasswordPopup(true);
    }
  };

  const verifyPassword = async (password: string) => {
    if (password === null || password === "") {
      password === "" ? showToast(t("passwordrequired"), "error") : setShowPasswordPopup(false)
      return
    }

    const decryptResult = await decrypteData(
     await getCachedData(CachedDataTypes.mnemonic) || "",
      "",
      password.trim(),
    )
    console.log("decryptresult--",decryptResult)
    if (!decryptResult) {
      showToast(t("incorrectpassword"), "error")
    } else {
      setShowPasswordPopup(false)
      setMnemonic(decryptResult.split(/\s+/))
      setMnemonicFirst(decryptResult.split(/\s+/).slice(0, 6));
      setMnemonicSec(decryptResult.split(/\s+/).slice(6, 12));
      setShowMnemonic(false);
    }
  }

  const copyToClipboard = () => {
    Clipboard.setString(mnemonic.join(" "))
    showToasterMsg("success", `${t("copymnemonic")}`)
  }

  const downloadMnemonic = async () => {
    try {
      let userdata = getdata({ type: StorageTypes.userData })
      let path = `${RNFS.DownloadDirectoryPath}/Anduro/`
      RNFS.mkdir(path)
      console.log('userdata.walletName', userdata)
      path += `${userdata.walletName}.json`
      // write the file
      RNFS.writeFile(path, JSON.stringify(mnemonic.join(" ")), "utf8")
        .then((response: any) => {
          console.log('response', response)
          showToasterMsg("success",`${t("downloadkeysuccess")}` )
        })
        .catch((err: any) => {
          console.log(err.message)
        })
    } catch (e) {
      console.log("error", e)
    }
  }

  const showToast = (message: string, type: string) => {
    setToastMessage(message);
    setToasttype(type);
    setIsShownToast(true);
  };


  React.useEffect(() => {
    if (isShownToast) {
      showToasterMsg(toasttype, toastmessage)
      setIsShownToast(false);
    }
  }, [isShownToast]);

  return (
    <SafeAreaView>
     <View className="bg-gray h-full flex flex-col justify-between">
      <View>
       <View className="p-14 px-6 pb-0">
        <View className="mb-10"><Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold">{t("backupwallet")}</Text></View>
        <View className="m-auto mb-5 w-80"><Text className="font-geistregular text-headingcolor text-base text-center font-normal">{t("seedpharse")}</Text></View>
        <Text className="font-geistregular text-headingcolor text-base text-center font-normal">{t("walletuniquekey")}</Text>
        <View className="mt-10">
        <View className="relative rounded-3xl overflow-hidden">
        {showMnemonic && (
        <>
        <BlurView
            style={styles.absolute}
            containerStyle={styles.absolute}
            blurType="light"
            blurAmount={5}
            reducedTransparencyFallbackColor="white" />
            <View className="list-numbers bg-popupclr px-4 py-4 pb-3 rounded-3xl flex-row flex-wrap">
              <View className="w-1/2 px-4">
                {mnemonicFirst.map((val: any, i: number) => (
                  <SecretRecoveryList data={val} index={i + 1} key={i} />
                ))}
              </View>
              <View className="w-1/2 px-4">
                {mnemonicSec.map((val: any, i: number) => (
                  <SecretRecoveryList data={val} index={i + 7} key={i} />
                ))}
              </View>
            </View>
            <View className="popup-show absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center">
              <View className="w-24">
                <Button
                  icon={{
                    name: "eye-outline",
                    type: "material-community",
                    size: 20,
                    color: "white",
                  }}
                  title={t("Show")}
                  onPress={handleShow}
                  buttonStyle={{
                    backgroundColor: "#2E2825",
                    borderRadius: 8,
                    height: 39
                  }}
                  titleStyle={{ fontFamily: "JetBrainsMono-SemiBold", fontSize: 14 }}
                  containerStyle={{ borderRadius: 8 }} />
              </View>
            </View>
            </>
        )}
        {!showMnemonic && (
         <View className="list-numbers bg-popupclr px-4 py-4 pb-3 rounded-3xl flex-row flex-wrap">
           <View className="w-1/2 px-4">
            {mnemonicFirst.length > 0 &&
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
       )}
      {showPasswordPopup && (
        <PopupVW type="password" callback={verifyPassword}/>
        )}
        </View>
         {!showMnemonic && (
          <View className="flex-row flex-wrap mt-6">
            <View className="w-1/2 pr-1.5 m-auto">
              <Button
                className="w-full bg-popupclr h-9 rounded-3xl text-lightgray"
                icon={{
                  name: "content-copy",
                  size: 15,
                  color: "white",
                }}
                iconContainerStyle={{
                  opacity:0.55
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
                }}
                iconContainerStyle={{
                  opacity:0.55
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
         )}
        </View>
       </View>
      </View>

     
      <View className="p-5">
       <Button className="w-full"
            title={t("goback")}
            onPress={()=> {
              Navigation.mergeOptions(props.componentId, {
                bottomTabs: {
                  backgroundColor: "#140401",
                  titleDisplayMode: "alwaysHide",
                  currentTabIndex: 1,
                  visible: true,
                }
              })
              Navigation.setRoot({
                root: route.afterLogin,
            })
            }
            }
            buttonStyle={{
              backgroundColor: '#E8705C',
              borderRadius: 8,
              height: 48,
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
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
    },
    input: {
      height: 40,
      fontFamily:'JetBrainsMono-SemiBold',
      fontSize: 14,
      padding:0,
      color: '#fff',
    },
    inputOne: {
      borderBottomWidth:0,
      borderRadius:8,
      paddingLeft:10,
      paddingTop:3
    }
  });

  export default AnduroBackupWalletVC


