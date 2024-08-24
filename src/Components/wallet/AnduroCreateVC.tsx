import { View, Text,SafeAreaView,TextInput,TouchableOpacity} from 'react-native';
import { useTranslation } from 'react-i18next';

const AnduroCreateVC = () => {
    const {t} = useTranslation()
    return (
        <SafeAreaView> 
         <View className="bg-gray h-full flex flex-col justify-between">
          <View className="p-14 px-6">
           <View className="text-center w-40 m-auto mb-4"><Text className="text-3xl text-lightgray opacity-95 leading-9 font-geistsemibold font-semibold">{t("createwalletdec")}</Text></View>
           <View className="mb-10">
            <Text className="font-geistregular text-headingcolor text-sm text-center font-normal">{t("createwalletsubdec")}</Text>
           </View>
           <View>
            <TextInput placeholder="Ex: Aaron's Wallet" placeholderTextColor="#968F8D" className="w-full bg-popupclr placeholder-headingcolor text-sm font-geistsemibold h-12 pl-9 text-lightgray rounded-lg focus:outline-none" />
           </View>
          </View>
          <View className="w-full p-5 px-6">
           <TouchableOpacity className="bg-continue w-full h-12 py-2.5 rounded-lg font-[jetbrains]">
            <Text className="text-white w-full text-center text-base">{t("continue")}</Text>
           </TouchableOpacity>
          </View>
         </View>
        </SafeAreaView>  
    )
}

export default AnduroCreateVC