import { Text } from "@rneui/base"
import { useEffect } from "react"
import { Button, SafeAreaView, View } from "react-native"
import { Navigation } from "react-native-navigation"
import route from "../../../Route/Route"

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

    const onMenuOpen = () => {
        Navigation.mergeOptions(props.componentId, {
            sideMenu: {
                left: {
                    visible: true
                }
            }
        });
    }
    
    return (
        <SafeAreaView>
            <Text className="text-black">
               <Button onPress={onMenuOpen} title="Menu" />

            </Text>
        </SafeAreaView>
    )
}

export default AnduroDashboardVC