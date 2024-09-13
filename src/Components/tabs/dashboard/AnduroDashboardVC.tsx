import React from "react"
import { Icon, Text } from "@rneui/base"
import { useEffect, useState } from "react"
import {  Dimensions, SafeAreaView, TouchableWithoutFeedback, View, Image, SectionList, StyleSheet, StatusBar, Pressable, TouchableOpacity, BackHandler } from "react-native"
import { Navigation } from "react-native-navigation"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { useAtom } from "jotai"
import { useTranslation } from "react-i18next"
import {
  getFiatValues,
getActiveNetworks,
  getMempoolNftList,
} from "../../../Utility/AndurocommonUtils"
import ListSkeleton from "../../../Common/Skeleton/Dashboard/ListSkeleton"
import CoinItemVW from "../../../Common/Views/dashboard/CoinItemVW"
import CoinHeaderVW from "../../../Common/Views/dashboard/CoinHeaderVW"
import { getData, setData } from "../../../Storage/AnduroStorage"
import { StorageTypes } from "../../../model/AnduroStorageModel"
import { NetworkListModel } from "../../../model/AnduroNetworkModel"
import { AssetDetailsResponse } from "../../../model/AnduroResponseModel"
import { prepareNetwork } from "../../../Utility/AnduroStorageUtils"
import BackPopupVW from "../../../Common/Views/popup/BackPopupVW"
import AnduroWalletBalanceVW from "../../../Common/Views/walletbalance/AnduroWalletBalanceVW"
import BalanceSkeleton from "../../../Common/Skeleton/Dashboard/BalanceSkeleton"
import ActionSkeleton from "../../../Common/Skeleton/Dashboard/ActionSkeleton"

interface DashboardProps {
  password: string,
  componentId: string
}


const AnduroDashboardVC = (props: DashboardProps) => {
  const { t } = useTranslation()
  const [,getdata] = useAtom(getData)
  const [,setdata] = useAtom(setData)
  const [loading, setLoading] = useState(true)
  const [networks, setNetworks] = React.useState<NetworkListModel[]>([])
  const [isInterval, setIsInterval] = React.useState<boolean>(false)
  const [fiatValue, setFiatValue] = React.useState<number>(0)
  const [selectedCurrency] = React.useState<string>(
    getdata({ type: StorageTypes.userData }).selectedCurrency || "USD",
  )
  const [balance, setBalance] = React.useState<{
    pendingBalance: number
    confirmedBalance: number
  }>({
    pendingBalance: 0,
    confirmedBalance: 0,
  })

  const { password } = props
  const [tokenList, setTokenList] = React.useState<any>([])
  const [isConvertEnabled, setIsConvertEnabled] = React.useState<boolean>(false)
  const [MempoolTokenList, setMempoolTokenList] = React.useState<any>([])
  const [selectedNetworkVersion] = React.useState<string>(
    getdata({ type: StorageTypes.selectedNetworkVer })
  )  
  const [isBackPopupOpen, setIsBackPopupOpen] = React.useState<boolean>(false)
  const [sectionData, setSectionData] = React.useState<any>([])
  
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

  const yescallback = () => {
    setIsBackPopupOpen(false)
    BackHandler.exitApp()
  } 
  
  const nocallback = () => {
    setIsBackPopupOpen(false)
  }

  React.useEffect(() => {    
    const backPressEvent = () => {
      setIsBackPopupOpen(true)
      return true;  
    }
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backPressEvent
    );
    return () => subscription.remove();    
  }, []);



  React.useEffect(() => {
    if (isInterval) {
      const interval = setInterval(async () => {
        await prepareNetworks()
      }, 3000)
      return () => clearInterval(interval)
    }
    return undefined
  }, [networks, isInterval, sectionData])
  React.useEffect(() => {
    if (networks.length === 0) {
      prepareNetworks().then(() => {
        setIsInterval(true)
      })
    }
  }, [isInterval])

  React.useEffect(() => {
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

  // This function is used to prepare a network list with a balance
  const prepareNetworks = async () => {
    const xpubKeys = getdata({ type: StorageTypes.xpubKeys })
    const address = getdata({ type: StorageTypes.alysAddress })
    const userData = getdata({ type: StorageTypes.userData })
    const networkVersion = getdata({ type: StorageTypes.selectedNetworkVer })
    const activeNetwork = getActiveNetworks(
      getdata({ type: StorageTypes.networkList }),
      userData.nativeCoins,
      userData.developerMode,
      networkVersion,
    )
    setIsConvertEnabled(activeNetwork.isConvertEnabled)
    const result: NetworkListModel[] = await prepareNetwork(
      activeNetwork.activeNetworks,
      xpubKeys,
      address,
    )
    let confirmedBalance: number = 0
    let pendingBalance: number = 0
    for (let index = 0; index < result.length; index++) {
      confirmedBalance += result[index].balance
      pendingBalance += result[index].pendingBalance || 0
      result[index].image = require("../../../assets/icons/btc.png"   )   
      if (result[index].networkType == "sidechain") {
        result[index].image = require("../../../assets/icons/cbtc.png")
      } else if (result[index].networkType == "alys") {
        result[index].image = require("../../../assets/icons/alys.png")
      }
      result[index].type = "native"

    }
    setBalance({ pendingBalance, confirmedBalance })
    setNetworks(result)    
    // console.log('result', result)
    setSectionData([{
      "title": "Natvie Assets",
      "data": networks
    },])
    getFiatValue(result)
    setLoading(false)
  }


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

    // This function is used to get fiat value.
    const getFiatValue = async (networks: NetworkListModel[]) => {
      const result = await getFiatValues({
        currency: selectedCurrency,
        networklist: networks,
      })
      setFiatValue(result)
    }

  return (
    <SafeAreaView className="bg-gray flex flex-1">
      <View className="m-4" style={{flex: 1}}>
      <View className="bg-popupclr rounded-xl p-3.5">
       {loading && (
        <View className="py-10">
        <BalanceSkeleton/>
        </View>
      )}
      {!loading && (
      <AnduroWalletBalanceVW
            isConvertEnabled={isConvertEnabled}
            confirmedBalance={balance.confirmedBalance}
            showRefresh={true}
            pendingBalance={balance.pendingBalance}
            fiatValue={fiatValue}
            selectedCurrency={selectedCurrency}
            symbol="BTC"
            type="network"
            selelectedNetwork=""
            receiveAction={() => {
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
            }}
            sendAction={() => {
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
            }}
            convertAction={() => {
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
            }}
            prepareNetworks={() => prepareNetworks()}
            copyAction={() => {}}
      />
      
      )}
      {loading && (
        <ActionSkeleton/>
      )}
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
            sections={sectionData}
            extraData={expandedSections} // extraData is required to re-render the list when expandedSections changes
            keyExtractor={(item, index) => item.symbol }
            renderItem={({ section: { name }, item, index }) => {
              // check to see if the section is expanded
              const isExpanded = expandedSections.has(name);
              //return null if it  is
              if (isExpanded) return null;
    
              return <CoinItemVW data={item} key={index}/>;
            }}
            renderSectionHeader={({ section: { name } }) => (
              <Pressable onPress={() => handleToggle(name)}>
                <CoinHeaderVW title={name}/>
              </Pressable>
            )}
            stickySectionHeadersEnabled={true}
           />
          }
         </View> 
      
      </View>
      {isBackPopupOpen && (
        <BackPopupVW yescallback={yescallback} nocallback={nocallback} isVisible={isBackPopupOpen}/>
      )}
    </SafeAreaView>
  )
}


export default AnduroDashboardVC
