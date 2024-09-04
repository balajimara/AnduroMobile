import { Text } from "@rneui/base"
import { useEffect, useState } from "react"
import { Dimensions, Pressable, SafeAreaView, SectionList, View } from "react-native"
import { Navigation } from "react-native-navigation"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import ListSkeleton from "../../../Common/Skeleton/Dashboard/ListSkeleton"
import CoinItemVW from "../../../Common/Views/dashboard/CoinItemVW"
import CoinHeaderVW from "../../../Common/Views/dashboard/CoinHeaderVW"
import { Input } from "@rneui/themed"

const AnduroCollectiblesVC = (props: any)  => {
  const [loading, setLoading] = useState(true)
  const [data] = useState([{
    title: "Coordinate",
    data:[
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Asset ID: 1"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Asset ID: 1"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Asset ID: 1"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Asset ID: 1"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Asset ID: 1"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Asset ID: 1"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Asset ID: 1"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Asset ID: 1"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Asset ID: 1"
      }
    ]  
  },{
    title: "Alys",
    data:[
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Contract Address: 0x72b...edbf9"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Contract Address: 0x72b...edbf9"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Contract Address: 0x72b...edbf9"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Contract Address: 0x72b...edbf9"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Contract Address: 0x72b...edbf9"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Contract Address: 0x72b...edbf9"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Contract Address: 0x72b...edbf9"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Asset ID: 1"
      },
      {
        type: "nft",
        name: 'USD Coin',
        symbol: 'USDC',
        image: 'https://picsum.photos/id/1/300/300',
        balance: '0.457',
        info: "Contract Address: 0x72b...edbf9"
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
       <View className="m-4" style={{flex: 1}}>
          {!loading &&
           <Input
           placeholder="Search"
           leftIcon={{ type: 'simple-line-icon', name: 'magnifier', color:"#fff" }}
           onChangeText={(value)=>{}}
           containerStyle={{paddingHorizontal:0, backgroundColor:'red', marginBottom:0, height:48}}
           inputContainerStyle={{backgroundColor:"#252622", paddingHorizontal:15, borderBottomWidth: 0}} 
           inputStyle={{paddingLeft: 10, fontSize: 16, fontFamily: 'Geist-Regular', color:"#fff"}}
           />
          }
          <View style={{flex:1}}>
            {loading &&
              <>
                <ListSkeleton />
                <ListSkeleton />
                <ListSkeleton />
                <ListSkeleton />
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
                keyExtractor={(item, index) => item.name }
                renderItem={({ section: { title }, item }) => {
                  // check to see if the section is expanded
                  const isExpanded = expandedSections.has(title);
        
                  //return null if it is
                  if (isExpanded) return null;
        
                  return <CoinItemVW data={item} key={item.name}/>;
                }}
                renderSectionHeader={({ section: { title } }) => (
                  <Pressable onPress={() => handleToggle(title)}>
                    <CoinHeaderVW title={title} />
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

export default AnduroCollectiblesVC
