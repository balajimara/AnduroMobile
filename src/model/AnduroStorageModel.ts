/* eslint-disable no-unused-vars */
export enum CachedDataTypes {
  mnemonic = "mnemonic",
  xpubkeys = "xpubkeys",
  derivationIndex = "derivationindex",
  userdata = "userdata",
  CONNECTEDSITES = "connectedSites",
  alysAddress = "alysaddress",
}
export enum StorageTypes {
  userData = "userdata",
  networkList = "networklist",
  xpubKeys = "xpubkeys",
  currentNetwork = "currentnetwork",
  alysAddress = "alysaddress",
  pageTitle = "pageTitle",
  requestType = "requestType",
  isInjector = "isInjector",
  selectedConvertNetwork = "selectedConvertNetwork",
  selectedNetworkVer= "selectedNetworkVer"
}
export interface XpubKeysModel {
  network: string
  xpub: string
  address: string
}
