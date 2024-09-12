import { View, Text, Image } from "react-native"
import { useTranslation } from "react-i18next"
import React from "react"

const AnduroTypeHeaderVW = () => {
  const { t } = useTranslation()
  React.useEffect(() => {}, [])
  return (
    <View className="p-14 px-0">
      <View className="m-auto my-4 mb-8 px-10">
        <Image
          resizeMode={"contain"}
          source={require("../../assets/images/logo.png")}
          className="w-72"
        />
      </View>
      <View className="m-auto w-80">
        <Text className="font-geistmedium text-headingcolor text-lg text-center leading-6">
          {t("landingtext")}
        </Text>
      </View>
    </View>
  )
}

export default AnduroTypeHeaderVW
