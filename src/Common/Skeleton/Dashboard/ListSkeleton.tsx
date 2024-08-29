import React from "react"
import { Dimensions, View } from "react-native"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"

const ListSkeleton = function () {
    return (
      <View style={{backgroundColor: "#231B19", borderRadius: 10, padding: 14, height: 92, marginTop: 14}}>
        <SkeletonPlaceholder backgroundColor={"#140401"} highlightColor={"#271815"}> 
            <SkeletonPlaceholder.Item position={"relative"} paddingLeft={80} height={64}>
                <SkeletonPlaceholder.Item width={64} height={64} borderRadius={32} position={"absolute"} left={0} top={0}/>
                <SkeletonPlaceholder.Item width={"50%"} height={14} marginTop={14}/>
                <SkeletonPlaceholder.Item width={"70%"} height={10} marginTop={8}/>
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    )
  }
  
export default ListSkeleton