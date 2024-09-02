import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native"
import { ListItem, CheckBox, Icon, Button } from "@rneui/themed"

const AnduroChangeLanguageVC = () => {
  const [selectedIndex, setIndex] = React.useState(0);
  return (
    <SafeAreaView>
     <View className="bg-gray h-full flex flex-col justify-between">
      <View>
       <View className="p-14 px-6 pb-0">
        <View className="mb-10"><Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold">Change Language</Text></View>
       </View>
       <View>
        <ListItem className="bg-transparent" containerStyle={styles.listView}>
         <View className="py-2 px-5 w-full">
          <View className="border-b-2 border-currencyLine p-2 pr-0 mb-0">
           <View className="justify-between flex-row flex-wrap">
            <View className="flex-row items-center">
             <View className="mr-2"><Image resizeMode={"contain"} source={require("../../../assets/images/usa-flag.png")} className="w-8 m-auto" /></View>
             <Text className="text-base font-geistregular text-walletLight custom-radio relative cursor-pointer">English</Text>
            </View>
            <View>
             <CheckBox
               checked={selectedIndex === 0}
               onPress={() => setIndex(0)}
               iconType="material-community"
               checkedIcon="radiobox-marked"
               uncheckedIcon="radiobox-blank"
               uncheckedColor="#2E2825"
               checkedColor="#2E2825"
               size={26}
               containerStyle={styles.radioButton}
             />
            </View>
           </View> 
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
   },
   radioButton: {
    backgroundColor:'transparent',
    padding:0
   }
  })

  export default AnduroChangeLanguageVC