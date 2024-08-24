import { View, Text,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useTranslation } from 'react-i18next';
import AnduroTypeVW from '../../../Common/Views/AccountTypeVW';

export const AnduroCreateTypeVC = (props: any) => {
  const {t} = useTranslation()
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
           <AnduroTypeVW type="new"/>
           <AnduroTypeVW type="existing"/>
          </View>
         </View>
       </SafeAreaView> 
    )
}

export default AnduroCreateTypeVC