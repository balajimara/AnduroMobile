import { SafeAreaView, View, Text, Image } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "@rneui/themed"

const AnduroReviewConvertVC = () => {
    
  return (
    <SafeAreaView>
     <View className="bg-gray h-full flex flex-col justify-between">
      <View className="p-10 px-4 pb-0">
       <View><Text className="text-2xl text-lightgray opacity-95 leading-10 font-geistsemibold font-semibold text-center">Review Transfer</Text></View>
       <View className="flex-row flex-wrap mt-10 relative">
        <View className="w-2/4 px-2">
        <View className="border border-reviewborder flex flex-col w-full justify-center items-center rounded-xl p-2 py-6">
         <Image resizeMode={"contain"} source={require("../../assets/images/bitcoinreview.png")} className="w-12" />
         <View className="my-2 mt-3 w-full"><Text className="text-base text-reviewhead font-geistbold text-center">11.007 CBTC</Text></View>
         <Text className="text-sm text-headingcolor text-center font-geistregular">$50,002.2</Text>
        </View>
        </View>
        <View className="absolute w-full top-7 z-10 flex justify-center items-center"><Image resizeMode={"contain"} source={require("../../assets/images/transfericon.png")} className="w-11" /></View>
        <View className="w-2/4 px-2">
        <View className="border border-reviewborder flex flex-col w-full justify-center items-center rounded-xl p-2 py-6">
         <Image resizeMode={"contain"} source={require("../../assets/images/bitcoin.png")} className="w-12" />
         <View className="my-2 mt-3"><Text className="text-base text-reviewhead font-geistbold">11.007 CBTC</Text></View>
         <Text className="text-sm text-headingcolor font-geistregular">$50,002.2</Text>
        </View>
        </View>
       </View>
      </View>
      <View className="px-6 relative z-10">
       <View className="bg-popupclr p-4 rounded-xl">
        <View className="flex-row flex-wrap justify-between">
         <View>
          <Text className="text-lightgray text-base font-geistmedium mb-0.5">Transaction Fees</Text>
          <Text className="text-breakdown text-sm font-geistsemibold underline">Show Breakdown</Text>
         </View>
         <View>
          <Text className="text-right text-lightgray text-base font-geistregular mb-0.5">₿0.00999 BTC</Text>
          <Text className="text-right text-lightgray opacity-30 text-base font-geistmedium">$0.00999</Text>
         </View>
        </View>
       </View>
       <View className="w-full p-5 px-0">
        <Button className="w-full"
        title="Convert"
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
      <View className="w-full absolute bottom-0">
       <LinearGradient className="h-96 w-full" colors={['#030202', 'rgba(3, 2, 2, 0)']} start={{x: 1, y: 1}} end={{x: 1, y: 0}} >
       </LinearGradient>
      </View> 
     </View>
    </SafeAreaView>
  )}

  export default AnduroReviewConvertVC