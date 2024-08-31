import { Text } from "@rneui/base"
import { useEffect, useState } from "react"
import { Button, Dimensions, FlatList, SafeAreaView, View } from "react-native"
import { Navigation, NavigationButtonPressedEvent } from "react-native-navigation"
import route from "../../../Route/Route"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import AnduroHeaderVC from "../../header/AnduroHeader"
import BalanceSkeleton from "../../../Common/Skeleton/Dashboard/BalanceSkeleton"
import ActionSkeleton from "../../../Common/Skeleton/Dashboard/ActionSkeleton"
import ListSkeleton from "../../../Common/Skeleton/Dashboard/ListSkeleton"


const AnduroDashboardVC = (props: any) => {
  useEffect(() => {
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        leftButtons: [
          {
            id: "menuButton",
            icon: SimpleLineIcons.getImageSourceSync("menu", 22, "#fff"),
          
          }
        ],
        title: {
          text: "Aaron's Wallet",
          alignment: "center"
        },
      },
    })
    Navigation.events().registerNavigationButtonPressedListener(
      (event) => {
        console.log(event)
        if (event.buttonId === "menuButton") {
          openMenu()
        }
      }
    )   
  }, [])


  const openMenu = async () => {
    await Navigation.dismissAllModals()
    Navigation.mergeOptions(props.componentId, {
      sideMenu: {
        left: {
          visible: true,
          width: Dimensions.get("window").width,
        },
      },
    })
  }

  return (
    <SafeAreaView className="bg-gray flex flex-1">
      <View className="m-4">
        <View className="bg-popupclr rounded-xl p-3.5">
          <View className="py-10">
              <BalanceSkeleton />
          </View>
          <ActionSkeleton />
        </View>

        {
            // Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((item, i) => (
            //     // <FlatList
            //     //     data={Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}
            //     //     renderItem={({item}) => <ListSkeleton />}
            //     //     keyExtractor={item => item.toString()}
            //     // />
            // ))
        }
    
      </View>
    </SafeAreaView>
  )
}

export default AnduroDashboardVC
