import { View, Text,SafeAreaView,TextInput, StyleSheet} from 'react-native';
import { useSSR, useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { StorageTypes } from '../../model/AnduroStorageModel';
import { getData, setData } from "../../Storage/AnduroStorage"
import { useAtom } from 'jotai';
import { Button, Input } from "@rneui/themed"
import validator from "validator"
import { getCachedData, setCachedData } from '../../Utility/AndurocommonUtils';
import { Navigation } from 'react-native-navigation';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const AnduroCreateVC = (props: any) => {
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
            if (props.mnemonic) {
              Navigation.push(props.componentId, {
                component: {
                  name: "AnduroCreatePassword",
                }
              })
            } else {
              Navigation.push(props.componentId, {
                component: {
                  name: "AnduroSeeds",
                }
              })
            }
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
           <View className="text-center w-44 m-auto mb-4"><Text className="text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold">{t("createwalletdec")}</Text></View>
           <View className="mb-10">
            <Text className="font-geistregular text-headingcolor text-sm text-center font-normal">{t("createwalletsubdec")}</Text>
           </View>
           <View>
            <Text className="block text-lightgray opacity-70 text-xs uppercase font-geistsemibold font-semibold mb-1">{t("walletname")}</Text>
            <View className="relative">
            <View className="absolute top-3 left-4 z-10"><Icon style={[styles.icon]} name="wallet"></Icon></View>
            <View className="bg-popupclr h-11 pl-8 rounded-lg">
             <Input placeholder='Ex: Aarons Wallet' placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputOne]} style={[styles.input]} onChangeText={(value) => { setWalletname(value) }}/>
            </View>
            </View>
           </View>
          </View>
          <View className="w-full p-5 px-6">
           <Button className="w-full"
              title="Continue"
              buttonStyle={{
                backgroundColor: '#E8705C',
                borderRadius: 8,
                height: 48,
              }}
              titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }} 
              onPress={() => {handleSubmitWalletName()}}
            />
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
    padding:0,
    color: '#fff',
  },
  inputOne: {
    borderBottomWidth:0,
    borderRadius:8,
  },
  icon: {
    color: '#fff',
    fontSize: 14,
  }
});

export default AnduroCreateVC