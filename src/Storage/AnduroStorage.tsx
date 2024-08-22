import { atom } from "jotai"
import { getCachedData } from "../Utility/AndurocommonUtils"
import networks from "../Config/network.json"
import { UserDataModel } from "../model/AnduroUserDataModel"
import { NetworkListModel } from "../model/AnduroNetworkModel"
import { StorageTypes, XpubKeysModel } from "../model/AnduroStorageModel"

const getNativeCoins = (): string[] => {
  const nativeCoins: string[] = []
  for (let index = 0; index < networks.length; index++) {
    nativeCoins.push(networks[index].name)
  }
  return nativeCoins
}
export const userData = atom<UserDataModel>(
  getCachedData(StorageTypes.userData) === null
    ? {
        developerMode: true,
        showFiatValue: false,
        showCollectionArt: false,
        hideBalance: false,
        selectedCurrency: "tUSD",
        selectedLanguage: "en",
        defaultReserveAmount: 0,
        nativeCoins: getNativeCoins(),
        isLogged: false,
      }
    : JSON.parse(getCachedData(StorageTypes.userData) || "{}"),
)
export const networkList = atom<NetworkListModel[]>(networks)
export const xpubkeys = atom<XpubKeysModel[]>([])
const currentNetwork = atom<string>("")
export const mnemonic = atom<string>("")
export const alysAddress = atom<string>("")
export const menuOpen = atom<boolean>(false)
export const pageTitle = atom<any>("")
export const pageHeader = atom<boolean>(false)
export const selectedConvertNetwork = atom<any>(null)
export const requestType = atom<string>("")
export const isInjector = atom<boolean>(false)

export const getData = atom(null, (get, set, value: any): any => {
  return get(getState(value.type)) ? get(getState(value.type)) : getState(value.type).init
  // return getState(value.type).init
})
export const setData = atom(null, (get, set, value: any): any => {
  set(getState(value.type), value.data)
})

/**
 * This function is used to get state variables by name.
 * @param type -type
 */
const getState = (type: string): any => {
  if (type === StorageTypes.userData) {
    return userData
  } else if (type === StorageTypes.networkList) {
    return networkList
  } else if (type === StorageTypes.xpubKeys) {
    return xpubkeys
  } else if (type === StorageTypes.currentNetwork) {
    return currentNetwork
  } else if (type === StorageTypes.alysAddress) {
    return alysAddress
  } else if (type === StorageTypes.pageTitle) {
    return pageTitle
  } else if (type === StorageTypes.requestType) {
    return requestType
  } else if (type === StorageTypes.isInjector) {
    return isInjector
  } else if (type === StorageTypes.selectedConvertNetwork) {
    return selectedConvertNetwork
  }
}
