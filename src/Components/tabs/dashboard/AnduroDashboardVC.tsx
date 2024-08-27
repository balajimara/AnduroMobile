import { Text } from "@rneui/base"
import { useEffect, useState } from "react"
import { Button, Dimensions, SafeAreaView, View } from "react-native"
import { Navigation, NavigationButtonPressedEvent } from "react-native-navigation"
import route from "../../../Route/Route"
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AnduroHeaderVC from "../../header/AnduroHeader"


const AnduroDashboardVC = (props:any) => {
    useEffect(()=>{        
        Navigation.mergeOptions(props.componentId, {
            topBar: {
              leftButtons:[{
                id: "menuButton",
                icon: SimpleLineIcons.getImageSourceSync("menu",22,"#fff"),
              }],
              title: {
                text: "Dashboard",             
              },
              
            }
        });
        Navigation.events().registerNavigationButtonPressedListener(
            (event: NavigationButtonPressedEvent) => {
              if (event.buttonId === 'menuButton') {
                openMenu()
              }
            }
        ); 
    },[])

    const openMenu = async () => {
        await Navigation.dismissAllModals()
        Navigation.mergeOptions(props.componentId,{
            sideMenu: {
                left: {
                    visible: true,
                    width: Dimensions.get('window').width
                }
            }
        })
    }

    
    return (
        <SafeAreaView>
          <Text>test</Text>
        </SafeAreaView>
    )
}

export default AnduroDashboardVC