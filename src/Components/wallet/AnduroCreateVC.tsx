import { View, Text,SafeAreaView,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import { Input } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { StorageTypes } from '../../model/AnduroStorageModel';
import { getData } from "../../Storage/AnduroStorage"
import { useAtom } from 'jotai';

const AnduroCreateVC = () => {
    const {t} = useTranslation()
    const [, getdata] = useAtom(getData)
    React.useEffect(() => {
        console.log("dataaaaa", getdata({ type: StorageTypes.userData}))
    })
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
             <Input placeholder='Ex: Aarons Wallet' placeholderTextColor="#968F8D" style={[styles.input]} className="w-full bg-popupclr placeholder-headingcolor text-sm font-geistsemibold h-12 pl-9 text-lightgray rounded-lg focus:outline-none" />
            </View>
           </View>
          </View>
          <View className="w-full p-5 px-6">
           <TouchableOpacity className="bg-continue w-full h-12 py-2.5 rounded-lg font-[jetbrains]">
            <Text className="text-white w-full text-center text-base">{t("continue")}</Text>
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
    outline: 'none',
    boxShadow: 'none',
  },
});

export default AnduroCreateVC