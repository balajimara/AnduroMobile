import { View, SafeAreaView, Image, Text, Alert, BackHandler } from "react-native"
import { Button } from "@rneui/themed"
import { Navigation } from "react-native-navigation"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useAtom } from "jotai"
import { getData, setData } from "../../../Storage/AnduroStorage"
import BackPopupVW from "../../../Common/Views/popup/BackPopupVW"
import { checkUserHasPassword, getCachedData, setCachedData, updateXpubKey } from "../../../Utility/AndurocommonUtils"
import { CachedDataTypes, StorageTypes } from "../../../model/AnduroStorageModel"
import route from "../../../Route/Route"
import { NetworkListModel } from "../../../model/AnduroNetworkModel"



export const AnduroGettingStartedVC = (props: any) => {
    const { t } = useTranslation()
    const [,getdata] = useAtom(getData)
    const [,setdata] = useAtom(setData)
    const [isBackPopupOpen, setIsBackPopupOpen] = useState(false)
    const [hasPassword, setHasPassword] = useState<boolean>(false)
    useEffect(() => {
      const setUserInfo = async () => {
        const userdata = await getCachedData(StorageTypes.userData)
        const userinfo = JSON.parse(userdata || "{}")
        if (Object.keys(userinfo).length == 0) {
          setCachedData(
            StorageTypes.userData,
            JSON.stringify(getdata({ type: StorageTypes.userData }))
          )
        } else {
          setdata({ type: StorageTypes.userData, data: userinfo })
          const userdata = await getCachedData(CachedDataTypes.mnemonic) || ""
          const isValidMnemonic = checkUserHasPassword(userdata)
          setHasPassword(!isValidMnemonic)
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

    const navigatePage = async () => {
        let userinfo = getdata({ type : StorageTypes.userData })
        let mnemonic = await getCachedData(CachedDataTypes.mnemonic)
        if (mnemonic !== null) {
          if (hasPassword) {
            Navigation.setRoot({
              root: route.login,
            })
          } else {
            setdata({ type: StorageTypes.xpubKeys, data: updateXpubKey("") })
            const networkList: NetworkListModel[] = getdata({ type: StorageTypes.networkList })
            const alysNetworkInfo: NetworkListModel | undefined = networkList.find((network) => {
              return network.networkType == "alys"
            })  
            if (alysNetworkInfo) {
              let alysAddress = await getCachedData(CachedDataTypes.alysAddress)
              setdata({ type: StorageTypes.alysAddress, data: alysAddress })
            }
            let CachedUserData = JSON.parse(await getCachedData(StorageTypes.userData) || "{}")
            CachedUserData.isLogged = true
            setdata({ type: StorageTypes.userData, data: CachedUserData })
            await setCachedData(StorageTypes.userData, JSON.stringify(CachedUserData))
            let isTestnetfour = await getCachedData(StorageTypes.selectedNetworkVer)
            setdata({ type: StorageTypes.selectedNetworkVer, data: isTestnetfour })
            let networkVersion = await getCachedData(StorageTypes.selectedNetworkVer)
            setdata({ type: StorageTypes.selectedNetworkVer, data: networkVersion })
            let routeinfo = route.afterLogin
            routeinfo.sideMenu.center.bottomTabs.children[1].stack.children[0].component.passProps = {
              password: ""
            }
            Navigation.setRoot({
              root: routeinfo,
            })
          }    
          
        } else {
            if (Object.keys(userinfo).length === 0) {
                Navigation.setRoot({
                root: route.beforeLogin,
                })
            } else {
                if (userinfo.privacyPolicy) {
                    Navigation.setRoot({
                        root: route.afterPrivacy,
                    })
                } else {
                    Navigation.setRoot({
                        root: route.beforeLogin,
                    })
                }
            }
        }         
    }

    const yescallback = () => {
      setIsBackPopupOpen(false)
      BackHandler.exitApp()
    } 
  
    const nocallback = () => {
      setIsBackPopupOpen(false)
    }

  return (
    <SafeAreaView>
      <View className="bg-continue h-full">
       <View className="flex-1 relative z-10">
        <View className="flex flex-col justify-center align-center h-full">
         <View>
          <Image
            resizeMode={"contain"}
            source={require("../../../assets/images/walletLogo.png")}
            className="w-52 mx-auto"
          />
          <View className="w-72 m-auto pt-10">
           <Text className="text-2xl text-fixedbg leading-8 font-geistmedium font-medium text-center">{t("gettingstartedtext")}</Text>
          </View>
         </View>
        </View>
       </View>
       <View className="w-full px-6 relative z-10">
        <View className="mb-5">
         <Button
            className="w-full"
            title={hasPassword ? t("getstartbutton") : t("walletlogin")}
            buttonStyle={{
              backgroundColor: "#000000",
              borderRadius: 8,
              height: 48,
            }}
            titleStyle={{ fontFamily: "JetBrainsMono-SemiBold", fontSize: 16 }}
            containerStyle={{ borderRadius: 8 }}
            onPress={() => navigatePage()}
          />
               
         </View> 
       </View>
      </View>
      {isBackPopupOpen && (
        <BackPopupVW yescallback={yescallback} nocallback={nocallback} isVisible={isBackPopupOpen}/>
      )}
    </SafeAreaView>
  )
}

export default AnduroGettingStartedVC