import { useAtom } from "jotai"
import React from "react"
// import route from "../../../Route/Route"
import { ScrollView, SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Alert, BackHandler } from "react-native"
import { Navigation } from "react-native-navigation"
import { CachedDataTypes, StorageTypes } from "../../../model/AnduroStorageModel"
import { getData, setData, userData } from "../../../Storage/AnduroStorage"
import { decrypteData, getAlysAddress, getCachedData, getMnemonicKey, setCachedData, showToasterMsg, updateXpubKey } from "../../../Utility/AndurocommonUtils"
import { Button, Input } from "@rneui/themed"
import { useTranslation } from 'react-i18next'
import  Icon  from 'react-native-vector-icons/FontAwesome';
import * as bip39 from "bip39"
import { NetworkListModel } from "../../../model/AnduroNetworkModel"
import route from "../../../Route/Route"
import BackPopupVW from "../../../Common/Views/popup/BackPopupVW"


const AnduroLoginVC = (props: any) => {
  const { t } = useTranslation()
  const [, getdata] = useAtom(getData)
  const [, setdata] = useAtom(setData)
  const [currentPassword, setCurrentPassword] = React.useState<string>("")
  const [hasPassword, setHasPassword] = React.useState<boolean>(false)
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const [isShownToast, setIsShownToast] = React.useState<boolean>(false);
  const [toasttype, setToasttype] = React.useState<string>("");
  const [toastmessage, setToastMessage] = React.useState<string>("");
  const [isBackPopupOpen, setIsBackPopupOpen] = React.useState<boolean>(false)


  // React.useEffect(() => {
  //   setHasPassword(!bip39.validateMnemonic(getCachedData(CachedDataTypes.mnemonic) || ""))
  // }, [])

  React.useEffect(() => {
    const setUserInfo = async () => {
      const userdata = await getCachedData(CachedDataTypes.mnemonic) || ""
      console.log("mnemonic",userdata)
      setHasPassword(!bip39.validateMnemonic(userdata))
    }
    setUserInfo()
  }, [])


  // This function is used to navigate to the dashboard
  const gotoDashboard = async () => {
    if (await verifyPassword()) {
      const mnemonic = await getMnemonicKey(currentPassword)
      console.log("Current password===",currentPassword)
      setdata({ type: StorageTypes.xpubKeys, data: await updateXpubKey(currentPassword) })
      const networkList: NetworkListModel[] = getdata({ type: StorageTypes.networkList })
      console.log("Alyssinfooo====",networkList)
      const alysNetworkInfo: NetworkListModel | undefined = networkList.find((network) => {
        return network.networkType == "alys"
      })  
      if (alysNetworkInfo) {
        let alysAddress = await getCachedData(CachedDataTypes.alysAddress)
        setdata({ type: StorageTypes.alysAddress, data: alysAddress })
      }
      let CachedUserData = JSON.parse(await getCachedData(StorageTypes.userData) || "{}")
      CachedUserData.isLogged = true
      setdata({ type: StorageTypes.userData, data: CachedUserData })
      await setCachedData(StorageTypes.userData, JSON.stringify(CachedUserData))
      let isTestnetfour = await getCachedData(StorageTypes.selectedNetworkVer)
      setdata({ type: StorageTypes.selectedNetworkVer, data: isTestnetfour })
      let networkVersion = await getCachedData(StorageTypes.selectedNetworkVer)
      setdata({ type: StorageTypes.selectedNetworkVer, data: networkVersion })
      let routeinfo = route.afterLogin
      routeinfo.sideMenu.center.bottomTabs.children[1].stack.children[0].component.passProps = {
        password: currentPassword || ""
      }
      Navigation.setRoot({
        root: routeinfo,
      });
    }
  }

  // This function is used to verify the password is correct or wrong
  const verifyPassword = async() => {
    if (hasPassword && currentPassword.trim().length === 0) {
      showToast(t("passwordrequired"), "error");
      return false
    }
    const decryptResult = await decrypteData(
        await getCachedData(CachedDataTypes.mnemonic) || "",
      "",
      currentPassword.trim(),
    )
    if (hasPassword && decryptResult.length === 0) {
      showToast(t("incorrectpassword"), "error");
      return false
    }
    return true
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

  React.useEffect(() => {    
    const backPressEvent = () => {
      setIsBackPopupOpen(true)
      return true;  
    }
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backPressEvent
    );
    return () => subscription.remove();    
  }, []);


const yescallback = () => {
  setIsBackPopupOpen(false)
  BackHandler.exitApp()
} 

const nocallback = () => {
  setIsBackPopupOpen(false)
}


  return (
    <SafeAreaView>
     <View className="bg-gray h-full flex flex-col justify-between">
      <View className="p-14 px-6">
       <View className="w-56 m-auto mb-10"><Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold font-semibold text-center">{t("signanduro")}</Text>
       </View>      
       {hasPassword && (
       <ScrollView>
        <View>
         <Text className="block text-lightgray opacity-70 text-xs uppercase font-geistsemibold font-semibold mb-1">{t("password")}</Text>
         <View className="relative">
         <View className="absolute top-3.5 right-4 z-10 opacity-70">
          <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}
          ><Icon name={showPassword ? 'eye' : 'eye-slash'} size={18} color="#FAFAFA" /></TouchableOpacity>
          </View>
         <View className="bg-popupclr h-11 pr-8 rounded-lg">
         <Input placeholder='Password' placeholderTextColor="#968F8D"  secureTextEntry={!showPassword} inputContainerStyle={[styles.inputOne]} style={[styles.input]}
         onChangeText={(value) => {
          console.log("Input Value:", value);
          setCurrentPassword(value)
          }}
         />
         </View>
         </View>
        </View>
       </ScrollView> 
      )}
      </View>
      <View className="p-6 pb-5">
       <Button className="w-full"
       onPress={()=> gotoDashboard()}
        title="Login to wallet"
        buttonStyle={{
          backgroundColor: '#E8705C',
          borderWidth:1,
          borderColor: '#E8705C',
          borderRadius: 8,
          height: 48,
        }}
        containerStyle={{ borderRadius: 8 }}
        titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 14 }}
      />
      </View>
     </View>
     {isBackPopupOpen && (
        <BackPopupVW yescallback={yescallback} nocallback={nocallback} isVisible={isBackPopupOpen}/>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    fontFamily:'Geist-SemiBold',
    fontSize: 14,
    padding:0,
    color: '#fff',
  },
  inputOne: {
    borderBottomWidth:0,
    borderRadius:8,
    paddingLeft:10
  }
});

export default AnduroLoginVC
