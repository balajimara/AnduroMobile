import { View, Text,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useTranslation } from 'react-i18next';
import AnduroTypeVW from '../../../Common/Views/AccountTypeVW';
import { getData, setData } from "../../../Storage/AnduroStorage"
import { useAtom } from 'jotai';
import { StorageTypes } from '../../../model/AnduroStorageModel';
import React from 'react';


export const AnduroCreateTypeVC = (props: any) => {
  const {t} = useTranslation()
  const [, getdata] = useAtom(getData)
  const [, setdata] = useAtom(setData)
  const navigatePage = function(type: String) {
    Navigation.push(props.componentId, {
        component: {
          name: type === "new" ? 'AnduroWalletCreate' : 'AnduroWalletImport',
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
  }
  
  React.useEffect(() => {
    console.log("data", getdata({ type: StorageTypes.userData}))
  })

    return (
       <SafeAreaView> 
        <View className='bg-gray h-full flex flex-col justify-between'>
         <View className="p-14">
          <View className="m-auto my-4 mb-4"><Image resizeMode={'contain'} source={require('../../../assets/images/logo.png')} className="w-60" /></View>
           <View className="w-64 m-auto">
            <Text className="font-geistmedium text-headingcolor text-base text-center leading-6">
            {t("landingtext")}
            </Text>
           </View>
          </View>
          <View className="p-4 pb-5 px-4">
           <AnduroTypeVW type="new" title={t("newaccount")} subtitle={t("createnewwalletdesc")} callback={() => navigatePage("new")}/>
           <AnduroTypeVW type="existing" title={t("existingaccount")} subtitle={t("existingwalletdesc")} callback={() => navigatePage("existing")}/>
          </View>
         </View>
       </SafeAreaView> 
    )
}

export default AnduroCreateTypeVC