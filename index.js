/**
 * @format
 */
import { LogBox } from 'react-native';
import { Navigation } from "react-native-navigation"
import route from "./src/Route/Route"
import "./i18n"
import { getCachedData, checkUserHasPassword } from "./src/Utility/AndurocommonUtils"
import { CachedDataTypes, StorageTypes } from "./src/model/AnduroStorageModel"
import "./shim.js"
import { PermissionsAndroid } from "react-native"
import  'text-encoding-polyfill'
import SplashScreen from "react-native-splash-screen"


LogBox.ignoreLogs(["Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle."]); // Ignore log notification by message
LogBox.ignoreAllLogs(true)
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: "#140401",
      },
      title: {
        color: "#fff",
        fontFamily: "Geist-SemiBold",
      },
      visible: true,
      drawBehind: true,
      animate: true,
    },
    bottomTab: {
      margin: 12,
      selectedFontSize: 12,
      textColor: "#c3c3c3",
      selectedTextColor: "#ffffff",
      fontFamily: "Montserrat-SemiBold",
    },
    bottomTabs: {
      backgroundColor: "#140401",
      titleDisplayMode: "alwaysHide",
      currentTabIndex: 1,
      visible: true,
    },
    layout: {
      orientation: ["portrait"],
      statusBar: false,
    },
    animations: {
      push: {
        waitForRender: true,
      },
      setRoot: {
        waitForRender: true,
      },
      pop: {
        enabled: false
      }
    },
    popGesture: false,
    layout: {
      componentBackgroundColor: '#140401',
    }
    
  })
  navigationLogic()
  requestStoragePermission()
})

// Method that chooses to show between App intro slider and other screens
navigationLogic = () => {
  getCachedData(StorageTypes.userData).then((userData) => {
    getCachedData(CachedDataTypes.mnemonic).then((mnemonic) => {
      let userinfo = JSON.parse(userData || "{}")
      SplashScreen.hide()

      if (mnemonic !== null) {
        const isValidMnemonic = checkUserHasPassword(mnemonic)
        console.log('isValidMnemonic', isValidMnemonic)
        if (!isValidMnemonic) {
          Navigation.setRoot({
            root: route.login,
          })
        } else {
          Navigation.setRoot({
            root: route.gettingstarted,
          })
        }    
      } else {
        if (Object.keys(userinfo).length === 0) {
          Navigation.setRoot({
            root: route.gettingstarted,
          })
        } else {
          if (userinfo.privacyPolicy) {
            Navigation.setRoot({
              root: route.gettingstarted,
            })
          } else {
            Navigation.setRoot({
              root: route.gettingstarted,
            })
          }
        }
      }
    })
  })
}

// grant permission
const requestStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple(
      [
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ],
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " + "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    )
    // console.log("granted", granted)
    const readGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    )
    const writeGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    )
    if (!readGranted || !writeGranted) {
      // console.log("Read and write permissions have not been granted")
      return
    }
  } catch (err) {
    console.warn(err)
  }
}
