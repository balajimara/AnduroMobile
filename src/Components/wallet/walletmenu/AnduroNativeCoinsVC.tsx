import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native"
import { ListItem, Button } from "@rneui/themed"
import ToggleSwitch from 'toggle-switch-react-native'

type SwitchComponentProps = {};

const AnduroNativeCoinsVC = () => {
  const [ison, setIson] = useState(false)

  React.useEffect(() => {

  },[ison])
  return (
    <SafeAreaView>
     <View className="bg-gray h-full flex flex-col justify-between">
      <View>
       <View className="p-12 px-6 pb-0">
        <View className="mb-10"><Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold">Native Coins</Text></View>
       </View>
       <View className="px-5">
        <ListItem className="bg-transparent" containerStyle={styles.listView}>
         <View className="bg-popupclr p-4 py-2 pr-2.5 mb-3 w-full justify-between flex-row flex-wrap items-center">
          <View className="flex-row flex-wrap items-center"> 
           <View className="mr-3"><Image resizeMode={"contain"} source={require("../../../assets/images/euro-flag.png")} className="w-8 m-auto" /></View>
           <View>
            <Text className="text-lightgray capitalize text-base">bitcoin</Text>
           </View>
          </View>
          <View>
           <ToggleSwitch
              isOn={ison}
              onColor="#A94C3D"
              offColor="#66332b"
              size="medium"
              onToggle={() => {setIson(!ison)}}
            />
          </View>
         </View>
         <View className="bg-popupclr p-4 py-2 pr-2.5 mb-3 w-full justify-between flex-row flex-wrap items-center">
          <View className="flex-row flex-wrap items-center"> 
           <View className="mr-3"><Image resizeMode={"contain"} source={require("../../../assets/images/euro-flag.png")} className="w-8 m-auto" /></View>
           <View>
            <Text className="text-lightgray capitalize text-base">coordinate</Text>
           </View>
          </View>
          <View>
            <ToggleSwitch
              isOn={true}
              onColor="#A94C3D"
              offColor="#66332b"
              size="medium"
              onToggle={isOff => console.log("changed to : ", isOff)}
            />
          </View>
         </View>
         <View className="bg-popupclr p-4 py-2 pr-2.5 mb-3 w-full justify-between flex-row flex-wrap items-center">
          <View className="flex-row flex-wrap items-center"> 
           <View className="mr-3"><Image resizeMode={"contain"} source={require("../../../assets/images/euro-flag.png")} className="w-8 m-auto" /></View>
           <View>
            <Text className="text-lightgray capitalize text-base">alys</Text>
           </View>
          </View>
          <View>
            <ToggleSwitch
              isOn={true}
              onColor="#A94C3D"
              offColor="#66332b"
              size="medium"
              onToggle={isOff => console.log("changed to : ", isOff)}
            />
          </View>
         </View>
        </ListItem>
       </View>
      </View>
      <View className="p-5">
       <Button className="w-full"
            title="Go Back"
            buttonStyle={{
              backgroundColor: '#E8705C',
              borderRadius: 8,
              height: 48,
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
            disabledStyle={{backgroundColor:'#E8705C', color:'#fff',opacity:0.40}}
          />
      </View>
     </View>   
    </SafeAreaView>
  )}

  const styles = StyleSheet.create({
   listView: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    padding:0
   }
  })

  export default AnduroNativeCoinsVC