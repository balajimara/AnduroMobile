import { Text } from "@rneui/base"
import { useEffect, useState } from "react"
import { Button, Dimensions, SafeAreaView, View } from "react-native"
import { Navigation, NavigationButtonPressedEvent } from "react-native-navigation"
import route from "../../../Route/Route"
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AnduroHeaderVC from "../../header/AnduroHeader"
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const AnduroDashboardVC = (props:any) => {
    useEffect(()=>{        
        Navigation.mergeOptions(props.componentId, {
            topBar: {
              leftButtons:[{
                id: "menuButton",
                icon: SimpleLineIcons.getImageSourceSync("menu",22,"#fff"),
              }],
              title: {
                text: "Aaron's Wallet",             
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
        <SafeAreaView className="bg-gray flex flex-1">
            <View className="m-4">
                <View className="bg-popupclr rounded-xl p-3.5">
                    <SkeletonPlaceholder backgroundColor={"#40322e"} highlightColor={"#785d55"}>
                        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                            <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50}  />
                        </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default AnduroDashboardVC