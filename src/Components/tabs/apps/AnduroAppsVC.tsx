import { Text } from "@rneui/base"
import { useEffect } from "react"
import { Dimensions, SafeAreaView, View } from "react-native"
import { Navigation } from "react-native-navigation"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

const AnduroAppsVC = (props: any) => {

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
       <View className="m-4" style={{flex: 1}}>
       </View>
    </SafeAreaView>
  )
}

export default AnduroAppsVC
