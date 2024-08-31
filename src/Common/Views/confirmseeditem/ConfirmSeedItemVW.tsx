import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Text, ListItem } from "@rneui/themed"
import { useState } from "react"
import React from "react"

interface confirmseedItemProps {
  mnemonicKey: string
  position: number
  selectAction: () => void,
  index:number
}

const ConfirmSeedItemVW = (props: confirmseedItemProps) => {
  const { mnemonicKey, position, selectAction, index } = props 
  return (
    <ListItem style={styles.subtitleView} containerStyle={selectBoxStyle(position)} onPress={selectAction}>
    <View className={`flex-row items-center justify-between py-2 px-4  w-full ${position > 0 ? "border-backupline rounded-2xl bg-backuphighlightbg" : "border-transparent bg-popupclr"}`}>
    <View><Text style={styles.headtitle}>{mnemonicKey.charAt(0).toUpperCase() + mnemonicKey.substring(1).toLowerCase()}</Text></View>
    <View className={`py-1.5 px-5 pr-6 border ${position > 0 ? "border-backupline rounded-3xl bg-popupclr" : "border-transparent bg-popupclr"}`}><Text style={styles.subheadtitle}> {position > 0 ? position : "X"}</Text></View>
    </View>
  </ListItem>
  )
}


const selectBoxStyle = function(position: number) {
  if (position > 0) {
    return {
      backgroundColor: '#231B19',
      borderWidth:1,
      borderColor:'#453f3d',
      borderRadius:12,
      padding:10,
      marginBottom:10
    }
  } else {
    return {
      backgroundColor: '#231B19',
      borderWidth:1,
      borderColor:'transparent',
      borderRadius:12,
      padding:10,
      marginBottom:10
    }
  }
   
 }

const styles = StyleSheet.create({
  icon: {
    color: '#fff',
    fontSize: 14,
  },
  subtitleView: {
    color: '#000',
    padding:0
  },
 
  headtitle: {
    color:'#FFF2F0',
    fontSize: 16,
    marginBottom:1,
    fontFamily: 'Geist-Regular'
  },
  subheadtitle: {
    color:'#FAFAFA',
    fontSize:16,
    textAlign:"center",
    opacity:0.30
  }
});

export default ConfirmSeedItemVW