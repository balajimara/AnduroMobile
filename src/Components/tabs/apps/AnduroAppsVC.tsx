import { Button } from "@rneui/themed"
import { useEffect } from "react"
import { Dimensions, SafeAreaView, View, Text, Image } from "react-native"
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
    <SafeAreaView>
     <View className="bg-gray h-full flex flex-col justify-center">
      <View className="px-5">
       <View className="border border-popupoutline bg-popupclr rounded-lg p-5 shadow-lg">
        <View className="mb-2.5 w-14 h-14">
         <Image
          resizeMode={"contain"}
          source={require("../../../assets/images/clockcount.png")}
          className="w-6 m-auto"
         />
        </View>
        <View className="w-72">
         <Text className="text-xl text-lightgray opacity-95 leading-7 font-geistsemibold font-semibold">This feature will be coming soon to Anduro Wallet</Text>
        </View>
         <View className="flex flex-row flex-wrap pt-5">
            <View className="w-1/2 pr-1.5 m-auto">
              <Button
                className="w-full"
                title="Close"
                buttonStyle={{
                  backgroundColor: "transparent",
                  borderRadius: 8,
                  height: 48,
                  borderWidth:1,
                  borderColor: "#645e5c"
                }}
                titleStyle={{ fontFamily: "JetBrainsMono-SemiBold", fontSize: 14 }}
                containerStyle={{ borderRadius: 8 }}
              />
            </View>
            <View className="w-1/2 pl-1.5">
              <Button
                className="w-full"
                title="Cool, thanks"
                buttonStyle={{
                  backgroundColor: "#E8705C",
                  borderRadius: 8,
                  height: 48,
                  borderWidth:1,
                  borderColor: "#E8705C"
                }}
                titleStyle={{ fontFamily: "JetBrainsMono-SemiBold", fontSize: 14 }}
                containerStyle={{ borderRadius: 8 }}
              />
            </View>
          </View>
       </View>
      </View>
     </View> 
    </SafeAreaView>
  )
}

export default AnduroAppsVC
