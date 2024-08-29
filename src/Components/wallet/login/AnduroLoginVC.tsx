import { useAtom } from "jotai"
import React from "react"
import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import { Navigation } from "react-native-navigation"
import { CachedDataTypes, StorageTypes } from "../../../model/AnduroStorageModel"
import { getData, setData } from "../../../Storage/AnduroStorage"
import { getCachedData, setCachedData } from "../../../Utility/AndurocommonUtils"
import { Button, Input } from "@rneui/themed"
import { useTranslation } from 'react-i18next'
import  Icon  from 'react-native-vector-icons/FontAwesome';

const AnduroLoginVC = (props: any) => {
  const {t} = useTranslation()
  return (
    <SafeAreaView>
     <View className="bg-gray h-full flex flex-col justify-between">
      <View className="p-14 px-6">
       <View className="w-56 m-auto mb-4"><Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold font-semibold text-center">{t("signanduro")}</Text></View>
       <View className="mb-10">
        <Text className="font-geistregular text-headingcolor text-sm text-center font-normal">{t("typenumber")}</Text>
       </View>
       <View>
        <Text className="block text-lightgray opacity-70 text-xs uppercase font-geistsemibold font-semibold mb-1">{t("password")}</Text>
        <View className="relative">
        <View className="absolute top-3.5 right-4 z-10 opacity-70"><Icon name='eye-slash' color="#FAFAFA" /></View>
        <View className="bg-popupclr h-11 pr-8 rounded-lg">
         <Input placeholder='Password' placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputOne]} style={[styles.input]} onChangeText={(value) => { setWalletname(value) }}/>
        </View>
        </View>
       </View>
      </View>
      <View className="p-5">
       <Button className="w-full"
        title="Login to wallet"
        buttonStyle={{
          backgroundColor: '#E8705C',
          borderWidth:1,
          borderColor: '#E8705C',
          borderRadius: 8,
          height: 48,
        }}
        titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 14 }}
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
    paddingLeft:10
  }
});

export default AnduroLoginVC
