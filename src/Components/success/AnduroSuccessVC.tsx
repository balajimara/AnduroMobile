import React from "react"
import { Button } from "@rneui/themed"
import { SafeAreaView, View, Text, Image } from "react-native"
import { useTranslation } from 'react-i18next';
import { Navigation } from "react-native-navigation";


const AnduroSuccessVC = (props: any) => {
    const { t } = useTranslation()
    const {title,subtitle} = props;
    return (
       <SafeAreaView>
        <View className="bg-gray h-full flex flex-col justify-center">
         <View>
         <Image
          resizeMode={"contain"}
          source={require("../../assets/images/success.png")}
          className="w-56 m-auto"
         />
         <View className="w-80 m-auto"><Text className="text-center text-3xl leading-10 font-geistsemibold text-lightgray">{t(title)}</Text></View>
         <View className="opacity-50 mt-6"><Text className="text-center text-base font-geistregular text-lightgray">{t(subtitle)}</Text></View>
         </View>
         <View className="w-full p-5 px-6 absolute bottom-0">
          <Button className="w-full"
            title="Close"
            onPress={() =>
                Navigation.push(props.componentId, {
                    component: {
                      name: 'AnduroLogin',
                  }
                })
            }
            buttonStyle={{
              backgroundColor: 'transparent',
              borderWidth:1,
              borderColor:'#514e4e',
              borderRadius: 8,
              height: 48,
              marginBottom:15
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
          />
         </View>
        </View>
       </SafeAreaView>
    )
}

export default AnduroSuccessVC