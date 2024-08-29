import React from "react"
import { View } from "react-native"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

const BalanceSkeleton = function () {
  return (
    <SkeletonPlaceholder backgroundColor={"#140401"} highlightColor={"#271815"}> 
        <SkeletonPlaceholder.Item flexDirection="column" alignItems="center">
            <SkeletonPlaceholder.Item width={"70%"} height={20} />
            <View style={{backgroundColor:'#3D2F2D', height: 1, width: "50%", marginVertical: 10}}></View>
            <SkeletonPlaceholder.Item width={"40%"} height={15} />
        </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}


export default BalanceSkeleton