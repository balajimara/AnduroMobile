import { View, Text,Image} from 'react-native';
import { useTranslation } from "react-i18next"

const AnduroTypeHeaderVW = () => {
    const { t } = useTranslation()
    return (
        <View className="p-14 px-10">
    <View className="m-auto my-4 mb-8"><Image resizeMode={'contain'} source={require('../../assets/images/logo.png')} className="w-72" /></View>
    <View className="m-auto">
    <Text className="font-geistmedium text-headingcolor text-lg text-center leading-6">
        {t("landingtext")}
    </Text>
    </View>
    </View>
    )
}


export default AnduroTypeHeaderVW