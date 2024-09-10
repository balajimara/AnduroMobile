import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, BackHandler } from "react-native"
import { Button } from "@rneui/themed"
import LanguageListVW from '../../../Common/Views/setting/LanguageListVW';
import { getData, setData } from '../../../Storage/AnduroStorage';
import { useAtom } from 'jotai';
import { NetworkListModel } from '../../../model/AnduroNetworkModel';
import { CachedDataTypes, StorageTypes } from '../../../model/AnduroStorageModel';
import { useTranslation } from 'react-i18next';
import { setCachedData } from '../../../Utility/AndurocommonUtils';
import { Navigation } from 'react-native-navigation';
import route from '../../../Route/Route';
import ToggleSwitch from 'toggle-switch-react-native';


const AnduroNativeCoinsVC = () => {
  const { t } = useTranslation()
  const [, getdata] = useAtom(getData)
  const [, setdata] = useAtom(setData)
  const [isActive, setIsActive] = useState<boolean>(true)
  const [networks] = React.useState<NetworkListModel[]>(getdata({ type: StorageTypes.networkList }))
  const [nativeCoins, setNativeCoins] = React.useState<string[]>(
    getdata({ type: StorageTypes.userData }).nativeCoins,
  )
  const [isUpdated, setIsUpdated] = React.useState<boolean>(false)

  React.useEffect(() => {
    setdata({ type: StorageTypes.pageTitle, data: t("nativecoins") })
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


  const handleCallback = async (networkName: string) => {
    const CachedUserData = getdata({ type: StorageTypes.userData })
    let nativeCoins: string[] = CachedUserData.nativeCoins
    if (nativeCoins.length === 1 && nativeCoins.includes(networkName)) return
    if (nativeCoins.includes(networkName)) {
      nativeCoins = nativeCoins.filter((coin) => coin !== networkName)
    } else {
      nativeCoins.push(networkName)
    }
    CachedUserData.nativeCoins = nativeCoins
    await setCachedData(StorageTypes.userData, JSON.stringify(CachedUserData))
    setdata({ type: CachedDataTypes.userdata, data: CachedUserData })
    setNativeCoins(nativeCoins)
    setIsUpdated(!isUpdated)
  }

  const navigateDashboard = () => {
    Navigation.setRoot({
      root: route.afterLogin
    })
  }

  const updateNetworkVersion = () => {
    setIsActive(!isActive)
    setdata({ type: StorageTypes.isTestnet4, data: isActive })
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
                    <Text className="text-lightgray capitalize text-base">Testnet 4</Text>
                </View>
                </View>
                <View>
                <ToggleSwitch
                    isOn={isActive}
                    onColor="#A94C3D"
                    offColor="#66332b"
                    size="medium"
                    onToggle={() => updateNetworkVersion()}
                    />
                </View>
                </View>
        {networks.map((network: NetworkListModel, i: number) => (
          <LanguageListVW 
            title={network.name}
            key={i}
            callback={async () => handleCallback(network.name)}
            isChecked={nativeCoins.includes(network.name)}
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