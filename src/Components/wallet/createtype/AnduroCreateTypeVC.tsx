import { View, Text,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useTranslation } from 'react-i18next';
import AnduroTypeVW from '../../../Common/Views/AccountTypeVW';

export const AnduroCreateTypeVC = (props: any) => {
  const {t} = useTranslation()
  const navigatePage = function(type: String) {
    if (type === "new") {
        Navigation.push(props.componentId, {
            component: {
              name: 'AnduroWalletCreate',
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
    } else {
        Navigation.push(props.componentId, {
            component: {
              name: 'AnduroWalletImport',
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
  }
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