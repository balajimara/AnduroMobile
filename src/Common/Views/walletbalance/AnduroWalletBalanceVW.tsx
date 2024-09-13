import { View, Text, Image, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, Dimensions } from "react-native"
import { useTranslation } from "react-i18next"
import React from "react"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import BalanceSkeleton from "../../../Common/Skeleton/Dashboard/BalanceSkeleton"
import ActionSkeleton from "../../../Common/Skeleton/Dashboard/ActionSkeleton"
import { Navigation } from "react-native-navigation"
import { formatBTCValue } from "../../../Utility/AndurocommonUtils"

interface WalletBalanceVWProps {
    isConvertEnabled: boolean
    confirmedBalance: number
    showRefresh?: boolean
    pendingBalance: number
    fiatValue: number
    selectedCurrency: string
    symbol: string
    icon?: any
    image?: any
    type: string
    assetId?: string
    selelectedNetwork?: string
    receiveAction: () => void
    sendAction: () => void
    convertAction: () => void
    prepareNetworks: () => void
    copyAction: () => void
  }

const AnduroWalletBalanceVW = (props: WalletBalanceVWProps) => {
    const {
        isConvertEnabled,
        confirmedBalance,
        showRefresh,
        pendingBalance,
        fiatValue,
        selectedCurrency,
        symbol,
        icon,
        image,
        type,
        assetId,
        selelectedNetwork,
        receiveAction,
        sendAction,
        convertAction,
        prepareNetworks,
        copyAction,
      } = props
  const { t } = useTranslation()
  // console.log('confirmedBalance', confirmedBalance)
  React.useEffect(() => {}, [])
  return (
 <>   
    <View className="py-10">
       <View style={{display:"flex", flexDirection:'column',justifyContent:"center", alignContent:'center', alignItems:'center'}}>
         <View style={{display:"flex", flexDirection:'row'}}>
            <Text style={{fontFamily:"RobotoMono-Regular", color:"#fff", fontSize:30, marginRight: 12}}> {
            Number(confirmedBalance) <= 0
                ? 0
                : !assetId
                  ? Number(confirmedBalance)
                  : confirmedBalance}{" "}
              {symbol}</Text>
            <SimpleLineIcons name="refresh" color="#999999" size={14} style={{marginTop:12}} />
         </View>
         <View style={{backgroundColor:'#3D2F2D', height: 1, width: "50%", marginVertical: 10}}></View>
         <Text style={{fontFamily:"RobotoMono-Regular", color:"#999", fontSize:18, marginRight: 12}}>{fiatValue}</Text>
       </View>
       
    </View>
      <View style={{display:"flex", flexDirection:'row'}}>
        <TouchableWithoutFeedback onPress={() => receiveAction()}>
          <View style={{display:"flex", flexDirection:'row', backgroundColor:"#1C1513", justifyContent:"center", alignContent:'center', alignItems:'center', height:44, width:(Dimensions.get("screen").width - 90) / 3, borderRadius: 5}}>
            <Image resizeMode={"contain"} source={require("./../../../assets/images/receive.png")} style={{width:24,height:24}} />
            <Text style={{fontFamily: 'JetBrainsMono-SemiBold', color:"#ffff", fontSize:14, paddingLeft: 8}}>Receive</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => sendAction()}>
          <View style={{display:"flex", flexDirection:'row', backgroundColor:"#1C1513", justifyContent:"center", alignContent:'center', alignItems:'center', height:44, width:(Dimensions.get("screen").width - 90) / 3, borderRadius: 5, marginHorizontal: 13}}>
            <Image resizeMode={"contain"} source={require("./../../../assets/images/swap.png")} style={{width:24,height:24}} />
            <Text style={{fontFamily: 'JetBrainsMono-SemiBold', color:"#ffff", fontSize:14, paddingLeft: 8}}>Send</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={() => {
          convertAction()
        }}>
          <View style={{display:"flex", flexDirection:'row', backgroundColor:"#1C1513", justifyContent:"center", alignContent:'center', alignItems:'center', height:44, width:(Dimensions.get("screen").width - 90) / 3, borderRadius: 5}}>
            <Image resizeMode={"contain"} source={require("./../../../assets/images/swap.png")} style={{width:24,height:24}} />
            <Text style={{fontFamily: 'JetBrainsMono-SemiBold', color:"#ffff", fontSize:14, paddingLeft: 8}}>Convert</Text>
          </View>
        </TouchableOpacity>
      </View>
    
  </>
  )
}

export default AnduroWalletBalanceVW