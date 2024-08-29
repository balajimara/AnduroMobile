import React from "react"
import { Dimensions } from "react-native"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

const ActionSkeleton = function () {
  return (
    <SkeletonPlaceholder backgroundColor={"#140401"} highlightColor={"#271815"}> 
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
            <SkeletonPlaceholder.Item width={(Dimensions.get("screen").width - 90) / 3} height={44} borderRadius={5} />
            <SkeletonPlaceholder.Item width={(Dimensions.get("screen").width - 90) / 3} height={44} borderRadius={5} marginHorizontal={15}/>
            <SkeletonPlaceholder.Item width={(Dimensions.get("screen").width - 90) / 3} height={44} borderRadius={5} />
        </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}


export default ActionSkeleton