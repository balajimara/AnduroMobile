import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, BackHandler } from "react-native"
import { Button } from "@rneui/themed"
import LanguageListVW from '../../../Common/Views/setting/LanguageListVW';
import { getData, setData } from '../../../Storage/AnduroStorage';
import { useAtom } from 'jotai';
import { NativeCoinModel, NetworkListModel } from '../../../model/AnduroNetworkModel';
import { CachedDataTypes, StorageTypes } from '../../../model/AnduroStorageModel';
import { useTranslation } from 'react-i18next';
import { setCachedData, hasActiveNetwork, showToasterMsg } from '../../../Utility/AndurocommonUtils';
import { Navigation } from 'react-native-navigation';
import route from '../../../Route/Route';
import ToggleSwitch from 'toggle-switch-react-native';


const AnduroNativeCoinsVC = () => {
  const { t } = useTranslation()
  const [, getdata] = useAtom(getData)
  const [, setdata] = useAtom(setData)
  const [isEnableNW, setIsEnableNW] = React.useState<string>(getdata({ type: StorageTypes.selectedNetworkVer}))
  console.log('isEnableNW', isEnableNW)
  const [networks] = React.useState<NetworkListModel[]>(getdata({ type: StorageTypes.networkList }))
  const [nativeCoins, setNativeCoins] = React.useState<NativeCoinModel[]>(
    getdata({ type: StorageTypes.userData }).nativeCoins,
  )
  React.useEffect(() => {
    setdata({ type: StorageTypes.pageTitle, data: t("selectnetwork") })
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


  const handleCallback = async (networkInfo: NativeCoinModel) => {
    const CachedUserData = getdata({ type: StorageTypes.userData })
    let nativeCoins: NativeCoinModel[] = CachedUserData.nativeCoins
    if (
      getUpdatedNativeCoins(nativeCoins).length === 1 &&
      hasActiveNetwork(networkInfo.name, nativeCoins, isEnableNW)
    ) {
      showToasterMsg("error",t("nativecoinerror"))
      return
    }
    if (hasActiveNetwork(networkInfo.name, nativeCoins, isEnableNW)) {
      nativeCoins = nativeCoins.filter((coin) => {
        if (coin.name === networkInfo.name && coin.networkVersion === isEnableNW) {
          return false
        } else {
          return true
        }
      })
    } else {
      nativeCoins.push({
        name: networkInfo.name,
        networkVersion: networkInfo.networkVersion,
      })
    }
    CachedUserData.nativeCoins = nativeCoins
    await setCachedData(StorageTypes.userData, JSON.stringify(CachedUserData))
    setdata({ type: CachedDataTypes.userdata, data: CachedUserData })
    setNativeCoins(nativeCoins)
  }

  const navigateDashboard = () => {
    Navigation.setRoot({
      root: route.afterLogin
    })
  }

  const getUpdatedNativeCoins = (
    nativeCoins: { name: string; networkVersion: string }[],
  ): { name: string; networkVersion: string }[] => {
    let updatedNativeCoins = []
    updatedNativeCoins = nativeCoins.filter((coin) => {
      return coin.networkVersion === isEnableNW
    })  
    return updatedNativeCoins
  }

  const updateNetworkVersion = async () => {
    let activeStatus = (isEnableNW == "4" ? "3" : "4")
    setIsEnableNW(activeStatus)
    await setCachedData(StorageTypes.selectedNetworkVer, activeStatus.toString())    
    setdata({ type: StorageTypes.selectedNetworkVer, data: activeStatus.toString()})
  }

  return (
    <SafeAreaView>
     <View className="bg-gray h-full flex flex-col justify-between">
      <View>
       <View className="p-12 px-6 pb-0">
        <View className="mb-10"><Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold">{t("selectnetwork")}</Text></View>
       </View>
       <View className="px-5">
       <View className="bg-popupclr p-4 px-3.5 mb-3 w-full justify-between flex-row flex-wrap items-center">
                <View className="flex-row flex-wrap items-center">                
                <View>
                    <Text className="text-lightgray capitalize text-base">{t("testnet4")}</Text>
                </View>
                </View>
                <View>
                <ToggleSwitch
                    isOn={isEnableNW == "4"}
                    onColor="#A94C3D"
                    offColor="#66332b"
                    size="medium"
                    onToggle={async () => updateNetworkVersion()}
                    />
                </View>
                </View>
        {networks.map((network: NetworkListModel, i: number) => (
          <LanguageListVW 
            title={network.name}
            key={i}
            callback={async () => handleCallback(network)}
            isChecked={hasActiveNetwork(network.name, nativeCoins, isEnableNW)}
            symbol={network.symbol}
            type="native-coins"
            nativeCoins={nativeCoins}/>

        ))}
       </View>
      </View>
      <View className="p-5">
       <Button className="w-full"
            title={t("goback")}
            buttonStyle={{
              backgroundColor: '#E8705C',
              borderRadius: 8,
              height: 48,
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16, color:'#FFFFFF' }}
            disabledStyle={{backgroundColor:'#E8705C', opacity:0.40}}
            onPress={() => navigateDashboard()}
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
   }
  })

  export default AnduroNativeCoinsVC