import { View, Text,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useTranslation } from 'react-i18next';
import AnduroTypeVW from '../../../Common/Views/AccountTypeVW';
import { getData, setData } from "../../../Storage/AnduroStorage"
import { useAtom } from 'jotai';
import { StorageTypes } from '../../../model/AnduroStorageModel';
import React from 'react';
import AnduroTypeHeaderVW from '../../../Common/Views/AccountTypeHeaderVW';
import { getCachedData, setCachedData } from '../../../Utility/AndurocommonUtils';


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
    getCachedData(StorageTypes.userData).then((userdata) => {
      let userinfo = JSON.parse(userdata || "{}")
      if (Object.keys(userinfo).length == 0) {
        setCachedData(StorageTypes.userData, JSON.stringify(getdata({type : StorageTypes.userData})))          
      } else {
        setdata({ type: StorageTypes.userData, data: userinfo})
      }            
    })
  },[])

    return (
       <SafeAreaView> 
        <View className='bg-gray h-full flex flex-col justify-between'>
          <AnduroTypeHeaderVW/>
          <View className="p-4 pb-5 px-4">
           <AnduroTypeVW type="new" title={t("newaccount")} subtitle={t("createnewwalletdesc")} callback={() => navigatePage("new")}/>
           <AnduroTypeVW type="existing" title={t("existingaccount")} subtitle={t("existingwalletdesc")} callback={() => navigatePage("existing")}/>
          </View>
         </View>
       </SafeAreaView> 
    )
}

export default AnduroCreateTypeVC