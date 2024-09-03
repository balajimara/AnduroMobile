import React from "react"
import { Button } from "@rneui/themed"
import { SafeAreaView, View, Text, Image, BackHandler } from "react-native"
import { Navigation } from "react-native-navigation";
import route from "../../Route/Route";


const AnduroSuccessVC = (props: any) => {
    const {title} = props;
    React.useEffect(() => {
      const handleBackPress = () => {
        Navigation.setRoot({
          root: route.login
        })
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      };
    }, []);
    return (
       <SafeAreaView>
        <View className="bg-gray h-full flex flex-col justify-center">
         <View>
         <Image
          resizeMode={"contain"}
          source={require("../../assets/images/success.png")}
          className="w-56 m-auto"
         />
         <View className="w-80 m-auto"><Text className="text-center text-3xl leading-10 font-geistsemibold text-lightgray">{title}</Text></View>
         {/* <View className="opacity-50 mt-6"><Text className="text-center text-base font-geistregular text-lightgray">{subtitle}</Text></View> */}
         </View>
         <View className="w-full p-5 px-6 absolute bottom-0">
          <Button className="w-full"
            title="Close"
            onPress={() =>
              Navigation.setRoot({
                root: route.login
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