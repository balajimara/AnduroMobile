import { Icon, Text } from "@rneui/base"
import { useEffect, useState } from "react"
import { Button, Dimensions, SafeAreaView, TouchableWithoutFeedback, View, Image, SectionList, StyleSheet, StatusBar, Pressable, TouchableOpacity } from "react-native"
import { Navigation, NavigationButtonPressedEvent } from "react-native-navigation"
import route from "../../../Route/Route"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import BalanceSkeleton from "../../../Common/Skeleton/Dashboard/BalanceSkeleton"
import ActionSkeleton from "../../../Common/Skeleton/Dashboard/ActionSkeleton"
import ListSkeleton from "../../../Common/Skeleton/Dashboard/ListSkeleton"
import CoinItemVW from "../../../Common/Views/dashboard/CoinItemVW"
import CoinHeaderVW from "../../../Common/Views/dashboard/CoinHeaderVW"
import { getData } from "../../../Storage/AnduroStorage"
import { StorageTypes } from "../../../model/AnduroStorageModel"
import { useAtom } from "jotai"



const AnduroDashboardVC = (props: any) => {
  const [,getdata] = useAtom(getData)
  const [loading, setLoading] = useState(true)
  const [data] = useState([{
    title: "Native Assets",
    data: [
      {
        type: "native",
        name: 'BTC Testnet',
        symbol: 'BTC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "0"
      },
      {
        type: "native",
        name: 'Coordinate Testnet',
        symbol: 'CBTC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "2"
      },
      {
        type: "native",
        name: 'Alys Testnet',
        symbol: 'ALYS',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "3"
      },
    ]
  },{
    title: "Tokens",
    data:[
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "1"
      },
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "2"
      },
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "3"
      },
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "4"
      },
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "5"
      },
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "6"
      },
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "7"
      },
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "8"
      },
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "9"
      },
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "10"
      },
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "11"
      },
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "12"
      },
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "13"
      },
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "14"
      },
      {
        type: "token",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        key: "15"
      },
    ]  
  }])

  const [expandedSections, setExpandedSections] = useState(new Set());
  const handleToggle = (title:any) => {
    setExpandedSections((expandedSections) => {
      // Using Set here but you can use an array too
      const next = new Set(expandedSections);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

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
      <View className="m-4" style={{flex: 1}}>
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
              <TouchableWithoutFeedback onPress={() => {
                Navigation.push(props.componentId, {
                  component: {
                    name: "AnduroReceive",                 
                    options: {
                      topBar: {
                        visible: false,
                      },
                      bottomTabs: {
                        visible: false,
                      },
                    },
                  }})
              }}>
                <View style={{display:"flex", flexDirection:'row', backgroundColor:"#1C1513", justifyContent:"center", alignContent:'center', alignItems:'center', height:44, width:(Dimensions.get("screen").width - 90) / 3, borderRadius: 5}}>
                  <Image resizeMode={"contain"} source={require("./../../../assets/images/receive.png")} style={{width:24,height:24}} />
                  <Text style={{fontFamily: 'JetBrainsMono-SemiBold', color:"#ffff", fontSize:14, paddingLeft: 8}}>Receive</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => {
                Navigation.push(props.componentId, {
                  component: {
                    name: "AnduroSend",                 
                    options: {
                      topBar: {
                        visible: false,
                      },
                      bottomTabs: {
                        visible: false,
                      },
                    },
                  }})
              }}>
                <View style={{display:"flex", flexDirection:'row', backgroundColor:"#1C1513", justifyContent:"center", alignContent:'center', alignItems:'center', height:44, width:(Dimensions.get("screen").width - 90) / 3, borderRadius: 5, marginHorizontal: 13}}>
                  <Image resizeMode={"contain"} source={require("./../../../assets/images/swap.png")} style={{width:24,height:24}} />
                  <Text style={{fontFamily: 'JetBrainsMono-SemiBold', color:"#ffff", fontSize:14, paddingLeft: 8}}>Send</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableOpacity onPress={() => {
                console.log('inside onpress')
                Navigation.push(props.componentId, {
                  component: {
                    name: "AnduroConvert",
                 
                    options: {
                      topBar: {
                        visible: false,
                      },
                      bottomTabs: {
                        visible: false,
                      },
                    },
                  }})
              }}>
                <View style={{display:"flex", flexDirection:'row', backgroundColor:"#1C1513", justifyContent:"center", alignContent:'center', alignItems:'center', height:44, width:(Dimensions.get("screen").width - 90) / 3, borderRadius: 5}}>
                  <Image resizeMode={"contain"} source={require("./../../../assets/images/swap.png")} style={{width:24,height:24}} />
                  <Text style={{fontFamily: 'JetBrainsMono-SemiBold', color:"#ffff", fontSize:14, paddingLeft: 8}}>Convert</Text>
                </View>
              </TouchableOpacity>
            </View>
          }
        </View>
         <View style={{flex:1}}>
          {loading &&
            <>
              <ListSkeleton />
              <ListSkeleton />
              <ListSkeleton />
              <ListSkeleton />
            </>
          }
         {!loading &&
          <SectionList
            sections={data}
            extraData={expandedSections} // extraData is required to re-render the list when expandedSections changes
            keyExtractor={(item, index) => item.key }
            renderItem={({ section: { title }, item, index }) => {
              // check to see if the section is expanded
              const isExpanded = expandedSections.has(title);
              //return null if it  is
              if (isExpanded) return null;
    
              return <CoinItemVW data={item} key={index}/>;
            }}
            renderSectionHeader={({ section: { title } }) => (
              <Pressable onPress={() => handleToggle(title)}>
                <CoinHeaderVW title={title}/>
              </Pressable>
            )}
            stickySectionHeadersEnabled={true}
           />
          }
         </View>
 
      </View>
    </SafeAreaView>
  )
}


export default AnduroDashboardVC
