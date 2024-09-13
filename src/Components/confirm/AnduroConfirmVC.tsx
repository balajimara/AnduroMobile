import { SafeAreaView, ScrollView, View, Text, SectionList } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Button, Dialog } from '@rneui/themed'

const SECTIONS = [
  {
    title: 'From',
    data: ['0x349B...p0w1'],
  },
  {
    title: 'To',
    data: ['0x349B...51d3'],
  },
  {
    title: 'Network',
    data: ['0x349B...p0w1'],
  },
  {
    title: 'Network Cost',
    data: ['0x349B...p0w1'],
  },
  {
    title: 'Status',
    data: ['Confirmed'],
  },
  {
    title: 'TX ID',
    data: ['#34975397865'],
  }
];

const AnduroConfirmVC = () => {
  const renderItem  = ({ item, section }) => (
    <View className="flex-row flex-wrap justify-between items-center py-3.5 px-1.5 border-b border-receiptline last:border-0">
      <View><Text className="text-lightgray opacity-50 text-xs">{section.title}</Text></View>
      <View className="flex-row flex-wrap justify-between items-center">
       <View className="mr-1"><Icon name='circle' size={8} color="#00994D" /></View>
       <View><Text className="text-lightgray text-xs">{item}</Text></View>
       <View className="ml-1 opacity-50"><Icon name='content-copy' size={18} color="#FAFAFA" /></View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
     <ScrollView>
      <View className="p-10 px-5">
       <View>
        <View className="items-center mb-5"><Icon name='check-circle-outline' size={58} color="#68E29F" /></View>
        <Text className="text-lightgray text-center text-3xl font-geistmedium">Converted</Text>
        <View className="opacity-30 mt-2"><Text className="text-lightgray text-center font-geistregular text-lg">Transaction Receipt</Text></View>
       </View> 
       <View>
        <View className="bg-popupclr rounded-lg p-8 pt-3.5 pb-5 px-4 mt-8">
         <SectionList className="border-b border-transparent"
          sections={SECTIONS}
          renderItem={renderItem}
          keyExtractor={(item, index) => item + index}
         />
        </View>
        <View className="bg-popupclr rounded-lg p-6 py-5 flex-row flex-wrap justify-between items-center mt-5">
         <View><Text className="text-lightgray font-geistmedium text-sm">Total</Text></View>
         <View><Text className="text-lightgray font-geistmedium text-base">0.010999 BTC</Text></View>
        </View>
        <View className="p-6 px-0">
         <Text className="text-continue text-center text-sm" style={{fontFamily: 'JetBrainsMono-SemiBold'}}>View on Coordiscan</Text>
        </View>
        <View className="pb-5">
         <Button className="w-full"
          title="Close"
          buttonStyle={{
            backgroundColor: '#E8705C',
            borderWidth:1,
            borderColor: '#E8705C',
            borderRadius: 8,
            height: 48,
            padding:0
          }}
          containerStyle={{ borderRadius: 8 }}
          titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 14 }}
         />
        </View>
       </View>
      </View>
     </ScrollView> 
    </SafeAreaView>
  )}

  export default AnduroConfirmVC