import { View, Text,SafeAreaView,TextInput,TouchableOpacity, StyleSheet} from 'react-native';
import { useSSR, useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { StorageTypes } from '../../model/AnduroStorageModel';
import { getData, setData } from "../../Storage/AnduroStorage"
import { useAtom } from 'jotai';
import { Button, Input } from "@rneui/themed"
import Icon from 'react-native-vector-icons/FontAwesome';
import validator from "validator"
import { getCachedData, setCachedData } from '../../Utility/AndurocommonUtils';
import { Navigation } from 'react-native-navigation';

const AnduroCreateVC = () => {
    const {t} = useTranslation()
    const [, getdata] = useAtom(getData)
    const [, setdata] = useAtom(setData)
    const [ isShownToast, setIsShownToast ] = useState<boolean>(false)
    const [ toasttype, setToasttype] = useState<string>("")
    const [ toastmessage, setToastMessage] = useState<string>("")
    const [ walletname, setWalletname] = useState<string>("")
    React.useEffect(() => {
        // console.log("dataaaaa", getdata({ type: StorageTypes.userData}))
    })
    const validateWalletName = (value: string) => {
        if (
            validator.isEmpty(value, {
            ignore_whitespace: true,
            })
        ) {
            setToastMessage(t("walletnameempty"))
            setIsShownToast(true)
            setToasttype("error")     
            return false
        }
        if (!validator.isLength(value, { min: 3, max: 50 })) {
            setToastMessage(t("walletnameminmax"))
            setIsShownToast(true)
            setToasttype("success")
            return false
        }
        setWalletname(value)
        return true        
          
    }

    const handleSubmitWalletName = async () => {
        let isValidate = validateWalletName(walletname)
        console.log('isValidate', isValidate, walletname)
        if (isValidate) {
            Navigation.dismissAllOverlays()
            const CachedUserData = getdata({ type: StorageTypes.userData })
            console.log('CachedUserData', CachedUserData, walletname)
            CachedUserData.walletName = walletname
            setdata({ type: StorageTypes.userData, value: CachedUserData })
            await setCachedData(StorageTypes.userData, JSON.stringify(CachedUserData))  
        } else {
            Navigation.dismissAllOverlays()
            Navigation.showOverlay({
                component: {
                  name: 'Toast',
                  options: {
                    layout: {
                          componentBackgroundColor: 'transparent',
                        },
                    overlay: {
                      interceptTouchOutside: false
                    }
                  },
                  passProps: {
                    type: toasttype,
                    message: toastmessage
                  }
                }
              });
        }      
    }
    return (
        <SafeAreaView>       
         <View className="bg-gray h-full flex flex-col justify-between">
          <View className="p-14 px-6">
           <View className="text-center w-44 m-auto mb-4"><Text className="text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold font-semibold">{t("createwalletdec")}</Text></View>
           <View className="mb-10">
            <Text className="font-geistregular text-headingcolor text-sm text-center font-normal">{t("createwalletsubdec")}</Text>
           </View>
           <View>
            <Text className="block text-lightgray opacity-70 text-xs uppercase font-geistsemibold font-semibold mb-1">{t("walletname")}</Text>
            <View className="w-full bg-popupclr placeholder-headingcolor text-sm font-geistsemibold h-12 pl-8 text-lightgray rounded-lg focus:outline-none">
             <Input placeholder='Ex: Aarons Wallet' placeholderTextColor="#968F8D" style={[styles.input]} onChangeText={(value) => { setWalletname(value) }}/>
            </View>
           </View>
          </View>
          <View className="w-full p-5 px-6">
           <TouchableOpacity className="bg-continue w-full h-12 py-2.5 rounded-lg font-[jetbrains]">
            <Text className="text-white w-full text-center text-base" onPress={handleSubmitWalletName}>{t("continue")}</Text>
           </TouchableOpacity>
          </View>
         </View>
        </SafeAreaView>  
    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    fontFamily:'Geist-SemiBold',
    fontSize: 14,
    // outline: 'none',
    // boxShadow: 'none',
  },
});

export default AnduroCreateVC