import { Text } from "@rneui/base"
import { useAtom } from "jotai"
import React from "react"
import { View } from "react-native"
import { Navigation } from "react-native-navigation"
import { CachedDataTypes, StorageTypes } from "../../../model/AnduroStorageModel"
import { getData, setData } from "../../../Storage/AnduroStorage"
import { getCachedData, setCachedData } from "../../../Utility/AndurocommonUtils"

const AnduroLoginVC = (props: any) => {
 
  return (
    <View>
      <Text>Login VC</Text>
    </View>
  )
}

export default AnduroLoginVC
