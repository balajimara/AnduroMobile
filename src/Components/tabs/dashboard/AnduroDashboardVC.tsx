import { Text } from "@rneui/base"
import { useEffect } from "react"
import { Button, SafeAreaView, View } from "react-native"
import { Navigation } from "react-native-navigation"
import route from "../../../Route/Route"
import { Icon } from "react-native-vector-icons/Icon"
import AnduroHeaderVC from "../../header/AnduroHeader"

const AnduroDashboardVC = (props:any) => {
    useEffect(()=>{        
        Navigation.mergeOptions(props.componentId, {
            topBar: {
              title: {
                component: {                        
                    name: "AnduroHeader",                                            
                },             
              },
              background: {
                color: "#000000"
                }
            }
        });
    })

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
        <SafeAreaView>
          <AnduroHeaderVC callback={onMenuOpen}></AnduroHeaderVC>
        </SafeAreaView>
    )
}

export default AnduroDashboardVC