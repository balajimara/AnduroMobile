import React, {useState} from 'react';
import { View, Text,SafeAreaView,Image} from 'react-native';
import { CheckBox, LinearProgress } from '@rneui/themed';
import { Navigation } from 'react-native-navigation';
import { useAtom } from "jotai"
import { CachedDataTypes, StorageTypes } from '../../../model/AnduroStorageModel';
import { setCachedData, getCachedData } from '../../../Utility/AndurocommonUtils';
import { getData, setData } from "../../../Storage/AnduroStorage"
import { useTranslation } from "react-i18next"
import AnduroTypeHeaderVW  from "../../../Common/Views/AccountTypeHeaderVW"

export const AnduroLandingVC = (props:any) => {
  const {t, i18n} = useTranslation()
  const [agree, setAgree] = useState(false);
  const [progress, setProgress] = useState(0)
  const [, getdata] = useAtom(getData)
  const [, setdata] = useAtom(setData)
  React.useEffect(() => {
    getCachedData(StorageTypes.userData).then((userdata) => {
      let userinfo = JSON.parse(userdata || "{}")
      if (Object.keys(userinfo).length == 0) {
        setCachedData(StorageTypes.userData, JSON.stringify(getdata({type : StorageTypes.userData})))          
      } else {
        setdata({ type: StorageTypes.userData, data: userinfo})
      }            
    })
  },[])
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
        let userData = await getCachedData(StorageTypes.userData)   
        let userDataV = JSON.parse(userData || "{}")      
        // if (Object.keys(userDataV) == 0) {

        // }
        userDataV.privacyPolicy = true
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
     <AnduroTypeHeaderVW/>
      <View className="items-center p-8 px-0">
      <View className="flex-row items-center px-8 pb-10">
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
              <Text className={`font-geistregular ${agree ? "text-headingcolor" : "text-white"} text-sm`}>
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
