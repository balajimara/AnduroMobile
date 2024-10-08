import React from "react"
import {StyleSheet, Text, View } from "react-native"
import FastImage from 'react-native-fast-image'
import { formatBTCValue, formatFiatValue } from "../../../Utility/AndurocommonUtils"
interface NetworkListParams {
  data: any
  fiatValue: number
  fiatSymbol: string
  networksymbol?: string
  type?: string
  islast?: boolean
  isTokenSelect?: boolean
  onClick: () => void
}

const CoinItemVW = (props:NetworkListParams) => {
  const {
    data,
    fiatValue,
    fiatSymbol,
    networksymbol,
    islast,
    type,
    isTokenSelect,
    onClick
  } = props
  const fiatBalance: string = (data.balance * fiatValue).toString()
  return (
    <View style={styles.container}> 
       <View style={data.type === "nft" ? styles.nftLeftContainer: styles.leftContainer}>
           <FastImage source={data.type == "native" ? data.image : {uri: data.image}} style={data.type === "nft" ? styles.nftImgContainer : styles.imgContainer} />
           <View style={styles.contentContainer}>
                {data.type === "native" &&
                  <>
                    <Text style={styles.symbolText}>{data.symbol}</Text>
                    <Text style={styles.nameText}>{data.name}</Text>
                  </>
                } 
                {data.type === "nft" &&
                  <>
                    <Text style={styles.symbolText}>{data.name}</Text>
                    <Text style={styles.nameText}>{data.symbol}</Text>
                    <Text style={styles.addtionalText} numberOfLines={1}>{data.info}</Text>
                  </>
                } 
                {data.type === "token" &&
                   <Text style={styles.symbolText}>{data.name}</Text>
                }
           </View>
       </View>
       <View style={styles.rightContainer}>
          <Text style={styles.balanceText}>{`${data.balance}`} <Text style={styles.balanceSymbolText}>{data.symbol}</Text></Text>
          {data.type === "native" &&
             <Text style={styles.usdText}>{`${fiatBalance} ${fiatSymbol}`}</Text>
          }
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
     backgroundColor: "#231B19",
     borderRadius: 7,
     paddingHorizontal: 16,
     paddingVertical: 20,
     display: "flex",
     flexDirection:'row',
     justifyContent: 'space-between',
     marginBottom: 16
   },
   leftContainer: {
      position:'relative',
      flex:1,
      minHeight: 36,
      paddingLeft: 50
   },
   nftLeftContainer: {
    position:'relative',
    flex:1,
    minHeight: 80,
    paddingLeft: 94
 },
   imgContainer: {
    width: 36,
    height: 36,
    resizeMode: 'cover',
    position:'absolute',
    left:0,
    top:0,
    borderRadius: 36
   },
   nftImgContainer: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    position:'absolute',
    left:0,
    top:0,
    borderRadius: 10
   },
   symbolText: {
    fontSize: 16,
    fontFamily:'Geist-Bold',
    color: "#fff",
    textTransform:'uppercase'
   },
   nameText: {
    fontSize: 14,
    fontFamily:'Geist-Regular',
    color: "#999",
    marginTop: 4,
    textTransform:"capitalize"
   },
   usdText: {
    fontSize: 14,
    fontFamily:'Geist-Regular',
    color: "#999",
    marginTop: 4,
    textTransform:"capitalize",
    textAlign: 'right'
   },
   balanceText: {
    fontSize: 14,
    fontFamily:'Geist-Regular',
    color: "#fff",
    textTransform:"capitalize",
    textAlign: 'right'
   },
   balanceSymbolText: {
     textTransform: "uppercase"
   },
   contentContainer: {
    display: 'flex', 
    flexDirection:'column', 
    flex: 1,
    justifyContent: 'center',
    paddingRight: 20
   },
   rightContainer: {
    display:"flex", 
    justifyContent:'center'
   },
   addtionalText: {
    fontSize: 14,
    fontFamily:'Geist-Regular',
    color: "#666",
    marginTop: 15,
    textTransform:"capitalize"
   }
});
  

export default CoinItemVW