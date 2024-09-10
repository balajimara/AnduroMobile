
import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native"
import {Button } from "@rneui/themed"
import { useTranslation } from 'react-i18next';
import { useAtom } from 'jotai';
import { getData, setData } from '../../../Storage/AnduroStorage';
import { LanguageDataModel } from '../../../model/AnduroUserDataModel';
import { StorageTypes } from '../../../model/AnduroStorageModel';
import { NetworkListModel } from '../../../model/AnduroNetworkModel';
import { getMultiLanguage, setCachedData } from '../../../Utility/AndurocommonUtils';
import LanguageListVW from '../../../Common/Views/setting/LanguageListVW';
import { Navigation } from 'react-native-navigation';
import route from '../../../Route/Route';

const AnduroChangeLanguageVC = () => {
  const { t, i18n } = useTranslation()
  const [, getdata] = useAtom(getData)
  const [, setdata] = useAtom(setData)
  const [languageList, setLanguageList] = React.useState<LanguageDataModel[]>([])
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>("en")

  React.useEffect(() => {
    setdata({ type: StorageTypes.pageTitle, data: t("changelanguage") })
    const userData = getdata({ type: StorageTypes.userData })
    if (userData) setSelectedLanguage(userData.selectedLanguage)
    getLanguageList()
  }, [])

  const getLanguageList = async () => {
    const networks: NetworkListModel[] = getdata({ type: StorageTypes.networkList })
    if (networks.length > 0) setLanguageList(await getMultiLanguage(networks[0].chromaBookApi))
  }

  const handleSelectLanguage = async (selectedLanguage: string) => {
    const CachedUserData = await getdata({ type: StorageTypes.userData })
    CachedUserData.selectedLanguage = selectedLanguage
    setdata({ type: StorageTypes.userData, value: CachedUserData })
    setCachedData(StorageTypes.userData, JSON.stringify(CachedUserData))
    setSelectedLanguage(selectedLanguage)
    // await i18n.changeLanguage(selectedLanguage)
  }

  return (
    <SafeAreaView>
     <View className="bg-gray h-full flex flex-col justify-between">
      <View>
       <View className="p-14 px-6 pb-0">
        <View className="mb-10"><Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold">{t("changelanguage")}</Text></View>
       </View>
       <View>
       {languageList.map((language: any, i: number) => (
        <LanguageListVW
          title={language.language}
          key={i}
          callback={() => handleSelectLanguage(language.language_code)}
          isChecked={selectedLanguage === language.language_code}
        />
      ))}
       </View>
      </View>
      <View className="p-5">
       <Button className="w-full"
            title={t("goback")}
            onPress={()=> Navigation.setRoot({
              root: route.afterLogin,
            })}
            buttonStyle={{
              backgroundColor: '#E8705C',
              borderRadius: 8,
              height: 48,
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
            disabledStyle={{backgroundColor:'#E8705C', borderColor:'#fff',opacity:0.40}}
          />
      </View>
     </View>
    </SafeAreaView>
  )}

  const styles = StyleSheet.create({
   listView: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    padding:0
   },
   radioButton: {
    backgroundColor:'transparent',
    padding:0
   }
  })

  export default AnduroChangeLanguageVC