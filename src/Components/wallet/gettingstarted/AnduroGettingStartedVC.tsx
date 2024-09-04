import { View, SafeAreaView, Image, Text } from "react-native"
import { Button } from "@rneui/themed"

export const AnduroGettingStartedVC = () => {

  return (
    <SafeAreaView>
      <View className="bg-continue after:bg-continue flex flex-col h-full max-w-7-full after:fixed after:w-full after:h-full after:bottom-0 after:left-0 after:right-0 after:m-auto">
       <View className="flex-1 relative z-10">
        <View className="flex flex-col justify-center align-center h-full">
         <View>
          <Image
            resizeMode={"contain"}
            source={require("../../../assets/images/walletLogo.png")}
            className="w-52 mx-auto"
          />
          <View className="w-60 m-auto pt-10">
           <Text className="text-2xl text-fixedbg leading-8 font-geistmedium font-medium text-center">Multiple chains, one Bitcoin experience</Text>
          </View>
         </View>
        </View>
       </View>
       <View className="w-full px-6 relative z-10">
        <View className="mb-5">
         <Button
            className="w-full"
            title="Get Started"
            buttonStyle={{
              backgroundColor: "#000000",
              borderRadius: 8,
              height: 48,
            }}
            titleStyle={{ fontFamily: "JetBrainsMono-SemiBold", fontSize: 16 }}
            containerStyle={{ borderRadius: 8 }}
          />
         </View> 
       </View>
      </View>
    </SafeAreaView>
  )
}

export default AnduroGettingStartedVC