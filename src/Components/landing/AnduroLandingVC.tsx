import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    Image,
    Text,
    View,
  } from 'react-native';
import React from "react"



const AnduroLandingVC = () => {

  React.useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)

  }, [])

  return (
    <View className="bg-continue after:bg-continue flex flex-col h-screen max-w-7-full after:fixed after:w-full after:h-full after:bottom-0 after:left-0 after:right-0 after:m-auto">
      <View className="flex-1 relative z-10">
        <View className="flex flex-col justify-center align-center h-full">
          <View>
            {/* <Image
              className="mb-2.5 w-[200px] mx-auto app-logo"
              source={require("/assets/images/walletLogo.png")}
            /> */}
            <View className="text-center max-w-64 m-auto pt-11">
              <Text>Multiple chains, one Bitcoin experienceaaa</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="py-3 pt-0 px-2 opacity-60 text-center max-w-72 m-auto relative z-10">
        <Text>        
        <View className="flex-1 relative z-10">Text</View>
            "By continuing, I agree to the Terms of Service and consent to the Privacy Policy."
          
          </Text>
      </View>
    </View>
  )
}
export default AnduroLandingVC
