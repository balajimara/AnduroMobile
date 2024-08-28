import AsyncStorage from "@react-native-async-storage/async-storage"
import * as bip39 from "bip39"

/**
 * This function is used to get cached data from the local storage.
 * @param key -key name
 */
export const getCachedData = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value
  } catch (error) {
    console.log("error", error)
    return null
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

/**
 * This is the function used to generate new mnemonic key
 */
export const generateMnemonic = (): string => {
  console.log("time", new Date())
  const mnemonicval: string = bip39.generateMnemonic()
  console.log("mnemonicval", mnemonicval)
  console.log("time1", new Date())
  return mnemonicval
}
