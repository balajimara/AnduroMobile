import React, {useState} from 'react';
import { View, Text,SafeAreaView,Image} from 'react-native';
import { CheckBox, LinearProgress } from '@rneui/themed';
import { Navigation } from 'react-native-navigation';
import { useAtom } from "jotai"
import { StorageTypes } from '../../../model/AnduroStorageModel';
import { setCachedData, getCachedData } from '../../../Utility/AndurocommonUtils';
import { getData, setData,  userData } from "../../../Storage/AnduroStorage"
import { useTranslation } from "react-i18next"


export const AnduroLandingVC = (props:any) => {
  const {t, i18n} = useTranslation()
  const [agree, setAgree] = useState(false);
  const [progress, setProgress] = useState(0)
  const [, getdata] = useAtom(getData)
  const [, setdata] = useAtom(setData)
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
        console.log("from atom", getdata({ type: StorageTypes.userData }))
        let userData = await getCachedData(StorageTypes.userData)     
        let userDataV = JSON.parse(userData || "{}")  
        userDataV.privacyPolicy = true
        console.log('userData', userData, userDataV)
        await setCachedData(StorageTypes.userData, JSON.stringify(userDataV))
        setdata({ type: StorageTypes.userData, data: userDataV})
          Navigation.push(props.componentId, {
            component: {
              name: 'AnduroCreateType',
              options: {
                topBar: {
                  visible: false,
                },
                bottomTabs: {
                  visible: false,
                }
              }
            }        
          })   
      }, 2000)
      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }   
    }  
  }, [agree])      
  return (
    <SafeAreaView>
    <View className='bg-gray h-full flex flex-col justify-between'>
    
      <View className="p-14">
      <View className="m-auto my-4 mb-4"><Image resizeMode={'contain'} source={require('../../../assets/images/logo.png')} className="w-60" /></View>
      <View className="w-64 m-auto">
        <Text className="font-geistmedium text-headingcolor text-base text-center leading-5">
          {t("landingtext")}
        </Text>
      </View>
      </View>
      <View className="items-center p-8 px-0">
      <View className="flex-row items-center px-8 pb-3">
      <CheckBox
                checked={agree}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor="#FFF2F0"
                uncheckedColor="#FFF2F0"
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderWidth: 0,
                  padding: 0,
                }}
                onPress={() => setAgree(true)}
              />
              <Text className="font-geistregular text-white text-xs">
              {t("privacyagree")}
              </Text>
              </View> 
              <LinearProgress variant="determinate" color="lightgray" trackColor='gray' value={progress}/>
              </View> 
    </View>
    </SafeAreaView>
  );
}
export default AnduroLandingVC;
