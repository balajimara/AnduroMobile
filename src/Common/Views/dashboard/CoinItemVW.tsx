import React from "react"
import {StyleSheet, Text, View } from "react-native"
import FastImage from 'react-native-fast-image'

const CoinItemVW = (props:any) => {
  return (
    <View style={styles.container}> 
       <View style={styles.leftContainer}>
           <FastImage source={{uri: props.data.image}} style={styles.imgContainer} />
           <View style={styles.contentContainer}>
                {props.data.type === "native" &&
                  <>
                    <Text style={styles.symbolText}>{props.data.symbol}</Text>
                    <Text style={styles.nameText}>{props.data.name}</Text>
                  </>
                } 
                {props.data.type === "token" &&
                   <Text style={styles.symbolText}>{props.data.name}</Text>
                }
           </View>
       </View>
       <View style={styles.contentContainer}>
          <Text style={styles.balanceText}>{props.data.balance} <Text style={styles.balanceSymbolText}>{props.data.symbol}</Text></Text>
          {props.data.type === "native" &&
             <Text style={styles.usdText}>$200.00</Text>
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
   imgContainer: {
    width: 36,
    height: 36,
    resizeMode: 'cover',
    position:'absolute',
    left:0,
    top:0,
    borderRadius: 36
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
    justifyContent: 'center'
   }
});
  

export default CoinItemVW