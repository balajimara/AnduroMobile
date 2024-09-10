import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, BackHandler } from "react-native"
import { ListItem, CheckBox, Icon, Button } from "@rneui/themed"
import { CurrencyDataModel } from '../../../model/AnduroUserDataModel';
import { StorageTypes } from '../../../model/AnduroStorageModel';
import { getData, setData } from "../../../Storage/AnduroStorage"
import { getMultiCurrency, setCachedData } from '../../../Utility/AndurocommonUtils';
import { NetworkListModel } from '../../../model/AnduroNetworkModel';
import { useAtom } from 'jotai';
import { useTranslation } from 'react-i18next';
import LanguageListVW from '../../../Common/Views/setting/LanguageListVW'
import { Navigation } from 'react-native-navigation';
import route from '../../../Route/Route';

const AnduroSelectcurrencyVC = () => {
  const { t } = useTranslation()
  const [currencyList, setCurrencyList] = React.useState<CurrencyDataModel[]>([])
  const [selectedCurrency, setSelectedCurrency] = React.useState<string>("USD")
  const [, getdata] = useAtom(getData)
  const [, setdata] = useAtom(setData)

  React.useEffect(() => {
    setdata({ type: StorageTypes.pageTitle, data: t("selectcurrency") })
    const userData = getdata({ type: StorageTypes.userData })
    if (userData) {
      setCachedData(StorageTypes.userData, JSON.stringify(userData))
      setSelectedCurrency(userData.selectedCurrency)
    }
    getCurrencyList()
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

  const getCurrencyList = async () => {
    const networks: NetworkListModel[] = getdata({ type: StorageTypes.networkList })
    console.log('networks', networks)
    if (networks.length > 0)
      setCurrencyList(await getMultiCurrency(networks[0].chromaBookApi, networks[0].networkMode))
  }

  const handleSelectCurrency = async (selectedCurrency: string) => {
    const CachedUserData = getdata({ type: StorageTypes.userData })
    CachedUserData.selectedCurrency = selectedCurrency
    setdata({ type: StorageTypes.userData, value: CachedUserData })
    await setCachedData(StorageTypes.userData, JSON.stringify(CachedUserData))
    setSelectedCurrency(selectedCurrency)
  }


  return (
    <SafeAreaView>
     <View className="bg-gray h-full flex flex-col justify-between">
      <View>
       <View className="p-14 px-6 pb-0">
        <View className="mb-10">
          <Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold">{t("selectcurrency")}</Text>
        </View>
       </View>
       <View>
       {currencyList.map((currency: any, i: number) => (
          <LanguageListVW
            title={currency.currency}
            key={i}
            callback={() => handleSelectCurrency(currency.currency)}
            isChecked={selectedCurrency === currency.currency}
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
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16, color:'#fff' }}
            disabledStyle={{backgroundColor:'#E8705C', opacity:0.40}}
          />
      </View>
     </View>
    </SafeAreaView>
  )}


  export default AnduroSelectcurrencyVC