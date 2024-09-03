import React, { useEffect, useState } from "react"
import { View, Text, SafeAreaView, BackHandler, Alert} from "react-native"
import { CheckBox, LinearProgress } from "@rneui/themed"
import { Navigation } from "react-native-navigation"
import { useAtom } from "jotai"
import { StorageTypes } from "../../../model/AnduroStorageModel"
import { setCachedData, getCachedData } from "../../../Utility/AndurocommonUtils"
import { getData, setData } from "../../../Storage/AnduroStorage"
import { useTranslation } from "react-i18next"
import AnduroTypeHeaderVW from "../../../Common/Views/AccountTypeHeaderVW"
import route from "../../../Route/Route"

export const AnduroLandingVC = (props: any) => {
  const { t } = useTranslation()
  const [agree, setAgree] = useState(false)
  const [progress, setProgress] = useState(0)
  const [, getdata] = useAtom(getData)
  const [, setdata] = useAtom(setData)


  React.useEffect(() => {    
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


  React.useEffect(() => {
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

  React.useEffect(() => {
    if (agree) {
      const interval = setInterval(() => {
        setProgress((prevValue) => {
          if (prevValue < 1) {
            return prevValue + 0.3
          } else {
            clearInterval(interval)
            return prevValue
          }
        })
      }, 200)
      const timeout = setTimeout(async () => {
        clearInterval(interval)
        const userData = await getCachedData(StorageTypes.userData)
        const userDataV = JSON.parse(userData || "{}")

        userDataV.privacyPolicy = true
        await setCachedData(StorageTypes.userData, JSON.stringify(userDataV))
        setdata({ type: StorageTypes.userData, data: userDataV })        
        Navigation.setRoot({
          root: route.afterPrivacy
        })
      }, 2000)
      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }
    else{
      setProgress(0)
    }
  }, [agree])

  return (
    <SafeAreaView>
      <View className="bg-gray h-full flex flex-col justify-between">
        <AnduroTypeHeaderVW />
        <View className="items-center p-8 px-0 pb-3">
          <View className="flex-row items-center pb-10">
            <CheckBox
              checked={agree}
              checkedColor="#FFF2F0"
              uncheckedColor="#FFF2F0"
              containerStyle={{
                backgroundColor: "transparent",
                borderWidth: 0,
                padding: 0,
                paddingLeft:10
              }}
              onPress={() => setAgree(!agree)}
            />
            <Text
              className={`font-geistregular ${agree ? "text-headingcolor" : "text-white"} text-xs w-80`}
            >
              {t("privacyagree")}
            </Text>
          </View>
          <LinearProgress
            style={{ height: 2 }}
            variant="determinate"
            color="lightgray"
            trackColor="gray"
            value={progress}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
export default AnduroLandingVC
