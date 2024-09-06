import React, { useState } from 'react'
import { SafeAreaView, View, Text, ImageBackground, Image, StyleSheet } from "react-native"
import { SelectCountry } from 'react-native-element-dropdown'
import LinearGradient from 'react-native-linear-gradient'
import { Button } from "@rneui/themed"

const local_data = [
    {
      value: '1',
      lable: 'Bitcoin',
      image: {
        uri: '../assets/images/bitcoin.png',
      },
    },
    {
      value: '2',
      lable: 'Coordinate'
    },
    {
      value: '3',
      lable: 'Alys'
    }
];

const AnduroReceiveVC = (props: any) => {
  const [country, setCountry] = useState('1');
    return (
       <SafeAreaView>
       <View className="bg-gray h-full flex flex-col justify-between">
        <View>
        <View className="pt-12 mb-8">
         <Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold">Receive</Text>
        </View>
        <View className="px-5">
         <View className="bg-accounthighlightbg h-[72%] flex flex-auto justify-center items-center rounded-lg">
          <ImageBackground source={require("../../../assets/images/circlebg.png")} resizeMode="cover" style={styles.image}>
          <View className="mb-5">
           <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            imageStyle={styles.imageStyle}
            iconStyle={styles.iconStyle}
            maxHeight={200}
            value={country}
            data={local_data}
            valueField="value"
            labelField="lable"
            imageField="image"
            placeholder="Select country"
            searchPlaceholder="Search..."
            onChange={e => {
              setCountry(e.value);
            }}
           />
          </View>
          <View className="pt-7 pb-8 bg-popupclr rounded-t-lg relative">
           <Image
            resizeMode={"cover"}
            source={require("../../../assets/images/topbg.png")}
            className="w-full absolute top-0 block"
            />
           <Image
            resizeMode={"cover"}
            source={require("../../../assets/images/qrcode.png")}
            className="w-40 m-auto"
           />
           <Image
            resizeMode={"cover"}
            source={require("../../../assets/images/bottombg.png")}
            className="w-full h-32 absolute bottom-0 block"
            />
          </View>
          <View>
          <LinearGradient className="p-2.5 rounded-b-lg flex-row flex-wrap items-center justify-center" colors={['#382C29', '#231B19']}>
           <Text className="text-headingcolor text-sm mr-3.5">tc1qkf...u9sf</Text>
           <Image
            resizeMode={"contain"}
            source={require("../../../assets/images/copy.png")}
            className=""
           />
           </LinearGradient>
          </View>
          </ImageBackground>
         </View>
        </View>
       </View> 
       <View> 
        <View className="px-5 pb-5">
         <Button className="w-full"
            title="Continue"
            buttonStyle={{
              backgroundColor: '#E8705C',
              borderRadius: 8,
              height: 48,
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
          />
         </View>
         </View>
        </View>  
       </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    dropdown: {
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 46,
      width: 241,
      backgroundColor: '#231b19',
      borderWidth:1,
      borderColor:'#453f3d',
      borderRadius: 22,
      paddingHorizontal: 8,
      paddingVertical: 0,
    },
    imageStyle: {
      width: 24,
      height: 24,
      borderRadius: 100,
    },
    placeholderStyle: {
      fontSize: 18,
      color:'#fff'
    },
    selectedTextStyle: {
      fontSize: 18,
      marginLeft: 8,
      color:'#fff'
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
     image: {
    flex: 1,
    justifyContent: 'center',
    }
  });

export default AnduroReceiveVC