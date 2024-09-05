import React from "react"
import { StyleSheet, Text, View } from "react-native"

const SecretRecoveryList: React.FC<any> = ({ data, index}) => {
  return (
    <View style={styles.boxView} className="flex-row w-full">
    <Text style={styles.titleView}>{`${index}`}</Text>
    <Text style={styles.subtitleView}>
    {data.title}
    </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  boxView: {
   borderBottomWidth:1,
   borderColor:'#4e4846',
   marginBottom:15
  },
  titleView: {
     color: '#fafafa',
     opacity:0.23,
     padding:0,
     width:20
   },
   subtitleView: {
     color: '#fafafa',
     opacity:0.70,
     padding:0,
   }
 });

export default SecretRecoveryList
