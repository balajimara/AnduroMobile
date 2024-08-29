import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Navigation } from "react-native-navigation"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const Toast = function (props: any) {
  const { message, type, componentId } = props
  return (
    <View className="fixed top-3 left-5">
      <View className="bg-toastred w-11/12 rounded-lg p-5 pr-8">
        <Text className="text-geistregular text-lightgray">{message}</Text>
        <View className="absolute right-3 top-1.5" onPress={() => Navigation.dismissOverlay(props.componentId)}>
          <Text><Icon name='close' size={20} color="#FAFAFA" /></Text>
        </View>
      </View>
    </View>
  )
}

export default Toast
