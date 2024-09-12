export interface UserDataModel {
  developerMode: boolean
  showFiatValue: boolean
  showCollectionArt: boolean
  hideBalance: boolean
  selectedCurrency: string
  selectedLanguage: string
  walletName: string
  defaultReserveAmount: number
  nativeCoins: {name: string, networkVersion: string}[]
  isLogged: boolean
  privacyPolicy: boolean
}

export interface CurrencyDataModel {
  currency: string
}

export interface LanguageDataModel {
  language: string
  language_code: string
}

export enum UserDataTypes {
  developerMode = "developer-mode",
  fiat = "fiat",
  collectionArt = "collection-art",
  hideBalance = "hide-balance",
}
