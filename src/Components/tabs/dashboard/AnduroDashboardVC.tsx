import { Text } from "@rneui/base"
import { useEffect } from "react"
import { SafeAreaView, View } from "react-native"
import { Navigation } from "react-native-navigation"

const AnduroDashboardVC = (props:any) => {
    useEffect(()=>{
        Navigation.mergeOptions(props.componentId, {
            topBar: {
              title: {
                text: "test134"
              }
            }
        });
    })
    
    return (
        <SafeAreaView>
            <Text className="text-black">Dashboard</Text>
        </SafeAreaView>
    )
}

export default AnduroDashboardVC