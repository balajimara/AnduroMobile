import React, { Component } from "react"
import PasswordList from "../../../Common/Views/passwordlist/PasswordListVW"
import {
  encrypteData,
  encryptXpubKey,
  getAlysAddress,
  getMnemonicKey,
  setCachedData,
} from "../../../Utility/AndurocommonUtils"
import { getData, setData } from "../../../Storage/AnduroStorage"
import { useAtom } from "jotai"
import { CachedDataTypes, StorageTypes } from "../../../model/AnduroStorageModel"
import { NetworkListModel } from "../../../model/AnduroNetworkModel"
// import PopupVW from "../../../Common/Views/popup/PopupVW"
import { Navigation } from "react-native-navigation";
import { View, Text,SafeAreaView,StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, Input, ListItem } from "@rneui/themed"
import  Icon  from 'react-native-vector-icons/FontAwesome';
import PopupVW from "../../../Common/Views/popup/PopupVW"

const AnduroCreatePasswordVC = (props:any) => {
  const { t } = useTranslation()
  const [, getdata] = useAtom(getData)
  const [, setdata] = useAtom(setData)
  const {create,importdata} = props;
  const [password, setPassword] = React.useState<{ password: string; confirmPassword: string }>({
    password: "",
    confirmPassword: "",
  })
  const [showWarning, setShowWarning] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const [showConfPassword, setShowConfPassword] = React.useState<boolean>(false)
  const [isValidPassword, setIsValidPassword] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState(true);
  const [passwordCharacters] = React.useState([
    {
      title: t("characterlistOne"),
      isValid: false,
    },
    {
      title: t("characterlistTwo"),
      isValid: false,
    },
    {
      title: t("characterlistThree"),
      isValid: false,
    },
    {
      title: t("characterlistFour"),
      isValid: false,
    },
    {
      title: t("characterlistFive"),
      isValid: false,
    },
  ])


  const handlePasswordChangeAction = (value:string, type: string) => {
    if (type === "password") {
      setPassword({ ...password, password: value })
    } else {
      setPassword({ ...password, confirmPassword: value })
    }
    validatePassword(value, type)
  }

  const handleSkipAction = async (type:string) => {
    if (type !== "continue") {
      setShowWarning(false)
      return
    } else {
      let mnemonicKey = props.mnemonic
      const networkList: NetworkListModel[] = getdata({ type: StorageTypes.networkList })
      let result = await encryptXpubKey(mnemonicKey, "", networkList)
      setdata({ type: StorageTypes.xpubKeys, data: result })
      await setCachedData(CachedDataTypes.mnemonic, mnemonicKey)
      const mnemonic = await getMnemonicKey(password.password)
      if (mnemonic) {
        const alysNetworkInfo: NetworkListModel | undefined = networkList.find((network) => {
          return network.networkType == "alys"
        })
        if (alysNetworkInfo) {
          const alysAddress = getAlysAddress(mnemonic, alysNetworkInfo.chromaBookApi).address
          setdata({ type: StorageTypes.alysAddress, data: alysAddress })
        }
      }
      setShowWarning(false)
      setLoading(true)
      Navigation.push(props.componentId, {
      component: {
        name: 'AnduroSuccess',
        passProps:{
        title: create
          ? t("walletcreated")
          : importdata
          ? t("walletimported")
          : "",
            subtitle: t("reopenwallet"),
        }
      }
      })
    }
  }


  const validatePassword = (value: string, type: string) => {
    if (type == "password") {
      const passwordRegex = [/.{8,}/, /[A-Z]/, /[a-z]/, /\d/]
      for (let i = 0; i < passwordRegex.length; i++) {
        if (passwordRegex[i].test(value)) {
          passwordCharacters[i].isValid = true
        } else {
          passwordCharacters[i].isValid = false
        }
      }
      passwordCharacters[4].isValid = false
      if (password.confirmPassword === value && password.confirmPassword !== "" && value !== "") {
        passwordCharacters[4].isValid = true
      }
    } else {
      passwordCharacters[4].isValid = false
      if (password.password === value && password.password !== "" && value !== "") {
        passwordCharacters[4].isValid = true
      }
    }
    let hasValidPassword = true
    for (let i = 0; i < passwordCharacters.length; i++) {
      if (!passwordCharacters[i].isValid) {
        hasValidPassword = false
        break
      }
    }
    setIsValidPassword(hasValidPassword)
  }

  const handleContinueAction = async () => {
    let mnemonicKey = props.mnemonic
    const networkList: NetworkListModel[] = getdata({ type: StorageTypes.networkList })
    console.log('networkList', networkList, mnemonicKey)
    let secPass = (isValidPassword) ? password.password : ""
    let result = await encryptXpubKey(mnemonicKey, secPass, networkList)
    if(isValidPassword){
      mnemonicKey =  await encrypteData(mnemonicKey,secPass)
    }
    console.log('mnemonicKey', mnemonicKey)
    setdata({ type: StorageTypes.xpubKeys, data: result })
    await setCachedData(CachedDataTypes.mnemonic, mnemonicKey)
    const mnemonic = await getMnemonicKey(password.password)
    if (mnemonic) {
      const alysNetworkInfo: NetworkListModel | undefined = networkList.find((network) => {
        return network.networkType == "alys"
      })
      if (alysNetworkInfo) {
        const alysAddress = getAlysAddress(mnemonic, alysNetworkInfo.chromaBookApi).address
        setdata({ type: StorageTypes.alysAddress, data: alysAddress })
      }
    }

    Navigation.push(props.componentId, {
      component: {
        name: 'AnduroSuccess',
        passProps:{
        title: create
          ? t("walletcreated")
          : importdata
          ? t("walletimported")
          : "",
            subtitle: t("reopenwallet"),
        }}
    })
}


  return (
      <SafeAreaView>
       <View className="bg-gray h-full flex flex-col justify-between">
        <View className="p-18 px-6 pb-0">
         <View className="text-center w-64 m-auto mb-4"><Text className="text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold font-semibold text-center">{t("createpassword")}</Text></View>
         <View className="mb-10">
          <Text className="font-geistregular text-headingcolor text-sm text-center font-normal">{t("typenumber")}</Text>
         </View>
         <View className="mb-5">
          <Text className="block text-lightgray opacity-70 text-xs uppercase font-geistsemibold font-semibold mb-1">{t("password")}</Text>
          <View className="relative">
          <View className="absolute top-3.5 right-4 z-10 opacity-60">
            <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}
            ><Icon name={showPassword ? 'eye' : 'eye-slash'} color="#FAFAFA" /></TouchableOpacity>
          </View>
          <View className="bg-popupclr h-11 pr-8 rounded-lg">
           <Input placeholder='Enter Password' placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputOne]} style={[styles.input]} secureTextEntry={!showPassword} onChangeText={(value) => handlePasswordChangeAction(value, "password")}/>
          </View>
          </View>
         </View>
         <View>
          <Text className="block text-lightgray opacity-70 text-xs uppercase font-geistsemibold font-semibold mb-1">{t("confirmpassword")}</Text>
          <View className="relative">
          <View className="absolute top-3.5 right-4 z-10 opacity-60">
            <TouchableOpacity onPress={()=> setShowConfPassword(!showConfPassword)}
            ><Icon name={showConfPassword ? 'eye' : 'eye-slash'} color="#FAFAFA" /></TouchableOpacity>
          </View>
          <View className="bg-popupclr h-11 pr-8 rounded-lg">
           <Input placeholder='Enter Confirm Password' placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputOne]} style={[styles.input]} secureTextEntry={!showConfPassword} onChangeText={(value) => { handlePasswordChangeAction(value, "confirmpassword") }}/>
          </View>
          </View>
         </View>
        <View className="opacity-40 mt-8">
          {passwordCharacters.map((val: any, i: any) => (
            <PasswordList data={val} key={i} />
          ))}
          </View>
        </View>
        <View className="w-full p-5 px-6">
          <Button className="w-full"
            title="Skip"
            onPress={()=> setShowWarning(true)}
            buttonStyle={{
              backgroundColor: 'transparent',
              borderWidth:1,
              borderColor:'#514e4e',
              borderRadius: 8,
              height: 48,
              marginBottom:15
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
          />
            <Button className="w-full"
            title="Continue"
            delayPressIn={0}
            onPress={()=> handleContinueAction()}
            buttonStyle={{
              backgroundColor: '#E8705C',
              borderRadius: 8,
              height: 48,
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
            disabled={!isValidPassword}
            disabledStyle={{backgroundColor:'#E8705C', borderColor:'#fff',opacity:0.40}}
          />
        </View>
        <PopupVW callback={handleSkipAction} isvisible={showWarning} disabled={loading} />
       </View>
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
},
icon: {
  color: '#fff',
  fontSize: 14,
},
subtitleView: {
  color: '#000',
  padding:0
},
listView: {
  backgroundColor: 'transparent',
  padding:0,
  marginBottom:5,
}
});

export default AnduroCreatePasswordVC


