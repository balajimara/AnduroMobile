import { Icon, Text } from "@rneui/base"
import { useEffect, useState } from "react"
import { Button, Dimensions, SafeAreaView, TouchableWithoutFeedback, View, Image } from "react-native"
import { Navigation, NavigationButtonPressedEvent } from "react-native-navigation"
import route from "../../../Route/Route"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import AnduroHeaderVC from "../../header/AnduroHeader"
import BalanceSkeleton from "../../../Common/Skeleton/Dashboard/BalanceSkeleton"
import ActionSkeleton from "../../../Common/Skeleton/Dashboard/ActionSkeleton"
import ListSkeleton from "../../../Common/Skeleton/Dashboard/ListSkeleton"


const AnduroDashboardVC = (props: any) => {
  const [loading, setLoading] = useState(true)


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
    setTimeout(() => {
      setLoading(false)
    }, 3000);
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
            {loading &&
               <BalanceSkeleton />
            }
            {!loading &&
             <View style={{display:"flex", flexDirection:'column',justifyContent:"center", alignContent:'center', alignItems:'center'}}>
               <View style={{display:"flex", flexDirection:'row'}}>
                  <Text style={{fontFamily:"RobotoMono-Regular", color:"#fff", fontSize:30, marginRight: 12}}>1.000007 BTC</Text>
                  <SimpleLineIcons name="refresh" color="#999999" size={14} style={{marginTop:12}} />
               </View>
               <View style={{backgroundColor:'#3D2F2D', height: 1, width: "50%", marginVertical: 10}}></View>
               <Text style={{fontFamily:"RobotoMono-Regular", color:"#999", fontSize:18, marginRight: 12}}>50,000 USD</Text>
             </View>
            }
             
          </View>
          {loading &&
             <ActionSkeleton />
          }
          {!loading &&
            <View style={{display:"flex", flexDirection:'row'}}>
              <TouchableWithoutFeedback>
                <View style={{display:"flex", flexDirection:'row', backgroundColor:"#1C1513", justifyContent:"center", alignContent:'center', alignItems:'center', height:44, width:(Dimensions.get("screen").width - 90) / 3, borderRadius: 5}}>
                  <Image resizeMode={"contain"} source={require("./../../../assets/images/receive.png")} style={{width:24,height:24}} />
                  <Text style={{fontFamily: 'JetBrainsMono-SemiBold', color:"#ffff", fontSize:14, paddingLeft: 8}}>Receive</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={{display:"flex", flexDirection:'row', backgroundColor:"#1C1513", justifyContent:"center", alignContent:'center', alignItems:'center', height:44, width:(Dimensions.get("screen").width - 90) / 3, borderRadius: 5, marginHorizontal: 13}}>
                  <Image resizeMode={"contain"} source={require("./../../../assets/images/swap.png")} style={{width:24,height:24}} />
                  <Text style={{fontFamily: 'JetBrainsMono-SemiBold', color:"#ffff", fontSize:14, paddingLeft: 8}}>Send</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={{display:"flex", flexDirection:'row', backgroundColor:"#1C1513", justifyContent:"center", alignContent:'center', alignItems:'center', height:44, width:(Dimensions.get("screen").width - 90) / 3, borderRadius: 5}}>
                  <Image resizeMode={"contain"} source={require("./../../../assets/images/swap.png")} style={{width:24,height:24}} />
                  <Text style={{fontFamily: 'JetBrainsMono-SemiBold', color:"#ffff", fontSize:14, paddingLeft: 8}}>Convert</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          }
        </View>
        {loading &&
        <>
          <ListSkeleton />
          <ListSkeleton />
          <ListSkeleton />
          <ListSkeleton />
          <ListSkeleton />
          <ListSkeleton />
        </>
        }
      </View>
    </SafeAreaView>
  )
}

export default AnduroDashboardVC
