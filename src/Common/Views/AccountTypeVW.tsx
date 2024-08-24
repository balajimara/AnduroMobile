import { View, Text,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useTranslation } from 'react-i18next';

export const AnduroTypeVW = (props: any) => {
  const {t} = useTranslation()
  const navigatePage = function() {
    Navigation.push(props.componentId, {
        component: {
          name: 'WalletCreate',
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
    return (
       <SafeAreaView> 
             <View className="mb-3.5">
            <View className="flex flex-col gap-6">
             <View className="bg-accountbg hover:bg-accounthighlightbg hover:border-existaccount hover:border-accounthighlightline border-accountline rounded-xl p-4 px-4 flex flex-col justify-between border">
              <TouchableOpacity onPress={navigatePage}>
              <View className="flex flex-row items-center justify-between">
               <View>
                <View className="mb-1.5">
                 <Text className="text-lg text-lightgray leading-5 font-geistregular">{t("newaccount")}</Text>
                </View>
                <View>
                 <Text className="font-geistregular text-end text-headingcolor text-xs max-sm:text-left">{t('createnewwalletdesc')}</Text>
                </View>
               </View>
               {/* <View><Icon name='chevron_right' type='material' color="#FAFAFA" /></View> */}
              </View>
              </TouchableOpacity>
             </View>
            </View>
           </View>
       </SafeAreaView> 
    )
}

export default AnduroTypeVW