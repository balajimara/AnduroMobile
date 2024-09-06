import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { ListItem, Dialog, Button } from "@rneui/themed"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Navigation } from "react-native-navigation"
import { useAtom } from 'jotai';
import { getData, menuOpen, setData } from '../../Storage/AnduroStorage';
import { StorageTypes } from '../../model/AnduroStorageModel';
import { setCachedData } from '../../Utility/AndurocommonUtils';
import route from '../../Route/Route';
import PopupVW from '../../Common/Views/popup/PopupVW';
import { useTranslation } from 'react-i18next';
import MenuItemVW from '../../Common/Views/setting/MenuItemVW';

const AnduroMenuVC = (props: any) => {
  const [showWarning, setShowWarning] = React.useState(false)
  const [_openMenu, setOpenMenu] = useAtom(menuOpen)
  const [, setdata] = useAtom(setData)
  const [, getdata] = useAtom(getData)
  const { t } = useTranslation()

  const handleLogoutAction = (type: string) => {
    setShowWarning(false)
    if (type !== "close") {
      setOpenMenu(false)
      const CachedUserData = getdata({ type: StorageTypes.userData })
      CachedUserData.isLogged = false
      setdata({ type: StorageTypes.userData, value: CachedUserData })
      setCachedData(StorageTypes.userData, JSON.stringify(CachedUserData))
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
  "menuname": t("changepassword"),
  "iconname": "form-textbox-password",
  "menutype": "changepassword",
  "componentName": "AnduroChangePassword"
},{
  "menuname": t("logout"),
  "iconname": "logout",
  "menutype": "logout",
  "componentName": ""
}]

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
          <MenuItemVW menuname={menu.menuname} iconname={menu.iconname} menutype={menu.menutype} callback={() => handleNavigation(menu.menutype, menu.componentName)} key={index}/>
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