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
    <View className="fixed top-5 right-0 px-5">
      <View className={`${toastclass} w-80 rounded-lg p-5 pr-8`}>
        <Text className="text-geistregular text-lightgray">{message}</Text>
        <View className="absolute right-2 top-1.5">
         <TouchableOpacity  onPress={() => Navigation.dismissOverlay(props.componentId)}>
          <Text><Icon name='close' size={20} color="#FAFAFA" /></Text>
         </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Toast
