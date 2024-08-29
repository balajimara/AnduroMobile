import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Navigation } from "react-native-navigation"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const Toast = function (props: any) {
  const { message, type } = props
  const [toastclass, setToastClass] = React.useState("success")
  React.useEffect(() => {
   if (type === "success") {
    setToastClass("bg-toastsuccess")
   } else if (type === "error") {
    setToastClass("bg-toastred")
   } else if (type == "warn") {
    setToastClass("bg-toastyellow")
   }
  })
  return (
    <View className="fixed top-3 left-5">
      <View className={`${toastclass} w-11/12 rounded-lg p-5 pr-8`}>
        <Text className="text-geistregular text-lightgray">{message}</Text>
        <TouchableOpacity  onPress={() => Navigation.dismissOverlay(props.componentId)}>
        <View className="absolute right-3 top-1.5">
          <Text><Icon name='close' size={20} color="#FAFAFA" /></Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Toast
