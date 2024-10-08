import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from "react-native"
import { Input, Button, ListItem, Dialog } from "@rneui/themed"
import  Icon  from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native';

const AnduroSendVC = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };
  const toggleDialog2 = () => {
    setVisible2(!visible2);
  };
  return (
    <SafeAreaView>
    <ScrollView>
      <View className="bg-gray">
       <View className="p-8 px-6 pb-0">
        <View className="pb-8"><Text className="text-2xl text-lightgray opacity-95 leading-10 font-geistsemibold font-semibold text-center">Send</Text></View>
        
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
         <View>
          <View className="border-b border-headingborder mb-4 pb-1">
           <Text className="font-geistmedium text-headingcolor text-sm">To</Text>
          </View>
          <View className="bg-backuphighlightbg rounded-lg px-2 h-12">
           <Input placeholder="Enter receiver address" placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputSecond]} style={[styles.inputSecondsm]} />
          </View>
         </View>
         <View className="bg-backuphighlightbg rounded-lg w-full p-4 mt-4">
          <View className="flex-row flex-wrap justify-between items-center">
           <View className="flex-row flex-wrap items-center">
            <Icon name={'user'} size={28} color="#FAFAFA" />
            <Text className="text-lightgray ml-3 opacity-50">tc1qwn...ezu3</Text>
           </View>
           <View>
            <Icon name={'angle-right'} size={28} color="#FAFAFA" />
           </View>
          </View>
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

       <View className="mt-3.5">
        <View className="bg-popupclr border border-accounthighlightline rounded-lg p-4 rounded-lg">
         <View className="flex flex-row flex-wrap items-center justify-between">
          <View>
           <Text className="font-geistmedium text-sm text-white leading-12">Premium Transaction</Text>
           <Text className="font-geistmedium text-xs text-breakdown">Max fee Value : 1000 SAT</Text>
          </View>
          <View>
           <ToggleSwitch
            isOn={false}
            onColor="#A94C3D"
            offColor="#66332b"
            size="medium"
            onToggle={isOn => console.log("changed to : ", isOn)}
          />
          </View>
         </View>
         <View>
          <View className="relative mt-4">
           <View className="absolute left-3 top-3.5 z-10"><Icon name={'bitcoin'} size={18} color="#FAFAFA" /></View>
           <View className="rounded-lg bg-backuphighlightbg h-12"><Input placeholder="Enter your value" placeholderTextColor="#ffffff" inputContainerStyle={[styles.inputFourth]} style={[styles.inputFourthsm]} /></View>
           <View className="absolute right-4 top-3.5"><Text className="text-xs text-lightgray">Per byte</Text></View>
          </View>
          <View className="mt-4 flex-row flex-wrap items-center justify-between">
           <View className="w-1/3">
           <Button className="w-full"
            title="Set default"
            buttonStyle={{
              backgroundColor: '#E8705C',
              borderRadius: 8,
              height: 48,
              padding:0
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 10 }}
            onPress={toggleDialog1}
          />
          </View>
          <View className="w-2/3 pl-2">
          <Button className="w-full"
            title="Just use for this transaction"
            buttonStyle={{
              backgroundColor: 'transparent',
              borderWidth:1,
              borderColor:'#514e4e',
              borderRadius: 8,
              height: 48,
              padding:0
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 10 }}
            onPress={toggleDialog2}
          />
          </View>
          </View>
         </View>
        </View>
       </View> 

       <View className="mt-3.5">
        <View className="border border-accounthighlightline rounded-lg p-4 rounded-lg">
         <View className="flex-row flex-wrap justify-between items-center">
          <Text className="font-geistmedium text-lightgray text-xs text-center">Gas Price</Text>
          <Text className="font-geistregular text-end text-white text-xs">0 ALYS</Text>
         </View> 
        </View>
       </View>

       {/*convert*/}
       <View className="bg-popupclr rounded-lg p-4 relative z-10 mt-3.5">
         <View className="border-b border-headingborder mb-4 pb-1">
          <Text className="font-geistmedium text-headingcolor text-sm">You receive</Text>
         </View>
         <View className="flex-row flex-wrap justify-between">
          <View className="bg-backuphighlightbg rounded w-3/5">
           <View className="flex-row flex-wrap justify-between items-center">
            <View className="w-3/4">  
             <View className="p-3">
              <Text className="text-headingcolor font-geistregular text-sm">0.1 USD</Text>
             </View>
            </View>
           </View>
          </View>
          <View className="w-2/5 pl-2">
           <View className="bg-backuphighlightbg items-center rounded-lg flex-row flex-wrap justify-between px-2.5">
            <View className="flex-row items-center">
             <Image resizeMode={"contain"} source={require("../../assets/icons/cbtc.png")} className="w-4" />
             <Text className="text-white font-geistregular uppercase text-xs px-1.5 leading-5 max-w-16 overflow-hidden text-ellipsis whitespace-nowrap">CBTC</Text>
            </View>
            <View>
             <Icon name={'angle-down'} size={18} color="#FAFAFA" />
            </View>
           </View>
          </View> 
         </View>
         <View className="border border-btcvalue opacity-50 rounded-md w-full mt-3 p-3">
          <Text className="font-geistmedium text-lightgray text-sm text-left font-medium opacity-70">0.1 BTC = 0.1 CBTC</Text>
         </View>
       </View>

       <View className="bg-popupclr rounded-lg p-4 py-5 rounded-lg mt-3.5">
        <ListItem
        onPress={() => setExpanded(!expanded)}
        containerStyle={{ borderRadius: 0, backgroundColor: 'transparent', padding: 0, justifyContent: 'space-between' }}
      >
        <Text className="font-geistmedium text-headingcolor text-base text-sm">Wallet Address</Text>
        <View className="opacity-60">
        <Icon
          name={expanded ? 'angle-up' : 'angle-down'}
          color='white'
          size={22}
        />
        </View>
      </ListItem>
      {expanded && (
       <View className="pt-3"> 
        <View className="border-t border-headingborder">
         <View className="pt-3">
          <ListItem containerStyle={{ borderRadius: 0, backgroundColor: 'transparent', padding: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', width:'100%' }}>
            <View className="w-full bg-backuphighlightbg h-12 rounded px-3 relative">
             <Input placeholder="0.1 tCBTC" placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputThird]} style={[styles.inputThirdsm]} />
             <View className="absolute right-4 top-2.5 z-10">
             <Button className="w-full"
                title="Change"
                buttonStyle={{
                  backgroundColor: 'transparent',
                  borderRadius: 6,
                  borderWidth:1,
                  borderColor:'#6c6765',
                  height: 26,
                  marginBottom:0,
                  padding:0
                }}
                containerStyle={{ borderRadius: 6 }}
                titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 12, color:'#9aa2a7' }}
              />
             </View> 
            </View>
            <View>
             <Text className="font-geistregular font-normal text-xs text-headingcolor pt-2">Make sure the wallet address is on Coordiate</Text>
            </View>
          </ListItem>
         </View> 
        </View>
       </View> 
      )}
       </View>
       {/*end*/}

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
        <Dialog overlayStyle={{ borderRadius: 8, borderWidth: 1, backgroundColor: '#231B19', borderColor: '#342d2b', width: "90%", position: 'absolute' }} isVisible={visible1} onBackdropPress={toggleDialog1}>
         <View> 
          <Text className="text-lightgray text-lg font-geistsemibold w-64">Premium transactions are a hassle free way to transact on the blockchain</Text>
          <Text className="text-lightgray text-xs opacity-50 my-4">You can set the maximum amount you’re willing to pay for transactions (or a particular transaction) - and know whether your transaction was confirmed or not in around ~90 seconds.</Text>
          <Text className="text-lightgray text-xs opacity-50">If you’ve got important transactions that need to go through faster, no more waiting endlessly for transactions to get confirmed on the blockchain.</Text>
         </View>
         <View className="mt-4 flex-row flex-wrap items-center justify-between">
           <View className="w-1/3">
           <Button className="w-full"
            title="No thanks"
            buttonStyle={{
              backgroundColor: 'transparent',
              borderWidth:1,
              borderColor:'#514e4e',
              borderRadius: 8,
              height: 48,
              padding:0
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 11 }}
          />
          </View>
          <View className="w-2/3 pl-2">
          <Button className="w-full"
            title="Set default value (30s)"
            buttonStyle={{
              backgroundColor: '#E8705C',
              borderRadius: 8,
              height: 48,
              padding:0
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 11 }}
          />
          </View>
          </View> 
        </Dialog>
        <Dialog overlayStyle={{ borderRadius: 8, borderWidth: 1, backgroundColor: '#231B19', borderColor: '#342d2b', width: "90%", position: 'absolute', bottom: 20 }} isVisible={visible2} onBackdropPress={toggleDialog2}>
         <View>

          <View className="opacity-70 pb-4">
           <View className="flex-row justify-between">
            <Text className="text-lg text-lightgray opacity-95 font-geistregular">Edit Fee</Text>
            <Icon name={'close'} size={22} color="#FAFAFA" />
           </View>
          </View>

          <View className="relative mb-4 w-full">
           <Text className="block text-white opacity-70 text-sm font-geistsemibold mb-2">Fee</Text>
           <View className="relative">
            <View className="border-[#685c59] border h-12 rounded-lg"><Input placeholder="1" placeholderTextColor="#ffffff" inputContainerStyle={[styles.inputFifth]} style={[styles.inputFifthsm]} /></View>
            <View className="absolute top-3.5 right-4">
             <Text className="font-geistregular font-normal text-white text-sm">sat/B</Text>
            </View>
           </View>
          </View>

          <View className="flex-row justify-between">
           <Text className="text-white font-geistregular text-xs">Total Amount: 58.082 USD</Text>
           <Text className="text-white font-geistregular text-xs">Total Fee: 0.082 USD</Text>
          </View>

          <View className="flex-row justify-between py-6">
           <View className="w-1/4 px-1 pl-0">
              <Button className="w-full"
              title="Low"
              buttonStyle={{
                backgroundColor: '#E8705C',
                borderWidth:1,
                borderColor:'#E8705C',
                borderRadius: 8,
                height: 40,
                padding:0
              }}
              containerStyle={{ borderRadius: 8 }}
              titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 11, textTransform:'uppercase' }}
             />
           </View>
           <View className="w-1/4 px-1 opacity-70">
             <Button className="w-full"
              title="Medium"
              buttonStyle={{
                backgroundColor: '#E8705C',
                borderWidth:1,
                borderColor:'#E8705C',
                borderRadius: 8,
                height: 40,
                padding:0
              }}
              containerStyle={{ borderRadius: 8 }}
              titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 11, textTransform:'uppercase' }}
             />
           </View>
           <View className="w-1/4 px-1">
             <Button className="w-full"
              title="High"
              buttonStyle={{
                backgroundColor: '#E8705C',
                borderWidth:1,
                borderColor:'#E8705C',
                borderRadius: 8,
                height: 40,
                padding:0
              }}
              containerStyle={{ borderRadius: 8 }}
              titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 11, textTransform:'uppercase' }}
             />
           </View>
           <View className="w-1/4 px-1 pr-0"> 
             <Button className="w-full"
              title="Custom"
              buttonStyle={{
                backgroundColor: '#E8705C',
                borderWidth:1,
                borderColor:'#E8705C',
                borderRadius: 8,
                height: 40,
                padding:0
              }}
              containerStyle={{ borderRadius: 8 }}
              titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 11, textTransform:'uppercase' }}
             />
           </View> 
          </View>

          <View>
           <Text className="text-white font-geistregular text-xs">Apply a higher fee to help your transaction confirm quickly, especially when the network is congested.</Text>
          </View>

          <View className="relative py-7 pb-2">
           <Button className="w-full"
            title="Apply"
            buttonStyle={{
              backgroundColor: '#E8705C',
              borderWidth:1,
              borderColor:'#E8705C',
              borderRadius: 8,
              height: 48,
              padding:0
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
           />
          </View>

         </View>
        </Dialog>
       </View>
      </View> 
     </ScrollView>
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
  },
  inputThird: {
    borderBottomWidth:0,
    borderWidth:0,
    borderRadius:0,
    minHeight:0,
    padding:0
  },
  inputThirdsm: {
    height: 45,
    minHeight:0,
    minWidth:0,
    fontFamily:'Geist-SemiBold',
    fontSize: 12,
    padding:0,
    paddingRight:65,
    margin:0,
    color: '#fff'
  },
  inputFourth: {
    borderBottomWidth:0,
    borderWidth:0,
    borderRadius:0,
    minHeight:0,
    padding:0
  },
  inputFourthsm: {
    height: 48,
    minHeight:0,
    minWidth:0,
    fontFamily:'Geist-SemiBold',
    fontSize: 12,
    padding:0,
    paddingRight:60,
    paddingLeft:25,
    margin:0,
    color: '#fff'
  },
  inputFifth: {
    borderBottomWidth:0,
    borderWidth:0,
    borderRadius:0,
    minHeight:0,
    padding:0
  },
  inputFifthsm: {
    height: 48,
    minHeight:0,
    minWidth:0,
    fontFamily:'Geist-SemiBold',
    fontSize: 14,
    padding:0,
    paddingRight:60,
    paddingLeft:10,
    margin:0,
    color: '#fff'
  }
});

export default AnduroSendVC