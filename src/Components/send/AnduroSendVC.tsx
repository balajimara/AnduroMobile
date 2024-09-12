import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from "react-native"
import { Input, Button } from "@rneui/themed"
import  Icon  from 'react-native-vector-icons/FontAwesome';

const AnduroSendVC = () => {
    
  return (
    <SafeAreaView>
      <View className="bg-gray">
       <View className="p-8 px-6 pb-0">
        <View className="pb-8"><Text className="text-2xl text-lightgray opacity-95 leading-10 font-geistsemibold font-semibold text-center">Send</Text></View>
       <ScrollView> 
        <View className="bg-popupclr rounded-lg p-4 relative z-10">
         <View className="border-b border-headingborder mb-4 pb-1">
          <Text className="font-geistmedium text-headingcolor text-sm">From</Text>
         </View>
         <View className="flex-row flex-wrap justify-between">
          <View className="bg-backuphighlightbg rounded w-3/5">
           <View className="flex-row flex-wrap justify-between items-center">
            <View className="w-3/4">  
             <View className="h-4 rounded-lg w-full">
              <Input placeholder="0.1 tCBTC" placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputOne]} style={[styles.input]} />
             </View>
             <View className="pl-2.5">
              <Text className="text-headingcolor font-geistregular text-[10px] mt-1">0.1 USD</Text>
             </View>
            </View> 
            <View className="pr-2.5">
             <Image resizeMode={"contain"} source={require("../../assets/images/arrowupdown.png")} className="w-4" />
            </View>
           </View>
          </View>
          <View className="w-2/5 pl-2">
           <View className="bg-backuphighlightbg items-center rounded-lg flex-row flex-wrap justify-between px-2.5">
            <View className="flex-row items-center">
             <Image resizeMode={"contain"} source={require("../../assets/icons/cbtc.png")} className="w-4" />
             <Text className="text-white font-geistregular uppercase text-xs px-1.5 leading-5 max-w-16 overflow-hidden text-ellipsis whitespace-nowrap">tCBTC</Text>
            </View>
            <View>
             <Icon name={'angle-down'} size={18} color="#FAFAFA" />
            </View>
           </View>
          </View> 
         </View>

         <View className="flex flex-row justify-between py-3 pb-4">
         <View>
          <View className="flex flex-row items-center">
           <Text className="font-geistregular text-headingcolor text-xs text-center">Balance:</Text>
           <Text className="font-geistregular text-xs text-white pl-1">0.01 tCBTC</Text>
          </View>
         </View>
         <View>
          <Text className="font-geistbold text-xs text-headingcolor underline">Max</Text>
         </View>
         </View>

         <View className="absolute -bottom-8 left-0 right-0 flex items-center">
          <Image resizeMode={"contain"} source={require("../../assets/icons/swapdownicon.png")} className="w-11" />
         </View>
       </View>

       <View className="mt-3.5">
        <View className="bg-popupclr rounded-lg p-4 rounded-lg">
         <View className="border-b border-headingborder mb-4 pb-1">
          <Text className="font-geistmedium text-headingcolor text-sm">To</Text>
         </View>
         <View className="bg-backuphighlightbg rounded-lg px-2 h-12">
          <Input placeholder="Enter receiver address" placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputSecond]} style={[styles.inputSecondsm]} />
         </View>
        </View>
       </View>

       <View className="mt-3.5">
        <View className="bg-popupclr rounded-lg p-4 rounded-lg">
         <View className="border-b border-headingborder mb-4 pb-1">
          <Text className="font-geistmedium text-headingcolor text-sm">OP RETURN</Text>
         </View>
         <View className="bg-backuphighlightbg rounded-lg px-2 h-12">
          <Input placeholder="String less than 80 characters" placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputSecond]} style={[styles.inputSecondsm]} />
         </View>
        </View>
       </View>

       <View className="bg-popupclr rounded-md p-4 my-3.5 mb-0 cursor-pointer">
        <View className="flex-row justify-between items-center">
         <View>
          <Text className="font-geistmedium text-lightgray text-sm text-left">Transaction Fees</Text>
          <Text className="font-geistsemibold text-breakdown text-xs font-semibold underline mt-0.5">Show Breakdown</Text>
         </View>
         <View>
          <Text className="font-geistregular text-end text-white text-xs text-right font-normal">0 tBTC</Text>
          <Text className="font-geistregular text-end text-lightgray opacity-[0.33] text-xs text-right font-normal mt-0.5">0 USD</Text>
         </View>
        </View>
       </View>

       <View className="w-full p-5 pt-3.5 px-0">
          <Button className="w-full"
            title="Continue"
            buttonStyle={{
              backgroundColor: '#E8705C',
              borderRadius: 8,
              height: 48,
              marginBottom:15
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
          />
          <Button className="w-full"
            title="Skip"
            buttonStyle={{
              backgroundColor: 'transparent',
              borderWidth:1,
              borderColor:'#514e4e',
              borderRadius: 8,
              height: 48
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
          />
        </View>
        </ScrollView>
       </View>
      </View> 
     
    </SafeAreaView>
  )}

  const styles = StyleSheet.create({
  input: {
    height: 16,
    minHeight:0,
    minWidth:0,
    fontFamily:'Geist-SemiBold',
    fontSize: 12,
    padding:0,
    margin:0,
    color: '#fff'
  },
  inputOne: {
    borderBottomWidth:0,
    borderWidth:0,
    borderRadius:0,
    padding:0
  },
  inputSecond: {
    borderBottomWidth:0,
    borderWidth:0,
    borderRadius:0,
    padding:0
  },
  inputSecondsm: {
    height: 45,
    minHeight:0,
    minWidth:0,
    fontFamily:'Geist-SemiBold',
    fontSize: 12,
    padding:0,
    margin:0,
    color: '#fff'
  }
});

export default AnduroSendVC