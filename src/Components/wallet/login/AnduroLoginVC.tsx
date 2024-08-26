import { Text } from "@rneui/base"
import { useAtom } from "jotai"
import React from "react"
import { View } from "react-native"
import { Navigation } from "react-native-navigation"
import { CachedDataTypes, StorageTypes } from "../../../model/AnduroStorageModel"
import { getData, setData } from "../../../Storage/AnduroStorage"
import { getCachedData, setCachedData } from "../../../Utility/AndurocommonUtils"

const AnduroLoginVC = (props: any) => {
    const [, getdata] = useAtom(getData)
    const [, setdata] = useAtom(setData)
    React.useEffect(() => {
        getCachedData(StorageTypes.userData).then((userdata) => {
          let userinfo = JSON.parse(userdata || "{}")
          if (Object.keys(userinfo).length == 0) {
            setCachedData(StorageTypes.userData, JSON.stringify(getdata({type : StorageTypes.userData})))          
          } else {
            setdata({ type: StorageTypes.userData, data: userinfo})
          }            
        })
      },[])
    React.useEffect(() => {
      const userData = getdata({ type:  StorageTypes.userData})
      getCachedData(StorageTypes.userData).then((userdata) => {
        setdata({type: StorageTypes.userData, data: userdata})
        getCachedData(CachedDataTypes.mnemonic).then((mnemonic) => {
          if (mnemonic !== null) {
            Navigation.push(props.componentId, {
              component: {
                name: "AnduroLogin",
                options: {
                  topBar: {
                    visible: false,
                  },
                  bottomTabs: {
                    visible: false,
                  }
                }
              }
          }) 
          } else {
            if (userData.privacyPolicy) {
              Navigation.push(props.componentId, {
                component: {
                  name: "AnduroCreateType",
                  options: {
                    topBar: {
                      visible: false,
                    },
                    bottomTabs: {
                      visible: false,
                    }
                  }
                }
            }) 
            }
          }
        })
      })
    })
    return (
        <View><Text>Login VC</Text></View>
    )
}

export default AnduroLoginVC