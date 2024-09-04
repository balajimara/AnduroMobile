import { View, SafeAreaView, Image, Text, Alert, BackHandler } from "react-native"
import { Button } from "@rneui/themed"
import { Navigation } from "react-native-navigation"
import { getCachedData, setCachedData } from "../../../Utility/AndurocommonUtils"
import { CachedDataTypes, StorageTypes } from "../../../model/AnduroStorageModel"
import route from "../../../Route/Route"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { getData, setData } from "../../../Storage/AnduroStorage"
import { useAtom } from "jotai"

export const AnduroGettingStartedVC = (props: any) => {
    const { t } = useTranslation()
    const [,getdata] = useAtom(getData)
    const [,setdata] = useAtom(setData)
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
              }
            }
            setUserInfo()        
    }, [])
    useEffect(() => {    
        const backPressEvent = () => {
          Alert.alert("", t("backpopuptext"), [
            {
              text: t("no"),
              onPress: () => null,
              style: "cancel"
            },
            { text: t("yes"), onPress: () => {  
              BackHandler.exitApp() 
            }}
          ]);     
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
            Navigation.setRoot({
                root: route.login,
            })
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
           <Text className="text-2xl text-fixedbg leading-8 font-geistmedium font-medium text-center">Multiple chains, one Bitcoin experience</Text>
          </View>
         </View>
        </View>
       </View>
       <View className="w-full px-6 relative z-10">
        <View className="mb-5">
         <Button
            className="w-full"
            title="Get Started"
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
    </SafeAreaView>
  )
}

export default AnduroGettingStartedVC