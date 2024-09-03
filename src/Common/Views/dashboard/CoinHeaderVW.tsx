import React from "react"
import { StyleSheet, Text, View } from "react-native"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

const CoinHeaderVW = (props:any) => {
  return (
    <View style={styles.container}> 
        <Text style={styles.headingText}>{props.title}</Text>
        <SimpleLineIcons name="arrow-down" color="#999999" size={14} style={{marginTop:25}} />
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
     display: "flex",
     flexDirection:'row',
     justifyContent: 'space-between',
     backgroundColor: "#140401"
   },
   headingText: {
        fontSize: 18,
        fontFamily:'Geist-Medium',
        color: "#999",
        lineHeight: 32,
        paddingTop: 12,
        paddingBottom: 12,
   }
});
  

export default CoinHeaderVW
