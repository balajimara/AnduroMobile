import { View, Text,Image} from 'react-native';
import { useTranslation } from "react-i18next"

const AnduroTypeHeaderVW = () => {
    const { t } = useTranslation()
    return (
        <View className="p-14">
    <View className="m-auto my-4 mb-4"><Image resizeMode={'contain'} source={require('../../assets/images/logo.png')} className="w-60" /></View>
    <View className="w-64 m-auto">
    <Text className="font-geistmedium text-headingcolor text-base text-center leading-5">
        {t("landingtext")}
    </Text>
    </View>
    </View>
    )
}


export default AnduroTypeHeaderVW