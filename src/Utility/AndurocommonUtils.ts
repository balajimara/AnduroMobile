import AsyncStorage from '@react-native-async-storage/async-storage';
import networks from "../Config/network.json"

const getNativeCoins = (): string[] => {
  const nativeCoins: string[] = []
  for (let index = 0; index < networks.length; index++) {
    nativeCoins.push(networks[index].name)
  }
  return nativeCoins
}



/**
 * This function is used to get cached data from the local storage.
 * @param key -key name
 */
export const getCachedData = async (key: string): Promise<string | null> => {
  let value = await AsyncStorage.getItem(key)
  if (value != null) {
    return value
  } else {
    return JSON.stringify({
      developerMode: true,
      showFiatValue: false,
      showCollectionArt: false,
      hideBalance: false,
      selectedCurrency: "USD",
      selectedLanguage: "en",
      defaultReserveAmount: 0,
      nativeCoins: getNativeCoins(),
      isLogged: false,
      privacyPolicy: false,
    })
  }
 
}


/**
 * This function is used to set cached data from the local storage.
 * @param key -key name
 * @param value -value
 */
export const setCachedData = async (key: string, value: string) => {
  return await AsyncStorage.setItem(key, value)
}