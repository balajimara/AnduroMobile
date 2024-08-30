import React from "react"
import { SafeAreaView, View, Text, Image } from "react-native"


const AnduroSuccessVC = (props: any) => {
    return (
       <SafeAreaView> 
        <View className="bg-gray h-full flex flex-col justify-center">
         <View>
         <Image
          resizeMode={"contain"}
          source={require("../../assets/images/success.png")}
          className="w-56 m-auto"
         />
         <View className="w-64 m-auto"><Text className="text-center text-3xl leading-10 font-geistsemibold text-lightgray">Your account has been created</Text></View>
         <View className="opacity-50 mt-6"><Text className="text-center text-base font-geistregular text-lightgray">Let's write something here.</Text></View>
         </View>
        </View>
       </SafeAreaView> 
    )
}

export default AnduroSuccessVC