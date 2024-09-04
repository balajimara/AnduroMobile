import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { ListItem, Dialog, Button } from "@rneui/themed"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Navigation } from "react-native-navigation"
import { useTranslation } from "react-i18next"

const AnduroMenuVC = (props: any) => {
  const {t} = useTranslation()
  const [visible1, setVisible1] = useState(false);
  const toggleDialog1 = () => {
   setVisible1(!visible1);
  };
  return (
    <SafeAreaView>
     <View className="bg-gray h-full">
      <View className="navbar p-5 px-3.5 justify-between flex-row flex-wrap">
        <TouchableOpacity onPress={() => {
            Navigation.mergeOptions(props.componentId, {
              sideMenu: {
                left: {
                  visible: false,
                  width: Dimensions.get("window").width,
                },
              },
            })
        }}>
       <View className="navbar-start w-auto">
        <Icon style={[styles.iconClose]} name="close"></Icon>
       </View>
       </TouchableOpacity>
       <View className="navbar-center">
        <Text className="text-center font-geistsemibold capitalize text-lg text-lightgray w-64 m-auto whitespace-nowrap overflow-hidden text-ellipsis">Profile</Text>
       </View>
       <View className="navbar-end w-auto">
       </View>
      </View>
      <View className="p-3.5 px-5 settings-menu">
       <ListItem className="bg-transparent" containerStyle={styles.listView}>
         <View className="flex justify-between pb-8 w-full relative">
          <View className="flex-row flex-wrap items-center">
           <View><Icon style={[styles.iconOne]} name="wallet-outline"></Icon></View>
           <View><Text className="font-geistregular text-lg text-walletLight font-normal cursor-pointer">Backup Wallet</Text></View>
          </View>
          <View className="absolute right-0"><Icon style={[styles.icon]} name="chevron-right"></Icon></View>
         </View>
         <View className="flex justify-between pb-8 w-full relative">
          <View className="flex-row flex-wrap items-center">
           <View><Icon style={[styles.iconOne]} name="currency-sign"></Icon></View>
           <View><Text className="font-geistregular text-lg text-walletLight font-normal cursor-pointer">Select Currency</Text></View>
           <View className="absolute right-0"><Icon style={[styles.icon]} name="chevron-right"></Icon></View>
          </View> 
         </View>
         <View className="flex justify-between pb-8 w-full relative">
          <View className="flex-row flex-wrap items-center">
           <View><Icon style={[styles.iconOne]} name="translate"></Icon></View>
           <View><Text className="font-geistregular text-lg text-walletLight font-normal cursor-pointer">Change Language</Text></View>
           <View className="absolute right-0"><Icon style={[styles.icon]} name="chevron-right"></Icon></View>
          </View> 
         </View>
         <View className="flex justify-between pb-8 w-full relative">
          <View className="flex-row flex-wrap items-center">
           <View><Icon style={[styles.iconOne]} name="hand-coin-outline"></Icon></View>
           <View><Text className="font-geistregular text-lg text-walletLight font-normal cursor-pointer">Native Coins</Text></View>
           <View className="absolute right-0"><Icon style={[styles.icon]} name="chevron-right"></Icon></View>
          </View> 
         </View>
         <View className="flex justify-between pb-8 w-full relative">
          <View className="flex-row flex-wrap items-center">
           <View><Icon style={[styles.iconOne]} name="form-textbox-password"></Icon></View>
           <View><Text className="font-geistregular text-lg text-walletLight font-normal cursor-pointer">Set Password</Text></View>
           <View className="absolute right-0"><Icon style={[styles.icon]} name="chevron-right"></Icon></View>
          </View> 
         </View>
         <View className="flex justify-between pb-8 w-full relative" onPress={toggleDialog1}>
          <View className="flex-row flex-wrap items-center">
           <View><Icon style={[styles.iconOne]} name="logout"></Icon></View>
           <View><Text className="font-geistregular text-lg text-walletLight font-normal cursor-pointer">Logout</Text></View>
           <View className="absolute right-0"><Icon style={[styles.icon]} name="chevron-right"></Icon></View>
          </View> 
         </View> 
       </ListItem>
      </View>
      <Dialog overlayStyle={{ borderRadius: 12, borderWidth: 1, backgroundColor: '#231B19', borderColor: '#342d2b', width: "90%", position: 'fixed', top:'0', }} isVisible={visible1} onBackdropPress={toggleDialog1} animation={"slideInUp"}>
      <View className="p-1"> 
       <View className="mb-4 w-20 h-20 w-full-in h-auto-in rounded-2xl bg-backuphighlightbg flex items-center justify-center"><Icon name='crosshairs' opacity={0.70} size={40} color="#FAFAFA" /></View>
        <View className="mb-1 w-60"> 
        <Text className="font-geistsemibold text-lightgray text-xl">Are you sure you want to logout of your account?</Text>
        </View>
        <View className="flex-row flex-wrap pt-4">
        <View className="w-1/2 pr-1">
            <Button className="w-full"
            title={t("No")}
            buttonStyle={{
                backgroundColor: 'transparent',
                borderWidth:1,
                borderColor:'#514e4e',
                borderRadius: 8,
                height: 40,
            }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 13 }}
            />
        </View>
        <View className="w-1/2 pl-1">
        <Button className="w-full"
        title={t("Yes, log me out")}
        buttonStyle={{
            backgroundColor: '#E8705C',
            borderWidth:1,
            borderColor: '#E8705C',
            borderRadius: 8,
            height: 40,
        }}
        titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 13 }}
        />
        </View>
       </View>
       </View> 
      </Dialog>
     </View> 
    </SafeAreaView>
  )}

  const styles = StyleSheet.create({
   icon: {
    color: "#fff",
    fontSize: 24,
   },
   iconOne: {
    color: "#fff",
    fontSize: 18,
    marginRight:15
   },
   iconClose: {
    color: "#fff",
    fontSize: 24
   },
   listView: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    padding:0
   }
  })

  export default AnduroMenuVC