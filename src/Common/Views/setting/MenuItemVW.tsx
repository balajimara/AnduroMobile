import { ListItem } from "@rneui/themed"
import { useTranslation } from "react-i18next"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

interface menuProps  {
    menuname: string
    iconname: string
    menutype: string
    callback: () => void
}


const MenuItemVW = (props: menuProps) => {
const { menuname, iconname, callback, menutype } = props    
const {t} = useTranslation()
    return (

        <ListItem className="bg-transparent" containerStyle={styles.listView}>
        <View className="flex justify-between pb-8 w-full relative"
         >            
        <TouchableOpacity onPress={()=> callback()}>
        <View className="flex-row flex-wrap items-center">
           <View><Icon style={[styles.iconOne]} name={iconname}></Icon></View>
           <View><Text className="font-geistregular text-lg text-walletLight font-normal cursor-pointer">{menuname}</Text></View>
           <View className="absolute right-0"><Icon style={[styles.icon]} name="chevron-right"></Icon></View>
          </View>
        </TouchableOpacity>
        </View>
        </ListItem>
    )
}


const styles = StyleSheet.create({
    icon: {
     color: "#fff",
     fontSize: 24,
    },
    iconOne: {
     color: "#fff",
     fontSize: 18,
     marginRight:15
    },
    iconClose: {
     color: "#fff",
     fontSize: 24
    },
    listView: {
     backgroundColor: 'transparent',
     flexDirection: 'column',
     padding:0
    }
   })

export default MenuItemVW