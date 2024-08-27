import { Button, Text } from "@rneui/base"
import React from "react"
import { SafeAreaView, TouchableOpacity, View } from "react-native"
import { Navigation } from "react-native-navigation"
import  Icon  from "react-native-vector-icons/FontAwesome"
import route from "../../Route/Route"



const AnduroHeaderVC = (props: any) => {
    const { callback } = props 

    const onMenuOpen = () => {
        console.log('ssfsdfsfsfsdsdfsdfsdddddsdfsdsdfsf')
        Navigation.mergeOptions(props.componentId, {
            sideMenu: {
                left: {
                    visible: true                    
                }                
            },            
        });
    }  

    return (
        <SafeAreaView><View><TouchableOpacity  onPress={() =>  onMenuOpen()}><Icon id="navicon" name="navicon"></Icon></TouchableOpacity></View></SafeAreaView>
    )
}

export default AnduroHeaderVC

