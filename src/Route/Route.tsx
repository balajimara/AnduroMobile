import { Navigation } from "react-native-navigation"
import AnduroLandingVC from "../Components/wallet/landing/AnduroLandingVC"
import AnduroCreateTypeVC from "../Components/wallet/createtype/AnduroCreateTypeVC"
import AnduroSeedsVC from "../Components/wallet/seeds/AnduroSeedsVC"
import AnduroCreatePasswordVC from "../Components/wallet/createpassword/AnduroCreatePasswordVC"
import AnduroSeedConfirmVC from "../Components/wallet/seedconfirm/AnduroSeedConfirmVC"
import AnduroCreateVC from "../Components/wallet/AnduroCreateVC"
import AnduroImportVC from "../Components/wallet/import/AnduroImportVC"
import AnduroLoginVC from "../Components/wallet/login/AnduroLoginVC"
import AnduroCollectiblesVC from "../Components/tabs/collectibles/AnduroCollectiblesVC"
import AnduroDashboardVC from "../Components/tabs/dashboard/AnduroDashboardVC"
import AnduroAppsVC from "../Components/tabs/apps/AnduroAppsVC"
import AnduroMenuVC from "../Components/menu/AnduroMenuVC"
import Toast from "../Common/Views/Toast"
import AnduroSuccessVC from "../Components/success/AnduroSuccessVC"
import AnduroBackupWalletVC from "../Components/wallet/walletmenu/AnduroBackupWalletVC"
import AnduroChangeLanguageVC from "../Components/wallet/walletmenu/AnduroChangeLanguageVC"
import AnduroChangePasswordVC from "../Components/wallet/walletmenu/AnduroChangePasswordVC"
import AnduroNativeCoinsVC from "../Components/wallet/walletmenu/AnduroNativeCoinsVC"
import AnduroSelectCurrencyVC from "../Components/wallet/walletmenu/AnduroSelectcurrencyVC"
import AnduroSettingVC from "../Components/wallet/walletmenu/AnduroSettingVC"
import AnduroTransactionHistoryVC from "../Components/wallet/walletmenu/AnduroTransactionHistoryVC"
import AnduroSendVC from "../Components/send/AnduroSendVC"
import AnduroGettingStartedVC from "../Components/wallet/gettingstarted/AnduroGettingStartedVC"
import AnduroReceiveVC from "../Components/tabs/dashboard/AnduroReceiveVC"


Navigation.registerComponent("AnduroLanding", () => AnduroLandingVC)
Navigation.registerComponent("AnduroCreateType", () => AnduroCreateTypeVC)
Navigation.registerComponent("AnduroSeeds", () => AnduroSeedsVC)
Navigation.registerComponent("AnduroCreate", () => AnduroCreateVC)
Navigation.registerComponent("AnduroCreatePassword", () => AnduroCreatePasswordVC)
Navigation.registerComponent("AnduroSeedConfirm", () => AnduroSeedConfirmVC)
Navigation.registerComponent("AnduroWalletCreate", () => AnduroCreateVC)
Navigation.registerComponent("AnduroWalletImport", () => AnduroImportVC)
Navigation.registerComponent("AnduroLogin", () => AnduroLoginVC)
Navigation.registerComponent("collectible", () => AnduroCollectiblesVC)
Navigation.registerComponent("dashboard", () => AnduroDashboardVC)
Navigation.registerComponent("apps", () => AnduroAppsVC)
Navigation.registerComponent("menu", () => AnduroMenuVC)
Navigation.registerComponent("Toast", () => Toast)
Navigation.registerComponent("AnduroSuccess", () => AnduroSuccessVC)
Navigation.registerComponent("AnduroBackupWallet", () => AnduroBackupWalletVC)
Navigation.registerComponent("AnduroChangeLanguage", () => AnduroChangeLanguageVC)
Navigation.registerComponent("AnduroChangePasswordVC", () => AnduroChangePasswordVC)
Navigation.registerComponent("AnduroNativeCoins", () => AnduroNativeCoinsVC)
Navigation.registerComponent("AnduroSelectCurrency", () => AnduroSelectCurrencyVC)
Navigation.registerComponent("AnduroSetting", () => AnduroSettingVC)
Navigation.registerComponent("AnduroTransactionHistory", () => AnduroTransactionHistoryVC)
Navigation.registerComponent("AnduroSend", () => AnduroSendVC)
Navigation.registerComponent("AnduroGettingStarted", () => AnduroGettingStartedVC)
Navigation.registerComponent("AnduroReceive", () => AnduroReceiveVC)
/**
 * default root before login
 */

const privacy = {
  stack: {
    children: [
      {
        component: {
          id: "AnduroLanding",
          name: "AnduroLanding",
          options: {
            animations: {
              setRoot: {
                waitForRender: true,
              },
            },
          },
        },
      },
    ],
  },
}


/**
 * default root before login
 */

const gettingstarted = {
  stack: {
    children: [
      {
        component: {
          id: "AnduroGettingStarted",
          name: "AnduroGettingStarted",
          options: {
            topBar: {
              visible: false,
            },
            bottomTabs: {
              visible: false,
            },
            animations: {
              setRoot: {
                waitForRender: true,
              },
            },
          },
        },
      },
    ],
  },
}

/**
 * default crete type page
 */

const login = {
  stack: {
    children: [
      {
        component: {
          name: "AnduroLogin",
          options: {
            topBar: {
              visible: false,
            },
            bottomTabs: {
              visible: false,
            },
            animations: {
              setRoot: {
                waitForRender: true,
              },
            },
          },
        },
      },
    ],
  },
}

/**
 * default crete type page
 */

const afterPrivacy = {
  stack: {
    children: [
      {
        component: {
          id: "AnduroCreateType",
          name: "AnduroCreateType",
          options: {
            topBar: {
              visible: false,
            },
            bottomTabs: {
              visible: false,
            },
            animations: {
              setRoot: {
                waitForRender: true,
              },
            },
          },
        },
      },
    ],
  },
}

const afterLogin = {
  sideMenu: {
    left: {
      component: {
        name: "menu",
        passProps: {
          id: "menuid"
        }
      },
      width: 414,
    },
    center: {
      bottomTabs: {
        children: [
          {
            stack: {
              id: "collectible",
              children: [
                {
                  component: {
                    name: "collectible",
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require("./../assets/images/tab/collectible.png"),
                  selectedIcon: require("./../assets/images/tab/collectible_active.png"),
                },
              },
            },
          },
          {
            stack: {
              id: "dashboard",
              children: [
                {
                  component: {
                    name: "dashboard",
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require("./../assets/images/tab/dashboard.png"),
                  selectedIcon: require("./../assets/images/tab/dashboard_active.png"),
                },
              },
            },
          },
          {
            stack: {
              id: "apps",
              children: [
                {
                  component: {
                    name: "apps",
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require("./../assets/images/tab/apps.png"),
                  selectedIcon: require("./../assets/images/tab/apps_active.png"),
                },
              },
            },
          },
        ],
      },
    },
  },

}

/**
 * default crete type page
 */

const changelanguage = {
  stack: {
    children: [
      {
        component: {
          name: "changelanguage",
          options: {
            topBar: {
              visible: false,
            },
            bottomTabs: {
              visible: false,
            },
            animations: {
              setRoot: {
                waitForRender: true,
              },
            },
          },
        },
      },
    ],
  },
}

const backupwallet = {
  stack: {
    children: [
      {
        component: {
          name: "AnduroBackupWallet",
          options: {
            topBar: {
              visible: false,
            },
            bottomTabs: {
              visible: false,
            },
            animations: {
              setRoot: {
                waitForRender: true,
              },
            },
          },
        },
      },
    ],
  },
}

const nativeCoin = {
  stack: {
    children: [
      {
        component: {
          name: "AnduroNativeCoins",
          options: {
            topBar: {
              visible: false,
            },
            bottomTabs: {
              visible: false,
            },
            animations: {
              setRoot: {
                waitForRender: true,
              },
            },
          },
        },
      },
    ],
  },
}


const selectcurrency = {
  stack: {
    children: [
      {
        component: {
          name: "AnduroSelectCurrency",
          options: {
            topBar: {
              visible: false,
            },
            bottomTabs: {
              visible: false,
            },
            animations: {
              setRoot: {
                waitForRender: true,
              },
            },
          },
        },
      },
    ],
  },
}

const route = {
  beforeLogin: privacy,
  login: login,
  afterLogin,
  afterPrivacy,
  changelanguage,
  gettingstarted,
  backupwallet,
  nativeCoin,
  selectcurrency
}
export default route
