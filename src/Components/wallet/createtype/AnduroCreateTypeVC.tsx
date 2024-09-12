import { View, SafeAreaView, BackHandler, Alert } from "react-native"
import { Navigation, NavigationButtonPressedEvent } from "react-native-navigation"
import { useTranslation } from "react-i18next"
import AnduroTypeVW from "../../../Common/Views/AccountTypeVW"
import { getData, setData } from "../../../Storage/AnduroStorage"
import { useAtom } from "jotai"
import { CachedDataTypes, StorageTypes } from "../../../model/AnduroStorageModel"
import React, { useEffect, useState } from "react"
import AnduroTypeHeaderVW from "../../../Common/Views/AccountTypeHeaderVW"
import { encrypteData, encryptXpubKey, getAlysAddress, getCachedData, getMnemonicKey, setCachedData } from "../../../Utility/AndurocommonUtils"
import { NetworkListModel } from "../../../model/AnduroNetworkModel"
import BackPopupVW from "../../../Common/Views/popup/BackPopupVW"


export const AnduroCreateTypeVC = (props: any) => {
  console.log('props', props)
  const { t } = useTranslation()
  const [, getdata] = useAtom(getData)
  const [, setdata] = useAtom(setData)
  const [isBackPopupOpen, setIsBackPopupOpen] = useState<boolean>(false)
  const navigatePage = function (type: string) {
    Navigation.push(props.componentId, {
      component: {
        name: type === "new" ? "AnduroWalletCreate" : "AnduroWalletImport",
        options: {
          topBar: {
            visible: false,
          },
          bottomTabs: {
            visible: false,
          },
        },
      },
    })
  }

  React.useEffect(() => {
    const setUserInfo = async () => {
      const userdata = await getCachedData(StorageTypes.userData)
      const userinfo = JSON.parse(userdata || "{}")
      if (Object.keys(userinfo).length === 0) {
        setCachedData(
          StorageTypes.userData,
          JSON.stringify(getdata({ type: StorageTypes.userData }))
        )
      } else {
        setdata({ type: StorageTypes.userData, data: userinfo })
      }
    }

    setUserInfo()
    

  }, [])

  useEffect(() => {    
    const backPressEvent = () => {
      setIsBackPopupOpen(true)  
      return true;
    }
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backPressEvent
    );
      return () => subscription.remove();    
}, []);

const yescallback = () => {
  setIsBackPopupOpen(false)
  BackHandler.exitApp()
} 

const nocallback = () => {
  setIsBackPopupOpen(false)
}

  


  return (
    <SafeAreaView>
      <View className="bg-gray h-full flex flex-col justify-between">
        <AnduroTypeHeaderVW />
        <View className="p-4 pb-5 px-4">
          <AnduroTypeVW
            type="new"
            title={t("newaccount")}
            subtitle={t("createnewwalletdesc")}
            callback={() => navigatePage("new")}
          />
          <AnduroTypeVW
            type="existing"
            title={t("existingaccount")}
            subtitle={t("existingwalletdesc")}
            callback={() => navigatePage("existing")}
          />
        </View>
      </View>
      {isBackPopupOpen && (
        <BackPopupVW yescallback={yescallback} nocallback={nocallback} isVisible={isBackPopupOpen}/>
      )}
    </SafeAreaView>
  )
}

export default AnduroCreateTypeVC
