import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { ListItem, Dialog, Button } from "@rneui/themed"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Navigation } from "react-native-navigation"
import { useTranslation } from "react-i18next"

const AnduroMenuVC = (props: any) => {
  const {t} = useTranslation()

  const closeMenu = async () => {
    await Navigation.dismissAllModals()
    Navigation.mergeOptions(props.componentId, {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    })
  }
  return (
    <SafeAreaView>
     <View className="bg-gray h-full">
      <View className="navbar p-5 px-3.5 justify-between flex-row flex-wrap">
        <TouchableOpacity onPress={() => {closeMenu()}}>
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
         <View className="flex justify-between pb-8 w-full relative">
          <View className="flex-row flex-wrap items-center">
           <View><Icon style={[styles.iconOne]} name="logout"></Icon></View>
           <View><Text className="font-geistregular text-lg text-walletLight font-normal cursor-pointer">Logout</Text></View>
           <View className="absolute right-0"><Icon style={[styles.icon]} name="chevron-right"></Icon></View>
          </View> 
         </View> 
       </ListItem>
      </View>      
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