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
    <ListItem style={styles.subtitleView} containerStyle={styles.listView} onPress={selectAction}>
    <View className="flex-row items-center justify-between bg-popupclr py-2 px-4 rounded-xl w-full">
    <View><Text style={styles.headtitle}>{mnemonicKey.charAt(0).toUpperCase() + mnemonicKey.substring(1).toLowerCase()}</Text></View>
    <View className="py-1.5 w-14 border-transparent border"><Text style={styles.subheadtitle}> {position > 0 ? position : "X"}</Text></View>
    </View>
  </ListItem>
  )
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
  listView: {
    backgroundColor: '#231B19',
    borderRadius:12,
    padding:10,
    marginBottom:10
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