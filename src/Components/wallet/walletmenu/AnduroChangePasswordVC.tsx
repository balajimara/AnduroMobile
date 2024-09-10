import { ScrollView, SafeAreaView, View, Text, StyleSheet, TouchableOpacity, BackHandler } from "react-native"
import { useTranslation } from 'react-i18next';
import { Button, Input } from "@rneui/themed"
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { useAtom } from "jotai";
import { getData, setData } from "../../../Storage/AnduroStorage";
import React from "react";
import { CachedDataTypes, StorageTypes } from "../../../model/AnduroStorageModel";
import { checkPassword, decrypteData, encrypteData, encryptXpubKey, getCachedData, setCachedData, showToasterMsg, validatePassword } from "../../../Utility/AndurocommonUtils";
import * as bip39 from "bip39"
import { NetworkListModel } from "../../../model/AnduroNetworkModel";
import { Navigation } from "react-native-navigation";
import route from "../../../Route/Route";

const AnduroChangePasswordVC: React.FC = (props: any) => {
  const { t } = useTranslation()
  const [, getdata] = useAtom(getData)
  const [, setdata] = useAtom(setData)

  const [password, setPassword] = React.useState<{
    password: string
    confirmPassword: string
    oldPassword: string
  }>({
    password: "",
    confirmPassword: "",
    oldPassword: "",
  })
  const [showOldPasswd, setShowOldPasswd] = React.useState<boolean>(false)
  const [showNewPasswd, setShowNewPasswd] = React.useState<boolean>(false)
  const [showConfirmPasswd, setShowConfirmPasswd] = React.useState<boolean>(false)
  const [hasPassword, setHasPassword] = React.useState<boolean>(true)
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false)

  React.useEffect(() => {
    const setPasswordInfo = async () => {      
      let passwordstatus = await checkPassword()
      // console.log('passwordstatus', passwordstatus)
      setHasPassword(passwordstatus)
      if (passwordstatus) {
        setdata({ type: StorageTypes.pageTitle, data: t("changepassword")})
      } else {
        setdata({ type: StorageTypes.pageTitle, data: t("setpassword")})
      }
    }    
    setPasswordInfo()
  }, [])

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

  const gotToMenuPage = async () => {
    setIsDisabled(true)
    if (await validatepassword()) {
      const seedPhrase = await getCachedData(CachedDataTypes.mnemonic) || ""
      let decryptResult: string | null = seedPhrase
      if (hasPassword) decryptResult = await decrypteData(seedPhrase, "", password.oldPassword)
      await setCachedData(CachedDataTypes.mnemonic, await encrypteData(decryptResult, password.password.trim()))
      const networkList: NetworkListModel[] = getdata({ type: StorageTypes.networkList })
      encryptXpubKey(decryptResult, password.password.trim(), networkList)
      Navigation.setRoot({
        root: route.afterLogin
      })
    }
  }

  const validatepassword = async (): Promise<boolean> => {
    if (!password.oldPassword && hasPassword) {
      showToasterMsg("error", t("emptypassword"))
      setIsDisabled(false)
      return false
    }
    const seedPhrase = await getCachedData(CachedDataTypes.mnemonic)
    const decryptResult = decrypteData(seedPhrase || "", "", password.oldPassword?.trim() || "")
    if (!decryptResult && hasPassword) {
      showToasterMsg("error", t("incorrectoldpassword"))
      setIsDisabled(false)
      return false
    }
    if (password.password === "" || password.confirmPassword === "") {
      showToasterMsg("error", t("emptypassword"))
      setIsDisabled(false)
      return false
    } else if (password.oldPassword === password.password) {
      showToasterMsg("error", t("passwordmismatch"))
      setIsDisabled(false)
      return false
    } else if (!validatePassword(password.password)) {
      showToasterMsg("error", t("passwordvalidationerror"))
      setIsDisabled(false)
      return false
    } else if (password.password !== password.confirmPassword) {
      showToasterMsg("error", t("confirmpasswordmismatch"))
      setIsDisabled(false)
      return false
    }
    setIsDisabled(true)
    return true
  }

  const handlePasswordChange = (text: any, type: string) => {
    if (type === "oldpassword") {
      setPassword({ ...password, oldPassword:text })
      return
    } else if (type === "password") {
      setPassword({ ...password, password: text })
    } else if (type === "confirmpassword") {
      setPassword({ ...password, confirmPassword: text })
    }
  }

  return (
    <SafeAreaView>
     <View className="bg-gray h-full flex flex-col justify-between">
      <View>
      <ScrollView>
       <View className="p-12 px-6 pb-0">
        <View className="mb-10"><Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold">{`${hasPassword ? t("changepassword") : t("setpassword")}`}</Text></View>
        {hasPassword && (
        <View className="mb-5">
        <Text className="block text-lightgray opacity-70 text-xs uppercase font-geistsemibold font-semibold mb-1">{t("oldpassword")}</Text>
        <View className="relative">
        <View className="absolute top-3 right-4 z-10 opacity-60"><TouchableOpacity onPress={()=> setShowOldPasswd(!showOldPasswd)}
            ><Icon name={showOldPasswd ? 'eye' : 'eye-slash'} size={18} color="#FAFAFA" /></TouchableOpacity>
        </View>
        <View className="bg-popupclr h-11 pr-8 rounded-lg">
         <Input placeholder={t("enteroldpassword")} placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputOne]} style={[styles.input]} onChangeText={(text: string) => handlePasswordChange(text, "oldpassword")} secureTextEntry={!showOldPasswd}/>
        </View>
        </View>
       </View>
        )}
       <View className="mb-5">
        <Text className="block text-lightgray opacity-70 text-xs uppercase font-geistsemibold font-semibold mb-1">{t("newpassword")}</Text>
        <View className="relative">
        <View className="absolute top-3 right-4 z-10 opacity-60">
          <TouchableOpacity onPress={()=> setShowNewPasswd(!showNewPasswd)}
            ><Icon name={showNewPasswd ? 'eye' : 'eye-slash'} size={18} color="#FAFAFA" /></TouchableOpacity>
        </View>
        <View className="bg-popupclr h-11 pr-8 rounded-lg">
         <Input placeholder={t("enternewpassword")} placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputOne]} style={[styles.input]} onChangeText={(text: string) => handlePasswordChange(text, "password")} secureTextEntry={!showNewPasswd}/>
        </View>
        </View>
       </View>
       <View>
        <Text className="block text-lightgray opacity-70 text-xs uppercase font-geistsemibold font-semibold mb-1">{t("confirmnewpassword")}</Text>
        <View className="relative">
        <View className="absolute top-3 right-4 z-10 opacity-60">
        <TouchableOpacity onPress={()=> setShowConfirmPasswd(!showConfirmPasswd)}
            ><Icon name={showConfirmPasswd ? 'eye' : 'eye-slash'} size={18} color="#FAFAFA" /></TouchableOpacity>
        </View>
        <View className="bg-popupclr h-11 pr-8 rounded-lg">
         <Input placeholder={t("enterconfirmpassword")} placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputOne]} style={[styles.input]} onChangeText={(text: string) => handlePasswordChange(text, "confirmpassword")} secureTextEntry={!showConfirmPasswd}/>
        </View>
        </View>
       </View>
       </View>
       </ScrollView>
      </View>
      <View className="w-full p-5 px-6">
        <Button className="w-full"
            title={isDisabled ? t("Loading") : t("confirm")}
            buttonStyle={{
              backgroundColor: '#E8705C',
              borderRadius: 8,
              height: 48,
              
              marginBottom:15
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
            onPress={() => gotToMenuPage()}
            disabled={isDisabled}
            disabledStyle={{backgroundColor:'#E8705C', borderColor:'#fff',opacity:0.40}}
          />
        <Button className="w-full"
            title={t("goback")}
            onPress={()=> {           
              Navigation.setRoot({
                root: route.afterLogin,
            })
            }
            }
            buttonStyle={{
              backgroundColor: 'transparent',
              borderWidth:1,
              borderColor:'#514e4e',
              borderRadius: 8,
              height: 48
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
          />
        </View>
     </View>
    </SafeAreaView>
  )}

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
    }
  });

  export default AnduroChangePasswordVC