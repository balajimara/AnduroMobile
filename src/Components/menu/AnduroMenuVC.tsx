import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { ListItem, Dialog, Button } from "@rneui/themed"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Navigation } from "react-native-navigation"
import { useAtom } from 'jotai';
import { getData, menuOpen, setData } from '../../Storage/AnduroStorage';
import { CachedDataTypes, StorageTypes } from '../../model/AnduroStorageModel';
import { setCachedData, checkPassword, getCachedData } from '../../Utility/AndurocommonUtils';
import route from '../../Route/Route';
import PopupVW from '../../Common/Views/popup/PopupVW';
import { useTranslation } from 'react-i18next';
import MenuItemVW from '../../Common/Views/setting/MenuItemVW';

const AnduroMenuVC = (props: any) => {
  const [showWarning, setShowWarning] = React.useState(false)
  const [_openMenu, setOpenMenu] = useAtom(menuOpen)
  const [, setdata] = useAtom(setData)
  const [, getdata] = useAtom(getData)
  const [haspassword, setHasPassword] = useState(false)
  const { t } = useTranslation()
  console.log("haspasswordhaspasswordhaspasswordhaspassword", haspassword)
  const menudata = [{
    "menuname": t("backupwalletmenu"),
    "iconname": "wallet-outline",
    "menutype": "backup",
    "componentName": route.backupwallet
  },{
    "menuname": t("selectcurrency"),
    "iconname": "currency-sign",
    "menutype": "selectcurrency",
    "componentName": route.selectcurrency
  },{
    "menuname": t("changelanguage"),
    "iconname": "translate",
    "menutype": "changelanguage",
    "componentName": route.changelanguage
  },{
    "menuname": t("nativecoins"),
    "iconname": "hand-coin-outline",
    "menutype": "nativecoins",
    "componentName": route.nativeCoin
  },{
    "menuname": `${haspassword}` ? `${t("changepassword")}` : `${t("setpassword")}`,
    "iconname": "form-textbox-password",
    "menutype": "changepassword",
    "componentName": route.changepassword
  },{
    "menuname": t("logout"),
    "iconname": "logout",
    "menutype": "logout",
    "componentName": ""
  }]

  React.useEffect(() => {
      const passwordStatus = async () => {
        let passwordstatus = await checkPassword()
        setHasPassword(passwordstatus)
        console.log('haspassword', haspassword)
      }
      passwordStatus()
  })

  const handleLogoutAction = async (type: string) => {
    setShowWarning(false)
    if (type !== "close") {
      setOpenMenu(false)
      const CachedUserData = JSON.parse(await getCachedData(CachedDataTypes.userdata) || "{}")
      CachedUserData.isLogged = false
      setdata({ type: StorageTypes.userData, data: CachedUserData })
      await setCachedData(StorageTypes.userData, JSON.stringify(CachedUserData))
      Navigation.setRoot({
        root: route.login,
      })
    }
  }

  const closeMenu = async () => {
    await Navigation.dismissAllModals()
    Navigation.mergeOptions(props.componentId, {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    })
  }

console.log(menudata)
const handleNavigation = (menutype: string, componentName: any) => {
  if (menutype === "logout") {
    setShowWarning(true)
  } else {
    closeMenu()
    Navigation.setRoot({
      root: componentName
    })
  }
}

  return (
    <SafeAreaView>
     <View className="bg-gray h-full">
      <View className="navbar p-5 px-3.5 justify-between flex-row flex-wrap">
        <TouchableOpacity onPress={() => {closeMenu()}}>
       <View className="navbar-start w-auto">
        <Icon style={[styles.iconClose]} name="close"></Icon>
       </View>
       </TouchableOpacity>
       <View className="navbar-center">
        <Text className="text-center font-geistsemibold capitalize text-lg text-lightgray w-64 m-auto whitespace-nowrap overflow-hidden text-ellipsis">Profile</Text>
       </View>
       <View className="navbar-end w-auto">
       </View>
      </View>
      <View className="p-3.5 px-5 settings-menu">
       {menudata.map((menu,index) => (
          <MenuItemVW menuname={menu.menutype !== "changepassword" ? menu.menuname : (haspassword ? t("changepassword") : t("setpassword"))} iconname={menu.iconname} menutype={menu.menutype} callback={() => handleNavigation(menu.menutype, menu.componentName)} key={index}/>
       ))}
      </View>
     </View>
     <PopupVW type="logout" isvisible={showWarning} onbackdrop={()=> setShowWarning(false)} callback={handleLogoutAction} />
    </SafeAreaView>
  )
}

  const styles = StyleSheet.create({
   iconClose: {
    color: "#fff",
    fontSize: 24
   }
  })

  export default AnduroMenuVC